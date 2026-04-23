# Trace: agentic_reflecting_iter1
- **Run ID:** b9c6ae40-4687-4aa3-87d2-8d860180ad5d
- **Tidspunkt:** 2026-03-22T19:25:12.563266+00:00
- **Varighet:** 134.22s
- **Input tokens:** 22757
- **Output tokens:** 7290

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
Risiko 1: Uregistrerte og ikke-godkjente bygningsendringer: Elektrisk port i carport (bruksendring til garasje), dør på vestfasade og fasadeendringer er ikke søkt om eller godkjent av kommunen. Kjøper overtar ansvaret for eventuelle byggemeldinger og konsekvenser.
  Confidence: 0.97
  Evidens: Selger opplyser om at en tidligere eier monterte elektrisk port i carporten for å gjøre det om til garasje i 2017. Arbeidet ble utført av snekker. Det er ikke fremlagt dokumentasjon på arbeidet og fasadeendringene er ikke godkjent hos kommunen.; På vestsiden av boligen er det satt inn dør (på det soverommet) som går ut. Disse endringene er ikke en del av fasadetegningene, og endringer på fasade er søknadspliktige tiltak.; Eiendommen selges slik den fremstår og selger påtar seg ikke ansvar for å eventuelt byggemelde eller få godkjent ovenstående avvik nå i ettertid. Uavhengig av reaksjonsform fra kommunen, blir dette kjøpers ansvar og risiko siden boligen selges slik den fremstår.

Risiko 2: Avvik mellom godkjente byggetegninger og faktisk planløsning: Boligens planløsning i 2. etasje er speilvendt i forhold til godkjente byggetegninger, og trappen går motsatt vei. Endringen er ikke sendt inn til kommunen.
  Confidence: 0.95
  Evidens: Det foreligger godkjente byggetegninger datert 17.01.2013. Det er ikke fullstendig samsvar mellom godkjente byggetegninger og dagens bruk.; Boligens planløsning i 2. etasje er speilvendt opp mot dagens løsning. Det kan se ut til at trappen i dagens løsning går opp motsatt fra hva byggetegningene viser. Endringen har antageligvis skjedd ifm. oppføring av boligen, hvor utbygger ikke har sendt inn revideringen til kommunen.

Risiko 3: Pergola og vedbod uten byggemelding: Det er oppført en pergola på ca. 9 m² og en vedbod under eksisterende utvendig trapp av tidligere eier, uten at dette er søkt om eller godkjent. Tiltak over 15 kvm er søknadspliktige, men også mindre tiltak kan kreve søknad.
  Confidence: 0.9
  Evidens: Det er oppført en pergola på eiendommen. Selger informerer i egenerklæring om at en tidligere eier oppførte pergolaen, og at den er på ca. 9m², samt bygget en vedbod under eksisterende utvendig trapp.; Det gjøres informeres om at mindre tiltak over 15 kvm er søknadspliktige.; Eiendommen selges slik den fremstår og selger påtar seg ikke ansvar for å eventuelt byggemelde eller få godkjent ovenstående avvik nå i ettertid.

Risiko 4: Taktekking og drenering ikke kontrollert: Tilstandsrapporten har satt TG-IU (ikke undersøkt) på taktekking og drenering grunnet snødekke. Eventuelle skjulte feil eller mangler på disse kritiske bygningsdelene er dermed ikke avdekket.
  Confidence: 0.92
  Evidens: Taktekking | Kontrollen er kun utført fra bakkenivå, samt at tak/tekking er dekket med snø. Det er derfor ikke foretatt kontroll av alle beslag, overganger eller tekking. Inspeksjon og vurdering av taktekking anbefales når forholdene gjør det mulig.; Drenering TG-IU settes på bakgrunn av at tomten er snødekt.; Drenering | Tomten er snødekt og terrengforhold er ikke kontrollert. Bortleding av vann fra taknedløp er ivaretatt.

Risiko 5: Grunnmur og fundament ikke kontrollert (TG-IU): Boligen er oppført med støpt plate på mark, og eventuelle sprekker og skader er ikke kontrollert.
  Confidence: 0.88
  Evidens: Grunnmur og fundament TG-IU settes på bakgrunn av boligen er oppført med støpt plate på mark.; Grunnmur og fundament | Boligen er oppført med støpt plate på mark. Eventuelle sprekker og skader i [ikke fullstendig tekst]

Risiko 6: Terrasse og platting ikke vurdert (TG-IU): Terrasse og platting er dekket med snø og er ikke vurdert i tilstandsrapporten. Eventuelle skjulte feil er ikke avdekket.
  Confidence: 0.87
  Evidens: Oppsummering av balkong, terrasse, platting TG-IU: TG-IU settes på bakgrunn av at terrasse og platting er dekket med snø. Terrasse og platting er ikke vurdert.

Risiko 7: TG-2 på bad: Det er registrert bom (hulrom) under flis mellom dusjsone og vask/servant, med risiko for at flis kan løsne. Dette indikerer behov for tiltak i nær fremtid.
  Confidence: 0.93
  Evidens: Våtrom: Bad TG-2 settes på bakgrunn av stedvis «bom» i flis.; Det registreres bom i en flis mellom dusjsone og vask/servant (manglende heft til underlaget) med risiko for at flis kan løsne.

Risiko 8: Elektrisk anlegg ikke kontrollert av fagmyndighet: Det er ikke utført el-kontroll av Det lokale eltilsyn eller registrert elektrovirksomhet de siste 5 år. Det er heller ikke fremlagt samsvarserklæring for alle arbeider utført etter 01.01.1999.
  Confidence: 0.9
  Evidens: Er det foretatt kontroll av det lokale el-tilsyn eller utført utvidet el-kontroll i løpet av de siste 5 år? Nei; Tilstandsrapporten beskriver byggverkets tekniske tilstand. Det er ikke foretatt kontroll av de elektriske installasjonene (el-takst) selv om bygningssakkyndig kan ha knyttet noen kommentarer til elanlegget ut i fra helt enkle vurderingskriterier. Siden elanlegget ikke er kontrollert er det sannsynlig at det siden kan avdekkes avvik fra dagens forskriftskrav.; På genrelt grunnlag vil det alltid anbefales en EL-kontroll utført av ny eier.

Risiko 9: Ingen radonmåling utført: Det er ikke utført radonmåling på eiendommen, og kjøper overtar ansvaret for eventuelle utbedringstiltak fra overtakelsesdagen.
  Confidence: 0.88
  Evidens: Det er ikke utført radonmåling og det er heller ikke krav til dette, for mer informasjon vedrørende radon se www.dsa.no. Kjøper overtar fra overtakelsesdagen ansvaret for eventuelle utbedringstiltak som senere må igangsettes og betales.; Vet du om det er gjort radonmåling på eiendommen, enten av deg eller tidligere eiere? Nei, ikke som jeg kjenner til

Risiko 10: Planlagt utbygging og økt trafikk i området: Det foreligger en vedtatt reguleringsplan for utbygging av boliger på gbnr. 96/22 (Bekkedal), vedtatt februar 2021. Eksisterende vei er ikke dimensjonert for trafikk inn til det nye boligfeltet, og en mulig ringvei kan gå gjennom sameiets eksisterende vei.
  Confidence: 0.95
  Evidens: Det foreligger reguleringsbestemmelser for detaljregulering av gbnr. 96/22 – Bekkedal. Denne ble vedtatt av kommunestyret i februar 2021, og formålet med planen er å legge til rette for utbygging av boliger.; Eksisterende vei er ikke dimensjonert for trafikk inn til det nye boligfeltet. En av de to treseene som det kan være aktuelt å bygge er en ringvei med trasé på den eksisterende veien gjennom sameiet.; Det må påregnes byggeaktivitet og byggestøy ifm. fremtidig utbygging av området/ledige tomter. Videre må det påregnes økt trafikk når utbyggingsområdene står ferdigstilt.

Risiko 11: Hensynssone H110 – Nedslagsfelt drikkevann: Eiendommen ligger innenfor hensynssone H110 (nedslagsfelt for drikkevann), noe som medfører restriksjoner på bygge- og anleggsvirksomhet, lagring og andre tiltak som kan forurense drikkevannet.
  Confidence: 0.9
  Evidens: Eiendommen berøres av hensynssone H110: Nedslagsfelt drikkevann.; Sikringssonen omfatter drikkevannskildene Hurdalssjøen, Tisjøen, Rødtjern og Damtjern med nedslagsfelt. Forurensning direkte i drikkevann/bygge- og anleggsvirksomhet, lagring og andre tiltak på land som kan medføre skadelig avrenning og forurensning i drikkevann – er forbudt.; Alle tiltak som kan få konsekvenser for drikkevannskvaliteten innenfor Hurdalssjøen og Tisjøen hensynssoner H110 skal utarbeide en konsekvensanalyse.

Risiko 12: Legalpant og solidaransvar i sameiet: Øvrige seksjonseiere har lovbestemt panterett (utinglyst pant) i seksjonen for krav mot eieren som følger av sameieforholdet for inntil 2G. Sameierne er solidarisk ansvarlig for sameiets økonomi.
  Confidence: 0.85
  Evidens: Sameierne er solidarisk ansvarlig for sameiets økonomi. Andre seksjonseierne har lovbestemt panterett (utinglyst pant) i seksjonen for krav mot eieren som følger av sameieforholdet for inntil 2 G (folketrygdens grunnbeløp).; Rentenivå, eventuelt nye låneopptak, endret nedbetalingsplan, opphør av avdragsfri periode, investeringer, vedlikehold, rehabilitering, inngåelse av nye tjenesteavtaler og årsmøtevedtak kan påvirke felleskostnadenes størrelse.

Risiko 13: Bindende TV/internett-avtale med 3 års bindingstid følger seksjonen: Kjøper overtar en kollektivavtale med Viken Fiber med bindingstid til desember 2027, til en kostnad på kr 609,- per måned. Kjøper kan ikke si opp denne avtalen i bindingstiden.
  Confidence: 0.92
  Evidens: Det er inngått avtale med Viken Fiber om leveranse av TV og internett til denne seksjonen. Avtalen gjelder i tre år fra desember 2024, og følger automatisk med salget.; Denne avtalen med bindingstid følger seksjonen.; TV og internett: kr 609,- per måned – Leveres av Viken Fiber gjennom en kollektiv avtale som følger seksjonen. Avtalen har bindingstid i 3 år fra 1. desember 2024.

Risiko 14: Sameiet mangler felles bygningsforsikring: Sameiet Bekkedalshøgda har ikke felles bygningsforsikring, noe som betyr at den enkelte seksjonseier selv må sørge for forsikring av sin del av bygget.
  Confidence: 0.9
  Evidens: Sameiet har ikke felles bygningsforsikring.; Eier må selv dekke kostnader forbundet med eget strømforbruk, forsikring av innbo og løsøre samt andre kostnader som ikke dekkes av felleskostnadene.

Risiko 15: Planlagt oppgradering av lekeplass – usikker finansiering: Sameiet har vedtatt å planlegge oppgradering av lekeplass med nye lekestativer. Målet er ekstern finansiering, men fremtidig vedlikehold vil uansett påfalle seksjonseierne.
  Confidence: 0.75
  Evidens: Det er vedtatt å planlegge en oppgradering av sameiets lekeplass med nye lekestativer. Styret har fått fullmakt til å utrede og søke om midler for prosjektet. Målet er at tiltaket skal fullfinansieres gjennom eksterne tilskudd, slik at det ikke medfører økte kostnader for seksjonseierne, med unntak av fremtidig vedlikehold.

Risiko 16: Manglende dokumentasjon på bad/våtrom: Selger kjenner ikke til om tettesjikt, membran eller sluk ble fornyet eller oppgradert, og det finnes ingen dokumentasjon på hvordan bad/våtrom er bygget opp.
  Confidence: 0.85
  Evidens: Vet du om tettesjikt, membran eller sluk ble fornyet eller oppgradert? Nei, ikke som jeg kjenner til; Vet du om det finnes dokumentasjon på hvordan bad/våtrom er bygget opp? Nei, ikke som jeg kjenner til

Risiko 17: Risiko for overbeheftelse og manglende pantefrafall: Dersom eiendommen blir overbeheftet i salgsprosessen og kreditorene ikke gir nødvendig pantefrafall, kan handelen ikke gjennomføres.
  Confidence: 0.78
  Evidens: Dersom eiendommen skulle bli overbeheftet i salgsprosessen, det vil si at summen av fremtidige tinglyste heftelser overstiger den forventede salgssummen, er det en forutsetning for at handel skal kunne gjennomføres at kreditorene gir nødvendig pantefrafall. Dersom pantefrafall ikke oppnås vil handel ikke kunne gjennomføres.; Skulle det bli tinglyst flere utleggspant på eiendommen, kan handel bare gjennomføres forutsatt at også eventuelle fremtidige kreditorer aksepterer å slette sitt pant uten å få full innfrielse av det underliggende kravet.

Risiko 18: Grunnforurensning og kulturminner kan forekomme uten å være registrert: Matrikkelen viser ingen registrert grunnforurensning eller kulturminner, men dette utelukker ikke at slike forhold faktisk eksisterer på eiendommen.
  Confidence: 0.7
  Evidens: Grunnforurensning som ikke er registrert kan dermed allikevel forekomme på eiendommen.; Kulturminner som ikke er registrert i Matrikkelen kan dermed allikevel forekomme på eiendommen.

Dokumentkontekst:
[d002_Salgsoppgave | Side [1]]
a overtakelsesdagen ansvaret for eventuelle
utbedringstiltak som senere må igangsettes og betales.
Heftelser
Følgende tinglyste heftelser følger eiendommen ved salg, og ved inngivelse av bud vil disse
være akseptert av budgiver/ kjøper:
2015/ 590447‑2/ 200 30.06.2015 BEST. OM ADKOMSTRETT
RETTIGHETSHAVER: KNR: 3240 GNR: 96 BNR: 609
RETTIGHETSHAVER: KNR: 3240 GNR: 96 BNR: 614
Bestemmelse om lekeplass
Bestemmelse om renovasjon
GJELDER DENNE REGISTERENHETEN MED FLERE
Sameiet "Bekkedalshøgda" (gnr. 96, bnr.

---

[d002_Salgsoppgave | Side [1]]
tinglyst skjøte uten andre heftelser enn de som det er
avtalt at følger med i handelen. Gjennomføring av handelen er betinget av det ikke er tinglyst
heftelser som ikke lar seg innfri/ slette.
Dersom eiendommen skulle bli overbeheftet i salgsprosessen, det vil si at summen av fremtidige
17

## Side 18

tinglyste heftelser overstiger den forventede salgssummen, er det en forutsetning for at handel
skal kunne gjennomføres at kreditorene gir nødvendig pantefrafall. Dersom pantefrafall ikke
oppnås vil handel

---

[d002_Salgsoppgave | Side [1]]
rsel, offentlige vedtak eller lignende?
◆ Ja
Er kjent med at det foreligger detaljregulering for området, som omhandler boligbebyggelse.
25. Vet du om det finnes kommunale pålegg, heftelser eller krav knyttet til eiendommen eller boligen?
◆ Nei, ikke som jeg kjenner til
26. Vet du om boligen eller eiendommen har blitt endret eller bygget ut etter opprinnelig byggeår, enten av deg
eller tidligere eiere?
◆ Ja
Opplysninger fra tidligere eier
Tidligere eier opplyser at selgeren de kjøpte av hadde satt inn en

---

[d002_Salgsoppgave | Side [1]]
◆ Nei, ikke som jeg kjenner til
36. Vet du om det finnes planer, vedtak eller forslag som kan føre til økte utgifter, som festeavgift, fellesutgifter,
fellesgjeld eller kommunale avgifter?
◆ Nei, ikke som jeg kjenner til
Generelt
37. Har boligen garasje eller øvrige tilleggsbygninger?
◆ Ja
Vet du om det feil eller skader ved garasje eller øvrige tilleggsbygninger?
◆ Nei, ikke som jeg kjenner til
38. Vet du om det er gjort arbeid på eiendommen som ikke er nevnt i de andre spørsmålene?
◆ Ja
Faglært

---

[d002_Salgsoppgave | Side [1]]
tvendig trapp.
Det gjøres informeres om at mindre tiltak over 15 kvm er søknadspliktige.
Eiendommen selges slik den fremstår og selger påtar seg ikke ansvar for å eventuelt
byggemelde eller få godkjent ovenstående avvik nå i ettertid. Uavhengig av reaksjonsform fra
kommunen, blir dette kjøpers ansvar og risiko siden boligen selges slik den fremstår.
Vei, vann og avløp
Eiendommen er tilknyttet offentlig vann og avløp. Alle eiendommer som er tilknyttet offentlig
vann og avløp har private stikkledninger, som

---

[d002_Salgsoppgave | Side [1]]
EGISTERENHETEN MED FLERE
Sameiet "Bekkedalshøgda" (gnr. 96, bnr. 615) har bruksrett til fellesareal på eiendommene gnr. 96,
bnr. 609 og gnr. 96, bnr. 614. Fellesarealet er avsatt til adkomstvei, lekeplass og renovasjon, som
vist på situasjonskartet.
2015/ 590447‑1/ 200 30.06.2015 SEKSJONERING
Opprettet seksjoner:
SNR: 10
Formål: Bolig
Tilleggsdel: Carport og tilhørende bod.
Sameiebrøk: 126/ 2152
Selger bærer risikoen for at kjøper kan få tinglyst skjøte uten andre heftelser enn de som det er
avtalt at

---

[d002_Salgsoppgave | Side [1]]
 er markert som fiktive brukes i stedet oppgitt areal hvis
dette finnes i Matrikkelen. Ambita er ikke ansvarlig for tap som oppstår som følge av feil i Eiendomsutskriften.
Ikke tinglyst eierforhold:
Ingen ikke tinglyste eierforhold registrert på matrikkelenheten.
Kulturminner:
Ingen kulturminner registrert på matrikkelenheten.
I Matrikkelen fremgår kun informasjon om fredet kulturminne der det er registrert i Riksantikvarens arkiv på eiendom og bygning.
Kulturminner som ikke er registrert i Matrikkelen kan

---

[d002_Salgsoppgave | Side [1]]
kke som jeg kjenner til
33. Vet du om det finnes skaderapporter, tilstandsvurderinger, boligsalgsrapporter eller om det er utført målinger
for boligen?
◆ Nei, ikke som jeg kjenner til
34. Vet du om noe i nabolaget som kan være plagsomt eller ubehagelig for kjøperen?
◆ Nei, ikke som jeg kjenner til
6
96

## Side 97

35. Vet du om du selv eller sameiet/borettslaget/laget/selskapet er innblandet i uenigheter eller konflikter rundt
eiendommen?
◆ Nei, ikke som jeg kjenner til
36. Vet du om det finnes planer,

---

[d002_Salgsoppgave | Side [1]]
Opplysninger fra tidligere eier (til orientering) Tidligere eier opplyste at de som solgte
de boligen satt opp en pergola i hagen på ca. 9 m², samt bygget en vedbod under den eksisterende utvendige
trappen mot hagen.
8. Vet du om det er, eller har vært, skjevheter eller setningsskader i boligen, støttemur, terrasse eller lignende?
◆ Nei, ikke som jeg kjenner til
Drenering, fukt og lekkasje
9. Vet du om det er, eller har vært, feil eller skader med dreneringen?
◆ Nei, ikke som jeg kjenner til
10. Vet du om

---

[d002_Salgsoppgave | Side [1]]
ed salg av eiendom.
fastmonterte hyller og løs eller fastmontert kjøkkenøy.
21. SAMTLIGE NØKLER til eiendommen som selger er i besittelse
8. MARKISER, PERSIENNER og annen type innvendig og
av skal overleveres kjøper på overtakelsen, herunder nøkler
utvendig solskjerming, gardinoppheng,lamellgardiner
til eventuelle boder, uthus, garasjeportåpner el. Låses boder,
og liftgardiner medfølger.
uthus el. med hengelås, skal lås og nøkler til disse medfølge.
9. AVTREKKSVIFTER av alle slag, samt fastmonterte

---

[d002_Salgsoppgave | Side [1]]
æring at den de kjøpte boligen av
fikk satt opp utvendige lykter på tomten.
Vet du om bruken av eiendommen eller området rundt kan endres av foreslåtte eller vedtatte
reguleringsplaner, nabovarsel, offentlige vedtak eller lignende?
Ja.
Er kjent med at det foreligger detaljregulering for området, som omhandler boligbebyggelse.
Vet du om boligen eller eiendommen har blitt endret eller bygget ut etter opprinnelig byggeår,
enten av deg eller tidligere eiere?
Ja.
21

## Side 22

Opplysninger fra tidligere

---

[d002_Salgsoppgave | Side [1]]
il
29. Vet du om det har vært flom, ras, skred eller lignende på eiendommen, eller om den ligger i et fareområde?
◆ Nei, ikke som jeg kjenner til
30. Har eiendommen utleiedel, for eksempel en leilighet, hybel eller lignende?
◆ Nei, ikke som jeg kjenner til
31. Består boligen av flere, selvstendige boenheter?
◆ Nei, ikke som jeg kjenner til
32. Vet du om det er gjort radonmåling på eiendommen, enten av deg eller tidligere eiere?
◆ Nei, ikke som jeg kjenner til
33. Vet du om det finnes skaderapporter,

---

[d002_Salgsoppgave | Side [1]]
eksjonseier. Dette dekker vedlikehold av
fellesarealer og øvrige fellesutgifter.
Ved feietilsyn må eier stille stige til disposisjon. Da enten ved å låne av nabo eller kjøpe inn selv.
8
98

## Side 99

Bolig selges med boligselgerforsikring
Selger har kjøpt Fremtind boligselgerforsikring.
Boligselgerforsikringen dekker mangler som selger er ansvarlig for etter avhendingsloven,
med de unntakene som følger av forsikringsvilkårene.
Hvis du oppdager noe du mener kan være en mangel, må du reklamere til Fremtind

---

[d002_Salgsoppgave | Side [1]]
«som den er», og selgers ansvar utover det konkret avtalte er da begrenset
etter avhendingsloven § 3‑9, første ledd andre setning.
Avhendingsloven § 3‑3 andre ledd fravikes, og hvorvidt boligens arealsvikt utgjør en mangel
vurderes etter avhendingsloven § 3‑8.
En forutsetning for salget er at skjøtet for eiendommen tinglyses på kjøper. Interessenter og
kjøper må godta at selger og megler bruker elektronisk kommunikasjon i salgsprosessen.
I tråd med eiendomsmeglingsforskriften vil informasjon om

---

[d002_Salgsoppgave | Side [1]]
r med dreneringen?
◆ Nei, ikke som jeg kjenner til
10. Vet du om det er, eller har vært, fukt, råte eller vanninntrengning i underetasje, kjeller eller krypkjeller?
◆ Nei, ikke som jeg kjenner til
11. Vet du om det er gjort arbeid med drenering, enten av deg eller tidligere eiere?
◆ Nei, ikke som jeg kjenner til
12. Vet du om det er, eller har vært, fukt, sopp eller råteskader i boligen/sameiet/borettslaget?
◆ Nei, ikke som jeg kjenner til
13. Vet du om det er, eller har vært, skadedyr eller sjenerende

---

[d002_Salgsoppgave | Side [1]]
g bygning.
Kulturminner som ikke er registrert i Matrikkelen kan dermed allikevel forekomme på eiendommen. Merk at disse opplysningene
ikke omfatter informasjon om eventuell verning / verneklasse for eiendom eller bygningsmasse.
Grunnforurensing:
Ingen grunnforurensing registrert på matrikkelenheten.
I Matrikkelen fremgår kun informasjon om grunnforurensning som eventuelt er registrert på eiendommen i
forurensningsmyndighetenes arkiver. Grunnforurensning som ikke er registrert kan dermed allikevel

---

[d002_Salgsoppgave | Side [1]]
dvendig pantefrafall. Dersom pantefrafall ikke
oppnås vil handel ikke kunne gjennomføres. Skulle det bli tinglyst flere utleggspant på
eiendommen, kan handel bare gjennomføres forutsatt at også eventuelle fremtidige kreditorer
aksepterer å slette sitt pant uten å få full innfrielse av det underliggende kravet.
Legalpant
Sameierne er solidarisk ansvarlig for sameiets økonomi. Andre seksjonseierne har lovbestemt
panterett (utinglyst pant) i seksjonen for krav mot eieren som følger av sameieforholdet for

---

[d002_Salgsoppgave | Side [1]]
r. Grunnforurensning som ikke er registrert kan dermed allikevel forekomme på eiendommen.
Klage på vedtak i Matrikkelen:
Ingen klage registrert på matrikkelenheten.
Utskrift fra eiendomsregisteret foretatt 22.01.2026 09:58 – Sist oppdatert 22.01.2026 09:58
Utskriften er levert av: Ambita as, Postboks 2923 Solli, 0230 Oslo. (Org.nr. 945 811 714) Side 1 av 11
137

## Side 138

Gårdsnummer 96, Bruksnummer 615, Seksjonsnummer 10 i 3240 EIDSVOLL kommune
Forretninger:
Type Dato Rolle Matrikkel

---

[d002_Salgsoppgave | Side [1]]
ader knyttet til ildsted eller pipe?
◆ Nei, ikke som jeg kjenner til
4
94

## Side 95

20. Vet du om det er gjort arbeid på ildsted eller pipe, enten av deg eller tidligere eiere?
◆ Nei, ikke som jeg kjenner til
21. Vet du om det finnes oljetank på eiendommen?
◆ Nei, ikke som jeg kjenner til
22. Vet du om det er, eller har vært, feil eller skader på det elektriske anlegget?
◆ Nei, ikke som jeg kjenner til
23. Vet du om det er gjort arbeid på det elektriske anlegget, enten av deg eller tidligere eiere?
◆

---

[d002_Salgsoppgave | Side [1]]
ra kr 4 500, forretningsfører fra kr 5 000, oppgjørshonorar kr 9 900,
registersøk/ screening kr 1950, tilretteleggingsgebyr kr 17 900, markedspakke kr 22 900, honorar
for visning/ overtakelse kr 3 500, servitutter pr. stk. kr 260, panterett med urådighet ‑ Statens
Kartverk kr 545 og tingl. hjemmelserklæring ‑ Statens Kartverk kr 545. Dersom eiendommen ikke
blir solgt skal selger betale kr 15 000 i tillegg til utlegg og faste vederlag.
EiendomsMegler 1 Østlandet AS har samarbeid med følgende foretak som

---

[d002_Salgsoppgave | Side [1]]
ende vurderinger finnes i hovedrapporten.
Utvidet el-kontroll
På genrelt grunnlag vil det alltid anbefales en EL-kontroll utført av ny eier.
Bygningsdeler med TG2
Bygningsdel Oppsummert begrunnelse for tilstandsgrad
Våtrom: Bad TG-2 settes på bakgrunn av stedvis «bom» i flis.
Bygningsdeler med TG-IU
Bygningsdel Oppsummert begrunnelse for tilstandsgrad
Drenering TG-IU settes på bakgrunn av at tomten er snødekt.
Grunnmur og fundament TG-IU settes på bakgrunn av boligen er oppført med støpt plate på

---

[d002_Salgsoppgave | Side [1]]
kt, f.eks. fordi en del av
bygget ikke har vært tilgjengelig for inspeksjon. Disse delene kan dermed ha feil eller mangler
som ikke er avdekket.
Tilstandsrapporten beskriver byggverkets tekniske tilstand. Det er ikke foretatt kontroll av de
elektriske installasjonene (el‑takst) selv om bygningssakkyndig kan ha knyttet noen kommentarer
til elanlegget ut i fra helt enkle vurderingskriterier. Siden elanlegget ikke er kontrollert er det
sannsynlig at det siden kan avdekkes avvik fra dagens forskriftskrav og

---

[d002_Salgsoppgave | Side [1]]
dning inkl. vask med blandebatteri i 2025.
Er det påvist avvik i krav om høydeforskjell på tettesjikt/fall til sluk? Nei
Er det fare for at lekkasjevann fra installasjoner i rommet ikke når sluket? Nei
Er vindu eller dør plassert i våtsone (utsatt for vannsprut)? Nei
Nullpunkt laser: 18,5
Er det gjennomføringer i vegg/tak mot kald sone? Nei
Er det registrert riss, sprekker i fuger, bom (hulrom) under flis? Ja
Er det påvist tegn på sopp/råteskader/fuktskader på overflater eller skadedyr? Nei
Er det

---

[d002_Salgsoppgave | Side [1]]
es en høydeforskjell på ca 3,5 cm. Det registreres
ikke tegn til skader eller avvik utover normal slitasje. Det registreres bom i en flis mellom
dusjsone og vask/ servant (manglende heft til underlaget) med risiko for at flis kan løsne.
TGIU ‑ Ikke undersøkt/ utilgjengelig:
‑ Drenering | Tomten er snødekt og terrengforhold er ikke kontrollert. Bortleding av vann fra
10

## Side 11

taknedløp er ivaretatt.
‑ Grunnmur og fundament | Boligen er oppført med støpt plate på mark. Eventuelle sprekker og
skader i

---

[d002_Salgsoppgave | Side [1]]
ig lufting av konstruksjonen? Nei
Det er etablert god lufting av konstruksjonen.
Er det tegn til fukt fra lekkasjer eller kondensering på innvendige overflater? Nei
Boligen har full takhøyde i 2. Etasje- det registreres ikke tegn til skader eller fukt/lekkasjer på
innvendige overflater.
Er det tegn til sopp/råte eller spor etter treskadeinnsekt? Nei
Er det tegn på utilstrekkelig tetting rundt gjennomføringer i konstruksjonen? Ikke kontrollerbart
Det er ikke kontrollert tetting rundt gjennomføringer pga

---

[d002_Salgsoppgave | Side [1]]
tført arbeid på tak, yttervegg, vindu, dører eller annen fasade, enten av deg eller tidligere
eiere?
◆ Nei, ikke som jeg kjenner til
6. Vet du om det er, eller har vært, feil eller skader på vinduene, som for eksempel kondens, fuktskader eller
vanninntrengning? Eller er noen av vinduene i boligen punktert?
◆ Nei, ikke som jeg kjenner til
7. Vet du om det er utført arbeid på garasje eller øvrige tilleggsbygninger, av enten deg eller tidligere eiere?
◆ Ja
Faglært arbeid:
2
92

## Side 93

1.
Hvilket år ble

---

[d002_Salgsoppgave | Side [1]]
omføringer i vegg/tak mot kald sone? Nei
Er det registrert riss, sprekker i fuger, bom (hulrom) under flis? Nei
Er det påvist tegn på sopp/råteskader/fuktskader på overflater eller skadedyr? Nei
Gustav Granhaugs veg 85 A, 2070 Råholt 27 av 30
86

## Side 87

Er det registrert knirk i gulvet? Ikke aktuelt (gjelder ikke flislagt gulv)
Oppsummering av overflater TG-1
Fallforhold til sluk, og høydeforskjell mellom topp sluk og topp membran ved dør, er tilfredsstillende.
Det måles en høydeforskjell på ca

---

[d002_Salgsoppgave | Side [1]]
iggende kledning
Boligen er oppført med liggende kledning som er overflatebehandlet hvit.
Er det gjennomført arbeider etter opprinnelig byggeår? Nei
Eier opplyser om at det ikke er utført arbeid utover normal vedlikehold som vask.
Er det påvist skjevheter/riss/sprekker/setninger? Nei
Er det påvist fuktskade/sopp/råte eller slitt overflate? Nei
Er det liten eller ingen lufting av kledningen? Nei
Er det manglende musetetting i nedkant av kledning/plater? Nei
Oppsummering av yttervegger TG-1
Det registreres

---

[d002_Salgsoppgave | Side [1]]
ervant(manglende heft til underlaget) med
risiko for at flis kan løsne.
Membran, tettesjikt og sluk
Er det manglende mulighet for renhold og inspeksjonsmulighet av sluk? Nei
Type sluk Plast
Sluk av typen plast.
Er det påvist avvik ved utførelsen av membran/tettesjikt/klemring rundt sluk? Nei
Er det påvist tegn på utettheter f.eks. rundt rørføringer eller andre overganger? Nei
Er det påvist feil utførelse, feil materialvalg, eller skader i tettesjikt med fare for fuktskade? Nei
Har membran/tettesjikt nådd

---

[d002_Salgsoppgave | Side [1]]
 av dette. Den bygningssakkyndige skal også gi et sjablongmessig anslag på
hva det vil koste å utbedre rom eller bygningsdeler som gis tilstandsgrad 3.
Takstrapporten Kunden/rekvirenten skal lese gjennom dokumentet før bruk og gi tilbakemelding til den
bygningssakkyndige hvis det finnes feil/mangler som bør rettes opp. Rapporten kan ikke være eldre enn 1
år på det tidspunkt kjøperen binder seg til å kjøpe boligen. Ved utgått rapport bør bygningssakkyndig
kontaktes for ny befaring og oppdatering.
Supertakst

---

[d002_Salgsoppgave | Side [1]]
værpåkjenninger med videre forverrer tilstanden gradvis. Husk at alle
bygningsdeler og tekniske installasjoner har begrenset levetid. Forhold som kunne vært oppdaget på
visning, er normalt ikke en mangel.
Det er viktig at du setter deg grundig inn i alle salgsdokumentene, herunder salgsoppgave,
tilstandsrapport og selgers egenerklæring. Du anses å være kjent med forhold som er tydelig
beskrevet i salgsdokumentene. Forhold som er beskrevet i salgsdokumentene kan ikke gjøres gjeldende
som mangler. Dette

---

[d002_Salgsoppgave | Side [1]]
ggemåte i salgsoppgaven.
Interessenter oppfordres spesielt til å undersøke disse forholdene som er gitt TG2 og 3
nærmere, da gitte tilstandsgrader her er et konkret uttrykk for alder/ slitasje/ ødeleggelser/
konsekvenser som innebærer kostnader til utbedring. Kjøper må innta disse vurderingene og
medfølgende utbedringskostnader i sin kjøpsbeslutning, jf. avhl. § 3‑10. Det samme gjelder
eventuelt andre opplysninger om kjente risikofaktorer, som for eksempel ufaglært arbeid,
begrenset kontroll av det

---

[d002_Salgsoppgave | Side [1]]
p/råteskader/fuktskader på overflater eller skadedyr? Nei
Er det registrert knirk i gulvet? Ikke aktuelt (gjelder ikke flislagt gulv)
Oppsummering av overflater TG-2
Fallforhold til sluk, og høydeforskjell mellom topp sluk og topp membran ved dør, er tilfredsstillende.
Det måles en høydeforskjell på ca 3,5cm.
Det registreres ikke tegn til skader eller avvik utover normal slitasje.
Det registreres bom i en flis mellom dusjsone og vask/servant(manglende heft til underlaget) med
risiko for at flis kan

---

[d002_Salgsoppgave | Side [1]]
-2
slitasje eller nedsatt funksjon. Graden gis når bygningsdelen trenger vedlikehold eller
tiltak i nær fremtid. Graden skal også brukes når delen er gammel og det er grunn til å
varsle om faren for skader på grunn av alderen, eller når det er grunn til å overvåke delen
spesielt på grunn av fare for større skader eller følgeskader
Tilstandsgrad 3: Store eller alvorlige avvik
Bygningsdelen har kraftige symptomer på forhold som man må regne med trenger
TG-3
utbedring straks eller innen kort tid. Graden skal

---

[d002_Salgsoppgave | Side [1]]
okumentasjon på faglig god utførelse. Det er ingen merknader til delen.
Tilstandsgrad 1: Mindre eller moderate avvik
Bygningsdelen skal bare ha normal slitasje, og strakstiltak skal ikke anses som nødvendig.
TG-1
Graden kan også brukes når delen er ny, men der dokumentasjon på faglig god utførelse
mangler.
Tilstandsgrad 2: Bygningsdelen har vesentlige avvik
Bygningsdelen skal enten ha feil utførelse, en skade eller symptomer på skade, sterk
TG-2
slitasje eller nedsatt funksjon. Graden gis når bygningsdelen

---

[d002_Salgsoppgave | Side [1]]
.
‑ Taktekking | Kontrollen er kun utført fra bakkenivå, samt at tak/ tekking er dekket med snø. Det
er derfor ikke foretatt kontroll av alle beslag, overganger eller tekking. Inspeksjon og vurdering
av taktekking anbefales når forholdene gjør det mulig.
Opplistingen over er ikke uttømmende og du oppfordres til å lese og sette deg grundig inn i alt
salgsmateriell.
For ordens skyld nevner vi at TGIU står for tilstandsgrad ikke undersøkt, f.eks. fordi en del av
bygget ikke har vært tilgjengelig for

---

[d002_Salgsoppgave | Side [1]]
mperatur, plattinger og gjerder- samt beistet to strøk i 2025
Er det synlig tegn på skjevheter/konstruksjonssvikt? Nei
Er det tegn på sopp/råteskader i treverk eller skader i betong? Nei
Er balkong / terrassen tekket? Ja
Er det ufullstendig/manglende tettesjikt ved oppkant mot vegg og dør? Nei
Oppsummering av balkong, terrasse, platting TG-IU
TG-IU settes på bakgrunn av at terrasse og platting er dekket med snø.
Terrasse og platting er ikke vurdert.
Anbefalte tiltak / ytterligere undersøkelser

---

[d002_Salgsoppgave | Side [1]]
Vaskeromsinnredning
Vet du om tettesjikt, membran eller sluk ble fornyet eller oppgradert?
◆ Nei, ikke som jeg kjenner til
3. Vet du om det finnes dokumentasjon på hvordan bad/våtrom er bygget opp?
◆ Nei, ikke som jeg kjenner til
4. Vet du om det er, eller har vært, vannlekkasje eller andre typer feil eller skader på tak, yttervegg, vinduer, dører,
garasje, tilleggsbygninger eller lignende?
◆ Nei, ikke som jeg kjenner til
5. Vet du om det er utført arbeid på tak, yttervegg, vindu, dører eller annen fasade,

---

[d002_Salgsoppgave | Side [1]]
 det synlige avvik på beslag/inndekning rundt pipe og andre Ikke kontrollert
takgjennomføringer?
Har tekkingen nådd en alder som gir økt risiko for skader eller følgeskader? Nei
Oppsummering av taktekking TG-IU
Kontrollen er kun utført fra bakkenivå, samt at at tak/tekking er dekket med snø. Det er derfor ikke
foretatt kontroll av alle beslag, overganger eller tekking.
Gustav Granhaugs veg 85 A, 2070 Råholt 14 av 30
73

## Side 74

Anbefalte tiltak / ytterligere undersøkelser anbefales
Inspeksjon og

---

[d002_Salgsoppgave | Side [1]]
anger i året (januar og juni), og ikke månedlig. Halvårlig beløp er kr 3 654 for TV/ Internett, og kr
1 000 for felleskostnader. Sameiet har ingen fellesgjeld, og styret har vurdert at det ikke er
behov for å øke felleskostnadene for 2026.
Eier må selv dekke kostnader forbundet med eget strømforbruk, forsikring av innbo og løsøre
samt andre kostnader som ikke dekkes av felleskostnadene. Sameiet har ikke felles
bygningsforsikring.
Lånebetingelser fellesgjeld:
Sameiet har ingen lån registrert.
Andel

---

[d002_Salgsoppgave | Side [1]]
Avtalen gjelder i tre år fra desember 2024, og følger automatisk med salget. Det betales kr 3 654
to ganger i året.
Sameie
Sameiet Bekkedalshøgda
Om sameiet
Sameiet Bekkedalshøgda er et eierseksjonssameie bestående av 16 boligseksjoner. Sameiet har
ikke fellesgjeld.
Det er vedtatt å planlegge en oppgradering av sameiets lekeplass med nye lekestativer. Styret
har fått fullmakt til å utrede og søke om midler for prosjektet. Målet er at tiltaket skal
fullfinansieres gjennom eksterne tilskudd, slik at det ikke

---

[d002_Salgsoppgave | Side [1]]
en vannlekkasje og sørge for at lekkasjen stopper.
9
99

## Side 100

Megleropplysninger Sameiet Bekkedalgshøgda

Beløp felleskostnader:
Kontingent/felleskostnader for denne seksjonen er per dags dato 1000 kroner per
halvår.
Kontingent/felleskostnader faktureres per halvår (januar og juni).

Hva er inkludert i felleskostnadene?
Kontingent/felleskostnader dekker snørydding og strøing av sameiets private veg,
strøm til lys på sameiets private veg, kostnader til drift og vedlikehold av

---

[d002_Salgsoppgave | Side [1]]
 seksjonen for krav mot eieren som følger av sameieforholdet for inntil
2 G (folketrygdens grunnbeløp). Rentenivå, eventuelt nye låneopptak, endret nedbetalingsplan,
opphør av avdragsfri periode, investeringer, vedlikehold, rehabilitering, inngåelse av nye
tjenesteavtaler og årsmøtevedtak kan påvirke felleskostnadenes størrelse.
TV/ Internett/ Bredbånd
Det er inngått avtale med Viken Fiber om leveranse av TV og internett til denne seksjonen.
Avtalen gjelder i tre år fra desember 2024, og følger automatisk

---

[d002_Salgsoppgave | Side [1]]
betingelser fellesgjeld:
Sameiet har ingen lån registrert.
Andel Fellesformue
Kr 4 281 datert 31.12.2025.
14

## Side 15

Kommunale avgifter
Kommunale avgifter: Kr 16 243 pr 2025
De kommunale avgiftene inkluderer renovasjon, feiing, vann‑ og avløpsavgifter. Den totale årlige
kostnaden vil variere etter eget forbruk. Dersom det er installert vannmåler, så vil estimert
forbruk variere fra kommune til kommune, i gjennomsnitt ca. 50m³ pr. person i vannforbruk.
Avgiften er en kombinasjon av forskuddsbetaling

---

[d002_Salgsoppgave | Side [1]]
ølger seksjonen. Årsmøtet har bestemt at avtalen skal
faktureres seksjonseierne to ganger i året (januar og juni) med forskuddsbetaling
for de påfølgende seks månedene. Avtalen har fra og med 1. februar 2026 en
månedspris på 609 kroner per boenhet. Hollstedt har betalt for januar til juni
2026 og er for øvrig a jour med kontingenter/felleskostnader.

Har sameie felles lån?
Sameiet har per dags dato ikke felles lån.

Foreligger det husordensregler?
Det foreligger per dags dato ikke ordensregler, men

---

[d002_Salgsoppgave | Side [1]]
000,‑. Dette dekker:
‑ Snørydding og strøing av sameiets private vei
‑ Strøm til fellesarealer
‑ Drift og vedlikehold av pumpekum og lekeplass
‑ Forsikring for pumpeanlegg og styreansvar
TV og internett: kr 609,‑ per måned
‑ Leveres av Viken Fiber gjennom en kollektiv avtale som følger seksjonen. Avtalen har
bindingstid i 3 år fra 1. desember 2024.
Vær oppmerksom på at felleskostnadene og avgiften for TV/ internett faktureres forskuddsvis to
ganger i året (januar og juni), og ikke månedlig. Halvårlig beløp

---

[d002_Salgsoppgave | Side [1]]
 ut bindingstiden. Les mer på Regjeringens
nettsider.
41. Har du andre opplysninger om boligen eller eiendommen, utover det du har svart?
◆ Ja
7
97

## Side 98

Sameiet Bekkedalshøgda har en felles avtale med Viken Fiber/Altibox (frivillig tilvalg) til en månedlig kostnad på kr
609,- per 01.01.26. Sameiet fakturerer hver seksjonseier halvårlig for denne tjenesten.
I tillegg faktureres det felleskostnader på kr 1 000,- per halvår til hver seksjonseier. Dette dekker vedlikehold av
fellesarealer og øvrige

---

[d002_Salgsoppgave | Side [1]]
igkjøperforsikring (valgfritt)
Kr 168 590 Sum omkostninger inkl. boligkjøperforsikring
Dokumentavgiftens størrelse forutsetter at eiendommen kjøper til prisantydning.
Det tas forbehold om endringer i offentlige gebyrer, satser etc.
Andel felleskostnader
Kr 776,‑ per måned i følge opplysninger innhentet fra forretningsfører.
Felleskostnader inkluderer
Felleskostnader: kr 167,‑ per måned
Beløpet er basert på en halvårlig kontingent på kr 1 000,‑. Dette dekker:
‑ Snørydding og strøing av sameiets private

---

[d002_Salgsoppgave | Side [1]]
s på sameiets private veg, kostnader til drift og vedlikehold av sameiets
pumpekum og annen eiendom (for eksempel lekeplass) og forsikringer knyttet til
pumpeanlegget og styreansvar. Varmtvann, fyring og parkering er ikke inkludert i
kontingent/felleskostnader.

Hollstedt er del av en kollektivavtale som er inngått med Viken Fiber om TV og
internett gjeldende fra 1. desember 2024 med tre års bindingstid. Denne avtalen
med bindingstid følger seksjonen. Årsmøtet har bestemt at avtalen skal
faktureres

---

[d002_Salgsoppgave | Side [1]]
skal
fullfinansieres gjennom eksterne tilskudd, slik at det ikke medfører økte kostnader for
seksjonseierne, med unntak av fremtidig vedlikehold.
Det er begrensninger på eierskap i sameiet. Kun fysiske personer kan kjøpe, og ingen kan eie
mer enn to boligseksjoner. For utleie gjelder at korttidsutleie (under 30 dager
sammenhengende) av hele boligen er begrenset til maksimalt 90 dager per år.
Alle utvendige bygningsmessige endringer, som for eksempel oppsetting av markiser, endring
av fasadefarge eller

---

[d002_Salgsoppgave | Side [1]]
t bindingstiden. Les mer på Regjeringens nettsider.
Har du andre opplysninger om boligen eller eiendommen, utover det du har svart?
Ja.
Sameiet Bekkedalshøgda har en felles avtale med Viken Fiber/ Altibox (frivillig tilvalg) til en
månedlig kostnad på kr 609,‑ per 01.01.26. Sameiet fakturerer hver seksjonseier halvårlig for
denne tjenesten. I tillegg faktureres det felleskostnader på kr 1 000,‑ per halvår til hver
seksjonseier. Dette dekker vedlikehold av fellesarealer og øvrige fellesutgifter. Ved

---

[d002_Salgsoppgave | Side [1]]





113

## Side 114

114

## Side 115

115

## Side 116

Laila Irene Hollstedt
Gustav Granhaugs Veg 85A
2070 Råholt
16. januar 2026
Årsoppgave for inntektsåret 2025 – Sameiet Bekkedalshøgda
Tredjepartsopplysninger rapportert til Skatteetaten 
Andel inntekter kr 0
Andel kostnader kr 0
Andel formue kr 4281
Andel gjeld kr 0

Beløpene kontrolleres mot tall under temaet «Bolig og
eiendeler» i Skattemeldingen

Matrikkelnummer 3240
Gårdnummer

---

[d002_Salgsoppgave | Side [1]]
lknyttet offentlig
vann og avløp har private stikkledninger, som vedlikeholdes for eiers egen regning. For
ytterligere opplysninger om de private stikkledningene, ta kontakt med kommunen. Sameiet har
felles pumpekum. Den private veien som eiendommen er tilknyttet vedlikeholdes av brukerne.
Reguleringsplan
Eiendommen er regulert til frittliggende småhusbebyggelse med et areal på 1952 m² (feltnavn
B5). Videre er 564 m² regulert til lekeplass (feltnavn f_F3) og 245 m² til felles avkjørsel (feltnavn
FV4).

---

[d002_Salgsoppgave | Side [1]]
 nye lameller og plissegardiner (2025).
Ny skyvedørsgarderobe er installert (2025).
Ny baderomsinnredning (2025).
Oppgradert vaskerom med ny innredning og vask (2025).
Hagen er inngjerdet med spile gjerdet i treverk og port (2025).
Tomteforhold
Tomtetype
Eiet
Tomteareal
Tomtestørrelse 439.8 m²
Beskrivelse av tomten
Seksjonen har egen tomt med hage og beplantning på 439,80m². Felles eiet tomt på 1063m²
tilhørende sameiet. Fellesarealene er pent opparbeidet med asfaltert adkomstvei,
grøntområder og

---

[d002_Salgsoppgave | Side [1]]
ydelig oppgradering / oppussing i 2025.
Utvendig (2025)
Terrasse / rekkverk over garasje og ellers beiset i 2 strøk.
Terrasse/ platting/ utetrapp i 1. etasje beiset i 2 strøk.
Treverk på pergola beiset i 2 strøk.
Inngjerdet hage etablert med spilegjerde i treverk og port.
Rundstein i ulike størrelser i bed mot gjerde/ hekk.
Satt opp rikelig med hyller og kroker i utebod tilknyttet garasje.
Innvendig (2025)
Nye gulv: én#stavs laminat/ parkett og eikelister i alle rom (unntatt rom med fliser som er

---

[d002_Salgsoppgave | Side [1]]
gende småhusbebyggelse
Feltnavn B4
Delareal 167 m2
Formål Felles avkjørsel
Feltnavn FV4
Reguleringsplaner under arbeid i nærheten (100 meter)
Besøk kommunens hjemmeside for mer informasjon
Ingen reguleringsplaner under arbeid innenfor 100 meter fra eiendommen.
Side 2 av 2
127

## Side 128










  

---

[d002_Salgsoppgave | Side [1]]
e beboere. Sameiet har avtaler for brøyting og strøing av felles adkomstvei.
Styreleder informerer på mail at det er enkelte seksjonseiere som har fått pålegg fra kommunen
om tilbakeslagssikring, dette omhandlet blant annet denne seksjonen. Dette har selger ordnet
iht. pålegg.
Organisasjonsnummer
925258296
Eierbrøk
126/ 2152
18

## Side 19

Forretningsfører
Sameiet Bekkedalshøgda
Styregodkjennelse
Det kreves ikke styregodkjennelse av ny eier, men navn, telefonnummer og e‑postadresse til
kjøper må meldes

---

[d002_Salgsoppgave | Side [1]]
3?term=303531800. Det oppfores til å ta
kontakt med kommunen for ytterligere opplysninger.
Videre opplyses det at gnr. 96/1 ligger i kommuneplanen for boligbebyggelse.
Det må påregnes byggeaktivitet og byggestøy ifm. fremtidig utbygging av området/ledige
tomter. Videre må det påregnes økt trafikk når utbyggingsområdene står ferdigstilt.
Området er stadig under endring/ utvikling, bygg settes opp, rehabiliteres og rives ned. Vi
anbefaler derfor alle budgivere å sette seg inn i gjeldende

---

[d002_Salgsoppgave | Side [1]]
. Vi
anbefaler derfor alle budgivere å sette seg inn i gjeldende reguleringsbestemmelser. Kopi av
situasjonskart, målebrev, reguleringsplaner m/ bestemmelser etc. ligger vedlagt i salgsoppgaven
eller kan fås ved henvendelse til megler. Vi oppfordrer interessenter til å gjøre seg kjent med
disse.
Radonmåling
Det er ikke utført radonmåling og det er heller ikke krav til dette, for mer informasjon
vedrørende radon se www.dsa.no.Kjøper overtar fra overtakelsesdagen ansvaret for eventuelle
utbedringstiltak som

---

[d002_Salgsoppgave | Side [1]]
21, og formålet med planen er å legge til rette for
utbygging av boliger. Reguleringsplanen har id 303531800. Det er usikkert når en utbygging vil
skje, og hvor veien skal gå. Eksisterende vei er ikke dimensjonert for trafikk inn til det nye
boligfeltet. En av de to treseene som det kan være aktuelt å bygge er en ringvei med trasé på
den eksisterende veien gjennom sameiet. For mer info se
https://arealplaner.no/eidsvoll3240/arealplaner/343?term=303531800. Det oppfores til å ta
kontakt med kommunen for

---

[d002_Salgsoppgave | Side [1]]
arbeid
Reguleringsplaner bunn Reguleringsplaner under arbeid i nærheten
Bebyggelsesplaner Bebyggelsesplaner over bakken
Bebyggelsesplaner under bakken Midlertidige forbud
Kommuneplaner
Besøk kommunens hjemmeside for mer informasjon.
Id 0237202001
Navn Kommuneplanens arealdel for 2021-2031
Plantype Kommuneplanens arealdel
Status Endelig vedtatt arealplan
Ikrafttredelse 13.04.2021
Bestemmelser - https://www.arealplaner.no/3240/dokumenter/2549/Bestemmelser%20og%20retningslinjer.pdf
Delarealer Delareal 8

---

[d002_Salgsoppgave | Side [1]]
ebyggelse (feltnavn B4) og 167 m² til felles
avkjørsel (feltnavn FV4).
Eiendommen omfattes av Kommuneplanens arealdel for 2021‑2031 (plan‑ID 0237202001), vedtatt
13.04.2021. I kommuneplanen er totalt 8487 m² av eiendommen avsatt til nåværende
boligbebyggelse, og 67 m² er avsatt til LNRF areal for nødvendige tiltak for landbruk og reindrift
og gårdstilknyttet næringsvirksomhet basert på gårdens ressursgrunnlag.
Eiendommen berøres av hensynssone H110: Nedslagsfelt drikkevann. I kommuneplanens
bestemmelser §

---

[d002_Salgsoppgave | Side [1]]
127

Delareal 220 m2
KPHensynsonenavnH110
KPSikring Nedslagsfelt drikkevann
Reguleringsplaner
Besøk kommunens hjemmeside for mer informasjon.
Id 023711400
Navn Del av gbnr 96/14 med adkomstveg, og reguleringsendring for del av gbnr 96/43
Plantype Eldre reguleringsplan
Status Endelig vedtatt arealplan
Ikrafttredelse 27.04.1998
Bestemmelser - https://www.arealplaner.no/3240/dokumenter/114/023711400%20(2).pdf
Delarealer Delareal 1 952 m2
Formål Frittliggende småhusbebyggelse
Feltnavn B5
Delareal 564 m2
Formål

---

[d002_Salgsoppgave | Side [1]]
rbehold om riktigheten eller fullstendigheten av opplysningene i dette dokumentet. Det kan ikke rettes krav som følge av
at disse opplysningene benyttes som grunnlag for beslutninger.
Plantyper med treff
Kommuneplaner Reguleringsplaner
Plantyper uten treff
Kommuneplaner under arbeid Kommunedelplaner
Kommunedelplaner under arbeid Reguleringsplaner under bakken
Reguleringsplaner over bakken Reguleringsplaner under arbeid
Reguleringsplaner bunn Reguleringsplaner under arbeid i

---

[d002_Salgsoppgave | Side [1]]
549/Bestemmelser%20og%20retningslinjer.pdf
Delarealer Delareal 8 487 m2
Arealbruk Boligbebyggelse,Nåværende
OmrådenavnSe detaljregulering
Delareal 67 m2
LNRF areal for nødvendige tiltak for landbruk og reindrift og gårdstilknyttet næringsvirksomhet
Arealbruk
basert på gårdens ressursgrunnlag,Nåværende
OmrådenavnSe detaljregulering
Delareal 69 m2
Arealbruk Boligbebyggelse,Nåværende
Områdenavna_G
Side 1 av 2
126

## Side 127

Delareal 220 m2
KPHensynsonenavnH110
KPSikring Nedslagsfelt

---

[d002_Salgsoppgave | Side [1]]
s (feltnavn f_F3) og 245 m² til felles avkjørsel (feltnavn
FV4). Dette følger av reguleringsplan "Del av gbnr 96/ 14 med adkomstveg, og
reguleringsendring for del av gbnr 96/ 43" (plan‑ID 023711400), vedtatt 27.04.1998.
Eiendommen omfattes også av reguleringsplan "Eiendommene 96/ 264 og 36 m.fl., med
adkomstveger, Bekkedalshøgda" (plan‑ID 023709000), vedtatt 15.02.1993. I denne planen er 5552
m² av eiendommen regulert til frittliggende småhusbebyggelse (feltnavn B4) og 167 m² til felles
avkjørsel (feltnavn

---

[d002_Salgsoppgave | Side [1]]
ler kan forekomme. Vurderinger og sitater er innhentet på web og gir
uttrykk for hvordan naboene vurderer nabolaget. FINN.no AS kan ikke holdes ansvarlig for feil/mangler i profilen. Copyright © Finn.no AS 2026

## Side 58

PRIMÆRE TRANSPORTMIDLER VARER/TJENESTER
AMFI Eidsvoll 21 min
1. Egen bil
Vitusapotek Råholt 21 min
2. Tog
ALDERSFORDELING BARN (0-18 ÅR)
TURMULIGHETENE
Nærhet til skog og mark 96/100
31% i barnehagealder
37% 6-12 år
STØYNIVÅET
16% 13-15 år
Lite støynivå 86/100 16% 16-18

---

[d002_Salgsoppgave | Side [1]]
e H110: Nedslagsfelt drikkevann. I kommuneplanens
bestemmelser § 29 står det:
Sikringssonen omfatter drikkevannskildene Hurdalssjøen, Tisjøen, Rødtjern og Damtjern med
nedslagsfelt. Forurensning direkte i drikkevann/ bygge‑ og anleggsvirksomhet, lagring og andre
tiltak på land som kan medføre skadelig avrenning og forurensning i drikkevann ‑ er forbudt.
Alle tiltak som kan få konsekvenser for drikkevannskvaliteten innenfor Hurdalssjøen og Tisjøen
hensynssoner H110 skal utarbeide en konsekvensanalyse som

---

[d002_Salgsoppgave | Side [1]]
å det elektriske anlegget, enten av deg eller tidligere eiere?
◆ Ja
Faglært arbeid:
1.
Hvilket år ble jobben fullført?: 2017
Firmanavn: Næss Instalasjon AS
Beskrivelse av arbeidet: Tidligere eier opplyste i sin egenerklæring at den de kjøpte boligen av fikk satt opp
utvendige lykter på tomten.
Eiendommen og omgivelsene
24. Vet du om bruken av eiendommen eller området rundt kan endres av foreslåtte eller vedtatte
reguleringsplaner, nabovarsel, offentlige vedtak eller lignende?
◆ Ja
Er kjent med at det

---

[d002_Salgsoppgave | Side [1]]
rittliggende småhusbebyggelse
Feltnavn B5
Delareal 564 m2
Formål Lekeplass
Feltnavn f_F3
Delareal 245 m2
Formål Felles avkjørsel
Feltnavn FV4
Id 023709000
Navn Eiendommene 96/264 og 36 m.fl., med adkomstveger, Bekkedalshøgda
Plantype Eldre reguleringsplan
Status Endelig vedtatt arealplan
Ikrafttredelse 15.02.1993
Bestemmelser - https://www.arealplaner.no/3240/dokumenter/195/023709000.pdf
Delarealer Delareal 5 552 m2
Formål Frittliggende småhusbebyggelse
Feltnavn B4
Delareal 167 m2
Formål Felles

---

[d002_Salgsoppgave | Side [1]]
isjøen
hensynssoner H110 skal utarbeide en konsekvensanalyse som belyser om tiltaket har påvirkning
16

## Side 17

på vannkvalitet både under utførelse og etter tiltaket er ferdig. Det er krav til at tiltaket ikke
medfører at vannet i Hurdalssjøen trenger mer rensing enn i dag for å oppnå
drikkevannskvalitet.
Det foreligger reguleringsbestemmelser for detaljregulering av gbnr. 96/ 22 ‑ Bekkedal. Denne
ble vedtatt av kommunestyret i februar 2021, og formålet med planen er å legge til rette for
utbygging av

---

[d002_Salgsoppgave | Side [1]]
t foretatt kontroll av det lokale el-tilsyn eller utført utvidet el-kontroll i løpet av de siste Nei
5 år?
Type sikringer Automatsikringer
Sikringsskap er plassert på vaskerom og har automatsikringer.
Har eier opplyst om arbeider utført etter opprinnelig byggeår? Ja
Tidligere eier har opplyst at det er satt opp utvendige lykter, arbeid utført av Næss Instalasjon AS.
Utover dette er det ikke utført arbeid på anlegget etter byggeår.
Er det manglende samsvarserklæring på arbeider utført etter 01.01.1999?

---

[d002_Salgsoppgave | Side [1]]
ekundærboliger utgjør 100% av markedsverdi. For nærmere info, se www.skatteetaten.no.
Videre informeres det om at formuesverdien som er oppgitt antageligvis er noe lav. Det må
påregnes at denne vil øke ved et eierskifte.
Polisenummer
SP4876777
Forsikringsselskap
If skadeforsikring
Eiendommen
Eierform
Eierseksjon
Ferdigattest/ brukstillatelse
Det er utstedt ferdigattest den 01.11.2016 for 8 tomannsboliger og enebolig. At slike tillatelser/
attester eksisterer gir ingen garanti for at det ikke senere er

---

[d002_Salgsoppgave | Side [1]]
den ble utført. Selger opplyser om
at en tidligere eier monterte elektrisk port i carporten for å gjøre det om til garasje i 2017.
Arbeidet ble utført av snekker. Det er ikke fremlagt dokumentasjon på arbeidet og
fasadeendringene er ikke godkjent hos kommunen.
Det er oppført en pergola på eiendommen. Selger informerer i egenerklæring om at en tidligere
eier oppførte pergolaen, og at den er på ca. 9m², samt bygget en vedbod under eksisterende
utvendig trapp.
Det gjøres informeres om at mindre tiltak over 15

---

[d002_Salgsoppgave | Side [1]]
 )
Ny innredning
Ny utslagsvask med ett greps blandebatteri
Nytt opplegg for vaskemaskin
Innstallert tilbakeslagsventil og ekspansjonskar i trådd med gjeldende forskrifter ( 2026 ).
Er tiltaket godkjent av kommunen?
Nei, ikke som jeg kjenner til
Har boligen garasje eller øvrige tilleggsbygninger?
Ja.
Vet du om det feil eller skader ved garasje eller øvrige tilleggsbygninger?
Nei, ikke som jeg kjenner til
Vet du om det er gjort arbeid på eiendommen som ikke er nevnt i de andre spørsmålene?
Ja.
Faglært

---

[d002_Salgsoppgave | Side [1]]
r vaskemaskin
Innstallert tilbakeslagsventil og ekspansjonskar i trådd med gjeldende forskrifter ( 2026 ).
Er tiltaket godkjent av kommunen?
◆ Nei, ikke som jeg kjenner til
27. Vet du om kjelleren eller loftet er innredet etter opprinnelig byggeår, enten av deg eller tidligere eiere?
◆ Nei, ikke som jeg kjenner til
28. Vet du om det mangler midlertidige brukstillatelser eller ferdigattester fra kommunen?
◆ Nei, ikke som jeg kjenner til
29. Vet du om det har vært flom, ras, skred eller lignende på

---

[d002_Salgsoppgave | Side [1]]
an i garasjen.
Garasjen er 6,6 m x 3,1 m og boden er 3,0 m x 1,9 m.
Elektrisk anlegg: Sikringsskap er plassert på vaskerom og har automatsikringer.
Er det foretatt kontroll av det lokale el‑tilsyn eller utført utvidet el‑kontroll i løpet av de siste 5
år?
‑ Nei
Har eier opplyst om arbeider utført etter opprinnelig byggeår?
‑ Ja. Tidligere eier har opplyst at det er satt opp utvendige lykter, arbeid utført av Næss
Instalasjon AS. Utover dette er det ikke utført arbeid på anlegget etter byggeår.
Er det

---

[d002_Salgsoppgave | Side [1]]
l i inntak og sikringsskap ikke er tette? Nei
Spørsmål til eier: Løses sikringene ofte ut? Nei
Spørsmål til eier: Har det vært brann, branntilløp eller varmgang i anlegget? Nei
Oppsummering av elektrisk
Dette er en forenklet kontroll begrenset til de spørsmål og undersøkelser som forskrift til
avhendingslova (tryggere bolighandel) § 2-18 inneholder. Dette kan ikke sammenlignes med en
kontroll utført av offentlig myndighet (Det lokale eltilsyn) eller registrert elektrovirksomhet, og en
bygningssakkyndig har

---

[d002_Salgsoppgave | Side [1]]
 i 2. etasje og i trapperom ikke medfølger boligen ved salg.
Det informeres om at kveldsbildene er hentet fra forrige salg, og det vil forekomme avvik.
Boligselgerforsikring
Selgeren har kjøpt boligselgerforsikring hos Fremtind. Forsikringen dekker selgerens
økonomiske ansvar hvis kjøper oppdager feil eller mangler som omfattes av avhendingsloven.
Forsikringen gjelder fra kjøpers overtagelse av eiendommen og varer i fem år. I tillegg dekker
forsikringen perioden mellom budaksept og overtagelse begrenset

---

[d002_Salgsoppgave | Side [1]]
 eiere?
◆ Ja
Faglært arbeid:
2
92

## Side 93

1.
Hvilket år ble jobben fullført?: 2017
Firmanavn: Monter AS,
Beskrivelse av arbeidet: Opplysning om tidligere utførte tiltak (til orientering) Tidligere eier har opplyst at selger
ved deres kjøp informerte om at det var montert elektrisk port i carporten for å gjøre den om til garasje, og at
dette arbeidet ble utført av snekker fra Monter AS. Det ble samtidig opplyst at de ikke kjenner til om det ble søkt
om bruksendring fra carport til garasje.
Ufaglært

---

[d002_Salgsoppgave | Side [1]]
har
antageligvis skjedd ifm. oppføring av boligen, hvor utbygger ikke har sendt inn revideringen til
kommunen.
På vestsiden av boligen er det satt inn dør (på det soverommet) som går ut. Dette i tillegg til
vinduet på soverommet. Videre er det på østsiden satt inn garasjeport mot opprinnelig carport.
Disse endringene er ikke en del av fasadetegningene, og endringer på fasade er
søknadspliktige tiltak. Det er ukjent når endringen på vestfasaden ble utført. Selger opplyser om
at en tidligere eier monterte

---

[d002_Salgsoppgave | Side [1]]
tført reparasjoner, vedlikehold, installasjoner, ombygging eller lignende i boligen de
siste fem årene, og arbeidet er utført av kvalifiserte håndverkere, skal den bygningssakkyndige be eieren
håndverkertjenester dokumentere bruken av kvalifiserte håndverkere. Som dokumentasjon regnes blant annet skriftlig
bekreftelse fra den eller de håndverkerne som ble brukt.
Hvordan undersøkelsene skal Med mindre det fremgår at et rom eller en bygningsdel skal undersøkes med målinger, at det skal bores
hull, at det

---

[d002_Salgsoppgave | Side [1]]
 og eventuelle
idømte saksomkostninger.
Kostnader for reparasjon av eventuelle feil eller
mangler dekkes ikke av boligkjøperforsikringen. Slike
kostnader vil man kunne kreve dekket av selger dersom
eiendommen er mangelfull etter avhendingsloven.
Skjulte feil, tilbakeholdte opplysninger og/eller mangel-
fulle/uriktige opplysninger gir grunnlag for henven-
delse. Våre saksbehandlere vil da vurdere det rettslige
grunnlaget basert på informasjonen som er mottatt.
Fordeler
Du trenger ikke betale

---

[d002_Salgsoppgave | Side [1]]
vn: RE Varmepumpe AS
Beskrivelse av arbeidet: Ordinær service på varmepumpe
Ufaglært arbeid:
Hvilket år ble jobben fullført?: 2024
Beskrivelse av arbeidet: Byttet Flexit filter på ventilasjonsanlegg.
Vet du om det er gjort arbeid på det elektriske anlegget, enten av deg eller tidligere eiere?
Ja.
Faglært arbeid:
Hvilket år ble jobben fullført?: 2017
Firmanavn: Næss Instalasjon AS
Beskrivelse av arbeidet: Tidligere eier opplyste i sin egenerklæring at den de kjøpte boligen av
fikk satt opp utvendige lykter

---

[d002_Salgsoppgave | Side [1]]

attester eksisterer gir ingen garanti for at det ikke senere er utført arbeider som ikke er
byggemeldt/ godkjent.
Det foreligger godkjente byggetegninger datert 17.01.2013. Det er ikke fullstendig samsvar
mellom godkjente byggetegninger og dagens bruk.
15

## Side 16

Boligens planløsning i 2. etasje er speilvendt opp mot dagens løsning. Det kan se ut til at
trappen i dagens løsning går opp motsatt fra hva byggetegningene viser. Endringen har
antageligvis skjedd ifm. oppføring av boligen, hvor utbygger

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "Uregistrerte og ikke-godkjente bygningsendringer: Elektrisk port i carport (bruksendring til garasje), dør på vestfasade og fasadeendringer er ikke søkt om eller godkjent av kommunen. Kjøper overtar ansvaret for eventuelle byggemeldinger og konsekvenser.",
      "evidence": [
        "Selger opplyser om at en tidligere eier monterte elektrisk port i carporten for å gjøre det om til garasje i 2017. Arbeidet ble utført av snekker. Det er ikke fremlagt dokumentasjon på arbeidet og fasadeendringene er ikke godkjent hos kommunen.",
        "På vestsiden av boligen er det satt inn dør (på det soverommet) som går ut. Disse endringene er ikke en del av fasadetegningene, og endringer på fasade er søknadspliktige tiltak.",
        "Eiendommen selges slik den fremstår og selger påtar seg ikke ansvar for å eventuelt byggemelde eller få godkjent ovenstående avvik nå i ettertid. Uavhengig av reaksjonsform fra kommunen, blir dette kjøpers ansvar og risiko siden boligen selges slik den fremstår.",
        "Tidligere eier har opplyst at selger ved deres kjøp informerte om at det var montert elektrisk port i carporten for å gjøre den om til garasje, og at dette arbeidet ble utført av snekker fra Monter AS. Det ble samtidig opplyst at de ikke kjenner til om det ble søkt om bruksendring fra carport til garasje."
      ],
      "source_documents": [
        "d002_Salgsoppgave"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R2",
      "description": "Avvik mellom godkjente byggetegninger og faktisk planløsning: Boligens planløsning i 2. etasje er speilvendt i forhold til godkjente byggetegninger, og trappen går motsatt vei. Endringen er ikke sendt inn til kommunen.",
      "evidence": [
        "Det foreligger godkjente byggetegninger datert 17.01.2013. Det er ikke fullstendig samsvar mellom godkjente byggetegninger og dagens bruk.",
        "Boligens planløsning i 2. etasje er speilvendt opp mot dagens løsning. Det kan se ut til at trappen i dagens løsning går opp motsatt fra hva byggetegningene viser. Endringen har antageligvis skjedd ifm. oppføring av boligen, hvor utbygger ikke har sendt inn revideringen til kommunen."
      ],
      "source_documents": [
        "d002_Salgsoppgave"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R3",
      "description": "Pergola og vedbod uten byggemelding: Det er oppført en pergola på ca. 9 m² og en vedbod under eksisterende utvendig trapp av tidligere eier, uten at dette er søkt om eller godkjent. Tiltak over 15 kvm er søknadspliktige, men også mindre tiltak kan kreve søknad.",
      "evidence": [
        "Det er oppført en pergola på eiendommen. Selger informerer i egenerklæring om at en tidligere eier oppførte pergolaen, og at den er på ca. 9m², samt bygget en vedbod under eksisterende utvendig trapp.",
        "Det gjøres informeres om at mindre tiltak over 15 kvm er søknadspliktige.",
        "Eiendommen selges slik den fremstår og selger påtar seg ikke ansvar for å eventuelt byggemelde eller få godkjent ovenstående avvik nå i ettertid.",
        "Tidligere eier opplyste at de som solgte de boligen satt opp en pergola i hagen på ca. 9 m², samt bygget en vedbod under den eksisterende utvendige trappen mot hagen."
      ],
      "source_documents": [
        "d002_Salgsoppgave"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R4",
      "description": "Taktekking og drenering ikke kontrollert: Tilstandsrapporten har satt TG-IU (ikke undersøkt) på taktekking og drenering grunnet snødekke. Eventuelle skjulte feil eller mangler på disse kritiske bygningsdelene er dermed ikke avdekket.",
      "evidence": [
        "Taktekking | Kontrollen er kun utført fra bakkenivå, samt at tak/tekking er dekket med snø. Det er derfor ikke foretatt kontroll av alle beslag, overganger eller tekking. Inspeksjon og vurdering av taktekking anbefales når forholdene gjør det mulig.",
        "Drenering TG-IU settes på bakgrunn av at tomten er snødekt.",
        "Drenering | Tomten er snødekt og terrengforhold er ikke kontrollert. Bortleding av vann fra taknedløp er ivaretatt."
      ],
      "source_documents": [
        "d002_Salgsoppgave"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R5",
      "description": "Grunnmur og fundament ikke kontrollert (TG-IU): Boligen er oppført med støpt plate på mark, og eventuelle sprekker og skader er ikke kontrollert.",
      "evidence": [
        "Grunnmur og fundament TG-IU settes på bakgrunn av boligen er oppført med støpt plate på mark.",
        "Grunnmur og fundament | Boligen er oppført med støpt plate på mark. Eventuelle sprekker og skader i [ikke fullstendig tekst]"
      ],
      "source_documents": [
        "d002_Salgsoppgave"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R6",
      "description": "Terrasse og platting ikke vurdert (TG-IU): Terrasse og platting er dekket med snø og er ikke vurdert i tilstandsrapporten. Eventuelle skjulte feil er ikke avdekket.",
      "evidence": [
        "Oppsummering av balkong, terrasse, platting TG-IU: TG-IU settes på bakgrunn av at terrasse og platting er dekket med snø. Terrasse og platting er ikke vurdert."
      ],
      "source_documents": [
        "d002_Salgsoppgave"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.87
    },
    {
      "risk_id": "R7",
      "description": "TG-2 på bad: Det er registrert bom (hulrom) under flis mellom dusjsone og vask/servant, med risiko for at flis kan løsne. Dette indikerer behov for tiltak i nær fremtid.",
      "evidence": [
        "Våtrom: Bad TG-2 settes på bakgrunn av stedvis «bom» i flis.",
        "Det registreres bom i en flis mellom dusjsone og vask/servant (manglende heft til underlaget) med risiko for at flis kan løsne.",
        "Er det registrert riss, sprekker i fuger, bom (hulrom) under flis? Ja"
      ],
      "source_documents": [
        "d002_Salgsoppgave"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.93
    },
    {
      "risk_id": "R8",
      "description": "Elektrisk anlegg ikke kontrollert av fagmyndighet: Det er ikke utført el-kontroll av Det lokale eltilsyn eller registrert elektrovirksomhet de siste 5 år. Det er heller ikke fremlagt samsvarserklæring for alle arbeider utført etter 01.01.1999.",
      "evidence": [
        "Er det foretatt kontroll av det lokale el-tilsyn eller utført utvidet el-kontroll i løpet av de siste 5 år? Nei",
        "Tilstandsrapporten beskriver byggverkets tekniske tilstand. Det er ikke foretatt kontroll av de elektriske installasjonene (el-takst) selv om bygningssakkyndig kan ha knyttet noen kommentarer til elanlegget ut i fra helt enkle vurderingskriterier. Siden elanlegget ikke er kontrollert er det sannsynlig at det siden kan avdekkes avvik fra dagens forskriftskrav.",
        "På genrelt grunnlag vil det alltid anbefales en EL-kontroll utført av ny eier.",
        "Er det manglende samsvarserklæring på arbeider utført etter 01.01.1999? [implisitt bekreftet i dokumentet]"
      ],
      "source_documents": [
        "d002_Salgsoppgave"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R9",
      "description": "Ingen radonmåling utført: Det er ikke utført radonmåling på eiendommen, og kjøper overtar ansvaret for eventuelle utbedringstiltak fra overtakelsesdagen.",
      "evidence": [
        "Det er ikke utført radonmåling og det er heller ikke krav til dette, for mer informasjon vedrørende radon se www.dsa.no. Kjøper overtar fra overtakelsesdagen ansvaret for eventuelle utbedringstiltak som senere må igangsettes og betales.",
        "Vet du om det er gjort radonmåling på eiendommen, enten av deg eller tidligere eiere? Nei, ikke som jeg kjenner til"
      ],
      "source_documents": [
        "d002_Salgsoppgave"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R10",
      "description": "Planlagt utbygging og økt trafikk i området: Det foreligger en vedtatt reguleringsplan for utbygging av boliger på gbnr. 96/22 (Bekkedal), vedtatt februar 2021. Eksisterende vei er ikke dimensjonert for trafikk inn til det nye boligfeltet, og en mulig ringvei kan gå gjennom sameiets eksisterende vei.",
      "evidence": [
        "Det foreligger reguleringsbestemmelser for detaljregulering av gbnr. 96/22 – Bekkedal. Denne ble vedtatt av kommunestyret i februar 2021, og formålet med planen er å legge til rette for utbygging av boliger.",
        "Eksisterende vei er ikke dimensjonert for trafikk inn til det nye boligfeltet. En av de to treseene som det kan være aktuelt å bygge er en ringvei med trasé på den eksisterende veien gjennom sameiet.",
        "Det må påregnes byggeaktivitet og byggestøy ifm. fremtidig utbygging av området/ledige tomter. Videre må det påregnes økt trafikk når utbyggingsområdene står ferdigstilt."
      ],
      "source_documents": [
        "d002_Salgsoppgave"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R11",
      "description": "Hensynssone H110 – Nedslagsfelt drikkevann: Eiendommen ligger innenfor hensynssone H110 (nedslagsfelt for drikkevann), noe som medfører restriksjoner på bygge- og anleggsvirksomhet, lagring og andre tiltak som kan forurense drikkevannet.",
      "evidence": [
        "Eiendommen berøres av hensynssone H110: Nedslagsfelt drikkevann.",
        "Sikringssonen omfatter drikkevannskildene Hurdalssjøen, Tisjøen, Rødtjern og Damtjern med nedslagsfelt. Forurensning direkte i drikkevann/bygge- og anleggsvirksomhet, lagring og andre tiltak på land som kan medføre skadelig avrenning og forurensning i drikkevann – er forbudt.",
        "Alle tiltak som kan få konsekvenser for drikkevannskvaliteten innenfor Hurdalssjøen og Tisjøen hensynssoner H110 skal utarbeide en konsekvensanalyse."
      ],
      "source_documents": [
        "d002_Salgsoppgave"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R12",
      "description": "Legalpant og solidaransvar i sameiet: Øvrige seksjonseiere har lovbestemt panterett (utinglyst pant) i seksjonen for krav mot eieren som følger av sameieforholdet for inntil 2G. Sameierne er solidarisk ansvarlig for sameiets økonomi.",
      "evidence": [
        "Sameierne er solidarisk ansvarlig for sameiets økonomi. Andre seksjonseierne har lovbestemt panterett (utinglyst pant) i seksjonen for krav mot eieren som følger av sameieforholdet for inntil 2 G (folketrygdens grunnbeløp).",
        "Rentenivå, eventuelt nye låneopptak, endret nedbetalingsplan, opphør av avdragsfri periode, investeringer, vedlikehold, rehabilitering, inngåelse av nye tjenesteavtaler og årsmøtevedtak kan påvirke felleskostnadenes størrelse."
      ],
      "source_documents": [
        "d002_Salgsoppgave"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R13",
      "description": "Bindende TV/internett-avtale med 3 års bindingstid følger seksjonen: Kjøper overtar en kollektivavtale med Viken Fiber med bindingstid til desember 2027, til en kostnad på kr 609,- per måned. Kjøper kan ikke si opp denne avtalen i bindingstiden.",
      "evidence": [
        "Det er inngått avtale med Viken Fiber om leveranse av TV og internett til denne seksjonen. Avtalen gjelder i tre år fra desember 2024, og følger automatisk med salget.",
        "Denne avtalen med bindingstid følger seksjonen.",
        "TV og internett: kr 609,- per måned – Leveres av Viken Fiber gjennom en kollektiv avtale som følger seksjonen. Avtalen har bindingstid i 3 år fra 1. desember 2024.",
        "Avtalen har fra og med 1. februar 2026 en månedspris på 609 kroner per boenhet."
      ],
      "source_documents": [
        "d002_Salgsoppgave"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R14",
      "description": "Sameiet mangler felles bygningsforsikring: Sameiet Bekkedalshøgda har ikke felles bygningsforsikring, noe som betyr at den enkelte seksjonseier selv må sørge for forsikring av sin del av bygget.",
      "evidence": [
        "Sameiet har ikke felles bygningsforsikring.",
        "Eier må selv dekke kostnader forbundet med eget strømforbruk, forsikring av innbo og løsøre samt andre kostnader som ikke dekkes av felleskostnadene."
      ],
      "source_documents": [
        "d002_Salgsoppgave"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R15",
      "description": "Planlagt oppgradering av lekeplass – usikker finansiering: Sameiet har vedtatt å planlegge oppgradering av lekeplass med nye lekestativer. Målet er ekstern finansiering, men fremtidig vedlikehold vil uansett påfalle seksjonseierne.",
      "evidence": [
        "Det er vedtatt å planlegge en oppgradering av sameiets lekeplass med nye lekestativer. Styret har fått fullmakt til å utrede og søke om midler for prosjektet. Målet er at tiltaket skal fullfinansieres gjennom eksterne tilskudd, slik at det ikke medfører økte kostnader for seksjonseierne, med unntak av fremtidig vedlikehold."
      ],
      "source_documents": [
        "d002_Salgsoppgave"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.65
    },
    {
      "risk_id": "R16",
      "description": "Manglende dokumentasjon på bad/våtrom: Selger kjenner ikke til om tettesjikt, membran eller sluk ble fornyet eller oppgradert, og det finnes ingen dokumentasjon på hvordan bad/våtrom er bygget opp.",
      "evidence": [
        "Vet du om tettesjikt, membran eller sluk ble fornyet eller oppgradert? Nei, ikke som jeg kjenner til",
        "Vet du om det finnes dokumentasjon på hvordan bad/våtrom er bygget opp? Nei, ikke som jeg kjenner til"
      ],
      "source_documents": [
        "d002_Salgsoppgave"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R17",
      "description": "Risiko for overbeheftelse og manglende pantefrafall: Dersom eiendommen blir overbeheftet i salgsprosessen og kreditorene ikke gir nødvendig pantefrafall, kan handelen ikke gjennomføres.",
      "evidence": [
        "Dersom eiendommen skulle bli overbeheftet i salgsprosessen, det vil si at summen av fremtidige tinglyste heftelser overstiger den forventede salgssummen, er det en forutsetning for at handel skal kunne gjennomføres at kreditorene gir nødvendig pantefrafall. Dersom pantefrafall ikke oppnås vil handel ikke kunne gjennomføres.",
        "Skulle det bli tinglyst flere utleggspant på eiendommen, kan handel bare gjennomføres forutsatt at også eventuelle fremtidige kreditorer aksepterer å slette sitt pant uten å få full innfrielse av det underliggende kravet."
      ],
      "source_documents": [
        "d002_Salgsoppgave"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.7
    },
    {
      "risk_id": "R18",
      "description": "Grunnforurensning og kulturminner kan forekomme uten å være registrert: Matrikkelen viser ingen registrert grunnforurensning eller kulturminner, men dette utelukker ikke at slike forhold faktisk eksisterer på eiendommen.",
      "evidence": [
        "Grunnforurensning som ikke er registrert kan dermed allikevel forekomme på eiendommen.",
        "Kulturminner som ikke er registrert i Matrikkelen kan dermed allikevel forekomme på eiendommen."
      ],
      "source_documents": [
        "d002_Salgsoppgave"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.6
    },
    {
      "risk_id": "R19",
      "description": "Begrensninger på eierskap og utleie i sameiet: Kun fysiske personer kan kjøpe seksjoner, ingen kan eie mer enn to seksjoner, og korttidsutleie av hele boligen er begrenset til maksimalt 90 dager per år.",
      "evidence": [
        "Det er begrensninger på eierskap i sameiet. Kun fysiske personer kan kjøpe, og ingen kan eie mer enn to boligseksjoner. For utleie gjelder at korttidsutleie (under 30 dager sammenhengende) av hele boligen er begrenset til maksimalt 90 dager per år."
      ],
      "source_documents": [
        "d002_Salgsoppgave"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R20",
      "description": "Tilbakeslagssikring – kommunalt pålegg: Styreleder bekrefter at enkelte seksjonseiere, inkludert denne seksjonen, har fått pålegg fra kommunen om tilbakeslagssikring. Selger opplyser å ha ordnet dette, men det er ikke dokumentert om tiltaket er godkjent av kommunen.",
      "evidence": [
        "Styreleder informerer på mail at det er enkelte seksjonseiere som har fått pålegg fra kommunen om tilbakeslagssikring, dette omhandlet blant annet denne seksjonen. Dette har selger ordnet iht. pålegg.",
        "Installert tilbakeslagsventil og ekspansjonskar i trådd med gjeldende forskrifter (2026). Er tiltaket godkjent av kommunen? Nei, ikke som jeg kjenner til"
      ],
      "source_documents": [
        "d002_Salgsoppgave"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    }
  ],
  "re_retrieval_queries": [
    "samsvarserklæring elektrisk anlegg etter 1999",
    "ferdigattest brukstillatelse godkjenning kommunen",
    "tilbakeslagssikring godkjenning kommunen dokumentasjon",
    "korttidsutleie begrensninger sameiet vedtekter",
    "private stikkledninger vann avløp vedlikehold ansvar",
    "formuesverdi skattemessig konsekvens eierskifte",
    "boligselgerforsikring Fremtind dekningsomfang unntak"
  ],
  "reasoning": "\nGjennomgang av alle 18 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Uregistrerte bygningsendringer (0.97):** Meget godt dokumentert. Flere uavhengige kilder bekrefter elektrisk port (Monter AS, 2017), dør på vestfasade og manglende godkjenning. Confidence opprettholdes på 0.97.\n\n**R2 – Avvik byggetegninger vs. planløsning (0.95):** Godt dokumentert med direkte sitat fra salgsoppgaven. Confidence opprettholdes på 0.95.\n\n**R3 – Pergola og vedbod uten byggemelding (0.90):** Godt dokumentert. Merk at pergolaen er på ca. 9 m², altså UNDER 15 kvm-grensen for søknadsplikt for frittliggende konstruksjoner. Salgsoppgaven er noe upresis her – den sier \"tiltak over 15 kvm er søknadspliktige\" men pergolaen er 9 m². Det kan likevel være søknadspliktig avhengig av type tiltak. Confidence justeres ned til 0.88 pga. denne uklarheten.\n\n**R4 – Taktekking og drenering TG-IU (0.92):** Godt dokumentert. Confidence opprettholdes.\n\n**R5 – Grunnmur og fundament TG-IU (0.88):** Dokumentert, men evidensteksten er ufullstendig (\"Eventuelle sprekker og skader i [ikke fullstendig tekst]\"). Confidence justeres ned til 0.85 pga. ufullstendig evidens.\n\n**R6 – Terrasse og platting TG-IU (0.87):** Godt dokumentert. Confidence opprettholdes.\n\n**R7 – TG-2 på bad (0.93):** Meget godt dokumentert med konkrete funn. Confidence opprettholdes.\n\n**R8 – Elektrisk anlegg ikke kontrollert (0.90):** Godt dokumentert. Confidence opprettholdes.\n\n**R9 – Ingen radonmåling (0.88):** Godt dokumentert. Confidence opprettholdes.\n\n**R10 – Planlagt utbygging og økt trafikk (0.95):** Meget godt dokumentert. Confidence opprettholdes.\n\n**R11 – Hensynssone H110 (0.90):** Godt dokumentert med konkrete bestemmelser. Confidence justeres opp til 0.92 da evidensen er svært konkret og detaljert.\n\n**R12 – Legalpant og solidaransvar (0.85):** Godt dokumentert. Confidence opprettholdes.\n\n**R13 – Bindende TV/internett-avtale (0.92):** Meget godt dokumentert med konkrete beløp og datoer. Confidence opprettholdes.\n\n**R14 – Manglende felles bygningsforsikring (0.90):** Godt dokumentert. Confidence justeres opp til 0.92 da dette er en direkte og klar opplysning i dokumentet.\n\n**R15 – Lekeplass oppgradering (0.75):** Dokumentert, men risikoen er lav da målet er ekstern finansiering og sameiet har ingen fellesgjeld. Confidence justeres ned til 0.65 da dette er en svak risiko med begrenset finansiell eksponering for kjøper.\n\n**R16 – Manglende dokumentasjon bad/våtrom (0.85):** Godt dokumentert. Confidence opprettholdes.\n\n**R17 – Overbeheftelse og pantefrafall (0.78):** Dokumentert som standardformulering i salgsoppgaven. Dette er en generell juridisk risiko som gjelder alle eiendomssalg, ikke spesifikk for denne eiendommen. Confidence justeres ned til 0.70.\n\n**R18 – Grunnforurensning og kulturminner (0.70):** Dokumentert som standardformulering. Ingen spesifikke indikasjoner på faktisk risiko. Confidence justeres ned til 0.60.\n\n**Nye risikoer identifisert:**\n\n**R19 – Begrensninger på eierskap og utleie:** Dokumentet nevner eksplisitt at kun fysiske personer kan kjøpe, maks to seksjoner per eier, og korttidsutleie begrenset til 90 dager/år. Dette er en reell risiko for investorer eller de som planlegger utleie. Confidence: 0.90.\n\n**R20 – Tilbakeslagssikring – kommunalt pålegg:** Styreleder bekrefter at denne seksjonen har fått kommunalt pålegg om tilbakeslagssikring. Selger opplyser å ha utført tiltaket, men svarer \"Nei, ikke som jeg kjenner til\" på om tiltaket er godkjent av kommunen. Dette er en konkret, dokumentert risiko. Confidence: 0.82.\n"
}

## Raw Response
```json
{
  "id": "msg_019rXNLbbzmvsQAbPK5AKeRL",
  "container": null,
  "content": [
    {
      "id": "toolu_01FAvrFKPP9janQ2cth3yj8L",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "Uregistrerte og ikke-godkjente bygningsendringer: Elektrisk port i carport (bruksendring til garasje), dør på vestfasade og fasadeendringer er ikke søkt om eller godkjent av kommunen. Kjøper overtar ansvaret for eventuelle byggemeldinger og konsekvenser.",
            "evidence": [
              "Selger opplyser om at en tidligere eier monterte elektrisk port i carporten for å gjøre det om til garasje i 2017. Arbeidet ble utført av snekker. Det er ikke fremlagt dokumentasjon på arbeidet og fasadeendringene er ikke godkjent hos kommunen.",
              "På vestsiden av boligen er det satt inn dør (på det soverommet) som går ut. Disse endringene er ikke en del av fasadetegningene, og endringer på fasade er søknadspliktige tiltak.",
              "Eiendommen selges slik den fremstår og selger påtar seg ikke ansvar for å eventuelt byggemelde eller få godkjent ovenstående avvik nå i ettertid. Uavhengig av reaksjonsform fra kommunen, blir dette kjøpers ansvar og risiko siden boligen selges slik den fremstår.",
              "Tidligere eier har opplyst at selger ved deres kjøp informerte om at det var montert elektrisk port i carporten for å gjøre den om til garasje, og at dette arbeidet ble utført av snekker fra Monter AS. Det ble samtidig opplyst at de ikke kjenner til om det ble søkt om bruksendring fra carport til garasje."
            ],
            "source_documents": [
              "d002_Salgsoppgave"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R2",
            "description": "Avvik mellom godkjente byggetegninger og faktisk planløsning: Boligens planløsning i 2. etasje er speilvendt i forhold til godkjente byggetegninger, og trappen går motsatt vei. Endringen er ikke sendt inn til kommunen.",
            "evidence": [
              "Det foreligger godkjente byggetegninger datert 17.01.2013. Det er ikke fullstendig samsvar mellom godkjente byggetegninger og dagens bruk.",
              "Boligens planløsning i 2. etasje er speilvendt opp mot dagens løsning. Det kan se ut til at trappen i dagens løsning går opp motsatt fra hva byggetegningene viser. Endringen har antageligvis skjedd ifm. oppføring av boligen, hvor utbygger ikke har sendt inn revideringen til kommunen."
            ],
            "source_documents": [
              "d002_Salgsoppgave"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R3",
            "description": "Pergola og vedbod uten byggemelding: Det er oppført en pergola på ca. 9 m² og en vedbod under eksisterende utvendig trapp av tidligere eier, uten at dette er søkt om eller godkjent. Tiltak over 15 kvm er søknadspliktige, men også mindre tiltak kan kreve søknad.",
            "evidence": [
              "Det er oppført en pergola på eiendommen. Selger informerer i egenerklæring om at en tidligere eier oppførte pergolaen, og at den er på ca. 9m², samt bygget en vedbod under eksisterende utvendig trapp.",
              "Det gjøres informeres om at mindre tiltak over 15 kvm er søknadspliktige.",
              "Eiendommen selges slik den fremstår og selger påtar seg ikke ansvar for å eventuelt byggemelde eller få godkjent ovenstående avvik nå i ettertid.",
              "Tidligere eier opplyste at de som solgte de boligen satt opp en pergola i hagen på ca. 9 m², samt bygget en vedbod under den eksisterende utvendige trappen mot hagen."
            ],
            "source_documents": [
              "d002_Salgsoppgave"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R4",
            "description": "Taktekking og drenering ikke kontrollert: Tilstandsrapporten har satt TG-IU (ikke undersøkt) på taktekking og drenering grunnet snødekke. Eventuelle skjulte feil eller mangler på disse kritiske bygningsdelene er dermed ikke avdekket.",
            "evidence": [
              "Taktekking | Kontrollen er kun utført fra bakkenivå, samt at tak/tekking er dekket med snø. Det er derfor ikke foretatt kontroll av alle beslag, overganger eller tekking. Inspeksjon og vurdering av taktekking anbefales når forholdene gjør det mulig.",
              "Drenering TG-IU settes på bakgrunn av at tomten er snødekt.",
              "Drenering | Tomten er snødekt og terrengforhold er ikke kontrollert. Bortleding av vann fra taknedløp er ivaretatt."
            ],
            "source_documents": [
              "d002_Salgsoppgave"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R5",
            "description": "Grunnmur og fundament ikke kontrollert (TG-IU): Boligen er oppført med støpt plate på mark, og eventuelle sprekker og skader er ikke kontrollert.",
            "evidence": [
              "Grunnmur og fundament TG-IU settes på bakgrunn av boligen er oppført med støpt plate på mark.",
              "Grunnmur og fundament | Boligen er oppført med støpt plate på mark. Eventuelle sprekker og skader i [ikke fullstendig tekst]"
            ],
            "source_documents": [
              "d002_Salgsoppgave"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R6",
            "description": "Terrasse og platting ikke vurdert (TG-IU): Terrasse og platting er dekket med snø og er ikke vurdert i tilstandsrapporten. Eventuelle skjulte feil er ikke avdekket.",
            "evidence": [
              "Oppsummering av balkong, terrasse, platting TG-IU: TG-IU settes på bakgrunn av at terrasse og platting er dekket med snø. Terrasse og platting er ikke vurdert."
            ],
            "source_documents": [
              "d002_Salgsoppgave"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.87
          },
          {
            "risk_id": "R7",
            "description": "TG-2 på bad: Det er registrert bom (hulrom) under flis mellom dusjsone og vask/servant, med risiko for at flis kan løsne. Dette indikerer behov for tiltak i nær fremtid.",
            "evidence": [
              "Våtrom: Bad TG-2 settes på bakgrunn av stedvis «bom» i flis.",
              "Det registreres bom i en flis mellom dusjsone og vask/servant (manglende heft til underlaget) med risiko for at flis kan løsne.",
              "Er det registrert riss, sprekker i fuger, bom (hulrom) under flis? Ja"
            ],
            "source_documents": [
              "d002_Salgsoppgave"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.93
          },
          {
            "risk_id": "R8",
            "description": "Elektrisk anlegg ikke kontrollert av fagmyndighet: Det er ikke utført el-kontroll av Det lokale eltilsyn eller registrert elektrovirksomhet de siste 5 år. Det er heller ikke fremlagt samsvarserklæring for alle arbeider utført etter 01.01.1999.",
            "evidence": [
              "Er det foretatt kontroll av det lokale el-tilsyn eller utført utvidet el-kontroll i løpet av de siste 5 år? Nei",
              "Tilstandsrapporten beskriver byggverkets tekniske tilstand. Det er ikke foretatt kontroll av de elektriske installasjonene (el-takst) selv om bygningssakkyndig kan ha knyttet noen kommentarer til elanlegget ut i fra helt enkle vurderingskriterier. Siden elanlegget ikke er kontrollert er det sannsynlig at det siden kan avdekkes avvik fra dagens forskriftskrav.",
              "På genrelt grunnlag vil det alltid anbefales en EL-kontroll utført av ny eier.",
              "Er det manglende samsvarserklæring på arbeider utført etter 01.01.1999? [implisitt bekreftet i dokumentet]"
            ],
            "source_documents": [
              "d002_Salgsoppgave"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R9",
            "description": "Ingen radonmåling utført: Det er ikke utført radonmåling på eiendommen, og kjøper overtar ansvaret for eventuelle utbedringstiltak fra overtakelsesdagen.",
            "evidence": [
              "Det er ikke utført radonmåling og det er heller ikke krav til dette, for mer informasjon vedrørende radon se www.dsa.no. Kjøper overtar fra overtakelsesdagen ansvaret for eventuelle utbedringstiltak som senere må igangsettes og betales.",
              "Vet du om det er gjort radonmåling på eiendommen, enten av deg eller tidligere eiere? Nei, ikke som jeg kjenner til"
            ],
            "source_documents": [
              "d002_Salgsoppgave"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R10",
            "description": "Planlagt utbygging og økt trafikk i området: Det foreligger en vedtatt reguleringsplan for utbygging av boliger på gbnr. 96/22 (Bekkedal), vedtatt februar 2021. Eksisterende vei er ikke dimensjonert for trafikk inn til det nye boligfeltet, og en mulig ringvei kan gå gjennom sameiets eksisterende vei.",
            "evidence": [
              "Det foreligger reguleringsbestemmelser for detaljregulering av gbnr. 96/22 – Bekkedal. Denne ble vedtatt av kommunestyret i februar 2021, og formålet med planen er å legge til rette for utbygging av boliger.",
              "Eksisterende vei er ikke dimensjonert for trafikk inn til det nye boligfeltet. En av de to treseene som det kan være aktuelt å bygge er en ringvei med trasé på den eksisterende veien gjennom sameiet.",
              "Det må påregnes byggeaktivitet og byggestøy ifm. fremtidig utbygging av området/ledige tomter. Videre må det påregnes økt trafikk når utbyggingsområdene står ferdigstilt."
            ],
            "source_documents": [
              "d002_Salgsoppgave"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R11",
            "description": "Hensynssone H110 – Nedslagsfelt drikkevann: Eiendommen ligger innenfor hensynssone H110 (nedslagsfelt for drikkevann), noe som medfører restriksjoner på bygge- og anleggsvirksomhet, lagring og andre tiltak som kan forurense drikkevannet.",
            "evidence": [
              "Eiendommen berøres av hensynssone H110: Nedslagsfelt drikkevann.",
              "Sikringssonen omfatter drikkevannskildene Hurdalssjøen, Tisjøen, Rødtjern og Damtjern med nedslagsfelt. Forurensning direkte i drikkevann/bygge- og anleggsvirksomhet, lagring og andre tiltak på land som kan medføre skadelig avrenning og forurensning i drikkevann – er forbudt.",
              "Alle tiltak som kan få konsekvenser for drikkevannskvaliteten innenfor Hurdalssjøen og Tisjøen hensynssoner H110 skal utarbeide en konsekvensanalyse."
            ],
            "source_documents": [
              "d002_Salgsoppgave"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R12",
            "description": "Legalpant og solidaransvar i sameiet: Øvrige seksjonseiere har lovbestemt panterett (utinglyst pant) i seksjonen for krav mot eieren som følger av sameieforholdet for inntil 2G. Sameierne er solidarisk ansvarlig for sameiets økonomi.",
            "evidence": [
              "Sameierne er solidarisk ansvarlig for sameiets økonomi. Andre seksjonseierne har lovbestemt panterett (utinglyst pant) i seksjonen for krav mot eieren som følger av sameieforholdet for inntil 2 G (folketrygdens grunnbeløp).",
              "Rentenivå, eventuelt nye låneopptak, endret nedbetalingsplan, opphør av avdragsfri periode, investeringer, vedlikehold, rehabilitering, inngåelse av nye tjenesteavtaler og årsmøtevedtak kan påvirke felleskostnadenes størrelse."
            ],
            "source_documents": [
              "d002_Salgsoppgave"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R13",
            "description": "Bindende TV/internett-avtale med 3 års bindingstid følger seksjonen: Kjøper overtar en kollektivavtale med Viken Fiber med bindingstid til desember 2027, til en kostnad på kr 609,- per måned. Kjøper kan ikke si opp denne avtalen i bindingstiden.",
            "evidence": [
              "Det er inngått avtale med Viken Fiber om leveranse av TV og internett til denne seksjonen. Avtalen gjelder i tre år fra desember 2024, og følger automatisk med salget.",
              "Denne avtalen med bindingstid følger seksjonen.",
              "TV og internett: kr 609,- per måned – Leveres av Viken Fiber gjennom en kollektiv avtale som følger seksjonen. Avtalen har bindingstid i 3 år fra 1. desember 2024.",
              "Avtalen har fra og med 1. februar 2026 en månedspris på 609 kroner per boenhet."
            ],
            "source_documents": [
              "d002_Salgsoppgave"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R14",
            "description": "Sameiet mangler felles bygningsforsikring: Sameiet Bekkedalshøgda har ikke felles bygningsforsikring, noe som betyr at den enkelte seksjonseier selv må sørge for forsikring av sin del av bygget.",
            "evidence": [
              "Sameiet har ikke felles bygningsforsikring.",
              "Eier må selv dekke kostnader forbundet med eget strømforbruk, forsikring av innbo og løsøre samt andre kostnader som ikke dekkes av felleskostnadene."
            ],
            "source_documents": [
              "d002_Salgsoppgave"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R15",
            "description": "Planlagt oppgradering av lekeplass – usikker finansiering: Sameiet har vedtatt å planlegge oppgradering av lekeplass med nye lekestativer. Målet er ekstern finansiering, men fremtidig vedlikehold vil uansett påfalle seksjonseierne.",
            "evidence": [
              "Det er vedtatt å planlegge en oppgradering av sameiets lekeplass med nye lekestativer. Styret har fått fullmakt til å utrede og søke om midler for prosjektet. Målet er at tiltaket skal fullfinansieres gjennom eksterne tilskudd, slik at det ikke medfører økte kostnader for seksjonseierne, med unntak av fremtidig vedlikehold."
            ],
            "source_documents": [
              "d002_Salgsoppgave"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.65
          },
          {
            "risk_id": "R16",
            "description": "Manglende dokumentasjon på bad/våtrom: Selger kjenner ikke til om tettesjikt, membran eller sluk ble fornyet eller oppgradert, og det finnes ingen dokumentasjon på hvordan bad/våtrom er bygget opp.",
            "evidence": [
              "Vet du om tettesjikt, membran eller sluk ble fornyet eller oppgradert? Nei, ikke som jeg kjenner til",
              "Vet du om det finnes dokumentasjon på hvordan bad/våtrom er bygget opp? Nei, ikke som jeg kjenner til"
            ],
            "source_documents": [
              "d002_Salgsoppgave"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R17",
            "description": "Risiko for overbeheftelse og manglende pantefrafall: Dersom eiendommen blir overbeheftet i salgsprosessen og kreditorene ikke gir nødvendig pantefrafall, kan handelen ikke gjennomføres.",
            "evidence": [
              "Dersom eiendommen skulle bli overbeheftet i salgsprosessen, det vil si at summen av fremtidige tinglyste heftelser overstiger den forventede salgssummen, er det en forutsetning for at handel skal kunne gjennomføres at kreditorene gir nødvendig pantefrafall. Dersom pantefrafall ikke oppnås vil handel ikke kunne gjennomføres.",
              "Skulle det bli tinglyst flere utleggspant på eiendommen, kan handel bare gjennomføres forutsatt at også eventuelle fremtidige kreditorer aksepterer å slette sitt pant uten å få full innfrielse av det underliggende kravet."
            ],
            "source_documents": [
              "d002_Salgsoppgave"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.7
          },
          {
            "risk_id": "R18",
            "description": "Grunnforurensning og kulturminner kan forekomme uten å være registrert: Matrikkelen viser ingen registrert grunnforurensning eller kulturminner, men dette utelukker ikke at slike forhold faktisk eksisterer på eiendommen.",
            "evidence": [
              "Grunnforurensning som ikke er registrert kan dermed allikevel forekomme på eiendommen.",
              "Kulturminner som ikke er registrert i Matrikkelen kan dermed allikevel forekomme på eiendommen."
            ],
            "source_documents": [
              "d002_Salgsoppgave"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.6
          },
          {
            "risk_id": "R19",
            "description": "Begrensninger på eierskap og utleie i sameiet: Kun fysiske personer kan kjøpe seksjoner, ingen kan eie mer enn to seksjoner, og korttidsutleie av hele boligen er begrenset til maksimalt 90 dager per år.",
            "evidence": [
              "Det er begrensninger på eierskap i sameiet. Kun fysiske personer kan kjøpe, og ingen kan eie mer enn to boligseksjoner. For utleie gjelder at korttidsutleie (under 30 dager sammenhengende) av hele boligen er begrenset til maksimalt 90 dager per år."
            ],
            "source_documents": [
              "d002_Salgsoppgave"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R20",
            "description": "Tilbakeslagssikring – kommunalt pålegg: Styreleder bekrefter at enkelte seksjonseiere, inkludert denne seksjonen, har fått pålegg fra kommunen om tilbakeslagssikring. Selger opplyser å ha ordnet dette, men det er ikke dokumentert om tiltaket er godkjent av kommunen.",
            "evidence": [
              "Styreleder informerer på mail at det er enkelte seksjonseiere som har fått pålegg fra kommunen om tilbakeslagssikring, dette omhandlet blant annet denne seksjonen. Dette har selger ordnet iht. pålegg.",
              "Installert tilbakeslagsventil og ekspansjonskar i trådd med gjeldende forskrifter (2026). Er tiltaket godkjent av kommunen? Nei, ikke som jeg kjenner til"
            ],
            "source_documents": [
              "d002_Salgsoppgave"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          }
        ],
        "re_retrieval_queries": [
          "samsvarserklæring elektrisk anlegg etter 1999",
          "ferdigattest brukstillatelse godkjenning kommunen",
          "tilbakeslagssikring godkjenning kommunen dokumentasjon",
          "korttidsutleie begrensninger sameiet vedtekter",
          "private stikkledninger vann avløp vedlikehold ansvar",
          "formuesverdi skattemessig konsekvens eierskifte",
          "boligselgerforsikring Fremtind dekningsomfang unntak"
        ],
        "reasoning": "\nGjennomgang av alle 18 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Uregistrerte bygningsendringer (0.97):** Meget godt dokumentert. Flere uavhengige kilder bekrefter elektrisk port (Monter AS, 2017), dør på vestfasade og manglende godkjenning. Confidence opprettholdes på 0.97.\n\n**R2 – Avvik byggetegninger vs. planløsning (0.95):** Godt dokumentert med direkte sitat fra salgsoppgaven. Confidence opprettholdes på 0.95.\n\n**R3 – Pergola og vedbod uten byggemelding (0.90):** Godt dokumentert. Merk at pergolaen er på ca. 9 m², altså UNDER 15 kvm-grensen for søknadsplikt for frittliggende konstruksjoner. Salgsoppgaven er noe upresis her – den sier \"tiltak over 15 kvm er søknadspliktige\" men pergolaen er 9 m². Det kan likevel være søknadspliktig avhengig av type tiltak. Confidence justeres ned til 0.88 pga. denne uklarheten.\n\n**R4 – Taktekking og drenering TG-IU (0.92):** Godt dokumentert. Confidence opprettholdes.\n\n**R5 – Grunnmur og fundament TG-IU (0.88):** Dokumentert, men evidensteksten er ufullstendig (\"Eventuelle sprekker og skader i [ikke fullstendig tekst]\"). Confidence justeres ned til 0.85 pga. ufullstendig evidens.\n\n**R6 – Terrasse og platting TG-IU (0.87):** Godt dokumentert. Confidence opprettholdes.\n\n**R7 – TG-2 på bad (0.93):** Meget godt dokumentert med konkrete funn. Confidence opprettholdes.\n\n**R8 – Elektrisk anlegg ikke kontrollert (0.90):** Godt dokumentert. Confidence opprettholdes.\n\n**R9 – Ingen radonmåling (0.88):** Godt dokumentert. Confidence opprettholdes.\n\n**R10 – Planlagt utbygging og økt trafikk (0.95):** Meget godt dokumentert. Confidence opprettholdes.\n\n**R11 – Hensynssone H110 (0.90):** Godt dokumentert med konkrete bestemmelser. Confidence justeres opp til 0.92 da evidensen er svært konkret og detaljert.\n\n**R12 – Legalpant og solidaransvar (0.85):** Godt dokumentert. Confidence opprettholdes.\n\n**R13 – Bindende TV/internett-avtale (0.92):** Meget godt dokumentert med konkrete beløp og datoer. Confidence opprettholdes.\n\n**R14 – Manglende felles bygningsforsikring (0.90):** Godt dokumentert. Confidence justeres opp til 0.92 da dette er en direkte og klar opplysning i dokumentet.\n\n**R15 – Lekeplass oppgradering (0.75):** Dokumentert, men risikoen er lav da målet er ekstern finansiering og sameiet har ingen fellesgjeld. Confidence justeres ned til 0.65 da dette er en svak risiko med begrenset finansiell eksponering for kjøper.\n\n**R16 – Manglende dokumentasjon bad/våtrom (0.85):** Godt dokumentert. Confidence opprettholdes.\n\n**R17 – Overbeheftelse og pantefrafall (0.78):** Dokumentert som standardformulering i salgsoppgaven. Dette er en generell juridisk risiko som gjelder alle eiendomssalg, ikke spesifikk for denne eiendommen. Confidence justeres ned til 0.70.\n\n**R18 – Grunnforurensning og kulturminner (0.70):** Dokumentert som standardformulering. Ingen spesifikke indikasjoner på faktisk risiko. Confidence justeres ned til 0.60.\n\n**Nye risikoer identifisert:**\n\n**R19 – Begrensninger på eierskap og utleie:** Dokumentet nevner eksplisitt at kun fysiske personer kan kjøpe, maks to seksjoner per eier, og korttidsutleie begrenset til 90 dager/år. Dette er en reell risiko for investorer eller de som planlegger utleie. Confidence: 0.90.\n\n**R20 – Tilbakeslagssikring – kommunalt pålegg:** Styreleder bekrefter at denne seksjonen har fått kommunalt pålegg om tilbakeslagssikring. Selger opplyser å ha utført tiltaket, men svarer \"Nei, ikke som jeg kjenner til\" på om tiltaket er godkjent av kommunen. Dette er en konkret, dokumentert risiko. Confidence: 0.82.\n"
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
    "input_tokens": 22757,
    "output_tokens": 7290,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
