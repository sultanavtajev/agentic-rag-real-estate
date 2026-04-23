# Trace: agentic_reflecting_iter1
- **Run ID:** ebe04879-cdc3-487b-9df9-eb3b833d462a
- **Tidspunkt:** 2026-03-25T12:11:47.443736+00:00
- **Varighet:** 86.91s
- **Input tokens:** 19225
- **Output tokens:** 4332

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
Risiko 1: Eiendommen ligger i et rasfarlig/skredutsatt område i henhold til kommunedelsplan/NVE. Dette utgjør en betydelig sikkerhetsrisiko og kan påvirke forsikringsvilkår, fremtidig salgsverdi og beboernes sikkerhet.
  Confidence: 0.98
  Evidens: Eiendommen ligger i et rasfarlig /skredutsa琀琀 område i henhold 琀椀l kommunedelsplan/NVE.; HMS (forhold av betydning for Helse, miljø og sikkerhet): ‑Eiendommen ligger i et rasfarlig / skredutsatt område i henhold til kommunedelsplan/ NVE.; Opplysningen om at eiendommen ligger i et rasfarlig/skredutsatt område er registrert under HELSE, MILJØ OG SIKKERHET i tilstandsrapporten.

Risiko 2: Terrassen er utvidet med ca. 10 kvm uten at det foreligger søknad til kommunen. Kjøper overtar eiendommen med risiko og ansvar for eventuelle pålegg fra kommunen og kostnader forbundet med dette. Dette kan medføre krav om riving, bøter eller kostbare søknadsprosesser.
  Confidence: 0.97
  Evidens: Det foreligger ingen søknad til kommunen på dette tiltaket. Kjøper overtar eiendommen slik den fremstår på visning med risiko og ansvaret for eventuelle pålegg fra kommunen og kostnader forbundet med dette.; Utvidet terasse med ca 10kvm, 2025; Utvidet terrassen med hjelp av et familiemedlem som er snekker.; Kjenner du til om det har vært utført arbeid på terrasse/garasje/tak/fasade? Svar Ja, kun av ufaglært/egeninnsats/dugnad

Risiko 3: Tilliggende konstruksjoner til badet (våtrom) er ikke undersøkt og er merket TGIU (ikke undersøkt). Det kan foreligge skjulte fukt- eller vannskader som ikke er avdekket, noe som kan medføre betydelige utbedringskostnader.
  Confidence: 0.92
  Evidens: Våtrom > 1. Etasje > Bad > Tilliggende konstruksjoner – TGIU; Det er pga bygningsmessige hindringer ikke fysisk mulig å foreta hulltaking i vegg bak våtsone.; IKKE UNDERSØKT/IKKE TILGJENGELIG FOR UNDERSØKELSE: Det kan være avvik/skader som ikke er avdekket.

Risiko 4: Selger opplyser om en liten sprekk i flis utenfor dusj dør. Dette kan indikere bevegelse i konstruksjonen eller fuktskader, og bør undersøkes nærmere.
  Confidence: 0.88
  Evidens: Kjenner du til om det er/ har vært feil tilknyttet våtrommene, f.eks. sprekker, lekkasje, råte, lukt eller soppskader? Ja; Beskrivelse; Liten sprekk i flis utenfor dusj dør

Risiko 5: Det er ikke utført radonmåling av selger. Eiendommen er bygget med forutsetning om radonsperre, men uten dokumentert måling kan kjøper ikke verifisere at radonnivåene er innenfor akseptable grenser.
  Confidence: 0.85
  Evidens: Selger har ikke utført radonmåling.; Er det foretatt radonmåling? Nei; Basert på byggeåret skal bygget være u琀昀ørt med forskri琀琀smessig radonsperre og jeg forutse琀琀er at det foreligger dokumentasjon så lenge det foreligger ferdiga琀琀est/midler琀椀dig bruks琀椀llatelse på bygningen

Risiko 6: Innvendige dører er vurdert med TG2 på grunn av observerte bruksmerker på dørblader og lister. Dette indikerer behov for tiltak i nær fremtid.
  Confidence: 0.82
  Evidens: Bygningsdeler vurdert med TG2: Innvendig > Innvendige dører; Vurdering av avvik: ‑ Det er observert bruksmerker på dørblader og lister.

Risiko 7: Bygningens fellesdeler (tak, yttervegger, grunnmur, drenering og felles tekniske installasjoner) er ikke undersøkt i tilstandsrapporten. Tilstanden på disse er ukjent, og det anbefales at sameiet innhenter en felles rapport. Kjøper bærer indirekte risiko gjennom sameiebrøk.
  Confidence: 0.88
  Evidens: Tilstandsrapporten tar derfor ikke for seg bygningens fellesdeler som for eksempel tak, yttervegger, grunnmur, drenering, og felles tekniske installasjoner.; Tg ikke satt. Dette er sameiets/borettslagets ansvars område og ikke ytterligere undersøkt, det anbefales at sameiet/borettslaget innhenter felles rapport ang. felles bygningsdeler.; Kjøper må forøvrig sette seg inn årsberetning for utført og planlagt vedlikehold.

Risiko 8: Adkomst til eiendommen skjer via privat vei, og stikkledninger for vann og avløp er private. Vedlikeholdsansvaret for disse påhviler sameiet, noe som kan medføre uforutsette kostnader for sameiet og dermed indirekte for kjøper.
  Confidence: 0.8
  Evidens: Adkomst til eiendommen skjer via privat vei.; Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler sameiet.; Tilknytning avløp: Offentlig og privat. Privat ledning frem til offentlig ledningsnett. Private ledninger vedlikeholdes for eiers (Borettslagets/sameiets) regning.

Risiko 9: Selger opplyser om planlagt utbygging av nye boliger på jordet ned mot kompveien. Dette kan påvirke utsikt, støynivå, trafikk og bomiljø negativt for fremtidige beboere.
  Confidence: 0.85
  Evidens: Er det andre forhold av betydning ved eiendommen som kan være relevant for kjøper å vite om? Ja; Beskrivelse: Utbygging av nye boliger på jordet ned mot kompveien

Risiko 10: Sameiet har legalpant på inntil 2G i hver seksjon som sikkerhet for felleskostnader, og sameierne er solidarisk ansvarlige overfor sameiets kreditorer i forhold til sin sameiebrøk. Dette innebærer at kjøper kan bli ansvarlig for andres mislighold av felleskostnader.
  Confidence: 0.78
  Evidens: I henhold til eierseksjonsloven § 31 er sameierne ansvarlige overfor sameiets kreditorer i forhold til sin sameiebrøk.; Ved manglende betaling av fellesutgifter har sameiet legal panterett i den enkelte eierseksjon, begrenset til inntil 2 ganger folketrygdens grunnbeløp.; Legalpant til kommunen har høyere prioritet enn legalpant til sameiet.

Risiko 11: Avløpsrør ligger delvis skjult, og lufting og stakemuligheter på avløpsanlegget er ikke synlig. Tilstanden på skjulte avløpsrør er ukjent og kan medføre skjulte feil eller lekkasjer.
  Confidence: 0.75
  Evidens: Synlig avløpsrør av plast, øvrige avløpsrør ligger skjult.; Lufting og stakemuligheter på avløpsanlegg er ikke synlig eller tilgjengelig.

Risiko 12: Taket er ikke besiktiget (saltak i trekonstruksjoner tekket med takstein er merket 'ikke besiktig'). Tilstanden på taket er dermed ukjent, og eventuelle skader eller behov for utskifting kan ikke utelukkes.
  Confidence: 0.8
  Evidens: Saltak i trekonstruksjoner tekket med takstein (ikke besiktig).; Inspisering av yttertak er basert på det som er synlig, normalt på innsiden fra loftet og utvendig fra stige/bakkenivå.

Dokumentkontekst:
[d173_d173 | Side [1]]
gningssakkyndig er ikke ansvarlig for tilbakeholdt eller uriktig Etter avtale med eier kan tilstandsanalysen utvides til også å
informasjon, som har betydning for tilstandsvurderingen. omfatte tilleggsundersøkelser utover minimumskravet i forskriften.
Rapporten beskriver avvik, det vil si en tilstand som er dårligere
enn referansenivået. Rapporten vil normalt ikke fremheve positive BEFARINGEN
sider ved boligen ut over det som fremgår av tilstandsgradene.
•For anbefalte tiltak ved TG2 og TG3 må du vurdere

---

[d173_d173 | Side [1]]
ngens alder, slik som slitasje
e琀琀er normal bruk regnes ikke som avvik.
Hva inneholder 琀椀lstandsrapporten?
Den bygningssakkyndige undersøker rom og bygningsdeler slik det kommer frem av Forskri昀琀 琀椀l
avhendingsloven. Tilstandsrapporten inneholder bare avvik som den bygningssakkyndige kan se eller
kontrollere med enkle hjelpemidler. Det gjøres ikke nærmere undersøkelser slik som åpning av vegger
eller andre bygningsdeler. I vegg mot våtrom og rom under terreng kan det borres et hull for å gjøre
enkle

---

[d173_d173 | Side [1]]
jøre 琀椀lstandsgrad. Når bygningssakkyndige anbefaler 琀椀ltak, for eksempel
utbedringer, må brukeren av rapporten vurdere om 琀椀ltakene er nødvendige og lønnsomme.
Når den bygningssakkyndige velger 琀椀lstandsgrad, baseres vurderingen på faste kriterier som følger av gjeldende bransjestandard for Teknisk
琀椀lstandsanalyse ved omsetning av bolig og Forskri昀琀 琀椀l avhendingslova.
TILSTANDSGRAD 0, TG0: INGEN AVVIK
Bygningsdelen skal være 琀椀lnærmet ny, ikke vise tegn på slitasje og det skal være lagt frem

---

[d173_d173 | Side [1]]
side
Boligbygg med 昀氀ere boenheter
• Det foreligger godkjente og byggemeldte tegninger, som
stemmer med dagens bruk
Godkjente byggetegninger er fremvist og gjennomgå琀琀. Det
registreres ingen avvik ut i fra disse.
Oppdragsnr.: 13907-3484 Befaringsdato: 27.02.2026 Side: 6 av 20
43

## Side 44

20
15
10
5
0
Vil du vite mer om 琀椀lstandsgrader? Se side 4.
Oppsummering av avvik
Vil du vite mer? Se på rommet eller bygningsdelen senere i
rapporten.
llatnA
Havres琀椀en 12, 1930 AURSKOG S琀椀gen Boligtakst AS
Gnr 192 -

---

[d173_d173 | Side [1]]
nngrep (f.eks. riving).
gjelder sikkerhet mot brann, rekkverk og trapper osv., vil den
bygningssakkyndige vurdere mot dagens regelverk. Etter dagens
•flater som er skjult av snø eller på annen måte ikke er tilgjengelig
regelverk vil disse kunne få en tilstandsgrad 2 eller 3 uten at det
eller skjult, blir ikke kontrollert.
nødvendigvis er krav om at avviket må utbedres.
•det blir ikke utført funksjonsprøving av bygningsdeler, som
isolasjon, piper, ventilasjon, elektrisk anlegg, osv.
PRESISERINGER
•det gis

---

[d173_d173 | Side [1]]
lse av
over昀氀ater ikke nødvendigvis betyr at bygningsdeler under er
forbedret.
Tilstandsrapporten beskriver ikke hele boligen
BYGNINGSSAKKYNDIGE SER FOR EKSEMPEL IKKE PÅ
• vanlig slitasje og normal vedlikeholds琀椀lstand • bagatellmessige forhold som ikke påvirker bygningens bruk eller verdi vesentlig • etasjeskillere •
琀椀lleggsbygg slik som garasje, bod, anneks, naust også videre • utvendige trapper • stø琀琀emurer • skjulte installasjoner • installasjoner utenfor
bygningen • full funksjonstes琀椀ng av el- og

---

[d173_d173 | Side [1]]
latnA
Havres琀椀en 12, 1930 AURSKOG S琀椀gen Boligtakst AS
Gnr 192 - Bnr 858 Nystuveien 2
3226 AURSKOG-HØLAND 1900 FETSUND
SSaammmmeennddrraagg aavv bboolliiggeennss 琀椀琀椀llssttaanndd
Fordeling av 琀椀lstandsgrader
TG0: Ingen avvik
TG1: Mindre eller moderate avvik
TG2: Avvik som kan kreve 琀椀ltak
TG3: Store eller alvorlige avvik
TG IU: Konstruksjoner som ikke er undersøkt
Boligbygg med 昀氀ere boenheter
KONSTRUKSJONER SOM IKKE ER UNDERSØKT
Våtrom > 1. Etasje > Bad > Tilliggende Gå til side
konstruksjoner

---

[d173_d173 | Side [1]]
iper, ventilasjon, elektrisk anlegg, osv.
PRESISERINGER
•det gis ikke en vurdering av boligens tilbehør, hvite- og
brunevarer og annet inventar. Dette gjelder også integrert
Tilstandsrapporten gjelder hovedbygget. Tilleggsbygninger, som tilbehør.
for eksempel garasje, gis kun en enkel beskrivelse.
•inspisering av yttertak er basert på det som er synlig, normalt på
Avvik er vurdert ut fra tekniske forskrifter på innsiden fra loftet og utvendig fra stige/bakkenivå. I en del
godkjenningstidspunktet for

---

[d173_d173 | Side [1]]
nærmet ny, ikke vise tegn på slitasje og det skal være lagt frem dokumentasjon på
faglig god u琀昀ørelse. Det er ingen merknader 琀椀l delen.
TILSTANDSGRAD 1, TG1: MINDRE AVVIK
Bygningsdelen skal bare ha normal slitasje, og straks琀椀ltak skal ikke anses som nødvendig. Graden kan også
brukes når delen er ny, men der dokumentasjon på faglig god u琀昀ørelse mangler.
TILSTANDSGRAD 2, TG2: VESENTLIGE AVVIK OG MINDRE AVVIK SOM ETTER NS 3600 GIR TG 2
Bygningsdelen skal enten ha feil u琀昀ørelse, en skade eller symptomer

---

[d173_d173 | Side [1]]

Kjøper anses kjent med opplysninger som kommer i Aurskog‑Høland kommune.
tydelig frem i tilstandsrapporten, og det vil ikke være
mulig å gjøre slike forhold gjeldende som en mangel.
Spesielt forhold som er vurdert med TG2 og TG3 bør Selger
vurderes nøye, da de indikerer avvik fra normal slitasje Espen Burhol
og/ eller høy alder, noe som kan innebære behov for
utbedringer. Bygningsdeler som er merket med TGIU er Sameie
ikke blitt vurdert av takstmannen. Sameiet Nyjordet B5
Beskrivelsen av boligen nedenfor

---

[d173_d173 | Side [1]]
ort beskriver synlige skader/avvik eller tegn på skader/avvik på boligen. Rapporten
fremhever vanligvis ikke posi琀椀ve egenskaper ved boligen.
Hva vurderer en bygningssakkyndig?
Den bygningssakkyndige vurderer boligen ut fra hva man kan forvente av en bygning av samme alder
og type. Vurderingen gjøres som regel mot hvordan det var vanlig å bygge og regler som gjaldt da
boligen ble oppført (søknads琀椀dspunktet). Forhold som er vanlige for bygningens alder, slik som slitasje
e琀琀er normal bruk regnes ikke som

---

[d173_d173 | Side [1]]
ingsdelen skal enten ha feil u琀昀ørelse, en skade eller symptomer på skade, sterk slitasje eller nedsa琀琀
funksjon. Graden gis når bygningsdelen trenger vedlikehold eller 琀椀ltak i nær frem琀椀d. Graden skal også brukes
når delen er gammel og det er grunn 琀椀l å varsle om faren for skader på grunn av alderen, eller når det er grunn
琀椀l å overvåke delen spesielt på grunn av fare for større skader eller følgeskader.
TILSTANDSGRAD 3, TG3: STORE ELLER ALVORLIGE AVVIK
Denne 琀椀lstandsgraden brukes ved kra昀琀ige tegn på

---

[d173_d173 | Side [1]]
standsrapport av en kvalifisert bygningssakkyndig.
Rapporten gir en grundig vurdering av boligens tilstand
Øvrig informasjon
og påpeker eventuelle avvik som ble oppdaget under
befaringen. Tilstandsrapporten og selgers egenerklæring
er vedlagt salgsoppgaven, og det er viktig at Adresse
interessenter setter seg grundig inn i disse dokumentene Havrestien 12, 1930 AURSKOG
før bud legges inn.
Gnr. 192, bnr. 858, snr. 7, ideell andel 1/ 1
Kjøper anses kjent med opplysninger som kommer i Aurskog‑Høland

---

[d173_d173 | Side [1]]
er du å vite om 琀椀lstandsrapporten
Tilstanden vurderes med ulike 琀椀lstandsgrader
Tilstanden gir u琀琀rykk for en gi琀琀 forventet 琀椀lstand, blant annet vurdert ut fra alder og normal bruk. Ved Tilstandsgrad 0 (TG0) og Tilstandsgrad 1
(TG1) gir den bygningssakkyndige normalt ingen begrunnelse for valg av 琀椀lstandsgrad. Grunnen er at bygningen eller bygningsdelen da bare har
normal slitasje. Ved skjulte konstruksjoner kan alder alene avgjøre 琀椀lstandsgrad. Når bygningssakkyndige anbefaler 琀椀ltak, for

---

[d173_d173 | Side [1]]
LVORLIGE AVVIK
Denne 琀椀lstandsgraden brukes ved kra昀琀ige tegn på forhold som man må regne med trenger utbedring straks
eller innen kort 琀椀d. Det er påvist funksjonssvikt eller sammenbrudd.
IKKE UNDERSØKT/IKKE TILGJENGELIG FOR UNDERSØKELSE
Det kan være avvik/skader som ikke er avdekket.
Informasjon om utbedringskostnader Tiltak under kr 20 000
Utbedringskostnadene i rapporten er sjablongmessige anslag Tiltak mellom kr 20 000 – 100 000
basert på observerte forhold som feil, skader eller
uregelmessigheter,

---

[d173_d173 | Side [1]]
je av materiale i overflaten Oppdraget ble rekvirert av eier via megler og gikk ut på å avholde
som er basert på enkle visuelle observasjoner. Kan vurderes en Tilstandsrapport Bolig. Rapporten skal reflektere de
sammen med bygningsdelens alder. byggetekniske forhold på befaringstidspunktet som er særlig
relevante ved eierskifte. Det er ikke utført byggetekniske
vurderinger vedrørende tilstand for borettslagets/sameiets bygg-
•Forventet gjenværende brukstid: anslått tid et byggverk eller en
og

---

[d173_d173 | Side [1]]
 og innglasset Dersom det i rapporten er oppgitt årstall for når enkelte
balkong mv (BRA-b). Terrasse- og balkongareal (TBA) opplyses bygningsdeler er fornyet, er årstall oppgitt av eier/rekvirent
der tilstandsrapporten skal benyttes i boligomsetningen og der det og/eller i tidligere takst (hvis ikke annet er oppgitt) og er ikke
er aktuelt. I tillegg kan gulvareal (GUA) og areal med lav kontrollert av undertegnede. Oppgitte årstall må anses som
takhøyde (ALH) opplyses sammen med BRA der det er aktuelt og

---

[d173_d173 | Side [1]]
6 AURSKOG-HØLAND 1900 FETSUND
Forutsetninger
Tilstandsrapportens avgrensninger foreligger godkjente og byggemeldte tegninger, eller når tegninger
ikke stemmer med dagens bruk.
STRUKTUR OG REFERANSENIVÅ
•Bygningssakkyndig gir en forenklet vurdering av branntekniske
forhold og elektriske installasjoner i boligen hvis det er mer enn
•Rapporten baserer seg på krav i forskrift til avhendingslova fem år siden siste el-tilsyn. Ved behov for grundigere
(tryggere bolighandel). Rapportens struktur, metode og

---

[d173_d173 | Side [1]]
lysning og •Tilstand: byggverkets eller bygningsdelens tekniske, funksjonelle
høyttalere, skal ikke demonteres for å sjekke dampsperren bak. eller estetiske status på et gitt tidspunkt.
Dette er av hensyn til bygningssakkyndiges kompetanse og
risikoen for skade.
•Symptom: forhold som gir indikasjon på hvilken tilstand et
byggverk eller en bygningsdel befinner seg i. Benyttes ved
•Kontroll av fukt i konstruksjonen ved hulltaking i bad og beskrivelse av avvik og alder.
vaskerom (våtrom), rom under terreng

---

[d173_d173 | Side [1]]
g røykvarsler.
Lovpålagt røykvarsler og pulverapparat skal følge boligen ved salg. Brannslukningsutstyret er ikke funksjonstestet.
Basert på byggeåret skal bygget være u琀昀ørt med forskri昀琀smessig radonsperre og jeg forutse琀琀er at det foreligger dokumentasjon så lenge det foreligger
ferdiga琀琀est/midler琀椀dig bruks琀椀llatelse på bygningen
Vurdering av avvik:
• Eiendommen ligger i et rasfarlig /skredutsa琀琀 område i henhold 琀椀l kommunedelsplan/NVE.
Konsekvens/琀椀ltak
Opplysningen om at eiendommen ligger i et

---

[d173_d173 | Side [1]]
det gnr 192 bnr 599
Delfelt B 5.1
Saksnr: 00/ 00000 Vei, vann og avløp
Planen er datert: 21.10.2013 Eiendommen er tilknyttet offentlig vann‑ og
Bestemmelsene er datert 14.11.2013 avløpssystem. Stikkledningene fra eiendommen og ut til
det kommunale nettet er private, og
vedlikeholdsansvaret for disse påhviler sameiet.
Tinglyste heftelser Adkomst til eiendommen skjer via privat vei.
Tinglyste heftelser og rettigheter: På eiendommen er det
tinglyst følgende heftelser og rettigheter som følger
eiendommens

---

[d173_d173 | Side [1]]
inglyst følgende heftelser og rettigheter som følger
eiendommens matrikkel ved overskjøting til ny Utleie
hjemmelshaver: Adgang til utleie: Utleie er tillatt iht. sameiets vedtekter.
Leietaker skal meldes til sameiets styre og
3226/ 192/ 858/ 7: forretningsfører.
27.06.2016 ‑ Dokumentnr: 578747 ‑ Bestemmelse iflg.
skjøte
Pliktig medlemskap i velforening/ huseierforening Radonmåling
Selger har ikke utført radonmåling. Det er ikke krav om
07.01.2016 ‑ Dokumentnr: 13603 ‑ Seksjonering dette med mindre boligen

---

[d173_d173 | Side [1]]
 Er det foretatt radonmåling?
Nei Ja
22 Kjenner du til manglende brukstillatelse eller ferdigattest?
Nei Ja
23 Kjenner du til om det foreligger skaderapporter/ tilstandsvurderinger eller utførte målinger?
Nei Ja
24 Er det andre forhold av betydning ved eiendommen som kan være relevant for kjøper å vite om (f.eks. rasfare, tinglyste forhold eller private
avtaler)?
Nei Ja
Beskrivelse Utbygging av nye boliger på jordet ned mot kompveien
Initialer selger: EB 3
74006240
:ecnerefer
tnemucoD
35

## Side

---

[d173_d173 | Side [1]]
 ut i kjeller eller loft eller andre deler av boligen?
Nei Ja
19 Kjenner du til forslag eller vedtatte reguleringsplaner, andre planer, nabovarsel eller offentlige vedtak som kan medføre endringer i bruken av
eiendommen eller av dens omgivelser?
Nei Ja
20 Kjenner du til om det foreligger påbud/heftelser/krav/manglende tillatelser vedrørende eiendommen?
Nei Ja
Initialer selger: EB 2
74006240
:ecnerefer
tnemucoD
34

## Side 35

21 Er det foretatt radonmåling?
Nei Ja
22 Kjenner du til manglende

---

[d173_d173 | Side [1]]
gsetaten, forøvrig ingen spesielle forhold takstmannen ble gjort kjent med på befaringen. For eventuelt
andre servitu琀琀er/bestemmelser på seksjonen/eiendommen henvises 琀椀l Statens kartverk ved Tinglysningen, tlf: 32118800.
Opplysninger gi琀琀 av kunde
Rekvirent/eier opplyser ang. følgende vedlikeholds historikk:
By琀琀et silikon på kjøkkenbenk, 2026
By琀琀et silikon i dusjen, 2026
Malt begge soverom, 2024
Hengt opp lampe i stuen, 2024
Utvidet terasse med ca 10kvm, 2025
Vedlikeholds historikk u琀昀ørt i regi av

---

[d173_d173 | Side [1]]
ring
hverdag. Samtidig er det relativt kort vei til større ved å utvide terrassen. Det foreligger ingen søknad til
tettsteder og pendlemuligheter mot blant annet kommunen på dette tiltaket. Kjøper overtar eiendommen
Lillestrøm og Oslo. slik den fremstår på visning med risiko og ansvaret for
eventuelle pålegg fra kommunen og kostnader forbundet
med dette.
Parkering
Det følger to parkeringsplasser med seksjonen; en
22

## Side 23

OM EIENDOMMEN
gulvareal som ikke er måleverdig på grunn av

---

[d173_d173 | Side [1]]
ameiet har
legalpant på inntil 2G som sikkerhet for krav knyttet til
sameieforholdet, som felleskostnader. Legalpant er pant
Regulerings og arealplaner som ikke vises i grunnboksutskriften, og har prioritet
Eiendommen er regulert til boligbebyggelse ‑ konsentrert foran tinglyste lån, for eksempel banklån på seksjonen.
småhusbebyggelse. Legalpant til kommunen har høyere prioritet enn
Gjeldende reguleringsplan: legalpant til sameiet.
Nordjordet gnr 192 bnr 599
Delfelt B 5.1
Saksnr: 00/ 00000 Vei, vann og

---

[d173_d173 | Side [1]]
vegger: Malte glatte flater.
kan være relevant for kjøper å vite om (f.eks. rasfare, Overflatebehandling himling: Malte glatte flater.
tinglyste forhold eller private avtaler)? Etasjeskillere i betong.
Ja Det er kun gjort punktmålinger av gulvet på befaringen.
Beskrivelse Utbygging av nye boliger på jordet ned mot Svanker eller lignende kan forekomme.
kompveien
I forbindelse med salget er det blitt utført en
24

## Side 25

OM EIENDOMMEN
tilstandsrapport av en kvalifisert bygningssakkyndig.
Rapporten gir

---

[d173_d173 | Side [1]]
elger dersom ikke 
annet er opplyst i salgsoppgaven, kjøper har tatt forbehold i bud eller avtale på annen måte er 
inngått. Der intet annet er avtalt, vil løsøre og tilbehør medfølge slik dette fremkommer av avhl. § 3-4 
og § 3-5 og denne oversikt. 

Produkter og installasjoner som medfølger overdras uten noen form for garantier, utover eventuell 
gjenværende leverandørgaranti.

Dersom det er noe i nedenstående liste som ikke 昀椀nnes på eiendommen, vil det heller ikke medfølge.
1. HVITEVARER

---

[d173_d173 | Side [1]]
 (f.eks. drenering,
murerarbeid, tømrerarbeid etc)?
Nei Ja
15 Er det nedgravd oljetank på eiendommen?
Nei Ja
16 Kjenner du til om det har vært utført arbeid på terrasse/garasje/tak/fasade?
Svar Ja, kun av ufaglært/egeninnsats/dugnad
Beskrivelse Utvidet terrassen med hjelp av et familiemedlem som er snekker.
17 Selges eiendommen med utleiedel, leilighet, hybel eller tilsvarende?
Nei Ja
18 Kjenner du til om det er innredet/bruksendret/bygget ut i kjeller eller loft eller andre deler av boligen?
Nei Ja
19

---

[d173_d173 | Side [1]]
d. www.soderbergpartners.no/ eiendom/ boligkjoper/
I henhold til eierseksjonsloven § 31 er sameierne
ansvarlige overfor sameiets kreditorer i forhold til sin Lovanvendelse
sameiebrøk. Ved manglende betaling av fellesutgifter har Regelverk og generelle opplysninger
sameiet legal panterett i den enkelte eierseksjon, Boligen selges med det inventar og utstyr som i henhold
begrenset til inntil 2 ganger folketrygdens grunnbeløp. til gjeldende lover, forskrifter eller offentlige pålegg skal
følge med eiendommen,

---

[d173_d173 | Side [1]]
l inntil 2 ganger folketrygdens
mulig å foreta hulltaking i vegg bak våtsone. grunnbeløp.
HMS (forhold av betydning for Helse, miljø og sikkerhet):
‑Eiendommen ligger i et rasfarlig / skredutsatt område i Vedtekter/ husordensregler
henhold til kommunedelsplan/ NVE. Sameiets vedtekter og husordensregler følger vedlagt i
25

## Side 26

OM EIENDOMMEN
salgsoppgaven.
01.01.2020 ‑ Dokumentnr: 1797857 ‑ Omnummerering
ved kommuneendring
Energimerke Tidligere: Knr:0221 Gnr:192 Bnr:858 Snr:7
Energikarakter:

---

[d173_d173 | Side [1]]
Lovlighet
Byggetegninger
Det foreligger godkjente og byggemeldte tegninger, som stemmer med dagens bruk
Kommentar: Godkjente byggetegninger er fremvist og gjennomgå琀琀. Det registreres ingen avvik ut i fra disse.
Nyere håndverkstjenester
Er det ifølge eier u琀昀ørt håndverkstjenester på boligen siste 5 år? Ja Nei
Kommentar: Det henvises 琀椀l vedlikeholdshistorikk gi琀琀 av kunde for nærmere detaljer om u琀昀ørte arbeider.
Kommentar
Boligbygg med 昀氀ere boenheter Rom som ligger utenfor boenheten, men som eier har

---

[d173_d173 | Side [1]]
leveres kjøper på 
overtakelsen, herunder nøkler til eventuelle boder, uthus, garasjeportåpner e.l. Låses boder, uthus 
Ærlighet varer lengst Erfaring som gir resultater
e.l. med hengelås, skal lås og nøkler til disse medfølge. 
22. GARASJEHYLLER, bodhyller, lagringshyller og oppheng til bildekk medfølger såfremt de er 
Vi tror sterkt på åpenhet og ærlighet og gir ingen Vi sier det som det er – enkelt og greit – fordi vi
fastmontert.
urealistiske løfter eller forskjønnede beskrivelser. vet at det gir

---

[d173_d173 | Side [1]]
ldende fra 1. januar 2020.

Generelt
Lov om avhending av fast eigedom (avhendingslova/avhl.) av 3. juli 1992 regulerer kjøper og selgers 
rettigheter og plikter ved overdragelse av fast eiendom og andeler i borettslag.

I henhold til avhl. § 3-4 skal eiendommen, når annet ikke er avtalt, overdras med innredninger og 
utstyr som etter lov, forskrift eller annet o昀昀entlig vedtak skal følge med. Det samme gjelder varig 
innredning og utstyr som enten er fastmontert eller er særskilt tilpasset

---

[d173_d173 | Side [1]]
ng såler. Grunnmur av betong. Over grunnmur er det
yttervegger i bindingsverk med utvendig trekledning.
Kjøper aksepterer at det kan forekomme hull og merker Saltak i trekonstruksjoner tekket med takstein (ikke
etter montering av inventar og utstyr som ikke er en del besiktig).
av overdragelsen. Rapporten begrenser seg til boligen, og det som normalt
vil omfattes av eiers selvstendige vedlikeholdsansvar
som seksjonseller andelseier. Normalt utgjør dette alt
Eiendommens
innenfor seksjonens/ andelens

---

[d173_d173 | Side [1]]
l boligens beliggenhet,
areal, byggeår og type bolig. Stortinget har vedtatt en ny
Eiendomsskatt modell for beregning som skal benyttes fra og med
Kr 4 633,‑ (2026) inntektesåret 2026, og den nye modellen henter
21

## Side 22

OM EIENDOMMEN
informasjon om omsatte boliger fra grunnkretser i stedet utvendig p‑plass og en plass i carport. Øvrig parkering
for kommuner. etter områdets bestemmelser.
Formuesverdien er en prosentandel av den beregnede
boligverdien. Adkomst
På høyre side i annonsen finner du et

---

[d173_d173 | Side [1]]
 med bygg er gi琀琀 av selger.
VÅTROM Gå 琀椀l side
Det er ikke gi琀琀 informasjon 琀椀l takstmann som 琀椀lsier at det er
skader, lekkasjer, problemer med skadedyr eller maur.
Bad
Aktuell byggeforskri昀琀 er teknisk forskri昀琀 2010.
For y琀琀erligere informasjon og andre vik琀椀ge bemerkninger se
Bad med 昀氀iser på gulv og vegger. Innredningen består av et
under egne premisser og byggebeskrivelser med respek琀椀ve
underskap, servant, speil med lys, s琀椀kk og en dusjsone med dusjing
琀椀lstandsgrader.
direkte på gulv og

---

[d173_d173 | Side [1]]
pdaget ved en ordinær En eiendom anses å ha en mangel dersom den ikke
gjennomgang. oppfyller kravene som følger av avtalen, eller ved brudd
på bestemmelser i avhendingsloven §§ 3‑2 til 3‑8. Det
Dersom det oppstår behov for ytterligere avklaringer, samme gjelder hvis eiendommen ikke samsvarer med
oppfordres interessenter til å kontakte eiendomsmegler det som med rimelighet kunne forventes ut fra blant
eller egne rådgivere før de gir bud. annet alder, type og synlig tilstand – eller hvis det er
tilbakeholdt,

---

[d173_d173 | Side [1]]
lags isolerglass
Kjenner du til om det har vært utført arbeid på terrasse/ terrassedør fra 2015
garasje/t ak/ fasade? Utgang fra stue til en platting på ca. 35m2 og en
Ja, kun av ufaglært/ egeninnsats/ dugnad adkomst platting på ca 25m2.
Beskrivelse Utvidet terrassen med hjelp av et
familiemedlem som er snekker. Innvendig:
Overflatebehandling gulv: Parkettgulv og fliser.
Er det andre forhold av betydning ved eiendommen som Overflatebehandling vegger: Malte glatte flater.
kan være relevant for kjøper å vite

---

[d173_d173 | Side [1]]
derfor ikke for seg bygningens fellesdeler som for eksempel tak, y琀琀ervegger,
grunnmur, drenering, og felles tekniske installasjoner.
Kjøper må forøvrig se琀琀e seg inn årsberetning for u琀昀ørt og planlagt vedlikehold.
Tg ikke sa琀琀. De琀琀e er sameiets/bore琀琀slagets ansvars område og ikke y琀琀erligere undersøkt, det anbefales at sameiet/bore琀琀slaget innhenter felles rapport
ang. felles bygningsdeler.
Vinduer
Vinduer med 3 lags isoler glass med produksjonsår 2015.
Det er ikke avdekket svekkelser eller punkterte

---

[d173_d173 | Side [1]]
d tekniske føringsveier. Det ble utført firma regnes også med. I henhold til eierseksjonsloven §
fuktmåling med en fuktsøker på gulv og vegger uten å 31 er sameierne ansvarlige overfor sameiets kreditorer i
registrere noe unormal fukt. forhold til sin sameiebrøk. Ved manglende betaling av
Vurdering av avvik: fellesutgifter har sameiet legal panterett i den enkelte
‑ Det er pga bygningsmessige hindringer ikke fysisk eierseksjon, begrenset til inntil 2 ganger folketrygdens
mulig å foreta hulltaking i vegg

---

[d173_d173 | Side [1]]
il om Tg ikke satt. Dette er sameiets/ borettslagets ansvars
det er/ har vært feil tilknyttet våtrommene, f.eks. sprekker, område og ikke ytterligere undersøkt, det anbefales at
lekkasje, råte, lukt eller soppskader? sameiet/ borettslaget innhenter felles rapport ang. felles
Ja bygningsdeler.
Beskrivelse; Liten sprekk i flis utenfor dusj dør Vinduer med 3 lags isoler glass med produksjonsår 2015.
En B‑30 ytterdør med kamera kikkehull. 3 lags isolerglass
Kjenner du til om det har vært utført arbeid på

---

[d173_d173 | Side [1]]
g, og felles tekniske installasjoner.
Skal anleggets 琀椀lstand og utski昀琀ningsbehov avklares må anlegget
Kjøper må forøvrig se琀琀e seg inn årsberetning for u琀昀ørt og planlagt
kontrolleres av en fagmann.
vedlikehold.
Tg ikke sa琀琀. De琀琀e er sameiets/bore琀琀slagets ansvars område og Synlig avløpsrør av plast, øvrige avløpsrør ligger skjult.
ikke y琀琀erligere undersøkt, det anbefales at sameiet/bore琀琀slaget Lu昀琀ing og stakemuligheter på avløpsanlegg er ikke synlig eller
innhenter felles rapport ang. felles

---

[d173_d173 | Side [1]]
akstmannen. Sameiet Nyjordet B5
Beskrivelsen av boligen nedenfor er hentet direkte fra Organisasjonsnummer: 917649871
tilstandsrapporten:
Forretningsfører: Høilund Regnskap AS
Bygningsdeler vurdert med TG2:
Innvendig > Innvendige dører Sameiets forsikringsselskap: Storebrand
Vurdering av avvik:
‑ Det er observert bruksmerker på dørblader og lister. Polisenummer fellesforsikring: 8093286
Bygningsdeler vurdert med TG3: Husdyr: Dyrehold er tillatt iht. husordensreglene.
Ingen
Styregodkjennelse: Sameiet

---

[d173_d173 | Side [1]]
rmalt utgjør dette alt
Eiendommens
innenfor seksjonens/ andelens vegger.
Tilstandsrapporten tar derfor ikke for
tilstand
seg bygningens fellesdeler som for eksempel tak,
Takstmann: Jo Henrik Stigen yttervegger, grunnmur, drenering, og felles tekniske
installasjoner.
Type takst avholdt av takstmann: Tilstandsrapport Kjøper må forøvrig sette seg inn årsberetning for utført
og planlagt vedlikehold.
Sammendrag selgers egenerklæring: Kjenner du til om Tg ikke satt. Dette er sameiets/ borettslagets ansvars
det

---

[d173_d173 | Side [1]]
.
Tilknytning avløp
O昀昀entlig og privat. Privat ledning frem 琀椀l o昀昀entlig ledningsne琀琀.Private ledninger vedlikeholdes for eiers (Bore琀琀slagets/sameiets) regning.
Regulering
Se kommunens planer i området.
Om tomten
Sameiet eier tomten på4654.6 m2.
Tinglyste/andre forhold
Eier/rekvirent bes lese takstdokumentet før bruk for å avdekke eventuelle feil eller mangler. Takstmannen har ikke undersøkt/vurdert
regulering eller andre forhold i bygningsetaten, forøvrig ingen spesielle forhold takstmannen ble gjort

---

[d173_d173 | Side [1]]
k. omk
Kr 3 243 340 Formuesverdi
Formuesverdi primær: Kr 837 375 (2024)
Felleskostnader Formuesverdi sekundær: Kr 3 349 498 (2024)
Felleskostnader kr 1 170,‑ pr. mnd
Info om formuesverdi: Skatteetaten beregner en
Felleskostnader inkulderer: Bygningsforsikring, boligverdi (beregnet markedsverdi for bolig) basert på
regnskapshonorar, revisor, vedlikehold uteområde SSBs statistiske opplysninger om omsatte boliger. I
beregningen tas det hensyn til boligens beliggenhet,
areal, byggeår og type bolig. Stortinget

---

[d173_d173 | Side [1]]
stallasjoner utenfor
bygningen • full funksjonstes琀椀ng av el- og VVS-installasjoner • geologiske forhold og bygningens plassering på grunnen • bygningens
planløsning • bygningens innredning • løsøre slik som hvitevarer • utendørs svømmebasseng og pumpeanlegg • bygningens este琀椀kk og
arkitektur • bygningens lovlighet (bortse琀琀 fra bruksendringer, brannceller og forhold som åpenbart kan påvirke helse, miljø og sikkerhet) •
fellesarealer (med mindre boligeier har vedlikeholdsplikt for fellesarealer og de琀琀e

---

[d173_d173 | Side [1]]
ventet gjenværende brukstid: anslått tid et byggverk eller en
og fellesarealer.
del av et byggverk vil kunne tjene sitt formål (NS 3600:2018,
Rapporten begrenser seg til leiligheten, og det som normalt vil
termer og definisjoner punkt 3.9).
omfattes av eiers selvstendige vedlikeholdsansvar som seksjons-
eller andelseier. Normalt utgjør dette alt innenfor
AREALBEREGNING FOR BOENHETER leilighetens/seksjonens/andelens vegger. Tilstandsrapporten tar
derfor ikke for seg bygningens fellesdeler som for eksempel

---

[d173_d173 | Side [1]]
entert på fastemasser med betong
såler. Grunnmur av betong. Over grunnmur er det y琀琀ervegger i bindingsverk med utvendig trekledning. Saltak i trekonstruksjoner tekket med takstein
(ikke besik琀椀g).
Rapporten begrenser seg 琀椀l boligen, og det som normalt vil omfa琀琀es av eiers selvstendige vedlikeholdsansvar som seksjons- eller andelseier. Normalt
utgjør de琀琀e alt innenfor seksjonens/andelens vegger. Tilstandsrapporten tar derfor ikke for seg bygningens fellesdeler som for eksempel tak,

---

[d173_d173 | Side [1]]
rsikring: Selger har tegnet kjøper setter seg grundig inn i alle salgsdokumentene,
boligselgerforsikring som dekker selgers ansvar etter herunder salgsoppgave, tilstandsrapport og selgers
avhendingsloven begrenset oppad kr. 20 000 000,‑. egenerklæring. Kjøper anses for å være kjent med
Egenerklæringsskjema er vedlagt salgsoppgaven og forhold som er tydelig beskrevet i salgsdokumentene,
interessenter oppfordres til å gjennomgå denne før bud slike forhold kan ikke senere gjøres gjeldende som en
inngis.

---

[d173_d173 | Side [1]]

Initialer selger: EB 3
74006240
:ecnerefer
tnemucoD
35

## Side 36

Tilleggskommentar
Jeg bekrefter at opplysningene er gitt etter beste skjønn. Jeg er kjent med at dersom jeg har gitt ufullstendige, uriktige eller misvisende
opplysninger om eiendommen, vil forsikringsselskapet kunne søke hel eller delvis regress for sine utbetalinger eller redusere sitt ansvar helt
eller delvis, jfr. vilkår for boligselgerforsikring punkt 7.1 og forsikringsavtaleloven kapittel 4.
Jeg er orientert om mitt mulige ansvar

---

[d173_d173 | Side [1]]
ftlig samtykke akseptere tegning av forsikring også i ovennevnte tilfeller.
Dersom forsikringsselskapet ikke har gitt skriftlig samtykke, kan erstatningen bortfalle.
Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter, begrenset til siste 12 måneder før overtakelse.
Forøvrig oppfordrer selger potensielle kjøpere til å undersøke eiendommen grundig, jf avhendigsloven § 3-10 og kjøpsloven § 20
(aksjeboliger).
Gyldig forsikring forutsetter at det for helårs- og fritidsbolig

---

[d173_d173 | Side [1]]
rettshjelpsforsikring interessenter anbefales derfor å undersøke eiendommen
som gir trygghet og profesjonell juridisk hjelp dersom det nøye, gjerne sammen med fagperson, før bud gis.
oppdages uventede feil eller mangler ved boligen de Dersom kjøper velger å kjøpe uten å ha sett
neste fem årene. Les mer om Boligkjøperforsikring i eiendommen, kan det ikke etter overtakelse reklameres
27

## Side 28

OM EIENDOMMEN
på forhold som burde ha vært oppdaget ved en ordinær En eiendom anses å ha en mangel dersom den

---

[d173_d173 | Side [1]]
ud slike forhold kan ikke senere gjøres gjeldende som en
inngis. mangel ved boligen. Dette gjelder uavhengig av om
dokumentene er lest.
Boligkjøperforsikring: Kjøper har anledning til å tegne
boligkjøperforsikring. Vedlagt i salgsoppgaven følger Det kan være forskjell mellom boligens faktiske bruk av
informasjon om Boligkjøperforsikring fra Söderberg & rom og det som er godkjent av myndighetene. Alle
Partners. Boligkjøperforsikring er en rettshjelpsforsikring interessenter anbefales derfor å undersøke

---

[d173_d173 | Side [1]]
 vil dette skjema være en del av salgsoppgaven
Meglerfirma
EMERA Lillestrøm
Oppdragsnr.
04260047
Selger 1 navn
Espen Burhol
Gateadresse
Havrestien 12
Poststed Postnr
AURSKOG 1930
Er det dødsbo?
Nei Ja
Avdødes navn
Er det salg ved fullmakt?
Nei Ja
Hjemmelshavers navn
Har du kjennskap til eiendommen?
Nei Ja
Når kjøpte du boligen?
År 2022
Hvor lenge har du eid boligen?
Antall år 3
Antall måneder 11
Har du bodd i boligen siste 12 måneder?
Nei Ja
I hvilket forsikringsselskap har du tegnet

---

[d173_d173 | Side [1]]
alder, type og synlig tilstand – eller hvis det er
tilbakeholdt, eller gitt feilaktige opplysninger, og dette har
Slitasje og bruk påvirket avtalen.
Det må også forventes at eiendommer som har vært i
bruk, vil kunne ha tegn til slitasje og eventuelle skader. Dersom det er avvik mellom oppgitt og faktisk innvendig
Slik normal bruksslitasje og behov for vedlikehold må areal på minst 2 % og samtidig minst 1 kvadratmeter, kan
kjøper påregne, og dette vil normalt ikke gi grunnlag for dette utløse rett til

---

[d173_d173 | Side [1]]
jonsgrunnlaget
Overtakelse Opplysninger om boligens størrelse og utforming, både
Tidspunkt for overtakelse avtales mellom kjøper og innvendig og utvendig, bygger på informasjon hentet fra
selger. vedlagte tilstands‑ og boligsalgsrapport. Innholdet i
salgsoppgaven er basert på selgers informasjon,
fagkyndig vurdering, samt opplysninger fra offentlige
Forsikring registre som kommunen og Kartverket. Det er viktig at
Boligselgerforsikring: Selger har tegnet kjøper setter seg grundig inn i alle

---

[d173_d173 | Side [1]]
ll markedsføring til profesjonalitet gjennom hele prosessen.
20. BRANNSLUKNINGSAPPARAT, BRANNSLANGE og RØYKVARSLER medfølger der dette er påbudt. 
overtakelse og gjennomføring av salget.
Det er eier og brukers plikt til å se til at utstyret fore昀椀nnes på enhver eiendom. Hvis annet ikke er 
uttrykkelig avtalt, skal dette derfor alltid følge med ved salg av eiendom.
21. SAMTLIGE NØKLER til eiendommen som selger er i besittelse av skal overleveres kjøper på 
overtakelsen, herunder nøkler til eventuelle

---

[d173_d173 | Side [1]]
ikring forutsetter at det for helårs- og fritidsbolig
foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere bolighandel). Forsikringen er ugyldig dersom
den tegnes i strid med forsikringsvilkårene. Jeg er innforstått med at eiendomsmegleren ikke har fullmakt til å gjøre unntak fra
ovennevnte begrensninger. Jeg er oppmerksom på at 8% av total forsikringspremie er honorar til Söderberg & Partners.
Jeg ønsker ikke boligselgerforsikring, men megler har tilbudt meg å kjøpe slik

---

[d173_d173 | Side [1]]
gsavtaleloven kapittel 4.
Jeg er orientert om mitt mulige ansvar som selger etter avhendingsloven, eventuelt etter kjøpsloven (aksjeboliger), og om forsikringsgiver sitt
boligselgerforsikringstilbud.
Jeg er klar over at avtale om forsikring er bindende. Jeg er også klar over at premietilbudet først kan påberopes når boligen er solgt
(budaksept). Premietilbudet som er gitt av megler er bindende for forsikringsgiver i 6 – seks – måneder fra oppdragsinngåelse med megler.
Etter dette vil premien og

---

[d173_d173 | Side [1]]
mmet i stand, kan
så langt det er nødvendig, å orientere selger, budgivere og
en budgiver kreve kopi av budjournalen i anonymisert
øvrige interessenter om bud og forbehold. Dersom bud
form.
inngis med en frist som åpenbart er for kort til at
megleren kan avvikle budrunden på en forsvarlig måte
som sikrer selger og interessenter et tilstrekkelig grunnlag
VIKTIGE AVTALERETTSLIGE FORHOLD:
1.Det eksisterer ingen angrerett ved salg/kjøp av fast 3.Selger står fritt til å forkaste eller akseptere ethvert
eiendom.

---

[d173_d173 | Side [1]]
måneder før overtagelse. Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter,
begrenset til siste 12 måneder før overtakelse. Jeg bekrefter med dette at eiendommen ikke er en næringseiendom, at den ikke
selges som ledd i næringsvirksomhet eller mellom ektefeller eller slektninger i rett oppstigende eller nedstigende linje, søsken, eller
mellom personer som bor eller har bodd på boligeiendommen. Gyldig forsikring forutsetter at det for helårs- og fritidsbolig
foreligger

---

[d173_d173 | Side [1]]
sses av i kjøpekontrakten.
Forsikringsbevis og vilkår sendes per e-post.
Forsikringen er meglet frem av Söderberg & Partners og soderbergpartners.no/eiendom
er plassert hos Gar-Bo Försäkring AB.
*Det tas forbehold om pris- og vilkårsendringer.

## Side 89

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
Lov om avhending av fast

---

[d173_d173 | Side [1]]
på at arealopplysninger i denne rapporten er basert på en fysisk oppmåling, og kan avvike fra arealopplysninger
basert på byggemeldte tegninger. Dersom det ikke er fremlagt byggemeldte tegninger for boligen, vil den bygningssakkyndige i de 昀氀este
琀椀lfeller ikke kunne måle opp skjulte sjakter o.l. Sjakter som betjener 昀氀ere bruksenheter eller andre formål, for eksempel avfallssjakter.
Kunde opplyser at det medfølger en bilopps琀椀llingsplass.
Lovlighet
Byggetegninger
Det foreligger godkjente og byggemeldte

---

[d173_d173 | Side [1]]
digattest på eiendommen datert
naturopplevelser. 27.05.2016.
Det er utstedt ferdigattest for carporter og
Eiendommen ligger i et trivelig bomiljø med renovasjonsbygg datert 11.12.2015.
opparbeidede fellesarealer og gode uteområder, noe
som gjør dette til et ideelt sted for både familier, Det er mottatt godkjente byggemeldte tegninger.
førstegangskjøpere og de som ønsker en rolig og trygg ‑ Av tegninger fremgår det at det er gjort fasadeendring
hverdag. Samtidig er det relativt kort vei til større ved å

---

[d173_d173 | Side [1]]
ger og
offentlig kommunikasjon, noe som gjør hverdagen både Type eiendom
enkel og praktisk. Eieform: Eierseksjon
Nærområdet byr også på flotte rekreasjonsmuligheter Objektstype: Eierseksjon
året rundt. Flere merkede turstier, skogsområder og
skiløyper finnes i kort avstand fra boligen, og populære
utfartssteder som Tevsjøen, Mangenskogen og Killingmo Ferdigattest/ brukstillatelse:
gård gir gode muligheter for friluftsliv og Det er utstedt ferdigattest på eiendommen datert
naturopplevelser. 27.05.2016.
Det

---

[d173_d173 | Side [1]]
delt opp i brannceller helse og sikkerhet, for eksempel krav 琀椀l rømningsvei.
e琀琀er kravene i byggteknisk forskri昀琀 på befarings琀椀dspunktet, skal det opplyses om
de琀琀e. Bruksendring som krever godkjenning, og som ikke er søkt bruksendret,
er ulovlig. Kommunen kan e琀琀er plan- og bygningsloven kapi琀琀el 32
Reglene om bruksendring og brannceller kan være kompliserte. Søk videre faglige forfølge overtredelser. Kommunen kan pålegge deg å avslu琀琀e den
råd om rapporten ikke gir deg svar. Den bygningssakkyndige kan

---

[d173_d173 | Side [1]]
yld. Hold spjeldet lukket når peisen
ikke er i bruk.
63

## Side 64

Nabolagsprofil
Havrestien 12 - Nabolaget Aursmoen - vurdert av 102 lokalkjente
Nabolaget spesielt anbefalt for
Opplevd trygghet
Familier med barn Veldig trygt 92/100
Husdyreiere
Naboskapet
Etablerere
Godt vennskap 76/100
Kvalitet på skolene
Offentlig transport Bra 68/100
Aurskog sykehjem 7 min
Linje 470, 470E 0.5 km
Aldersfordeling
Bjørkelangen stasjon 13 min
Linje 470, 470E, 480, 480E, 485 10.6 km
Blaker stasjon 16 min Linje R14 15.1

---

[d173_d173 | Side [1]]
er. Lagring gjøres i
innvendig bod/ teknisk rom og i en utvendig sportsbod.
Det følger to parkeringsplasser, hvorav den ene er i carport.
Området er rolig og etablert, samtidig som man har kort avstand til
sentrum med et godt utvalg av servicetilbud.
Velkommen til visning!
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

##

---

[d173_d173 | Side [1]]
Egen bil
Aurskog apotek 6 min
2. Buss
Aldersfordeling barn (0-18 år)
Turmulighetene
Nærhet til skog og mark 95/100
30% i barnehagealder
39% 6-12 år
Gateparkering
16% 13-15 år
Lett 93/100 16% 16-18 år
Støynivået
Lite støynivå 93/100
Familiesammensetning
Sport
Par m. barn
Aursmoen idrettsanlegg 10 min
Aktivitetshall, ballspill, fotball, sand... 0.8 km
Par u. barn
Aurskoghallen - Aursmoen idrettshall 12 min
Aktivitetshall 1.1 km
Aura Trening og Helse 5 min Enslig m. barn
MOVA Bjørkelangen 10 min
Enslig u.

---

[d173_d173 | Side [1]]
åtrom > 1. Etasje > Bad > Tilliggende Gå til side
konstruksjoner våtrom
HELSE, MILJØ OG SIKKERHET
Forhold som åpenbart kan medføre fare for helse, miljø og sikkerhet
Eiendommen ligger i et rasfarlig /skredutsa琀琀 område i Gå til side
henhold 琀椀l kommunedelsplan/NVE.
Oppdragsnr.: 13907-3484 Befaringsdato: 27.02.2026 Side: 7 av 20
44

## Side 45

Havres琀椀en 12, 1930 AURSKOG S琀椀gen Boligtakst AS
Gnr 192 - Bnr 858 Nystuveien 2
3226 AURSKOG-HØLAND 1900 FETSUND
Tilstandsrapport
BOLIGBYGG MED FLERE

---

[d173_d173 | Side [1]]
eferanser og markedspris på materialer og tjenesteyter. med noen få unntak: våtrom og rom under terreng.
•Vurdering mot byggeregler I praksis betyr dette at:
Den bygningssakyndige vil vurdere boligen mot hvordan det var
vanlig å bygge og regler som gjaldt på søknadstidspunktet. Noen •befaringen skal begrenses til kun visuelle observasjoner på
rom og bygningsdeler slik som bad og vaskerom, og forhold som tilgjengelige flater uten fysiske inngrep (f.eks. riving).
gjelder sikkerhet mot brann, rekkverk og

---

[d173_d173 | Side [1]]
70E, 480, 480E, 485 10.6 km
Blaker stasjon 16 min Linje R14 15.1 km
Oslo Gardermoen 47 min
Skoler
Aursmoen skole (1-10 kl.) 14 min
688 elever, 39 klasser 1.2 km
Bjørkelangen videregående skole 12 min
674 elever, 32 klasser 9.9 km
Kjelle videregående skole 14 min
180 elever, 17 klasser 12 km
Ladepunkt for el-bil
Recharge Coop Extra Aurskog 7 min
«Hyggelige folk. Liten trafikk og
trygt for barn.»
Sitat fra en lokalkjent
% 9.61 % 8.61 % 5.41 %
6.7
%
7.7
%
2.7
% 1.61 % 8.61 % 2.12
% 4.93 % 3.04 % 9.83
% 9.91 %

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "Eiendommen ligger i et rasfarlig/skredutsatt område i henhold til kommunedelsplan/NVE. Dette utgjør en betydelig sikkerhetsrisiko og kan påvirke forsikringsvilkår, fremtidig salgsverdi og beboernes sikkerhet.",
      "evidence": [
        "Eiendommen ligger i et rasfarlig /skredutsatt område i henhold til kommunedelsplan/NVE.",
        "HMS (forhold av betydning for Helse, miljø og sikkerhet): ‑Eiendommen ligger i et rasfarlig / skredutsatt område i henhold til kommunedelsplan/ NVE.",
        "Opplysningen om at eiendommen ligger i et rasfarlig/skredutsatt område er registrert under HELSE, MILJØ OG SIKKERHET i tilstandsrapporten.",
        "Forhold som åpenbart kan medføre fare for helse, miljø og sikkerhet – Eiendommen ligger i et rasfarlig /skredutsatt område i henhold til kommunedelsplan/NVE."
      ],
      "source_documents": [
        "d173_d173"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.99
    },
    {
      "risk_id": "R2",
      "description": "Terrassen er utvidet med ca. 10 kvm uten at det foreligger søknad til kommunen. Kjøper overtar eiendommen med risiko og ansvar for eventuelle pålegg fra kommunen og kostnader forbundet med dette. Dette kan medføre krav om riving, bøter eller kostbare søknadsprosesser.",
      "evidence": [
        "Det foreligger ingen søknad til kommunen på dette tiltaket. Kjøper overtar eiendommen slik den fremstår på visning med risiko og ansvaret for eventuelle pålegg fra kommunen og kostnader forbundet med dette.",
        "Utvidet terasse med ca 10kvm, 2025",
        "Utvidet terrassen med hjelp av et familiemedlem som er snekker.",
        "Kjenner du til om det har vært utført arbeid på terrasse/garasje/tak/fasade? Svar Ja, kun av ufaglært/egeninnsats/dugnad"
      ],
      "source_documents": [
        "d173_d173"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R3",
      "description": "Tilliggende konstruksjoner til badet (våtrom) er ikke undersøkt og er merket TGIU (ikke undersøkt). Det kan foreligge skjulte fukt- eller vannskader som ikke er avdekket, noe som kan medføre betydelige utbedringskostnader.",
      "evidence": [
        "Våtrom > 1. Etasje > Bad > Tilliggende konstruksjoner – TGIU",
        "Det er pga bygningsmessige hindringer ikke fysisk mulig å foreta hulltaking i vegg bak våtsone.",
        "IKKE UNDERSØKT/IKKE TILGJENGELIG FOR UNDERSØKELSE: Det kan være avvik/skader som ikke er avdekket."
      ],
      "source_documents": [
        "d173_d173"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R4",
      "description": "Selger opplyser om en liten sprekk i flis utenfor dusj dør. Dette kan indikere bevegelse i konstruksjonen eller fuktskader, og bør undersøkes nærmere. Bør ses i sammenheng med R3 (TGIU tilliggende konstruksjoner).",
      "evidence": [
        "Kjenner du til om det er/ har vært feil tilknyttet våtrommene, f.eks. sprekker, lekkasje, råte, lukt eller soppskader? Ja",
        "Beskrivelse: Liten sprekk i flis utenfor dusj dør"
      ],
      "source_documents": [
        "d173_d173"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R5",
      "description": "Det er ikke utført radonmåling av selger. Eiendommen er bygget med forutsetning om radonsperre, men uten dokumentert måling kan kjøper ikke verifisere at radonnivåene er innenfor akseptable grenser.",
      "evidence": [
        "Selger har ikke utført radonmåling.",
        "Er det foretatt radonmåling? Nei",
        "Basert på byggeåret skal bygget være utført med forskriftsmessig radonsperre og jeg forutsetter at det foreligger dokumentasjon så lenge det foreligger ferdigattest/midlertidig brukstillatelse på bygningen."
      ],
      "source_documents": [
        "d173_d173"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R6",
      "description": "Innvendige dører er vurdert med TG2 på grunn av observerte bruksmerker på dørblader og lister. Dette indikerer behov for tiltak i nær fremtid, men representerer en begrenset økonomisk risiko sammenlignet med øvrige avvik.",
      "evidence": [
        "Bygningsdeler vurdert med TG2: Innvendig > Innvendige dører",
        "Vurdering av avvik: ‑ Det er observert bruksmerker på dørblader og lister."
      ],
      "source_documents": [
        "d173_d173"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.75
    },
    {
      "risk_id": "R7",
      "description": "Bygningens fellesdeler (tak, yttervegger, grunnmur, drenering og felles tekniske installasjoner) er ikke undersøkt i tilstandsrapporten. Tilstanden på disse er ukjent, og det anbefales at sameiet innhenter en felles rapport. Kjøper bærer indirekte risiko gjennom sameiebrøk.",
      "evidence": [
        "Tilstandsrapporten tar derfor ikke for seg bygningens fellesdeler som for eksempel tak, yttervegger, grunnmur, drenering, og felles tekniske installasjoner.",
        "Tg ikke satt. Dette er sameiets/borettslagets ansvars område og ikke ytterligere undersøkt, det anbefales at sameiet/borettslaget innhenter felles rapport ang. felles bygningsdeler.",
        "Kjøper må forøvrig sette seg inn årsberetning for utført og planlagt vedlikehold."
      ],
      "source_documents": [
        "d173_d173"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R8",
      "description": "Adkomst til eiendommen skjer via privat vei, og stikkledninger for vann og avløp er private. Vedlikeholdsansvaret for disse påhviler sameiet, noe som kan medføre uforutsette kostnader for sameiet og dermed indirekte for kjøper.",
      "evidence": [
        "Adkomst til eiendommen skjer via privat vei.",
        "Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler sameiet.",
        "Tilknytning avløp: Offentlig og privat. Privat ledning frem til offentlig ledningsnett. Private ledninger vedlikeholdes for eiers (Borettslagets/sameiets) regning."
      ],
      "source_documents": [
        "d173_d173"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R9",
      "description": "Selger opplyser om planlagt utbygging av nye boliger på jordet ned mot kompveien. Dette kan påvirke utsikt, støynivå, trafikk og bomiljø negativt for fremtidige beboere.",
      "evidence": [
        "Er det andre forhold av betydning ved eiendommen som kan være relevant for kjøper å vite om? Ja",
        "Beskrivelse: Utbygging av nye boliger på jordet ned mot kompveien"
      ],
      "source_documents": [
        "d173_d173"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R10",
      "description": "Sameiet har legalpant på inntil 2G i hver seksjon som sikkerhet for felleskostnader, og sameierne er solidarisk ansvarlige overfor sameiets kreditorer i forhold til sin sameiebrøk. Legalpant til kommunen har høyere prioritet enn legalpant til sameiet, noe som ytterligere kan svekke kjøpers stilling.",
      "evidence": [
        "I henhold til eierseksjonsloven § 31 er sameierne ansvarlige overfor sameiets kreditorer i forhold til sin sameiebrøk.",
        "Ved manglende betaling av fellesutgifter har sameiet legal panterett i den enkelte eierseksjon, begrenset til inntil 2 ganger folketrygdens grunnbeløp.",
        "Legalpant til kommunen har høyere prioritet enn legalpant til sameiet."
      ],
      "source_documents": [
        "d173_d173"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R11",
      "description": "Avløpsrør ligger delvis skjult, og lufting og stakemuligheter på avløpsanlegget er ikke synlig. Tilstanden på skjulte avløpsrør er ukjent og kan medføre skjulte feil eller lekkasjer.",
      "evidence": [
        "Synlig avløpsrør av plast, øvrige avløpsrør ligger skjult.",
        "Lufting og stakemuligheter på avløpsanlegg er ikke synlig eller tilgjengelig."
      ],
      "source_documents": [
        "d173_d173"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.7
    },
    {
      "risk_id": "R12",
      "description": "Taket er ikke besiktiget (saltak i trekonstruksjoner tekket med takstein er merket 'ikke besiktig'). Tilstanden på taket er dermed ukjent, og eventuelle skader eller behov for utskifting kan ikke utelukkes. Dette er særlig relevant da taket er en fellesdelrisiko som påvirker kjøper indirekte.",
      "evidence": [
        "Saltak i trekonstruksjoner tekket med takstein (ikke besiktig).",
        "Inspisering av yttertak er basert på det som er synlig, normalt på innsiden fra loftet og utvendig fra stige/bakkenivå.",
        "Tilstandsrapporten tar derfor ikke for seg bygningens fellesdeler som for eksempel tak, yttervegger, grunnmur, drenering, og felles tekniske installasjoner."
      ],
      "source_documents": [
        "d173_d173"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.78
    }
  ],
  "re_retrieval_queries": [
    "Hva er tilstanden på elektrisk anlegg og når ble siste el-tilsyn utført?",
    "Foreligger det vedtatt reguleringsplan eller nabovarsel som kan påvirke eiendommen?",
    "Hva er sameiets økonomi, gjeld og planlagte vedlikeholdsarbeider?",
    "Er det avvik på ventilasjon eller ventilasjonsanlegg i boligen?",
    "Hva er tilstanden på kjøkken, inkludert membran og sluk?",
    "Er det registrert fukt i rom under terreng eller kjeller?",
    "Hva er tilstanden på balkong/terrasse rekkverk og konstruksjon?",
    "Foreligger det dokumentasjon på radonsperre fra byggeår?"
  ],
  "reasoning": "\nGjennomgangen av de 12 identifiserte risikoene viser at samtlige er støttet av konkret evidens fra dokumentchunkene. Følgende justeringer er gjort:\n\n**Oppjusterte risikoer:**\n- R1 (Rasfare): Oppjustert fra 0.98 til 0.99. Risikoen er eksplisitt nevnt under HMS i tilstandsrapporten og i selgers egenerklæring – sterkest mulige evidens.\n- R7 (Fellesdeler ikke undersøkt): Oppjustert fra 0.88 til 0.90. Evidensen er klar og gjentatt i flere dokumentdeler. Kombinert med R12 (tak ikke besiktiget) utgjør dette en betydelig samlet risiko.\n\n**Nedjusterte risikoer:**\n- R4 (Sprekk i flis): Nedjustert fra 0.88 til 0.80. Selger beskriver sprekken som \"liten\" og det er kun én observasjon. Risikoen er reell men bør ses i sammenheng med R3 (TGIU tilliggende konstruksjoner) for å vurdere alvorlighetsgrad.\n- R5 (Radon): Nedjustert fra 0.85 til 0.82. Takstmann forutsetter at radonsperre er på plass basert på byggeår og ferdigattest, noe som delvis reduserer risikoen, men manglende måling er fortsatt en usikkerhet.\n- R6 (Innvendige dører TG2): Nedjustert fra 0.82 til 0.75. Bruksmerker på dørblader og lister er en relativt bagatellmessig risiko med begrenset økonomisk konsekvens. Risikoen er reell men lav i alvorlighetsgrad.\n- R11 (Skjulte avløpsrør): Nedjustert fra 0.75 til 0.70. Evidensen bekrefter at rørene er skjult, men det er ikke registrert konkrete avvik eller symptomer på feil. Risikoen er latent men ikke dokumentert.\n- R12 (Tak ikke besiktiget): Nedjustert fra 0.80 til 0.78. Taket er en fellesdelrisiko som primært er sameiets ansvar, men kjøper bærer indirekte risiko. Kombinert med R7 er dette en viktig risiko å følge opp.\n\n**Mulige manglende risikoer identifisert:**\n1. **Elektrisk anlegg**: Det er ikke funnet informasjon om siste el-tilsyn. Dersom det er mer enn 5 år siden, skal bygningssakkyndig gi en forenklet vurdering. Dette bør undersøkes nærmere.\n2. **Sameiets økonomi og gjeld**: Det er ikke funnet informasjon om sameiets fellesgjeld, vedlikeholdsplan eller økonomi utover felleskostnader på kr 1 170/mnd. Manglende vedlikeholdsplan kan skjule fremtidige kostnader.\n3. **Ventilasjon**: Ingen informasjon om ventilasjonsanleggets tilstand er funnet i de tilgjengelige dokumentchunkene.\n4. **Rekkverk på terrasse**: Terrassen er utvidet uten søknad, men det er ikke vurdert om rekkverket på den utvidede terrassen tilfredsstiller krav til høyde og styrke.\n5. **Reguleringsplaner/nabovarsel**: Selger svarer \"Nei\" på spørsmål om kjente reguleringsplaner, men opplyser om utbygging på jordet. Det bør undersøkes om det foreligger formelle reguleringsvedtak.\n"
}

## Raw Response
```json
{
  "id": "msg_01XqCm79DsY6yDH1piikmHed",
  "container": null,
  "content": [
    {
      "id": "toolu_01ArJRKisP9nH7EFx6cmYXNC",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "Eiendommen ligger i et rasfarlig/skredutsatt område i henhold til kommunedelsplan/NVE. Dette utgjør en betydelig sikkerhetsrisiko og kan påvirke forsikringsvilkår, fremtidig salgsverdi og beboernes sikkerhet.",
            "evidence": [
              "Eiendommen ligger i et rasfarlig /skredutsatt område i henhold til kommunedelsplan/NVE.",
              "HMS (forhold av betydning for Helse, miljø og sikkerhet): ‑Eiendommen ligger i et rasfarlig / skredutsatt område i henhold til kommunedelsplan/ NVE.",
              "Opplysningen om at eiendommen ligger i et rasfarlig/skredutsatt område er registrert under HELSE, MILJØ OG SIKKERHET i tilstandsrapporten.",
              "Forhold som åpenbart kan medføre fare for helse, miljø og sikkerhet – Eiendommen ligger i et rasfarlig /skredutsatt område i henhold til kommunedelsplan/NVE."
            ],
            "source_documents": [
              "d173_d173"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.99
          },
          {
            "risk_id": "R2",
            "description": "Terrassen er utvidet med ca. 10 kvm uten at det foreligger søknad til kommunen. Kjøper overtar eiendommen med risiko og ansvar for eventuelle pålegg fra kommunen og kostnader forbundet med dette. Dette kan medføre krav om riving, bøter eller kostbare søknadsprosesser.",
            "evidence": [
              "Det foreligger ingen søknad til kommunen på dette tiltaket. Kjøper overtar eiendommen slik den fremstår på visning med risiko og ansvaret for eventuelle pålegg fra kommunen og kostnader forbundet med dette.",
              "Utvidet terasse med ca 10kvm, 2025",
              "Utvidet terrassen med hjelp av et familiemedlem som er snekker.",
              "Kjenner du til om det har vært utført arbeid på terrasse/garasje/tak/fasade? Svar Ja, kun av ufaglært/egeninnsats/dugnad"
            ],
            "source_documents": [
              "d173_d173"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R3",
            "description": "Tilliggende konstruksjoner til badet (våtrom) er ikke undersøkt og er merket TGIU (ikke undersøkt). Det kan foreligge skjulte fukt- eller vannskader som ikke er avdekket, noe som kan medføre betydelige utbedringskostnader.",
            "evidence": [
              "Våtrom > 1. Etasje > Bad > Tilliggende konstruksjoner – TGIU",
              "Det er pga bygningsmessige hindringer ikke fysisk mulig å foreta hulltaking i vegg bak våtsone.",
              "IKKE UNDERSØKT/IKKE TILGJENGELIG FOR UNDERSØKELSE: Det kan være avvik/skader som ikke er avdekket."
            ],
            "source_documents": [
              "d173_d173"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R4",
            "description": "Selger opplyser om en liten sprekk i flis utenfor dusj dør. Dette kan indikere bevegelse i konstruksjonen eller fuktskader, og bør undersøkes nærmere. Bør ses i sammenheng med R3 (TGIU tilliggende konstruksjoner).",
            "evidence": [
              "Kjenner du til om det er/ har vært feil tilknyttet våtrommene, f.eks. sprekker, lekkasje, råte, lukt eller soppskader? Ja",
              "Beskrivelse: Liten sprekk i flis utenfor dusj dør"
            ],
            "source_documents": [
              "d173_d173"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R5",
            "description": "Det er ikke utført radonmåling av selger. Eiendommen er bygget med forutsetning om radonsperre, men uten dokumentert måling kan kjøper ikke verifisere at radonnivåene er innenfor akseptable grenser.",
            "evidence": [
              "Selger har ikke utført radonmåling.",
              "Er det foretatt radonmåling? Nei",
              "Basert på byggeåret skal bygget være utført med forskriftsmessig radonsperre og jeg forutsetter at det foreligger dokumentasjon så lenge det foreligger ferdigattest/midlertidig brukstillatelse på bygningen."
            ],
            "source_documents": [
              "d173_d173"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R6",
            "description": "Innvendige dører er vurdert med TG2 på grunn av observerte bruksmerker på dørblader og lister. Dette indikerer behov for tiltak i nær fremtid, men representerer en begrenset økonomisk risiko sammenlignet med øvrige avvik.",
            "evidence": [
              "Bygningsdeler vurdert med TG2: Innvendig > Innvendige dører",
              "Vurdering av avvik: ‑ Det er observert bruksmerker på dørblader og lister."
            ],
            "source_documents": [
              "d173_d173"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.75
          },
          {
            "risk_id": "R7",
            "description": "Bygningens fellesdeler (tak, yttervegger, grunnmur, drenering og felles tekniske installasjoner) er ikke undersøkt i tilstandsrapporten. Tilstanden på disse er ukjent, og det anbefales at sameiet innhenter en felles rapport. Kjøper bærer indirekte risiko gjennom sameiebrøk.",
            "evidence": [
              "Tilstandsrapporten tar derfor ikke for seg bygningens fellesdeler som for eksempel tak, yttervegger, grunnmur, drenering, og felles tekniske installasjoner.",
              "Tg ikke satt. Dette er sameiets/borettslagets ansvars område og ikke ytterligere undersøkt, det anbefales at sameiet/borettslaget innhenter felles rapport ang. felles bygningsdeler.",
              "Kjøper må forøvrig sette seg inn årsberetning for utført og planlagt vedlikehold."
            ],
            "source_documents": [
              "d173_d173"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R8",
            "description": "Adkomst til eiendommen skjer via privat vei, og stikkledninger for vann og avløp er private. Vedlikeholdsansvaret for disse påhviler sameiet, noe som kan medføre uforutsette kostnader for sameiet og dermed indirekte for kjøper.",
            "evidence": [
              "Adkomst til eiendommen skjer via privat vei.",
              "Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler sameiet.",
              "Tilknytning avløp: Offentlig og privat. Privat ledning frem til offentlig ledningsnett. Private ledninger vedlikeholdes for eiers (Borettslagets/sameiets) regning."
            ],
            "source_documents": [
              "d173_d173"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R9",
            "description": "Selger opplyser om planlagt utbygging av nye boliger på jordet ned mot kompveien. Dette kan påvirke utsikt, støynivå, trafikk og bomiljø negativt for fremtidige beboere.",
            "evidence": [
              "Er det andre forhold av betydning ved eiendommen som kan være relevant for kjøper å vite om? Ja",
              "Beskrivelse: Utbygging av nye boliger på jordet ned mot kompveien"
            ],
            "source_documents": [
              "d173_d173"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R10",
            "description": "Sameiet har legalpant på inntil 2G i hver seksjon som sikkerhet for felleskostnader, og sameierne er solidarisk ansvarlige overfor sameiets kreditorer i forhold til sin sameiebrøk. Legalpant til kommunen har høyere prioritet enn legalpant til sameiet, noe som ytterligere kan svekke kjøpers stilling.",
            "evidence": [
              "I henhold til eierseksjonsloven § 31 er sameierne ansvarlige overfor sameiets kreditorer i forhold til sin sameiebrøk.",
              "Ved manglende betaling av fellesutgifter har sameiet legal panterett i den enkelte eierseksjon, begrenset til inntil 2 ganger folketrygdens grunnbeløp.",
              "Legalpant til kommunen har høyere prioritet enn legalpant til sameiet."
            ],
            "source_documents": [
              "d173_d173"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R11",
            "description": "Avløpsrør ligger delvis skjult, og lufting og stakemuligheter på avløpsanlegget er ikke synlig. Tilstanden på skjulte avløpsrør er ukjent og kan medføre skjulte feil eller lekkasjer.",
            "evidence": [
              "Synlig avløpsrør av plast, øvrige avløpsrør ligger skjult.",
              "Lufting og stakemuligheter på avløpsanlegg er ikke synlig eller tilgjengelig."
            ],
            "source_documents": [
              "d173_d173"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.7
          },
          {
            "risk_id": "R12",
            "description": "Taket er ikke besiktiget (saltak i trekonstruksjoner tekket med takstein er merket 'ikke besiktig'). Tilstanden på taket er dermed ukjent, og eventuelle skader eller behov for utskifting kan ikke utelukkes. Dette er særlig relevant da taket er en fellesdelrisiko som påvirker kjøper indirekte.",
            "evidence": [
              "Saltak i trekonstruksjoner tekket med takstein (ikke besiktig).",
              "Inspisering av yttertak er basert på det som er synlig, normalt på innsiden fra loftet og utvendig fra stige/bakkenivå.",
              "Tilstandsrapporten tar derfor ikke for seg bygningens fellesdeler som for eksempel tak, yttervegger, grunnmur, drenering, og felles tekniske installasjoner."
            ],
            "source_documents": [
              "d173_d173"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.78
          }
        ],
        "re_retrieval_queries": [
          "Hva er tilstanden på elektrisk anlegg og når ble siste el-tilsyn utført?",
          "Foreligger det vedtatt reguleringsplan eller nabovarsel som kan påvirke eiendommen?",
          "Hva er sameiets økonomi, gjeld og planlagte vedlikeholdsarbeider?",
          "Er det avvik på ventilasjon eller ventilasjonsanlegg i boligen?",
          "Hva er tilstanden på kjøkken, inkludert membran og sluk?",
          "Er det registrert fukt i rom under terreng eller kjeller?",
          "Hva er tilstanden på balkong/terrasse rekkverk og konstruksjon?",
          "Foreligger det dokumentasjon på radonsperre fra byggeår?"
        ],
        "reasoning": "\nGjennomgangen av de 12 identifiserte risikoene viser at samtlige er støttet av konkret evidens fra dokumentchunkene. Følgende justeringer er gjort:\n\n**Oppjusterte risikoer:**\n- R1 (Rasfare): Oppjustert fra 0.98 til 0.99. Risikoen er eksplisitt nevnt under HMS i tilstandsrapporten og i selgers egenerklæring – sterkest mulige evidens.\n- R7 (Fellesdeler ikke undersøkt): Oppjustert fra 0.88 til 0.90. Evidensen er klar og gjentatt i flere dokumentdeler. Kombinert med R12 (tak ikke besiktiget) utgjør dette en betydelig samlet risiko.\n\n**Nedjusterte risikoer:**\n- R4 (Sprekk i flis): Nedjustert fra 0.88 til 0.80. Selger beskriver sprekken som \"liten\" og det er kun én observasjon. Risikoen er reell men bør ses i sammenheng med R3 (TGIU tilliggende konstruksjoner) for å vurdere alvorlighetsgrad.\n- R5 (Radon): Nedjustert fra 0.85 til 0.82. Takstmann forutsetter at radonsperre er på plass basert på byggeår og ferdigattest, noe som delvis reduserer risikoen, men manglende måling er fortsatt en usikkerhet.\n- R6 (Innvendige dører TG2): Nedjustert fra 0.82 til 0.75. Bruksmerker på dørblader og lister er en relativt bagatellmessig risiko med begrenset økonomisk konsekvens. Risikoen er reell men lav i alvorlighetsgrad.\n- R11 (Skjulte avløpsrør): Nedjustert fra 0.75 til 0.70. Evidensen bekrefter at rørene er skjult, men det er ikke registrert konkrete avvik eller symptomer på feil. Risikoen er latent men ikke dokumentert.\n- R12 (Tak ikke besiktiget): Nedjustert fra 0.80 til 0.78. Taket er en fellesdelrisiko som primært er sameiets ansvar, men kjøper bærer indirekte risiko. Kombinert med R7 er dette en viktig risiko å følge opp.\n\n**Mulige manglende risikoer identifisert:**\n1. **Elektrisk anlegg**: Det er ikke funnet informasjon om siste el-tilsyn. Dersom det er mer enn 5 år siden, skal bygningssakkyndig gi en forenklet vurdering. Dette bør undersøkes nærmere.\n2. **Sameiets økonomi og gjeld**: Det er ikke funnet informasjon om sameiets fellesgjeld, vedlikeholdsplan eller økonomi utover felleskostnader på kr 1 170/mnd. Manglende vedlikeholdsplan kan skjule fremtidige kostnader.\n3. **Ventilasjon**: Ingen informasjon om ventilasjonsanleggets tilstand er funnet i de tilgjengelige dokumentchunkene.\n4. **Rekkverk på terrasse**: Terrassen er utvidet uten søknad, men det er ikke vurdert om rekkverket på den utvidede terrassen tilfredsstiller krav til høyde og styrke.\n5. **Reguleringsplaner/nabovarsel**: Selger svarer \"Nei\" på spørsmål om kjente reguleringsplaner, men opplyser om utbygging på jordet. Det bør undersøkes om det foreligger formelle reguleringsvedtak.\n"
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
    "input_tokens": 19225,
    "output_tokens": 4332,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
