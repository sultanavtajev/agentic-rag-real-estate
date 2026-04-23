# Trace: agentic_reflecting_iter1
- **Run ID:** e8dbff5d-473d-4980-9a9d-508c5c24fb71
- **Tidspunkt:** 2026-03-23T23:54:15.177148+00:00
- **Varighet:** 115.20s
- **Input tokens:** 21250
- **Output tokens:** 5740

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
Risiko 1: Bod innredet som soverom/kontor uten godkjenning fra bygningsmyndighetene. Dette er en ulovlig bruksendring som kan medføre pålegg om tilbakeføring og juridiske konsekvenser for kjøper.
  Confidence: 0.97
  Evidens: Bod innredet som soverom/kontor; Er innredning/utbyggingen godkjent hos bygningsmyndighetene? Nei; Endring av tilleggsdel til hoveddel (bod til kontor) er en søknadspliktig bruksendring; Kjøper overtar eiendommen slik den fremstår på visning med risiko og ansvaret for eventuelle pålegg fra TBA

Risiko 2: Høy fellesgjeld og flytende rente på borettslagets lån medfører risiko for økte felleskostnader. Borettslaget har ingen individuell nedbetalingsordning (IN-ordning), og renteendringer vil direkte påvirke felleskostnadene.
  Confidence: 0.92
  Evidens: Andel fellesgjeld: Kr 270 740; Rentesats: 4,99% - Flytende rente; Restsaldo: 3 929 119 / 18 298 974; Borettslaget har ikke individuell nedbetalingsordning (IN-ordning) for fellesgjeld; Endringer i rentenivået på borettslagets lån kan også påvirke størrelsen på felleskostnadene

Risiko 3: Styret har vedtatt å øke felleskostnadene med 3,5 % fra 1. januar 2026, noe som vil medføre økte månedlige utgifter for kjøper.
  Confidence: 0.95
  Evidens: Styret har vedtatt å øke felleskostnadene med 3,5 % fra 1. januar 2026

Risiko 4: Badet har ukjent type membran og sluk fra byggeåret (1981), og kostnadestimatet for utbedring er over kr 300 000. Det anbefales å ikke ta ned vegg ved dusjkabinettet før membraner er oppgradert.
  Confidence: 0.95
  Evidens: Det er ukjent type membran og sluk fra byggeåret; Kostnadestimatet: Over 300 000; Det anbefales å ikke ta vegg dusjkabinettet før membraner er oppgradert; Det er målt 17 mm fall fra topp flis foran dørterskel til topp av slukrist

Risiko 5: Vannledninger har passert mer enn halvparten av forventet brukstid. Rørene er fra byggeåret 1981 og er delvis innkasset, noe som gjør inspeksjon vanskelig og øker risikoen for skjulte lekkasjer.
  Confidence: 0.9
  Evidens: Mer enn halvparten av forventet brukstid er passert; Byggeår: 1981 - Fra Eiendomsverdi AS; Vannrør fra byggetidspunkt i kobber, delvis innkasset og åpent på vegg

Risiko 6: Planhetsmåling av gulv viser avvik på 15 mm i stue og 12 mm i gang, noe som overskrider standardens krav til godkjente måleavvik (TG2). Dette kan medføre utfordringer med møblering og økt slitasje på gulvbelegg.
  Confidence: 0.88
  Evidens: Det er målt høydeforskjell på mellom 15-30 mm gjennom hele rommet. Tilstandsgrad 2 gis med bakgrunn i standardens krav til godkjente måleavvik; Målt planhets-avvik i stue gjennom hele rommet. Resultat i stua er 15 mm og i gang 12 mm

Risiko 7: Kjøkkenet har kun kullfilterventilator og ingen forsert/mekanisk avtrekksløsning fra kokesonen. Det er vanskelig å etablere andre løsninger, noe som kan gi dårlig inneklima.
  Confidence: 0.85
  Evidens: Det er kun kullfilterventilator på kjøkkenet og heller ikke andre forserte/mekaniske avtrekksløsninger fra kokesonen; Det er vanskelig å etablere andre løsninger

Risiko 8: Eiendommen er ikke energimerket, noe som er i strid med forskriftskrav. Kjøper har begrenset informasjon om boligens energieffektivitet.
  Confidence: 0.88
  Evidens: Energikarakter: Ikke angitt; Energifarge: Ikke angitt; Eiendommen er ikke energimerket

Risiko 9: Elektrisk anlegg er ikke kontrollert (el-takst), og det er skrusikringer i sikringsskapet. Skrusikringer er en eldre løsning som kan utgjøre en sikkerhetsrisiko. Det er sannsynlig at avvik kan avdekkes ved fremtidig kontroll.
  Confidence: 0.87
  Evidens: Det er ikke foretatt kontroll av de elektriske installasjonene (el-takst); Det er skrusikringer i sikringsskapet med egen jordfeilsbryter; Siden elanlegget ikke er kontrollert er det sannsynlig at det siden kan avdekkes feil

Risiko 10: Borettslaget har store tinglyste panteheftelser (fellesobligasjoner) på til sammen over NOK 145 millioner. Dersom eiendommen blir overbeheftet i salgsprosessen, kan handelen ikke gjennomføres uten pantefrafall fra kreditorene.
  Confidence: 0.85
  Evidens: FELLESOBL. FOR BOR.INNSK. Beløp: NOK 59 673 700; PANTEDOKUMENT Beløp: NOK 22 000 000 - Panthaver: OBOS-BANKEN AS; PANTEDOKUMENT Beløp: NOK 19 000 000 - Panthaver: OBOS-BANKEN AS; PANTEDOKUMENT Beløp: NOK 45 000 000 - Panthaver: OBOS-BANKEN AS; Dersom eiendommen skulle bli overbeheftet i salgsprosessen... er det en forutsetning for at handel skal kunne gjennomføres at kreditorene gir nødvendig pantefrafall

Risiko 11: Reguleringsplan S-2497 fastsetter at traseen for den gamle Østfoldbanen ('Smålensbanen') ligger i nærliggende friområde med bevaringsstatus, der endringer krever særskilt godkjenning. Området er under stadig utvikling, noe som kan påvirke bomiljøet.
  Confidence: 0.78
  Evidens: Reguleringsplan S-2497 fastsetter at traseen for den gamle Østfoldbanen ('Smålensbanen'), som ligger i nærliggende friområde, har en bevaringsstatus der endringer krever særskilt godkjenning; Området er stadig under endring/utvikling, bygg settes opp, rehabiliteres og rives ned

Risiko 12: Borettslaget har legalpanterett i andelen for krav på inntil 2G for felleskostnader. Manglende innbetaling fra andre andelshavere eller fraflyttede/usolgte andeler kan medføre økte kostnader for øvrige andelseiere.
  Confidence: 0.82
  Evidens: Borettslaget har legalpant på inntil 2G som sikkerhet for betaling av felleskostnader; Manglende innbetaling av fellesutgiftene som følge av andre andelshaveres mislighold, eller dersom borettslaget sitter på fraflyttede og/eller usolgte andeler, må dekkes av de øvrige andelseierne

Risiko 13: Markiseduk er revnet og må skiftes. Dette er et avvik som medfører en kostnad for kjøper.
  Confidence: 0.8
  Evidens: Det er påvist andre avvik: Markiseduk er revnet

Risiko 14: Selger har ikke utført radonmåling av boligen. Selv om boligen ligger høyt (over 3 etasjer over bakkenivå) og radonmåling anses som ikke relevant, er dette en potensiell risiko som ikke er formelt dokumentert.
  Confidence: 0.65
  Evidens: Selger har ikke utført radonmåling; Boligen ligger mer enn 3 etasjer over bakkenivå og radonmåling er ikke relevant; Radonmåling: År 2025, Verdi 0

Risiko 15: Begrenset adgang til utleie i borettslag. Utleie krever styrets godkjenning og er begrenset til maksimalt 3 år, forutsatt at eier har bodd i boligen i minst ett av de to siste årene. Korttidsutleie er tillatt i kun 30 døgn per år.
  Confidence: 0.88
  Evidens: Det er begrenset adgang til å leie ut bolig i borettslag; Med styrets godkjenning og under visse vilkår kan boligen leies ut i inntil 3 år, jf. borettslagsloven § 5-3 til § 5-10; Korttidsutleie er tillatt i opptil 30 døgn per år uten samtykke fra styret

Risiko 16: Boligen er fra 1981 og har generell slitasje. Kjøper må forvente oppgraderinger på grunn av slitasje, fraværende vedlikehold, arbeider utført av ufaglærte og utidsmessige tekniske løsninger.
  Confidence: 0.85
  Evidens: Byggeår: 1981; Kjøper må være forberedt på det må foretas oppgraderinger på grunn av slitasje, fraværende vedlikehold, arbeider som er utført av ufaglærte, utidsmessighet eller tekniske løsninger som ikke holder; Noe generell bruksslitasje på overflater

Dokumentkontekst:
[d046_d046 | Side [1]]
ges
Panthaver: OBOS‑BANKEN AS Eiendommen er tilknyttet offentlig vann‑ og hos eiendomsmegler før bud inngis. Kontakt
ORG.NR: 911 986 884 avløpssystem. Stikkledningene fra eiendommen og ut til eiendomsmegler for spørsmål.
Tinglyste heftelser
GJELDER DENNE REGISTERENHETEN MED FLERE det kommunale nettet er private, og
Tinglyste heftelser og rettigheter: Følgende tinglyste vedlikeholdsansvaret for disse påhviler borettslaget. Selger leverer eiendommen i ryddig og rengjort stand.
heftelser følger eiendommen ved

---

[d046_d046 | Side [1]]
usstand til husstand. ** NEDKVITTERING Selger bærer risikoen for at kjøper kan få tinglyst skjøte samtykke fra styret.
BELØPET ER NEDKVITTERT TIL: uten andre heftelser enn de som det er avtalt at følger
Beløp: NOK 49 051 600 med i handelen. Gjennomføring av handelen er betinget
Regulering Radonmåling
** FORHØYELSE av det ikke er tinglyst heftelser som ikke lar seg innfri/
Regulerings og arealplaner: Eiendommen er regulert til FORHØYET TIL NOK 49,286,600 slette. Selger har ikke utført radonmåling. Det er

---

[d046_d046 | Side [1]]
mmen i ryddig og rengjort stand.
heftelser følger eiendommen ved salg, og ved inngivelse 2023/ 382566‑1/ 200 14.04.2023 PANTEDOKUMENT Adkomst til eiendommen skjer via offentlig vei. Interne
av bud vil disse være akseptert av budgiver/ kjøper: Beløp: NOK 22 000 000 veier på eiendommen er regulert som felles avkjørsel.
Kontrakts‑
Panthaver: OBOS‑BANKEN AS
1983/ 32183‑1/ 105 27.10.1983 FELLESOBL. FOR ORG.NR: 911 986 884
grunnlag
Utleie
BOR.INNSK. GJELDER DENNE REGISTERENHETEN MED FLERE
Beløp: NOK 59 673 700

---

[d046_d046 | Side [1]]
TEN MED FLERE andre kreditorer, selv om de har lån registrert på andelen.
vedlagt i salgsoppgaven eller kan fås ved henvendelse til Kjøper og selger er forpliktet til å undertegne standard
megler. Vi oppfordrer interessenter til å gjøre seg kjent 2018/ 1349437‑1/ 200 02.10.2018 PANTEDOKUMENT kjøpekontrakt utarbeidet av Emera i forbindelse med
Vei, vann og avløp
med disse. Beløp: NOK 19 000 000 eiendomstransaksjonen. Kjøpekontrakten kan besiktiges
Panthaver: OBOS‑BANKEN AS Eiendommen er tilknyttet offentlig

---

[d046_d046 | Side [1]]
OK 49,286,600 slette. Selger har ikke utført radonmåling. Det er ikke krav om
byggeområde for boliger i henhold til reguleringsplan dette med mindre boligen er helt eller delvis utleid.
S‑2497, vedtatt 06.11.1980. 1984/ 20102‑1/ 105 25.04.1984 ERKLÆRING/ AVTALE Dersom eiendommen skulle bli overbeheftet i
Bestemmelse om trafostasjon/ kiosk salgsprosessen, det vil si at summen av fremtidige
Diverse
Kommuneplan: Kommuneplanen 2015‑2030, vedtatt tinglyste heftelser overstiger den forventede
23.09.2015. 1984/

---

[d046_d046 | Side [1]]
tover det som er nevnt tidligere (f.eks. drenering,
murerarbeid, tømrerarbeid etc)?
Nei Ja
Beskrivelse Innsetting av vindu bod
15 Er det nedgravd oljetank på eiendommen?
Nei Ja
16 Kjenner du til om det har vært utført arbeid på terrasse/garasje/tak/fasade?
Svar Nei
17 Selges eiendommen med utleiedel, leilighet, hybel eller tilsvarende?
Nei Ja
18 Kjenner du til om det er innredet/bruksendret/bygget ut i kjeller eller loft eller andre deler av boligen?
Nei Ja
Beskrivelse Bod innredet som soverom/kontor
18.1

---

[d046_d046 | Side [1]]
laget sitter på fraflyttede og/ eller usolgte andeler,
må dekkes av de øvrige andelseierne.
Området er stadig under endring/ utvikling, bygg settes 2017/ 697151‑1/ 200 28.06.2017 PANTEDOKUMENT Legalpant: Borettslaget har legalpant på inntil 2G som
opp, rehabiliteres og rives ned. Vi anbefaler derfor alle Beløp: NOK 45 000 000 sikkerhet for betaling av felleskostnader. Dette betyr at Borettslaget har legalpanterett i andelen for krav på
budgivere å sette seg inn i gjeldende Panthaver: OBOS‑BANKEN AS

---

[d046_d046 | Side [1]]
(ER) TIL PARKERING borettslagsloven § 5‑3 til § 5‑10. Andelseier som selv bor i selger.
HUSBANKEN SOM TIL ENHVER TID HVILER PÅ Rettighet hefter i: KNR: 0301 GNR: 185 BNR: 62 boligen, har imidlertid rett til å leie ut deler av boligen til
EIENDOMMEN Med flere bestemmelser andre uten styregodkjenning, jf. borettslagsloven § 5‑4.
38 39

## Side 21

OM EIENDOMMEN OM EIENDOMMEN
fagkyndig vurdering, samt opplysninger fra offentlige selges ansvar begrenses ettersom boligen selges «som fravikes § 3‑3 andre ledd,

---

[d046_d046 | Side [1]]
pantefrafall ikke oppnås vil handel borettslaget, som gir borett til en bestemt bolig.
1986/ 43052‑2/ 105 16.07.1986 BEST. OM VANN/ ikke kunne gjennomføres. Skulle det bli tinglyst flere Andelseierne har ikke personlig ansvar for borettslagets
Reguleringsplan S‑2497 fastsetter at traseen for den KLOAKKLEDN. utleggspant på eiendommen, kan handel bare fellesgjeld, men de må dekke borettslagets løpende
gamle Østfoldbanen ('Smålensbanen'), som ligger i Med flere bestemmelser gjennomføres forutsatt at også

---

[d046_d046 | Side [1]]
boligen?
Nei Ja
Beskrivelse Bod innredet som soverom/kontor
18.1 Er innredning/utbyggingen godkjent hos bygningsmyndighetene?
Nei Ja
19 Kjenner du til forslag eller vedtatte reguleringsplaner, andre planer, nabovarsel eller offentlige vedtak som kan medføre endringer i bruken av
eiendommen eller av dens omgivelser?
Nei Ja
Initialer selger: ADK 2
52205220
:ecnerefer
tnemucoD
20 Kjenner du til om det foreligger påbud/heftelser/krav/manglende tillatelser vedrørende eiendommen?
Nei Ja
21 Er det foretatt

---

[d046_d046 | Side [1]]
 tinglyste heftelser overstiger den forventede
23.09.2015. 1984/ 20103‑1/ 105 25.04.1984 ERKLÆRING/ AVTALE salgssummen, er det en forutsetning for at handel skal Borettslagsmodellen innebærer at borettslaget eier
Kommunedelplan: KDP‑17 ‑ Kommunedelplan for torg og Bestemmelse om trafostasjon/ kiosk kunne gjennomføres at kreditorene gir nødvendig eiendommen, mens andelseierne eier andeler i
møteplasser, vedtatt 22.04.2009. pantefrafall. Dersom pantefrafall ikke oppnås vil handel borettslaget, som gir borett

---

[d046_d046 | Side [1]]
 m.琀椀lh. anlegg, Friområde/park, Grense for bebyggelse, Måle- og avstandslinje,
O昀昀entlig gang-/sykkelvei
Kommune gnr. bnr. fnr. snr. Areal Kilde Eieforhold
301 OSLO 185 59 0 26528.4 m² BEREGNET AREAL Eiet Om tomten
(Ambita)
Felles eiet tomt i bore琀琀slaget på 26528.4 m². Tomten er opparbeidet med beplantning, plen, områder for lek og opphold. Asfalterte interne
Adresse
veier og parkeringsarealer. Eiendommen ligger i rela琀椀vt skrånende terreng.
Ravnåsveien 29 H
Tinglyste/andre forhold
Hjemmelshaver
Det er

---

[d046_d046 | Side [1]]
nde tillatelser vedrørende eiendommen?
Nei Ja
21 Er det foretatt radonmåling?
Nei Ja
Beskrivelse Utført i 2025, men ikke aktuelt i leiligheten pga av beliggenhet
21.1 Radonmåling
År 2025
Verdi 0
22 Kjenner du til manglende brukstillatelse eller ferdigattest?
Nei Ja
23 Kjenner du til om det foreligger skaderapporter/ tilstandsvurderinger eller utførte målinger?
Nei Ja
24 Er det andre forhold av betydning ved eiendommen som kan være relevant for kjøper å vite om (f.eks. rasfare, tinglyste forhold eller

---

[d046_d046 | Side [1]]
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

[d046_d046 | Side [1]]
nummer: 98207618837
Eierskiftegebyr
Restsaldo: 98 770,93
Kr 6725 Kapitalkostnader: 1 469,37
IN‑avtale: Nei
Bank: OBOS‑banken AS
27

## Side 15

OM EIENDOMMEN OM EIENDOMMEN
Lånenummer: 98207618845 Innfrielsesdato: 30.06.2033 av partene. Oppsigelsestiden er seks ‑ 6 ‑ måneder året rundt. Med en kort sykkeltur når du også de idylliske
Restsaldo: 21 212,94 Type Rente: Flytende rente regnet fra oppsigelsesdato. fasilitetene langs Hvervenbukta.
Kapitalkostnader: 283,30 Terminer i året: 12
IN‑avtale: Nei Boligen

---

[d046_d046 | Side [1]]
n Borettslag, et veldrevet husordensregler. Vesentlige endringer på bygningens Energifarge: Ikke angitt
avvik fra dagens forskriftskrav og oppstå funksjonssvikt. borettslag tilknyttet OBOS som forretningsfører. eksteriør, som for eksempel montering av markiser eller
Videre må kjøper være forberedt på det må foretas Borettslaget består av 236 andelsleiligheter og er et parabolantenner, krever styrets forhåndsgodkjenning.
Info energiklasse
oppgraderinger på grunn av slitasje, fraværende samvirkeforetak med

---

[d046_d046 | Side [1]]
m ligger i Med flere bestemmelser gjennomføres forutsatt at også eventuelle fremtidige utgifter. Manglende innbetaling av fellesutgiftene som
nærliggende friområde, har en bevaringsstatus der Bestemmelse om veg kreditorer aksepterer å slette sitt pant uten å få full følge av andre andelshaveres mislighold, eller dersom
endringer krever særskilt godkjenning. GJELDER DENNE REGISTERENHETEN MED FLERE innfrielse av det underliggende kravet. borettslaget sitter på fraflyttede og/ eller usolgte andeler,
må dekkes

---

[d046_d046 | Side [1]]
K. GJELDER DENNE REGISTERENHETEN MED FLERE
Beløp: NOK 59 673 700 ELEKTRONISK INNSENDT Adgang til utleie: Det er begrenset adgang til å leie ut
Overtakelse
Panthaver: ANDELSEIERNE I BORETTSLAGET bolig i borettslag. Med styrets godkjenning og under
LØPENR: 1129767 1982/ 2654‑1/ 105 29.01.1982 BEST OM GARASJE/ visse vilkår kan boligen leies ut i inntil 3 år, jf. Tidspunkt for overtakelse avtales mellom kjøper og
ANF. PRIORITET ETTER OBLIGASJON(ER) TIL PARKERING borettslagsloven § 5‑3 til § 5‑10. Andelseier

---

[d046_d046 | Side [1]]
graderinger på grunn av slitasje, fraværende samvirkeforetak med formål om å gi andelseierne Andelseier er selv ansvarlig for vedlikehold av private
vedlikehold, arbeider som er utført av ufaglærte, bruksrett til egen bolig. Informasjon fra styret og markiser. Oppføring av hagestuer er kun tillatt for Eiendommen er ikke energimerket. Det følger av forskrift
utidsmessighet eller tekniske løsninger som ikke holder dokumenter til årsmøter er tilgjengelig for beboere på leiligheter på bakkeplan og krever

---

[d046_d046 | Side [1]]
 kort vei til Østmarka og Prinsdal med
Rentesats: 4,99% Mulighet for individuell nedbetaling på hele eller deler av boligområde uten gjennomgangstrafikk. Eiendommen preparerte lysløyper og flotte turmuligheter.
Restsaldo: 18 298 974 fellesgjeld (IN‑lån): Nei har en skjermet og attraktiv intern beliggenhet, samtidig
Innfrielsesdato: 30.07.2032 som man har kort vei til alt nærområdet har å tilby.
Parkering
Type Rente: Flytende rente
Sikringsordning
Terminer i året: 12 Det er gangavstand til både skole og

---

[d046_d046 | Side [1]]
gel mot hvordan det var vanlig å bygge og regler som gjaldt da
i boligomsetningen. boligen ble oppført (søknads琀椀dspunktet). Forhold som er vanlige for bygningens alder, slik som slitasje
e琀琀er normal bruk regnes ikke som avvik.
TEKNA
Tekna-teknisk-naturvitenskaplig forening
Hva inneholder 琀椀lstandsrapporten?
Den bygningssakkyndige undersøker rom og bygningsdeler slik det kommer frem av Forskri昀琀 琀椀l
avhendingsloven. Tilstandsrapporten inneholder bare avvik som den bygningssakkyndige kan se

---

[d046_d046 | Side [1]]

momenter gi TG2. Avvik under TG2 kan gis sjablongmessig anslag. BEFARINGEN
Rapporten gir en vurdering av byggverk og bygningsdeler som
iv)Tilstandsgrad 3, TG3:Store eller alvorlige avvik. Kra昀琀ige symptomer på bygningssakkyndig har observert, og som fremkommer av Forskri昀琀 琀椀l
forhold som man må regne med trenger utbedring straks eller innen kort avhendingsloven. Rapporten er likevel ingen garan琀椀 for at det ikke kan
琀椀d. Påvist funksjonssvikt eller sammenbrudd. Avvik under TG3 skal gis 昀椀nnes skjulte

---

[d046_d046 | Side [1]]
ngen, •Kontroll av fukt i konstruksjonen ved hulltaking i bad og vaskerom
Tegninger 01.04.2025 Gjennomgå琀琀 Nei er ikke bygningssakkyndiges ansvar. Rapporten beskriver avvik, altså en (våtrom), rom under terreng (kjelleretasje, underetasje og sokkeletasje)
琀椀lstand som er dårligere enn referansenivået. Rapporten framhever eller andre bygningsdeler skjer e琀琀er eiers aksept. Hulltaking av våtrom og
Samsvarserklæring 17.12.2025 oversendt fra eier Gjennomgå琀琀 Nei normalt ikke posi琀椀ve sider ved boligen ut over

---

[d046_d046 | Side [1]]
svikt eller sammenbrudd. Avvik under TG3 skal gis 昀椀nnes skjulte feil, skader og mangler. NS 3600:2018 (Teknisk
sjablongmessig anslag. 琀椀lstandsanalyse ved omsetning av bolig) har undersøkelsesnivå fra 1 琀椀l 3,
der undersøkelsesnivå 1 er det laveste og baseres på visuell observasjon.
v)Tilstandsgrad TGiU:Ikke undersøkt/ikke 琀椀lgjengelig for undersøkelse. Rapporten baseres på undersøkelsesnivå 1 med få unntak (våtrom og rom
under terreng). I praksis betyr de琀琀e at gjennomføringen av befaringen
• Ved TG0 og

---

[d046_d046 | Side [1]]
s er krav om at avviket må utbedres. De琀琀e kan
forbedret.
gjelde sluk, te琀琀esjikt og fall på bad og vaskerom, forhold som gjelder
sikkerhet mot brann, rekkverk, trapper, osv.
Tilstandsrapporten beskriver ikke hele boligen
BYGNINGSSAKKYNDIGE SER FOR EKSEMPEL IKKE PÅ
• vanlig slitasje og normal vedlikeholds琀椀lstand • bagatellmessige forhold som ikke påvirker bygningens bruk eller verdi vesentlig • etasjeskillere •
Rapportansvarlig 琀椀lleggsbygg slik som garasje, bod, anneks, naust også videre • utvendige

---

[d046_d046 | Side [1]]
r hvitmalte, to lags isolerglass. Enkeltstående røykvarslere med batteri.
32 33

## Side 18

OM EIENDOMMEN OM EIENDOMMEN
eller lignende) i boligens elektriske anlegg? er plassert i kontoret. Det er skrusikringer i sikringsskapet
Bod: ‑ Nei ‑ Utvendig ‑ Balkonger, terrasser og rom under balkonger med egen jordfeilsbryter, nytt sikringselement til
Ekstern bod, areal 5 m². Er det tegn til at det har vært termiske skader (tegn på | Det er påvist andre avvik: Markiseduk er revnet. Det må kjøkkenet, varmekabel

---

[d046_d046 | Side [1]]
kel utadslående. 2 lags glass og
brukes når delen er ny, men der dokumentasjon på faglig god u琀昀ørelse mangler. aluminiumsbekledning. TEKNISKE INSTALLASJONER Gå 琀椀l side
Vannrør fra bygge琀椀dspunkt i kobber, delvis innkasset og åpent på
TILSTANDSGRAD 2, TG2: VESENTLIGE AVVIK OG MINDRE AVVIK SOM ETTER NS 3600 GIR TG 2 Balkongkonstruksjon i stål, rekkverk i stål med plater, høyde 1,04 m. vegg. Stoppekraner er plassert i kasse på vegg i kontoret. Det er
Tremmer på gulvet, markise med manuell sveiv. Balkong

---

[d046_d046 | Side [1]]
155-1428 Befaringsdato: 17.12.2025 Side: 25 av 26
76 77

## Side 40

Ravnåsveien 29 H, 1254 OSLO Vestre Aker Takst og Eiendom AS
Gnr 185 - Bnr 59 Finnhaugveien 34
0301 OSLO 0760 OSLO
Tilstandsrapportens avgrensninger
UTTRYKK OG DEFINISJONER eiendommens verdi.
• Rom som ligger utenfor boenheten, men som eier har påvist og/eller
• Tilstand: Byggverkets eller bygningsdelens tekniske, funksjonelle eller opplyst at 琀椀lhører boenheten, er oppmålt og inkludert i BRA-e. Det er ikke
este琀椀ske status på et gi琀琀

---

[d046_d046 | Side [1]]
) så blir TG2 markert med en lysere farge.
INNVENDIG Gå 琀椀l side Mekanisk ven琀椀lasjon som er felles for bygget, ikke besik琀椀get.
TILSTANDSGRAD 3, TG3: STORE ELLER ALVORLIGE AVVIK Gulv med laminat og 昀氀iser. Avtrekksven琀椀ler i våtrom og wc. Avtrekksven琀椀ler i våtrom. Tillu昀琀 via
Denne 琀椀lstandsgraden brukes ved kra昀琀ige tegn på forhold som man må regne med trenger utbedring straks Vegger av malte plater og malte betongvegger. ven琀椀ler i vegger/spalteven琀椀ler i vinduer.
eller innen kort 琀椀d. Det er påvist

---

[d046_d046 | Side [1]]
185 - Bnr 59 Finnhaugveien 34
0301 OSLO 0760 OSLO 0301 OSLO 0760 OSLO
Kilder og vedlegg Tilstandsrapportens avgrensninger
Dokumenter ii) Forhold rundt brann, rømming, sikkerhet, for eksempel
STRUKTUR•REFERANSENIVÅ•TILSTANDSGRADER rekkverkshøyder/åpninger, ulovlige bruksendringer, brannceller mv.
Beskrivelse Dato Kommentar Status Sider Vedlagt
• Rapporten er basert på innholdskrav i Forskri昀琀 琀椀l avhendingslova • For skjulte konstruksjoner slik som vann og avløp uten dokumentasjon, er
(tryggere

---

[d046_d046 | Side [1]]
varmekilder under vinduer.
Det kan være avvik/skader som ikke er avdekket.
Laminat på betongdekke fra byggeår. Målt planhets-avvik i stue
gjennom hele rommet. Resultat i stua er 15 mm og i gang 12 mm. Sikringsskap er plassert i kontoret. Det er skrusikringer i
sikringsskapet med egen jordfeilsbryter, ny琀琀 sikringselement 琀椀l
Hva er et anslag på utbedringskostnad? Ingen umiddelbare kostnader Boligen ligger mer enn 3 etasjer over bakkenivå og radonmåling er kjøkkenet, varmekabel på badet. Det er delvis

---

[d046_d046 | Side [1]]
e. Det er ingen merknader 琀椀l delen.
WC med gulvstående toale琀琀, servant med e琀琀greps kran og skap
Malt inngangsdør 琀椀l leiligheten, elektronisk dørlås. Innadslående. under, speil på vegg over vasken. Malte vegger av gips og betong,
TILSTANDSGRAD 1, TG1: MINDRE AVVIK malt betonghimling. Gulvet har vinyl.
Bygningsdelen skal bare ha normal slitasje, og straks琀椀ltak skal ikke anses som nødvendig. Graden kan også NorDan hvitmalt balkongdør enkel utadslående. 2 lags glass og
brukes når delen er ny, men der

---

[d046_d046 | Side [1]]
 kan kun eie én
Borettslag Vedtekter/ husordensregler
feil eller mangler som ikke er avdekket. andel. Utleie av boligen krever styrets godkjenning og er
Øvre Ravnåsen Borettslag begrenset til maksimalt tre år, forutsatt at eier har bodd i Vedlagt salgsoppgaven.
Tilstandsrapporten beskriver byggverkets tekniske boligen i minst ett av de to siste årene. Unntak kan gis
tilstand. Det er ikke foretatt kontroll av de elektriske Organisasjonsnummer: 948167093 ved midlertidig fravær grunnet tungtveiende årsaker

---

[d046_d046 | Side [1]]
ar en del slitasjegrad utover det en kan på anlegg for vannbåren varme.
forvente.
Noe generell bruksslitasje på over昀氀ater. Kostnadses琀椀mat: Ingen umiddelbar kostnad
Innvendig > Etasjeskille/gulv mot grunn Gå til side
Det er målt høydeforskjell på mellom 15-30 mm
gjennom hele rommet. Tilstandsgrad 2 gis med
bakgrunn i standardens krav 琀椀l godkjente måleavvik.
Byggeår Kommentar
Tekniske installasjoner > Vannledninger Gå til side 1981 Fra Eiendomsverdi AS
Mer enn halvparten av forventet bruks琀椀d er passert

---

[d046_d046 | Side [1]]
t og Eiendom AS Ravnåsveien 29 H, 1254 OSLO Vestre Aker Takst og Eiendom AS
Gnr 185 - Bnr 59 Finnhaugveien 34 Gnr 185 - Bnr 59 Finnhaugveien 34
0301 OSLO 0760 OSLO 0301 OSLO 0760 OSLO
Tilstandsrapport Tilstandsrapport
Årstall: 2021 Kilde: Eier
Vurdering av avvik:
• Det er kun kull昀椀lterven琀椀lator på kjøkkenet og heller ikke andre forserte/mekaniske avtrekksløsninger fra kokesonen.
Konsekvens/琀椀ltak
• Det er vanskelig å etablere andre løsninger.
Hulltaging og fuktsøk
KJØKKEN
8. ETASJE > KJØKKEN
Over昀氀ater

---

[d046_d046 | Side [1]]
 og tjenesteyter. Tiltak mellom kr 100 000 - 300 000
Det er målt 17 mm fall fra topp 昀氀is foran dørterskel 琀椀l topp av
I rapporten skal det se琀琀es anslag for utbedringskostnad for TG3, Tiltak over kr 300 000 slukrist, dusjkabine琀琀et ble dra琀琀 frem for måling. Det er ukjent type Arealer Gå 琀椀l side
og slikt anslag kan også gis ved TG2. membran og sluk fra byggeåret.
Flislagt gulv med diagonalt lagt 20x20 昀氀iser, varmekabel og 昀氀islagte Forutsetninger og vedlegg Gå 琀椀l side
vegger, malt betonghimling.

---

[d046_d046 | Side [1]]
nfor
leilighetens/seksjonens/andelens vegger.
Tilstandsrapporten tar derfor ikke for seg bygningens fellesdeler
som utvendig takkonstruksjon, y琀琀ervegger, grunnmur,
drenering, fellesarealer innvendig og felles tekniske
installasjoner. Disse bygningsdelene er i rapporten ikke
琀椀lstandsvurdert, men kun beskrevet.
Takstmannen tar forbehold om at opplysninger gi琀琀 av
hjemmelshaver, eier eller kjentmann er korrekte. I 琀椀llegg
inneholder 琀椀lstandsrapporten opplysninger gi琀琀 av
hjemmelshaver.
Kunden/rekvirenten

---

[d046_d046 | Side [1]]
t ikke foreligger
hjemmeside godkjente og byggemeldte tegninger, eller når tegninger ikke stemmer med
i)Tilstandsgrad 0, TG0:Ingen avvik eller skader. I 琀椀llegg må bygningsdelen dagens bruk.
være 琀椀lnærmet ny, mindre enn 5 år, og det foreligger dokumentasjon på
Revisjoner faglig god u琀昀ørelse. • Bygningssakkyndig gir en forenklet vurdering av branntekniske forhold og
elektriske installasjoner i boligen dersom det er mer enn fem år siden sist
ii)Tilstandsgrad 1, TG1:Mindre avvik. Normal slitasje.

---

[d046_d046 | Side [1]]
er/spalteven琀椀ler i vinduer.
eller innen kort 琀椀d. Det er påvist funksjonssvikt eller sammenbrudd. Himlinger med malt betong. Høyde i stue er 2,4 m.
Over昀氀ater på vegger er malt i 2025 på gang, soverom 2 og soverom Fjernvarme, varmesentral ikke besik琀椀get av takstmann. Forsyner
IKKE UNDERSØKT/IKKE TILGJENGELIG FOR UNDERSØKELSE 3, kjøkkenet og i (琀椀dligere bod) kontor leiligheten med varme 琀椀l radiatorer og varmtvann.
Radiatorer som varmekilder under vinduer.
Det kan være avvik/skader som ikke er

---

[d046_d046 | Side [1]]
på 琀椀lstøtende
Konsekvensen ved å ikke utbedre avvikene kan være redusert brukervennlighet, u琀昀ordringer med møblering og økt slitasje på gulvbelegget. konstruksjoner.
Badet er i daglig bruk og fungerer slik det er, prises琀椀mat er for hvis badet skal oppgraderes. Det anbefales å ikke ta vegg dusjkabine琀琀et før membraner er
oppgradert.
Radon
Kostnadses琀椀mat: Over 300 000
Boligen ligger mer enn 3 etasjer over bakkenivå og radonmåling er ikke relavent.
Innvendige dører
Hvitmalte gla琀琀e innerdører. Nye

---

[d046_d046 | Side [1]]
 en underskudd på kr 11 121 795. Overskuddet plasseres på
i Oslo kommune.Andelsnr. 198 i Øvre Ravnåsen grunnkostnad på kr 299,‑ per måned kommer i tillegg til en høyrentekonto.
Opplistingen over er ikke uttømmende og du oppfordres Borettslag med orgnr. 948167093 felleskostnadene.
til å lese og sette deg grundig inn i alt salgsmateriell. Budsjettet for 2025 viser et forventet overskudd på kr 3
Det er forkjøpsrett for andelseiere i borettslaget og øvrige 533 920. Styret har vedtatt å øke felleskostnadene

---

[d046_d046 | Side [1]]
leie 178 800
Drift/vedlikehold ventilasjonsanlegg -45 184
Ekstra kjellerbod 21 600
Drift/vedlikehold parkeringsanlegg -23 475
Strøm/lys 1 200
Drift/vedlikehold garasjeanlegg -17 320
SUM INNKREVDE FELLESKOSTNADER 13 247 460
Drift/vedlikehold søppelanlegg -7 680
Egenandel forsikring -12 000
REDUKSJON GRUNNET TOMME LEIEFORHOLD
Kostnader dugnader -698
Parkering -67 250
SUM DRIFT OG VEDLIKEHOLD -1 661 529
Bod -7 350
SUM INNKREVDE FELLESKOSTNADER 13 172 860
Styret mener at det gjennomførte vedlikeholdet er

---

[d046_d046 | Side [1]]
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ betjening av andel fellesgjeld, garasjeplass, en
9 496,00 (Omkostninger totalt (uten grunnkostnad for TV/ internett fra Telia, samt à
Boligkjøperforsikring)) konto‑betaling for oppvarming. Kostnader for
18 796,00 (Omkostninger totalt (med oppvarming avregnes mot faktisk forbruk. Borettslaget
Boligkjøperforsikring)) har ikke individuell nedbetalingsordning (IN‑ordning) for
fellesgjeld. Endringer i rentenivået på borettslagets lån
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑

---

[d046_d046 | Side [1]]
ets lån
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ kan også påvirke størrelsen på felleskostnadene.
4 680 236,00 (Totalpris inkl. omkostninger (uten
Boligkjøperforsikring))
Kommunale avgifter
4 689 536,00 (Totalpris inkl. omkostninger (med
Boligkjøperforsikring)) Informasjon: Inkludert i felleskostnader
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑
Fellesgjeld
Kr 270 740
Bank: OBOS Boligkreditt AS
Lånenummer: 98207618837
Eierskiftegebyr
Restsaldo: 98 770,93
Kr 6725

---

[d046_d046 | Side [1]]
ilhører
DRIFT OG VEDLIKEHOLD
myndighetene og kan ikke disponeres fritt.
Elektro Nettverk AS -279 575
SUM STØRRE BYGNINGSMESSIGE VEDLIKEHOLD -279 575
NOTE: 2
Drift/vedlikehold bygninger -259 219
INNKREVDE FELLESKOSTNADER
Drift/vedlikehold VVS -102 955
Felleskostnader 12 229 254
Drift/vedlikehold elektro -86 991
Kabel-TV 626 806
Drift/vedlikehold utvendig anlegg -126 339
Parkeringsleie 189 800
Drift/vedlikehold brannsikring -700 094
Garasjeleie 178 800
Drift/vedlikehold ventilasjonsanlegg -45 184
Ekstra

---

[d046_d046 | Side [1]]
get og øvrige 533 920. Styret har vedtatt å øke felleskostnadene med
Selger
For ordens skyld nevner vi at TGIU står for tilstandsgrad OBOS‑medlemmer. Ny eier må godkjennes av styret, og 3,5 % fra 1. januar 2026.
ikke undersøkt, f.eks. fordi en del av bygget ikke har vært Aylin Desiree Karayazgan godkjenning kan kun nektes ved saklig grunn. Kun
tilgjengelig for inspeksjon. Disse delene kan dermed ha fysiske personer kan eie andeler, og man kan kun eie én
Borettslag Vedtekter/ husordensregler
feil eller

---

[d046_d046 | Side [1]]
ikkerheten. Borettslagets forsikringsselskap: Tryg Forsikring om salg er inngått.
gjenstand for konstant utvikling, det må derfor påregnes Det er også inngått en avtale om å etablere 13
at dagens anlegg ikke nødvendigvis er dimensjonert for elbil‑ladestasjoner, med forventet ferdigstillelse i første Polisenummer fellesforsikring: 8574968
Oppvarming
oppgradering av kjøkken med nye elektriske apparater, halvår 2025. Videre er det vedtatt å konkurranseutsette
rehabilitering av bad m/ varmekabler eller

---

[d046_d046 | Side [1]]
en til en hver tid
5-2 Borettslagets vedlikeholdsplikt gjeldende forsinkelsesrente etter lov av 17. desember 1976 nr 100.
(1) Borettslaget skal holde bygninger og eiendommen for øvrig i forsvarlig stand så langt
plikten ikke ligger på andelseierne. Vedlikeholdsplikten omfatter også utvendig vedlikehold 6-3 Borettslagets pantesikkerhet
av vinduer. For krav på dekning av felleskostnader og andre krav fra lagsforholdet har borettslaget en
lovbestemt panterett i andelen foran alle andre heftelser. Pantekravet

---

[d046_d046 | Side [1]]
 skriftlig til borettslaget. 6-2 Betaling av felleskostnader
(1) Felleskostnadene forfaller til betaling den 1. i hver måned. Borettslaget kan endre
(8) Ny eier av andelen har plikt til å utføre vedlikehold medregnet reparasjon og utskifting i felleskostnadene med èn måneds skriftlig varsel.
boligen, selv om det skulle vært utført av den forrige andelseieren.
(2) For felleskostnader som ikke blir betalt ved forfall, svarer andelseieren den til en hver tid
5-2 Borettslagets vedlikeholdsplikt gjeldende

---

[d046_d046 | Side [1]]
r
den enkelte bolig eller etter forbruk.
(6) Vedlikeholdsplikten omfatter også utbedring av tilfeldig skade, herunder skade påført
ved innbrudd og uvær. (3) Borettslagets kostnader til behandling og eventuell oppfølging av søknad om overlating
av bruk betales av den andelseier som har søkt, se pkt. 4-2 (6).
(7) Oppdager andelseieren skade i boligen som borettslaget er ansvarlig for å utbedre, plikter
andelseieren straks å melde fra skriftlig til borettslaget. 6-2 Betaling av felleskostnader
(1)

---

[d046_d046 | Side [1]]
skostnader: kr 5 814,‑
Omkostninger ‑ Oppvarming (à konto): kr 1 947,‑
‑ Telia Kollektiv Flex Universal 50: kr 299,‑
9 300,00 (Boligkjøperforsikring* (valgfritt)) ‑ Garasje: kr 100,‑
8 406,00 (Forhåndsvarsling forkjøpsrett)
545,00 (Tinglysingsgebyr ‑ hjemmel) Felleskostnadene dekker borettslagets ordinære
545,00 (Tinglysningsgebyr ‑ pantedokument) driftsutgifter, kommunale avgifter, bygningsforsikring,
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ betjening av andel fellesgjeld, garasjeplass,

---

[d046_d046 | Side [1]]
en enkelte andelseier er ansvarlig for felleskostnadene etter en nøkkel fastsatt ved
stiftelsen av borettslaget. Nøkkelen ligger fast og kan bare endres etter borettslagslovens
(5) Andelseieren skal holde boligen fri for insekter og skadedyr. § 5-19.
Ved mistanke om innsekter og skadedyr plikter andelseieren straks å melde fra skriftlig til
borettslaget. (2) Når særlige grunner taler for det, skal en kostnad likevel fordeles etter nytten for
den enkelte bolig eller etter forbruk.
(6) Vedlikeholdsplikten

---

[d046_d046 | Side [1]]
 Alle boliger skal ha periodisk Styret har vært aktivt med flere viktige prosjekter. I 2024 Forretningsfører: Obos forkjøp inngått, kan kjøper få laget en energiattest ved hjelp av
kontroll hvert 20 år og hytter/ fritidsboliger kontrolleres ble det installert et nytt brann‑ og nødlysanlegg i ekspert for selgers regning, innen ett år etter at avtale
hvert 30 år. El‑anlegget er en bygningsdel som er garasjeanlegget og fellesarealer for å øke sikkerheten. Borettslagets forsikringsselskap: Tryg Forsikring om

---

[d046_d046 | Side [1]]
NR. 948 167 093, KUNDENR. 474
RESULTATREGNSKAP BALANSE
Note 2024 2023
Note Regnskap Regnskap Budsjett Budsjett EIENDELER
2024 2023 2024 2025 ANLEGGSMIDLER
DRIFTSINNTEKTER: Bygninger 14 98 550 000 98 550 000
Innkrevde felleskostnader 2 13 172 860 15 984 160 13 344 000 13 628 000 Tomt 1 181 295 1 181 295
Innbetalinger 0 7 900 0 0 Aksjer og andeler 15 3 300 3 300
Ladeinntekter EL-bil 109 563 0 0 80 000 Miljøbankkonto, øremerket 137 281 329 325
Andre inntekter 3 241 100 0 0 0 SUM ANLEGGSMIDLER 99 871 876 100

---

[d046_d046 | Side [1]]
a.no
+47 472 65 457
TOTALPRIS EIEFORM
4 689 536,‑ Borettslag Med 12 års erfaring i eiendomsbransjen har hun
opparbeidet seg solid kompetanse og en trygghet i
FELLESKOSTNADER ANTALL SOVEROM faget som kommer både selgere og kjøpere til gode.
8 160,‑ pr. mnd 3
Hun er kjent for å være ærlig, tydelig og tillitsvekkende,
FELLESGJELD ETASJE
Kr 270 740,‑ 8
FELLESFORMUE BYGGEÅR
9 219,‑ 1981
6 7

## Side 5

BESKRIVELSE
Fin, romslig 4(5)‑roms
familieleilighet på toppen |
Sørøstvendt balkong med
herlig utsikt |

---

[d046_d046 | Side [1]]
ngsfører Eier av adkomstdokumenter
Egen parkeringsplass i felles garasjeanlegg, mulighet for elbillader.
8003/ØVRE RAVNÅSEN 948167093 8003 OBOS Karayazgan Aylin Desiree
BORETTSLAG Eiendomsforvaltning AS
Se grunnbokutskri昀琀 for 琀椀nglyste servitu琀琀er og he昀琀elser.
- org.nr 934261585
Innskudd, pålydende mm
Andelsnummer Opprinnelig innskudd Andel fellesformue Andel fellesgjeld
Forsikring
198 271 200 9 219 31.12.2024 270 739 08.01.2026
Selskap Avtalenr Type Forsikringssum Årlig premie
Kommentar
Tryg Forsikring

---

[d046_d046 | Side [1]]
nterer for overførsel til borettslaget hver måned og svømmehall, slalåmbakke, treningssentre, idrettshaller og
Adkomst
Type: Annuitetslån overtar deretter alt ansvar og risiko for eventuell flere fotballbaner. På Grønliåsen finner du lysløype,
Rentesats: 4,99% manglende innbetaling av felleskostnader. Avtale om løypenett videre inn i Østmarka og gode muligheter for På høyre side i annonsen finner du et kartutsnitt. Ved å
Restsaldo: 3 929 119 sikring av felleskostnader varer til den blir sagt opp av en

---

[d046_d046 | Side [1]]
ann
Eiendommen er 琀椀lkny琀琀et o昀昀entlig vannforsyning via private s琀椀kkledninger.
Befaring
Tilknytning avløp
Dato Til stede Rolle Eiendommen er 琀椀lkny琀琀et o昀昀entlig avløpsne琀琀 via private s琀椀kkledninger.
01.4.2025 Øivin Brækkan Taks琀椀ngeniør
Regulering
Aylin Desiree Karayazgan Kunde Eiendommen ligger i et område regulert 琀椀l boligbebyggelse. Disse reguleringsplanene er gjeldende:
V040182 Vedta琀琀: 04.01.1982, Formål: Grense for bebyggelse
17.12.2025 Øivin Brækkan Taks琀椀ngeniør
S-2446 Vedta琀琀: 22.02.1980,

---

[d046_d046 | Side [1]]
gen vil bli godkjent. BRA‑e ‑ Eksternt bruksareal. Areal av alle rom utenfor malt i 2025, samme år som det ble satt inn nye
Kjøper påtar seg risikoen for om omgjøringen er teknisk boenheten og som tilhører denne, for eksempel eksterne innerdører.
eiendommen
gjennomførbar og for om endringen vil bli godkjent av boder.
plan‑ og bygningsetaten. BRA‑b ‑ Innglasset balkong, altan, terrasser. Entré/ Gang:
Type eiendom
Fra inngangsdøren kommer man inn i en gang som
Eieform: Borettslag Andre arealer: knytter

---

[d046_d046 | Side [1]]
r: 948167093 ved midlertidig fravær grunnet tungtveiende årsaker som
Energimerke
installasjonene (el‑takst) selv om bygningssakkyndig kan arbeid eller utdanning.
ha knyttet noen kommentarer til elanlegget ut i fra helt Andelsnummer: 198 Energikarakter: Ikke angitt
enkle vurderingskriterier. Siden elanlegget ikke er Andelseiere må følge borettslagets vedtekter og
kontrollert er det sannsynlig at det siden kan avdekkes Velkommen til Øvre Ravnåsen Borettslag, et veldrevet husordensregler. Vesentlige endringer

---

[d046_d046 | Side [1]]
 og industri og/eller kontor med
brutto gulvflate inntil 800 m2. Gesimshøyden skal ikke være høyere enn cote + 90, og det kan bygges
inntil 3 normaletasjer a 3 m.
b) Antall biloppstillingsplasser fastsettes i forbindelse med bebyggelsesplanen, kfr. vedtekt til
bygningslovens paragraf 69 for Oslo kommune.
c) Bygningsrådet kan forby anlegg som ved lukt, røyk eller støy virker sjenerende for de tilgrensende
boligområder, samt lagerbedrifter og særlig trafikkskapende virksomheter.
§ 6. Friområder.
I

---

[d046_d046 | Side [1]]
struksjoner, primært i 琀椀lstøtende vegger 琀椀l bad, u琀昀orede -ROM eller S-ROM. De琀琀e betyr at rommet både kan være i strid med
kjellervegger og eventuelt i oppforede kjellergulv. teknisk forskri昀琀 og mangle godkjennelse i kommunen for den aktuelle
bruken, uten at de琀琀e vil få betydning for valg av arealkategori.
• Normal slitasjegrad: Forventet nedsli琀椀ng av materiale i over昀氀aten som er
basert på enkle visuelle observasjoner. Kan vurderes sammen med • Se øvrig informasjon om areal i rapporten, Norsk

---

[d046_d046 | Side [1]]
g.
Ravnåsveien 29 H
Tinglyste/andre forhold
Hjemmelshaver
Det er forkjøpsre琀琀 og styregodkjenning ved kjøp av boligen. Se info fra forretningsfører og vedtektene.
Øvre Ravnåsen Bore琀琀slag
Eventuelle andre forkjøpsre琀琀sklausuler: Se boligselskapets vedtekter.
Særskilte begrensninger/klausuler: Se boligselskapets vedtekter.
Andelsobjekt
Dyrehold: se vedtekter/husordensreglene 琀椀l Boligsameiet
Boligselskap Org.nr. Leil. nr. Forretningsfører Eier av adkomstdokumenter
Egen parkeringsplass i felles

---

[d046_d046 | Side [1]]
 sameiet/laget/selskapet (fellesareal eller i andre boliger) som rotter, mus,
maur eller lignende?
Nei Ja
28 Kjenner du til om det er/har vært skjeggkre i sameiet/laget/selskapet (fellesareal eller i andre boliger)?
Nei Ja
Initialer selger: ADK 3
46
52205220
:ecnerefer
tnemucoD
47

## Side 25

Tilleggskommentar
Jeg bekrefter at opplysningene er gitt etter beste skjønn. Jeg er kjent med at dersom jeg har gitt ufullstendige, uriktige eller misvisende
opplysninger om eiendommen, vil forsikringsselskapet kunne

---

[d046_d046 | Side [1]]
fasade?
Nei Ja
7 Kjenner du til om det er/har vært problemer med ildsted/skorstein/pipe f.eks. dårlig trekk, sprekker, pålegg, fyringsforbud eller lignende?
Nei Ja
8 Kjenner du til om det er/har vært f.eks. sprekker i mur, skjeve gulv eller lignende?
Nei Ja
9 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr på eiendommen som rotter, mus, maur eller lignende?
Nei Ja
10 Kjenner du til om det er/har vært skjeggkre i boligen?
Nei Ja
11 Kjenner du til om det er/har vært utført arbeid på

---

[d046_d046 | Side [1]]
 bruksendringer, brannceller og forhold som åpenbart kan påvirke helse, miljø og sikkerhet) •
fellesarealer (med mindre boligeier har vedlikeholdsplikt for fellesarealer og de琀琀e er kjent for bygningssakkyndig, eller fellesarealet har en særlig
琀椀lknytning 琀椀l boligen).
Øivin Brækkan
© iVerdi 2023 © Norsk takst 2023
Uavhengig Taks琀椀ngeniør
oivin.braekkan@gmail.com Malen 琀椀l denne rapporten, inkludert standardtekstene fra Norsk takst, er vernet e琀琀er åndsverkloven og kan kun beny琀琀es av medlemsforetakene i

---

[d046_d046 | Side [1]]
rdinære driftsutgifter, inkludert kommunale avgifter, dersom det foreligger saklig grunnlag, jf. borettslagsloven
garasjeplass (for de som har det) og en grunnkostnad for § 4‑4. Selger opplyser at det årlige strømforbruket er ca. 4 800
36 37

## Side 20

OM EIENDOMMEN OM EIENDOMMEN
kWh. Det er viktig å merke seg at energiforbruket kan GJELDER DENNE REGISTERENHETEN MED FLERE Korttidsutleie er tillatt i opptil 30 døgn per år uten
variere fra husstand til husstand. ** NEDKVITTERING Selger bærer risikoen for

---

[d046_d046 | Side [1]]
i næringssammenheng, regnes kjøpet ikke Bud som har forbehold om konfidensialitet ("hemmelige
Om informasjonsgrunnlaget som et forbrukerkjøp. bud") vil ikke bli formidlet til selger. Alle interessenter
Opplysninger om boligens størrelse og utforming, både Budgivning og selgers vurdering oppfordres til å inngi bud via eiendomsmegler.
innvendig og utvendig, bygger på informasjon hentet fra På grunn av ulike ansvarsforhold kan selger velge å Ved slike kjøp selges eiendommen «som den er», og
vedlagte

---

[d046_d046 | Side [1]]
holdsområder, samt asfalterte interne veier og planløsningen kan det synes mulig å endre den til en opplysning av areal på boliger. Velkommen til en lys og arealeffektiv toppleilighet med
parkeringsarealer. Tomten ligger i relativt skrånende 5‑roms ved å bruksendre boden som i dag brukes som De nye arealbegrepene er: en god planløsning og flere nylige oppgraderinger.
terreng. Oppgitt areal er hentet fra eiendomsregisteret. soverom. Det presiseres at muligheten for omgjøring ikke Boligen byr på et moderne

---

[d046_d046 | Side [1]]
 til kontor) er en 8. etasje
søknadspliktig bruksendring. BRA‑i: 103 m² Soverom 1, soverom 2, soverom 3, rom
kommentar til
Fasadeendring er en søknadspliktig bruksendring. som brukes som soverom/ kontor (ikke godkjent), bad,
Tomt
wc, stue og spisestue, kjøkken, entré, gang, gang liten
arealoppmåling
Tomtetype: Eiet Kjøper overtar eiendommen slik den fremstår på visning
med risiko og ansvaret for eventuelle pålegg fra TBA fordelt på etasje Areal oppmålt på befaring. Arealer er oppgitt etter

---

[d046_d046 | Side [1]]
egrenses ettersom boligen selges «som fravikes § 3‑3 andre ledd, og eventuelle arealavvik
Forsikring
registre som kommunen og Kartverket. Det er viktig at den er», noe som kan være av verdi for selger. Det vurderes etter § 3‑8.
Boligselgerforsikring: Selger har tegnet kjøper setter seg grundig inn i alle salgsdokumentene, understrekes at selger står fritt til å velge hvilket bud som
boligselgerforsikring som dekker selgers ansvar etter herunder salgsoppgave, tilstandsrapport og selgers aksepteres, og er

---

[d046_d046 | Side [1]]
nder salgsoppgave, tilstandsrapport og selgers aksepteres, og er ikke forpliktet til å velge det høyeste. Kjøperens plikt til å foreta grundige undersøkelser gjelder
avhendingsloven begrenset oppad kr. 20 000 000,‑. egenerklæring. Kjøper anses for å være kjent med også fullt ut for kjøpere som ikke omfattes av
Egenerklæringsskjema er vedlagt salgsoppgaven og forhold som er tydelig beskrevet i salgsdokumentene, Alle budgivere må ved inngivelse av bud opplyse om de forbrukerdefinisjonen.
interessenter

---

[d046_d046 | Side [1]]
rges Partenes rettigheter og plikter reguleres av avtalen kjøper selv dekke kostnader med inntil kr 10 000 (som en eventuelle forbehold som for eksempel usikker
Eiendomsmeglerforbund (NEF) følger salgsoppgaven, og mellom partene, og all tilgjengelig dokumentasjon som egenandel). finansiering, salg av nåværende bolig ol. Normalt vil ikke
gjelder som utgangspunkt for hva som inkluderes i salget forelå for kjøper før handelen ble inngått. I tillegg gjelder et bud med forbehold bli akseptert før forbeholdet

---

[d046_d046 | Side [1]]
m i henhold tilbakeholdt, eller gitt feilaktige opplysninger, og dette har inngi bud pr e‑post eller pr SMS til megler.
til gjeldende lover, forskrifter eller offentlige pålegg skal Slitasje og bruk påvirket avtalen.
følge med eiendommen, jf. avhendingsloven § 3‑4. Det må også forventes at eiendommer som har vært i Hvis budgiver skal by på eiendommen i henhold til en
Fastmonterte eller spesialtilpassede installasjoner og bruk, vil kunne ha tegn til slitasje og eventuelle skader. Dersom det er avvik mellom

---

[d046_d046 | Side [1]]
ed forbehold bli akseptert før forbeholdet er på forespørsel fra andre, opplyse om aktuelle bud på
avklart. Konferer gjerne med megler før bud inngis. eiendommen, herunder relevante forbehold. POSTNR: POSTSTED: POSTNR: POSTSTED:
MOB TLF: MOB TLF:
7.Kopi av budjournal skal gis til kjøper og selger uten
3.Megler skal legge til rette for en forsvarlig avvikling av
ugrunnet opphold etter at handel er kommet i stand.
budrunden. I forbrukerforhold (dvs. der selger er E-POST: E-POST:
Dersom det er viktig for

---

[d046_d046 | Side [1]]
At slike tillatelser/ attester eksisterer gir Leiligheten har en sørøstvendt balkong på 9 m². gulvareal som ikke er måleverdig på grunn av for stålkum. Alle hvitevarer er integrerte og består av
ingen garanti for at det ikke senere er utført arbeider som Leiligheten disponerer ekstern bod på 5 m² og eksempel skråtak eller lav himlingshøyde. Arealet oppgis stekeovn, platetopp, kjøl/ frys og oppvaskmaskin. For
ikke er byggemeldt/ godkjent. parkeringsplass i felles garasjeanlegg. som tilleggsinformasjon til

---

[d046_d046 | Side [1]]
gn til slitasje og eventuelle skader. Dersom det er avvik mellom oppgitt og faktisk innvendig kjøpsfullmakt må megler kontaktes og fullmakten
innredning som anses som varig tilknyttet boligen, følger Slik normal bruksslitasje og behov for vedlikehold må areal på minst 2 % og samtidig minst 1 kvadratmeter, kan oversendes før budgivning.
normalt med i handelen, med mindre det foreligger en kjøper påregne, og dette vil normalt ikke gi grunnlag for dette utløse rett til kompensasjon etter § 3‑3 i
særskilt

---

[d046_d046 | Side [1]]
119 sikring av felleskostnader varer til den blir sagt opp av en turorientering, noe som gir flotte rekreasjonsmuligheter klikke på kartet kan du enkelt planlegge din rute fra valgt
28 29

## Side 16

OM EIENDOMMEN OM EIENDOMMEN
startpunkt og helt frem til boligen. Det vil være skiltet ved vindu mot nord i kjøkkenet er fjernet. BRA‑e: 5 m² Bod
Bygningssakkyndigs
fellesvisninger for enkel orientering. Endring av tilleggsdel til hoveddel (bod til kontor) er en 8. etasje
søknadspliktig bruksendring. BRA‑i:

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "Bod innredet som soverom/kontor uten godkjenning fra bygningsmyndighetene. Dette er en ulovlig bruksendring som kan medføre pålegg om tilbakeføring og juridiske konsekvenser for kjøper.",
      "evidence": [
        "Bod innredet som soverom/kontor (egenerklæring spørsmål 18)",
        "Er innredning/utbyggingen godkjent hos bygningsmyndighetene? Nei (spørsmål 18.1)",
        "Endring av tilleggsdel til hoveddel (bod til kontor) er en søknadspliktig bruksendring",
        "Kjøper overtar eiendommen slik den fremstår på visning med risiko og ansvaret for eventuelle pålegg fra TBA",
        "rom som brukes som soverom/kontor (ikke godkjent)"
      ],
      "source_documents": [
        "d046_d046"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.98
    },
    {
      "risk_id": "R2",
      "description": "Høy fellesgjeld og flytende rente på borettslagets lån medfører risiko for økte felleskostnader. Borettslaget har ingen individuell nedbetalingsordning (IN-ordning), og renteendringer vil direkte påvirke felleskostnadene.",
      "evidence": [
        "Andel fellesgjeld: Kr 270 740",
        "Rentesats: 4,99% - Flytende rente",
        "Restsaldo på hovedlån: 3 929 119 / 18 298 974",
        "Borettslaget har ikke individuell nedbetalingsordning (IN-ordning) for fellesgjeld",
        "Endringer i rentenivået på borettslagets lån kan også påvirke størrelsen på felleskostnadene"
      ],
      "source_documents": [
        "d046_d046"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.93
    },
    {
      "risk_id": "R3",
      "description": "Styret har vedtatt å øke felleskostnadene med 3,5 % fra 1. januar 2026, noe som vil medføre økte månedlige utgifter for kjøper.",
      "evidence": [
        "Styret har vedtatt å øke felleskostnadene med 3,5 % fra 1. januar 2026",
        "Budsjettet for 2025 viser et forventet overskudd på kr 3 533 920"
      ],
      "source_documents": [
        "d046_d046"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R4",
      "description": "Badet har ukjent type membran og sluk fra byggeåret (1981), og kostnadsestimatet for utbedring er over kr 300 000. Det anbefales å ikke ta ned vegg ved dusjkabinettet før membraner er oppgradert.",
      "evidence": [
        "Det er ukjent type membran og sluk fra byggeåret (1981)",
        "Kostnadestimatet: Over 300 000",
        "Det anbefales å ikke ta vegg dusjkabinettet før membraner er oppgradert",
        "Det er målt 17 mm fall fra topp flis foran dørterskel til topp av slukrist",
        "Badet er i daglig bruk og fungerer slik det er, prisestimat er for hvis badet skal oppgraderes"
      ],
      "source_documents": [
        "d046_d046"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.96
    },
    {
      "risk_id": "R5",
      "description": "Vannledninger har passert mer enn halvparten av forventet brukstid. Rørene er fra byggeåret 1981 og er delvis innkasset, noe som gjør inspeksjon vanskelig og øker risikoen for skjulte lekkasjer.",
      "evidence": [
        "Mer enn halvparten av forventet brukstid er passert",
        "Byggeår: 1981 - Fra Eiendomsverdi AS",
        "Vannrør fra byggetidspunkt i kobber, delvis innkasset og åpent på vegg",
        "Stoppekraner er plassert i kasse på vegg i kontoret"
      ],
      "source_documents": [
        "d046_d046"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.91
    },
    {
      "risk_id": "R6",
      "description": "Planhetsmåling av gulv viser avvik på 15 mm i stue og 12 mm i gang, noe som overskrider standardens krav til godkjente måleavvik (TG2). Dette kan medføre utfordringer med møblering og økt slitasje på gulvbelegg.",
      "evidence": [
        "Det er målt høydeforskjell på mellom 15-30 mm gjennom hele rommet. Tilstandsgrad 2 gis med bakgrunn i standardens krav til godkjente måleavvik",
        "Målt planhets-avvik i stue gjennom hele rommet. Resultat i stua er 15 mm og i gang 12 mm",
        "Konsekvensen ved å ikke utbedre avvikene kan være redusert brukervennlighet, utfordringer med møblering og økt slitasje på gulvbelegget",
        "Laminat på betongdekke fra byggeår"
      ],
      "source_documents": [
        "d046_d046"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.89
    },
    {
      "risk_id": "R7",
      "description": "Kjøkkenet har kun kullfilterventilator og ingen forsert/mekanisk avtrekksløsning fra kokesonen. Det er vanskelig å etablere andre løsninger, noe som kan gi dårlig inneklima.",
      "evidence": [
        "Det er kun kullfilterventilator på kjøkkenet og heller ikke andre forserte/mekaniske avtrekksløsninger fra kokesonen",
        "Det er vanskelig å etablere andre løsninger",
        "Vindu mot nord i kjøkkenet er fjernet (reduserer naturlig ventilasjon ytterligere)"
      ],
      "source_documents": [
        "d046_d046"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.87
    },
    {
      "risk_id": "R8",
      "description": "Eiendommen er ikke energimerket, noe som er i strid med forskriftskrav. Kjøper har begrenset informasjon om boligens energieffektivitet.",
      "evidence": [
        "Energikarakter: Ikke angitt",
        "Energifarge: Ikke angitt",
        "Eiendommen er ikke energimerket. Det følger av forskrift...",
        "Kjøper kan få laget en energiattest ved hjelp av ekspert for selgers regning, innen ett år etter at avtale om salg er inngått"
      ],
      "source_documents": [
        "d046_d046"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R9",
      "description": "Elektrisk anlegg er ikke kontrollert (el-takst), og det er skrusikringer i sikringsskapet. Skrusikringer er en eldre løsning som kan utgjøre en sikkerhetsrisiko. Det er sannsynlig at avvik kan avdekkes ved fremtidig kontroll.",
      "evidence": [
        "Det er ikke foretatt kontroll av de elektriske installasjonene (el-takst)",
        "Det er skrusikringer i sikringsskapet med egen jordfeilsbryter",
        "Siden elanlegget ikke er kontrollert er det sannsynlig at det siden kan avdekkes feil",
        "El-anlegget er en bygningsdel som er gjenstand for konstant utvikling, det må derfor påregnes at dagens anlegg ikke nødvendigvis er dimensjonert for oppgradering av kjøkken med nye elektriske apparater, rehabilitering av bad m/varmekabler"
      ],
      "source_documents": [
        "d046_d046"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R10",
      "description": "Borettslaget har store tinglyste panteheftelser (fellesobligasjoner) på til sammen over NOK 145 millioner. Dersom eiendommen blir overbeheftet i salgsprosessen, kan handelen ikke gjennomføres uten pantefrafall fra kreditorene.",
      "evidence": [
        "FELLESOBL. FOR BOR.INNSK. Beløp: NOK 59 673 700",
        "PANTEDOKUMENT Beløp: NOK 22 000 000 - Panthaver: OBOS-BANKEN AS",
        "PANTEDOKUMENT Beløp: NOK 19 000 000 - Panthaver: OBOS-BANKEN AS",
        "PANTEDOKUMENT Beløp: NOK 45 000 000 - Panthaver: OBOS-BANKEN AS",
        "Dersom eiendommen skulle bli overbeheftet i salgsprosessen... er det en forutsetning for at handel skal kunne gjennomføres at kreditorene gir nødvendig pantefrafall"
      ],
      "source_documents": [
        "d046_d046"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.86
    },
    {
      "risk_id": "R11",
      "description": "Reguleringsplan S-2497 fastsetter at traseen for den gamle Østfoldbanen ('Smålensbanen') ligger i nærliggende friområde med bevaringsstatus, der endringer krever særskilt godkjenning. Området er under stadig utvikling, noe som kan påvirke bomiljøet.",
      "evidence": [
        "Reguleringsplan S-2497 fastsetter at traseen for den gamle Østfoldbanen ('Smålensbanen'), som ligger i nærliggende friområde, har en bevaringsstatus der endringer krever særskilt godkjenning",
        "Området er stadig under endring/utvikling, bygg settes opp, rehabiliteres og rives ned"
      ],
      "source_documents": [
        "d046_d046"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.72
    },
    {
      "risk_id": "R12",
      "description": "Borettslaget har legalpanterett i andelen for krav på inntil 2G for felleskostnader. Manglende innbetaling fra andre andelshavere eller fraflyttede/usolgte andeler kan medføre økte kostnader for øvrige andelseiere.",
      "evidence": [
        "Borettslaget har legalpant på inntil 2G som sikkerhet for betaling av felleskostnader",
        "Manglende innbetaling av fellesutgiftene som følge av andre andelshaveres mislighold, eller dersom borettslaget sitter på fraflyttede og/eller usolgte andeler, må dekkes av de øvrige andelseierne"
      ],
      "source_documents": [
        "d046_d046"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.83
    },
    {
      "risk_id": "R13",
      "description": "Markiseduk er revnet og må skiftes. Dette er et avvik som medfører en kostnad for kjøper.",
      "evidence": [
        "Det er påvist andre avvik: Markiseduk er revnet",
        "Andelseier er selv ansvarlig for vedlikehold av private markiser"
      ],
      "source_documents": [
        "d046_d046"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.78
    },
    {
      "risk_id": "R14",
      "description": "Selger har ikke utført radonmåling av boligen. Selv om boligen ligger høyt (over 3 etasjer over bakkenivå) og radonmåling anses som ikke relevant, er dette en potensiell risiko som ikke er formelt dokumentert.",
      "evidence": [
        "Selger har ikke utført radonmåling",
        "Boligen ligger mer enn 3 etasjer over bakkenivå og radonmåling er ikke relevant",
        "Radonmåling: År 2025, Verdi 0 (angitt i egenerklæring, men beskrevet som 'ikke aktuelt i leiligheten pga av beliggenhet')"
      ],
      "source_documents": [
        "d046_d046"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.35
    },
    {
      "risk_id": "R15",
      "description": "Begrenset adgang til utleie i borettslag. Utleie krever styrets godkjenning og er begrenset til maksimalt 3 år, forutsatt at eier har bodd i boligen i minst ett av de to siste årene. Korttidsutleie er tillatt i kun 30 døgn per år.",
      "evidence": [
        "Det er begrenset adgang til å leie ut bolig i borettslag",
        "Med styrets godkjenning og under visse vilkår kan boligen leies ut i inntil 3 år, jf. borettslagsloven § 5-3 til § 5-10",
        "Korttidsutleie er tillatt i opptil 30 døgn per år uten samtykke fra styret",
        "Utleie av boligen krever styrets godkjenning og er begrenset til maksimalt tre år, forutsatt at eier har bodd i boligen i minst ett av de to siste årene"
      ],
      "source_documents": [
        "d046_d046"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R16",
      "description": "Boligen er fra 1981 og har generell slitasje. Kjøper må forvente oppgraderinger på grunn av slitasje, fraværende vedlikehold, arbeider utført av ufaglærte og utidsmessige tekniske løsninger.",
      "evidence": [
        "Byggeår: 1981",
        "Kjøper må være forberedt på det må foretas oppgraderinger på grunn av slitasje, fraværende vedlikehold, arbeider som er utført av ufaglærte, utidsmessighet eller tekniske løsninger som ikke holder",
        "Noe generell bruksslitasje på overflater",
        "Laminat på betongdekke fra byggeår"
      ],
      "source_documents": [
        "d046_d046"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.86
    }
  ],
  "re_retrieval_queries": [
    "elbil ladestasjoner ferdigstillelse kostnad borettslag",
    "brannsikring brann nødlys anlegg kostnad vedlikehold",
    "fjernvarme varmesentral kostnader oppvarming avregning",
    "styregodkjenning ny eier forkjøpsrett prosess tidslinje",
    "vinduer tilstand alder utskifting kostnad",
    "balkong rekkverk høyde tilstand TG",
    "borettslagets økonomi underskudd gjeld soliditet",
    "asbest miljøfarlige stoffer byggeår 1981",
    "ventilasjon mekanisk felles anlegg tilstand",
    "forsikring boligselgerforsikring dekningsomfang unntak"
  ],
  "reasoning": "\nGjennomgang av alle 16 identifiserte risikoer mot dokumentevidensen:\n\n**R1 (Ulovlig bruksendring bod → kontor/soverom):** Meget godt dokumentert. Selger bekrefter eksplisitt i egenerklæring at bod er innredet som soverom/kontor og at dette IKKE er godkjent av bygningsmyndighetene. Salgsoppgaven presiserer at dette er søknadspliktig bruksendring og at kjøper overtar risikoen. Confidence økes marginalt til 0.98.\n\n**R2 (Fellesgjeld og flytende rente):** Godt dokumentert med konkrete tall. Andel fellesgjeld kr 270 740, rentesats 4,99% flytende, ingen IN-ordning. Confidence opprettholdes på 0.93.\n\n**R3 (Økning felleskostnader 3,5% fra jan 2026):** Direkte sitert fra dokumentet. Confidence økes til 0.97 da dette er et vedtatt faktum.\n\n**R4 (Bad - ukjent membran/sluk, kostnad over 300 000):** Meget godt dokumentert med TG3-vurdering, konkret kostnadsestimat og anbefaling om ikke å ta ned vegg. Confidence økes til 0.96.\n\n**R5 (Vannledninger - passert halvparten av brukstid):** Godt dokumentert. Kobberrør fra 1981, delvis innkasset. Confidence justeres til 0.91.\n\n**R6 (Gulvplanhet - avvik TG2):** Godt dokumentert med konkrete målinger og konsekvenser. Confidence opprettholdes på 0.89.\n\n**R7 (Kjøkken - kun kullfilterventilator):** Godt dokumentert. I tillegg fremgår det at vindu mot nord i kjøkkenet er fjernet, noe som forsterker risikoen. Confidence opprettholdes på 0.87.\n\n**R8 (Ikke energimerket):** Godt dokumentert. Dokumentet nevner også at kjøper kan kreve energiattest for selgers regning innen ett år. Dette er en reell risiko men med begrenset praktisk konsekvens. Confidence justeres ned til 0.85.\n\n**R9 (Elektrisk anlegg ikke kontrollert, skrusikringer):** Godt dokumentert. Dokumentet bekrefter skrusikringer og manglende el-takst. Confidence opprettholdes på 0.88.\n\n**R10 (Store panteheftelser):** Godt dokumentert med konkrete beløp. Total sum av pantedokumenter: 22M + 19M + 45M + 59,67M = ca 145,67M NOK. Risikoen er reell men standardisert for borettslag. Confidence justeres til 0.86.\n\n**R11 (Reguleringsplan S-2497, Smålensbanen):** Dokumentert, men risikoen er noe uklar i praktisk konsekvens. Bevaringsstatus betyr faktisk at friområdet er beskyttet mot utbygging, noe som kan sees som positivt. Risikoen for negativ påvirkning på bomiljøet er begrenset. Confidence justeres ned til 0.72.\n\n**R12 (Legalpant og solidaransvar):** Godt dokumentert. Standard borettslagsrisiko. Confidence opprettholdes på 0.83.\n\n**R13 (Markiseduk revnet):** Dokumentert, men dette er en svært begrenset risiko/kostnad. Dokumentet bekrefter også at andelseier er ansvarlig for egne markiser. Confidence justeres ned til 0.78 da dette er en bagatellmessig risiko.\n\n**R14 (Radonmåling ikke utført):** Her er evidensen motstridende. Selger sier \"ikke utført radonmåling\" men egenerklæringen viser \"År 2025, Verdi 0\" og forklarer at det ikke er relevant pga. beliggenhet over 3 etasjer. Boligen er i 8. etasje. Radon er reelt sett ikke en risiko her. Confidence reduseres kraftig til 0.35 - denne risikoen bør i praksis fjernes eller kraftig nedtones.\n\n**R15 (Begrenset utleieadgang):** Godt dokumentert. Standard borettslagsrisiko. Confidence justeres til 0.90.\n\n**R16 (Generell slitasje, byggeår 1981):** Godt dokumentert. Confidence justeres til 0.86.\n\n**Manglende risikoer som bør vurderes:**\n1. Elbil-ladestasjoner under etablering - kostnader og fremdrift uklar\n2. Fjernvarme - avregning mot faktisk forbruk kan gi uforutsigbare kostnader\n3. Forkjøpsrett - kan forsinke overtakelse (8406 kr gebyr nevnt)\n4. Vindu på kjøkken fjernet - kan være søknadspliktig fasadeendring\n5. Borettslagets regnskapsresultat 2024 viser underskudd på kr 11 121 795 - dette er en vesentlig risiko som ikke er identifisert\n6. Asbest/miljøfarlige materialer fra byggeår 1981 - ikke nevnt i dokumentene men relevant for bygg fra denne perioden\n7. Mekanisk ventilasjon felles for bygget - ikke besiktiget av takstmann\n"
}

## Raw Response
```json
{
  "id": "msg_01T9i8AQAP1A5Dy9cvPeo6w5",
  "container": null,
  "content": [
    {
      "id": "toolu_017KXHJByHnQoBk7p3RqZZkX",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "Bod innredet som soverom/kontor uten godkjenning fra bygningsmyndighetene. Dette er en ulovlig bruksendring som kan medføre pålegg om tilbakeføring og juridiske konsekvenser for kjøper.",
            "evidence": [
              "Bod innredet som soverom/kontor (egenerklæring spørsmål 18)",
              "Er innredning/utbyggingen godkjent hos bygningsmyndighetene? Nei (spørsmål 18.1)",
              "Endring av tilleggsdel til hoveddel (bod til kontor) er en søknadspliktig bruksendring",
              "Kjøper overtar eiendommen slik den fremstår på visning med risiko og ansvaret for eventuelle pålegg fra TBA",
              "rom som brukes som soverom/kontor (ikke godkjent)"
            ],
            "source_documents": [
              "d046_d046"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.98
          },
          {
            "risk_id": "R2",
            "description": "Høy fellesgjeld og flytende rente på borettslagets lån medfører risiko for økte felleskostnader. Borettslaget har ingen individuell nedbetalingsordning (IN-ordning), og renteendringer vil direkte påvirke felleskostnadene.",
            "evidence": [
              "Andel fellesgjeld: Kr 270 740",
              "Rentesats: 4,99% - Flytende rente",
              "Restsaldo på hovedlån: 3 929 119 / 18 298 974",
              "Borettslaget har ikke individuell nedbetalingsordning (IN-ordning) for fellesgjeld",
              "Endringer i rentenivået på borettslagets lån kan også påvirke størrelsen på felleskostnadene"
            ],
            "source_documents": [
              "d046_d046"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.93
          },
          {
            "risk_id": "R3",
            "description": "Styret har vedtatt å øke felleskostnadene med 3,5 % fra 1. januar 2026, noe som vil medføre økte månedlige utgifter for kjøper.",
            "evidence": [
              "Styret har vedtatt å øke felleskostnadene med 3,5 % fra 1. januar 2026",
              "Budsjettet for 2025 viser et forventet overskudd på kr 3 533 920"
            ],
            "source_documents": [
              "d046_d046"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R4",
            "description": "Badet har ukjent type membran og sluk fra byggeåret (1981), og kostnadsestimatet for utbedring er over kr 300 000. Det anbefales å ikke ta ned vegg ved dusjkabinettet før membraner er oppgradert.",
            "evidence": [
              "Det er ukjent type membran og sluk fra byggeåret (1981)",
              "Kostnadestimatet: Over 300 000",
              "Det anbefales å ikke ta vegg dusjkabinettet før membraner er oppgradert",
              "Det er målt 17 mm fall fra topp flis foran dørterskel til topp av slukrist",
              "Badet er i daglig bruk og fungerer slik det er, prisestimat er for hvis badet skal oppgraderes"
            ],
            "source_documents": [
              "d046_d046"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.96
          },
          {
            "risk_id": "R5",
            "description": "Vannledninger har passert mer enn halvparten av forventet brukstid. Rørene er fra byggeåret 1981 og er delvis innkasset, noe som gjør inspeksjon vanskelig og øker risikoen for skjulte lekkasjer.",
            "evidence": [
              "Mer enn halvparten av forventet brukstid er passert",
              "Byggeår: 1981 - Fra Eiendomsverdi AS",
              "Vannrør fra byggetidspunkt i kobber, delvis innkasset og åpent på vegg",
              "Stoppekraner er plassert i kasse på vegg i kontoret"
            ],
            "source_documents": [
              "d046_d046"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.91
          },
          {
            "risk_id": "R6",
            "description": "Planhetsmåling av gulv viser avvik på 15 mm i stue og 12 mm i gang, noe som overskrider standardens krav til godkjente måleavvik (TG2). Dette kan medføre utfordringer med møblering og økt slitasje på gulvbelegg.",
            "evidence": [
              "Det er målt høydeforskjell på mellom 15-30 mm gjennom hele rommet. Tilstandsgrad 2 gis med bakgrunn i standardens krav til godkjente måleavvik",
              "Målt planhets-avvik i stue gjennom hele rommet. Resultat i stua er 15 mm og i gang 12 mm",
              "Konsekvensen ved å ikke utbedre avvikene kan være redusert brukervennlighet, utfordringer med møblering og økt slitasje på gulvbelegget",
              "Laminat på betongdekke fra byggeår"
            ],
            "source_documents": [
              "d046_d046"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.89
          },
          {
            "risk_id": "R7",
            "description": "Kjøkkenet har kun kullfilterventilator og ingen forsert/mekanisk avtrekksløsning fra kokesonen. Det er vanskelig å etablere andre løsninger, noe som kan gi dårlig inneklima.",
            "evidence": [
              "Det er kun kullfilterventilator på kjøkkenet og heller ikke andre forserte/mekaniske avtrekksløsninger fra kokesonen",
              "Det er vanskelig å etablere andre løsninger",
              "Vindu mot nord i kjøkkenet er fjernet (reduserer naturlig ventilasjon ytterligere)"
            ],
            "source_documents": [
              "d046_d046"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.87
          },
          {
            "risk_id": "R8",
            "description": "Eiendommen er ikke energimerket, noe som er i strid med forskriftskrav. Kjøper har begrenset informasjon om boligens energieffektivitet.",
            "evidence": [
              "Energikarakter: Ikke angitt",
              "Energifarge: Ikke angitt",
              "Eiendommen er ikke energimerket. Det følger av forskrift...",
              "Kjøper kan få laget en energiattest ved hjelp av ekspert for selgers regning, innen ett år etter at avtale om salg er inngått"
            ],
            "source_documents": [
              "d046_d046"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R9",
            "description": "Elektrisk anlegg er ikke kontrollert (el-takst), og det er skrusikringer i sikringsskapet. Skrusikringer er en eldre løsning som kan utgjøre en sikkerhetsrisiko. Det er sannsynlig at avvik kan avdekkes ved fremtidig kontroll.",
            "evidence": [
              "Det er ikke foretatt kontroll av de elektriske installasjonene (el-takst)",
              "Det er skrusikringer i sikringsskapet med egen jordfeilsbryter",
              "Siden elanlegget ikke er kontrollert er det sannsynlig at det siden kan avdekkes feil",
              "El-anlegget er en bygningsdel som er gjenstand for konstant utvikling, det må derfor påregnes at dagens anlegg ikke nødvendigvis er dimensjonert for oppgradering av kjøkken med nye elektriske apparater, rehabilitering av bad m/varmekabler"
            ],
            "source_documents": [
              "d046_d046"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R10",
            "description": "Borettslaget har store tinglyste panteheftelser (fellesobligasjoner) på til sammen over NOK 145 millioner. Dersom eiendommen blir overbeheftet i salgsprosessen, kan handelen ikke gjennomføres uten pantefrafall fra kreditorene.",
            "evidence": [
              "FELLESOBL. FOR BOR.INNSK. Beløp: NOK 59 673 700",
              "PANTEDOKUMENT Beløp: NOK 22 000 000 - Panthaver: OBOS-BANKEN AS",
              "PANTEDOKUMENT Beløp: NOK 19 000 000 - Panthaver: OBOS-BANKEN AS",
              "PANTEDOKUMENT Beløp: NOK 45 000 000 - Panthaver: OBOS-BANKEN AS",
              "Dersom eiendommen skulle bli overbeheftet i salgsprosessen... er det en forutsetning for at handel skal kunne gjennomføres at kreditorene gir nødvendig pantefrafall"
            ],
            "source_documents": [
              "d046_d046"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.86
          },
          {
            "risk_id": "R11",
            "description": "Reguleringsplan S-2497 fastsetter at traseen for den gamle Østfoldbanen ('Smålensbanen') ligger i nærliggende friområde med bevaringsstatus, der endringer krever særskilt godkjenning. Området er under stadig utvikling, noe som kan påvirke bomiljøet.",
            "evidence": [
              "Reguleringsplan S-2497 fastsetter at traseen for den gamle Østfoldbanen ('Smålensbanen'), som ligger i nærliggende friområde, har en bevaringsstatus der endringer krever særskilt godkjenning",
              "Området er stadig under endring/utvikling, bygg settes opp, rehabiliteres og rives ned"
            ],
            "source_documents": [
              "d046_d046"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.72
          },
          {
            "risk_id": "R12",
            "description": "Borettslaget har legalpanterett i andelen for krav på inntil 2G for felleskostnader. Manglende innbetaling fra andre andelshavere eller fraflyttede/usolgte andeler kan medføre økte kostnader for øvrige andelseiere.",
            "evidence": [
              "Borettslaget har legalpant på inntil 2G som sikkerhet for betaling av felleskostnader",
              "Manglende innbetaling av fellesutgiftene som følge av andre andelshaveres mislighold, eller dersom borettslaget sitter på fraflyttede og/eller usolgte andeler, må dekkes av de øvrige andelseierne"
            ],
            "source_documents": [
              "d046_d046"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.83
          },
          {
            "risk_id": "R13",
            "description": "Markiseduk er revnet og må skiftes. Dette er et avvik som medfører en kostnad for kjøper.",
            "evidence": [
              "Det er påvist andre avvik: Markiseduk er revnet",
              "Andelseier er selv ansvarlig for vedlikehold av private markiser"
            ],
            "source_documents": [
              "d046_d046"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.78
          },
          {
            "risk_id": "R14",
            "description": "Selger har ikke utført radonmåling av boligen. Selv om boligen ligger høyt (over 3 etasjer over bakkenivå) og radonmåling anses som ikke relevant, er dette en potensiell risiko som ikke er formelt dokumentert.",
            "evidence": [
              "Selger har ikke utført radonmåling",
              "Boligen ligger mer enn 3 etasjer over bakkenivå og radonmåling er ikke relevant",
              "Radonmåling: År 2025, Verdi 0 (angitt i egenerklæring, men beskrevet som 'ikke aktuelt i leiligheten pga av beliggenhet')"
            ],
            "source_documents": [
              "d046_d046"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.35
          },
          {
            "risk_id": "R15",
            "description": "Begrenset adgang til utleie i borettslag. Utleie krever styrets godkjenning og er begrenset til maksimalt 3 år, forutsatt at eier har bodd i boligen i minst ett av de to siste årene. Korttidsutleie er tillatt i kun 30 døgn per år.",
            "evidence": [
              "Det er begrenset adgang til å leie ut bolig i borettslag",
              "Med styrets godkjenning og under visse vilkår kan boligen leies ut i inntil 3 år, jf. borettslagsloven § 5-3 til § 5-10",
              "Korttidsutleie er tillatt i opptil 30 døgn per år uten samtykke fra styret",
              "Utleie av boligen krever styrets godkjenning og er begrenset til maksimalt tre år, forutsatt at eier har bodd i boligen i minst ett av de to siste årene"
            ],
            "source_documents": [
              "d046_d046"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R16",
            "description": "Boligen er fra 1981 og har generell slitasje. Kjøper må forvente oppgraderinger på grunn av slitasje, fraværende vedlikehold, arbeider utført av ufaglærte og utidsmessige tekniske løsninger.",
            "evidence": [
              "Byggeår: 1981",
              "Kjøper må være forberedt på det må foretas oppgraderinger på grunn av slitasje, fraværende vedlikehold, arbeider som er utført av ufaglærte, utidsmessighet eller tekniske løsninger som ikke holder",
              "Noe generell bruksslitasje på overflater",
              "Laminat på betongdekke fra byggeår"
            ],
            "source_documents": [
              "d046_d046"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.86
          }
        ],
        "re_retrieval_queries": [
          "elbil ladestasjoner ferdigstillelse kostnad borettslag",
          "brannsikring brann nødlys anlegg kostnad vedlikehold",
          "fjernvarme varmesentral kostnader oppvarming avregning",
          "styregodkjenning ny eier forkjøpsrett prosess tidslinje",
          "vinduer tilstand alder utskifting kostnad",
          "balkong rekkverk høyde tilstand TG",
          "borettslagets økonomi underskudd gjeld soliditet",
          "asbest miljøfarlige stoffer byggeår 1981",
          "ventilasjon mekanisk felles anlegg tilstand",
          "forsikring boligselgerforsikring dekningsomfang unntak"
        ],
        "reasoning": "\nGjennomgang av alle 16 identifiserte risikoer mot dokumentevidensen:\n\n**R1 (Ulovlig bruksendring bod → kontor/soverom):** Meget godt dokumentert. Selger bekrefter eksplisitt i egenerklæring at bod er innredet som soverom/kontor og at dette IKKE er godkjent av bygningsmyndighetene. Salgsoppgaven presiserer at dette er søknadspliktig bruksendring og at kjøper overtar risikoen. Confidence økes marginalt til 0.98.\n\n**R2 (Fellesgjeld og flytende rente):** Godt dokumentert med konkrete tall. Andel fellesgjeld kr 270 740, rentesats 4,99% flytende, ingen IN-ordning. Confidence opprettholdes på 0.93.\n\n**R3 (Økning felleskostnader 3,5% fra jan 2026):** Direkte sitert fra dokumentet. Confidence økes til 0.97 da dette er et vedtatt faktum.\n\n**R4 (Bad - ukjent membran/sluk, kostnad over 300 000):** Meget godt dokumentert med TG3-vurdering, konkret kostnadsestimat og anbefaling om ikke å ta ned vegg. Confidence økes til 0.96.\n\n**R5 (Vannledninger - passert halvparten av brukstid):** Godt dokumentert. Kobberrør fra 1981, delvis innkasset. Confidence justeres til 0.91.\n\n**R6 (Gulvplanhet - avvik TG2):** Godt dokumentert med konkrete målinger og konsekvenser. Confidence opprettholdes på 0.89.\n\n**R7 (Kjøkken - kun kullfilterventilator):** Godt dokumentert. I tillegg fremgår det at vindu mot nord i kjøkkenet er fjernet, noe som forsterker risikoen. Confidence opprettholdes på 0.87.\n\n**R8 (Ikke energimerket):** Godt dokumentert. Dokumentet nevner også at kjøper kan kreve energiattest for selgers regning innen ett år. Dette er en reell risiko men med begrenset praktisk konsekvens. Confidence justeres ned til 0.85.\n\n**R9 (Elektrisk anlegg ikke kontrollert, skrusikringer):** Godt dokumentert. Dokumentet bekrefter skrusikringer og manglende el-takst. Confidence opprettholdes på 0.88.\n\n**R10 (Store panteheftelser):** Godt dokumentert med konkrete beløp. Total sum av pantedokumenter: 22M + 19M + 45M + 59,67M = ca 145,67M NOK. Risikoen er reell men standardisert for borettslag. Confidence justeres til 0.86.\n\n**R11 (Reguleringsplan S-2497, Smålensbanen):** Dokumentert, men risikoen er noe uklar i praktisk konsekvens. Bevaringsstatus betyr faktisk at friområdet er beskyttet mot utbygging, noe som kan sees som positivt. Risikoen for negativ påvirkning på bomiljøet er begrenset. Confidence justeres ned til 0.72.\n\n**R12 (Legalpant og solidaransvar):** Godt dokumentert. Standard borettslagsrisiko. Confidence opprettholdes på 0.83.\n\n**R13 (Markiseduk revnet):** Dokumentert, men dette er en svært begrenset risiko/kostnad. Dokumentet bekrefter også at andelseier er ansvarlig for egne markiser. Confidence justeres ned til 0.78 da dette er en bagatellmessig risiko.\n\n**R14 (Radonmåling ikke utført):** Her er evidensen motstridende. Selger sier \"ikke utført radonmåling\" men egenerklæringen viser \"År 2025, Verdi 0\" og forklarer at det ikke er relevant pga. beliggenhet over 3 etasjer. Boligen er i 8. etasje. Radon er reelt sett ikke en risiko her. Confidence reduseres kraftig til 0.35 - denne risikoen bør i praksis fjernes eller kraftig nedtones.\n\n**R15 (Begrenset utleieadgang):** Godt dokumentert. Standard borettslagsrisiko. Confidence justeres til 0.90.\n\n**R16 (Generell slitasje, byggeår 1981):** Godt dokumentert. Confidence justeres til 0.86.\n\n**Manglende risikoer som bør vurderes:**\n1. Elbil-ladestasjoner under etablering - kostnader og fremdrift uklar\n2. Fjernvarme - avregning mot faktisk forbruk kan gi uforutsigbare kostnader\n3. Forkjøpsrett - kan forsinke overtakelse (8406 kr gebyr nevnt)\n4. Vindu på kjøkken fjernet - kan være søknadspliktig fasadeendring\n5. Borettslagets regnskapsresultat 2024 viser underskudd på kr 11 121 795 - dette er en vesentlig risiko som ikke er identifisert\n6. Asbest/miljøfarlige materialer fra byggeår 1981 - ikke nevnt i dokumentene men relevant for bygg fra denne perioden\n7. Mekanisk ventilasjon felles for bygget - ikke besiktiget av takstmann\n"
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
    "input_tokens": 21250,
    "output_tokens": 5740,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
