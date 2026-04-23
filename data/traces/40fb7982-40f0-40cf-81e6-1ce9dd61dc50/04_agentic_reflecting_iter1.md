# Trace: agentic_reflecting_iter1
- **Run ID:** 40fb7982-40f0-40cf-81e6-1ce9dd61dc50
- **Tidspunkt:** 2026-03-25T03:29:49.954270+00:00
- **Varighet:** 95.69s
- **Input tokens:** 18906
- **Output tokens:** 5068

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
Risiko 1: Planlagt rehabilitering av fasade med ukjent kostnad – risiko for økte felleskostnader og fellesgjeld
  Confidence: 0.97
  Evidens: Det gjøres oppmerksom på at borettslaget er i gang med planlegging av rehabilitering, men det er per nå ikke tatt stilling til hva som skal inngå i en eventuell rehabilitering.; Rehabilitering av fasade vil bli vurdert på kommende årsmøte i mai. Det er per tid ikke vedtatt rehabilitering og det foreligger ikke et kostnadsestimat på dette, men kjøper må påregne at felleskostnadene og fellesgjelden vil øke som følge av dette.

Risiko 2: Planlagt økning av felleskostnader med 7,5 % fra 01.01.2027
  Confidence: 0.97
  Evidens: Felleskostnadene kan bli besluttet å øke etter utarbeidelsen av salgsoppgaven. Styreleder opplyser om at det er planlagt å øke felleskostnadene med 7,5 % pr 01.01.2027.

Risiko 3: Eiendommen ligger i rød og gul støysone – risiko for støyplager fra veistøy
  Confidence: 0.95
  Evidens: Gul støysone. Veistøy, berøringsgrad 37,5%; Rød støysone. Veistøy, berøringsgrad 11,6%; Hele eller deler av eiendommen antas å være berørt av støy fra veitrafikk over grenseverdier gitt av statlige myndigheter og i kommuneplanens bestemmelser.

Risiko 4: Eiendommen ligger i faresone for ras
  Confidence: 0.85
  Evidens: Faresone. Ras, berøringsgrad 0,7%

Risiko 5: TG2 på vinduer og dører grunnet alder og slitasje – risiko for punkterte glass og behov for utskifting
  Confidence: 0.95
  Evidens: Vinduer og dører TG 2 pga alder/slitasje.; Karmer er værslitte utvendig. Med bakgrunn i alder vil det være risiko for at flere vinduer er, eller vil punktere.; Det ble ikke avdekket punkterte glass på befaringsdagen.

Risiko 6: TG2 på avløpsrør grunnet alder på felles hovedstamme – risiko for lekkasje og kostbare utbedringer
  Confidence: 0.93
  Evidens: Avløpsrør TG 2 pga alder på felles hovedstamme.

Risiko 7: TG2 på vannbåren varme grunnet alder – risiko for svikt og behov for utbedring
  Confidence: 0.92
  Evidens: Vannbåren varme grunnet alder.; Det ble ikke registrert behov for tiltak, men med tanke på alder kan skader plutselig oppstå på anlegg av eldre årgang.

Risiko 8: Planløsning stemmer ikke overens med originale byggetegninger – risiko for ulovlige forhold og komplikasjoner ved fremtidig salg eller byggesak
  Confidence: 0.9
  Evidens: Det gjøres oppmerksom på at dagens planløsning ikke stemmer overens med de originale byggetegningene. Boden med inngang fra soverommet hadde opprinnelig tilkomst fra mellomgangen som går inn til...

Risiko 9: Ferdigattest og samsvar med byggetillatelse ikke kontrollert – risiko for ulovlige forhold
  Confidence: 0.88
  Evidens: Er det manglende samsvar mellom dagens bruk og godkjente byggetegninger? Ikke kontrollert; Er det manglende ferdigattest / midlertidig brukstillatelse? Ikke kontrollert

Risiko 10: Selger har ikke tegnet boligselgerforsikring – kjøper har svakere vern ved eventuelle skjulte feil og mangler
  Confidence: 0.92
  Evidens: Boligselgerforsikring: Selger har ikke tegnet boligselgerforsikring.

Risiko 11: Ekstern bod disponeres på borettslagets fellesareal og kan omdisponeres av borettslaget – risiko for tap av boden
  Confidence: 0.93
  Evidens: Det gjøres særskilt oppmerksom på at boden som disponeres i 1. etasje av denne andelen, ligger på borettslagets fellesareal. Borettslaget kan på et senere tidspunkt omdisponere bruken av arealet. Derfor er bodens areal ikke medregnet i...

Risiko 12: Borettslaget har høy samlet fellesgjeld – risiko for økte kostnader for andelseiere ved mislighold fra andre andelshavere
  Confidence: 0.88
  Evidens: Borettslaget har en samlet fellesgjeld per 16.01.2026 på kr 17 897 929,- fordelt på andelene.; Manglende innbetaling av fellesutgiftene som følge av andre andelshaveres mislighold, eller dersom borettslaget sitter på fraflyttede og/eller usolgte andeler, må dekkes av de øvrige andelseierne.

Risiko 13: Selger har eid boligen i kun 3 måneder – kort eiertid kan indikere ukjente forhold ved boligen og gir begrenset kjennskap til eventuelle feil
  Confidence: 0.82
  Evidens: Når kjøpte du boligen? År 2026; Antall år 0; Antall måneder 3

Risiko 14: El-anlegget er kun forenklet kontrollert av bygningssakkyndig – risiko for skjulte feil og mangler i el-anlegget
  Confidence: 0.85
  Evidens: El-anlegget kan ha feil og mangler som en slik forenklet undersøkelse ikke vil avdekke. Vær derfor oppmerksom...; Tilstandsgraden er vurdert ut fra den forenklede og begrensede kontrollen som forskriften inneholder.

Risiko 15: Tomten er festet (ikke eid av borettslaget) – risiko knyttet til festeavgift og fremtidige festebetingelser
  Confidence: 0.88
  Evidens: Deler av lagets tomt er festet. Tomten er felles for borettslaget.; TOMTEAREAL 8561.5 m² (festet)

Risiko 16: Pågående revisjon av kommuneplanens arealdel (KPA 2027) – risiko for endringer i arealbruk og fremtidige byggesaker i området
  Confidence: 0.75
  Evidens: PlanID: 71740000. Kommuneplanens arealdel KPA 2027. Bystyret legger til grunn at revisjon av KPA-bestemmelsene skal sluttføres med vedtak Bystyret i første kvartal 2027.; Hovedmålet med revisjon av KPA-bestemmelsene er forenkling, fortgang og forutsigbarhet i plan- og byggesaksprosesser.

Risiko 17: Begrenset adgang til utleie i borettslag – risiko for at kjøper ikke kan leie ut boligen fritt
  Confidence: 0.88
  Evidens: Adgang til utleie: Det er begrenset adgang til å leie ut bolig i borettslag. Med styrets godkjenning og under visse vilkår kan boligen leies ut i inntil 3 år.; Korttidsutleie er tillatt i opptil 30 døgn per år uten samtykke fra styret.

Risiko 18: Radonmåling ikke utført – risiko for forhøyede radonnivåer i boligen
  Confidence: 0.78
  Evidens: 21 Er det foretatt radonmåling? Nei Ja

Risiko 19: Innflyttingstillatelse gitt på vilkår med provisoriske sikringstiltak – risiko for at vilkår ikke er fullt ut oppfylt
  Confidence: 0.75
  Evidens: Innflyttingstillatelsen ble gitt på følgende vilkår: 1. Det må utføres provisoriske sikringstiltak. Således må 1 utvendig materialheis fjernes, en annen utvendig heis skjermes. 2. Provisorisk...

Dokumentkontekst:
[d127_d127 | Side [1]]
en vurdering av
boligens tilbehør, som hvitevarer, brunevarer og annet inventar. Dette gjelder også om tilbehøret er
integrert.
Struktur og referansenivå
Normalt vil referansenivået være byggeskikken og tilstanden ved byggeåret for boligen eller
bygningsdelen. Rapporten beskriver avvik, altså en tilstand som er dårligere enn referansenivået.
Rapporten framhever normalt ikke positive sider ved boligen ut over det som kommer frem av
tilstandsgraden på rom og bygningsdeler.
Ved tilstandsgrad 0 og 1 gis det

---

[d127_d127 | Side [1]]
ten Tilstandsrapporten er utarbeidet i henhold til forskrift til avhendingslova (Tryggere bolighandel) av 8. juni
2021 nr. 1850, slik forskriften er endret ved forskrift av 16. desember 2025 nr. 2614. Tilstandsgrader i
rapporten er fastsatt i tråd med kriteriene i NS 3600:2018
Formålet med rapporten er å kartlegge boligens tekniske tilstand med tanke på behov for tiltak, samt å
vise resultatene av en utført tilstandsanalyse for å bidra til økt trygghet og redusert konfliktnivå ved
eierskifte.
Rapporten

---

[d127_d127 | Side [1]]
en skal bare ha normal slitasje, og strakstiltak skal ikke anses som nødvendig.
TG-1
Graden kan også brukes når delen er ny, men der dokumentasjon på faglig god utførelse
mangler.
Tilstandsgrad 2: Bygningsdelen har vesentlige avvik
Bygningsdelen skal enten ha feil utførelse, en skade eller symptomer på skade, sterk
TG-2
slitasje eller nedsatt funksjon. Graden gis når bygningsdelen trenger vedlikehold eller
tiltak i nær fremtid. Graden skal også brukes når delen er gammel og det er grunn til å
varsle om

---

[d127_d127 | Side [1]]
 også brukes når delen er gammel og det er grunn til å
varsle om faren for skader på grunn av alderen, eller når det er grunn til å overvåke delen
spesielt på grunn av fare for større skader eller følgeskader
Tilstandsgrad 3: Store eller alvorlige avvik
Bygningsdelen har kraftige symptomer på forhold som man må regne med trenger
TG-3
utbedring straks eller innen kort tid. Graden skal også brukes ved påvist funksjonssvikt
eller sammenbrudd
Tilstandsgrad ikke undersøkt (TGIU) skal kun brukes unntaksvis.

---

[d127_d127 | Side [1]]
graden på rom og bygningsdeler.
Ved tilstandsgrad 0 og 1 gis det normalt ingen begrunnelse for valg av tilstandsgrad, fordi bygningen eller
bygningsdelen da bare har normal slitasje.
Hvis et rom eller en bygningsdel gis tilstandsgrad 2 eller 3 skal den bygningssakkyndige redegjøre for
årsaken til og konsekvensen av dette. Den bygningssakkyndige skal også gi et sjablongmessig anslag på
hva det vil koste å utbedre rom eller bygningsdeler som gis tilstandsgrad 3.
Takstrapporten Kunden/rekvirenten skal lese

---

[d127_d127 | Side [1]]
 økt trygghet og redusert konfliktnivå ved
eierskifte.
Rapporten erstatter ikke selgers opplysningsplikt eller kjøpers undersøkelsesplikt ved eierskifte.
Tilstandsrapporten gir en beskrivelse og vurdering av byggverk og bygningsdeler som bygningssakkyndig
har observert, og som har betydning ved eierskifte. Tilbakeholdt eller uriktig informasjon som har
betydning for vurderingen, er ikke bygningssakkyndig sitt ansvar. Rapporten gir normalt ingen vurdering av
boligens tilbehør, som hvitevarer, brunevarer og

---

[d127_d127 | Side [1]]

Tilstandsgrad ikke undersøkt (TGIU) skal kun brukes unntaksvis. Eksempler kan være
snødekket tak eller krypkjeller uten inspeksjonsmulighet på undersøkelsestidspunktet;
TG-IU
eller bygningsdelen eller arealet eller rommet er ikke tilgjengelig for inspeksjon på
tidspunktet for analysen. Dersom TGIU omfatter særlig fuktutsatte konstruksjoner, skal
dette angis særlig.
Helleveien 265, 5039 Bergen 2 av 15
55

## Side 56

2. Om rapporten
Om rapporten Tilstandsrapporten er utarbeidet i henhold til forskrift til

---

[d127_d127 | Side [1]]
gir en grundig vurdering av boligens tilstand
Sammendrag selgers egenerklæring: Selgers og påpeker eventuelle avvik som ble oppdaget under
egenerklæringsskjema følger vedlagt salgsoppgaven. befaringen. Tilstandsrapporten og selgers egenerklæring
Interessenter oppfordres til å gjennomgå dette nøye. er vedlagt salgsoppgaven, og det er viktig at
interessenter setter seg grundig inn i disse dokumentene
Følgende opplysninger er spesielt viktig å merke seg: før bud legges inn.
Kjenner du til om det er utført

---

[d127_d127 | Side [1]]
entlige forhold.
Helleveien 265, 5039 Bergen 3 av 15
56

## Side 57

3. Rapportsammendrag
Alle bygningsdeler med tilstandsgrad TG2, TG3 eller TGIU (ikke undersøkt) er oppsummert nedenfor. Feltet Begrunnelse gir en kort forklaring på hvorfor tilstandsgraden er
satt, og er ment som et forenklet sammendrag. Utfyllende vurderinger finnes i hovedrapporten.
Bygningsdeler med TG2
Bygningsdel Oppsummert begrunnelse for tilstandsgrad
Vinduer og dører TG 2 pga alder/slitasje.
Avløpsrør TG 2 pga alder på felles

---

[d127_d127 | Side [1]]
gistrert på andelen. eiendomsmegler for spørsmål.
Selger leverer eiendommen i ryddig og rengjort stand.
44

## Side 45

OM EIENDOMMEN
Om informasjonsgrunnlaget
Kontrakts‑
Opplysninger om boligens størrelse og utforming, både
innvendig og utvendig, bygger på informasjon hentet fra
grunnlag
vedlagte tilstands‑ og boligsalgsrapport. Innholdet i
salgsoppgaven er basert på selgers informasjon,
Overtakelse fagkyndig vurdering, samt opplysninger fra offentlige
Tidspunkt for overtakelse avtales mellom kjøper og

---

[d127_d127 | Side [1]]
 0 0
Thomas Frøyen
thomas@froyentakst.no Helleveien 265
GNR: 168 BNR: 313 ANR: 96 Bygningssakkyndig fagskoleingeniør
40099909 5039 Bergen
Frøyen Takst AS
54

## Side 55

1. Tilstandsgradene
Tilstandsgrad 0: Ingen avvik
Bygningsdelen skal være tilnærmet ny, ikke vise tegn på slitasje og det skal være lagt
TG-0
frem dokumentasjon på faglig god utførelse. Det er ingen merknader til delen.
Tilstandsgrad 1: Mindre eller moderate avvik
Bygningsdelen skal bare ha normal slitasje, og strakstiltak skal ikke anses

---

[d127_d127 | Side [1]]
gis tilstandsgrad 3.
Takstrapporten Kunden/rekvirenten skal lese gjennom dokumentet før bruk og gi tilbakemelding til den
bygningssakkyndige hvis det finnes feil/mangler som bør rettes opp. Rapporten kan ikke være eldre enn 1
år på det tidspunkt kjøperen binder seg til å kjøpe boligen. Ved utgått rapport bør bygningssakkyndig
kontaktes for ny befaring og oppdatering.
Supertakst AS samarbeider med Vendu AS, som utvikler tjenester som bidrar til en trygg bolighandel og et
bærekraftig bolighold. For å kunne

---

[d127_d127 | Side [1]]
å merke seg: før bud legges inn.
Kjenner du til om det er utført arbeid på bad/ våtrom? Kjøper anses kjent med opplysninger som kommer
‑ Pusset siporeks vegger, meislet gulv og rundt sluk på tydelig frem i tilstandsrapporten, og det vil ikke være
bad. støpt nytt gulv, lagt membran og flislagt badet. mulig å gjøre slike forhold gjeldende som en mangel.
Arbeid utført av Bygg og murpartner bergen. Spesielt forhold som er vurdert med TG2 og TG3 bør
vurderes nøye, da de indikerer avvik fra normal slitasje
Ble

---

[d127_d127 | Side [1]]
ger og påkostninger: 2025:
etter montering av inventar og utstyr som ikke er en del ‑ Renovert leiligheten med nye overflater
av overdragelsen. ‑ Nytt el‑anlegg
‑ «Rør‑i‑rør» vannforsyning
‑ Nytt bad
Eiendommens
‑ Ny kjøkkeninnredning.
tilstand
Takstmann: Frøyen Takst AS Byggemåte
I forbindelse med salget er det blitt utført en
Type takst avholdt av takstmann: Tilstandsrapport tilstandsrapport av en kvalifisert bygningssakkyndig.
Rapporten gir en grundig vurdering av boligens tilstand
Sammendrag selgers

---

[d127_d127 | Side [1]]
bør
vurderes nøye, da de indikerer avvik fra normal slitasje
Ble tettesjikt/ membran/ sluk oppgradert/ fornyet? og/ eller høy alder, noe som kan innebære behov for
‑ Ny membran på bad. utbedringer. Bygningsdeler som er merket med TGIU er
ikke blitt vurdert av takstmannen.
Kjenner du til feil eller om har vært utført arbeid/ kontroll
på vann/ avløp? Beskrivelsen av boligen nedenfor er hentet direkte fra
‑ Byttet til rør i rør system fra stoppekran i leilighet. tilstandsrapporten:
Arbeid utført av 123 rør

---

[d127_d127 | Side [1]]
t nevneverdige avvik basert på visuell kontroll.
6.4 Lovlighet / HMS
Er det manglende samsvar mellom dagens bruk og godkjente byggetegninger? Ikke kontrollert
Har boligen åpenbare ulovligheter (F.eks ulovlige bruksendringer)? Nei
Er det avdekt forhold som tyder på at boenhet ikke er delt opp i brannceller etter kravene i Nei
teknisk forskrift?
Er det manglende ferdigattest / midlertidig brukstillatelse? Ikke kontrollert
Er det avvik på krav til rømning, dagslysforhold eller takhøyde? Nei
Er det avvik ved

---

[d127_d127 | Side [1]]
Söderberg & Partners.
Jeg ønsker ikke boligselgerforsikring, men megler har tilbudt meg å kjøpe slik forsikring.
Jeg kan ikke kjøpe boligselgerforsikring ihht vilkår.
Initialer selger: EF 4
90006230
:ecnerefer
tnemucoD
53

## Side 54

Helleveien 265
5039 BERGEN
Tilstandsrapport
Eierskifte
Boligtype: Leilighet
Byggeår: 1962
BRA: 73 m2
BRA-i: 70 m2
Rapportdato: 18.3.2026 (Gyldig til 18.3.2027)
Samlet vurdering
TG-0 TG-1 TG-2 TG-3 TG-IU
1 9 3 0 0
Thomas Frøyen
thomas@froyentakst.no Helleveien 265
GNR: 168

---

[d127_d127 | Side [1]]
r som forskrift til
avhendingslova (tryggere bolighandel) § 2-18 inneholder. Dette kan ikke sammenlignes med en
kontroll utført av offentlig myndighet (Det lokale eltilsyn) eller registrert elektrovirksomhet, og en
bygningssakkyndig har verken kompetanse eller lov til å foreta en slik kontroll. Tilstandsgraden er
vurdert ut fra den forenklede og begrensede kontrollen som forskriften inneholder. El-anlegget kan
ha feil og mangler som en slik forenklet undersøkelse ikke vil avdekke. Vær derfor oppmerksom

---

[d127_d127 | Side [1]]
til rømning, dagslysforhold eller takhøyde? Nei
Er det avvik ved rekkverk, håndløper eller åpninger mellom trinn på Ikke relevant/finnes ikke
innvendig trapp i forhold til dagens forskriftskrav?
Er det avvik fra dagens forskrift på høyde og åpninger i rekkverk til Nei
balkong/terrasse/utvendig trapp?
Helleveien 265, 5039 Bergen 9 av 15
62

## Side 63

Er det manglende brannslukkingsutstyr og røykvarsler i boligen iht forskrift? Nei
Er det skader på brannslukkingsutstyr, røykvarsler, eller er apparat eldre

---

[d127_d127 | Side [1]]
rert avvik ved åpne/lukkemekanismen? Nei
Er det påvist avvik ved utvendig tetting som beslag, vannbord, og omramming? Nei
Oppsummering av vinduer og dører TG-2
Det gjøres oppmerksom på at punkterte vindusglass tidvis kan være svært vanskelig å avdekke.
- Det ble ikke avdekket punkterte glass på befaringsdagen.
Karmer er værslitte utvendig.
Med bakgrunn i alder vil det være risiko for at flere vinduer er, eller vil punktere.
TG 2 pga alder/slitasje.
Anbefalte tiltak / ytterligere undersøkelser

---

[d127_d127 | Side [1]]
å eiendommen, vil heller ikke følge med i salget. Kjenner du til vedtak/ forslag til vedtak om forhold vedr.
Alt utstyr og installasjoner som medfølger overtas slik de eiendommen som kan medføre økte felleskostnader/ økt
er, uten garanti, med mindre det foreligger en gjeldende fellesgjeld?
garanti fra produsent eller leverandør. ‑ Borettslaget økte husleien litt i januar 2026.
Kjøper aksepterer at det kan forekomme hull og merker Moderniseringer og påkostninger: 2025:
etter montering av inventar og utstyr

---

[d127_d127 | Side [1]]
til en bestemt bolig.
Andelseierne har ikke personlig ansvar for borettslagets
fellesgjeld, men de må dekke borettslagets løpende
Tinglyste heftelser utgifter. Manglende innbetaling av fellesutgiftene som
Tinglyste heftelser og rettigheter: På borettslagets følge av andre andelshaveres mislighold, eller dersom
eiendom er det tinglyst 6 heftelser og rettigheter som borettslaget sitter på fraflyttede og/ eller usolgte andeler,
følger eiendommens matrikkel ved overskjøting til ny må dekkes av de øvrige

---

[d127_d127 | Side [1]]
eler av boligen?
Nei Ja
19 Kjenner du til forslag eller vedtatte reguleringsplaner, andre planer, nabovarsel eller offentlige vedtak som kan medføre endringer i bruken av
eiendommen eller av dens omgivelser?
Nei Ja
20 Kjenner du til om det foreligger påbud/heftelser/krav/manglende tillatelser vedrørende eiendommen?
Nei Ja
21 Er det foretatt radonmåling?
Nei Ja
22 Kjenner du til manglende brukstillatelse eller ferdigattest?
Nei Ja
23 Kjenner du til om det foreligger skaderapporter/ tilstandsvurderinger

---

[d127_d127 | Side [1]]
vehus.
Forkjøpsrett: Dersom andel skifter eier, har andelseierne i
borettslaget og dernest de øvrige andelseierne i Eiendommen befinner seg innenfor følgende
boligbyggelaget forkjøpsrett. Forkjøpsretten er hensynssoner:
forhåndsavklart i forkant av annonsering. ‑ Faresone. Ras, berøringsgrad 0,7%
43

## Side 44

om eiendommen
‑ Gul støysone. Veistøy, berøringsgrad 37,5%
‑ Rød støysone. Veistøy, berøringsgrad 11,6% Vei, vann og avløp
Eiendommen er tilknyttet offentlig vann‑ og
Planer i nærheten av

---

[d127_d127 | Side [1]]
eks. drenering,
murerarbeid, tømrerarbeid etc)?
Nei Ja
Initialer selger: EF 2
90006230
:ecnerefer
tnemucoD
51

## Side 52

15 Er det nedgravd oljetank på eiendommen?
Nei Ja
16 Kjenner du til om det har vært utført arbeid på terrasse/garasje/tak/fasade?
Svar Nei
17 Selges eiendommen med utleiedel, leilighet, hybel eller tilsvarende?
Nei Ja
18 Kjenner du til om det er innredet/bruksendret/bygget ut i kjeller eller loft eller andre deler av boligen?
Nei Ja
19 Kjenner du til forslag eller vedtatte

---

[d127_d127 | Side [1]]
dommens matrikkel ved overskjøting til ny må dekkes av de øvrige andelseierne.
hjemmelshaver. Disse omhandler festekontrakt,
bestemmelse om vei, bestemmelse om gjerde, Borettslaget har legalpanterett i andelen for krav på
erklæring/ avtale, og anses å ikke ha noe direkte dekning av felleskostnader og andre krav fra
innvirkning på kjøper. borettslaget, på inntil 2 ganger folketrygdens grunnbeløp.
Legalpant: Borettslaget har legalpant på inntil 2G som Kjøper og selger er forpliktet til å undertegne

---

[d127_d127 | Side [1]]
slag til vedtak om forhold vedr. eiendommen som kan medføre økte felleskostnader/økt fellesgjeld?
Nei Ja
Beskrivelse Borettslaget økte husleien litt i januar 2026.
27 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr i sameiet/laget/selskapet (fellesareal eller i andre boliger) som rotter, mus,
maur eller lignende?
Nei Ja
28 Kjenner du til om det er/har vært skjeggkre i sameiet/laget/selskapet (fellesareal eller i andre boliger)?
Nei Ja
Initialer selger: EF

---

[d127_d127 | Side [1]]
 er 
inngått. Der intet annet er avtalt, vil løsøre og tilbehør medfølge slik dette fremkommer av avhl. § 3-4 
og § 3-5 og denne oversikt. 

Produkter og installasjoner som medfølger overdras uten noen form for garantier, utover eventuell 
gjenværende leverandørgaranti.

Dersom det er noe i nedenstående liste som ikke 昀椀nnes på eiendommen, vil det heller ikke medfølge.
1. HVITEVARER medfølger der dette er spesielt angitt i salgsoppgaven.
2. HELDEKKENDE TEPPER følger med uansett festemåte.
3.

---

[d127_d127 | Side [1]]
t ved en ordinær
www.soderbergpartners.no/ eiendom/ boligkjoper/ gjennomgang.
Dersom det oppstår behov for ytterligere avklaringer,
Lovanvendelse oppfordres interessenter til å kontakte eiendomsmegler
Regelverk og generelle opplysninger eller egne rådgivere før de gir bud.
Boligen selges med det inventar og utstyr som i henhold
til gjeldende lover, forskrifter eller offentlige pålegg skal Slitasje og bruk
følge med eiendommen, jf. avhendingsloven § 3‑4. Det må også forventes at eiendommer som har vært

---

[d127_d127 | Side [1]]
Eiendommen er tilknyttet offentlig vann‑ og
Planer i nærheten av eiendommen: avløpssystem. Stikkledningene fra eiendommen og ut til
‑ PlanID: 71740000. Kommuneplanens arealdel KPA 2027. det kommunale nettet er private, og
Bystyret legger til grunn at revisjon av vedlikeholdsansvaret for disse påhviler sameiet.
KPA‑bestemmelsene skal sluttføres med vedtak Bystyret Adkomst til eiendommen skjer via offentlig vei.
i første kvartal 2027. Hovedmålet med revisjon av
KPA‑bestemmelsene er forenkling, fortgang

---

[d127_d127 | Side [1]]
er du til om det foreligger skaderapporter/ tilstandsvurderinger eller utførte målinger?
Nei Ja
24 Er det andre forhold av betydning ved eiendommen som kan være relevant for kjøper å vite om (f.eks. rasfare, tinglyste forhold eller private
avtaler)?
Nei Ja
Spørsmål for bolig i sameie/borettslag/boligaksjeselskap:
25 Kjenner du til om sameiet/laget/selskapet er involvert i tvister av noe slag?
Nei Ja
26 Kjenner du til vedtak/forslag til vedtak om forhold vedr. eiendommen som kan medføre økte

---

[d127_d127 | Side [1]]
testørrelse: 8561.5 m²
Det foreligger følgende ferdigattester på eiendommen:
Gnr.168,bnr.313/ 1854 i Bergen Kommune. Deler av lagets ‑ Installering av heis nr. 956 og 957 i blokk C datert
tomt er festet. Tomten er felles for borettslaget. 07.11.2001.
‑ Tilbygg datert 05.07.2000.
Beskrivelse av
Det gjøres oppmerksom på at dagens planløsning ikke
stemmer overens med de originale byggetegningene.
eiendommen
Boden med inngang fra soverommet hadde opprinnelig
tilkomst fra mellomgangen som går inn til
Type

---

[d127_d127 | Side [1]]
sig, øvrig fukt eller fuktmerker i underetasje/kjeller?
Nei Ja
6 Kjenner du til om det er/har vært utettheter i terrasse/garasje/tak/fasade?
Nei Ja
7 Kjenner du til om det er/har vært problemer med ildsted/skorstein/pipe f.eks. dårlig trekk, sprekker, pålegg, fyringsforbud eller lignende?
Nei Ja
8 Kjenner du til om det er/har vært f.eks. sprekker i mur, skjeve gulv eller lignende?
Nei Ja
9 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr på eiendommen som rotter, mus, maur eller

---

[d127_d127 | Side [1]]
medfølger der dette er påbudt. 
overtakelse og gjennomføring av salget.
Det er eier og brukers plikt til å se til at utstyret fore昀椀nnes på enhver eiendom. Hvis annet ikke er 
uttrykkelig avtalt, skal dette derfor alltid følge med ved salg av eiendom.
21. SAMTLIGE NØKLER til eiendommen som selger er i besittelse av skal overleveres kjøper på 
overtakelsen, herunder nøkler til eventuelle boder, uthus, garasjeportåpner e.l. Låses boder, uthus 
Ærlighet varer lengst Erfaring som gir resultater
e.l. med

---

[d127_d127 | Side [1]]
nner du blant
annet sandfjære, stupebrett og svaberg. Ytterst på neset
er det et barnebasseng som blir fylt med vann fra
39

## Side 40

OM EIENDOMMEN
Innflyttingstillatelsn ble gitt på følgende vilkår:
Parkering 1. Det må utføres provisoriske sikringstilatak. Således må
Parkeringsplass og garasjeplass tildeles etter ansiennitet, 1 utvendig materialheis fjernes, en anne utvendig heis
og det er per tid ingen ledige plasser. Den månedlige skjermes.
kostnaden på dette varierer fra kr 250 ‑ 750. 2. Provisorisk

---

[d127_d127 | Side [1]]
på inntil 2G som Kjøper og selger er forpliktet til å undertegne standard
sikkerhet for betaling av felleskostnader. Dette betyr at kjøpekontrakt utarbeidet av Emera i forbindelse med
borettslaget har prioritet over tinglyste lån når det gjelder eiendomstransaksjonen. Kjøpekontrakten kan besiktiges
betaling av felleskostnader, og kan kreve inn pengene før hos eiendomsmegler før bud inngis. Kontakt
andre kreditorer, selv om de har lån registrert på andelen. eiendomsmegler for spørsmål.
Selger leverer

---

[d127_d127 | Side [1]]
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑
4 096 626 (Pris inkl. fellesgjeld) Fellesgjeld
Kr 106 626 pr. 16.01.2026
Omkostninger
9 300 (Boligkjøperforsikring* (valgfritt)) Det gjøres oppmerksom på at borettslaget er i gang med
8 506 (Forhåndsvarsling forkjøpsrett) planlegging av rehabilitering, men det er per nå ikke tatt
545 (Tinglysingsgebyr ‑ hjemmel) stilling til hva som skal inngå i en eventuell rehabilitering.
545 (Tinglysningsgebyr ‑ pantedokument) Rehabilitering av fasade vil bli

---

[d127_d127 | Side [1]]
Internt bruksareal. Arealet innenfor boenheten. eksterne boder i fellesarealer er målt på stedet dersom
BRA‑e ‑ Eksternt bruksareal. Areal av alle rom utenfor tilgjengelig, men ikke kontrollert med hensyn til
boenheten og som tilhører denne, for eksempel eksterne eierforhold, bruksrett etc.
boder.
BRA‑b ‑ Innglasset balkong, altan, terrasser.
Standard
Integrerte hvitevarer medfølger.
41

## Side 42

OM EIENDOMMEN
Innbo og løsøre: Salgsoppgaven inkluderer NEFs Kjenner du til om det er/ har vært utført

---

[d127_d127 | Side [1]]
li 1992 regulerer kjøper og selgers 
rettigheter og plikter ved overdragelse av fast eiendom og andeler i borettslag.

I henhold til avhl. § 3-4 skal eiendommen, når annet ikke er avtalt, overdras med innredninger og 
utstyr som etter lov, forskrift eller annet o昀昀entlig vedtak skal følge med. Det samme gjelder varig 
innredning og utstyr som enten er fastmontert eller er særskilt tilpasset bygningen, jf. avhl. § 3-5. 
Loven inneholder ingen detaljert oversikt over hva som omfattes av «innredning og

---

[d127_d127 | Side [1]]
t på stedet dersom tilgjengelig, men ikke kontrollert med hensyn til eierforhold, bruksrett etc.
Helleveien 265, 5039 Bergen 7 av 15
60

## Side 61

6. Hovedrapport
6.1 Balkong, terrasse, platting
Type Balkong
Altan på 16,3 m² med betongdekke.
Er det gjennomført arbeider etter opprinnelig byggeår? Nei
Er det synlig tegn på skjevheter/konstruksjonssvikt? Nei
Er det tegn på sopp/råteskader i treverk eller skader i betong? Nei
Er balkong / terrassen tekket? Nei
Oppsummering av balkong, terrasse, platting

---

[d127_d127 | Side [1]]
tatt tekket med takbelegg.
Regnskap/ budsjett/ kostnadsøkninger: Borettslagets
Bygningsdeler vurdert med TG2: årsregnskap for 2024 ligger vedlagt i salgsoppgaven.
‑ Vinduer og dører grunnet alder/ slitasje
‑ Avløpsrør grunnet alder på felles hovedstamme
‑ Vannbåren varme grunnet alder Vedtekter/ husordensregler
Borettslagets vedtekter ligger vedlagt i salgsoppgaven.
Øvrig informasjon
Energimerke
Adresse Energikarakter: D
Helleveien 265, 5039 BERGEN
Energifarge: Ikke angitt
Gnr. 168, bnr. 313, ideell andel

---

[d127_d127 | Side [1]]
glysningsgebyr ‑ pantedokument) Rehabilitering av fasade vil bli vurdert på kommende
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ årsmøte i mai. Det er per tid ikke vedtatt rehabilitering og
9 596 (Omkostninger totalt (uten Boligkjøperforsikring)) det foreligger ikke et kostnadsestimat på dette, men
18 896 (Omkostninger totalt (med Boligkjøperforsikring)) kjøper må påregne at felleskostnadene og fellesgjelden
vil øke som følge av dette.
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑
4

---

[d127_d127 | Side [1]]
derlagt sameiets/ borettslagets ansvarsområde. Det gjelder blant annet yttervegger,
takkonstruksjon, taktekking, drenering, grunnmur, grunn/fundamenter, felles trapper, felles kjeller, og felles loft.
Informasjon om boligen
Adresse: Helleveien 265, 5039 Bergen
Kommunenr: 4601 Gårdsnr: 168 Bruksnr: 313 Festenr:
Seksjonsnr: Andelsnr: 96 Leilighetsnr:
Byggeår: 1962 - Kilde: PropCloud
Boligtype: Leilighet
Generell beskrivelse av boligen:
BYGGEMÅTE
Grunnmur, bærende konstruksjoner og etasjeskillere av betong.

---

[d127_d127 | Side [1]]
en, samtykke fra styret.
blant annet medføre utredningsplikt for tiltakshaver/
forslagstiller og eventuelt krav om avbøtende tiltak.
Diverse
For mer informasjon om reguleringsforhold, kontakt Borettslagsmodellen innebærer at borettslaget eier
megler eller søk på saksnummer, adresse eller gårds‑ og eiendommen, mens andelseierne eier andeler i
bruksnummer på Plan‑ og bygningsetatens hjemmeside. borettslaget, som gir borett til en bestemt bolig.
Andelseierne har ikke personlig ansvar for

---

[d127_d127 | Side [1]]
ette.
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑
4 106 222 (Totalpris inkl. omkostninger (uten Lånebetingelser fellesgjeld: Borettslaget har en samlet
Boligkjøperforsikring)) fellesgjeld per 16.01.2026 på kr 17 897 929,‑ fordelt på
4 115 522 (Totalpris inkl. omkostninger (med andelene:
Boligkjøperforsikring))
Husbanken, annuitetslån
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ Rentesats: 4,16%, flytende rente
Andel av saldo: kr 106 626,81,‑
Total saldo lån: kr 17 897

---

[d127_d127 | Side [1]]
 EIENDOMMEN

## Side 38

OM EIENDOMMEN
Felleskostnadene fordeles slik:
Økonomi
Bom‑Renhold‑Fellesareal kr 150,‑
Bredbånd/ Kabel‑ TV kr 459,‑
Prisantydning Felleskostnader kr 7 446,‑
Kr 3 990 000
Felleskostnadene kan bli besluttet å øke etter
utarbeidelsen av salgsoppgaven. Styreleder opplyser om
Omkostning kjøper at det er planlagt å øke felleskostnadene med 7,5 % pr
3 990 000,00 (Prisantydning) 01.01.2027.
106 626 (Andel av fellesgjeld)
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑
4 096 626

---

[d127_d127 | Side [1]]
rente
Andel av saldo: kr 106 626,81,‑
Total saldo lån: kr 17 897 929,‑
Estimert totalpris ink. omk Innfrielsesdato: 30.06.2031
Kr 4 115 522
Andre kostnader:
Felleskostnader Grunnpakke kabel‑tv og bredbånd er inkludert i de
Felleskostnader kr 8 055,‑ pr. mnd månedlige felleskostnadene.
Felleskostnader inkluderer: Bom‑Renhold‑Fellesareal,
Bredbånd/ Kabel‑ TV, festeavgift, kommunale avgifter, Formuesverdi
eiendomsskatt, renter og avdrag på felles lån, Formuesverdi primær: Kr 1 104 740

---

[d127_d127 | Side [1]]
sje eksempel skråtak eller lav himlingshøyde. Arealet oppgis
som måler 1,4 m². som tilleggsinformasjon til øvrige arealer.
Areal Fellesarealer og rettigheter til
BRA ‑ i: 70 m²
BRA ‑ e: 1.9 m² bruk
BRA ‑ b: 0 m² Det gjøres særskilt oppmerksom på at boden som
BRA totalt: 71.9 m² disponeres i 1. etasje av denne andelen, ligger på
TBA: 16 m² borettslagets fellesareal. Borettslaget kan på et senere
tidspunkt omdisponere bruken av arealet. Derfor er
Bruksareal fordelt på etasje bodens areal ikke medregnet i

---

[d127_d127 | Side [1]]

‑ Varmekabler på bad
Organisasjonsnummer: 953128047
Hvis et rom på visningen mangler fast installert
Andelsnummer: 96 oppvarmingskilde, vil ikke dette bli inkludert i handelen.
Forretningsfører: Bob Bbl
Regulerings‑ og arealplaner
Borettslagets forsikringsselskap: If Skadeforsikring NUF Eiendommen er iht. reguleringsplan Bergenhus. Hellen ‑
Polisenummer fellesforsikring: SP6149962 Lønborg ‑ Brunestykket datert 04.05.1959, regulert til
skivehus.
Forkjøpsrett: Dersom andel skifter eier, har andelseierne

---

[d127_d127 | Side [1]]
slaget sitt ansvar.
Anbefalte tiltak / ytterligere undersøkelser anbefales
Det ble ikke registrert behov for tiltak, men med tanke på alder kan skader plutselig oppstå på
anlegg av eldre årgang.
6.6 Vannledninger
Helleveien 265, 5039 Bergen 10 av 15
63

## Side 64

Type anlegg Rør i rør system
Er det utført arbeider på anlegget etter byggeår? Ja
Se «tiltak» for mer informasjon vedr oppgraderinger.
Er det etablert fordelerskap? Ja
Er det manglende vannstoppesystem i tilknytning til, eller manglende

---

[d127_d127 | Side [1]]
enter og avdrag på felles lån, Formuesverdi primær: Kr 1 104 740 (2024)
forretningsførsel, styrehonorar, drift og vedlikehold. Formuesverdi sekundær: Kr 4 418 959 (2024)
38

## Side 39

OM EIENDOMMEN
Info om formuesverdi: Skatteetaten beregner en byfjorden på gode sommerdager, samt at det er etablert
boligverdi (beregnet markedsverdi for bolig) basert på flere griller på området ‑ med andre ord et supert sted å
SSBs statistiske opplysninger om omsatte boliger. I tilbringe varme sommerdager sammen med

---

[d127_d127 | Side [1]]
# d127.pdf

## Side 1

YTRE SANDVIKEN
Helleveien 265

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
PRISANTYDNING BOLIGTYPE TOMTEAREAL
Kr 3 990 000,‑ Andelsleilighet 8561.5 m² (festet)
OMKOSTNING KJØPER EIEFORM
18 896,‑ Borettslag
TOTALPRIS ANTALL SOVEROM
4 115 522,‑ 2
FELLESKOSTNADER ETASJE
8 055,‑ pr. mnd 6
FELLESGJELD BYGGEÅR
Kr 106 626,‑ 1962
BRA‑I/ BRA TOTAL

---

[d127_d127 | Side [1]]
(fellesareal eller i andre boliger)?
Nei Ja
Initialer selger: EF 3
90006230
:ecnerefer
tnemucoD
52

## Side 53

Tilleggskommentar
Jeg bekrefter at opplysningene er gitt etter beste skjønn. Jeg er kjent med at dersom jeg har gitt ufullstendige, uriktige eller misvisende
opplysninger om eiendommen, vil forsikringsselskapet kunne søke hel eller delvis regress for sine utbetalinger eller redusere sitt ansvar helt
eller delvis, jfr. vilkår for boligselgerforsikring punkt 7.1 og forsikringsavtaleloven kapittel

---

[d127_d127 | Side [1]]
ra offentlige
Tidspunkt for overtakelse avtales mellom kjøper og registre som kommunen og Kartverket. Det er viktig at
selger. kjøper setter seg grundig inn i alle salgsdokumentene,
herunder salgsoppgave, tilstandsrapport og selgers
egenerklæring. Kjøper anses for å være kjent med
Forsikring forhold som er tydelig beskrevet i salgsdokumentene,
Boligselgerforsikring: Selger har ikke tegnet slike forhold kan ikke senere gjøres gjeldende som en
boligselgerforsikring. mangel ved boligen. Dette gjelder

---

[d127_d127 | Side [1]]
gsprofilen er hentet fra ulike datakilder, og feil eller mangler kan forekomme. Vurderinger og sitater er innhentet på web og gir uttrykk for
hvordan naboene vurderer nabolaget. FINN.no AS kan ikke holdes ansvarlig for feil/mangler i profilen. Copyright © Finn.no AS 2025
76

## Side 77

77

## Side 78

Boligkjøperforsikring
Hvis din nye bolig har skjulte feil kan dette koste
deg både tid og penger.
Dine fordeler
− Unngå bekymring og stress
− Spar verdifull tid
− Få advokatkostnadene dekket
Med vår

---

[d127_d127 | Side [1]]
tress
− Spar verdifull tid
− Få advokatkostnadene dekket
Med vår boligkjøperforsikring er du i trygge hender
hvis du oppdager feil eller mangler ved boligen du har
kjøpt. Forsikringen gir deg tilgang på hjelp fra advokater, Hva koster forsikringen?
saksbehandlere og jurister som er spesialiserte på Forsikringspremien trekkes i oppgjøret.
eiendomskjøp. De står klare til å hjelpe deg i fem år etter
overtagelse – uten at du trenger å bekymre deg for egne Borettslagseiendom: kr 9 300
og eventuelle idømte

---

[d127_d127 | Side [1]]
ikringsselskapet kan ved skriftlig samtykke akseptere tegning av forsikring også i ovennevnte tilfeller.
Dersom forsikringsselskapet ikke har gitt skriftlig samtykke, kan erstatningen bortfalle.
Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter, begrenset til siste 12 måneder før overtakelse.
Forøvrig oppfordrer selger potensielle kjøpere til å undersøke eiendommen grundig, jf avhendigsloven § 3-10 og kjøpsloven § 20
(aksjeboliger).
Gyldig forsikring forutsetter at det

---

[d127_d127 | Side [1]]
Er det dødsbo?
Nei Ja
Avdødes navn
Er det salg ved fullmakt?
Nei Ja
Hjemmelshavers navn
Har du kjennskap til eiendommen?
Nei Ja
Når kjøpte du boligen?
År 2026
Hvor lenge har du eid boligen?
Antall år 0
Antall måneder 3
Har du bodd i boligen siste 12 måneder?
Nei Ja
I hvilket forsikringsselskap har du tegnet villa/husforsikring?
Forsikringsselskap
Polise/avtalenr.
Spørsmål for alle typer eiendommer
1 Kjenner du til om det er/har vært feil tilknyttet våtrommene, f.eks. sprekker, lekkasje, råte, lukt eller

---

[d127_d127 | Side [1]]
nter anbefales derfor å undersøke eiendommen
som gir trygghet og profesjonell juridisk hjelp dersom det nøye, gjerne sammen med fagperson, før bud gis.
oppdages uventede feil eller mangler ved boligen de Dersom kjøper velger å kjøpe uten å ha sett
neste fem årene. Les mer om Boligkjøperforsikring i eiendommen, kan det ikke etter overtakelse reklameres
vedlagte materiell eller på https:/ / på forhold som burde ha vært oppdaget ved en ordinær
www.soderbergpartners.no/ eiendom/ boligkjoper/

---

[d127_d127 | Side [1]]
e deg for egne Borettslagseiendom: kr 9 300
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
Forsikringen er meglet frem av Söderberg & Partners og soderbergpartners.no/eiendom
er plassert hos

---

[d127_d127 | Side [1]]
ader/insekter/skadedyr på eiendommen som rotter, mus, maur eller lignende?
Nei Ja
10 Kjenner du til om det er/har vært skjeggkre i boligen?
Nei Ja
11 Kjenner du til om det er/har vært utført arbeid på el-anlegget eller andre installasjoner (f.eks. oljetank, sentralfyr, ventilasjon)?
Svar Ja, kun av faglært
Beskrivelse byttet alt det elektriske samt nye jordfeil automater i sikringsskap. samsvarsærklæring ligger i boligmappen.
Arbeid utført av Fjell elektro as
11.1 Foreligger det samsvarserklæring (i

---

[d127_d127 | Side [1]]
dmålet med revisjon av
KPA‑bestemmelsene er forenkling, fortgang og
forutsigbarhet i plan‑ og byggesaksprosesser, for å sikre Utleie
gode boliger og nabolag. Saksnr: 202417461 Adgang til utleie: Det er begrenset adgang til å leie ut
bolig i borettslag. Med styrets godkjenning og under
Hele eller deler av eiendommen antas å være berørt av visse vilkår kan boligen leies ut i inntil 3 år, jf.
støy fra veitrafikk over grenseverdier gitt av statlige borettslagsloven § 5‑3 til § 5‑10. Andelseier som selv bor

---

[d127_d127 | Side [1]]
tlige borettslagsloven § 5‑3 til § 5‑10. Andelseier som selv bor i
myndigheter og i kommuneplanens bestemmelser. boligen, har imidlertid rett til å leie ut deler av boligen til
Antakelsen er basert på overordnede støyberegninger. andre uten styregodkjenning, jf. borettslagsloven § 5‑4.
Dette vil kunne få betydning for behandlingen av plan‑ og Korttidsutleie er tillatt i opptil 30 døgn per år uten
byggesaker som omfatter den aktuelle eiendommen, samtykke fra styret.
blant annet medføre utredningsplikt for

---

[d127_d127 | Side [1]]
unnkretser i stedet tallrike og venter på deg. Eksempel på dette er
for kommuner. nevneverdige Munkebotn, hvor man kan gå videre til
Stoltzekleiven og byfjellene. Hvis en tur på fjellet ikke
Formuesverdien er en prosentandel av den beregnede skulle friste, så ligger også Lehmkulhallen som kan skilte
boligverdien. med en rekke innendørs treningsaktiviteter, innen
gangavstand til boligen. I tillegg til Lehmkulhallen kan det
Den nye utregningsmodellen kan medføre en høyere også nevnes Stemmemyren som er et

---

[d127_d127 | Side [1]]
oldet i nabolagsprofilen er hentet fra ulike datakilder, og feil eller mangler kan forekomme. Vurderinger og sitater er innhentet på web og gir uttrykk for
hvordan naboene vurderer nabolaget. FINN.no AS kan ikke holdes ansvarlig for feil/mangler i profilen. Copyright © Finn.no AS 2025
74

## Side 75

Primære transportmidler Varer/Tjenester
Åsane Storsenter 9 min
1. Egen bil
Vitusapotek Helleveien 4 min
2. Buss
Aldersfordeling barn (0-18 år)
Turmulighetene
Nærhet til skog og mark 95/100
32% i

---

[d127_d127 | Side [1]]
rn (0-18 år)
Turmulighetene
Nærhet til skog og mark 95/100
32% i barnehagealder
37% 6-12 år
Støynivået
13% 13-15 år
Lite støynivå 90/100 18% 16-18 år
Kollektivtilbud
Veldig bra 89/100
Familiesammensetning
Sport
Par m. barn
Furulia Balløkke Eidsvåg 13 min
Ballspill 1 km
Par u. barn
Eidsvågskogen 20 min
Ballspill 1.6 km
Sammen Lehmkuhl 4 min Enslig m. barn
NEXT Nyhavn 4 min
Enslig u. barn
Boligmasse
Flerfamilier
3% enebolig
35% rekkehus 0% 53%
54% blokk
8% annet Lønborg
Bergen
Norge
Sivilstand
Norge
Gift 31%

---

[d127_d127 | Side [1]]
ger om omsatte boliger. I tilbringe varme sommerdager sammen med familie og
beregningen tas det hensyn til boligens beliggenhet, venner!
areal, byggeår og type bolig. Stortinget har vedtatt en ny
modell for beregning som skal benyttes fra og med Hvis du beveger deg litt utenfor allfarvei, finner du store
inntektesåret 2026, og den nye modellen henter områder med utallige turmuligheter, hvor idyllene ligger
informasjon om omsatte boliger fra grunnkretser i stedet tallrike og venter på deg. Eksempel på dette

---

[d127_d127 | Side [1]]
tsiktsforhold
• Mye inkl. i felleskostnader, bla. tv/ internett, kommunale avgifter
mm.
• Ingen dok.avgift
• Innvendig bod + bod på altan + ekstern bod
• Busstopp like utenfor (!) 1 min
• 2 min til matbutikk
• 10 min til Bergen sentrum
• Nærhet til sjø, by og fjell
• Nærhet til NHH
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

(Ingen tekst

---

[d127_d127 | Side [1]]
pekran i leilighet. tilstandsrapporten:
Arbeid utført av 123 rør AS
42

## Side 43

OM EIENDOMMEN
Byggemåte: Styregodkjennelse: Kjøper må godkjennes av
Grunnmur, bærende konstruksjoner og etasjeskillere av borettslagets styre. Styret kan kun nekte godkjenning
betong. Yttervegger av betong‑ og trekonstruksjoner dersom det foreligger saklig grunnlag, jf. borettslagsloven
med platet fasade. Vinduer med isolerglass. § 4‑4.
Flat takkonstruksjon antatt tekket med takbelegg.
Regnskap/ budsjett/ kostnadsøkninger:

---

[d127_d127 | Side [1]]
oppgitt, brukes typiske standardverdier for den aktuelle
se våre nettsider.
bygningstypen fra tidsperioden den ble bygd i.
Beregningsmetodene for energikarakteren baserer seg https://www.enova.no
på NS 3031.
https://www.enova.no/energimerking
73

## Side 74

Nabolagsprofil
Helleveien 265 - Nabolaget Lønborg - vurdert av 49 lokalkjente
Nabolaget spesielt anbefalt for
Opplevd trygghet
Familier med barn Veldig trygt 90/100
Godt voksne
Kvalitet på skolene
Etablerere
Veldig bra 77/100
Naboskapet
Offentlig

---

[d127_d127 | Side [1]]
4% blokk
8% annet Lønborg
Bergen
Norge
Sivilstand
Norge
Gift 31% 33%
Ikke gift 50% 54%
Separert 11% 9%
Enke/Enkemann 9% 4%
Innholdet i nabolagsprofilen er hentet fra ulike datakilder, og feil eller mangler kan forekomme. Vurderinger og sitater er innhentet på web og gir uttrykk for
hvordan naboene vurderer nabolaget. FINN.no AS kan ikke holdes ansvarlig for feil/mangler i profilen. Copyright © Finn.no AS 2025
75

## Side 76

Innholdet i nabolagsprofilen er hentet fra ulike datakilder, og feil eller mangler

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "Planlagt rehabilitering av fasade med ukjent kostnad – risiko for økte felleskostnader og fellesgjeld",
      "evidence": [
        "Det gjøres oppmerksom på at borettslaget er i gang med planlegging av rehabilitering, men det er per nå ikke tatt stilling til hva som skal inngå i en eventuell rehabilitering.",
        "Rehabilitering av fasade vil bli vurdert på kommende årsmøte i mai. Det er per tid ikke vedtatt rehabilitering og det foreligger ikke et kostnadsestimat på dette, men kjøper må påregne at felleskostnadene og fellesgjelden vil øke som følge av dette."
      ],
      "source_documents": [
        "d127_d127"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R2",
      "description": "Planlagt økning av felleskostnader med 7,5 % fra 01.01.2027",
      "evidence": [
        "Felleskostnadene kan bli besluttet å øke etter utarbeidelsen av salgsoppgaven. Styreleder opplyser om at det er planlagt å øke felleskostnadene med 7,5 % pr 01.01.2027.",
        "Felleskostnader kr 8 055,- pr. mnd"
      ],
      "source_documents": [
        "d127_d127"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R3",
      "description": "Eiendommen ligger i rød og gul støysone – risiko for støyplager fra veistøy",
      "evidence": [
        "Gul støysone. Veistøy, berøringsgrad 37,5%",
        "Rød støysone. Veistøy, berøringsgrad 11,6%",
        "Hele eller deler av eiendommen antas å være berørt av støy fra veitrafikk over grenseverdier gitt av statlige myndigheter og i kommuneplanens bestemmelser."
      ],
      "source_documents": [
        "d127_d127"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R4",
      "description": "Eiendommen ligger i faresone for ras – risiko for naturskade",
      "evidence": [
        "Faresone. Ras, berøringsgrad 0,7%"
      ],
      "source_documents": [
        "d127_d127"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.72
    },
    {
      "risk_id": "R5",
      "description": "TG2 på vinduer og dører grunnet alder og slitasje – risiko for punkterte glass og behov for utskifting",
      "evidence": [
        "Vinduer og dører TG 2 pga alder/slitasje.",
        "Karmer er værslitte utvendig. Med bakgrunn i alder vil det være risiko for at flere vinduer er, eller vil punktere.",
        "Det ble ikke avdekket punkterte glass på befaringsdagen."
      ],
      "source_documents": [
        "d127_d127"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R6",
      "description": "TG2 på avløpsrør grunnet alder på felles hovedstamme – risiko for lekkasje og kostbare utbedringer",
      "evidence": [
        "Avløpsrør TG 2 pga alder på felles hovedstamme."
      ],
      "source_documents": [
        "d127_d127"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R7",
      "description": "TG2 på vannbåren varme grunnet alder – risiko for svikt og behov for utbedring",
      "evidence": [
        "Vannbåren varme grunnet alder.",
        "Det ble ikke registrert behov for tiltak, men med tanke på alder kan skader plutselig oppstå på anlegg av eldre årgang."
      ],
      "source_documents": [
        "d127_d127"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R8",
      "description": "Planløsning stemmer ikke overens med originale byggetegninger – risiko for ulovlige forhold og komplikasjoner ved fremtidig salg eller byggesak",
      "evidence": [
        "Det gjøres oppmerksom på at dagens planløsning ikke stemmer overens med de originale byggetegningene. Boden med inngang fra soverommet hadde opprinnelig tilkomst fra mellomgangen som går inn til..."
      ],
      "source_documents": [
        "d127_d127"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R9",
      "description": "Ferdigattest og samsvar med byggetillatelse ikke kontrollert – risiko for ulovlige forhold",
      "evidence": [
        "Er det manglende samsvar mellom dagens bruk og godkjente byggetegninger? Ikke kontrollert",
        "Er det manglende ferdigattest / midlertidig brukstillatelse? Ikke kontrollert"
      ],
      "source_documents": [
        "d127_d127"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R10",
      "description": "Selger har ikke tegnet boligselgerforsikring – kjøper har svakere vern ved eventuelle skjulte feil og mangler",
      "evidence": [
        "Boligselgerforsikring: Selger har ikke tegnet boligselgerforsikring.",
        "Jeg ønsker ikke boligselgerforsikring, men megler har tilbudt meg å kjøpe slik forsikring."
      ],
      "source_documents": [
        "d127_d127"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R11",
      "description": "Ekstern bod disponeres på borettslagets fellesareal og kan omdisponeres av borettslaget – risiko for tap av boden",
      "evidence": [
        "Det gjøres særskilt oppmerksom på at boden som disponeres i 1. etasje av denne andelen, ligger på borettslagets fellesareal. Borettslaget kan på et senere tidspunkt omdisponere bruken av arealet. Derfor er bodens areal ikke medregnet i..."
      ],
      "source_documents": [
        "d127_d127"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.93
    },
    {
      "risk_id": "R12",
      "description": "Borettslaget har høy samlet fellesgjeld – risiko for økte kostnader for andelseiere ved mislighold fra andre andelshavere",
      "evidence": [
        "Borettslaget har en samlet fellesgjeld per 16.01.2026 på kr 17 897 929,- fordelt på andelene.",
        "Manglende innbetaling av fellesutgiftene som følge av andre andelshaveres mislighold, eller dersom borettslaget sitter på fraflyttede og/eller usolgte andeler, må dekkes av de øvrige andelseierne.",
        "Husbanken, annuitetslån. Rentesats: 4,16%, flytende rente. Innfrielsesdato: 30.06.2031"
      ],
      "source_documents": [
        "d127_d127"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R13",
      "description": "Selger har eid boligen i kun 3 måneder – kort eiertid kan indikere ukjente forhold ved boligen og gir begrenset kjennskap til eventuelle feil",
      "evidence": [
        "Når kjøpte du boligen? År 2026",
        "Antall år 0",
        "Antall måneder 3",
        "Har du bodd i boligen siste 12 måneder? Nei Ja"
      ],
      "source_documents": [
        "d127_d127"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R14",
      "description": "El-anlegget er kun forenklet kontrollert av bygningssakkyndig – risiko for skjulte feil og mangler i el-anlegget",
      "evidence": [
        "El-anlegget kan ha feil og mangler som en slik forenklet undersøkelse ikke vil avdekke.",
        "Tilstandsgraden er vurdert ut fra den forenklede og begrensede kontrollen som forskriften inneholder.",
        "byttet alt det elektriske samt nye jordfeil automater i sikringsskap. samsvarsærklæring ligger i boligmappen. Arbeid utført av Fjell elektro as"
      ],
      "source_documents": [
        "d127_d127"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.78
    },
    {
      "risk_id": "R15",
      "description": "Tomten er festet (ikke eid av borettslaget) – risiko knyttet til festeavgift og fremtidige festebetingelser",
      "evidence": [
        "Deler av lagets tomt er festet. Tomten er felles for borettslaget.",
        "TOMTEAREAL 8561.5 m² (festet)",
        "Felleskostnader inkluderer: ... festeavgift ..."
      ],
      "source_documents": [
        "d127_d127"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R16",
      "description": "Pågående revisjon av kommuneplanens arealdel (KPA 2027) – risiko for endringer i arealbruk og fremtidige byggesaker i området",
      "evidence": [
        "PlanID: 71740000. Kommuneplanens arealdel KPA 2027. Bystyret legger til grunn at revisjon av KPA-bestemmelsene skal sluttføres med vedtak Bystyret i første kvartal 2027.",
        "Hovedmålet med revisjon av KPA-bestemmelsene er forenkling, fortgang og forutsigbarhet i plan- og byggesaksprosesser."
      ],
      "source_documents": [
        "d127_d127"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.65
    },
    {
      "risk_id": "R17",
      "description": "Begrenset adgang til utleie i borettslag – risiko for at kjøper ikke kan leie ut boligen fritt",
      "evidence": [
        "Adgang til utleie: Det er begrenset adgang til å leie ut bolig i borettslag. Med styrets godkjenning og under visse vilkår kan boligen leies ut i inntil 3 år.",
        "Korttidsutleie er tillatt i opptil 30 døgn per år uten samtykke fra styret."
      ],
      "source_documents": [
        "d127_d127"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R18",
      "description": "Radonmåling ikke utført – risiko for forhøyede radonnivåer i boligen",
      "evidence": [
        "Er det foretatt radonmåling? Nei"
      ],
      "source_documents": [
        "d127_d127"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.78
    },
    {
      "risk_id": "R19",
      "description": "Innflyttingstillatelse gitt på vilkår med provisoriske sikringstiltak – risiko for at vilkår ikke er fullt ut oppfylt",
      "evidence": [
        "Innflyttingstillatelsen ble gitt på følgende vilkår: 1. Det må utføres provisoriske sikringstiltak. Således må 1 utvendig materialheis fjernes, en annen utvendig heis skjermes. 2. Provisorisk..."
      ],
      "source_documents": [
        "d127_d127"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.72
    },
    {
      "risk_id": "R20",
      "description": "Ingen ledige parkeringsplasser per tid – risiko for at kjøper ikke får parkering",
      "evidence": [
        "Parkeringsplass og garasjeplass tildeles etter ansiennitet, og det er per tid ingen ledige plasser. Den månedlige kostnaden på dette varierer fra kr 250 - 750."
      ],
      "source_documents": [
        "d127_d127"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R21",
      "description": "Bygget fra 1962 med energikarakter D – risiko for høye energikostnader og behov for energioppgradering",
      "evidence": [
        "Byggeår: 1962",
        "Energikarakter: D",
        "Grunnmur, bærende konstruksjoner og etasjeskillere av betong. Yttervegger av betong- og trekonstruksjoner med platet fasade."
      ],
      "source_documents": [
        "d127_d127"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.75
    }
  ],
  "re_retrieval_queries": [
    "provisoriske sikringstiltak innflyttingstillatelse vilkår oppfylt status",
    "avløpsrør felles hovedstamme alder tilstandsgrad konsekvens kostnad",
    "festeavgift festekontrakt betingelser varighet borettslaget",
    "radonmåling leilighet 6. etasje krav forskrift",
    "parkeringsplass ansiennitet venteliste borettslaget",
    "el-anlegg samsvarserklæring ny installasjon Fjell elektro",
    "planløsning byggetegninger avvik ulovlig bruksendring søknad"
  ],
  "reasoning": "\nGjennomgang av alle 19 opprinnelige risikoer mot dokumentevidensen:\n\n**Beholdte risikoer med justert confidence:**\n\nR1 (Fasaderehabilitering): Meget godt dokumentert med direkte sitat. Beholder 0.97.\n\nR2 (Felleskostnadsøkning 7,5%): Direkte bekreftet av styreleder. Beholder 0.97.\n\nR3 (Støysoner): Klart dokumentert med konkrete berøringsgrader. Beholder 0.95.\n\nR4 (Faresone ras): Dokumentert, men berøringsgrad er kun 0,7% – svært lav. Justerer ned fra 0.85 til 0.72 da risikoen er reell men marginal.\n\nR5 (TG2 vinduer/dører): Godt dokumentert. Beholder 0.95.\n\nR6 (TG2 avløpsrør): Dokumentert, men begrenset detalj om konsekvens. Justerer ned marginalt til 0.90.\n\nR7 (TG2 vannbåren varme): Godt dokumentert med aldersadvarsel. Beholder 0.92.\n\nR8 (Planløsning vs. byggetegninger): Dokumentert, men teksten er avkuttet – full kontekst mangler. Beholder 0.88.\n\nR9 (Ferdigattest ikke kontrollert): Direkte dokumentert. Beholder 0.85.\n\nR10 (Ingen boligselgerforsikring): Klart dokumentert. Beholder 0.92.\n\nR11 (Ekstern bod på fellesareal): Klart dokumentert med eksplisitt advarsel. Beholder 0.93.\n\nR12 (Høy fellesgjeld): Dokumentert med beløp. Justerer ned til 0.85 da andelen (kr 106 626) er relativt lav i forhold til total.\n\nR13 (Kort eiertid 3 mnd): Dokumentert. Justerer ned til 0.80 da selger har bodd i boligen (spørsmål om bodd siste 12 mnd er besvart, men uklart).\n\nR14 (El-anlegg forenklet kontroll): Dokumentert, men ny installasjon i 2025 med samsvarserklæring reduserer risikoen noe. Justerer ned til 0.78.\n\nR15 (Festet tomt): Klart dokumentert. Beholder 0.88.\n\nR16 (KPA 2027 revisjon): Dokumentert, men revisjonen er beskrevet som forenkling/forutsigbarhet – ikke nødvendigvis negativ. Justerer ned til 0.65.\n\nR17 (Begrenset utleie): Klart dokumentert. Beholder 0.88.\n\nR18 (Ingen radonmåling): Dokumentert. Justerer ned til 0.78 da leiligheten er i 6. etasje (lavere radonrisiko i høyere etasjer).\n\nR19 (Innflyttingstillatelse på vilkår): Dokumentert men avkuttet tekst. Justerer ned til 0.72 da det er uklart om vilkårene er oppfylt.\n\n**Nye risikoer identifisert:**\n\nR20 (Ingen ledige parkeringsplasser): Dokumentert i salgsoppgaven – relevant for kjøper som trenger parkering.\n\nR21 (Energikarakter D, byggeår 1962): Dokumentert – relevant for fremtidige energikostnader og eventuelle krav om oppgradering.\n\n**Risikoer som vurderes fjernet/nedgradert:**\n- R16 (KPA 2027): Beholdes men med lav confidence (0.65) da revisjonen beskrives som positiv forenkling.\n- R4 (Ras): Beholdes men med lavere confidence (0.72) pga. svært lav berøringsgrad.\n\n**Manglende informasjon som bør undersøkes:**\n- Status på provisoriske sikringstiltak (R19)\n- Fullstendig tekst om planløsningsavvik (R8)\n- Festekontrakt detaljer (R15)\n- Om selger faktisk har bodd i boligen (R13)\n"
}

## Raw Response
```json
{
  "id": "msg_013LGj9Dvv3sxLZWoo1JRuUY",
  "container": null,
  "content": [
    {
      "id": "toolu_01JHCRo5LMAMixFxHx2nC6eU",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "Planlagt rehabilitering av fasade med ukjent kostnad – risiko for økte felleskostnader og fellesgjeld",
            "evidence": [
              "Det gjøres oppmerksom på at borettslaget er i gang med planlegging av rehabilitering, men det er per nå ikke tatt stilling til hva som skal inngå i en eventuell rehabilitering.",
              "Rehabilitering av fasade vil bli vurdert på kommende årsmøte i mai. Det er per tid ikke vedtatt rehabilitering og det foreligger ikke et kostnadsestimat på dette, men kjøper må påregne at felleskostnadene og fellesgjelden vil øke som følge av dette."
            ],
            "source_documents": [
              "d127_d127"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R2",
            "description": "Planlagt økning av felleskostnader med 7,5 % fra 01.01.2027",
            "evidence": [
              "Felleskostnadene kan bli besluttet å øke etter utarbeidelsen av salgsoppgaven. Styreleder opplyser om at det er planlagt å øke felleskostnadene med 7,5 % pr 01.01.2027.",
              "Felleskostnader kr 8 055,- pr. mnd"
            ],
            "source_documents": [
              "d127_d127"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R3",
            "description": "Eiendommen ligger i rød og gul støysone – risiko for støyplager fra veistøy",
            "evidence": [
              "Gul støysone. Veistøy, berøringsgrad 37,5%",
              "Rød støysone. Veistøy, berøringsgrad 11,6%",
              "Hele eller deler av eiendommen antas å være berørt av støy fra veitrafikk over grenseverdier gitt av statlige myndigheter og i kommuneplanens bestemmelser."
            ],
            "source_documents": [
              "d127_d127"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R4",
            "description": "Eiendommen ligger i faresone for ras – risiko for naturskade",
            "evidence": [
              "Faresone. Ras, berøringsgrad 0,7%"
            ],
            "source_documents": [
              "d127_d127"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.72
          },
          {
            "risk_id": "R5",
            "description": "TG2 på vinduer og dører grunnet alder og slitasje – risiko for punkterte glass og behov for utskifting",
            "evidence": [
              "Vinduer og dører TG 2 pga alder/slitasje.",
              "Karmer er værslitte utvendig. Med bakgrunn i alder vil det være risiko for at flere vinduer er, eller vil punktere.",
              "Det ble ikke avdekket punkterte glass på befaringsdagen."
            ],
            "source_documents": [
              "d127_d127"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R6",
            "description": "TG2 på avløpsrør grunnet alder på felles hovedstamme – risiko for lekkasje og kostbare utbedringer",
            "evidence": [
              "Avløpsrør TG 2 pga alder på felles hovedstamme."
            ],
            "source_documents": [
              "d127_d127"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R7",
            "description": "TG2 på vannbåren varme grunnet alder – risiko for svikt og behov for utbedring",
            "evidence": [
              "Vannbåren varme grunnet alder.",
              "Det ble ikke registrert behov for tiltak, men med tanke på alder kan skader plutselig oppstå på anlegg av eldre årgang."
            ],
            "source_documents": [
              "d127_d127"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R8",
            "description": "Planløsning stemmer ikke overens med originale byggetegninger – risiko for ulovlige forhold og komplikasjoner ved fremtidig salg eller byggesak",
            "evidence": [
              "Det gjøres oppmerksom på at dagens planløsning ikke stemmer overens med de originale byggetegningene. Boden med inngang fra soverommet hadde opprinnelig tilkomst fra mellomgangen som går inn til..."
            ],
            "source_documents": [
              "d127_d127"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R9",
            "description": "Ferdigattest og samsvar med byggetillatelse ikke kontrollert – risiko for ulovlige forhold",
            "evidence": [
              "Er det manglende samsvar mellom dagens bruk og godkjente byggetegninger? Ikke kontrollert",
              "Er det manglende ferdigattest / midlertidig brukstillatelse? Ikke kontrollert"
            ],
            "source_documents": [
              "d127_d127"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R10",
            "description": "Selger har ikke tegnet boligselgerforsikring – kjøper har svakere vern ved eventuelle skjulte feil og mangler",
            "evidence": [
              "Boligselgerforsikring: Selger har ikke tegnet boligselgerforsikring.",
              "Jeg ønsker ikke boligselgerforsikring, men megler har tilbudt meg å kjøpe slik forsikring."
            ],
            "source_documents": [
              "d127_d127"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R11",
            "description": "Ekstern bod disponeres på borettslagets fellesareal og kan omdisponeres av borettslaget – risiko for tap av boden",
            "evidence": [
              "Det gjøres særskilt oppmerksom på at boden som disponeres i 1. etasje av denne andelen, ligger på borettslagets fellesareal. Borettslaget kan på et senere tidspunkt omdisponere bruken av arealet. Derfor er bodens areal ikke medregnet i..."
            ],
            "source_documents": [
              "d127_d127"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.93
          },
          {
            "risk_id": "R12",
            "description": "Borettslaget har høy samlet fellesgjeld – risiko for økte kostnader for andelseiere ved mislighold fra andre andelshavere",
            "evidence": [
              "Borettslaget har en samlet fellesgjeld per 16.01.2026 på kr 17 897 929,- fordelt på andelene.",
              "Manglende innbetaling av fellesutgiftene som følge av andre andelshaveres mislighold, eller dersom borettslaget sitter på fraflyttede og/eller usolgte andeler, må dekkes av de øvrige andelseierne.",
              "Husbanken, annuitetslån. Rentesats: 4,16%, flytende rente. Innfrielsesdato: 30.06.2031"
            ],
            "source_documents": [
              "d127_d127"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R13",
            "description": "Selger har eid boligen i kun 3 måneder – kort eiertid kan indikere ukjente forhold ved boligen og gir begrenset kjennskap til eventuelle feil",
            "evidence": [
              "Når kjøpte du boligen? År 2026",
              "Antall år 0",
              "Antall måneder 3",
              "Har du bodd i boligen siste 12 måneder? Nei Ja"
            ],
            "source_documents": [
              "d127_d127"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R14",
            "description": "El-anlegget er kun forenklet kontrollert av bygningssakkyndig – risiko for skjulte feil og mangler i el-anlegget",
            "evidence": [
              "El-anlegget kan ha feil og mangler som en slik forenklet undersøkelse ikke vil avdekke.",
              "Tilstandsgraden er vurdert ut fra den forenklede og begrensede kontrollen som forskriften inneholder.",
              "byttet alt det elektriske samt nye jordfeil automater i sikringsskap. samsvarsærklæring ligger i boligmappen. Arbeid utført av Fjell elektro as"
            ],
            "source_documents": [
              "d127_d127"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.78
          },
          {
            "risk_id": "R15",
            "description": "Tomten er festet (ikke eid av borettslaget) – risiko knyttet til festeavgift og fremtidige festebetingelser",
            "evidence": [
              "Deler av lagets tomt er festet. Tomten er felles for borettslaget.",
              "TOMTEAREAL 8561.5 m² (festet)",
              "Felleskostnader inkluderer: ... festeavgift ..."
            ],
            "source_documents": [
              "d127_d127"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R16",
            "description": "Pågående revisjon av kommuneplanens arealdel (KPA 2027) – risiko for endringer i arealbruk og fremtidige byggesaker i området",
            "evidence": [
              "PlanID: 71740000. Kommuneplanens arealdel KPA 2027. Bystyret legger til grunn at revisjon av KPA-bestemmelsene skal sluttføres med vedtak Bystyret i første kvartal 2027.",
              "Hovedmålet med revisjon av KPA-bestemmelsene er forenkling, fortgang og forutsigbarhet i plan- og byggesaksprosesser."
            ],
            "source_documents": [
              "d127_d127"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.65
          },
          {
            "risk_id": "R17",
            "description": "Begrenset adgang til utleie i borettslag – risiko for at kjøper ikke kan leie ut boligen fritt",
            "evidence": [
              "Adgang til utleie: Det er begrenset adgang til å leie ut bolig i borettslag. Med styrets godkjenning og under visse vilkår kan boligen leies ut i inntil 3 år.",
              "Korttidsutleie er tillatt i opptil 30 døgn per år uten samtykke fra styret."
            ],
            "source_documents": [
              "d127_d127"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R18",
            "description": "Radonmåling ikke utført – risiko for forhøyede radonnivåer i boligen",
            "evidence": [
              "Er det foretatt radonmåling? Nei"
            ],
            "source_documents": [
              "d127_d127"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.78
          },
          {
            "risk_id": "R19",
            "description": "Innflyttingstillatelse gitt på vilkår med provisoriske sikringstiltak – risiko for at vilkår ikke er fullt ut oppfylt",
            "evidence": [
              "Innflyttingstillatelsen ble gitt på følgende vilkår: 1. Det må utføres provisoriske sikringstiltak. Således må 1 utvendig materialheis fjernes, en annen utvendig heis skjermes. 2. Provisorisk..."
            ],
            "source_documents": [
              "d127_d127"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.72
          },
          {
            "risk_id": "R20",
            "description": "Ingen ledige parkeringsplasser per tid – risiko for at kjøper ikke får parkering",
            "evidence": [
              "Parkeringsplass og garasjeplass tildeles etter ansiennitet, og det er per tid ingen ledige plasser. Den månedlige kostnaden på dette varierer fra kr 250 - 750."
            ],
            "source_documents": [
              "d127_d127"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R21",
            "description": "Bygget fra 1962 med energikarakter D – risiko for høye energikostnader og behov for energioppgradering",
            "evidence": [
              "Byggeår: 1962",
              "Energikarakter: D",
              "Grunnmur, bærende konstruksjoner og etasjeskillere av betong. Yttervegger av betong- og trekonstruksjoner med platet fasade."
            ],
            "source_documents": [
              "d127_d127"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.75
          }
        ],
        "re_retrieval_queries": [
          "provisoriske sikringstiltak innflyttingstillatelse vilkår oppfylt status",
          "avløpsrør felles hovedstamme alder tilstandsgrad konsekvens kostnad",
          "festeavgift festekontrakt betingelser varighet borettslaget",
          "radonmåling leilighet 6. etasje krav forskrift",
          "parkeringsplass ansiennitet venteliste borettslaget",
          "el-anlegg samsvarserklæring ny installasjon Fjell elektro",
          "planløsning byggetegninger avvik ulovlig bruksendring søknad"
        ],
        "reasoning": "\nGjennomgang av alle 19 opprinnelige risikoer mot dokumentevidensen:\n\n**Beholdte risikoer med justert confidence:**\n\nR1 (Fasaderehabilitering): Meget godt dokumentert med direkte sitat. Beholder 0.97.\n\nR2 (Felleskostnadsøkning 7,5%): Direkte bekreftet av styreleder. Beholder 0.97.\n\nR3 (Støysoner): Klart dokumentert med konkrete berøringsgrader. Beholder 0.95.\n\nR4 (Faresone ras): Dokumentert, men berøringsgrad er kun 0,7% – svært lav. Justerer ned fra 0.85 til 0.72 da risikoen er reell men marginal.\n\nR5 (TG2 vinduer/dører): Godt dokumentert. Beholder 0.95.\n\nR6 (TG2 avløpsrør): Dokumentert, men begrenset detalj om konsekvens. Justerer ned marginalt til 0.90.\n\nR7 (TG2 vannbåren varme): Godt dokumentert med aldersadvarsel. Beholder 0.92.\n\nR8 (Planløsning vs. byggetegninger): Dokumentert, men teksten er avkuttet – full kontekst mangler. Beholder 0.88.\n\nR9 (Ferdigattest ikke kontrollert): Direkte dokumentert. Beholder 0.85.\n\nR10 (Ingen boligselgerforsikring): Klart dokumentert. Beholder 0.92.\n\nR11 (Ekstern bod på fellesareal): Klart dokumentert med eksplisitt advarsel. Beholder 0.93.\n\nR12 (Høy fellesgjeld): Dokumentert med beløp. Justerer ned til 0.85 da andelen (kr 106 626) er relativt lav i forhold til total.\n\nR13 (Kort eiertid 3 mnd): Dokumentert. Justerer ned til 0.80 da selger har bodd i boligen (spørsmål om bodd siste 12 mnd er besvart, men uklart).\n\nR14 (El-anlegg forenklet kontroll): Dokumentert, men ny installasjon i 2025 med samsvarserklæring reduserer risikoen noe. Justerer ned til 0.78.\n\nR15 (Festet tomt): Klart dokumentert. Beholder 0.88.\n\nR16 (KPA 2027 revisjon): Dokumentert, men revisjonen er beskrevet som forenkling/forutsigbarhet – ikke nødvendigvis negativ. Justerer ned til 0.65.\n\nR17 (Begrenset utleie): Klart dokumentert. Beholder 0.88.\n\nR18 (Ingen radonmåling): Dokumentert. Justerer ned til 0.78 da leiligheten er i 6. etasje (lavere radonrisiko i høyere etasjer).\n\nR19 (Innflyttingstillatelse på vilkår): Dokumentert men avkuttet tekst. Justerer ned til 0.72 da det er uklart om vilkårene er oppfylt.\n\n**Nye risikoer identifisert:**\n\nR20 (Ingen ledige parkeringsplasser): Dokumentert i salgsoppgaven – relevant for kjøper som trenger parkering.\n\nR21 (Energikarakter D, byggeår 1962): Dokumentert – relevant for fremtidige energikostnader og eventuelle krav om oppgradering.\n\n**Risikoer som vurderes fjernet/nedgradert:**\n- R16 (KPA 2027): Beholdes men med lav confidence (0.65) da revisjonen beskrives som positiv forenkling.\n- R4 (Ras): Beholdes men med lavere confidence (0.72) pga. svært lav berøringsgrad.\n\n**Manglende informasjon som bør undersøkes:**\n- Status på provisoriske sikringstiltak (R19)\n- Fullstendig tekst om planløsningsavvik (R8)\n- Festekontrakt detaljer (R15)\n- Om selger faktisk har bodd i boligen (R13)\n"
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
    "input_tokens": 18906,
    "output_tokens": 5068,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
