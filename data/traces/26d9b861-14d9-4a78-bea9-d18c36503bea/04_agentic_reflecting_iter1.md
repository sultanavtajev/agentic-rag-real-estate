# Trace: agentic_reflecting_iter1
- **Run ID:** 26d9b861-14d9-4a78-bea9-d18c36503bea
- **Tidspunkt:** 2026-03-24T21:10:58.249562+00:00
- **Varighet:** 98.52s
- **Input tokens:** 21468
- **Output tokens:** 4905

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
Risiko 1: Vesentlig økning i felleskostnader på 25% fra mai – fra ca. kr 2 235,- til ca. kr 2 793,75 per måned. Kjøper må påregne høyere løpende kostnader enn det som fremgår av prisantydningen.
  Confidence: 0.98
  Evidens: Eier har nylig blitt informert av styret i borettslaget om at felleskostnadene vil øke med 25% fra mai. Dette betyr at felleskostnadene vil øke til ca kr. 2 793,75,-

Risiko 2: Ansettelse av revisor medfører ca. kr 500,- ekstra i måneden i felleskostnader. Dette er et vedtatt vedtak som øker de løpende kostnadene for andelseier.
  Confidence: 0.97
  Evidens: Ansettelse av revisor ble akkurat akseptert av borettslaget, det vil medføre ca 500 kr ekstra i måneden.

Risiko 3: Høy fellesgjeld på kr 2 370 000 per 01.02.2026. Første avdrag begynner ikke før 30.03.2034, noe som innebærer at gjelden ikke nedbetales på mange år og kan medføre økte felleskostnader når avdragene starter.
  Confidence: 0.95
  Evidens: Kr 2 370 000 pr. 01.02.2026; Første avdrag er 30/03-2034; Potensiell endring i felleskostnader fra 01/03-2034

Risiko 4: Ingen radonmåling er utført, og bygget er ikke utført med radonsperre. Eiendommen ligger i et område med usikker aktsomhetsgrad for radon ifølge NGU. Leiligheten ligger i 2. etasje, under tre etasjer over bakkenivå, og radonmåling anbefales.
  Confidence: 0.97
  Evidens: Det er ikke foretatt radonmålinger, og bygget er heller ikke utført med radonsperre.; Det bør gjennomføres radonmålinger.; I henhold til NGU sitt kart over Radon aktsomhet har dette området usikker aktsomhetsgrad.; Selger har ikke utført radonmåling.

Risiko 5: Det foreligger godkjente og byggemeldte tegninger, men det er avvik fra disse. Dette kan innebære ulovlige bygningsendringer eller bruksendringer som kommunen kan pålegge å rette opp.
  Confidence: 0.95
  Evidens: Det foreligger godkjente og byggemeldte tegninger, men det er avvik fra disse.

Risiko 6: Membran og plastsluk på badet er snart 40 år gamle og mer enn halvparten av anbefalt brukstid er overskredet (TG2). Dette innebærer risiko for fuktskader og behov for utskifting i nær fremtid.
  Confidence: 0.93
  Evidens: Det er montert membran og plastsluk med klemring på bad.; Bygningsdelen er nå snart 40 år gamle og mer enn halvparten av anbefalt brukstid er overskredet.; Normal tid før utskifting av trevindu med isolerglass er 20 - 40 år.

Risiko 7: Tilliggende konstruksjoner til våtrom (bad/vaskerom i 2. etasje) er ikke undersøkt (TGIU) på grunn av bygningsmessige hindringer som gjorde hulltaking umulig. Skjulte fuktskader kan foreligge uten at dette er avdekket.
  Confidence: 0.92
  Evidens: Våtrom > 2. etasje > Bad/ vaskerom > Tilliggende konstruksjoner våtrom; Det er pga bygningsmessige hindringer ikke fysisk mulig å foreta hulltaking i vegg bak våtsone.

Risiko 8: Vinduer er vurdert med TG2 på grunn av alder. Normal levetid for trevindu med isolerglass er 20–40 år, og bygningsdelen nærmer seg eller har overskredet anbefalt brukstid. Utskifting kan bli nødvendig i nær fremtid.
  Confidence: 0.9
  Evidens: Det er gjennomgående registrert TG 1 og kun en TG 2 som er gitt pga alder på vinduer.; Normal tid før utskifting av trevindu med isolerglass er 20 - 40 år.

Risiko 9: Bygningen er fra 1904 og har uisolert grunnmur i murverk og naturstein. Eldre eiendommer har normalt større vedlikeholdsbehov og risiko for fuktskader, soppangrep og setninger.
  Confidence: 0.9
  Evidens: Byggeår: 1904; Grunnmur oppført i uisolert murverk og naturstein.; Eldre eiendommer har likevel normalt større vedlikeholdsbehov og behov for utskiftninger/fornyelser pga større risiko for fuktskader, soppangrep, setninger osv. enn nyere eiendommer.

Risiko 10: Borettslaget har legalpanterett i andelen for inntil 2 ganger folketrygdens grunnbeløp. Dersom andre andelseiere misligholder sine felleskostnader, kan øvrige andelseiere bli belastet for å dekke disse.
  Confidence: 0.88
  Evidens: Andelseierne har ikke personlig ansvar for borettslagets fellesgjeld, men de må dekke borettslagets løpende utgifter. Manglende innbetaling av fellesutgiftene som følge av andre andelshaveres mislighold, eller dersom borettslaget sitter på fraflyttede og/eller usolgte andeler, må dekkes av de øvrige andelseierne.; Borettslaget har legalpant på inntil 2G som sikkerhet for betaling av felleskostnader.

Risiko 11: Eiendommen ligger i et område med hensynssoner for kvikkleire (H310_1) og steinsprang (H310_2) ifølge kommuneplankartet. Dette kan innebære geoteknisk risiko.
  Confidence: 0.8
  Evidens: H310_1 - Kvikkleire; H310_2 - Steinsprang

Risiko 12: Eiendommen ligger i et område med hensynssoner for stormflo (H320_1) og elveflom (H320_2) ifølge kommuneplankartet. Dette kan innebære risiko for naturskader.
  Confidence: 0.78
  Evidens: H320_1 - Stormflo; H320_2 - Elveflom

Risiko 13: Det mangler samsvarserklæring for det elektriske anlegget. Dette kan indikere at det elektriske anlegget ikke er kontrollert eller godkjent av fagkyndig, noe som utgjør en sikkerhetsrisiko.
  Confidence: 0.85
  Evidens: det mangler/ikke er fremlagt samsvarserklæring for det elektriske anlegget.

Risiko 14: Eiendommen er regulert etter en eldre reguleringsplan (S-2255, vedtatt 1977) som i stor grad er opphevet eller overstyrt av nyere planer, primært Kommuneplan 2015 – Oslo mot 2030. Fremtidige reguleringsendringer kan påvirke bruken av eiendommen eller dens omgivelser.
  Confidence: 0.75
  Evidens: Reguleringsplan S-2255 for Oslo sentrum og indre sone (vedtatt 1977) er i stor grad opphevet eller overstyrt av nyere planer, primært «Kommuneplan 2015 - Oslo mot 2030».

Risiko 15: Eiendommen er markert med hensynssone H570 – Bevaring kulturmiljø. Dette kan medføre restriksjoner på fremtidige byggetiltak, rehabilitering og endringer av fasade eller eksteriør.
  Confidence: 0.8
  Evidens: H570 - Bevaring kulturmiljø

Dokumentkontekst:
[d086_d086 | Side [1]]
du til om ufaglærte har utført arbeid som normalt bør utføres av faglærte, utover det som er nevnt tidligere (f.eks. drenering,
murerarbeid, tømrerarbeid etc)?
Nei Ja
15 Er det nedgravd oljetank på eiendommen?
Nei Ja
16 Kjenner du til om det har vært utført arbeid på terrasse/garasje/tak/fasade?
Svar Nei
Initialer selger: KERL 2
56006220
:ecnerefer
tnemucoD
48

## Side 49

17 Selges eiendommen med utleiedel, leilighet, hybel eller tilsvarende?
Nei Ja
18 Kjenner du til om det er innredet/bruksendret/bygget

---

[d086_d086 | Side [1]]
?
Nei Ja
18 Kjenner du til om det er innredet/bruksendret/bygget ut i kjeller eller loft eller andre deler av boligen?
Nei Ja
19 Kjenner du til forslag eller vedtatte reguleringsplaner, andre planer, nabovarsel eller offentlige vedtak som kan medføre endringer i bruken av
eiendommen eller av dens omgivelser?
Nei Ja
20 Kjenner du til om det foreligger påbud/heftelser/krav/manglende tillatelser vedrørende eiendommen?
Nei Ja
21 Er det foretatt radonmåling?
Nei Ja
22 Kjenner du til manglende brukstillatelse

---

[d086_d086 | Side [1]]
dekkes av de øvrige andelseierne.
Lovanvendelse
Borettslaget har legalpanterett i andelen for krav på Regelverk og generelle opplysninger
dekning av felleskostnader og andre krav fra Boligen selges med det inventar og utstyr som i henhold
borettslaget, på inntil 2 ganger folketrygdens grunnbeløp. til gjeldende lover, forskrifter eller offentlige pålegg skal
følge med eiendommen, jf. avhendingsloven § 3‑4.
Kjøper og selger er forpliktet til å undertegne standard Fastmonterte eller spesialtilpassede

---

[d086_d086 | Side [1]]
stallasjoner utenfor
bygningen • full funksjonstes琀椀ng av el- og VVS-installasjoner • geologiske forhold og bygningens plassering på grunnen • bygningens
planløsning • bygningens innredning • løsøre slik som hvitevarer • utendørs svømmebasseng og pumpeanlegg • bygningens este琀椀kk og
arkitektur • bygningens lovlighet (bortse琀琀 fra bruksendringer, brannceller og forhold som åpenbart kan påvirke helse, miljø og sikkerhet) •
fellesarealer (med mindre boligeier har vedlikeholdsplikt for fellesarealer og de琀琀e

---

[d086_d086 | Side [1]]
olig i sameie/borettslag/boligaksjeselskap:
25 Kjenner du til om sameiet/laget/selskapet er involvert i tvister av noe slag?
Nei Ja
26 Kjenner du til vedtak/forslag til vedtak om forhold vedr. eiendommen som kan medføre økte felleskostnader/økt fellesgjeld?
Nei Ja
Beskrivelse Ansettelse av revisor ble akkurat akseptert av borettslaget, det vil medføre ca 500 kr ekstra i måneden.
27 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr i sameiet/laget/selskapet (fellesareal eller i andre

---

[d086_d086 | Side [1]]
n
råd om rapporten ikke gir deg svar. Den bygningssakkyndige kan ikke vurdere og ulovlige bruken, eventuelt å re琀琀e eller 琀椀lbakeføre rommet 琀椀l godkjent
svare på alle spørsmål, og kan heller ikke vite om kommunen kan gi unntak for bruk.
kravene som gjelder. Vil du vite mer?
Oppdragsnr.: 15467-2972 Befaringsdato: 17.02.2026 Side: 11 av 16
67

## Side 68

Omsens gate 2 B, 0478 OSLO Takstmann Jan Berby MNTF
Gnr 225 - Bnr 191 Pb. 80 Tåsen
0301 OSLO 0801 OSLO
Arealer
Andelsleilighet i boligbygg med 昀氀ere

---

[d086_d086 | Side [1]]
. etasje > Bad/ vaskerom > Tilliggende og dyreholdet ikke er til ulempe for de øvrige brukere av
konstruksjoner våtrom eiendommen.
Det er pga bygningsmessige hindringer ikke fysisk mulig
å foreta hulltaking i vegg bak våtsone. Forkjøpsrett: Det praktiseres ikke forkjøpsrett.
Styregodkjennelse: Det praktiseres ikke
Øvrig
styregodkjennelse.
40

## Side 41

OM EIENDOMMEN
Reguleringsplan S‑2255 for Oslo sentrum og indre sone
Regnskap/ budsjett/ kostnadsøkninger: Borettslaget (vedtatt 1977) er i stor grad

---

[d086_d086 | Side [1]]
det ikke hensyn 琀椀l om arealet er lovlig oppført eller om bruken er
lovlig, bruksendringer, lysforhold eller andre sikkerhetsmangler.
UTTRYKK OG DEFINISJONER • Eiendommens markedsverdi kan ikke baseres på en rent matema琀椀sk
beregning i forhold 琀椀l antall kvadratmeter opplyst i rapporten.
• Tilstand: Byggverkets eller bygningsdelens tekniske, funksjonelle eller Opplysninger om areal kan altså ikke alene beny琀琀es for beregning av
este琀椀ske status på et gi琀琀 琀椀dspunkt. eiendommens verdi.
• Symptom:

---

[d086_d086 | Side [1]]

Arealer målt innvendig på stedet. Innvendige vegger, kanaler og sjakter er medta琀琀 BRA-i.
Takhøyde 2.65m
Lovlighet
Byggetegninger
Det foreligger godkjente og byggemeldte tegninger, men det er avvik fra disse.
Nyere håndverkstjenester
Er det ifølge eier u琀昀ørt håndverkstjenester på boligen siste 5 år? Ja Nei
Oppdragsnr.: 15467-2972 Befaringsdato: 17.02.2026 Side: 12 av 16
68

## Side 69

Omsens gate 2 B, 0478 OSLO Takstmann Jan Berby MNTF
Gnr 225 - Bnr 191 Pb. 80 Tåsen
0301 OSLO 0801 OSLO
Befarings - og

---

[d086_d086 | Side [1]]
unkt
Ytre by (utviklingsområder)
Spredt boligbebyggelse
Indre by (utviklingsområder)
Bestemmelsesgrense
H570 - Bevaring kulturmiljø
Aktivitetssone marka
H710 - Båndlegging for regulering etter pbl.
H810_1 - Krav om felles planlegging (områderegulering)
H810 _2 - Krav om felles planlegging
H820_1 - Omforming (kabling og høystentledninger)
H820_2 - Omforming (trafostasjoner)
H110 - Nedlagsfelt drikkevann
H190 - Andre sikringssoner
H310_1 - Kvikkleire
H310_2 - Steinsprang
H320_1 - Stormflo
H320_2 -

---

[d086_d086 | Side [1]]
Området består hovedsakelig av eldre
garanti fra produsent eller leverandør. kvartalsbebyggelse.
Kjøper aksepterer at det kan forekomme hull og merker
Byggemåte
etter montering av inventar og utstyr som ikke er en del
av overdragelsen. Utvendig byggemåte
Bygård med 4 etasjer, kjeller og utbygget loft. Adkomst
fra fortau via portrom til felles trapperom. Grunnmur
Eiendommens
oppført i uisolert murverk og naturstein. Støpt
kjellerdekke og dekke mellom kjeller og 1. etasje.
tilstand
Yttervegger i murverk,

---

[d086_d086 | Side [1]]
an alle andre heftelser. Pantekravet
er begrenset til en sum som svarer til to ganger folketrygdens grunnbeløp på
tidspunktet tvangsdekning besluttes gjennomført.
7. Mislighold, salgspålegg og fravikelse
7-1 Mislighold
Andelseiers brudd på sine forpliktelser overfor borettslaget utgjør mislighold. Som
mislighold regnes blant annet manglende betaling av felleskostnader, forsømt
vedlikeholdsplikt, ulovlig bruk eller overlating av bruk og brudd på husordensregler.
7-2 Pålegg om salg
Hvis en andelseier til

---

[d086_d086 | Side [1]]
ny kjøkkeninnredning og oppussede over昀氀ater. Den
framstår i dag som en pent oppusset og vedlikeholdt leilighet.
Tilstandsanalysen har ikke avdekket noen særlige symptomer på
svikt og avvik fra normal standard. Det er gjennomgående
registrert TG 1 og kun en TG 2 som er gi琀琀 pga alder på vinduer.
Arealer
Gå 琀椀l side
Forutsetninger og vedlegg Gå 琀椀l side
Lovlighet Gå 琀椀l side
Andelsleilighet i boligbygg med 昀氀ere boenheter
• Det foreligger godkjente og byggemeldte tegninger, men
det er avvik fra

---

[d086_d086 | Side [1]]
0_1 - Kvikkleire
H310_2 - Steinsprang
H320_1 - Stormflo
H320_2 - Elveflom
H390 - Deponi
120

## Side 121

Boligkjøperforsikring
Hvis din nye bolig har skjulte feil kan dette koste
deg både tid og penger.
Dine fordeler
− Unngå bekymring og stress
− Spar verdifull tid
− Få advokatkostnadene dekket
Med vår boligkjøperforsikring er du i trygge hender
hvis du oppdager feil eller mangler ved boligen du har
kjøpt. Forsikringen gir deg tilgang på hjelp fra advokater, Hva koster forsikringen?
saksbehandlere og

---

[d086_d086 | Side [1]]
delt opp i brannceller helse og sikkerhet, for eksempel krav 琀椀l rømningsvei.
e琀琀er kravene i byggteknisk forskri昀琀 på befarings琀椀dspunktet, skal det opplyses om
de琀琀e. Bruksendring som krever godkjenning, og som ikke er søkt bruksendret,
er ulovlig. Kommunen kan e琀琀er plan- og bygningsloven kapi琀琀el 32
Reglene om bruksendring og brannceller kan være kompliserte. Søk videre faglige forfølge overtredelser. Kommunen kan pålegge deg å avslu琀琀e den
råd om rapporten ikke gir deg svar. Den bygningssakkyndige kan

---

[d086_d086 | Side [1]]
get av fukt ut.
6 Kjenner du til om det er/har vært utettheter i terrasse/garasje/tak/fasade?
Nei Ja
7 Kjenner du til om det er/har vært problemer med ildsted/skorstein/pipe f.eks. dårlig trekk, sprekker, pålegg, fyringsforbud eller lignende?
Nei Ja
8 Kjenner du til om det er/har vært f.eks. sprekker i mur, skjeve gulv eller lignende?
Nei Ja
9 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr på eiendommen som rotter, mus, maur eller lignende?
Nei Ja
10 Kjenner du til om det er/har vært

---

[d086_d086 | Side [1]]
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ Eier har nylig blitt informert av styret i borettslaget om at
4 479 610 (Pris inkl. fellesgjeld) felleskostnadene vil øke med 25% fra mai. Dette betyr at
felleskostnadene vil øke til ca kr. 2 793,75,‑
Omkostninger
Eiendomsskatt
9 300 (Boligkjøperforsikring* (valgfritt))
545 (Tinglysingsgebyr ‑ hjemmel) Det påløper ikke eiendomsskatt for denne andelen.
545 (Tinglysningsgebyr ‑ pantedokument)
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑
Kommunale

---

[d086_d086 | Side [1]]
er/skadedyr i sameiet/laget/selskapet (fellesareal eller i andre boliger) som rotter, mus,
maur eller lignende?
Nei Ja
28 Kjenner du til om det er/har vært skjeggkre i sameiet/laget/selskapet (fellesareal eller i andre boliger)?
Nei Ja
Initialer selger: KERL 3
56006220
:ecnerefer
tnemucoD
49

## Side 50

Tilleggskommentar
Jeg bekrefter at opplysningene er gitt etter beste skjønn. Jeg er kjent med at dersom jeg har gitt ufullstendige, uriktige eller misvisende
opplysninger om eiendommen, vil

---

[d086_d086 | Side [1]]
skilt. Rom utenfor boenheten kan omdisponeres av
• Skadegjørere: Zoologiske eller biologiske skadegjørere, i hovedsak råte, bore琀琀slaget/sameiet og de琀琀e kan påvirke boligens BRA. Vær oppmerksom
sopp og skadedyr. på at NS 3940:2023 og eierseksjonsloven har ulik de昀椀nisjon av fellesareal.
Ved arealmåling gjelder NS 3940:2023 som de昀椀nerer fellesareal slik: “Delen
• Fuktsøk: Over昀氀atesøk med egnet søkeutstyr (fuk琀椀ndikator) eller visuelle av bygning som brukes av to eller 昀氀ere bruksenheter eller 琀椀l

---

[d086_d086 | Side [1]]
ygning hvor en
fastslå tykkelsen på innervegger, skjevheter i og u琀昀orming av brann fri琀琀 kan utvikle seg uten at den kan spre seg 琀椀l andre
bygningskonstruksjoner som karnapp, buer og vinkler som ikke er re琀琀e, åpne rom bygninger eller andre deler av bygningen i løpet av en fastsa琀琀 琀椀d.
over 昀氀ere etasjer og så videre.
Om bruksendring
Eiendommens markedsverdi kan ikke baseres på en matema琀椀sk beregning basert på
antall kvadratmeter opplyst i rapporten. Opplysninger om areal kan altså ikke alene

---

[d086_d086 | Side [1]]
5 år, og det foreligger dokumentasjon på
faglig god u琀昀ørelse. • Bygningssakkyndig gir en forenklet vurdering av branntekniske forhold og
elektriske installasjoner i boligen dersom det er mer enn fem år siden sist
ii)Tilstandsgrad 1, TG1:Mindre avvik. Normal slitasje. Straks琀椀ltak ikke boligen hadde el-琀椀lsyn. Bygningssakkyndig kan anbefale å konsultere
nødvendig. TG1 kan gis når bygningsdelen er 琀椀lnærmet ny og det ikke o昀昀entlige myndigheter eller kvali昀椀sert elektrofaglig fagperson ved behov
foreligger

---

[d086_d086 | Side [1]]
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

[d086_d086 | Side [1]]
lstandsgrad. Grunnen er at bygningen eller bygningsdelen da bare har
normal slitasje. Ved skjulte konstruksjoner kan alder alene avgjøre 琀椀lstandsgrad. Når bygningssakkyndige anbefaler 琀椀ltak, for eksempel
utbedringer, må brukeren av rapporten vurdere om 琀椀ltakene er nødvendige og lønnsomme.
Når den bygningssakkyndige velger 琀椀lstandsgrad, baseres vurderingen på faste kriterier som følger av gjeldende bransjestandard for Teknisk
琀椀lstandsanalyse ved omsetning av bolig og Forskri昀琀 琀椀l

---

[d086_d086 | Side [1]]
hetene var av eldre
dato der kun 2 av leilighetene hadde innlagt toale琀琀. Resten av
enhetene delte toale琀琀 i trappeoppgang. Alle utbedringer av
leilighetene ble gjort i henhold 琀椀l TEK 10. Eldre eiendommer har
likevel normalt større vedlikeholdsbehov og behov for
utski昀琀ninger/fornyelser pga større risiko for fuktskader,
soppangrep, setninger osv. enn nyere eiendommer.
Leiligheten ligger i 2. etasje og ble pusset opp i 2015/16 med
ny琀琀 bad, ny kjøkkeninnredning og oppussede over昀氀ater. Den
framstår i dag

---

[d086_d086 | Side [1]]
sikringsselskap: Gjensidige Forsikring
Bygningsdelen er nå snart 40 år gamle og mer enn Asa
halvparten av anbefalt brukstid er overskredet.
Polisenummer fellesforsikring: 94170482
Bygningsdeler vurdert med TG3:
‑Ingen Husdyr: Det kan ikke holdes dyr uten forutgående
samtykke fra borettslagets styre. Samtykke kan ikke
Bygningsdeler som ikke har blitt undersøkt (TGIU): nektes dersom gode grunner taler for at dyrehold tillates,
‑ Våtrom > 2. etasje > Bad/ vaskerom > Tilliggende og dyreholdet ikke er til

---

[d086_d086 | Side [1]]
琀椀d, det er grunn 琀椀l å varsle fare for skader på grunn av alder eller
overvåke spesielt på grunn av fare for større skade eller følgeskade. For
TILLEGGSUNDERSØKELSER
skjulte konstruksjoner vil alder i seg selv være et symptom som kan gi TG2.
For synlige konstruksjoner kan alder sammen med andre symptomer og
momenter gi TG2. Avvik under TG2 kan gis sjablongmessig anslag. E琀琀er avtale kan 琀椀lstandsanalysen utvides 琀椀l også å omfa琀琀e
琀椀lleggsundersøkelser utover minimumskravet i forskri昀琀en.
iv)Tilstandsgrad

---

[d086_d086 | Side [1]]
r eller kvali昀椀sert elektrofaglig fagperson ved behov
foreligger dokumentasjon på faglig god u琀昀ørelse. for grundigere undersøkelser.
iii)Tilstandsgrad 2, TG2:Vesentlige avvik, og mindre avvik som e琀琀er NS
3600 gir TG 2, men som ikke nødvendigvis krever umiddelbare 琀椀ltak.
Konstruksjonen har normalt enten feil u琀昀ørelse, en skade eller symptomer
på skade, sterk slitasje eller nedsa琀琀 funksjon. Vedlikehold eller 琀椀ltak trengs
i nær frem琀椀d, det er grunn 琀椀l å varsle fare for skader på grunn av alder

---

[d086_d086 | Side [1]]
Teknisk
琀椀lstandsanalyse ved omsetning av bolig og Forskri昀琀 琀椀l avhendingslova.
TILSTANDSGRAD 0, TG0: INGEN AVVIK
Bygningsdelen skal være 琀椀lnærmet ny, ikke vise tegn på slitasje og det skal være lagt frem dokumentasjon på
faglig god u琀昀ørelse. Det er ingen merknader 琀椀l delen.
TILSTANDSGRAD 1, TG1: MINDRE AVVIK
Bygningsdelen skal bare ha normal slitasje, og straks琀椀ltak skal ikke anses som nødvendig. Graden kan også
brukes når delen er ny, men der dokumentasjon på faglig god u琀昀ørelse

---

[d086_d086 | Side [1]]
 som gjaldt på søknads琀椀dspunktet. Den
boligen ble bygget på kan være annerledes enn i dag. Bygninger bygningssakkyndige ser e琀琀er avvik som har betydning for og som
svekkes over 琀椀d, og utse琀琀es for slitasje blant annet på grunn av bruk reduserer boligens funksjon og verdi, og som kommer frem av forskri昀琀 琀椀l
og vær og vind. Mange boliger fornyes helt eller delvis, noen i 昀氀ere avhendingslova.
omganger, eller det oppføres 琀椀lbygg. Særlig for boliger som er
Noen bygningsdeler og forhold vil den

---

[d086_d086 | Side [1]]
år på produkt av sluket 琀椀l toppen av membranen ved dørterskelen er minmum 25mm.
Vurdering av avvik:
• Det er avvik: 2. ETASJE > BAD/VASKEROM
Normal 琀椀d før utski昀琀ing av trevindu med isolerglass er 20 - 40 år.
Sluk, membran og te琀琀esjikt
Konsekvens/琀椀ltak
• Tiltak:
Det er montert membran og plastsluk med klemring på bad.
Bygningsdelen er nå snart 40 år gamle og mer enn halvparten av
anbefalt bruks琀椀d er overskredet.
Dører
Entredør i B30 og dB35 kvalitet.
INNVENDIG
Over昀氀ater
Oppholdsrom med trestav

---

[d086_d086 | Side [1]]
aldt da
boligen ble oppført (søknads琀椀dspunktet). Forhold som er vanlige for bygningens alder, slik som slitasje
e琀琀er normal bruk regnes ikke som avvik.
Hva inneholder 琀椀lstandsrapporten?
Den bygningssakkyndige undersøker rom og bygningsdeler slik det kommer frem av Forskri昀琀 琀椀l
avhendingsloven. Tilstandsrapporten inneholder bare avvik som den bygningssakkyndige kan se eller
kontrollere med enkle hjelpemidler. Det gjøres ikke nærmere undersøkelser slik som åpning av vegger
eller andre bygningsdeler. I

---

[d086_d086 | Side [1]]
r eksempel innfelt belysning (downlights),
Standard NS 3600:2018 (Teknisk 琀椀lstandsanalyse ved omsetning av bolig), demonteres ikke for å sjekke dampsperren bak. De琀琀e av hensyn 琀椀l
samt Takstbransjens retningslinjer for arealmåling når det gjelder fordeling bygningssakkyndiges kompetanse og risikoen for skade.
mellom P-areal og S-areal.
• Tilbakeholdt eller urik琀椀g informasjon som har betydning for vurderingen, •Kontroll av fukt i konstruksjonen ved hulltaking i bad og vaskerom
er ikke bygningssakkyndiges

---

[d086_d086 | Side [1]]
s når delen er ny, men der dokumentasjon på faglig god u琀昀ørelse mangler.
TILSTANDSGRAD 2, TG2: VESENTLIGE AVVIK OG MINDRE AVVIK SOM ETTER NS 3600 GIR TG 2
Bygningsdelen skal enten ha feil u琀昀ørelse, en skade eller symptomer på skade, sterk slitasje eller nedsa琀琀
funksjon. Graden gis når bygningsdelen trenger vedlikehold eller 琀椀ltak i nær frem琀椀d. Graden skal også brukes
når delen er gammel og det er grunn 琀椀l å varsle om faren for skader på grunn av alderen, eller når det er grunn
琀椀l å overvåke delen

---

[d086_d086 | Side [1]]
 mellom kjeller og 1. etasje.
Y琀琀ervegger i murverk, opprinnelig originale utvendige fasader med 2. ETASJE > BAD/VASKEROM
trekninger, ornamenter og konsoller.
Saltak med tresperrekonstruksjoner tekket med plater. Over昀氀ater vegger og himling
Trapper med stålvanger og tretrinn og malte murvegger mellom
etasjene. Flislagt i dusj sone og eller malte plater på vegger og i tak.
Overnevnte bygningsdeler er en del av sameiets/bore琀琀slagets
vedlikeholdsansvar, og er ikke omfa琀琀et av denne rapporten.
Det blir ikke

---

[d086_d086 | Side [1]]
 som åpenbart kan medføre fare for helse, miljø og sikkerhet
Det er ikke foreta琀琀 radonmålinger, og bygget er heller Gå til side
ikke u琀昀ørt med radonsperre.
Oppdragsnr.: 15467-2972 Befaringsdato: 17.02.2026 Side: 6 av 16
62

## Side 63

Omsens gate 2 B, 0478 OSLO Takstmann Jan Berby MNTF
Gnr 225 - Bnr 191 Pb. 80 Tåsen
0301 OSLO 0801 OSLO
Tilstandsrapport
Innvendige dører
ANDELSLEILIGHET I BOLIGBYGG MED FLERE
Hvite folierte innerdører med hvitmalte karmer.
Byggeår Kommentar
1904 Bygning ta琀琀 i bruk ifølge

---

[d086_d086 | Side [1]]
erom, forhold som
gjelder sikkerhet mot brann, rekkverk, trapper osv.
Tilstandsrapporten beskriver ikke hele boligen
BYGNINGSSAKKYNDIGE SER FOR EKSEMPEL IKKE PÅ
• vanlig slitasje og normal vedlikeholds琀椀lstand • bagatellmessige forhold som ikke påvirker bygningens bruk eller verdi vesentlig • etasjeskillere •
琀椀lleggsbygg slik som garasje, bod, anneks, naust også videre • utvendige trapper • stø琀琀emurer • skjulte installasjoner • installasjoner utenfor
bygningen • full funksjonstes琀椀ng av el- og

---

[d086_d086 | Side [1]]
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

[d086_d086 | Side [1]]
le
avgifter, forsikring, forretningsførsel, vedlikehold og andre Legalpant: Borettslaget har legalpant på inntil 2G som
løpende driftskostnader. Borettslaget har i tillegg sikkerhet for betaling av felleskostnader. Dette betyr at
finansposter knyttet til renteutgifter på fellesgjeld. Styret borettslaget har prioritet over tinglyste lån når det gjelder
opplyser at økonomien vurderes som tilfredsstillende, og betaling av felleskostnader, og kan kreve inn pengene før
årsregnskapet er revidert og funnet å gi

---

[d086_d086 | Side [1]]
tt/ kostnadsøkninger: Borettslaget (vedtatt 1977) er i stor grad opphevet eller overstyrt av
hadde i 2024 et positivt årsresultat på kr 9 283 477, som nyere planer, primært «Kommuneplan 2015 ‑ Oslo mot
foreslås overført til egenkapital. Borettslagets samlede 2030».
driftsinntekter utgjorde kr 3 083 095, hvor hoveddelen
består av innkrevde felleskostnader. Driftskostnadene
Tinglyste heftelser
var kr 617 551 og omfatter blant annet kommunale
avgifter, forsikring, forretningsførsel, vedlikehold og andre

---

[d086_d086 | Side [1]]
s § 3-2 andre ledd,
3. salg eller kjøp av fast eiendom, eller av andelsbolig som borettslaget eier
4. å ta opp lån som skal sikres med pant med prioritet foran innskuddene,
5. andre rettslige disposisjoner over fast eiendom som går ut over vanlig forvaltning,
6. andre tiltak som går ut over vanlig forvaltning, når tiltaket fører med seg
økonomisk ansvar eller utlegg for borettslaget på mer enn fem prosent av de
årlige felleskostnadene.
8-4 Representasjon og fullmakt
Styrets leder og ett styremedlem i

---

[d086_d086 | Side [1]]
avdragsdelen av fremtidige felleskostnader. Andelseierne som har nedbetalt
ekstraordinært, har fått sikkerhet ved inntrederett i pantobligasjonen som borettslagets
långiver har tinglyst på eiendommen. Borettslagets beregnede forpliktelse overfor
andelseiere som har nedbetalt, fremgår som egenkapital fra IN, under noten for annen
egenkapital.
NOTE: 2
INNKREVDE FELLESKOSTNADER
Lån/Renter før oppstart IN 876 758
Felleskostnader 422 006
Kapitalkostnader på IN-lån 1 703 400
Kapitalkostnader regulert på IN-lån

---

[d086_d086 | Side [1]]
elidte andelseiere kan kreve erstatning for tap som følger av
at andelseieren misligholder sine plikter, jf borettslagslovens §§ 5-13 og 5-15.
(4) Andelseier kan kreve erstatning for tap som følge av at borettslaget ikke oppfyller
pliktene sine, jf. borettslagslovens § 5-18.
6. Felleskostnader og pantesikkerhet
6-1 Felleskostnader
(1) Den enkelte andelseier er ansvarlig for felleskostnadene etter en nøkkel fastsatt
ved stiftelsen av borettslaget. Nøkkelen ligger fast og kan bare endres

---

[d086_d086 | Side [1]]
ner å løpe. Estimatet forutsetter at avdrags-
Vedlegg 1 12 av 18 Årsregnskap 2024 6765 Omsensgate 2 brl.pdf
102

## Side 103

og rentebetingelsene pr. 31.12 beholdes uendret. Da fremtidige endringer i lånebetingelsene
vil kunne medføre endringer i den informasjon som fremkommer av tabellen, må man utvise
forsiktighet med å bruke beregningene som grunnlag for økonomisk planlegging eller
investeringer.
Det understrekes at felleskostnadene i et borettslag ikke nødvendigvis vil øke fra det tidspunkt
avdragene

---

[d086_d086 | Side [1]]
ig ansvar for borettslagets oppdages uventede feil eller mangler ved boligen de
fellesgjeld, men de må dekke borettslagets løpende neste fem årene. Les mer om Boligkjøperforsikring i
utgifter. Manglende innbetaling av fellesutgiftene som vedlagte materiell eller på https:/ /
følge av andre andelshaveres mislighold, eller dersom www.soderbergpartners.no/ eiendom/ boligkjoper/
borettslaget sitter på fraflyttede og/ eller usolgte andeler,
må dekkes av de øvrige andelseierne.
Lovanvendelse
Borettslaget har

---

[d086_d086 | Side [1]]
000 -69 000
Kommunale avgifter 7 -180 371 -188 591 -144 000 -158 000
Energi/fyring -19 808 -47 290 -30 000 -30 000
Andre driftskostnader 8 -44 248 -181 609 -38 000 -39 000
SUM DRIFTSKOSTNADER -617 551 -863 219 -444 000 -440 000
DRIFTSRESULTAT FØR IN: 2 465 544 2 274 787 -1 000 2 558 000
Innbetalt andel fellesgjeld 9 408 000 0 0 0
DRIFTSRESULTAT 11 873 544 2 274 787 -1 000 2 558 000
FINANSINNTEKTER/-KOSTNADER:
Finansinntekter 9 4 687 720 0 0
Finanskostnader 10 -2 594 754 -3 621 997 0 -2 556 000
RES.

---

[d086_d086 | Side [1]]
stjenester, OBOS Eiendomsforvaltning AS -34 000
Fjord Accounting AS -42 291
Revisorkollegiet AS -23 925
Stegg Eiendom AS -2 139
SUM KONSULENTHONORAR -102 355
NOTE: 6
DRIFT OG VEDLIKEHOLD
Drift/vedlikehold bygninger -57 225
Drift/vedlikehold brannsikring -4 811
SUM DRIFT OG VEDLIKEHOLD -62 035
Styret mener at det gjennomførte vedlikeholdet er tilstrekkelig for å oppveie verdiforringelse av
bygningene.
NOTE: 7
KOMMUNALE AVGIFTER
Vann- og avløpsavgift -104 241
Feieavgift -4 352
Renovasjonsavgift -71 778
SUM

---

[d086_d086 | Side [1]]
n vært ansatte eller lønnsutbetalinger i selskapet gjennom året. Selskapet
er derav ikke pliktig til å ha tjenestepensjonsordning etter lov om obligatorisk
tjenestepensjon. Det har heller ikke vært utbetalt styrehonorar.
INDIVIDUELL NEDBETALING AV FELLESGJELD
Borettslaget har etablert en ordning med mulighet for individuell nedbetaling av
borettslagets fellesgjeld. Individuelle nedbetalinger fra andelseierne er behandlet etter
egenkapitalløsningen. Egenkapitalløsningen innebærer at individuelle

---

[d086_d086 | Side [1]]
ttslagets
disponible midler ved årsskiftet. I resultatregnskapet presenteres det en oversikt over
borettslagets inntekter og kostnader. Det regnskapsmessige overskuddet tar ikke hensyn til en
del viktige økonomiske forhold som påvirker borettslagets disponible midler. Dette gjelder for
eksempel opptak og avdrag på lån, samt kjøp og salg av anleggsmidler. Borettslagets
disponible midler er de økonomiske midlene som borettslaget har til rådighet, og de defineres
som omløpsmidler fratrukket kortsiktig gjeld.

---

[d086_d086 | Side [1]]
e om IN ordning. Ønsker kjøper å
Felleskostnader kr 12 268,‑ pr. mnd nedbetale hele eller deler av sin andel fellesgjeld, så bes
denne ta kontakt med selskapets rådgiver for
Felleskostnader inkulderer: forretningsfører, revisjon, informasjon. For selskap med IN‑ordning gjør vi
35

## Side 36

OM EIENDOMMEN
oppmerksom på at kapitalkostnader (renter/ avdrag) vil SSBs statistiske opplysninger om omsatte boliger. I
være spesifisert på fakturaen for felleskostnader beregningen tas det hensyn til din boligs

---

[d086_d086 | Side [1]]
om strømforbruket: dette med mindre boligen er helt eller delvis utleid.
Jeg betaler opp til 2000 kr i strøm om vinteren og ned
mot 400 kr om sommeren.
Diverse
Borettslagsmodellen innebærer at borettslaget eier
Regulerings og arealplaner
eiendommen, mens andelseierne eier andeler i
Eiendommen er regulert til boligformål iht. S‑2255. borettslaget, som gir borett til en bestemt bolig.
41

## Side 42

OM EIENDOMMEN
Andelseierne har ikke personlig ansvar for borettslagets oppdages uventede feil eller mangler

---

[d086_d086 | Side [1]]
ene forfaller til betaling den 1. i hver måned. Borettslaget kan endre
felleskostnadene med en måneds skriftlig varsel.
(2) For felleskostnader som ikke blir betalt ved forfall, svarer andelseieren den til
enhver tid gjeldende forsinkelsesrente etter lov av 17. desember 1976 nr. 100.
6-3 Borettslagets pantesikkerhet
For krav på dekning av felleskostnader og andre krav fra lagsforholdet har
borettslaget en lovbestemt panterett i andelen foran alle andre heftelser. Pantekravet
er begrenset til en sum som

---

[d086_d086 | Side [1]]
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑
Kommunale avgifter
1 090 (Omkostninger totalt (uten Boligkjøperforsikring))
10 390 (Omkostninger totalt (med Boligkjøperforsikring)) Informasjon: Inkludert i felleskostnadene.
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑
Fellesgjeld
4 480 700 (Totalpris inkl. omkostninger (uten
Boligkjøperforsikring)) Kr 2 370 000 pr. 01.02.2026
4 490 000 (Totalpris inkl. omkostninger (med
Boligkjøperforsikring)) Lånebetingelser fellesgjeld: Bank: OBOS

---

[d086_d086 | Side [1]]
savgift -104 241
Feieavgift -4 352
Renovasjonsavgift -71 778
SUM KOMMUNALE AVGIFTER -180 371
NOTE: 8
ANDRE DRIFTSKOSTNADER
Renhold ved firmaer -40 532
Andre fremmede tjenester -52
Andre kontorkostnader -1 090
Bank- og kortgebyr -2 574
SUM ANDRE DRIFTSKOSTNADER -44 248
NOTE: 9
FINANSINNTEKTER
Renter av driftskonto i OBOS-banken 4 766
Renter av for sent innbetalte felleskostnader -79
SUM FINANSINNTEKTER 4 687
Vedlegg 1 10 av 18 Årsregnskap 2024 6765 Omsensgate 2 brl.pdf
100

## Side 101

NOTE:

---

[d086_d086 | Side [1]]
Første avdrag er 30/03-2034
Potensiell endring i felleskostnader fra 01/03-2034
1, 3 2 600
4 2 750
6 2 850
8, 10 2 900
12 2 950
14 3 000
16 3 050
2 3 200
7 3 250
11 3 300
15 3 400
5 3 550
9 3 650
13 3 700
NOTE: 15
ANNEN KORTSIKTIG GJELD
Avregning renter etc -112 155
SUM ANNEN KORTSIKTIG GJELD -112 155
Vedlegg 1 13 av 18 Årsregnskap 2024 6765 Omsensgate 2 brl.pdf
103

## Side 104


Til generalforsamlingen i Omens Gate 2 Brl

Konklusjon
Vi har revidert årsregnskapet for Omens

---

[d086_d086 | Side [1]]
lser med sikte på å
avdekke slike forhold. Punktet omfa琀琀er ikke skjulte eller ikke-synlige
forhold, tekniske vurderinger eller forhold som krever
spesialundersøkelser. Forhold vurderes e琀琀er byggteknisk forskri昀琀 på
befarings琀椀dpunktet.
Helse, miljø og sikkerhet
Vurdering av avvik:
• Det er ikke foreta琀琀 radonmålinger, og bygget er heller ikke u琀昀ørt med
radonsperre.
Konsekvens/琀椀ltak
• Det bør gjennomføres radonmålinger.
Leiligheter som ligger mindre enn tre etasjer over bakkenivå og
anbefales

---

[d086_d086 | Side [1]]
er som ligger mindre enn tre etasjer over bakkenivå og
anbefales radonmålinger.
Radon skal måles i vinterhalvåret, mellom midten av oktober og midten
av april, og skal foregå over et 琀椀dsrom på minst to måneder.
I henhold 琀椀l NGU si琀琀 kart over Radon aktsomhet har de琀琀e området
usikker aktsomhetsgrad.
Oppdragsnr.: 15467-2972 Befaringsdato: 17.02.2026 Side: 10 av 16
66

## Side 67

Omsens gate 2 B, 0478 OSLO Takstmann Jan Berby MNTF
Gnr 225 - Bnr 191 Pb. 80 Tåsen
0301 OSLO 0801 OSLO
Arealer, byggetegninger

---

[d086_d086 | Side [1]]
ingsplaner vedtatt etter 17.09.2014 og til 23.09.2015 vil gjelde foran kommuneplanen ved motstrid.
Reguleringsplaner vedtatt etter kommuneplanen vil gjelde foran kommuneplanen ved motstrid.
Se tegnforklaring på eget ark.
119

## Side 120

Tegnforklaring - kommuneplan
Farled Bebyggelse og anlegg, eksisterende
Fjernveg (tunnel) Bebyggelse og anlegg, fremtidig
Fjernveg Bane, eksisterende
Markagrense Havn, eksisterende
Plangrense Havn, fremtidig
Sporveg (tunnel), fremtig Kollektivknutepunkt, fremtidig
Sporveg

---

[d086_d086 | Side [1]]
 på eget ark
Ekvidistanse 1m
Koord.system: EUREF89 - UTM sone 32 PlottID/Best.nr: 153322/ 86527018 Deres ref.:
Høydereferanser Adresse: Omsens gate 2
- Reguleringsplan: Se reg.best. Kommentar:
- Bakgrunnskart: NN2000
Originalformat: A3 Gnr/Bnr: 225/191
117

## Side 118

TEGNFORKLARING - REGULERING (for gjeldende kartutsnitt)
118

## Side 119

0065466
0035466
0005466
6645600
6645300
6645000
598500 598800
598500 598800
© Plan- og bygningsetaten, Oslo kommune
Kommuneplanen 2015–2030
Vedtatt av bystyret

---

[d086_d086 | Side [1]]
ringsplanen ble vedtatt. Det nye sammenstilte
Dato: 17.02.2026 – Kartutsnittet gjelder vertikalnivå 2 (dvs. på bakkenivå). reguleringsplankartet viser dagens terreng- og tomtesituasjon.
– Gjeldende kommunedelplaner: KDP-17 Planens originale vedtakskart er tilgjengelig i Saksinnsyn.
Bruker: FME
– Naturmangfold innenfor kartutsnittet. Se eget kart.
Målestokk 1:1000 – Kartet er sammenstilt for: . Kan ikke brukes til byggesak. Se tegnforklaring på eget ark
Ekvidistanse 1m
Koord.system: EUREF89 - UTM sone 32

---

[d086_d086 | Side [1]]

Fordeling av 琀椀lstandsgrader
TG0: Ingen avvik
TG1: Mindre eller moderate avvik
TG2: Avvik som kan kreve 琀椀ltak
TG3: Store eller alvorlige avvik
TG IU: Konstruksjoner som ikke er undersøkt
Andelsleilighet i boligbygg med 昀氀ere boenheter
KONSTRUKSJONER SOM IKKE ER UNDERSØKT
Våtrom > 2. etasje > Bad/vaskerom > Tilliggende Gå til side
konstruksjoner våtrom
AVVIK SOM KAN KREVE TILTAK
Utvendig > Vinduer Gå til side
HELSE, MILJØ OG SIKKERHET
Forhold som åpenbart kan medføre fare for helse, miljø og sikkerhet
Det

---

[d086_d086 | Side [1]]
3

## Side 114

114

## Side 115

115

## Side 116

116

## Side 117

0055466
0045466
0035466
0055466
0045466
0035466
598500 598600 598700
598500 598600 598700
*=regulert kotehøyde med Oslo lokal som høydereferanse. Ved prosjektering legges 37 cm til denne kotehøyden. © Plan- og bygningsetaten, Oslo kommune
Reguleringskart
Opprinnelig reguleringsplan gir rammer for høyder på planlagt
bebyggelse ut fra terrenghøydene slik de var da
reguleringsplanen ble vedtatt. Det nye sammenstilte
Dato: 17.02.2026 –

---

[d086_d086 | Side [1]]
r seg ikke ansvar for boligen, har imidlertid rett til å leie ut deler av boligen til
informasjonen som fremgår av energiattesten. andre uten styregodkjenning, jf. borettslagsloven § 5‑4.
Korttidsutleie er tillatt i opptil 30 døgn per år uten
samtykke fra styret.
Oppvarming
Leiligheten er elektrisk oppvarmet med panelovner samt
Radonmåling
gulvvarme på bad.
Selger har ikke utført radonmåling. Det er ikke krav om
Selger sier følgende om strømforbruket: dette med mindre boligen er helt eller delvis

---

[d086_d086 | Side [1]]
etaten, Oslo kommune
Kommuneplanen 2015–2030
Vedtatt av bystyret 23.09.2015, sak 262
Dato: 17.02.2026 Kartet viser utsnitt av «Plankart 1-2 Arealbruk» og «Plankart 2-2 Hensynssoner». For øvrige juridisk bindende
kart, se Planinnsyn - https://od2.pbe.oslo.kommune.no/kart/?mode=kommuneplan
Målestokk 1:3000
Koordinatsystem: EUREF89 - UTM sone 32 Blå ramme viser utsnittet for de øvrige plottene.
PlottID/Best.nr: 153322/86527018
Deres ref.: Reguleringsplaner vedtatt etter 17.09.2014 og til 23.09.2015 vil gjelde

---

[d086_d086 | Side [1]]
 radonmåling?
Nei Ja
22 Kjenner du til manglende brukstillatelse eller ferdigattest?
Nei Ja
23 Kjenner du til om det foreligger skaderapporter/ tilstandsvurderinger eller utførte målinger?
Nei Ja
Beskrivelse Tilstandsrapport fulgte med overtagelse av leilighet i 2023.
24 Er det andre forhold av betydning ved eiendommen som kan være relevant for kjøper å vite om (f.eks. rasfare, tinglyste forhold eller private
avtaler)?
Nei Ja
Spørsmål for bolig i sameie/borettslag/boligaksjeselskap:
25 Kjenner du til om

---

[d086_d086 | Side [1]]
branncelleinndeling
Rom for varig opphold har krav 琀椀l takhøyde, romstørrelse,rømningsvei
Den bygningssakkyndige ser på byggetegninger hvis de er 琀椀lgjengelige og de琀琀e er og lysforhold som må være oppfylt. Du kan søke kommunen om unntak
en del av oppdraget,og vurderer bruken av boligen opp mot tegningene. Hvis den for kravene, men kan ikke regne med å få unntak for krav som går på
bygningssakkyndig avdekker at en bolig ikke ser ut 琀椀l å være delt opp i brannceller helse og sikkerhet, for eksempel krav 琀椀l

---

[d086_d086 | Side [1]]
ger, samme gjelder hvis eiendommen ikke samsvarer med
oppfordres interessenter til å kontakte eiendomsmegler det som med rimelighet kunne forventes ut fra blant
eller egne rådgivere før de gir bud. annet alder, type og synlig tilstand – eller hvis det er
tilbakeholdt, eller gitt feilaktige opplysninger, og dette har
Slitasje og bruk påvirket avtalen.
Det må også forventes at eiendommer som har vært i
bruk, vil kunne ha tegn til slitasje og eventuelle skader. Dersom det er avvik mellom oppgitt og faktisk

---

[d086_d086 | Side [1]]
g og utvendig, bygger på informasjon hentet fra
selger. vedlagte tilstands‑ og boligsalgsrapport. Innholdet i
salgsoppgaven er basert på selgers informasjon,
fagkyndig vurdering, samt opplysninger fra offentlige
Forsikring
registre som kommunen og Kartverket. Det er viktig at
Boligselgerforsikring: Selger har tegnet kjøper setter seg grundig inn i alle salgsdokumentene,
boligselgerforsikring som dekker selgers ansvar etter herunder salgsoppgave, tilstandsrapport og selgers
avhendingsloven begrenset oppad

---

[d086_d086 | Side [1]]
i kraft når kontrakten er signert av begge parter, begrenset til siste 12 måneder før overtakelse.
Forøvrig oppfordrer selger potensielle kjøpere til å undersøke eiendommen grundig, jf avhendigsloven § 3-10 og kjøpsloven § 20
(aksjeboliger).
Gyldig forsikring forutsetter at det for helårs- og fritidsbolig foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere
bolighandel).
Jeg ønsker boligselgerforsikring, og bekrefter å ha mottatt og lest forsikringsvilkårene og

---

[d086_d086 | Side [1]]
ave, tilstandsrapport og selgers
avhendingsloven begrenset oppad kr. 20 000 000,‑. egenerklæring. Kjøper anses for å være kjent med
Egenerklæringsskjema er vedlagt salgsoppgaven og forhold som er tydelig beskrevet i salgsdokumentene,
interessenter oppfordres til å gjennomgå denne før bud slike forhold kan ikke senere gjøres gjeldende som en
inngis. mangel ved boligen. Dette gjelder uavhengig av om
dokumentene er lest.
Boligkjøperforsikring: Kjøper har anledning til å tegne
boligkjøperforsikring. Vedlagt i

---

[d086_d086 | Side [1]]
ndommen ikke er en næringseiendom, at den ikke
selges som ledd i næringsvirksomhet eller mellom ektefeller eller slektninger i rett oppstigende eller nedstigende linje, søsken, eller
mellom personer som bor eller har bodd på boligeiendommen. Gyldig forsikring forutsetter at det for helårs- og fritidsbolig
foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere bolighandel). Forsikringen er ugyldig dersom
den tegnes i strid med forsikringsvilkårene. Jeg er innforstått med at

---

[d086_d086 | Side [1]]
ndige, uriktige eller misvisende
opplysninger om eiendommen, vil forsikringsselskapet kunne søke hel eller delvis regress for sine utbetalinger eller redusere sitt ansvar helt
eller delvis, jfr. vilkår for boligselgerforsikring punkt 7.1 og forsikringsavtaleloven kapittel 4.
Jeg er orientert om mitt mulige ansvar som selger etter avhendingsloven, eventuelt etter kjøpsloven (aksjeboliger), og om forsikringsgiver sitt
boligselgerforsikringstilbud.
Jeg er klar over at avtale om forsikring er bindende. Jeg er

---

[d086_d086 | Side [1]]
ssenter
grundig gjennomgår disse dokumentene før bud legges Kaja Emilie Roa Ladstein
inn.
Borettslag
All informasjon i tilstandsrapporten anses som kjent for Omsens gate 2 Brl
kjøper, og det vil ikke være mulig å reklamere på forhold
som er nevnt i rapporten. Spesielt forhold som er vurdert Organisasjonsnummer: 931710311
med TG2 og TG3 bør vurderes nøye, da de indikerer
avvik fra normal slitasje og/ eller høy alder, noe som kan Andelsnummer: 3
innebære behov for utbedringer. Bygningsdeler som er
merket med

---

[d086_d086 | Side [1]]
ges ansvar begrenses ettersom boligen selges «som fravikes § 3‑3 andre ledd, og eventuelle arealavvik
den er», noe som kan være av verdi for selger. Det vurderes etter § 3‑8.
understrekes at selger står fritt til å velge hvilket bud som
aksepteres, og er ikke forpliktet til å velge det høyeste. Kjøperens plikt til å foreta grundige undersøkelser gjelder
også fullt ut for kjøpere som ikke omfattes av
Alle budgivere må ved inngivelse av bud opplyse om de forbrukerdefinisjonen.
opptrer som forbruker eller som

---

[d086_d086 | Side [1]]
ed forbehold bli akseptert før forbeholdet er på forespørsel fra andre, opplyse om aktuelle bud på
avklart. Konferer gjerne med megler før bud inngis. eiendommen, herunder relevante forbehold. POSTNR: POSTSTED: POSTNR: POSTSTED:
MOB TLF: MOB TLF:
7.Kopi av budjournal skal gis til kjøper og selger uten
3.Megler skal legge til rette for en forsvarlig avvikling av
ugrunnet opphold etter at handel er kommet i stand.
budrunden. I forbrukerforhold (dvs. der selger er E-POST: E-POST:
Dersom det er viktig for

---

[d086_d086 | Side [1]]
iendom
etter at boligeiendommen er lagt ut for salg.
ved salg av helårs- og fritidsbolig er det krav til at det foreligger tilstandsrapport i henhold til Forskrift til avhendingslova (tryggere
bolighandel).
Forsikringsselskapet kan ved skriftlig samtykke akseptere tegning av forsikring også i ovennevnte tilfeller.
Dersom forsikringsselskapet ikke har gitt skriftlig samtykke, kan erstatningen bortfalle.
Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter, begrenset til

---

[d086_d086 | Side [1]]
 tilbehør" med mindre annet fremkommer av egenerklæringsskjema / tilstandsrapporten at det
salgsoppgaven. Listen er vedlagt. mangler/ikke er fremlagt samsvarserklæring for det
elektriske anlegget.
Gjenstander som er nevnt i standardlisten, men som ikke
finnes på eiendommen, vil heller ikke følge med i salget.
Bebyggelsen
Alt utstyr og installasjoner som medfølger overtas slik de
er, uten garanti, med mindre det foreligger en gjeldende Området består hovedsakelig av eldre
garanti fra produsent eller

---

[d086_d086 | Side [1]]
elger leverer eiendommen i ryddig og rengjort stand. En standard tilbehørsliste utarbeidet av Norges
Eiendomsmeglerforbund (NEF) følger salgsoppgaven, og
gjelder som utgangspunkt for hva som inkluderes i salget
Kontrakts‑
– med mindre avvik er tydelig avtalt mellom kjøper og
selger.
grunnlag
Om informasjonsgrunnlaget
Overtakelse
Opplysninger om boligens størrelse og utforming, både
Tidspunkt for overtakelse avtales mellom kjøper og innvendig og utvendig, bygger på informasjon hentet fra
selger. vedlagte

---

[d086_d086 | Side [1]]
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

[d086_d086 | Side [1]]
nen ved hulltaking i bad og vaskerom
er ikke bygningssakkyndiges ansvar. Rapporten beskriver avvik, altså en (våtrom), rom under terreng (kjelleretasje, underetasje og sokkeletasje)
琀椀lstand som er dårligere enn referansenivået. Rapporten framhever eller andre bygningsdeler skjer e琀琀er eiers aksept. Hulltaking av våtrom og
normalt ikke posi琀椀ve sider ved boligen ut over det som fremgår av rom under terreng kan unntaksvis unnlates, se Forskri昀琀 琀椀l
琀椀lstandsgradene. Avhendingsloven.
• Tilstanden angis i

---

[d086_d086 | Side [1]]
.
Adresse
Dører Omsens gate 2B, 0478 OSLO
Entredør i B30 og dB35 kvalitet.
Gnr. 225, bnr. 191, ideell andel 1/ 1
I forbindelse med salget er det blitt utført en i Oslo kommune.Andelsnr. 3 i Omsens gate 2 Brl med
tilstandsrapport av en bygningssakkyndig, som gir en orgnr. 931710311
teknisk gjennomgang av boligen og påpeker eventuelle
avvik. Rapporten, sammen med selgers egenerklæring,
Selger
er vedlagt salgsoppgaven. Det er viktig at interessenter
grundig gjennomgår disse dokumentene før bud legges Kaja

---

[d086_d086 | Side [1]]
person, før bud gis.
42

## Side 43

OM EIENDOMMEN
Dersom kjøper velger å kjøpe uten å ha sett næringsvirksomhet.
eiendommen, kan det ikke etter overtakelse reklameres
på forhold som burde ha vært oppdaget ved en ordinær En eiendom anses å ha en mangel dersom den ikke
gjennomgang. oppfyller kravene som følger av avtalen, eller ved brudd
på bestemmelser i avhendingsloven §§ 3‑2 til 3‑8. Det
Dersom det oppstår behov for ytterligere avklaringer, samme gjelder hvis eiendommen ikke samsvarer med
oppfordres

---

[d086_d086 | Side [1]]
eal alle bygg: BRA: 41 m² BRA-i: 34 m²
Befaringsdato: 17.02.2026 Rapportdato: 04.03.2026 Oppdragsnr.: 15467-2972 Referansenummer: IK9583
Autorisert foretak: Takstmann Jan Berby MNTF Ser琀椀昀椀sert Taks琀椀ngeniør: Jan Berby Vår ref: Deres ref;
02260065
Omsens gate 2B
Rapporten kan brukes i inn琀椀l e琀琀 år e琀琀er rapportdato, og kan ikke gjenbrukes ved 昀氀ere boligsalg i denne perioden.
Skjer det endringer, oppstår skader også videre på boligen, bør du som selger be om oppdatert rapport.
57

## Side 58

Norsk

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "Vesentlig økning i felleskostnader på 25% fra mai – fra ca. kr 2 235,- til ca. kr 2 793,75 per måned. Kjøper må påregne høyere løpende kostnader enn det som fremgår av prisantydningen.",
      "evidence": [
        "Eier har nylig blitt informert av styret i borettslaget om at felleskostnadene vil øke med 25% fra mai. Dette betyr at felleskostnadene vil øke til ca kr. 2 793,75,-",
        "Felleskostnader kr 12 268,- pr. mnd (inkludert IN-lån)"
      ],
      "source_documents": [
        "d086_d086"
      ],
      "source_pages": [
        35
      ],
      "confidence": 0.98
    },
    {
      "risk_id": "R2",
      "description": "Ansettelse av revisor medfører ca. kr 500,- ekstra i måneden i felleskostnader. Dette er et vedtatt vedtak som øker de løpende kostnadene for andelseier.",
      "evidence": [
        "Ansettelse av revisor ble akkurat akseptert av borettslaget, det vil medføre ca 500 kr ekstra i måneden.",
        "Kjenner du til vedtak/forslag til vedtak om forhold vedr. eiendommen som kan medføre økte felleskostnader/økt fellesgjeld? Beskrivelse: Ansettelse av revisor ble akkurat akseptert av borettslaget, det vil medføre ca 500 kr ekstra i måneden."
      ],
      "source_documents": [
        "d086_d086"
      ],
      "source_pages": [
        49
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R3",
      "description": "Høy fellesgjeld på kr 2 370 000 per 01.02.2026. Første avdrag begynner ikke før 30.03.2034, noe som innebærer at gjelden ikke nedbetales på mange år og kan medføre økte felleskostnader når avdragene starter.",
      "evidence": [
        "Kr 2 370 000 pr. 01.02.2026",
        "Første avdrag er 30/03-2034",
        "Potensiell endring i felleskostnader fra 01/03-2034",
        "Det understrekes at felleskostnadene i et borettslag ikke nødvendigvis vil øke fra det tidspunkt avdragene begynner å løpe."
      ],
      "source_documents": [
        "d086_d086"
      ],
      "source_pages": [
        35,
        103
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R4",
      "description": "Ingen radonmåling er utført, og bygget er ikke utført med radonsperre. Eiendommen ligger i et område med usikker aktsomhetsgrad for radon ifølge NGU. Leiligheten ligger i 2. etasje, under tre etasjer over bakkenivå, og radonmåling anbefales.",
      "evidence": [
        "Det er ikke foretatt radonmålinger, og bygget er heller ikke utført med radonsperre.",
        "Det bør gjennomføres radonmålinger.",
        "I henhold til NGU sitt kart over Radon aktsomhet har dette området usikker aktsomhetsgrad.",
        "Selger har ikke utført radonmåling.",
        "Leiligheter som ligger mindre enn tre etasjer over bakkenivå anbefales radonmålinger."
      ],
      "source_documents": [
        "d086_d086"
      ],
      "source_pages": [
        62,
        66,
        41
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R5",
      "description": "Det foreligger godkjente og byggemeldte tegninger, men det er avvik fra disse. Dette kan innebære ulovlige bygningsendringer eller bruksendringer som kommunen kan pålegge å rette opp.",
      "evidence": [
        "Det foreligger godkjente og byggemeldte tegninger, men det er avvik fra disse.",
        "Kommunen kan etter plan- og bygningsloven kapittel 32 forfølge overtredelser. Kommunen kan pålegge deg å avslutte den ulovlige bruken, eventuelt å rette eller tilbakeføre rommet til godkjent bruk."
      ],
      "source_documents": [
        "d086_d086"
      ],
      "source_pages": [
        68,
        67
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R6",
      "description": "Membran og plastsluk på badet er snart 40 år gamle og mer enn halvparten av anbefalt brukstid er overskredet (TG2). Dette innebærer risiko for fuktskader og behov for utskifting i nær fremtid.",
      "evidence": [
        "Det er montert membran og plastsluk med klemring på bad.",
        "Bygningsdelen er nå snart 40 år gamle og mer enn halvparten av anbefalt brukstid er overskredet.",
        "Normal tid før utskifting av trevindu med isolerglass er 20 - 40 år."
      ],
      "source_documents": [
        "d086_d086"
      ],
      "source_pages": [
        68
      ],
      "confidence": 0.93
    },
    {
      "risk_id": "R7",
      "description": "Tilliggende konstruksjoner til våtrom (bad/vaskerom i 2. etasje) er ikke undersøkt (TGIU) på grunn av bygningsmessige hindringer som gjorde hulltaking umulig. Skjulte fuktskader kan foreligge uten at dette er avdekket.",
      "evidence": [
        "Våtrom > 2. etasje > Bad/ vaskerom > Tilliggende konstruksjoner våtrom",
        "Det er pga bygningsmessige hindringer ikke fysisk mulig å foreta hulltaking i vegg bak våtsone.",
        "KONSTRUKSJONER SOM IKKE ER UNDERSØKT: Våtrom > 2. etasje > Bad/vaskerom > Tilliggende konstruksjoner våtrom"
      ],
      "source_documents": [
        "d086_d086"
      ],
      "source_pages": [
        40,
        62
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R8",
      "description": "Vinduer er vurdert med TG2 på grunn av alder. Normal levetid for trevindu med isolerglass er 20–40 år, og bygningsdelen nærmer seg eller har overskredet anbefalt brukstid. Utskifting kan bli nødvendig i nær fremtid.",
      "evidence": [
        "Det er gjennomgående registrert TG 1 og kun en TG 2 som er gitt pga alder på vinduer.",
        "Normal tid før utskifting av trevindu med isolerglass er 20 - 40 år.",
        "AVVIK SOM KAN KREVE TILTAK: Utvendig > Vinduer"
      ],
      "source_documents": [
        "d086_d086"
      ],
      "source_pages": [
        62,
        68
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R9",
      "description": "Bygningen er fra 1904 og har uisolert grunnmur i murverk og naturstein. Eldre eiendommer har normalt større vedlikeholdsbehov og risiko for fuktskader, soppangrep og setninger.",
      "evidence": [
        "Byggeår: 1904",
        "Grunnmur oppført i uisolert murverk og naturstein.",
        "Eldre eiendommer har likevel normalt større vedlikeholdsbehov og behov for utskiftninger/fornyelser pga større risiko for fuktskader, soppangrep, setninger osv. enn nyere eiendommer.",
        "Leilighetene var av eldre dato der kun 2 av leilighetene hadde innlagt toalett."
      ],
      "source_documents": [
        "d086_d086"
      ],
      "source_pages": [
        63,
        62
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R10",
      "description": "Borettslaget har legalpanterett i andelen for inntil 2 ganger folketrygdens grunnbeløp. Dersom andre andelseiere misligholder sine felleskostnader, kan øvrige andelseiere bli belastet for å dekke disse.",
      "evidence": [
        "Andelseierne har ikke personlig ansvar for borettslagets fellesgjeld, men de må dekke borettslagets løpende utgifter. Manglende innbetaling av fellesutgiftene som følge av andre andelshaveres mislighold, eller dersom borettslaget sitter på fraflyttede og/eller usolgte andeler, må dekkes av de øvrige andelseierne.",
        "Borettslaget har legalpant på inntil 2G som sikkerhet for betaling av felleskostnader."
      ],
      "source_documents": [
        "d086_d086"
      ],
      "source_pages": [
        42
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R11",
      "description": "Eiendommen ligger i et område med hensynssoner for kvikkleire (H310_1) og steinsprang (H310_2) ifølge kommuneplankartet. Dette kan innebære geoteknisk risiko.",
      "evidence": [
        "H310_1 - Kvikkleire",
        "H310_2 - Steinsprang"
      ],
      "source_documents": [
        "d086_d086"
      ],
      "source_pages": [
        119,
        120
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R12",
      "description": "Eiendommen ligger i et område med hensynssoner for stormflo (H320_1) og elveflom (H320_2) ifølge kommuneplankartet. Dette kan innebære risiko for naturskader.",
      "evidence": [
        "H320_1 - Stormflo",
        "H320_2 - Elveflom",
        "H390 - Deponi"
      ],
      "source_documents": [
        "d086_d086"
      ],
      "source_pages": [
        119,
        120
      ],
      "confidence": 0.78
    },
    {
      "risk_id": "R13",
      "description": "Det mangler samsvarserklæring for det elektriske anlegget. Dette kan indikere at det elektriske anlegget ikke er kontrollert eller godkjent av fagkyndig, noe som utgjør en sikkerhetsrisiko.",
      "evidence": [
        "det mangler/ikke er fremlagt samsvarserklæring for det elektriske anlegget.",
        "Bygningssakkyndig gir en forenklet vurdering av branntekniske forhold og elektriske installasjoner i boligen dersom det er mer enn fem år siden sist boligen hadde el-tilsyn."
      ],
      "source_documents": [
        "d086_d086"
      ],
      "source_pages": [
        41
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R14",
      "description": "Eiendommen er regulert etter en eldre reguleringsplan (S-2255, vedtatt 1977) som i stor grad er opphevet eller overstyrt av nyere planer, primært Kommuneplan 2015 – Oslo mot 2030. Fremtidige reguleringsendringer kan påvirke bruken av eiendommen eller dens omgivelser.",
      "evidence": [
        "Reguleringsplan S-2255 for Oslo sentrum og indre sone (vedtatt 1977) er i stor grad opphevet eller overstyrt av nyere planer, primært «Kommuneplan 2015 - Oslo mot 2030».",
        "Kjenner du til forslag eller vedtatte reguleringsplaner, andre planer, nabovarsel eller offentlige vedtak som kan medføre endringer i bruken av eiendommen eller av dens omgivelser? Nei"
      ],
      "source_documents": [
        "d086_d086"
      ],
      "source_pages": [
        40,
        49
      ],
      "confidence": 0.72
    },
    {
      "risk_id": "R15",
      "description": "Eiendommen er markert med hensynssone H570 – Bevaring kulturmiljø. Dette kan medføre restriksjoner på fremtidige byggetiltak, rehabilitering og endringer av fasade eller eksteriør.",
      "evidence": [
        "H570 - Bevaring kulturmiljø",
        "Yttervegger i murverk, opprinnelig originale utvendige fasader med trekninger, ornamenter og konsoller."
      ],
      "source_documents": [
        "d086_d086"
      ],
      "source_pages": [
        119,
        120,
        63
      ],
      "confidence": 0.82
    }
  ],
  "re_retrieval_queries": [
    "elektrisk anlegg el-tilsyn alder samsvarserklæring",
    "fellesgjeld lånebetingelser rente OBOS bank",
    "kvikkleire steinsprang geoteknisk vurdering grunnforhold",
    "stormflo elveflom flomrisiko naturskade",
    "H570 bevaring kulturmiljø restriksjoner byggetiltak",
    "avvik byggetegninger bruksendring ulovlig",
    "borettslagets økonomi budsjett fremtidige kostnader",
    "deponi H390 forurensning grunn"
  ],
  "reasoning": "\nGjennomgang av alle 15 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Økning felleskostnader 25%:** Meget godt dokumentert direkte i salgsoppgaven. Beløpene stemmer (2235 × 1,25 = 2793,75). Confidence opprettholdes på 0.98.\n\n**R2 – Revisor +500 kr/mnd:** Direkte sitert fra egenerklæringsskjema spørsmål 26. Godt dokumentert. Confidence opprettholdes på 0.97.\n\n**R3 – Høy fellesgjeld, avdragsfrihet til 2034:** Godt dokumentert med konkrete tall fra salgsoppgaven og årsregnskapet. Dokumentet presiserer at felleskostnadene ikke nødvendigvis vil øke når avdragene starter, noe som nyanserer risikoen noe, men grunnrisikoen er reell. Confidence opprettholdes på 0.95.\n\n**R4 – Radon:** Meget godt dokumentert fra tilstandsrapport, egenerklæring og NGU-kart. Confidence opprettholdes på 0.97.\n\n**R5 – Avvik fra byggetegninger:** Direkte dokumentert i tilstandsrapporten. Konsekvensene er også beskrevet. Confidence opprettholdes på 0.95.\n\n**R6 – Membran/sluk TG2:** Godt dokumentert. Merk at evidensen om \"Normal tid for trevindu\" er feilplassert i original evidensliste – dette gjelder vinduer, ikke membran. Selve membranevidensen er likevel tilstrekkelig. Confidence opprettholdes på 0.93.\n\n**R7 – TGIU tilliggende konstruksjoner:** Godt dokumentert. Fremgår tydelig av tilstandsrapportens sammendrag og tekst. Confidence opprettholdes på 0.92.\n\n**R8 – Vinduer TG2:** Godt dokumentert. Fremgår av tilstandsrapportens sammendrag. Confidence opprettholdes på 0.90.\n\n**R9 – Byggeår 1904, uisolert grunnmur:** Godt dokumentert. Confidence opprettholdes på 0.90.\n\n**R10 – Legalpant/mislighold:** Godt dokumentert fra salgsoppgaven. Confidence opprettholdes på 0.88.\n\n**R11 – Kvikkleire/steinsprang:** Dokumentert i kommuneplankartet. Ingen ytterligere geoteknisk vurdering foreligger i dokumentene. Confidence opprettholdes på 0.80.\n\n**R12 – Stormflo/elveflom:** Dokumentert i kommuneplankartet. Ingen ytterligere risikovurdering foreligger. Confidence opprettholdes på 0.78.\n\n**R13 – Manglende samsvarserklæring el-anlegg:** Direkte dokumentert i salgsoppgaven. Confidence opprettholdes på 0.85.\n\n**R14 – Eldre reguleringsplan:** Dokumentert, men selger svarer \"Nei\" på spørsmål om kjente reguleringsendringer. Risikoen er mer generell/fremtidig. Confidence justeres ned til 0.72.\n\n**R15 – H570 Bevaring kulturmiljø:** Dokumentert i kommuneplankartet. Fasaden beskrives som original med ornamenter og konsoller, noe som underbygger at kulturmiljørestriksjoner er relevante. Confidence justeres opp til 0.82.\n\n**Mulige manglende risikoer identifisert:**\n- H390 Deponi er nevnt i kommuneplankartet – potensiell forurensningsrisiko i grunnen er ikke identifisert som egen risiko.\n- Fellesgjeld på kr 2 370 000 er svært høy relativt til andelsverdi – dette er delvis dekket av R3, men IN-ordningens kompleksitet og kapitalkostnader (kr 1 703 400 i innkrevde felleskostnader) bør undersøkes nærmere.\n- Bygget er fra 1904 og har saltak med tresperrekonstruksjoner – takstilstand er ikke eksplisitt vurdert i de fremlagte dokumentchunkene.\n- Korttidsutleie er begrenset til 30 døgn per år uten styresamtykke – dette er en bruksbegrensning som kan være relevant for kjøpere som ønsker utleie.\n"
}

## Raw Response
```json
{
  "id": "msg_01EhjdWSctUWbTWsXgtKKwgF",
  "container": null,
  "content": [
    {
      "id": "toolu_01QxyXrrUUMz8NbB3knbTeXA",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "Vesentlig økning i felleskostnader på 25% fra mai – fra ca. kr 2 235,- til ca. kr 2 793,75 per måned. Kjøper må påregne høyere løpende kostnader enn det som fremgår av prisantydningen.",
            "evidence": [
              "Eier har nylig blitt informert av styret i borettslaget om at felleskostnadene vil øke med 25% fra mai. Dette betyr at felleskostnadene vil øke til ca kr. 2 793,75,-",
              "Felleskostnader kr 12 268,- pr. mnd (inkludert IN-lån)"
            ],
            "source_documents": [
              "d086_d086"
            ],
            "source_pages": [
              35
            ],
            "confidence": 0.98
          },
          {
            "risk_id": "R2",
            "description": "Ansettelse av revisor medfører ca. kr 500,- ekstra i måneden i felleskostnader. Dette er et vedtatt vedtak som øker de løpende kostnadene for andelseier.",
            "evidence": [
              "Ansettelse av revisor ble akkurat akseptert av borettslaget, det vil medføre ca 500 kr ekstra i måneden.",
              "Kjenner du til vedtak/forslag til vedtak om forhold vedr. eiendommen som kan medføre økte felleskostnader/økt fellesgjeld? Beskrivelse: Ansettelse av revisor ble akkurat akseptert av borettslaget, det vil medføre ca 500 kr ekstra i måneden."
            ],
            "source_documents": [
              "d086_d086"
            ],
            "source_pages": [
              49
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R3",
            "description": "Høy fellesgjeld på kr 2 370 000 per 01.02.2026. Første avdrag begynner ikke før 30.03.2034, noe som innebærer at gjelden ikke nedbetales på mange år og kan medføre økte felleskostnader når avdragene starter.",
            "evidence": [
              "Kr 2 370 000 pr. 01.02.2026",
              "Første avdrag er 30/03-2034",
              "Potensiell endring i felleskostnader fra 01/03-2034",
              "Det understrekes at felleskostnadene i et borettslag ikke nødvendigvis vil øke fra det tidspunkt avdragene begynner å løpe."
            ],
            "source_documents": [
              "d086_d086"
            ],
            "source_pages": [
              35,
              103
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R4",
            "description": "Ingen radonmåling er utført, og bygget er ikke utført med radonsperre. Eiendommen ligger i et område med usikker aktsomhetsgrad for radon ifølge NGU. Leiligheten ligger i 2. etasje, under tre etasjer over bakkenivå, og radonmåling anbefales.",
            "evidence": [
              "Det er ikke foretatt radonmålinger, og bygget er heller ikke utført med radonsperre.",
              "Det bør gjennomføres radonmålinger.",
              "I henhold til NGU sitt kart over Radon aktsomhet har dette området usikker aktsomhetsgrad.",
              "Selger har ikke utført radonmåling.",
              "Leiligheter som ligger mindre enn tre etasjer over bakkenivå anbefales radonmålinger."
            ],
            "source_documents": [
              "d086_d086"
            ],
            "source_pages": [
              62,
              66,
              41
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R5",
            "description": "Det foreligger godkjente og byggemeldte tegninger, men det er avvik fra disse. Dette kan innebære ulovlige bygningsendringer eller bruksendringer som kommunen kan pålegge å rette opp.",
            "evidence": [
              "Det foreligger godkjente og byggemeldte tegninger, men det er avvik fra disse.",
              "Kommunen kan etter plan- og bygningsloven kapittel 32 forfølge overtredelser. Kommunen kan pålegge deg å avslutte den ulovlige bruken, eventuelt å rette eller tilbakeføre rommet til godkjent bruk."
            ],
            "source_documents": [
              "d086_d086"
            ],
            "source_pages": [
              68,
              67
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R6",
            "description": "Membran og plastsluk på badet er snart 40 år gamle og mer enn halvparten av anbefalt brukstid er overskredet (TG2). Dette innebærer risiko for fuktskader og behov for utskifting i nær fremtid.",
            "evidence": [
              "Det er montert membran og plastsluk med klemring på bad.",
              "Bygningsdelen er nå snart 40 år gamle og mer enn halvparten av anbefalt brukstid er overskredet.",
              "Normal tid før utskifting av trevindu med isolerglass er 20 - 40 år."
            ],
            "source_documents": [
              "d086_d086"
            ],
            "source_pages": [
              68
            ],
            "confidence": 0.93
          },
          {
            "risk_id": "R7",
            "description": "Tilliggende konstruksjoner til våtrom (bad/vaskerom i 2. etasje) er ikke undersøkt (TGIU) på grunn av bygningsmessige hindringer som gjorde hulltaking umulig. Skjulte fuktskader kan foreligge uten at dette er avdekket.",
            "evidence": [
              "Våtrom > 2. etasje > Bad/ vaskerom > Tilliggende konstruksjoner våtrom",
              "Det er pga bygningsmessige hindringer ikke fysisk mulig å foreta hulltaking i vegg bak våtsone.",
              "KONSTRUKSJONER SOM IKKE ER UNDERSØKT: Våtrom > 2. etasje > Bad/vaskerom > Tilliggende konstruksjoner våtrom"
            ],
            "source_documents": [
              "d086_d086"
            ],
            "source_pages": [
              40,
              62
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R8",
            "description": "Vinduer er vurdert med TG2 på grunn av alder. Normal levetid for trevindu med isolerglass er 20–40 år, og bygningsdelen nærmer seg eller har overskredet anbefalt brukstid. Utskifting kan bli nødvendig i nær fremtid.",
            "evidence": [
              "Det er gjennomgående registrert TG 1 og kun en TG 2 som er gitt pga alder på vinduer.",
              "Normal tid før utskifting av trevindu med isolerglass er 20 - 40 år.",
              "AVVIK SOM KAN KREVE TILTAK: Utvendig > Vinduer"
            ],
            "source_documents": [
              "d086_d086"
            ],
            "source_pages": [
              62,
              68
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R9",
            "description": "Bygningen er fra 1904 og har uisolert grunnmur i murverk og naturstein. Eldre eiendommer har normalt større vedlikeholdsbehov og risiko for fuktskader, soppangrep og setninger.",
            "evidence": [
              "Byggeår: 1904",
              "Grunnmur oppført i uisolert murverk og naturstein.",
              "Eldre eiendommer har likevel normalt større vedlikeholdsbehov og behov for utskiftninger/fornyelser pga større risiko for fuktskader, soppangrep, setninger osv. enn nyere eiendommer.",
              "Leilighetene var av eldre dato der kun 2 av leilighetene hadde innlagt toalett."
            ],
            "source_documents": [
              "d086_d086"
            ],
            "source_pages": [
              63,
              62
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R10",
            "description": "Borettslaget har legalpanterett i andelen for inntil 2 ganger folketrygdens grunnbeløp. Dersom andre andelseiere misligholder sine felleskostnader, kan øvrige andelseiere bli belastet for å dekke disse.",
            "evidence": [
              "Andelseierne har ikke personlig ansvar for borettslagets fellesgjeld, men de må dekke borettslagets løpende utgifter. Manglende innbetaling av fellesutgiftene som følge av andre andelshaveres mislighold, eller dersom borettslaget sitter på fraflyttede og/eller usolgte andeler, må dekkes av de øvrige andelseierne.",
              "Borettslaget har legalpant på inntil 2G som sikkerhet for betaling av felleskostnader."
            ],
            "source_documents": [
              "d086_d086"
            ],
            "source_pages": [
              42
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R11",
            "description": "Eiendommen ligger i et område med hensynssoner for kvikkleire (H310_1) og steinsprang (H310_2) ifølge kommuneplankartet. Dette kan innebære geoteknisk risiko.",
            "evidence": [
              "H310_1 - Kvikkleire",
              "H310_2 - Steinsprang"
            ],
            "source_documents": [
              "d086_d086"
            ],
            "source_pages": [
              119,
              120
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R12",
            "description": "Eiendommen ligger i et område med hensynssoner for stormflo (H320_1) og elveflom (H320_2) ifølge kommuneplankartet. Dette kan innebære risiko for naturskader.",
            "evidence": [
              "H320_1 - Stormflo",
              "H320_2 - Elveflom",
              "H390 - Deponi"
            ],
            "source_documents": [
              "d086_d086"
            ],
            "source_pages": [
              119,
              120
            ],
            "confidence": 0.78
          },
          {
            "risk_id": "R13",
            "description": "Det mangler samsvarserklæring for det elektriske anlegget. Dette kan indikere at det elektriske anlegget ikke er kontrollert eller godkjent av fagkyndig, noe som utgjør en sikkerhetsrisiko.",
            "evidence": [
              "det mangler/ikke er fremlagt samsvarserklæring for det elektriske anlegget.",
              "Bygningssakkyndig gir en forenklet vurdering av branntekniske forhold og elektriske installasjoner i boligen dersom det er mer enn fem år siden sist boligen hadde el-tilsyn."
            ],
            "source_documents": [
              "d086_d086"
            ],
            "source_pages": [
              41
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R14",
            "description": "Eiendommen er regulert etter en eldre reguleringsplan (S-2255, vedtatt 1977) som i stor grad er opphevet eller overstyrt av nyere planer, primært Kommuneplan 2015 – Oslo mot 2030. Fremtidige reguleringsendringer kan påvirke bruken av eiendommen eller dens omgivelser.",
            "evidence": [
              "Reguleringsplan S-2255 for Oslo sentrum og indre sone (vedtatt 1977) er i stor grad opphevet eller overstyrt av nyere planer, primært «Kommuneplan 2015 - Oslo mot 2030».",
              "Kjenner du til forslag eller vedtatte reguleringsplaner, andre planer, nabovarsel eller offentlige vedtak som kan medføre endringer i bruken av eiendommen eller av dens omgivelser? Nei"
            ],
            "source_documents": [
              "d086_d086"
            ],
            "source_pages": [
              40,
              49
            ],
            "confidence": 0.72
          },
          {
            "risk_id": "R15",
            "description": "Eiendommen er markert med hensynssone H570 – Bevaring kulturmiljø. Dette kan medføre restriksjoner på fremtidige byggetiltak, rehabilitering og endringer av fasade eller eksteriør.",
            "evidence": [
              "H570 - Bevaring kulturmiljø",
              "Yttervegger i murverk, opprinnelig originale utvendige fasader med trekninger, ornamenter og konsoller."
            ],
            "source_documents": [
              "d086_d086"
            ],
            "source_pages": [
              119,
              120,
              63
            ],
            "confidence": 0.82
          }
        ],
        "re_retrieval_queries": [
          "elektrisk anlegg el-tilsyn alder samsvarserklæring",
          "fellesgjeld lånebetingelser rente OBOS bank",
          "kvikkleire steinsprang geoteknisk vurdering grunnforhold",
          "stormflo elveflom flomrisiko naturskade",
          "H570 bevaring kulturmiljø restriksjoner byggetiltak",
          "avvik byggetegninger bruksendring ulovlig",
          "borettslagets økonomi budsjett fremtidige kostnader",
          "deponi H390 forurensning grunn"
        ],
        "reasoning": "\nGjennomgang av alle 15 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Økning felleskostnader 25%:** Meget godt dokumentert direkte i salgsoppgaven. Beløpene stemmer (2235 × 1,25 = 2793,75). Confidence opprettholdes på 0.98.\n\n**R2 – Revisor +500 kr/mnd:** Direkte sitert fra egenerklæringsskjema spørsmål 26. Godt dokumentert. Confidence opprettholdes på 0.97.\n\n**R3 – Høy fellesgjeld, avdragsfrihet til 2034:** Godt dokumentert med konkrete tall fra salgsoppgaven og årsregnskapet. Dokumentet presiserer at felleskostnadene ikke nødvendigvis vil øke når avdragene starter, noe som nyanserer risikoen noe, men grunnrisikoen er reell. Confidence opprettholdes på 0.95.\n\n**R4 – Radon:** Meget godt dokumentert fra tilstandsrapport, egenerklæring og NGU-kart. Confidence opprettholdes på 0.97.\n\n**R5 – Avvik fra byggetegninger:** Direkte dokumentert i tilstandsrapporten. Konsekvensene er også beskrevet. Confidence opprettholdes på 0.95.\n\n**R6 – Membran/sluk TG2:** Godt dokumentert. Merk at evidensen om \"Normal tid for trevindu\" er feilplassert i original evidensliste – dette gjelder vinduer, ikke membran. Selve membranevidensen er likevel tilstrekkelig. Confidence opprettholdes på 0.93.\n\n**R7 – TGIU tilliggende konstruksjoner:** Godt dokumentert. Fremgår tydelig av tilstandsrapportens sammendrag og tekst. Confidence opprettholdes på 0.92.\n\n**R8 – Vinduer TG2:** Godt dokumentert. Fremgår av tilstandsrapportens sammendrag. Confidence opprettholdes på 0.90.\n\n**R9 – Byggeår 1904, uisolert grunnmur:** Godt dokumentert. Confidence opprettholdes på 0.90.\n\n**R10 – Legalpant/mislighold:** Godt dokumentert fra salgsoppgaven. Confidence opprettholdes på 0.88.\n\n**R11 – Kvikkleire/steinsprang:** Dokumentert i kommuneplankartet. Ingen ytterligere geoteknisk vurdering foreligger i dokumentene. Confidence opprettholdes på 0.80.\n\n**R12 – Stormflo/elveflom:** Dokumentert i kommuneplankartet. Ingen ytterligere risikovurdering foreligger. Confidence opprettholdes på 0.78.\n\n**R13 – Manglende samsvarserklæring el-anlegg:** Direkte dokumentert i salgsoppgaven. Confidence opprettholdes på 0.85.\n\n**R14 – Eldre reguleringsplan:** Dokumentert, men selger svarer \"Nei\" på spørsmål om kjente reguleringsendringer. Risikoen er mer generell/fremtidig. Confidence justeres ned til 0.72.\n\n**R15 – H570 Bevaring kulturmiljø:** Dokumentert i kommuneplankartet. Fasaden beskrives som original med ornamenter og konsoller, noe som underbygger at kulturmiljørestriksjoner er relevante. Confidence justeres opp til 0.82.\n\n**Mulige manglende risikoer identifisert:**\n- H390 Deponi er nevnt i kommuneplankartet – potensiell forurensningsrisiko i grunnen er ikke identifisert som egen risiko.\n- Fellesgjeld på kr 2 370 000 er svært høy relativt til andelsverdi – dette er delvis dekket av R3, men IN-ordningens kompleksitet og kapitalkostnader (kr 1 703 400 i innkrevde felleskostnader) bør undersøkes nærmere.\n- Bygget er fra 1904 og har saltak med tresperrekonstruksjoner – takstilstand er ikke eksplisitt vurdert i de fremlagte dokumentchunkene.\n- Korttidsutleie er begrenset til 30 døgn per år uten styresamtykke – dette er en bruksbegrensning som kan være relevant for kjøpere som ønsker utleie.\n"
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
    "input_tokens": 21468,
    "output_tokens": 4905,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
