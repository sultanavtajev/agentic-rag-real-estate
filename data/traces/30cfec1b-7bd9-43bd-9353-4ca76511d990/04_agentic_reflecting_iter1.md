# Trace: agentic_reflecting_iter1
- **Run ID:** 30cfec1b-7bd9-43bd-9353-4ca76511d990
- **Tidspunkt:** 2026-03-23T20:13:05.215942+00:00
- **Varighet:** 122.87s
- **Input tokens:** 23498
- **Output tokens:** 6585

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
Risiko 1: Våtrom med TG2 – økt risiko for fuktskader og lekkasjer. Våtromsgulvet har nådd mer enn halvparten av forventet levetid på vanntett sjikt (ca. 15–20 år), og det er registrert bom under enkelte fliser på vegger. Dette medfører økt risiko for fuktskader i konstruksjonen.
  Confidence: 0.95
  Evidens: Tilstandsvurdering er derfor basert på alder, da konstruksjonen har oppnådd mer enn halvparten av forventet levetid. Dette medfører en økt risiko for lekkasjer. TG 2 er gitt på grunn av alder sett i forhold til forventet levetid på vanntett sjikt.; Det er funnet bom under enkelte fliser. Årsak til bom kan være at det...; TG 2 er gitt på grunn av alder sett i forhold til forventet levetid på vanntett sjikt og nevnte forhold. Dette medfører en økt risiko for lekkasjer som kan gi fuktskader i konstruksjonen.; Bygningsdeler med TG2: Våtromsgulv (Bad / 2. etasje), Våtromsvegger (Bad / 2. etasje), Utstyr for sanitærinstallasjoner (Bad / 2. etasje)

Risiko 2: Varmtvannsbereder av ukjent alder – forhøyet risiko for lekkasje og funksjonssvikt. Berederen er ikke tilgjengelig for inspeksjon, og alder er ukjent. Sintef Byggforsk angir anbefalt brukstid på 20 år.
  Confidence: 0.9
  Evidens: Varmtvannsbereder er av ukjent alder. Ifølge Sintef Byggforsk har varmtvannsberedere en anbefalt brukstid på 20 år. Teknisk levetid er 15-30 år avhengig av påvirkende faktorer.; TG 2 er gitt på grunn av manglende tilgang til varmtvannsberederen.; Konsekvensen av normal aldring er forhøyet risiko for at berederen kan svakere funksjon, bruke mer strøm eller slutte å fungere. Det kan også være høyere risiko for lekkasjer.

Risiko 3: Ledningsnett for sanitærinstallasjoner med TG2 – risiko for skjulte feil. Dimensjonering, klamring, fallforhold og utførelse er ikke kontrollert da rørene i hovedsak ligger skjult i konstruksjonen.
  Confidence: 0.85
  Evidens: Dimensjonering av rør, klamring og innfesting, fallforhold på avløpsrør og utførelse generelt er ikke kontrollert, da dette i hovedsak ligger skjult i konstruksjonen.; Bygningsdeler med TG2: Ledningsnett for sanitærinstallasjoner; Vurderingen er i hovedsak basert på alder i forhold til forventet levetid, utførelse og materialvalg.

Risiko 4: Vinduer og ytterdører med TG2 – nærmer seg eller har passert forventet levetid. Dette kan medføre behov for utskifting og økte kostnader for kjøper.
  Confidence: 0.85
  Evidens: Bygningsdeler med TG2: Vinduer, Ytterdører; TG 2 er gitt på grunn av alder sett i forhold til forventet levetid... Forholdet kan gi forhøyet risiko for vannlekkasjer.; Det er utført vurdering av alder i forhold til forventet levetid.

Risiko 5: Innvendige gulv med TG2 – sprekk og knirk. Det er observert sprekk i langsgående skjøt ved dør til bad og knirk ved normal gange, noe som kan indikere underliggende problemer.
  Confidence: 0.8
  Evidens: Det er observert sprekk i langsgående skjøt i gulvet ved dør til bad. Videre er det registrert noe knirk i gulvet ved normal gange i samme område. TG 2 er gitt på grunn av nevnte forhold.

Risiko 6: Borettslaget hadde underskudd i 2024 og økte felleskostnadene med 15% fra 01.03.2025. Ytterligere økning på kr. 158,- fra 01.03.2026 er allerede varslet. Dette indikerer en presset økonomi i borettslaget med risiko for ytterligere kostnadsøkninger.
  Confidence: 0.9
  Evidens: Borettslaget hadde i regnskapet for 2024 et underskudd på kr. 707...; Budsjettet er basert på 15 % økning av felleskostnadene fra 01.03.25.; Felleskostnadene økte med kr. 158,‑ fra 01.03.2026.; B. ÅRETS ENDR. I DISP. MIDLER -1 097 761 228 282; C. DISP. MIDLER PR. 31.12. 1 510 324 2 608 084

Risiko 7: Høy fellesgjeld i borettslaget – andel fellesgjeld er kr. 423 171 med flytende rente på 5,13% og løpetid til 2058. Flytende rente medfører risiko for økte kapitalkostnader ved renteoppgang.
  Confidence: 0.9
  Evidens: Kr 423 171 pr. 17.02.2026 (Andel av fellesgjeld); Rentesats: 5,13%, Type rente: Flytende rente, Innfrielsesdato: 30.09.2058; Restsaldo 7 494 995,00; SUM LANGSIKTIG GJELD 185 336 921

Risiko 8: Planlagte heisutskiftninger i oppgang A og B kan medføre økte felleskostnader. Heisen i oppgang C er nylig byttet, og tilsvarende utskiftning i de øvrige oppgangene vil komme.
  Confidence: 0.9
  Evidens: Heisen i oppgang C (vår oppgang) er akkurat byttet. På sikt skal heisene i oppgang A og B også byttes, men det er nylig utført vedlikehold på disse for å forlenge levetiden.; Drift/vedlikehold heisanlegg -803 143 (i 2024-regnskapet)

Risiko 9: Sølvkre på badet – selger opplyser om tidligere forekomst av sølvkre på badet. Selv om det ikke er observert de siste 6 måneder, er det en risiko for at problemet kan gjenoppstå.
  Confidence: 0.75
  Evidens: Det har vært sølvkre (IKKE skjeggkre) på badet. Har brukt feller/middel og ikke observert siste 6 mnd.; Ja. Det har vært sølvkre (IKKE skjeggkre) på badet. Har brukt feller/ middel og ikke observert siste 6 mnd.

Risiko 10: Vanninntrengning i garasje ved styrtregn – selger opplyser om at det ved ekstremt store nedbørsmengder kan komme vann inn i garasjen. Dette er en kjent svakhet ved eiendommen.
  Confidence: 0.8
  Evidens: Ved ekstremt store nedbørsmengder (styrtregn) så kan det komme vann inn i garasjen, det har skjedd 1 gang i løpet av vår periode.; Ja. Ved ekstremt store nedbørsmengder (styrtregn) så kan det komme vann inn i garasjen, det har skjedd 1 gang i løpet av vår periode.

Risiko 11: Manglende FDV-dokumentasjon for baderomsrehabilitering fra 2011. Selv om ferdigattest er fremvist, mangler dokumentasjon på utførelse, noe som kan skape usikkerhet om kvaliteten på arbeidet.
  Confidence: 0.8
  Evidens: Badet er i følge eier pusset opp i 2011. Ferdigattest datert 05.10.2011 for rehabilitering av bad er fremvist. FDV dokumentasjon og dokumentasjon på utførelse er ikke fremvist.

Risiko 12: Legalpant – borettslaget har legalpanterett i andelen for inntil 2G (to ganger folketrygdens grunnbeløp). Dette betyr at borettslaget har prioritet over tinglyste lån ved mislighold av felleskostnader.
  Confidence: 0.85
  Evidens: Legalpant: Borettslaget har legalpant på inntil 2G som sikkerhet for betaling av felleskostnader. Dette betyr at borettslaget har prioritet over tinglyste lån når det gjelder betaling av felleskostnader, og kan kreve inn pengene før andre kreditorer, selv om de har lån registrert på andelen.; Borettslaget har legalpanterett i andelen for krav på dekning av felleskostnader og andre krav fra borettslaget, på inntil 2 ganger folketrygdens grunnbeløp.

Risiko 13: Risiko for økte felleskostnader ved mislighold fra andre andelseiere. Dersom andre andelshavere misligholder sine forpliktelser, eller borettslaget sitter på fraflyttede/usolgte andeler, må de øvrige andelseierne dekke underskuddet.
  Confidence: 0.8
  Evidens: Manglende innbetaling av fellesutgiftene som følge av andre andelshaveres mislighold, eller dersom borettslaget sitter på fraflyttede og/ eller usolgte andeler, må dekkes av de øvrige andelseierne.

Risiko 14: Pågående plansak – detaljregulering av Uelands gate fra Stavangergata til Evald Ryghs gate. Dette kan medføre endringer i omgivelsene rundt eiendommen.
  Confidence: 0.7
  Evidens: Pågående plansaker i området: Detaljregulering, Uelands gate fra Stavangergata til Evald Ryghs gate; Maridalsveien 117 ‑ oppføring av ny balkong på loft

Risiko 15: Styregodkjennelse kreves – kjøper må godkjennes av borettslagets styre. Selv om styret kun kan nekte ved saklig grunn, innebærer dette en usikkerhet i kjøpsprosessen.
  Confidence: 0.7
  Evidens: Styregodkjennelse: Kjøper må godkjennes av borettslagets styre. Styret kan kun nekte godkjenning dersom det foreligger saklig grunnlag, jf. borettslagsloven § 4‑4.

Risiko 16: Begrenset adgang til utleie – det er begrenset adgang til å leie ut bolig i borettslag. Dette reduserer fleksibiliteten for kjøper som ønsker å leie ut boligen.
  Confidence: 0.85
  Evidens: Adgang til utleie: Det er begrenset adgang til å leie ut bolig i borettslag.

Risiko 17: Felles bygningsdeler ikke vurdert av takstmann – yttervegger, takkonstruksjon, drenering, grunnmur, fundamenter, felles trapper, balkonger og etasjeskiller er ikke tilstandsvurdert. Dette gir usikkerhet om tilstanden på disse elementene.
  Confidence: 0.8
  Evidens: Det er i hovedsak ikke foretatt tilstandsvurdering av bygningsdeler som er underlagt borettslagets ansvarsområde. Det gjelder i hovedsak yttervegger, takkonstruksjon, drenering, grunnmur, grunn/fundamenter, felles trapper og trapperom, balkonger/terrasser, etasjeskiller, piper og fyringsanlegg.

Risiko 18: Parkeringsplassen kan endres av borettslaget – bruksretten til parkeringsplass nr. 159 er regulert gjennom borettslagets vedtekter, og borettslaget kan vedta endringer i organiseringen.
  Confidence: 0.75
  Evidens: Leiligheten har bruksrett til parkeringsplass nr. 159, som ligger på borettslagets fellesareal. Bruksretten er regulert gjennom borettslagets vedtekter. Det presiseres at borettslaget senere kan vedta endringer i organiseringen av...

Dokumentkontekst:
[d021_d021 | Side [1]]
sjoner:
Snr: 1
Formål: Bolig
Tinglyste heftelser
Sameiebrøk: 68/ 7363
Tinglyste heftelser og rettigheter: På eiendommen er det Til
tinglyst følgende heftelser og rettigheter som følger Snr: 102
eiendommens matrikkel ved overskjøting til ny Formål: Bolig
hjemmelshaver: Sameiebrøk: 81/ 7363
Gjelder denne registerenheten med flere
301/2 21/ 277:
20.08.1998 ‑ Dokumentnr: 48291 ‑ Erklæring/ avtale 11.08.2000 ‑ Dokumentnr: 46077 ‑ Opphevelse av
Bestemmelse om vann/ kloakkledning seksjonering
Overført fra:

---

[d021_d021 | Side [1]]
 fra: Knr:0301 Gnr:221 Bnr:277 Snr:1 Formål: Bolig
Gjelder denne registerenheten med flere Sameiebrøk: 81/ 7363
21.08.1998 ‑ Dokumentnr: 48583 ‑ Bruksrett 21.08.1998 ‑ Dokumentnr: 48577 ‑ Erklæring/ avtale
Gjensidig bruksrett og plikter vedkommende uteareal Rettighet hefter i: Knr:0301 Gnr:521 Bnr:1
m.v. Vedrørende heisanlegg til garasjeanlegg m.v.
Overført fra: Knr:0301 Gnr:221 Bnr:277 Snr:1 Overført fra: Knr:0301 Gnr:221 Bnr:277 Snr:1
Gjelder denne registerenheten med flere
Legalpant: Borettslaget har

---

[d021_d021 | Side [1]]
lder denne registerenheten med flere
Legalpant: Borettslaget har legalpant på inntil 2G som
21.08.1998 ‑ Dokumentnr: 48586 ‑ Erklæring/ avtale sikkerhet for betaling av felleskostnader. Dette betyr at
40

## Side 41

OM EIENDOMMEN
borettslaget har prioritet over tinglyste lån når det gjelder
Diverse
betaling av felleskostnader, og kan kreve inn pengene før
andre kreditorer, selv om de har lån registrert på andelen. Borettslagsmodellen innebærer at borettslaget eier
eiendommen, mens andelseierne eier

---

[d021_d021 | Side [1]]
gget eller andre installasjoner (f.eks. oljetank,
salgsoppgaven. sentralfyr, ventilasjon)?
Nei.
Gjenstander som er nevnt i standardlisten, men som ikke
finnes på eiendommen, vil heller ikke følge med i salget. Kjenner du til om det har vært utført arbeid på terrasse/
37

## Side 38

OM EIENDOMMEN
garasje/t ak/ fasade? ‑ Dørcalling.
Svar: Nei. ‑ Bygningen har personheis.
Kjenner du til vedtak/ forslag til vedtak om forhold vedr.
Øvrig
eiendommen som kan medføre økte felleskostnader/

---

[d021_d021 | Side [1]]
å terrasse/garasje/tak/fasade?
Svar Nei
17 Selges eiendommen med utleiedel, leilighet, hybel eller tilsvarende?
Nei Ja
18 Kjenner du til om det er innredet/bruksendret/bygget ut i kjeller eller loft eller andre deler av boligen?
Nei Ja
19 Kjenner du til forslag eller vedtatte reguleringsplaner, andre planer, nabovarsel eller offentlige vedtak som kan medføre endringer i bruken av
eiendommen eller av dens omgivelser?
Nei Ja
Initialer selger: EJR, MM 2
33006210
:ecnerefer
tnemucoD
48

## Side 49

20 Kjenner

---

[d021_d021 | Side [1]]
JR, MM 2
33006210
:ecnerefer
tnemucoD
48

## Side 49

20 Kjenner du til om det foreligger påbud/heftelser/krav/manglende tillatelser vedrørende eiendommen?
Nei Ja
21 Er det foretatt radonmåling?
Nei Ja
22 Kjenner du til manglende brukstillatelse eller ferdigattest?
Nei Ja
23 Kjenner du til om det foreligger skaderapporter/ tilstandsvurderinger eller utførte målinger?
Nei Ja
24 Er det andre forhold av betydning ved eiendommen som kan være relevant for kjøper å vite om (f.eks. rasfare, tinglyste forhold

---

[d021_d021 | Side [1]]
ksinnsyn/
Se fullstendig energiattest fra selger som vedlegg til casedet.asp?caseno=202519193
salgsoppgave. Megler påtar seg ikke ansvar for
39

## Side 40

OM EIENDOMMEN
Maridalsveien 117 ‑ oppføring av ny balkong på loft Rettighetshaver: Knr:0301 Gnr:221 Bnr:278 Snr:1
http:/ / innsyn.pbe.oslo.kommune.no/ saksinnsyn/ Til
casedet.asp?caseno=202600766 Rettighetshaver: Knr:0301 Gnr:221 Bnr:278 Snr:57
Bruksrett til tilfluktsrom
Pågående plansaker i området: Overført fra: Knr:0301 Gnr:221 Bnr:277

---

[d021_d021 | Side [1]]
r og
selger.
Konsesjon
Kjøp av eiendommen krever ikke konsesjon. Dersom
Forsikring
eiendommen er større enn 2 mål, må kjøper undertegne
nødvendige dokumenter for å søke om konsesjonsfrihet. Boligselgerforsikring: Selger har tegnet
boligselgerforsikring som dekker selgers ansvar etter
avhendingsloven begrenset oppad kr. 20 000 000,‑.
Odel
Egenerklæringsskjema er vedlagt salgsoppgaven og
Det hviler ikke odelsrett på eiendommen. interessenter oppfordres til å gjennomgå denne før bud
inngis.
41

## Side 42

OM

---

[d021_d021 | Side [1]]
eskostnader. Andelseierne som har nedbetalt
Andelseierne som har nedbetalt ekstraordinært, har fått sikkerhet ved inntrederett i
pantobligasjonen som borettslagets långiver har tinglyst på eiendommen. Borettslagets
beregnede forpliktelse overfor andelseiere som har nedbetalt, fremgår som egenkapital
fra IN, under noten for annen egenkapital.
Vedlegg 2 12 av 17 Årsregnskap 2024 Styrerommet.pdf
76

## Side 77

NOTE: 2
INNKREVDE FELLESKOSTNADER
Felleskostnader 3 663 888
Kapitalkostnader IN I 2 018

---

[d021_d021 | Side [1]]
nnebærer at borettslaget eier
eiendommen, mens andelseierne eier andeler i
borettslaget, som gir borett til en bestemt bolig.
Vei, vann og avløp
Andelseierne har ikke personlig ansvar for borettslagets
Eiendommen er tilknyttet offentlig vann‑ og fellesgjeld, men de må dekke borettslagets løpende
avløpssystem. Stikkledningene fra eiendommen og ut til utgifter. Manglende innbetaling av fellesutgiftene som
det kommunale nettet er private, og følge av andre andelshaveres mislighold, eller

---

[d021_d021 | Side [1]]
 eiendom/ boligkjoper/ gjennomgang.
Dersom det oppstår behov for ytterligere avklaringer,
Lovanvendelse
oppfordres interessenter til å kontakte eiendomsmegler
Regelverk og generelle opplysninger eller egne rådgivere før de gir bud.
Boligen selges med det inventar og utstyr som i henhold
til gjeldende lover, forskrifter eller offentlige pålegg skal Slitasje og bruk
følge med eiendommen, jf. avhendingsloven § 3‑4. Det må også forventes at eiendommer som har vært i
Fastmonterte eller spesialtilpassede

---

[d021_d021 | Side [1]]
et er private, og følge av andre andelshaveres mislighold, eller dersom
vedlikeholdsansvaret for disse påhviler sameiet. borettslaget sitter på fraflyttede og/ eller usolgte andeler,
Adkomst til eiendommen skjer via offentlig vei. må dekkes av de øvrige andelseierne.
Borettslaget har legalpanterett i andelen for krav på
Utleie
dekning av felleskostnader og andre krav fra
Adgang til utleie: Det er begrenset adgang til å leie ut borettslaget, på inntil 2 ganger folketrygdens grunnbeløp.
bolig i borettslag.

---

[d021_d021 | Side [1]]
. 3 304,‑
Kr 6 990 000,‑
Felleskostnadene økte med kr. 158,‑ fra 01.03.2026.
Omkostning kjøper
Kommunale avgifter
6 990 000 (Prisantydning)
423 171 (Andel av fellesgjeld) Informasjon: Kommunale avgifter er inkludert i
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ felleskostnadene.
7 413 171 (Pris inkl. fellesgjeld)
Fellesgjeld
Omkostninger
Kr 423 171 pr. 17.02.2026
545 (Tinglysingsgebyr ‑ hjemmel)
545 (Tinglysningsgebyr ‑ pantedokument) Fellesgjeld, kapitalkostnader og eventuell

---

[d021_d021 | Side [1]]
ende plansaker i området: Overført fra: Knr:0301 Gnr:221 Bnr:277 Snr:1
Detaljregulering , Uelands gate fra Stavangergata til Evald 20.08.1998 ‑ Dokumentnr: 48290 ‑ Registrering av grunn
Ryghs gate Denne matrikkelenhet opprettet fra:
http:/ / innsyn.pbe.oslo.kommune.no/ saksinnsyn/ Knr:0301 Gnr:221 Bnr:210
casedet.asp?caseno=202554777
01.10.1999 ‑ Dokumentnr: 55026 ‑ Seksjonering
For mer informasjon se Oslo kommunes hjemmesider. Opprettet seksjoner:
Snr: 1
Formål: Bolig
Tinglyste heftelser
Sameiebrøk: 68/

---

[d021_d021 | Side [1]]
ide 37

OM EIENDOMMEN
Alt utstyr og installasjoner som medfølger overtas slik de
Bygningssakkyndigs
er, uten garanti, med mindre det foreligger en gjeldende
garanti fra produsent eller leverandør.
kommentar til
Kjøper aksepterer at det kan forekomme hull og merker
arealoppmåling
etter montering av inventar og utstyr som ikke er en del
Innvendig areal er oppmålt på stedet. av overdragelsen.
Standard Eiendommens
I forbindelse med salget er det utarbeidet en
tilstand
tilstandsrapport fra bygningssakkyndig.

---

[d021_d021 | Side [1]]
integrerte hvitevarer.

## Side 28

(Ingen tekst ekstrahert)

## Side 29

(Ingen tekst ekstrahert)

## Side 30

Plantegning

## Side 31

Plantegning

## Side 32

THURMANNS GATE 10C
OM EIENDOMMEN

## Side 33

OM EIENDOMMEN
OM EIENDOMMEN
og fordeles på følgende måte:
Økonomi
‑ Lån nr: 9820740324; IN lån 1 ‑ Akonto renter: kr. 1 394,87
‑ Lån nr: 9820740324; IN lån 1 ‑ Akonto avdrag: kr. 307,76
Prisantydning
‑ Øvrige driftskostnader: kr. 3 304,‑
Kr 6 990 000,‑
Felleskostnadene økte med kr. 158,‑ fra

---

[d021_d021 | Side [1]]
relevant for kjøper å vite om (f.eks. rasfare, tinglyste forhold eller private
avtaler)?
Nei Ja
Spørsmål for bolig i sameie/borettslag/boligaksjeselskap:
25 Kjenner du til om sameiet/laget/selskapet er involvert i tvister av noe slag?
Nei Ja
26 Kjenner du til vedtak/forslag til vedtak om forhold vedr. eiendommen som kan medføre økte felleskostnader/økt fellesgjeld?
Nei Ja
Heisen i oppgang C (vår oppgang) er akkurat byttet. På sikt skal heisene i oppgang A og B også byttes, men det er
Beskrivelse nylig

---

[d021_d021 | Side [1]]
old vedr.
Øvrig
eiendommen som kan medføre økte felleskostnader/ økt
fellesgjeld?
informasjon
Ja. Heisen i oppgang C (vår oppgang) er akkurat byttet.
På sikt skal heisene i oppgang A og B også byttes, men
Adresse
det er nylig utført vedlikehold på disse for å forlenge
levetiden. Thurmanns gate 10C, 0461 OSLO
Gnr. 221, bnr. 277, ideell andel 1/ 1
Byggemåte
i Oslo kommune.Andelsnr. 24 i Thurmannsgate 10
I forbindelse med salget er det blitt utført en Borettslag med orgnr. 982767040
tilstandsrapport av en

---

[d021_d021 | Side [1]]
 i
borettslaget
Verneklasse/ SEFRAK
Styregodkjennelse: Kjøper må godkjennes av Boligen er ikke bevaringsverdig.
borettslagets styre. Styret kan kun nekte godkjenning
dersom det foreligger saklig grunnlag, jf. borettslagsloven
Regulerings og arealplaner
§ 4‑4.
Eiendommen er regulert til bolig med tilhørende anlegg.
Regnskap/ budsjett/ kostnadsøkninger: Borettslaget For mer informasjon om reguleringsforhold, kontakt
hadde i regnskapet for 2024 et underskudd på kr. 707 megler eller søk på saksnummer, adresse

---

[d021_d021 | Side [1]]
nader inkulderer: Felleskostnadene inkluderer
33

## Side 34

OM EIENDOMMEN
Lånebetingelser fellesgjeld: Selskapets totale lån og
Andre kostnader:
vilkår:
Andre utgifter: Diverse kostnader knyttet til boligen ny
Bank: OBOS Boligkreditt AS eier kan vurdere å anskaffe:
Lånenr.: 98207403253
Lånetype: Annuitetslån ‑ Årlig bygningsforsikring
Rentesats: 5,13% ‑ Alarm
Restsaldo 7 494 995,00 ‑ Kabel‑tv/ internett
Innfrielsesdato: 30.09.2058
Type rente: Flytende rente Det er opp til kjøper å eventuelt inngå nye

---

[d021_d021 | Side [1]]
sje og ny bygningsdel med manglende
dokumentasjon.
Tilstandsgrad 2, (TG 2): Vesentlige avvik, feil utførelse, skade, vesentlig slitasje, risiko for skade på
grunn av alder, etc.
Tilstandsgrad 3, (TG 3): Store eller alvorlige avvik. Funksjonssvikt, sammenbrudd og behov for tiltak
innen kort tid.
Tilstandsgrad IU (TG IU): Ikke undersøkt eller ikke mulig å undersøke.
Mer om rapportens forutsetninger står oppført i tilstandsrapportens siste del.
Konklusjon tilstand
Bebyggelse
Treroms andelsleilighet i

---

[d021_d021 | Side [1]]
ten skadelige konsekvenser, som ikke har vesentlig betydning for byggekvaliteten.
Bygningsdelen fremstår som uten noen nevneverdige synlige slitasje eller svakheter. Alder er i den forbindelse også et
symptom.
TG 2: Vesentlige avvik. TG 2 benyttes i flere sammenhenger. Dette gjelder i hovedsak slitasje i forhold til forventet levetid,
12/13
63

## Side 64

feil utførelse, nedsatt funksjon og manglende dokumentasjon der dette er påkrevd iht. regelverk for utførelse. TG 2
signaliserer at man bør være

---

[d021_d021 | Side [1]]
eferansenivået for valg av tilstandsgrad. Tilstandsgrader/TG: er uttrykk for hvilken tilstand bygningsdelen/objektet er
etter et definert referansenivå.
TG 0: Bygningsdeler uten avvik, slitasje og alderspåvirkning, nyere enn fem år. Dokumentasjon er fremlagt der dette er
påkrevd.
TG 1: Mindre avvik, normal slitasje og ny bygningsdel med manglende dokumentasjon for faglig utførelse. Enkle
byggetekniske feil og mangler uten skadelige konsekvenser, som ikke har vesentlig betydning for

---

[d021_d021 | Side [1]]
t utarbeidet en
tilstand
tilstandsrapport fra bygningssakkyndig. Rapporten gir en
teknisk vurdering av boligen og påviser eventuelle avvik. Takstmann: Daniel Aas
Det er viktig å merke seg at forhold som er vurdert med
TG2 og TG3 bør gjennomgås nøye, ettersom disse Type takst avholdt av takstmann: Tilstandsrapport
indikerer avvik fra normal slitasje eller høy alder, og kan
medføre behov for utbedring. Bygningsdeler vurdert med Sammendrag selgers egenerklæring: Kjenner du til om
TGIU er ikke blitt undersøkt

---

[d021_d021 | Side [1]]
jon har i følge Sintef Byggforsk normalt levetid på ca. 15-20 år og
tilstandsvurdering er derfor basert på alder, da konstruksjonen har oppnådd mer
enn halvparten av forventet levetid. Dette medfører en økt risiko for lekkasjer.
TG 2 er gitt på grunn av alder sett i forhold til forventet levetid på vanntett sjikt. TG: 2
Overflater på innvendig himling – Bad, 2. etasje
Beskrivelse: Pusset og malte overflater.
Tilstandsvurdering: TG: 1
Fast inventar, generelt – Bad, 2. etasje
Beskrivelse: Baderomsinnredning

---

[d021_d021 | Side [1]]
fter. Forholdet medfører risiko for at overflatevann
ikke renner tilstrekkelig mot sluket. Konsekvensen av forholdet er høyere
fuktpåkjenning på konstruksjonen.
TG 2 er gitt på grunn av alder sett i forhold til forventet levetid på vanntett sjikt og
nevnte forhold. Dette medfører en økt risiko for lekkasjer som kan gi fuktskader i
konstruksjonen. TG: 2
Våtromsvegger – Bad, 2. etasje
Beskrivelse: Flislagte overflater.
Tilstandsvurdering: Det er funnet bom under enkelte fliser. Årsak til bom kan være at det

---

[d021_d021 | Side [1]]
 som kjent for
kjøper, og det vil ikke være mulig å reklamere på forhold Organisasjonsnummer: 982767040
som er nevnt i rapporten. Spesielt forhold som er vurdert
med TG2 og TG3 bør vurderes nøye, da de indikerer Andelsnummer: 24
avvik fra normal slitasje og/ eller høy alder, noe som kan
innebære behov for utbedringer. Bygningsdeler som er Fra borettslagets egne sider:
merket med TGIU er ikke blitt vurdert av takstmannen.
"Vi er et borettslag på Sagene som består av mange ulike
Beskrivelsen av boligen

---

[d021_d021 | Side [1]]
 varmtvannsbereder, varmeanlegg
og ventilasjon.
Vurderingen er i hovedsak basert på alder i forhold til forventet levetid, utførelse og materialvalg.
Tilstandsvurdering er basert på alder og enkle observasjoner, da undertegnede ikke har spisskompetanse på området.
Dimensjonering av rør, klamring og innfesting, fallforhold på avløpsrør og utførelse generelt er ikke kontrollert, da dette i
hovedsak ligger skjult i konstruksjonen.
7/13
58

## Side 59

Varmtvann
Beskrivelse: Varmtvannsbereder på ukjent alder

---

[d021_d021 | Side [1]]
 iht. regelverk for utførelse. TG 2
signaliserer at man bør være oppmerksom og holde angitt bygningsdel under oppsyn. Gjenværende brukstid kan være
begrenset. Skader og behov for vedlikehold kan oppstå.
TG 3: Store eller alvorlige avvik. Bygningsdelen har kraftige symptomer på forhold som man må regne med trenger
utbedring straks eller innen kort tid. Graden skal også brukes ved påvist funksjonssvikt eller sammenbrudd.
Ved TG 3 utarbeides det et kostnadsestimat for utbedring av forholdet. Det gjøres

---

[d021_d021 | Side [1]]
Referansenivå for
rapporten er satt til byggeår og Forskrift til avhendingslova.
Aldersbetraktning er vurdert ut fra levetidstabeller utarbeidet av Sintef Byggforsk.
Om vurderinger
Normal slitasje fra tidspunkt for legging av gulv, og normal slitasje på vegg- og himlingsoverflater ikke hensyntatt, da
toleranse for slitasje i stor grad er en subjektiv vurdering.
Se for øvrig detaljert tilstandsbeskrivelse.
2/13
53

## Side 54

Tilstandsgrad 2:
Våtromsgulv (Bad / 2. etasje)
Våtromsvegger (Bad / 2.

---

[d021_d021 | Side [1]]
en forbruker, som definert i avhendingslova § 1-2 tredje ledd.
I denne rapporten er det gjort vurdering av de bygningsdeler som er definert i tryggere bolighandel. I tillegg er det gjort
undersøkelser av enkelte bygningsdeler, som Tyder As, bransjen generelt og rettspraksis anser som relevante ved
avhending av boligeiendom. Referansenivået for tilstandsvurderinger er byggeår med tilhørende tekniske forskrifter,
tryggere bolighandel og NS 3600:2018.
Tilstandsvurderingen utføres ved visuelle observasjoner,

---

[d021_d021 | Side [1]]
tens innhold og definisjoner følger Forskrift til avhendingslova (tryggere bolighandel).
Tilstandsgrader er i hovedsak vurdert i henhold til Norsk Standard 3600 (NS 3600) med enkelte
unntak.
Tilstandsgrader uttrykker den tilstand bygningsdelen/objektet er etter et definert referansenivå.
Tilstandsgrad 0, (TG 0): Bygningsdel nyere enn fem år, ingen symptomer og påkrevet
dokumentasjon fremvist.
Tilstandsgrad 1, (TG 1): Mindre avvik, normal slitasje og ny bygningsdel med manglende
dokumentasjon.
Tilstandsgrad

---

[d021_d021 | Side [1]]
. Videre er det
registrert noe knirk i gulvet ved normal gange i samme område. TG 2 er gitt på
grunn av nevnte forhold. TG: 2
Overflater på innvendige vegger
Beskrivelse: Sparklet og malte plater. Pusset og malte overflater.
Tilstandsvurdering: TG: 1
Overflater på innvendig himling
Beskrivelse: Pusset og malte overflater.
Himlingshøyde ca. 2,42 m målt i stue.
Tilstandsvurdering: TG: 1
Elektrisk anlegg
Det elektriske anlegget er delvis vurdert på en veldig forenklet måte, dersom det er mer enn fem år siden

---

[d021_d021 | Side [1]]
tid, bruksslitasje og nevnte
forhold. TG: 2
Hulltaking – Bad, 2. etasje
Beskrivelse: Selve hulltakingen ble ikke utført, da konstruksjonen var tilgjengelig via åpning under kum
på kjøkkenet. Det ble benyttet fuktmåler med "pigger i treverk" i veggens bunnsvill, og det
ble ikke påvist fukt utover normale verdier.
Tilstandsvurdering: TG: 0
11/13
62

## Side 63

Rapportens forutsetninger:
Tilstandsrapporten er utarbeidet for å ivareta de bestemmelser som er gitt i Forskrift til avhendingslova

---

[d021_d021 | Side [1]]
te del.
Konklusjon tilstand
Bebyggelse
Treroms andelsleilighet i boligblokk med en ekstern bod i henholdsvis kjeller.
Gjennomgående leilighet i 2. etasje med balkong.
Standard
Leilighet med normal standard.
Oppgraderinger i borettslaget
For detaljert informasjon om bygningens vedlikeholdsmessige status vises det til styret.
Referansenivå
Bygningen er oppført i 1999, og den tids byggeskikk ligger til grunn for konstruksjonsmessige forhold. Referansenivå for
rapporten er satt til byggeår og Forskrift til

---

[d021_d021 | Side [1]]
inspeksjon og
vedlikehold.
Varmtvannsbereder er av ukjent alder. Ifølge Sintef Byggforsk har
varmtvannsberedere en anbefalt brukstid på 20 år. Teknisk levetid er 15-30 år
avhengig av påvirkende faktorer. Konsekvensen av normal aldring er forhøyet
risiko for at berederen kan svakere funksjon, bruke mer strøm eller slutte å
fungere. Det kan også være høyere risiko for lekkasjer.
TG 2 er gitt på grunn av manglende tilgang til varmtvannsberederen. TG: 2
Ledningsnett for sanitærinstallasjoner
Beskrivelse:

---

[d021_d021 | Side [1]]
ngslinjer og regler i forbindelse med utførelse av
takstoppdrag. Rapporten utføres kun av profesjonelle takstmenn/bygningssakkyndige som imøtekommer kompetanse- og
erfaringskravene til Tyder As. Tyder As har blant bransjens høyeste erfarings- og kompetansekrav til de som utfører denne
tilstandsrapporten.
Gyldighet:
Rapporten kan ikke være eldre enn ett år fra befaringsdato til den datoen kjøper binder seg til å kjøpe boligen. Etter ett år
bør Tyder As kontaktes for å foreta en oppdatering av rapporten.

---

[d021_d021 | Side [1]]
asje i forhold til alder.
Beskrivelsen omhandler de rom som ikke tidligere er beskrevet på egne punkter. Det vil bli utført en “banketest” der
overflatene er flisbelagt. Ved å banke på en flislagt flate vil man stedvis kunne høre en hulromslyd, ofte benevnt “bom”.
Overflater på innvendige gulv
Beskrivelse: Innvendige gulv er belagt med enstavs parkett.
Tilstandsvurdering: Det er observert sprekk i langsgående skjøt i gulvet ved dør til bad. Videre er det
registrert noe knirk i gulvet ved normal gange i

---

[d021_d021 | Side [1]]
tasjon regnes blant annet skriftlig bekreftelse fra den eller de håndverkerne som
ble brukt.
Dokumentasjon
Beskrivelse: Det er ikke aktuelt med dokumentasjon, da de oppgraderingsarbeider som ifølge eier har
blitt utført de siste fem år, er av en art som ikke krever dokumentasjon.
Vinduer og dører
Kontrollen er i hovedsak utført visuelt. Det er utført funksjonstesting av enkelte vinduer og dører. Det er i tillegg utført
vurdering av alder i forhold til forventet levetid. Det bør på generelt grunnlag

---

[d021_d021 | Side [1]]
7

Leilighet
Felles bygningsdeler
Beskrivelse: Det er i hovedsak ikke foretatt tilstandsvurdering av bygningsdeler som er underlagt
borettslagets ansvarsområde. Det gjelder i hovedsak yttervegger, takkonstruksjon,
drenering, grunnmur, grunn/fundamenter, felles trapper og trapperom, balkonger/terrasser,
etasjeskiller, piper og fyringsanlegg.
Nevnte bygningsdeler er vurdert i den grad de har tilknytning til leiligheten, som eks.
overflater på innside av yttervegger mot leiligheten, overflate på pipe i

---

[d021_d021 | Side [1]]
rker borettslagets disponible midler. Dette gjelder for
eksempel opptak og avdrag på lån, samt kjøp og salg av anleggsmidler. Borettslagets
disponible midler er de økonomiske midlene som borettslaget har til rådighet, og de defineres
som omløpsmidler fratrukket kortsiktig gjeld. Størrelsen på de disponible midlene kan blant
annet benyttes til å vurdere om det er nødvendig å endre størrelsen på innkrevde
felleskostnader som den enkelte beboer betaler, og om det er behov for å ta opp lån eller om
det er

---

[d021_d021 | Side [1]]
 0 0
Kostnader sameie 15 -93 430 0 0 0
Energi/fyring -93 696 -87 242 -100 000 -100 000
TV-anlegg/bredbånd -508 854 -483 470 -497 000 -517 000
Andre driftskostnader 11 -709 248 -470 975 -519 500 -532 000
SUM DRIFTSKOSTNADER -4 903 036 -3 504 591 -3 674 650 -3 928 000
DRIFTSRESULTAT FØR IN/ADM.AVT: 1 884 839 3 060 237 3 656 350 3 234 000
Innbetalt andel fellesgjeld 0 675 185 0 0
DRIFTSRESULTAT 1 884 839 3 735 422 3 656 350 3 234 000
FINANSINNTEKTER/-KOSTNADER:
Finansinntekter 12 85 511 37 027 0

---

[d021_d021 | Side [1]]
 kortsiktig gjeld) viser selskapets
likviditet. Arbeidskapitalen pr. 31.12 var kr 1 510 323.
Budsjett 2025
Budsjettet er basert på estimerte tall, det er tatt høyde for prisøkninger på drift &
vedlikehold i den grad det foreligger estimater.
Felleskostnader
Budsjettet danner grunnlaget for fastsettelsen av felleskostnader.
Budsjettet er basert på 15 % økning av felleskostnadene fra 01.03.25.
For øvrig vises til de enkelte tallene i budsjettet.
Ved legg 1 8 av 17 Årsregnskap info vedlegg .pdf
72

## Side

---

[d021_d021 | Side [1]]
 046 050
SUM LANGSIKTIG GJELD 185 336 921 185 827 188
KORTSIKTIG GJELD
Forskuddsbetalte felleskostnader 90 873 58 962
Leverandørgjeld 715 067 31 792
Påløpte renter 14 573 230 155
Påløpte avdrag 0 39 729
Annen kortsiktig gjeld 0 -70
SUM KORTSIKTIG GJELD 820 513 360 568
SUM EGENKAPITAL OG GJELD 191 527 621 192 265 594
Pantstillelse 21 869 784 450 210 045 050
Garantiansvar 15 11 303 14 958
Oslo, 29.04.2025
Styret i Thurmannsgate 10 Borettslag
Rune Kristiansen Frank Oscar Østensvig Katharina S-L Fries
Vedlegg

---

[d021_d021 | Side [1]]

Kapitalkostnader: 553,93
Estimert totalpris ink. omk
IN‑avtale: Nei
Kr 7 333 561
Boligselskapet har avtale om individuell nedbetaling av
fellesgjeld (IN‑lån) for lånenummer 98207403253 og
Felleskostnader
98207403245. Innbetaling kan foretas to ganger pr. år
Felleskostnader kr 5 007,‑ pr. mnd ved terminforfall 30.5 og 30.11 på borettslagets felleslån.
ll. Minimumsbeløpet for innbetaling er kr 60 000 pr. gang
Felleskostnader inkulderer: Felleskostnadene inkluderer
33

## Side 34

OM

---

[d021_d021 | Side [1]]
sponible midlene i årsregnskapet. På de neste sidene presenteres borettslagets
resultatregnskap, balanse og tilhørende noter.
Boligselskapets resultatregnskap gir imidlertid ikke en fullstendig oversikt over borettslagets
disponible midler ved årsskiftet. I resultatregnskapet presenteres det en oversikt over
borettslagets inntekter og kostnader. Det regnskapsmessige overskuddet tar ikke hensyn til en
del viktige økonomiske forhold som påvirker borettslagets disponible midler. Dette gjelder for
eksempel

---

[d021_d021 | Side [1]]
REGNSKAP
Note Regnskap Regnskap Budsjett Budsjett
2024 2023 2024 2025
DRIFTSINNTEKTER:
Kapitalkostnader 2 528 412 0 0 0
Innkrevde felleskostnader 2 4 234 401 6 558 968 7 331 000 7 162 000
Ladeinntekter EL-bil 24 957 5 790 0 0
Andre inntekter 3 105 70 0 0
SUM DRIFTSINNTEKTER 6 787 875 6 564 828 7 331 000 7 162 000
DRIFTSKOSTNADER:
Personalkostnader 4 -21 150 -21 150 -21 150 -21 000
Styrehonorar 5 -150 000 -150 000 -150 000 -150 000
Avskrivninger 16 -8 260 -8 260 0 0
Revisjonshonorar 6 -12 746 -12 163 -12

---

[d021_d021 | Side [1]]
nger 16 -8 260 -8 260 0 0
Revisjonshonorar 6 -12 746 -12 163 -12 000 -12 000
Forretningsførerhonorar -183 288 -174 305 -181 000 -190 000
Konsulenthonorar 7 -70 482 -6 538 -15 000 -15 000
Drift og vedlikehold 8 -1 269 048 -425 865 -510 000 -519 000
Forsikringer -386 387 -356 132 -386 000 -456 000
Kommunale avgifter 9 -1 214 022 -1 118 780 -1 146 000 -1 279 000
Garasjer 10 -145 416 -184 018 -137 000 -137 000
Ladekostnader EL-bil -37 011 -5 694 0 0
Kostnader sameie 15 -93 430 0 0 0
Energi/fyring -93 696 -87

---

[d021_d021 | Side [1]]
 BORETTSLAG
ORG.NR. 982 767 040, KUNDENR. 5384
BALANSE
Note 2024 2023
EIENDELER
ANLEGGSMIDLER
Bygninger 14 173 498 125 173 498 125
Tomt 10 900 000 10 900 000
Andel egenkapital i fellesanlegg 15 74 608 166 504
Andre varige driftsmidler 16 4 724 052 4 732 312
SUM ANLEGGSMIDLER 189 196 785 189 296 941
OMLØPSMIDLER
Restanser felleskostnader/kundefordringer 793 1 091
Forskuddsbetalte kostnader 131 436 128 087
Andre kortsiktige fordringer 17 12 433 9 291
Driftskonto OBOS-banken 358 904 383 933
Sparekonto

---

[d021_d021 | Side [1]]
vedlikehold elektro -7 595
Drift/vedlikehold utvendig anlegg -12 316
Drift/vedlikehold heisanlegg -803 143
Drift/vedlikehold brannsikring -85 530
Kostnader dugnader -1 449
SUM DRIFT OG VEDLIKEHOLD -1 269 048
Styret mener at det gjennomførte vedlikeholdet er tilstrekkelig for å oppveie verdiforringelse av
bygningene.
NOTE: 9
KOMMUNALE AVGIFTER
Eiendomsskatt -60 583
Vann- og avløpsavgift -623 459
Renovasjonsavgift -529 979
SUM KOMMUNALE AVGIFTER -1 214 022
NOTE: 10
GARASJER
KOSTNADER GARASJER
Leie -145

---

[d021_d021 | Side [1]]
SKOSTNADER
Felleskostnader 3 663 888
Kapitalkostnader IN I 2 018 203
Garasjeleie 509 989
Kapitalkostnader IN II 502 155
Eiendomsskatt 60 524
Reg.kapitalkostnader IN I 6 444
Reg.kapitalkostnader IN II 1 610
Overført til kapitalkostnader -2 528 412
SUM INNKREVDE FELLESKOSTNADER 4 234 401
NOTE: 3
ANDRE INNTEKTER
Opprydding kundereskontro 105
SUM ANDRE INNTEKTER 105
NOTE: 4
PERSONALKOSTNADER
Arbeidsgiveravgift -21 150
SUM PERSONALKOSTNADER -21 150
Det har verken vært ansatte eller lønnsutbetalinger i selskapet

---

[d021_d021 | Side [1]]
tap gjøres på grunnlag av individuelle vurderinger
av de enkelte fordringene.
SKATTETREKKSKONTO
Selskapet har egen separat skattetrekkskonto i OBOS-banken. Innskuddet tilhører
myndighetene og kan ikke disponeres fritt.
INDIVIDUELL NEDBETALING AV FELLESGJELD
Borettslaget har etablert en ordning med mulighet for individuell nedbetaling av
borettslagets fellesgjeld. Individuelle nedbetalinger fra andelseierne er behandlet etter
egenkapitalløsningen. Egenkapitalløsningen innebærer at individuelle nedbetalinger

---

[d021_d021 | Side [1]]
 fellesanlegg 91 896 -1 479
B. ÅRETS ENDR. I DISP. MIDLER -1 097 761 228 282
C. DISP. MIDLER PR. 31.12. 1 510 324 2 608 084
SPESIFIKASJON AV DISPONIBLE MIDLER:
Omløpsmidler 2 330 836 2 968 652
Kortsiktig gjeld -820 513 -360 568
C. DISP. MIDLER PR. 31.12. 1 510 323 2 608 084
Vedlegg 2 9 av 17 Årsregnskap 2024 Styrerommet.pdf
73

## Side 74

THURMANNSGATE 10 BORETTSLAG
ORG.NR. 982 767 040, KUNDENR. 5384
RESULTATREGNSKAP
Note Regnskap Regnskap Budsjett Budsjett
2024 2023 2024

---

[d021_d021 | Side [1]]
ngenter -162 124
Bank- og kortgebyr -4 022
Øreavrunding 0
Tap på fordringer, -112
SUM ANDRE DRIFTSKOSTNADER -709 248
Vedlegg 2 14 av 17 Årsregnskap 2024 Styrerommet.pdf
78

## Side 79

NOTE: 12
FINANSINNTEKTER
Renter bank 83 371
Renter av for sent innbetalte felleskostnader 606
Andre renteinntekter 1 534
SUM FINANSINNTEKTER 85 511
NOTE: 13
FINANSKOSTNADER
Renter og gebyr på lån -2 677 897
Renter på leverandørgjeld -103
SUM FINANSKOSTNADER -2 678 000
NOTE: 14
BYGNINGER
Tilgang 2000 173 175 000
Tilgang 2020

---

[d021_d021 | Side [1]]
NORAR
Revisjonshonoraret er i sin helhet knyttet til revisjon og beløper seg til kr 12 746.
NOTE: 7
KONSULENTHONORAR
Juridisk bistand -4 875
Tilleggstjenester, OBOS Eiendomsforvaltning AS -6 728
Andre konsulenthonorarer, OBOS Prosjekt AS -58 879
SUM KONSULENTHONORAR -70 482
Vedlegg 2 13 av 17 Årsregnskap 2024 Styrerommet.pdf
77

## Side 78

NOTE: 8
DRIFT OG VEDLIKEHOLD
Drift/vedlikehold bygninger -349 014
Drift/vedlikehold VVS -10 000
Drift/vedlikehold elektro -7 595
Drift/vedlikehold utvendig anlegg -12

---

[d021_d021 | Side [1]]
st installert
gjelder når nabo har allergi som kan bekreftes ved oppvarmingskilde, vil ikke dette bli inkludert i handelen.
legeattest. De som har dyr må vise ekstra aktsomhet ved
støy. Lufting av dyr må skje under kontroll og utenom Selger opplyser at det årlige strømforbruket er ca. 5 600
fellesarealene. kWh. Det er viktig å merke seg at energiforbruket kan
variere fra husstand til husstand.
Forkjøpsrett: Det praktiseres ikke forkjøpsrett i
borettslaget
Verneklasse/ SEFRAK
Styregodkjennelse: Kjøper må

---

[d021_d021 | Side [1]]
e
se våre nettsider.
bygningstypen fra tidsperioden den ble bygd i.
Beregningsmetodene for energikarakteren baserer seg https://www.enova.no
på NS 3031.
https://www.enova.no/energimerking
87

## Side 88

Nabolagsprofil
Thurmanns gate 10C - Nabolaget Sagene kirke/Sagene ring - vurdert av 229 lokalkjente
Nabolaget spesielt anbefalt for
Opplevd trygghet
Enslige Veldig trygt 82/100
Etablerere
Naboskapet
Studenter
Høflige 65/100
Kvalitet på skolene
Offentlig transport Bra 64/100
Arkitekt Rivertz plass 4

---

[d021_d021 | Side [1]]
jonsanlegget har mulighet for trinnvis regulering av luftmengden (1,2,3 eller max/normal/min) og evt.
urstyring tilknyttet denne funksjonen. Det bør evt. ettermonteres et ukesur som styrer luftmengdene avhengig av brukstiden. For boliger bør
ikke ventilasjonen stoppes når boligen ikke er i bruk, men det bør være en minsteventilasjon på ca 0,2 l/s pr. m².
Tiltak 19: Installere ventilasjonsanlegg med varmegjenvinner til erstatning for mekanisk ventilasjon
Boligen har mekanisk ventilasjon, dvs. at

---

[d021_d021 | Side [1]]
/100
38% i barnehagealder
35% 6-12 år
Serveringstilbud
13% 13-15 år
Meget bra 86/100 14% 16-18 år
Aktivitetstilbud
Meget bra 83/100
Familiesammensetning
Sport
Par m. barn
Vøyenvollen balløkke 3 min
Ballspill 0.3 km
Par u. barn
Myraløkka 4 min
Ballspill 0.3 km
SATS Sagene 2 min Enslig m. barn
Myrens Sportssenter 7 min
Enslig u. barn
Boligmasse
Flerfamilier
1% enebolig
4% rekkehus 0% 56%
94% blokk
Sagene kirke/Sagene ring
Oslo og omegn
Norge
Sivilstand
Norge
«Fint nabolag for rolige studenter og
småbarns

---

[d021_d021 | Side [1]]
et betyr at boretslaget eier og
forvalter de aktuelle områdene i fellesskap. Dette gir ikke
den enkelte andelen rett til eksklusiv bruk eller
Parkering
disponering av arealene, med mindre annet er spesifisert
Leiligheten har bruksrett til parkeringsplass nr. 159, som i en avtale eller fremgår av sameiets vedtekter.
ligger på borettslagets fellesareal. Bruksretten er regulert
gjennom borettslagets vedtekter. Det presiseres at
Beskrivelse av
borettslaget senere kan vedta endringer i organiseringen
av

---

[d021_d021 | Side [1]]
slag på Sagene som består av mange ulike
Beskrivelsen av boligen nedenfor er hentet direkte fra beboere og aldersgrupper. Sagene er i dag kalt den
tilstandsrapporten: Grønne bydelen da dette er en av de Grønneste bydelene
i Oslo når det gjelder parker og Grønne utearealer.
Utvendige bygningsdeler: Borettslaget vårt består av 102 leiligheter i forskjellige
‑ Grunnmur i betong. størrelser så her finner du plass både for de som ønsker
‑ Yttervegger i stål, betong‑ og trekonstruksjon en liten leilighet og for

---

[d021_d021 | Side [1]]
ukstid og derfor gitt TG 2. Forholdet kan gi forhøyet
risiko for vannlekkasjer. TG: 2
Ventilasjon
Beskrivelse: Friskluftsventil på yttervegg i to soverom.
Friskluft via spalteventiler i vinduer i stue.
Luftespalte med lufttilførsel under dør til bad.
Ventilator i kjøkken med styring til avtrekk fra kjøkken og bad.
Er avtrekk undersøkt med ark eller lignende? Ja, med ark/papir.
Tilstandsvurdering: Referansenivå på luftbehandling er satt til byggeår. TG: 1
Kjøkken
Kjøkkeninnredningen beskrives og

---

[d021_d021 | Side [1]]

Sivilstand
Norge
«Fint nabolag for rolige studenter og
småbarns familier. Rolig og trygt» Gift 16% 33%
Sitat fra en lokalkjent Ikke gift 74% 54%
Separert 9% 9%
Enke/Enkemann 1% 4%
Innholdet i nabolagsprofilen er hentet fra ulike datakilder, og feil eller mangler kan forekomme. Vurderinger og sitater er innhentet på web og gir uttrykk for
hvordan naboene vurderer nabolaget. FINN.no AS kan ikke holdes ansvarlig for feil/mangler i profilen. Copyright © Finn.no AS 2026
89

## Side 90

Innholdet i

---

[d021_d021 | Side [1]]
vil være skiltet ved
og Nydalen. Buss nr. 34 på Arkitekt Rivertz plass, buss nr. fellesvisninger for enkel orientering.
54 til Brekkeskogen og lysløypene om vinteren, buss nr.
20 til Skøyen, buss nr. 37 til Nydalen om sommeren og
Tomt
flybussen. Ellers Trikk fra Torshov, T‑bane fra Nydalen
eller Storo stasjon. Tomtetype: Eiet
Tomtestørrelse: 31336 m²
Barnehage/ Skole
Skolekrets: Eiendommen sokner til Bjølsen skole. Tomten er fellesareal, hvilket betyr at boretslaget eier og
forvalter de aktuelle områdene i

---

[d021_d021 | Side [1]]
. desember med virkning finnes i umiddelbar nærhet.
fra kommende årsskifte.
Kort avstand til både Torshov og Grünerløkka med
34

## Side 35

OM EIENDOMMEN
Kulturslottet Soria Moria, Ringen Kino og yrende uteliv. Ta også utover eventuell maksparkeringstid, på plasser
med deg piknikken ut i en av de mange parker, herunder reservert for beboere.
Myraløkka og Bjølsen parken, eller ta deg en spasertur Gjeldende priser for beboerparkering i bydelene Frogner,
langs brusende Akerselva. Voldsløkka Idrettspark

---

[d021_d021 | Side [1]]
dersøke. Eksempelvis snødekt tak, eller rom/bygningsdel som ikke var
tilgjengelig på befaringstidspunktet. Det bør gjøres tiltak for å få undersøkt bygningsdelen, da den kan ha avvik som ikke
er avdekket.
Areal:
NS 3940:2023
Oppmåling av areal etter Norsk Standard, Areal- og volumberegning av bygninger (NS 3940:2023), med de presiseringer
for salg og taksering av boliger som er nedfelt i Tillegg A. De føringer, begreper og definisjoner som er nedfelt i
standarden, er styrende for hvordan arealet føres opp

---

[d021_d021 | Side [1]]
n utskiftning til nye ovner med termostat- og tidsstyring, eller det ettermonteres spareplugg eller automatikk
for tidsstyring på eksisterende ovn.Dersom mange ovner skiftes ut bør det vurderes et system hvor temperatur og tidsinnstillinger i ulike rom
i boligen styres fra en sentral enhet.
86

## Side 87

Tiltak på luftbehandlingsanlegg
Tiltak 18: Montere urstyring på avtrekksvifter / ventilasjonsanlegg
Det bør undersøkes hvorvidt ventilasjonsanlegget har mulighet for trinnvis regulering av luftmengden

---

[d021_d021 | Side [1]]
tak/fasade?
Nei Ja
Ved ekstremt store nedbørsmengder (styrtregn) så kan det komme vann inn i garasjen, det har skjedd 1 gang i
Beskrivelse
løpet av vår periode.
7 Kjenner du til om det er/har vært problemer med ildsted/skorstein/pipe f.eks. dårlig trekk, sprekker, pålegg, fyringsforbud eller lignende?
Nei Ja
8 Kjenner du til om det er/har vært f.eks. sprekker i mur, skjeve gulv eller lignende?
Nei Ja
9 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr på eiendommen som rotter, mus, maur

---

[d021_d021 | Side [1]]
av
Bestemmelse om vann/ kloakkledning seksjonering
Overført fra: Knr:0301 Gnr:221 Bnr:277 Snr:1 Oppheving av:
Gjelder denne registerenheten med flere Seksjon:
Snr: 1
20.08.1998 ‑ Dokumentnr: 48291 ‑ Erklæring/ avtale Formål: Bolig
Med flere bestemmelser Sameiebrøk: 68/ 7363
Kan ikke slettes uten samtykke fra Plan‑ og Til
Bygningsetaten Sameiebrøk: 99/ 7363
og punkt 2 ikke uten samtykke fra Oslo Vann‑ og Seksjon:
avløpsverk. Snr: 102
Overført fra: Knr:0301 Gnr:221 Bnr:277 Snr:1 Formål: Bolig
Gjelder denne

---

[d021_d021 | Side [1]]
S3940:2023
Etasje BRA Åpent
BRA-i (internt BRA-e (eksternt BRA-b (innglasset
Åpent areal (TBA)
bruksareal) bruksareal) balkong)
Kjeller 0 9 0 0
2. etasje 67 0 0 5
Sum bolig: 67 9 0 5
Sum BRA: 76
Romfordeling
BRA-e (eksternt BRA-b (innglasset
Etasje BRA-i (internt bruksareal)
bruksareal) balkong)
Kjeller Ekstern bod
2. etasje Bad, Entré/gang, Kjøkken, Stue, To
soverom, Bod
Kommentar areal
Innvendig areal er oppmålt på stedet.
5/13
56

## Side 57

Leilighet
Felles bygningsdeler
Beskrivelse: Det er i hovedsak

---

[d021_d021 | Side [1]]
 2021
Hvor lenge har du eid boligen?
Antall år 21
Antall måneder 09
Har du bodd i boligen siste 12 måneder?
Nei Ja
I hvilket forsikringsselskap har du tegnet villa/husforsikring?
Forsikringsselskap
Polise/avtalenr.
Spørsmål for alle typer eiendommer
1 Kjenner du til om det er/har vært feil tilknyttet våtrommene, f.eks. sprekker, lekkasje, råte, lukt eller soppskader?
Nei Ja
Initialer selger: EJR, MM 1
33006210
:ecnerefer
tnemucoD
47

## Side 48

2 Kjenner du til om det er utført arbeid på bad/våtrom?
Svar

---

[d021_d021 | Side [1]]
råteskader/insekter/skadedyr på eiendommen som rotter, mus, maur eller lignende?
Nei Ja
Beskrivelse Det har vært sølvkre (IKKE skjeggkre) på badet. Har brukt feller/middel og ikke observert siste 6 mnd.
10 Kjenner du til om det er/har vært skjeggkre i boligen?
Nei Ja
11 Kjenner du til om det er/har vært utført arbeid på el-anlegget eller andre installasjoner (f.eks. oljetank, sentralfyr, ventilasjon)?
Svar Nei
12 Kjenner du til om det er utført kontroll av el-anlegget og/eller andre installasjoner (f.eks.

---

[d021_d021 | Side [1]]
sikring også i ovennevnte tilfeller.
Dersom forsikringsselskapet ikke har gitt skriftlig samtykke, kan erstatningen bortfalle.
Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter, begrenset til siste 12 måneder før overtakelse.
Forøvrig oppfordrer selger potensielle kjøpere til å undersøke eiendommen grundig, jf avhendigsloven § 3-10 og kjøpsloven § 20
(aksjeboliger).
Gyldig forsikring forutsetter at det for helårs- og fritidsbolig foreligger tilstandsrapport som er i

---

[d021_d021 | Side [1]]
rsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter,
begrenset til siste 12 måneder før overtakelse. Jeg bekrefter med dette at eiendommen ikke er en næringseiendom, at den ikke
selges som ledd i næringsvirksomhet eller mellom ektefeller eller slektninger i rett oppstigende eller nedstigende linje, søsken, eller
mellom personer som bor eller har bodd på boligeiendommen. Gyldig forsikring forutsetter at det for helårs- og fritidsbolig
foreligger tilstandsrapport som er i henhold

---

[d021_d021 | Side [1]]
isene i oppgang A og B også byttes, men det er
Beskrivelse nylig utført vedlikehold på disse for å forlenge levetiden.
27 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr i sameiet/laget/selskapet (fellesareal eller i andre boliger) som rotter, mus,
maur eller lignende?
Nei Ja
28 Kjenner du til om det er/har vært skjeggkre i sameiet/laget/selskapet (fellesareal eller i andre boliger)?
Nei Ja
Initialer selger: EJR, MM 3
33006210
:ecnerefer
tnemucoD
49

## Side 50

Tilleggskommentar
Jeg

---

[d021_d021 | Side [1]]
en. insekter/ skadedyr på eiendommen som rotter, mus,
maur eller lignende?
Hvitevarer: Integrerte hvitevarer medfølger. Ja. Det har vært sølvkre (IKKE skjeggkre) på badet. Har
brukt feller/ middel og ikke observert siste 6 mnd.
Innbo og løsøre: Salgsoppgaven inkluderer NEFs
standardliste "Oversikt over løsøre og tilbehør", som Kjenner du til om det er/ har vært utført arbeid på
legges til grunn med mindre annet er spesifisert i el‑anlegget eller andre installasjoner (f.eks. oljetank,
salgsoppgaven.

---

[d021_d021 | Side [1]]
i terrasse/
‑ Varmtvann garasje/ tak/ fasade?
‑ Ledningsnett for sanitærinstallasjoner Ja. Ved ekstremt store nedbørsmengder (styrtregn) så
‑ Overflater på innvendige gulv kan det komme vann inn i garasjen, det har skjedd 1 gang
i løpet av vår periode.
Tilstandsrapporten for boligen er vedlagt salgsoppgaven.
For mer detaljert informasjon om tilstandsgradene, Kjenner du til om det er/ har vært sopp/ råteskader/
vennligst se rapporten. insekter/ skadedyr på eiendommen som rotter, mus,
maur eller

---

[d021_d021 | Side [1]]
fukt og undersøkes om det er visuelle tegn til fuktskade. Dersom hulltaking
ikke lar seg gjøre, blir det utført visuell inspeksjon, og bruk av fuktindikator (fuktmålerutstyr). Tilgjengelige sluk og
gjennomføringer besiktiges og kommenteres.
Dokumentasjon – Bad, 2. etasje
Beskrivelse: Badet er i følge eier pusset opp i 2011.
Ferdigattest datert 05.10.2011 for rehabilitering av bad er fremvist.
FDV dokumentasjon og dokumentasjon på utførelse er ikke fremvist.
Våtromsgulv – Bad, 2. etasje
Beskrivelse: Fliser

---

[d021_d021 | Side [1]]
48

2 Kjenner du til om det er utført arbeid på bad/våtrom?
Svar Nei
3 Kjenner du til om det er/har vært tilbakeslag av avløpsvann i sluk eller lignende?
Nei Ja
4 Kjenner du til feil eller om har vært utført arbeid/kontroll på vann/avløp?
Svar Nei
5 Kjenner du til om det er/har vært problemer med drenering, fuktinnsig, øvrig fukt eller fuktmerker i underetasje/kjeller?
Nei Ja
6 Kjenner du til om det er/har vært utettheter i terrasse/garasje/tak/fasade?
Nei Ja
Ved ekstremt store nedbørsmengder (styrtregn)

---

[d021_d021 | Side [1]]
stigenede linje, søsken, eller
mellom personer som bor eller har bodd på boligeiendommen og/eller
når salget skjer som ledd i sikredes næringsvirksomhet/er en næringseiendom
etter at boligeiendommen er lagt ut for salg.
ved salg av helårs- og fritidsbolig er det krav til at det foreligger tilstandsrapport i henhold til Forskrift til avhendingslova (tryggere
bolighandel).
Forsikringsselskapet kan ved skriftlig samtykke akseptere tegning av forsikring også i ovennevnte tilfeller.
Dersom forsikringsselskapet

---

[d021_d021 | Side [1]]
ndsgrad 2:
Våtromsgulv (Bad / 2. etasje)
Våtromsvegger (Bad / 2. etasje)
Utstyr for sanitærinstallasjoner (Bad / 2. etasje)
Vinduer
Ytterdører
Varmtvann
Ledningsnett for sanitærinstallasjoner
Overflater på innvendige gulv
3/13
54

## Side 55

Befaring og eiendomsopplysninger
Rapportdata
Kunde: Marte Mestvedthagen & Einar Johan Ruud
Takstmenn: Daniel Aas
Befaring/tilstede: Eier: Marte Mestvedthagen & Einar Johan Ruud, Takstmann: Daniel Aas
Eiendomsopplysninger
Eiend.betegnelse:

---

[d021_d021 | Side [1]]
for helårs- og fritidsbolig foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere
bolighandel).
Jeg ønsker boligselgerforsikring, og bekrefter å ha mottatt og lest forsikringsvilkårene og informasjonsbrosjyre til selger i
forbindelse med kjøp av boligselgerforsikring. Forsikringen trer i kraft på det tidspunkt det foreligger en budaksept mellom partene,
begrenset til tolv måneder før overtagelse. Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av

---

[d021_d021 | Side [1]]
g.
‑ Etasjeskiller i betong. https:/ / vibbo.no/ thurmannsgt‑10/ om
38

## Side 39

OM EIENDOMMEN
informasjonen som fremgår av energiattesten.
Forretningsfører: Obos Eiendomsforvaltning
Oppvarming
Borettslagets forsikringsselskap: IF Skadeforsikring
Boligen har følgende oppvarmingskilder:
Polisenummer fellesforsikring: 565745 ‑ Elektrisk
Husdyr: Dyrehold er tillatt. Unntatt fra denne regelen Hvis et rom på visningen mangler fast installert
gjelder når nabo har allergi som kan bekreftes ved

---

[d021_d021 | Side [1]]
fordres til å gjennomgå denne før bud
inngis.
41

## Side 42

OM EIENDOMMEN
Boligkjøperforsikring: Kjøper har anledning til å tegne
boligkjøperforsikring. Vedlagt i salgsoppgaven følger Det kan være forskjell mellom boligens faktiske bruk av
informasjon om Boligkjøperforsikring fra Söderberg & rom og det som er godkjent av myndighetene. Alle
Partners. Boligkjøperforsikring er en rettshjelpsforsikring interessenter anbefales derfor å undersøke eiendommen
som gir trygghet og profesjonell juridisk hjelp

---

[d021_d021 | Side [1]]
rsøke eiendommen
som gir trygghet og profesjonell juridisk hjelp dersom det nøye, gjerne sammen med fagperson, før bud gis.
oppdages uventede feil eller mangler ved boligen de Dersom kjøper velger å kjøpe uten å ha sett
neste fem årene. Les mer om Boligkjøperforsikring i eiendommen, kan det ikke etter overtakelse reklameres
vedlagte materiell eller på https:/ / på forhold som burde ha vært oppdaget ved en ordinær
www.soderbergpartners.no/ eiendom/ boligkjoper/ gjennomgang.
Dersom det oppstår behov for

---

[d021_d021 | Side [1]]
rs egenerklæring: Kjenner du til om
TGIU er ikke blitt undersøkt av takstmann. det er utført arbeid på bad/ våtrom?
Svar: Nei.
Bygningsdeler med TG2:
‑ Våtromsgulv (Bad / 2. etasje) Kjenner du til feil eller om har vært utført arbeid/ kontroll
‑ Våtromsvegger (Bad / 2. etasje) på vann/ avløp?
‑ Utstyr for sanitærinstallasjoner (Bad / 2. etasje) Svar: Nei.
‑ Vinduer
‑ Ytterdører Kjenner du til om det er/ har vært utettheter i terrasse/
‑ Varmtvann garasje/ tak/ fasade?
‑ Ledningsnett for

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R01",
      "description": "Våtrom med TG2 – økt risiko for fuktskader og lekkasjer. Våtromsgulvet har nådd mer enn halvparten av forventet levetid på vanntett sjikt (ca. 15–20 år), og det er registrert bom under enkelte fliser på vegger.",
      "evidence": [
        "Tilstandsvurdering er derfor basert på alder, da konstruksjonen har oppnådd mer enn halvparten av forventet levetid. Dette medfører en økt risiko for lekkasjer. TG 2 er gitt på grunn av alder sett i forhold til forventet levetid på vanntett sjikt.",
        "Det er funnet bom under enkelte fliser. Årsak til bom kan være at det...",
        "TG 2 er gitt på grunn av alder sett i forhold til forventet levetid på vanntett sjikt og nevnte forhold. Dette medfører en økt risiko for lekkasjer som kan gi fuktskader i konstruksjonen.",
        "Bygningsdeler med TG2: Våtromsgulv (Bad / 2. etasje), Våtromsvegger (Bad / 2. etasje), Utstyr for sanitærinstallasjoner (Bad / 2. etasje)",
        "Forholdet medfører risiko for at overflatevann ikke renner tilstrekkelig mot sluket. Konsekvensen av forholdet er høyere fuktpåkjenning på konstruksjonen.",
        "Badet er i følge eier pusset opp i 2011. Ferdigattest datert 05.10.2011 for rehabilitering av bad er fremvist."
      ],
      "source_documents": [
        "d021_d021"
      ],
      "source_pages": [
        53,
        54,
        58,
        62
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R02",
      "description": "Varmtvannsbereder av ukjent alder – forhøyet risiko for lekkasje og funksjonssvikt. Berederen er ikke tilgjengelig for inspeksjon, og alder er ukjent. Sintef Byggforsk angir anbefalt brukstid på 20 år.",
      "evidence": [
        "Varmtvannsbereder er av ukjent alder. Ifølge Sintef Byggforsk har varmtvannsberedere en anbefalt brukstid på 20 år. Teknisk levetid er 15-30 år avhengig av påvirkende faktorer.",
        "TG 2 er gitt på grunn av manglende tilgang til varmtvannsberederen.",
        "Konsekvensen av normal aldring er forhøyet risiko for at berederen kan svakere funksjon, bruke mer strøm eller slutte å fungere. Det kan også være høyere risiko for lekkasjer."
      ],
      "source_documents": [
        "d021_d021"
      ],
      "source_pages": [
        58,
        59
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R03",
      "description": "Ledningsnett for sanitærinstallasjoner med TG2 – risiko for skjulte feil. Dimensjonering, klamring, fallforhold og utførelse er ikke kontrollert da rørene i hovedsak ligger skjult i konstruksjonen.",
      "evidence": [
        "Dimensjonering av rør, klamring og innfesting, fallforhold på avløpsrør og utførelse generelt er ikke kontrollert, da dette i hovedsak ligger skjult i konstruksjonen.",
        "Bygningsdeler med TG2: Ledningsnett for sanitærinstallasjoner",
        "Vurderingen er i hovedsak basert på alder i forhold til forventet levetid, utførelse og materialvalg."
      ],
      "source_documents": [
        "d021_d021"
      ],
      "source_pages": [
        54,
        58
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R04",
      "description": "Vinduer og ytterdører med TG2 – nærmer seg eller har passert forventet levetid. Dette kan medføre behov for utskifting og økte kostnader for kjøper.",
      "evidence": [
        "Bygningsdeler med TG2: Vinduer, Ytterdører",
        "TG 2 er gitt på grunn av alder sett i forhold til forventet levetid. Forholdet kan gi forhøyet risiko for vannlekkasjer.",
        "Det er utført vurdering av alder i forhold til forventet levetid."
      ],
      "source_documents": [
        "d021_d021"
      ],
      "source_pages": [
        54,
        58
      ],
      "confidence": 0.87
    },
    {
      "risk_id": "R05",
      "description": "Innvendige gulv med TG2 – sprekk og knirk. Det er observert sprekk i langsgående skjøt ved dør til bad og knirk ved normal gange, noe som kan indikere underliggende problemer.",
      "evidence": [
        "Det er observert sprekk i langsgående skjøt i gulvet ved dør til bad. Videre er det registrert noe knirk i gulvet ved normal gange i samme område. TG 2 er gitt på grunn av nevnte forhold."
      ],
      "source_documents": [
        "d021_d021"
      ],
      "source_pages": [
        54,
        63
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R06",
      "description": "Borettslaget hadde underskudd i 2024 og økte felleskostnadene med 15% fra 01.03.2025. Ytterligere økning på kr. 158,- fra 01.03.2026 er allerede varslet. Dette indikerer en presset økonomi i borettslaget med risiko for ytterligere kostnadsøkninger.",
      "evidence": [
        "Borettslaget hadde i regnskapet for 2024 et underskudd på kr. 707...",
        "Budsjettet er basert på 15 % økning av felleskostnadene fra 01.03.25.",
        "Felleskostnadene økte med kr. 158,‑ fra 01.03.2026.",
        "B. ÅRETS ENDR. I DISP. MIDLER -1 097 761 228 282",
        "C. DISP. MIDLER PR. 31.12. 1 510 324 2 608 084",
        "Drift/vedlikehold heisanlegg -803 143 (i 2024-regnskapet)",
        "SUM DRIFTSKOSTNADER -4 903 036 (2024) mot -3 504 591 (2023)"
      ],
      "source_documents": [
        "d021_d021"
      ],
      "source_pages": [
        33,
        34,
        72,
        73,
        74
      ],
      "confidence": 0.93
    },
    {
      "risk_id": "R07",
      "description": "Høy fellesgjeld i borettslaget – andel fellesgjeld er kr. 423 171 med flytende rente på 5,13% og løpetid til 2058. Flytende rente medfører risiko for økte kapitalkostnader ved renteoppgang.",
      "evidence": [
        "Kr 423 171 pr. 17.02.2026 (Andel av fellesgjeld)",
        "Rentesats: 5,13%, Type rente: Flytende rente, Innfrielsesdato: 30.09.2058",
        "Restsaldo 7 494 995,00",
        "SUM LANGSIKTIG GJELD 185 336 921"
      ],
      "source_documents": [
        "d021_d021"
      ],
      "source_pages": [
        33,
        34,
        75
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R08",
      "description": "Planlagte heisutskiftninger i oppgang A og B kan medføre økte felleskostnader. Heisen i oppgang C er nylig byttet, og tilsvarende utskiftning i de øvrige oppgangene vil komme.",
      "evidence": [
        "Heisen i oppgang C (vår oppgang) er akkurat byttet. På sikt skal heisene i oppgang A og B også byttes, men det er nylig utført vedlikehold på disse for å forlenge levetiden.",
        "Drift/vedlikehold heisanlegg -803 143 (i 2024-regnskapet)"
      ],
      "source_documents": [
        "d021_d021"
      ],
      "source_pages": [
        34,
        49,
        78
      ],
      "confidence": 0.91
    },
    {
      "risk_id": "R09",
      "description": "Sølvkre på badet – selger opplyser om tidligere forekomst av sølvkre på badet. Selv om det ikke er observert de siste 6 måneder, er det en risiko for at problemet kan gjenoppstå.",
      "evidence": [
        "Det har vært sølvkre (IKKE skjeggkre) på badet. Har brukt feller/middel og ikke observert siste 6 mnd.",
        "Ja. Det har vært sølvkre (IKKE skjeggkre) på badet. Har brukt feller/ middel og ikke observert siste 6 mnd."
      ],
      "source_documents": [
        "d021_d021"
      ],
      "source_pages": [
        47,
        48
      ],
      "confidence": 0.75
    },
    {
      "risk_id": "R10",
      "description": "Vanninntrengning i garasje ved styrtregn – selger opplyser om at det ved ekstremt store nedbørsmengder kan komme vann inn i garasjen. Dette er en kjent svakhet ved eiendommen.",
      "evidence": [
        "Ved ekstremt store nedbørsmengder (styrtregn) så kan det komme vann inn i garasjen, det har skjedd 1 gang i løpet av vår periode.",
        "Ja. Ved ekstremt store nedbørsmengder (styrtregn) så kan det komme vann inn i garasjen, det har skjedd 1 gang i løpet av vår periode."
      ],
      "source_documents": [
        "d021_d021"
      ],
      "source_pages": [
        47,
        48
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R11",
      "description": "Manglende FDV-dokumentasjon for baderomsrehabilitering fra 2011. Selv om ferdigattest er fremvist, mangler dokumentasjon på utførelse, noe som kan skape usikkerhet om kvaliteten på arbeidet.",
      "evidence": [
        "Badet er i følge eier pusset opp i 2011. Ferdigattest datert 05.10.2011 for rehabilitering av bad er fremvist. FDV dokumentasjon og dokumentasjon på utførelse er ikke fremvist."
      ],
      "source_documents": [
        "d021_d021"
      ],
      "source_pages": [
        58,
        62
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R12",
      "description": "Legalpant – borettslaget har legalpanterett i andelen for inntil 2G (to ganger folketrygdens grunnbeløp). Dette betyr at borettslaget har prioritet over tinglyste lån ved mislighold av felleskostnader.",
      "evidence": [
        "Legalpant: Borettslaget har legalpant på inntil 2G som sikkerhet for betaling av felleskostnader. Dette betyr at borettslaget har prioritet over tinglyste lån når det gjelder betaling av felleskostnader, og kan kreve inn pengene før andre kreditorer, selv om de har lån registrert på andelen.",
        "Borettslaget har legalpanterett i andelen for krav på dekning av felleskostnader og andre krav fra borettslaget, på inntil 2 ganger folketrygdens grunnbeløp."
      ],
      "source_documents": [
        "d021_d021"
      ],
      "source_pages": [
        40,
        41
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R13",
      "description": "Risiko for økte felleskostnader ved mislighold fra andre andelseiere. Dersom andre andelshavere misligholder sine forpliktelser, eller borettslaget sitter på fraflyttede/usolgte andeler, må de øvrige andelseierne dekke underskuddet.",
      "evidence": [
        "Manglende innbetaling av fellesutgiftene som følge av andre andelshaveres mislighold, eller dersom borettslaget sitter på fraflyttede og/ eller usolgte andeler, må dekkes av de øvrige andelseierne."
      ],
      "source_documents": [
        "d021_d021"
      ],
      "source_pages": [
        41
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R14",
      "description": "Pågående plansak – detaljregulering av Uelands gate fra Stavangergata til Evald Ryghs gate. Dette kan medføre endringer i omgivelsene rundt eiendommen.",
      "evidence": [
        "Pågående plansaker i området: Detaljregulering, Uelands gate fra Stavangergata til Evald Ryghs gate",
        "Maridalsveien 117 ‑ oppføring av ny balkong på loft"
      ],
      "source_documents": [
        "d021_d021"
      ],
      "source_pages": [
        39,
        40
      ],
      "confidence": 0.65
    },
    {
      "risk_id": "R15",
      "description": "Styregodkjennelse kreves – kjøper må godkjennes av borettslagets styre. Selv om styret kun kan nekte ved saklig grunn, innebærer dette en usikkerhet i kjøpsprosessen.",
      "evidence": [
        "Styregodkjennelse: Kjøper må godkjennes av borettslagets styre. Styret kan kun nekte godkjenning dersom det foreligger saklig grunnlag, jf. borettslagsloven § 4‑4."
      ],
      "source_documents": [
        "d021_d021"
      ],
      "source_pages": [
        34
      ],
      "confidence": 0.68
    },
    {
      "risk_id": "R16",
      "description": "Begrenset adgang til utleie – det er begrenset adgang til å leie ut bolig i borettslag. Dette reduserer fleksibiliteten for kjøper som ønsker å leie ut boligen.",
      "evidence": [
        "Adgang til utleie: Det er begrenset adgang til å leie ut bolig i borettslag."
      ],
      "source_documents": [
        "d021_d021"
      ],
      "source_pages": [
        41
      ],
      "confidence": 0.87
    },
    {
      "risk_id": "R17",
      "description": "Felles bygningsdeler ikke vurdert av takstmann – yttervegger, takkonstruksjon, drenering, grunnmur, fundamenter, felles trapper, balkonger og etasjeskiller er ikke tilstandsvurdert. Dette gir usikkerhet om tilstanden på disse elementene.",
      "evidence": [
        "Det er i hovedsak ikke foretatt tilstandsvurdering av bygningsdeler som er underlagt borettslagets ansvarsområde. Det gjelder i hovedsak yttervegger, takkonstruksjon, drenering, grunnmur, grunn/fundamenter, felles trapper og trapperom, balkonger/terrasser, etasjeskiller, piper og fyringsanlegg."
      ],
      "source_documents": [
        "d021_d021"
      ],
      "source_pages": [
        56,
        57
      ],
      "confidence": 0.83
    },
    {
      "risk_id": "R18",
      "description": "Parkeringsplassen kan endres av borettslaget – bruksretten til parkeringsplass nr. 159 er regulert gjennom borettslagets vedtekter, og borettslaget kan vedta endringer i organiseringen.",
      "evidence": [
        "Leiligheten har bruksrett til parkeringsplass nr. 159, som ligger på borettslagets fellesareal. Bruksretten er regulert gjennom borettslagets vedtekter. Det presiseres at borettslaget senere kan vedta endringer i organiseringen av..."
      ],
      "source_documents": [
        "d021_d021"
      ],
      "source_pages": [
        35
      ],
      "confidence": 0.73
    },
    {
      "risk_id": "R19",
      "description": "Elektrisk anlegg ikke fullstendig vurdert – det elektriske anlegget er kun delvis vurdert på en forenklet måte. Manglende fullstendig el-kontroll gir usikkerhet om anleggets tilstand og sikkerhet.",
      "evidence": [
        "Det elektriske anlegget er delvis vurdert på en veldig forenklet måte, dersom det er mer enn fem år siden..."
      ],
      "source_documents": [
        "d021_d021"
      ],
      "source_pages": [
        63
      ],
      "confidence": 0.75
    },
    {
      "risk_id": "R20",
      "description": "Høye og stigende kommunale avgifter – kommunale avgifter utgjorde kr. 1 214 022 i 2024, opp fra kr. 1 118 780 i 2023, og budsjettert til kr. 1 279 000 i 2025. Kommunale avgifter er inkludert i felleskostnadene og bidrar til press på disse.",
      "evidence": [
        "Kommunale avgifter 9 -1 214 022 -1 118 780 -1 146 000 -1 279 000",
        "Informasjon: Kommunale avgifter er inkludert i felleskostnadene."
      ],
      "source_documents": [
        "d021_d021"
      ],
      "source_pages": [
        74,
        78
      ],
      "confidence": 0.78
    }
  ],
  "re_retrieval_queries": [
    "elektrisk anlegg tilstandsgrad TG vurdering sikringsskap",
    "balkongtilstand rekkverk betong borettslag vedlikehold",
    "ventilasjon mekanisk avtrekk tilstandsgrad kjøkken bad",
    "IN-lån individuell nedbetaling fellesgjeld betingelser",
    "forsikring borettslaget IF Skadeforsikring dekning",
    "radonmåling resultat bolig",
    "selger egenerklæring sprekker skjeve gulv fukt kjeller"
  ],
  "reasoning": "\nGjennomgang av alle 18 opprinnelig identifiserte risikoer mot dokumentevidensen:\n\n**R01 – Våtrom TG2:** Meget godt dokumentert. Flere uavhengige tekstpassasjer bekrefter TG2 på gulv, vegger og sanitærutstyr, bom under fliser, alder over halvparten av forventet levetid, og manglende fall mot sluk. Confidence justeres marginalt opp til 0.97.\n\n**R02 – Varmtvannsbereder:** Godt dokumentert. Ukjent alder, manglende tilgang, TG2 gitt. Sintef-referanse bekreftet. Confidence justeres marginalt opp til 0.92.\n\n**R03 – Ledningsnett sanitær:** Godt dokumentert. Skjulte rør, ikke kontrollert, TG2. Confidence beholdes på 0.85.\n\n**R04 – Vinduer/ytterdører TG2:** Dokumentert i TG2-listen og med referanse til alder/levetid og vannlekkasjerisiko. Confidence justeres marginalt opp til 0.87.\n\n**R05 – Innvendige gulv TG2:** Godt dokumentert med sprekk og knirk ved bad. Confidence justeres marginalt opp til 0.82.\n\n**R06 – Borettslagets økonomi/underskudd:** Meget godt dokumentert. Underskudd 2024, 15% økning fra mars 2025, ytterligere økning varslet fra 2026, disponible midler falt fra 2,6 mill til 1,5 mill. Driftskostnader økte kraftig (heisbytte). Confidence justeres opp til 0.93.\n\n**R07 – Fellesgjeld/renterisiko:** Godt dokumentert. Andel fellesgjeld kr 423 171, flytende rente 5,13%, løpetid til 2058, total langsiktig gjeld kr 185 mill. Confidence justeres marginalt opp til 0.92.\n\n**R08 – Heisutskiftning A og B:** Godt dokumentert. Selger bekrefter i egenerklæring. Heiskostnader på kr 803 143 i 2024 (trolig relatert til bytte i oppgang C) bekrefter at dette er kostbart. Confidence justeres marginalt opp til 0.91.\n\n**R09 – Sølvkre:** Dokumentert i egenerklæring, bekreftet to steder. Sølvkre er ikke like alvorlig som skjeggkre, men indikerer fuktproblemer. Confidence beholdes på 0.75.\n\n**R10 – Vanninntrengning garasje:** Dokumentert i egenerklæring, bekreftet to steder. Confidence beholdes på 0.80.\n\n**R11 – Manglende FDV-dokumentasjon bad:** Godt dokumentert. Ferdigattest fremvist men ikke FDV/utførelsesdokumentasjon. Confidence beholdes på 0.82.\n\n**R12 – Legalpant:** Godt dokumentert, bekreftet to steder i dokumentet. Confidence justeres marginalt opp til 0.88.\n\n**R13 – Mislighold andre andelseiere:** Dokumentert med standardformulering. Confidence beholdes på 0.80.\n\n**R14 – Pågående plansak:** Dokumentert, men det er uklart hvilken konkret påvirkning detaljreguleringen av Uelands gate vil ha på denne eiendommen. Confidence justeres ned til 0.65 da det er lite konkret informasjon om konsekvenser.\n\n**R15 – Styregodkjennelse:** Dokumentert, men dette er en standardbestemmelse i alle borettslag og representerer lav reell risiko. Confidence justeres ned til 0.68.\n\n**R16 – Begrenset utleie:** Dokumentert. Standard borettslagsbestemmelse, men reell risiko for kjøpere med utleieplaner. Confidence beholdes på 0.87.\n\n**R17 – Felles bygningsdeler ikke vurdert:** Godt dokumentert. Confidence justeres marginalt opp til 0.83.\n\n**R18 – Parkeringsplass kan endres:** Dokumentert. Confidence beholdes på 0.73.\n\n**Nye risikoer identifisert:**\n\n**R19 – Elektrisk anlegg ikke fullstendig vurdert:** Dokumentet nevner at el-anlegget kun er \"delvis vurdert på en veldig forenklet måte\". Dette er en risiko som ikke var eksplisitt identifisert i de opprinnelige 18 risikoene. Confidence settes til 0.75.\n\n**R20 – Stigende kommunale avgifter:** Regnskapet viser tydelig økning i kommunale avgifter fra 2023 til 2024 og videre budsjettert økning i 2025. Dette bidrar til press på felleskostnadene og er en selvstendig risikofaktor. Confidence settes til 0.78.\n\n**Vurdering av risikoer som bør undersøkes nærmere:**\n- Radonmåling: Selger svarer \"Nei\" på om radonmåling er foretatt – dette er en potensiell risiko som bør undersøkes.\n- Balkong: Tilstand på balkong er ikke vurdert (felles bygningsdel).\n- El-anlegg: Bør undersøkes nærmere med fullstendig el-kontroll.\n- IN-lån betingelser: Mulighet for individuell nedbetaling er nevnt, men betingelser bør undersøkes.\n"
}

## Raw Response
```json
{
  "id": "msg_013gHNNZ9Stepj6jik8KAR4i",
  "container": null,
  "content": [
    {
      "id": "toolu_01XBaVd9GQSi3CYZr98fEvXA",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R01",
            "description": "Våtrom med TG2 – økt risiko for fuktskader og lekkasjer. Våtromsgulvet har nådd mer enn halvparten av forventet levetid på vanntett sjikt (ca. 15–20 år), og det er registrert bom under enkelte fliser på vegger.",
            "evidence": [
              "Tilstandsvurdering er derfor basert på alder, da konstruksjonen har oppnådd mer enn halvparten av forventet levetid. Dette medfører en økt risiko for lekkasjer. TG 2 er gitt på grunn av alder sett i forhold til forventet levetid på vanntett sjikt.",
              "Det er funnet bom under enkelte fliser. Årsak til bom kan være at det...",
              "TG 2 er gitt på grunn av alder sett i forhold til forventet levetid på vanntett sjikt og nevnte forhold. Dette medfører en økt risiko for lekkasjer som kan gi fuktskader i konstruksjonen.",
              "Bygningsdeler med TG2: Våtromsgulv (Bad / 2. etasje), Våtromsvegger (Bad / 2. etasje), Utstyr for sanitærinstallasjoner (Bad / 2. etasje)",
              "Forholdet medfører risiko for at overflatevann ikke renner tilstrekkelig mot sluket. Konsekvensen av forholdet er høyere fuktpåkjenning på konstruksjonen.",
              "Badet er i følge eier pusset opp i 2011. Ferdigattest datert 05.10.2011 for rehabilitering av bad er fremvist."
            ],
            "source_documents": [
              "d021_d021"
            ],
            "source_pages": [
              53,
              54,
              58,
              62
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R02",
            "description": "Varmtvannsbereder av ukjent alder – forhøyet risiko for lekkasje og funksjonssvikt. Berederen er ikke tilgjengelig for inspeksjon, og alder er ukjent. Sintef Byggforsk angir anbefalt brukstid på 20 år.",
            "evidence": [
              "Varmtvannsbereder er av ukjent alder. Ifølge Sintef Byggforsk har varmtvannsberedere en anbefalt brukstid på 20 år. Teknisk levetid er 15-30 år avhengig av påvirkende faktorer.",
              "TG 2 er gitt på grunn av manglende tilgang til varmtvannsberederen.",
              "Konsekvensen av normal aldring er forhøyet risiko for at berederen kan svakere funksjon, bruke mer strøm eller slutte å fungere. Det kan også være høyere risiko for lekkasjer."
            ],
            "source_documents": [
              "d021_d021"
            ],
            "source_pages": [
              58,
              59
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R03",
            "description": "Ledningsnett for sanitærinstallasjoner med TG2 – risiko for skjulte feil. Dimensjonering, klamring, fallforhold og utførelse er ikke kontrollert da rørene i hovedsak ligger skjult i konstruksjonen.",
            "evidence": [
              "Dimensjonering av rør, klamring og innfesting, fallforhold på avløpsrør og utførelse generelt er ikke kontrollert, da dette i hovedsak ligger skjult i konstruksjonen.",
              "Bygningsdeler med TG2: Ledningsnett for sanitærinstallasjoner",
              "Vurderingen er i hovedsak basert på alder i forhold til forventet levetid, utførelse og materialvalg."
            ],
            "source_documents": [
              "d021_d021"
            ],
            "source_pages": [
              54,
              58
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R04",
            "description": "Vinduer og ytterdører med TG2 – nærmer seg eller har passert forventet levetid. Dette kan medføre behov for utskifting og økte kostnader for kjøper.",
            "evidence": [
              "Bygningsdeler med TG2: Vinduer, Ytterdører",
              "TG 2 er gitt på grunn av alder sett i forhold til forventet levetid. Forholdet kan gi forhøyet risiko for vannlekkasjer.",
              "Det er utført vurdering av alder i forhold til forventet levetid."
            ],
            "source_documents": [
              "d021_d021"
            ],
            "source_pages": [
              54,
              58
            ],
            "confidence": 0.87
          },
          {
            "risk_id": "R05",
            "description": "Innvendige gulv med TG2 – sprekk og knirk. Det er observert sprekk i langsgående skjøt ved dør til bad og knirk ved normal gange, noe som kan indikere underliggende problemer.",
            "evidence": [
              "Det er observert sprekk i langsgående skjøt i gulvet ved dør til bad. Videre er det registrert noe knirk i gulvet ved normal gange i samme område. TG 2 er gitt på grunn av nevnte forhold."
            ],
            "source_documents": [
              "d021_d021"
            ],
            "source_pages": [
              54,
              63
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R06",
            "description": "Borettslaget hadde underskudd i 2024 og økte felleskostnadene med 15% fra 01.03.2025. Ytterligere økning på kr. 158,- fra 01.03.2026 er allerede varslet. Dette indikerer en presset økonomi i borettslaget med risiko for ytterligere kostnadsøkninger.",
            "evidence": [
              "Borettslaget hadde i regnskapet for 2024 et underskudd på kr. 707...",
              "Budsjettet er basert på 15 % økning av felleskostnadene fra 01.03.25.",
              "Felleskostnadene økte med kr. 158,‑ fra 01.03.2026.",
              "B. ÅRETS ENDR. I DISP. MIDLER -1 097 761 228 282",
              "C. DISP. MIDLER PR. 31.12. 1 510 324 2 608 084",
              "Drift/vedlikehold heisanlegg -803 143 (i 2024-regnskapet)",
              "SUM DRIFTSKOSTNADER -4 903 036 (2024) mot -3 504 591 (2023)"
            ],
            "source_documents": [
              "d021_d021"
            ],
            "source_pages": [
              33,
              34,
              72,
              73,
              74
            ],
            "confidence": 0.93
          },
          {
            "risk_id": "R07",
            "description": "Høy fellesgjeld i borettslaget – andel fellesgjeld er kr. 423 171 med flytende rente på 5,13% og løpetid til 2058. Flytende rente medfører risiko for økte kapitalkostnader ved renteoppgang.",
            "evidence": [
              "Kr 423 171 pr. 17.02.2026 (Andel av fellesgjeld)",
              "Rentesats: 5,13%, Type rente: Flytende rente, Innfrielsesdato: 30.09.2058",
              "Restsaldo 7 494 995,00",
              "SUM LANGSIKTIG GJELD 185 336 921"
            ],
            "source_documents": [
              "d021_d021"
            ],
            "source_pages": [
              33,
              34,
              75
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R08",
            "description": "Planlagte heisutskiftninger i oppgang A og B kan medføre økte felleskostnader. Heisen i oppgang C er nylig byttet, og tilsvarende utskiftning i de øvrige oppgangene vil komme.",
            "evidence": [
              "Heisen i oppgang C (vår oppgang) er akkurat byttet. På sikt skal heisene i oppgang A og B også byttes, men det er nylig utført vedlikehold på disse for å forlenge levetiden.",
              "Drift/vedlikehold heisanlegg -803 143 (i 2024-regnskapet)"
            ],
            "source_documents": [
              "d021_d021"
            ],
            "source_pages": [
              34,
              49,
              78
            ],
            "confidence": 0.91
          },
          {
            "risk_id": "R09",
            "description": "Sølvkre på badet – selger opplyser om tidligere forekomst av sølvkre på badet. Selv om det ikke er observert de siste 6 måneder, er det en risiko for at problemet kan gjenoppstå.",
            "evidence": [
              "Det har vært sølvkre (IKKE skjeggkre) på badet. Har brukt feller/middel og ikke observert siste 6 mnd.",
              "Ja. Det har vært sølvkre (IKKE skjeggkre) på badet. Har brukt feller/ middel og ikke observert siste 6 mnd."
            ],
            "source_documents": [
              "d021_d021"
            ],
            "source_pages": [
              47,
              48
            ],
            "confidence": 0.75
          },
          {
            "risk_id": "R10",
            "description": "Vanninntrengning i garasje ved styrtregn – selger opplyser om at det ved ekstremt store nedbørsmengder kan komme vann inn i garasjen. Dette er en kjent svakhet ved eiendommen.",
            "evidence": [
              "Ved ekstremt store nedbørsmengder (styrtregn) så kan det komme vann inn i garasjen, det har skjedd 1 gang i løpet av vår periode.",
              "Ja. Ved ekstremt store nedbørsmengder (styrtregn) så kan det komme vann inn i garasjen, det har skjedd 1 gang i løpet av vår periode."
            ],
            "source_documents": [
              "d021_d021"
            ],
            "source_pages": [
              47,
              48
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R11",
            "description": "Manglende FDV-dokumentasjon for baderomsrehabilitering fra 2011. Selv om ferdigattest er fremvist, mangler dokumentasjon på utførelse, noe som kan skape usikkerhet om kvaliteten på arbeidet.",
            "evidence": [
              "Badet er i følge eier pusset opp i 2011. Ferdigattest datert 05.10.2011 for rehabilitering av bad er fremvist. FDV dokumentasjon og dokumentasjon på utførelse er ikke fremvist."
            ],
            "source_documents": [
              "d021_d021"
            ],
            "source_pages": [
              58,
              62
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R12",
            "description": "Legalpant – borettslaget har legalpanterett i andelen for inntil 2G (to ganger folketrygdens grunnbeløp). Dette betyr at borettslaget har prioritet over tinglyste lån ved mislighold av felleskostnader.",
            "evidence": [
              "Legalpant: Borettslaget har legalpant på inntil 2G som sikkerhet for betaling av felleskostnader. Dette betyr at borettslaget har prioritet over tinglyste lån når det gjelder betaling av felleskostnader, og kan kreve inn pengene før andre kreditorer, selv om de har lån registrert på andelen.",
              "Borettslaget har legalpanterett i andelen for krav på dekning av felleskostnader og andre krav fra borettslaget, på inntil 2 ganger folketrygdens grunnbeløp."
            ],
            "source_documents": [
              "d021_d021"
            ],
            "source_pages": [
              40,
              41
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R13",
            "description": "Risiko for økte felleskostnader ved mislighold fra andre andelseiere. Dersom andre andelshavere misligholder sine forpliktelser, eller borettslaget sitter på fraflyttede/usolgte andeler, må de øvrige andelseierne dekke underskuddet.",
            "evidence": [
              "Manglende innbetaling av fellesutgiftene som følge av andre andelshaveres mislighold, eller dersom borettslaget sitter på fraflyttede og/ eller usolgte andeler, må dekkes av de øvrige andelseierne."
            ],
            "source_documents": [
              "d021_d021"
            ],
            "source_pages": [
              41
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R14",
            "description": "Pågående plansak – detaljregulering av Uelands gate fra Stavangergata til Evald Ryghs gate. Dette kan medføre endringer i omgivelsene rundt eiendommen.",
            "evidence": [
              "Pågående plansaker i området: Detaljregulering, Uelands gate fra Stavangergata til Evald Ryghs gate",
              "Maridalsveien 117 ‑ oppføring av ny balkong på loft"
            ],
            "source_documents": [
              "d021_d021"
            ],
            "source_pages": [
              39,
              40
            ],
            "confidence": 0.65
          },
          {
            "risk_id": "R15",
            "description": "Styregodkjennelse kreves – kjøper må godkjennes av borettslagets styre. Selv om styret kun kan nekte ved saklig grunn, innebærer dette en usikkerhet i kjøpsprosessen.",
            "evidence": [
              "Styregodkjennelse: Kjøper må godkjennes av borettslagets styre. Styret kan kun nekte godkjenning dersom det foreligger saklig grunnlag, jf. borettslagsloven § 4‑4."
            ],
            "source_documents": [
              "d021_d021"
            ],
            "source_pages": [
              34
            ],
            "confidence": 0.68
          },
          {
            "risk_id": "R16",
            "description": "Begrenset adgang til utleie – det er begrenset adgang til å leie ut bolig i borettslag. Dette reduserer fleksibiliteten for kjøper som ønsker å leie ut boligen.",
            "evidence": [
              "Adgang til utleie: Det er begrenset adgang til å leie ut bolig i borettslag."
            ],
            "source_documents": [
              "d021_d021"
            ],
            "source_pages": [
              41
            ],
            "confidence": 0.87
          },
          {
            "risk_id": "R17",
            "description": "Felles bygningsdeler ikke vurdert av takstmann – yttervegger, takkonstruksjon, drenering, grunnmur, fundamenter, felles trapper, balkonger og etasjeskiller er ikke tilstandsvurdert. Dette gir usikkerhet om tilstanden på disse elementene.",
            "evidence": [
              "Det er i hovedsak ikke foretatt tilstandsvurdering av bygningsdeler som er underlagt borettslagets ansvarsområde. Det gjelder i hovedsak yttervegger, takkonstruksjon, drenering, grunnmur, grunn/fundamenter, felles trapper og trapperom, balkonger/terrasser, etasjeskiller, piper og fyringsanlegg."
            ],
            "source_documents": [
              "d021_d021"
            ],
            "source_pages": [
              56,
              57
            ],
            "confidence": 0.83
          },
          {
            "risk_id": "R18",
            "description": "Parkeringsplassen kan endres av borettslaget – bruksretten til parkeringsplass nr. 159 er regulert gjennom borettslagets vedtekter, og borettslaget kan vedta endringer i organiseringen.",
            "evidence": [
              "Leiligheten har bruksrett til parkeringsplass nr. 159, som ligger på borettslagets fellesareal. Bruksretten er regulert gjennom borettslagets vedtekter. Det presiseres at borettslaget senere kan vedta endringer i organiseringen av..."
            ],
            "source_documents": [
              "d021_d021"
            ],
            "source_pages": [
              35
            ],
            "confidence": 0.73
          },
          {
            "risk_id": "R19",
            "description": "Elektrisk anlegg ikke fullstendig vurdert – det elektriske anlegget er kun delvis vurdert på en forenklet måte. Manglende fullstendig el-kontroll gir usikkerhet om anleggets tilstand og sikkerhet.",
            "evidence": [
              "Det elektriske anlegget er delvis vurdert på en veldig forenklet måte, dersom det er mer enn fem år siden..."
            ],
            "source_documents": [
              "d021_d021"
            ],
            "source_pages": [
              63
            ],
            "confidence": 0.75
          },
          {
            "risk_id": "R20",
            "description": "Høye og stigende kommunale avgifter – kommunale avgifter utgjorde kr. 1 214 022 i 2024, opp fra kr. 1 118 780 i 2023, og budsjettert til kr. 1 279 000 i 2025. Kommunale avgifter er inkludert i felleskostnadene og bidrar til press på disse.",
            "evidence": [
              "Kommunale avgifter 9 -1 214 022 -1 118 780 -1 146 000 -1 279 000",
              "Informasjon: Kommunale avgifter er inkludert i felleskostnadene."
            ],
            "source_documents": [
              "d021_d021"
            ],
            "source_pages": [
              74,
              78
            ],
            "confidence": 0.78
          }
        ],
        "re_retrieval_queries": [
          "elektrisk anlegg tilstandsgrad TG vurdering sikringsskap",
          "balkongtilstand rekkverk betong borettslag vedlikehold",
          "ventilasjon mekanisk avtrekk tilstandsgrad kjøkken bad",
          "IN-lån individuell nedbetaling fellesgjeld betingelser",
          "forsikring borettslaget IF Skadeforsikring dekning",
          "radonmåling resultat bolig",
          "selger egenerklæring sprekker skjeve gulv fukt kjeller"
        ],
        "reasoning": "\nGjennomgang av alle 18 opprinnelig identifiserte risikoer mot dokumentevidensen:\n\n**R01 – Våtrom TG2:** Meget godt dokumentert. Flere uavhengige tekstpassasjer bekrefter TG2 på gulv, vegger og sanitærutstyr, bom under fliser, alder over halvparten av forventet levetid, og manglende fall mot sluk. Confidence justeres marginalt opp til 0.97.\n\n**R02 – Varmtvannsbereder:** Godt dokumentert. Ukjent alder, manglende tilgang, TG2 gitt. Sintef-referanse bekreftet. Confidence justeres marginalt opp til 0.92.\n\n**R03 – Ledningsnett sanitær:** Godt dokumentert. Skjulte rør, ikke kontrollert, TG2. Confidence beholdes på 0.85.\n\n**R04 – Vinduer/ytterdører TG2:** Dokumentert i TG2-listen og med referanse til alder/levetid og vannlekkasjerisiko. Confidence justeres marginalt opp til 0.87.\n\n**R05 – Innvendige gulv TG2:** Godt dokumentert med sprekk og knirk ved bad. Confidence justeres marginalt opp til 0.82.\n\n**R06 – Borettslagets økonomi/underskudd:** Meget godt dokumentert. Underskudd 2024, 15% økning fra mars 2025, ytterligere økning varslet fra 2026, disponible midler falt fra 2,6 mill til 1,5 mill. Driftskostnader økte kraftig (heisbytte). Confidence justeres opp til 0.93.\n\n**R07 – Fellesgjeld/renterisiko:** Godt dokumentert. Andel fellesgjeld kr 423 171, flytende rente 5,13%, løpetid til 2058, total langsiktig gjeld kr 185 mill. Confidence justeres marginalt opp til 0.92.\n\n**R08 – Heisutskiftning A og B:** Godt dokumentert. Selger bekrefter i egenerklæring. Heiskostnader på kr 803 143 i 2024 (trolig relatert til bytte i oppgang C) bekrefter at dette er kostbart. Confidence justeres marginalt opp til 0.91.\n\n**R09 – Sølvkre:** Dokumentert i egenerklæring, bekreftet to steder. Sølvkre er ikke like alvorlig som skjeggkre, men indikerer fuktproblemer. Confidence beholdes på 0.75.\n\n**R10 – Vanninntrengning garasje:** Dokumentert i egenerklæring, bekreftet to steder. Confidence beholdes på 0.80.\n\n**R11 – Manglende FDV-dokumentasjon bad:** Godt dokumentert. Ferdigattest fremvist men ikke FDV/utførelsesdokumentasjon. Confidence beholdes på 0.82.\n\n**R12 – Legalpant:** Godt dokumentert, bekreftet to steder i dokumentet. Confidence justeres marginalt opp til 0.88.\n\n**R13 – Mislighold andre andelseiere:** Dokumentert med standardformulering. Confidence beholdes på 0.80.\n\n**R14 – Pågående plansak:** Dokumentert, men det er uklart hvilken konkret påvirkning detaljreguleringen av Uelands gate vil ha på denne eiendommen. Confidence justeres ned til 0.65 da det er lite konkret informasjon om konsekvenser.\n\n**R15 – Styregodkjennelse:** Dokumentert, men dette er en standardbestemmelse i alle borettslag og representerer lav reell risiko. Confidence justeres ned til 0.68.\n\n**R16 – Begrenset utleie:** Dokumentert. Standard borettslagsbestemmelse, men reell risiko for kjøpere med utleieplaner. Confidence beholdes på 0.87.\n\n**R17 – Felles bygningsdeler ikke vurdert:** Godt dokumentert. Confidence justeres marginalt opp til 0.83.\n\n**R18 – Parkeringsplass kan endres:** Dokumentert. Confidence beholdes på 0.73.\n\n**Nye risikoer identifisert:**\n\n**R19 – Elektrisk anlegg ikke fullstendig vurdert:** Dokumentet nevner at el-anlegget kun er \"delvis vurdert på en veldig forenklet måte\". Dette er en risiko som ikke var eksplisitt identifisert i de opprinnelige 18 risikoene. Confidence settes til 0.75.\n\n**R20 – Stigende kommunale avgifter:** Regnskapet viser tydelig økning i kommunale avgifter fra 2023 til 2024 og videre budsjettert økning i 2025. Dette bidrar til press på felleskostnadene og er en selvstendig risikofaktor. Confidence settes til 0.78.\n\n**Vurdering av risikoer som bør undersøkes nærmere:**\n- Radonmåling: Selger svarer \"Nei\" på om radonmåling er foretatt – dette er en potensiell risiko som bør undersøkes.\n- Balkong: Tilstand på balkong er ikke vurdert (felles bygningsdel).\n- El-anlegg: Bør undersøkes nærmere med fullstendig el-kontroll.\n- IN-lån betingelser: Mulighet for individuell nedbetaling er nevnt, men betingelser bør undersøkes.\n"
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
    "input_tokens": 23498,
    "output_tokens": 6585,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
