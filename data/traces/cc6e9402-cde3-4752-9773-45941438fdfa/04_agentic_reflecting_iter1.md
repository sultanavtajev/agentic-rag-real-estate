# Trace: agentic_reflecting_iter1
- **Run ID:** cc6e9402-cde3-4752-9773-45941438fdfa
- **Tidspunkt:** 2026-03-25T09:17:25.206669+00:00
- **Varighet:** 99.31s
- **Input tokens:** 18566
- **Output tokens:** 4818

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
Risiko 1: Setningssprekker i veggkonstruksjonen (TG 2): Det er avdekket setningssprekker i veggkonstruksjonen på stue/kjøkken og soverom 1. Sprekkdannelsene har karakter som er forenlig med bevegelser i grunnen, noe som kan indikere pågående setninger i bygget.
  Confidence: 0.95
  Evidens: Det avdekkes setningssprekk i veggkonstruksjonen på stue/kjøkken og på soverom 1.; Sprekkdannelser i veggen har karakter som er forenlig med bevegelser i grunnen.; Det anbefales å få vurdert sprekkdannelsene av fagperson med bygningsfaglig kompetanse for å avklare årsak, utvikling og eventuelt behov for tiltak.; Det er noen tynne riss i murveggene inne i leiligheten. Utbygger sa at disse kun utgjør en kosmetisk ulempe.

Risiko 2: Kvikkleire- og marin leire-risiko: Eiendommen ligger i et område under marin grense med svært stor mulighet for marin leire, og i et aktsomhetsområde for kvikkleireskred. Dette utgjør en potensiell geoteknisk risiko.
  Confidence: 0.95
  Evidens: Eiendommen ligger i et område under marin grense med svært stor mulighet for marin leire.; Eiendommen ligger i et aktsomhetsområde for kvikkleireskred.; Temakart fra NGU viser at boligen ligger i ett område under marin grense. Der det finnes marin leire, kan det også være kvikkleire.

Risiko 3: Støyrisiko: Eiendommen ligger hovedsakelig i gul støysone, men også dels i rød støysone i forbindelse med vei. Rød støysone innebærer høye støynivåer som kan påvirke bokvaliteten negativt.
  Confidence: 0.92
  Evidens: Eiendommen ligger hovedsakelig i gul støysone, men også dels i rød støysone ifb med vei.

Risiko 4: Fukt og vanninntrenging i kjeller/sportsbod: Det har vært vanninntrenging i kjelleren, og sportsboden utsettes tidvis for fuktig luft i forbindelse med værskifte. Dette kan medføre fuktskader på eiendeler lagret i boden.
  Confidence: 0.9
  Evidens: I kjeller har det vært vanninntregning. Styret i sameiet har håndtert dette. Sportsboden utsettes tidvis for fuktig luft ifm. værskifte.; I kjeller har det vært vanninntregning. Styret i sameiet har håndtert dette. Sportsboden utsettes tidvis for fuktig luft ifm værskifte.

Risiko 5: Utvendig terreng, terrasse, yttertak og takrenner ikke vurdert: Grunnet snø på befaringstidspunktet ble disse områdene ikke inspisert. Eventuelle skader eller vedlikeholdsbehov kan dermed ha blitt oversett.
  Confidence: 0.88
  Evidens: Grunnet mye snø på befaringstidspunktet ble ikke utvendig terreng, terrassen, yttertak, takrenner og nedløp vurdert eller satt tilstandsgrad på. Dette kan innebære at eventuelle skader eller vedlikeholdsbehov på disse områdene ikke har blitt oppdaget under befaringen.; For å få en fullverdig vurdering av eiendommens tilstand på disse punktene anbefales det derfor en ny inspeksjon når snøforholdene tillater.

Risiko 6: Åpne reklamasjonssaker mot utbygger (Aas og Nordal): Det er fortsatt åpne reklamasjonssaker mot utbygger som ikke er avklart. Dette kan medføre usikkerhet rundt utbedringer av feil og mangler i bygget.
  Confidence: 0.88
  Evidens: å rapportere og følge opp reklamasjonssaker mot Aas og Nordal. Det er fortsatt noen åpne reklamasjonssaker som det jobbes med å få avklart.

Risiko 7: Økte felleskostnader: For 2025 er det budsjettert med økte felleskostnader, blant annet som følge av beising av ytterkledning på begge bygningene i sameiet. Kostnaden er anslått til ca. kr 400 000 og dekkes gjennom økte månedlige felleskostnader i 2025 og 2026 (ca. kr 1 000/mnd for denne leiligheten).
  Confidence: 0.87
  Evidens: For 2025 er det budsjettert med økte felleskostnader.; Beising av ytterkledning av begge bygningen i sameiet er inkludert i mnd fellesutgifter 2025 og 2026, utgjør ca 1000 kr i mnd for denne leiligheten.; Arbeidet er anslått til ca. kr 400 000 etter anbudsrunde.; Styret har vurdert engangsinnbetaling, men valgt å dekke kostnadene gjennom økte felleskostnader.

Risiko 8: Restriksjonsområde for Avinors lufthavner: Eiendommen ligger i et restriksjonsområde for Avinors lufthavner (nær Oslo Gardermoen). Dette kan medføre begrensninger på byggehøyder og andre tiltak på eiendommen.
  Confidence: 0.82
  Evidens: Eiendommen ligger i et restriksjonsområde for Avinors lufthavner.

Risiko 9: Radonrisiko ikke avklart: Det er ikke foretatt radonmåling av eiendommen. Eiendommen ligger i et område med moderat til lav aktsomhet for radon, men uten måling er det usikkert om radonnivåene er innenfor akseptable grenser, særlig relevant ved utleie.
  Confidence: 0.82
  Evidens: Eiendommen ligget i et område med moderat til lav aktsomhet for radon.; Er det foretatt radonmåling? Nei; Dersom selger ikke har gitt informasjon om eiendommens radonnivå, vil kjøper overta risikoen for radonnivået i boligen/utleieenheten.

Risiko 10: Selger har ikke bodd i leiligheten: Selger har leid ut leiligheten siden den var ny og har dermed begrenset førstehåndskunnskap om boligens tilstand. Dette øker risikoen for at relevante opplysninger om feil og mangler ikke er kjent eller opplyst.
  Confidence: 0.8
  Evidens: Selger har ikke selv bodd i leiligheten. Leiligheten har vært leid ut til en familie på 3 fra den var ny.

Risiko 11: Garantiutbedring av ventilasjonsanlegget: Ventilasjonsanlegget har vært gjenstand for garantiutbedring så sent som februar 2026, noe som indikerer at det har vært feil eller mangler ved anlegget. Inspeksjons- og rengjøringsdato er ukjent.
  Confidence: 0.78
  Evidens: Garantiutbedring av ventilasjonsanlegget ved i leiligheten februar 2026.; Ventilasjonsanlegget var nytt i 2023. Det var sist inspisert i ukjent år? Det var rengjort i ukjent år?

Risiko 12: Legalpant og sameiernes solidaransvar: Kommunen har legalpant for kommunale avgifter, og de øvrige seksjonseierne har legalpant på inntil 2G for krav knyttet til sameieforholdet. Sameierne er ansvarlige overfor sameiets kreditorer i forhold til sin sameiebrøk, noe som kan medføre økonomisk risiko ved mislighold fra andre seksjonseiere.
  Confidence: 0.75
  Evidens: Legalpant: Kommunen har legalpant som sikkerhet for betaling av kommunale avgifter og eventuell eiendomsskatt. De øvrige seksjonseierne i sameiet har legalpant på inntil 2G som sikkerhet for krav knyttet til sameieforholdet, som felleskostnader.; I henhold til eierseksjonsloven § 31 er sameierne ansvarlige overfor sameiets kreditorer i forhold til sin sameiebrøk.

Risiko 13: Manglende tinglysning av felles uteområder: Sameiet jobber fortsatt med tinglysning av de felles uteområdene til sameiene i Smedhagen Park 1–7, og det ble ikke noe realsameie som først oppgitt av utbygger. Dette kan skape uklarhet om rettigheter og ansvar for uteområdene.
  Confidence: 0.72
  Evidens: å jobbe med planen for etterbehandling av ytterkledningen i Teiealleen 8 og 10; 2 sameiermøter med alle sameiene i Smedhagen Park 1 til 7 med Dalan advokatfirma i Lillestrøm ifm tinglysning av de felles uteområdene til sameiene; Det blir ikke noe realsameiet som først oppgitt av utbygger.

Dokumentkontekst:
[d155_d155 | Side [1]]
©mstr.no 2/19
www.bmtf.no
41

## Side 42

EIERSKIFTERAPPORT™
MER OM TILSTANDSGRADENE I DENNE RAPPORTEN:
TG 0 betyr at bygningsdelen ikke har noen avvik.
* Det er ingen tegn til slitasje.
TG 0
* Dokumentert fagmessig godt utført.
* Det er ingen merknader.
TG1 betyr at bygningsdelen kan ha mindre avvik.
TG 1 * Som forventet i forhold til alder/bruksslitasje.
* Strakstiltak anses ikke som nødvendig.
TG 2 betyr at bygningsdelen kan ha vesentlige avvik. Eksempler på TG2 kan være at bygningsdelen er:
* Feil

---

[d155_d155 | Side [1]]
foreligger oppdaterte godkjente byggetegninger som samsvarer med boligen.
Det er ingen avvik i forhold til rømming og romhøyde, ut ifra gjeldende forskrifter for da boligen/rommene ble
byggemeldt.
Tilleggsopplysninger:
Det anbefales å sette seg godt inn i vedlagt dokumentasjon til salgsoppgave samt selgers egenerklæring.
Tilstandsrapporten har en gyldighet på 12 mnd. fra rapportdato. Skulle det oppstå skader, endringer eller annet av
betydning ved boligen, oppfordres hjemmelshaver/selger til å informere om

---

[d155_d155 | Side [1]]
ormasjon om kartet, se internettsiden til NGU.
OVERORDNET FAGLIG VURDERING AV EIENDOMMEN:
Leiligheten vurderes å ha normalt god stand og greit vedlikeholdt på befaringtidspunktet. Det ble ikke registrert eller avdekket noen behov
for bygningsmessige strakstiltak utover normalt vedlikehold. Det gis tilstandgrader i.h.t standarden som denne rapporten bygger på, med
noen skjønnsmessige vurderinger. Ellers vises det til beskrivelser og vurderinger for de enkelte bygningsdeler i rapporten.
ANNET:
Boligselskap:

---

[d155_d155 | Side [1]]
revet, betyr det at det ikke er noen avvik i forhold til det som kan
forventes. Alder tatt i betraktning.
Takstmannens utdypende vurdering av bygningsdeler med TG 2 og TG 3 finnes på siste siden(e) i denne rapporten.
Denne rapporten er gyldig i 12 mnd.
©mstr.no 1/19
www.bmtf.no
40

## Side 41

EIERSKIFTERAPPORT™
OM EIERSKIFTERAPPORT™
Rapporten er utarbeidet med utgangspunkt i BMTFs faglige rammeverk for tilstandsanalyse ved boligsalg, samt avhendingslova med
tilhørende forskrift (tryggere bolighandel).
Som

---

[d155_d155 | Side [1]]
 ved boligen, oppfordres hjemmelshaver/selger til å informere om forholdene og oppdatere tilstandsrapporten.
I tilstandsrapporten har den bygningssakkyndige ikke gjort undersøkelser/vurderinger av bygningens estetikk eller
arkitektur.
Den bygningssakkyndige har ikke kontrollert om det foreligger offentligrettslige pålegg fra kommunen. Det er ikke
kontrollert om det er pågående byggesaker, endringer i reguleringsplan som berører den aktuelle eiendommen eller
andre ytre påvirkninger.
Hjemmelshavere opplyser

---

[d155_d155 | Side [1]]
tasjeskiller og innervegger oppført i
betong/gips med varierende overflater. Felles trappegang, med heis og felles parkeringskjeller.
Det ble ikke foretatt geologiske undersøkelser i forbindelse med utarbeidelse av denne rapporten. På bakgrunn av observasjoner gjort på
befaringsdagen, vurderes grunnforholdene å være stabile. Fundament ligger under bakkenivå og er ikke tilgjengelig for inspeksjon.
Det er ikke satt tilstandsgrad på utvendig kledning, takrenner, yttertak, terrasser/balkonger og utvendig

---

[d155_d155 | Side [1]]
or eksempel hullborring i vegger.
Det kan utføres inngrep i vegg eller etasjeskillere ved bad og i rom under terreng for undersøkelse av fukt ved mistanke til alvorlige avvik.
Alle bygningsdeler blir undersøkt, med stor vekt på de områdene som takstmannen, erfaringsmessig, kjenner som svake punkter. Selv om
takstmannens analyser er svært grundig, kan det forekomme skjulte feil og mangler.
For bolig er referansenivået for de ulike rom og bygningsdeler gitt som krav til tilstandsgrad TG 1, det vil si uten

---

[d155_d155 | Side [1]]
ens funksjon og videre bruk.
Anbefalt tiltak: Det anbefales å få vurdert sprekkdannelsene av fagperson med bygningsfaglig kompetanse for å avklare
årsak, utvikling og eventuelt behov for tiltak.
Ellers vurderes vegger, tak/himling og gulv å ha normale slitasje etter alder og bruk. Det er små hull etter veggfester og
bilder som er å forvente utifra bruk.
Trapper, garderobeskap, hyllesystemer og etasjeskille er ikke vurdert eller satt tilstandsgrad på.
Årsak: Det er ikke ett krav i Avhendingsloven for å

---

[d155_d155 | Side [1]]
modified since the time of signing.
→ For more information about document formats, see https://doc.ingroupe.com/developer
94006240
:ecnerefer
tnemucoD
39

## Side 40

EIERSKIFTERAPPORT™
Leilighet
Teiealleen 10
2030 Nannestad
www.e3.no
Boligens tekniske tilstand:
Antall TG
0
7
1
0
2
Utført av: Postboks 31
Takstmann Jessheim 2051
August Magnus 98023301
Dato: 28/02/2026 august@tmam.no
Dersom bygningsdelen kun har en tilstandsgrad og ikke er beskrevet, betyr det at det ikke er noen avvik i forhold til det som

---

[d155_d155 | Side [1]]
nger formålet
TG 3
* Er en fare for liv og helse
Det er et akutt behov for tiltak, og/eller det er avvik fra lover eller forskrifter som gjelder for den aktuelle bygningsdelen
eller byggverket.
TG iu betyr at bygningsdelen ikke er undersøkt. Denne tilstandsgraden skal kun benyttes unntaksvis. Eksempler kan
være:
TG iu
* Snødekket tak og krypekjeller uten inspeksjonsmulighet på tidspunktet for analysen
* Bygningsdelen, arealet eller rommet er ikke tilgjengelig for inspeksjon på tidspunktet for

---

[d155_d155 | Side [1]]
es inn. Kontakt
29

## Side 30

OM EIENDOMMEN
eiendomsmegler for eventuelle spørsmål. gjelder som utgangspunkt for hva som inkluderes i salget
– med mindre avvik er tydelig avtalt mellom kjøper og
Selger leverer eiendommen i ryddig og rengjort stand. selger.
Om informasjonsgrunnlaget
Kontrakts‑
Opplysninger om boligens størrelse og utforming, både
innvendig og utvendig, bygger på informasjon hentet fra
grunnlag
vedlagte tilstands‑ og boligsalgsrapport. Innholdet i
salgsoppgaven er basert på selgers

---

[d155_d155 | Side [1]]
lagets felles byggemasse og vedlikeholdsansvar, derfor ikke satt tilstandgrad. Det
betyr at det er fellesskapet i sameiet eller borettslaget som har ansvaret for både vedlikehold og eventuelle reparasjoner av disse
bygningene. Enkelte forhold og skader som måtte oppstå, håndteres dermed gjennom sameiets eller borettslagets vedlikeholdsplan og
budsjett.
©mstr.no 6/19
www.bmtf.no
45

## Side 46

EIERSKIFTERAPPORT™
FORUTSETNINGER: (Værforhold, hindringer, etc.):
Overskyet/regn og 2 plussgrader.
Leiligheten

---

[d155_d155 | Side [1]]
ige avvik. Eksempler på TG2 kan være at bygningsdelen er:
* Feil utført.
* Skadet, eller symptomer på skade.
* Svært slitt.
TG 2 * Nedsatt funksjon.
* Utgått på dato.
* Kort gjenværende brukstid.
* Det er behov for tiltak i nær fremtid.
* Det er grunn til overvåkning av denne bygningsdelen.
TG 3 betyr at bygningsdelen kan ha store eller alvorlige avvik. Eksempler på TG3 kan være at bygningsdelen er:
* Har total funksjonssvikt
* Fyller ikke lenger formålet
TG 3
* Er en fare for liv og helse
Det er et akutt

---

[d155_d155 | Side [1]]
liger. Rapporten erstatter ikke kjøpers undersøkelsesplikt eller selgers
opplysningsplikt i henhold til lov om avhending av fast eigedom.
NIVÅ AV ANALYSEN:
Tilstandsanalysen utføres ved grundige visuelle observasjoner kombinert med undersøkelser, målinger, bruk av egnede instrumenter og
registreringer. Dersom det er mistanke til høyt fuktnivå i vegger mot våtrom, eller i rom under terreng kan tilstandsanalysen omfatte
destruktive inngrep som for eksempel hullborring i vegger.
Det kan utføres inngrep i vegg

---

[d155_d155 | Side [1]]
. Mindre areal
avvik kan forekomme.
Rommene kan være måleverdige selv om bruken er i strid med byggteknisk forskrift.
Det er bruken av rommene på befaringsdagen som vurderes om hva det betegnes som i rapporten.
Arealopplysninger som er basert på fysisk oppmåling etter ferdigstillelse, vil kunne avvike fra arealopplysninger som er basert på
byggetegninger.
Dersom det ikke er framlagt byggetegninger for boligen, vil bygningssakkyndig ikke kunne måle opp arealer av hulrom i sjakter o.l.
som er skjult, og som

---

[d155_d155 | Side [1]]
ningsdeler gitt som krav til tilstandsgrad TG 1, det vil si uten skader og fagmessig
riktig utført og i henhold til gjeldende lov/forskrift som gjelder for den aktuelle boligen der ikke tilleggene angir annet. Generelt er
referansenivået byggeforskrifter som var gjeldende når bygningen/bygningsdelen ble byggesøkt.
LEVETIDSBETRAKTNINGER:
Når det refereres til levetid er dette basert på takstmannens erfaringstall og Byggforskserien 700.320 Intervaller for vedlikehold og
utskifting av bygningsdeler, SINTEF

---

[d155_d155 | Side [1]]
endingslova med
tilhørende forskrift (tryggere bolighandel).
Som del av en overgangsordning benyttes NS 3600:2018 – Teknisk tilstandsanalyse ved omsetning av bolig som normativt grunnlag
for struktur, begrepsbruk og fastsettelse av tilstandsgrader.
AVGRENSNING:
EIERSKIFTERAPPORT™ er godkjent av Byggmestrenes Takseringsforbund og kan kun benyttes av BMTF-sertifiserte takstmenn.
Rapporten er spesielt godt egnet ved eierskifte av boliger. Rapporten erstatter ikke kjøpers undersøkelsesplikt eller

---

[d155_d155 | Side [1]]
onomi, sikkerhet, funksjon
eller andre brukerønsker, er lagt til grunn.
VÆR OPPMERKSOM PÅ
Egenerklæringsskjema skal alltid legges frem for rapportansvarlig før tilstandsanalysen påbegynnes. Dersom egenerklæring ikke
foreligger, vil dette komme tydelig frem på en av de siste sidene av rapporten under ovenstående overskrift.
Dersom det er lagt frem dokumentasjon av pågående byggesaker og/eller manglende ferdigattest, og/eller midlertidig brukstillatelse. Så
vil også dette komme tydelig frem på en av de siste

---

[d155_d155 | Side [1]]
bservasjoner gjort på befaringsdagen,
vurderes grunnforholdene å være stabile. Fundament
Selger
ligger under bakkenivå og er ikke tilgjengelig for
inspeksjon. Magnus Glomnes og Iris Elin Andersen
Det er ikke satt tilstandsgrad på utvendig kledning,
Sameie
takrenner, yttertak, terrasser/ balkonger og utvendig
terreng da dette er en del av sameiets felles Sameiet Smedhagen Park 6 og 7
bygningsmasse og vedlikeholdsansvar. Ved taksering av
leilighet i sameier er det primært innvending i leiligheten

---

[d155_d155 | Side [1]]
 hindringer, etc.):
Overskyet/regn og 2 plussgrader.
Leiligheten ble kontrollert/inspisert i dagslys.
Grunnet mye snø på befaringstidspunktet ble ikke utvendig terreng, terrassen, yttertak, takrenner og nedløp vurdert eller satt
tilstandsgrad på. Dette kan innebære at eventuelle skader eller vedlikeholdsbehov på disse områdene ikke har blitt oppdaget under
befaringen. For å få en fullverdig vurdering av eiendommens tilstand på disse punktene anbefales det derfor en ny inspeksjon når
snøforholdene tillater

---

[d155_d155 | Side [1]]
ganisert av styret i sameiet
17 Selges eiendommen med utleiedel, leilighet, hybel eller tilsvarende?
Nei Ja
18 Kjenner du til om det er innredet/bruksendret/bygget ut i kjeller eller loft eller andre deler av boligen?
Nei Ja
19 Kjenner du til forslag eller vedtatte reguleringsplaner, andre planer, nabovarsel eller offentlige vedtak som kan medføre endringer i bruken av
eiendommen eller av dens omgivelser?
Nei Ja
20 Kjenner du til om det foreligger påbud/heftelser/krav/manglende tillatelser vedrørende

---

[d155_d155 | Side [1]]
ligen er helt eller delvis utleid.
Gjelder denne registerenheten med flere
Diverse
Legalpant: Kommunen har legalpant som sikkerhet for
betaling av kommunale avgifter og eventuell Det informeres om at ingen kan eie mer enn to
eiendomsskatt. De øvrige seksjonseierne i sameiet har boligseksjoner i sameiet, i henhold til eierseksjonsloven §
legalpant på inntil 2G som sikkerhet for krav knyttet til 23. Seksjoner som eies av nærstående eller gjennom et
sameieforholdet, som felleskostnader. Legalpant er pant

---

[d155_d155 | Side [1]]
foreligger påbud/heftelser/krav/manglende tillatelser vedrørende eiendommen?
Nei Ja
21 Er det foretatt radonmåling?
Nei Ja
22 Kjenner du til manglende brukstillatelse eller ferdigattest?
Nei Ja
23 Kjenner du til om det foreligger skaderapporter/ tilstandsvurderinger eller utførte målinger?
Nei Ja
24 Er det andre forhold av betydning ved eiendommen som kan være relevant for kjøper å vite om (f.eks. rasfare, tinglyste forhold eller private
avtaler)?
Nei Ja
Spørsmål for bolig i

---

[d155_d155 | Side [1]]
d flere
20.03.2023 ‑ Dokumentnr: 295595 ‑ Seksjonering
Tinglyste heftelser
Opprettet seksjoner:
Tinglyste heftelser og rettigheter: På eiendommen er det Snr: 12
tinglyst følgende heftelser og rettigheter som følger Formål: Bolig
eiendommens matrikkel ved overskjøting til ny Tilleggsdel: Bygning
hjemmelshaver: Sameiebrøk: 60/ 3116
3238/2 7/ 679/ 12: 01.01.2024 ‑ Dokumentnr: 242446 ‑ Omnummerering ved
30.03.2021 ‑ Dokumentnr: 377279 ‑ Bestemmelse om kommuneendring
parkering Tidligere: Knr:3036 Gnr:27 Bnr:679

---

[d155_d155 | Side [1]]
ru
Eiendommen ligger i et restriksjonsområde for Avinors Gjelder denne registerenheten med flere
lufthavner.
Eiendommen ligget i et område med moderat til lav 28.01.2025 ‑ Dokumentnr: 98969 ‑ Erklæring/ avtale
aktsomhet for radon. Bestemmelse om kostnader til drift og vedlikehold av
Eiendommen ligger hovedsakelig i gul støysone, men lekeplass BLK1 og BLK2
også dels i rød støysone ifb med vei. Gjelder denne registerenheten med flere
20.03.2023 ‑ Dokumentnr: 295595 ‑ Seksjonering
Tinglyste

---

[d155_d155 | Side [1]]
r:27 Bnr:679
Gjelder denne registerenheten med flere
Delareal 21 m2
Formål: Frisiktsone 28.01.2025 ‑ Dokumentnr: 98969 ‑ Erklæring/ avtale
Gjelder denne registerenheten med flere
Eiendommen ligger i et område under marin grense med
svært stor mulighet for marin leire. 28.01.2025 ‑ Dokumentnr: 98969 ‑ Erklæring/ avtale
Eiendommen ligger i et aktsomhetsområde for Bestemmelse om kostnader til drift og vedlkehold av
kvikkleireskred. friområde GF1bru
Eiendommen ligger i et restriksjonsområde for Avinors Gjelder

---

[d155_d155 | Side [1]]
el skråtak eller lav himlingshøyde. Arealet oppgis fellesgarasje og carport oppmålt, men kun retten til bruk
som tilleggsinformasjon til øvrige arealer. blir beskrevet.
Standard
Bygningssakkyndigs
Hvitevarer: Integrerte hvitevarer medfølger.
23

## Side 24

OM EIENDOMMEN
Beskrivelse: Det er noen tynne riss i murveggene inne i
Innbo og løsøre: Salgsoppgaven inkluderer NEFs leiligheten. Utbygger sa at disse kun utgjør en kosmetisk
standardliste "Oversikt over løsøre og tilbehør", som ulempe.
legges til grunn

---

[d155_d155 | Side [1]]
egal panterett i den enkelte eierseksjon,
begrenset til inntil 2 ganger folketrygdens grunnbeløp.
Vei, vann og avløp
Kjøper og selger er forpliktet til å signere den standard
Eiendommen er tilknyttet offentlig vann‑ og kjøpekontrakten utarbeidet av Emera som en del av
avløpssystem. Stikkledningene fra eiendommen og ut til eiendomshandleren. Kjøpekontrakten kan gjennomgås
det kommunale nettet er private, og hos eiendomsmegler før budet legges inn. Kontakt
29

## Side 30

OM EIENDOMMEN
eiendomsmegler for

---

[d155_d155 | Side [1]]
et ikke etter overtakelse reklameres
vedlagte materiell eller på https:/ / på forhold som burde ha vært oppdaget ved en ordinær
www.soderbergpartners.no/ eiendom/ boligkjoper/ gjennomgang.
Dersom det oppstår behov for ytterligere avklaringer,
Lovanvendelse
oppfordres interessenter til å kontakte eiendomsmegler
Regelverk og generelle opplysninger eller egne rådgivere før de gir bud.
Boligen selges med det inventar og utstyr som i henhold
til gjeldende lover, forskrifter eller offentlige pålegg skal Slitasje

---

[d155_d155 | Side [1]]
boliger) som rotter, mus,
maur eller lignende?
Nei Ja
28 Kjenner du til om det er/har vært skjeggkre i sameiet/laget/selskapet (fellesareal eller i andre boliger)?
Nei Ja
Initialer selger: IEA, MG 3
94006240
:ecnerefer
tnemucoD
37

## Side 38

Tilleggskommentar
Selger har ikke selv bodd i leiligheten. Leiligheten har vært leid ut til en familie på 3 fra den var ny. Frontplate på oppvaskmaskin har vært løs,
og ble da reparert av selger. Skuffene under vasken på badet har vært løse, og ble da reparert av

---

[d155_d155 | Side [1]]
g kledning, takrenner, yttertak, terrasser/balkonger og utvendig terreng da dette er en del av
sameiets felles bygningsmasse og vedlikeholdsansvar. Ved taksering av leilighet i sameier er det primært innvending i leiligheten og de
arealene som tilhører denne som er vurdert.
Temakart fra NGU viser at boligen ligger i ett område under marin grense.
Der det finnes marin leire, kan det også være kvikkleire.
Dataene kommer fra NGU. For mer informasjon om kartet, se internettsiden til NGU.
OVERORDNET FAGLIG

---

[d155_d155 | Side [1]]
arbeid, tømrerarbeid etc)?
Nei Ja
15 Er det nedgravd oljetank på eiendommen?
Nei Ja
Initialer selger: IEA, MG 2
94006240
:ecnerefer
tnemucoD
36

## Side 37

16 Kjenner du til om det har vært utført arbeid på terrasse/garasje/tak/fasade?
Svar Ja, av faglært og ufaglært/egeninnsats/dugnad
Vask av fasade har vært gjort på dugnad. Vask og beising av ytterkleding utført 2025 av firma organisert av
Beskrivelse
sameiets styre.
Arbeid utført av Oganisert av styret i sameiet
17 Selges eiendommen med utleiedel,

---

[d155_d155 | Side [1]]
"Oversikt over løsøre og tilbehør", som ulempe.
legges til grunn med mindre annet er spesifisert i
salgsoppgaven. Kjenner du til om det er/ har vært utført arbeid på
el‑anlegget eller andre installasjoner (f.eks. oljetank,
Gjenstander som er nevnt i standardlisten, men som ikke sentralfyr, ventilasjon)?
finnes på eiendommen, vil heller ikke følge med i salget. Svar: Ja, kun av faglært
Alt utstyr og installasjoner som medfølger overtas slik de Beskrivelse: Garantiutbedring av ventilasjonsanlegget
er, uten

---

[d155_d155 | Side [1]]
eldende lover, forskrifter eller offentlige pålegg skal Slitasje og bruk
følge med eiendommen, jf. avhendingsloven § 3‑4. Det må også forventes at eiendommer som har vært i
Fastmonterte eller spesialtilpassede installasjoner og bruk, vil kunne ha tegn til slitasje og eventuelle skader.
innredning som anses som varig tilknyttet boligen, følger Slik normal bruksslitasje og behov for vedlikehold må
normalt med i handelen, med mindre det foreligger en kjøper påregne, og dette vil normalt ikke gi grunnlag

---

[d155_d155 | Side [1]]
ennom et
sameieforholdet, som felleskostnader. Legalpant er pant firma regnes også med.
som ikke vises i grunnboksutskriften, og har prioritet
foran tinglyste lån, for eksempel banklån på seksjonen. I henhold til eierseksjonsloven § 31 er sameierne
Legalpant til kommunen har høyere prioritet enn ansvarlige overfor sameiets kreditorer i forhold til sin
legalpant til sameiet. sameiebrøk. Ved manglende betaling av fellesutgifter har
sameiet legal panterett i den enkelte eierseksjon,
begrenset til inntil 2

---

[d155_d155 | Side [1]]
yste forhold eller private
avtaler)?
Nei Ja
Spørsmål for bolig i sameie/borettslag/boligaksjeselskap:
25 Kjenner du til om sameiet/laget/selskapet er involvert i tvister av noe slag?
Nei Ja
26 Kjenner du til vedtak/forslag til vedtak om forhold vedr. eiendommen som kan medføre økte felleskostnader/økt fellesgjeld?
Nei Ja
27 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr i sameiet/laget/selskapet (fellesareal eller i andre boliger) som rotter, mus,
maur eller lignende?
Nei Ja
28 Kjenner

---

[d155_d155 | Side [1]]
ahert)

## Side 16

(Ingen tekst ekstrahert)

## Side 17

(Ingen tekst ekstrahert)

## Side 18

(Ingen tekst ekstrahert)

## Side 19

(Ingen tekst ekstrahert)

## Side 20

TEIEALLEEN 10
OM EIENDOMMEN

## Side 21

OM EIENDOMMEN
OM EIENDOMMEN
Økonomi
Andre kostnader:
Andre utgifter: Utover det som er nevnt under punktet
Prisantydning
«Felleskostnader», påløper kostnader til for eksempel
Kr 3 490 000 strøm, innboforsikring, innvendig vedlikehold og
abonnement til tv og internett (eventuelt oppgradering

---

[d155_d155 | Side [1]]
8969 ‑ Bruksrett er grensen satt til 90 døgn. Med korttidsutleie menes
Rettighet hefter i: Knr:3238 Gnr:27 Bnr:7 utleie i en sammenhengende periode på opptil 30 døgn.
Rettighet hefter i: Knr:3238 Gnr:27 Bnr:501
Bestemmelse om adkomstrett Det er krav om forsvarlige radonnivåer i utleieboliger.
Gjelder friområde GF1 Dersom selger ikke har gitt informasjon om
Gjelder denne registerenheten med flere eiendommens radonnivå, vil kjøper overta risikoen for
radonnivået i boligen/ utleieenheten. For mer

---

[d155_d155 | Side [1]]
 betaling av
ytterkledningen i Teiealleen 8 og 10 fellesutgifter har sameiet legal panterett i den enkelte
‑ å få til et samarbeid med alle sameiene i Smedhagen eierseksjon, begrenset til inntil 2 ganger folketrygdens
Park 1 til 7 rundt uteområdene. Det blir ikke noe grunnbeløp.
realsameiet som først oppgitt av utbygger.
Regnskap/ budsjett/ kostnadsøkninger: Sameiet hadde i
Mulighet for lån av styrerommet i 1. etasje bak heisen. 2024 samlede driftsinntekter på kr 2 266 387, hvorav
hoveddelen kom fra

---

[d155_d155 | Side [1]]
r fellesskapet i sameiet eller borettslaget som har ansvaret for både vedlikehold og eventuelle reparasjoner
av disse bygningene. Enkelte forhold og skader som måtte oppstå, håndteres dermed gjennom sameiets eller
borettslagets vedlikeholdsplan og budsjett.
Merknader:
TG 1 6.3 Ventilasjon
Ventilasjonsanlegget var nytt i 2023
Det var sist inspisert i ukjent år?
Det var rengjort i ukjent år?
Boligen har ikke naturlig ventilasjon.
Boligen har ikke mekanisk ventilasjon.
Boligen har balansert ventilasjon.
Det

---

[d155_d155 | Side [1]]
oner i sameiet, i henhold til eierseksjonsloven §
‑ å rapportere og følge opp reklamasjonssaker mot Aas 23. Seksjoner som eies av nærstående eller gjennom et
og Nordal. Det er fortsatt noen åpne reklamasjonssaker firma regnes også med. I henhold til eierseksjonsloven §
som det jobbes med å få avklart. 31 er sameierne ansvarlige overfor sameiets kreditorer i
‑ å jobbe med planen for etterbehandling av forhold til sin sameiebrøk. Ved manglende betaling av
ytterkledningen i Teiealleen 8 og 10 fellesutgifter

---

[d155_d155 | Side [1]]
mlede driftsinntekter på kr 2 266 387, hvorav
hoveddelen kom fra innkrevde felleskostnader (kr 2 224
Sameiet leier ut 3 innvendige boder og parkeringsplasser 012). De totale driftskostnadene utgjorde kr 2 062 830,
i garasjen med de største kostnadspostene knyttet til energi/
fjernvarme (kr 506 595), kommunale avgifter (kr 670
Beising av ytterkledning av begge bygningen i sameiet er 345), TV/ bredbånd (kr 262 216), forsikring (kr 95 922) og
inkludert i mnd fellesutgifter 2025 og 2026, utgjør ca drift og

---

[d155_d155 | Side [1]]
nenhver mnd. I Forkjøpsrett: Det praktiseres ikke forkjøpsrett i sameiet.
tilleggtilrettelegging for strøing og snørydding vinterstid.
‑ å sikre gode avtaler for sameiet. Styret har innhentet og Styregodkjennelse: Det praktiseres ikke
sammenlignet avtaler rundt vask av fellesarealer, styregodkjennelse i sameiet.
snørydding/ gressklipping, tv og bredbånd, og OBOS Det informeres om at ingen kan eie mer enn to
forretningsføreravtale. boligseksjoner i sameiet, i henhold til eierseksjonsloven §
‑ å rapportere

---

[d155_d155 | Side [1]]
alder og bruk.
Balkonger og terrasser er en del av sameiet eller borettslags felles bygningsmasse og vedlikeholdsansvar, derfor ikke satt
tilstandsgrad. Det betyr at det er fellesskapet i sameiet eller borettslaget som har ansvaret for både vedlikehold og
eventuelle reparasjoner av disse bygningene. Enkelte forhold og skader som måtte oppstå, håndteres dermed gjennom
sameiets eller borettslagets vedlikeholdsplan og budsjett.
Merknader: Utskifting/vedlikehold: Normal tid før represjon av betong 15 - 25

---

[d155_d155 | Side [1]]
for de øvrige beboerne. av ytterkledning i Teiealleen 10 i 2025. Arbeidet er anslått
Ved dyrehold gjelder følgende bestemmelser: til ca. kr 400 000 etter anbudsrunde. Det planlegges
1. Det forutsettes at eier av dyret er kjent med videre beising av Teiealleen 8 våren 2026. Styret har
26

## Side 27

OM EIENDOMMEN
vurdert engangsinnbetaling, men valgt å dekke
kostnadene gjennom økte felleskostnader. Delareal 901 m2
Formål Bolig/ forretning
Feltnavn BKB1
Vedtekter/ husordensregler
Sameiets husordensregler og

---

[d155_d155 | Side [1]]
agligvare, flere
Filter 42,00 fra 01.04.2026 serveringssteder og legekontor. Det er også splitter nytt
Felleskostnader 3 158,79 bibliotek i kommunehuset, treningssenter, ny
TV/ bredbånd 433,00 svømmehall, idrettshall og kunstgressbane.
Her har alle muligheten til å være med på sin
21

## Side 22

OM EIENDOMMEN
favorittaktivitet, for Nannestad kommune har lagt et godt samtykke foreligger. Styret kan kun nekte slik etablering
stykke arbeid i å skape et bredt og inkluderende sports‑ dersom det finnes saklig

---

[d155_d155 | Side [1]]
orter, leverandør
Anbefalt tiltak: Det anbefales å få vurdert av garasjeporten
sprekkdannelsene av fagperson med bygningsfaglig ‑ 1 vår dugnad
kompetanse for å avklare årsak, utvikling og eventuelt ‑ 1 sameiermøte for alle sameiene i Smedhagen Park 1 til
25

## Side 26

OM EIENDOMMEN
7 med Dalan advokatfirma i Lillestrøm ifm med politivedtektene angående dyrehold og
tinglysning av de felles uteområdene til sameiene straffebestemmelsene som gjelder for å holde dyr.
‑ 2 sameiermøter med alle sameiene i

---

[d155_d155 | Side [1]]
sforvaltning AS i henhold til kontrakt.
Gulv: Parkett og fliser. Sameiets revisor er PWC.
Bygningsdeler med tilstandsgrad 2: Styrets arbeid
‑ Andre rom I 2024 har styret gjennomført:
Det avdekkes setningssprekk i veggkonstruksjonen på ‑ 10 fysiske styremøter. Ett møte per måned utenom juli
stue/ kjøkken og på soverom 1. og august
Årsak: Sprekkdannelser i veggen har karakter som er ‑ 1 årsmøte og beboermøte i april
forenlig med bevegelser i grunnen. ‑ 2 åpen dør møter for beboere/ eiere å møte og ta

---

[d155_d155 | Side [1]]

inkludert i mnd fellesutgifter 2025 og 2026, utgjør ca drift og vedlikehold (kr 172 186). Dette ga et driftsresultat
1000 kr i mnd for denne leiligheten dvs det er litt buffer til på kr 203 557. Etter finansinntekter på kr 21 183 endte
neste års budsjett årsresultatet på kr 224 740, som foreslås overført til
egenkapital.
Forretningsfører: Obos Eiendomsforvaltning AS
For 2025 er det budsjettert med økte felleskostnader.
Sameiets forsikringsselskap: Tryg Forsikring Dette skyldes blant annet økning i

---

[d155_d155 | Side [1]]
iendommen eller
andre ytre påvirkninger.
Hjemmelshavere opplyser om at:
- I kjeller har det vært vanninntregning. Styret i sameiet har håndtert dette. Sportsboden utsettes tidvis for fuktig luft ifm.
værskifte.
- Det er noen tynne riss i murveggene inne i leiligheten.
- Garantiutbedring av ventilasjonsanlegget ved i leiligheten februar 2026.
- Vask av fasade har vært gjort på dugnad. Vask og beising av ytterkleding utført 2025 av firma organisert av sameiets
styre.
Takstmannens vurdering ved TG2:
3.1 Andre

---

[d155_d155 | Side [1]]
orvaltning og vedlikehold i det aktuelle sameiet
b) omgjøring av fellesarealer til nye bruksenheter eller utvidelse av eksisterende
bruksenheter
c) salg, kjøp, utleie eller leie av fast eiendom, inkludert seksjoner i sameiet som tilhører
eller skal tilhøre seksjonseierne i fellesskap, eller andre rettslige disposisjoner over
fast eiendom som går ut over vanlig forvaltning
d) samtykke til at formålet for én eller flere bruksenheter endres fra boligformål til annet
formål eller omvendt
e) samtykke til

---

[d155_d155 | Side [1]]
legg inklusive radiatorer. Sameiet har rett til
å føre nye slike installasjoner gjennom bruksenhetene hvis det ikke skaper vesentlig ulempe
for den aktuelle seksjonseieren. Sameiets vedlikeholdsplikt omfatter også utvendig
vedlikehold av vinduer, veranda- og ytterdører til boligene.
(3) Sameiets vedlikeholdsplikt omfatter også slikt som utskifting av sluk, vinduer, veranda- og
ytterdører til boligene eller reparasjon og utskifting av tak, bjelkelag, bærende
veggkonstruksjoner, samt rør eller ledninger som

---

[d155_d155 | Side [1]]
 vært gjort på dugnad.
det er/ har vært problemer med drenering, fuktinnsig, Vask og beising av ytterkleding utført 2025 av firma
øvrig fukt eller fuktmerker i underetasje/ kjeller? organisert av
Svar: Ja sameiets styre.
Beskrivelse: I kjeller har det vært vanninntregning. Styret i Arbeid utført av: Organisert av styret i sameiet
sameiet har håndtert dette. Sportsboden utsettes tidvis
for fuktig luft ifm værskifte. Tilleggskommentar:
Selger har ikke selv bodd i leiligheten. Leiligheten har
Kjenner du til

---

[d155_d155 | Side [1]]
ffene under vasken på badet har vært løse, og ble da reparert av selger. Det er overflateskader på den
nederste skuffens sider.
Jeg bekrefter at opplysningene er gitt etter beste skjønn. Jeg er kjent med at dersom jeg har gitt ufullstendige, uriktige eller misvisende
opplysninger om eiendommen, vil forsikringsselskapet kunne søke hel eller delvis regress for sine utbetalinger eller redusere sitt ansvar helt
eller delvis, jfr. vilkår for boligselgerforsikring punkt 7.1 og forsikringsavtaleloven kapittel

---

[d155_d155 | Side [1]]
ikring er du i trygge hender
hvis du oppdager feil eller mangler ved boligen du har
kjøpt. Forsikringen gir deg tilgang på hjelp fra advokater, Hva koster forsikringen?
saksbehandlere og jurister som er spesialiserte på Forsikringspremien trekkes i oppgjøret.
eiendomskjøp. De står klare til å hjelpe deg i fem år etter
overtagelse – uten at du trenger å bekymre deg for egne Borettslagseiendom: kr 9 300
og eventuelle idømte saksomkostninger.
Seksjonert eiendom/
kr 13 500
aksjebolig:
Få hjelpen du trenger!

---

[d155_d155 | Side [1]]
ikringsselskapet kan ved skriftlig samtykke akseptere tegning av forsikring også i ovennevnte tilfeller.
Dersom forsikringsselskapet ikke har gitt skriftlig samtykke, kan erstatningen bortfalle.
Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter, begrenset til siste 12 måneder før overtakelse.
Forøvrig oppfordrer selger potensielle kjøpere til å undersøke eiendommen grundig, jf avhendigsloven § 3-10 og kjøpsloven § 20
(aksjeboliger).
Gyldig forsikring forutsetter at det

---

[d155_d155 | Side [1]]
avers navn
Har du kjennskap til eiendommen?
Nei Ja
Når kjøpte du boligen?
År 2023
Hvor lenge har du eid boligen?
Antall år 2
Antall måneder 11
Har du bodd i boligen siste 12 måneder?
Nei Ja
I hvilket forsikringsselskap har du tegnet villa/husforsikring?
Forsikringsselskap Tryg Forsikring
Polise/avtalenr. 8598238
Spørsmål for alle typer eiendommer
1 Kjenner du til om det er/har vært feil tilknyttet våtrommene, f.eks. sprekker, lekkasje, råte, lukt eller soppskader?
Nei Ja
Initialer selger: IEA, MG

---

[d155_d155 | Side [1]]
oligsalgsrapport. Innholdet i
salgsoppgaven er basert på selgers informasjon,
Overtakelse
fagkyndig vurdering, samt opplysninger fra offentlige
Tidspunkt for overtakelse avtales mellom kjøper og registre som kommunen og Kartverket. Det er viktig at
selger. kjøper setter seg grundig inn i alle salgsdokumentene,
herunder salgsoppgave, tilstandsrapport og selgers
egenerklæring. Kjøper anses for å være kjent med
Forsikring
forhold som er tydelig beskrevet i salgsdokumentene,
Boligselgerforsikring: Selger har

---

[d155_d155 | Side [1]]
ikrer at eventuelle skjulte feil eller mangler blir avdekket, og at
anlegget oppfyller kravene til sikkerhet og funksjonalitet.
Merknader: Utskifting/vedlikehold: Antatt normal forventet levetid før utskifting av elektriske anlegg i boliger er ca 30
år.
©mstr.no 18/19
www.bmtf.no
57

## Side 58

EIERSKIFTERAPPORT™
Vær oppmerksom på:
Egenerklæringsskjema er levert i forbindelse med oppdraget.
Det er fremlagt godkjente tegninger av boligen.
Det foreligger oppdaterte godkjente byggetegninger som samsvarer med

---

[d155_d155 | Side [1]]
erg & rom og det som er godkjent av myndighetene. Alle
Partners. Boligkjøperforsikring er en rettshjelpsforsikring interessenter anbefales derfor å undersøke eiendommen
som gir trygghet og profesjonell juridisk hjelp dersom det nøye, gjerne sammen med fagperson, før bud gis.
oppdages uventede feil eller mangler ved boligen de Dersom kjøper velger å kjøpe uten å ha sett
neste fem årene. Les mer om Boligkjøperforsikring i eiendommen, kan det ikke etter overtakelse reklameres
vedlagte materiell eller på

---

[d155_d155 | Side [1]]
 overdragelsen. Svar: Ja
Har du ladeanlegg/ ladeboks for elbil i dag?
Eiendommens
Svar: Ja
Beskrivelse: Organisert gjennom Aneos
tilstand
ladeabonnement.
Takstmann: August Magnus
Kjenner du til om det har vært utført arbeid på terrasse/
Type takst avholdt av takstmann: Tilstandsrapport garasje/ tak/ fasade?
Svar: Ja, av faglært og ufaglært/ egeninnsats/ dugnad
Sammendrag selgers egenerklæring: Kjenner du til om Beskrivelse: Vask av fasade har vært gjort på dugnad.
det er/ har vært problemer med drenering,

---

[d155_d155 | Side [1]]
 mellom partene,
begrenset til tolv måneder før overtagelse. Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter,
begrenset til siste 12 måneder før overtakelse. Jeg bekrefter med dette at eiendommen ikke er en næringseiendom, at den ikke
selges som ledd i næringsvirksomhet eller mellom ektefeller eller slektninger i rett oppstigende eller nedstigende linje, søsken, eller
mellom personer som bor eller har bodd på boligeiendommen. Gyldig forsikring forutsetter at det for

---

[d155_d155 | Side [1]]
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

## Side

---

[d155_d155 | Side [1]]
, og gulvvarme på bad via vanbårenvarme. Status: Endelig vedtatt arealplan
Varmtvann oppvarmes via fjernvarmeanlegg. Delarealer:
Delareal 1 461 m2
Formål: Parkeringshus/ ‑anlegg
Regulerings og arealplaner
Feltnavn: f_SPH3
Eiendommen ligger i et område regulert til bolig/
forretning/ kontor. Bebyggelsesplaner
Gjeldende reguleringsplan: Besøk kommunens hjemmeside for mer informasjon.
Id: 14‑01 Navn: Moe/ Smedstuen/ Nygård, bygdemuseet og alleen
Navn: Moe, Smedstuen, Nygård og Alleen Plantype: Bebyggelsesplan

---

[d155_d155 | Side [1]]
et på web og gir uttrykk for
hvordan naboene vurderer nabolaget. FINN.no AS kan ikke holdes ansvarlig for feil/mangler i profilen. Copyright © Finn.no AS 2026
59

## Side 60

Primære transportmidler Varer/Tjenester
Nannestad Torg 4 min
1. Egen bil
Apotek 1 Nannestad 3 min
2. Buss
Aldersfordeling barn (0-18 år)
Trafikk
Lite trafikk 94/100
30% i barnehagealder
38% 6-12 år
Turmulighetene
18% 13-15 år
Nærhet til skog og mark 93/100 15% 16-18 år
Støynivået
Lite støynivå 92/100
Familiesammensetning
Sport
Par m.

---

[d155_d155 | Side [1]]
ering og andre felles
tiltak på eiendommen, belastes den seksjon installasjonen tilhører. Styret/årsmøtet avgjør
om remontering skal tillates.


69

## Side 70


(7) Forandringer som skjer i strid med de til enhver tid gjeldende bygningsforskrifter og andre
offentlige bestemmelser er ikke tillatt.
3-2 Ordensregler og dyrehold
(1) Årsmøtet kan fastsette vanlige ordensregler for eiendommen.
(2) Dyrehold er tillatt så lenge dette ikke på en urimelig eller unødvendig måte er

---

[d155_d155 | Side [1]]
 fuktmerker i underetasje/kjeller?
Nei Ja
I kjeller har det vært vanninntregning. Styret i sameiet har håndtert dette. Sportsboden utsettes tidvis for fuktig luft
Beskrivelse
ifm værskifte.
6 Kjenner du til om det er/har vært utettheter i terrasse/garasje/tak/fasade?
Nei Ja
I kjeller har det vært vanninntregning. Styret i sameiet har håndtert dette. Sportsboden utsettes tidvis for fuktig luft
Beskrivelse
ifm værskifte.
7 Kjenner du til om det er/har vært problemer med ildsted/skorstein/pipe f.eks. dårlig

---

[d155_d155 | Side [1]]





82

## Side 83

83

## Side 84

Reguleringsplankart
Eiendom: 27/679/0/12
Adresse: Teiealleen 10
Dato: 12.02.2026
UTM-32
Nannestad kommune Målestokk: 1:1000
©Norkart 2026
Kartet er produsert fra kommunens beste digitale kartbaser for området og inneholder viktige opplysninger om eiendommen og området omkring. Presentasjonen av informasjon er
i samsvar med nasjonal standard. Kartet kan inneholde feil, mangler eller avvik i forhold til kravene i oppgitt standard.
Kartet

---

[d155_d155 | Side [1]]
t er/har vært problemer med ildsted/skorstein/pipe f.eks. dårlig trekk, sprekker, pålegg, fyringsforbud eller lignende?
Nei Ja
8 Kjenner du til om det er/har vært f.eks. sprekker i mur, skjeve gulv eller lignende?
Nei Ja
Beskrivelse Det er noen tynne riss i murveggene inne i leiligheten. Utbygger sa at disse kun utgjør en kosmetisk ulempe.
9 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr på eiendommen som rotter, mus, maur eller lignende?
Nei Ja
10 Kjenner du til om det er/har vært

---

[d155_d155 | Side [1]]
kolene
Etablerere
Bra 72/100
Naboskapet
Offentlig transport Godt vennskap 70/100
Nannestad sykehjem/vgs. 4 min
Linje 410, 420, 446 0.4 km
Aldersfordeling
Nannestad torg 4 min
Linje 410, 413, 420, 446 0.4 km
Oslo Gardermoen 14 min
Oslo lufthavn stasjon 14 min
Linje F6, RE10, RE11, RX11, R12, R60 11.9 km
Skoler
Preståsen skole (1-7 kl.) 11 min
365 elever, 19 klasser 1 km
Nannestad ungdomsskole (8-10 kl.) 3 min
587 elever, 23 klasser 0.3 km
Nannestad videregående skole 5 min
950 elever 0.4 km
Ladepunkt for

---

[d155_d155 | Side [1]]
Navn: Moe, Smedstuen, Nygård og Alleen Plantype: Bebyggelsesplan ihht. Reguleringsplan
Plantype: Detaljregulering Status: Endelig vedtatt arealplan
Status: Endelig vedtatt arealplan Ikrafttredelse: 15.06.2004
Ikrafttredelse: 07.07.2016 Bestemmelser‑ https:/ / www.arealplaner.no/ 3238/
Bestemmelser ‑ https:/ / www.arealplaner.no/ 3238/ dokumenter/ 439/ 03‑10_Reguleringsbestemmelser.pdf
dokumenter/ 1411/
Reguleringsbestemmelser%20rev%2019.05.16%2C%20o Delarealer
ppdat.%20tittelfelt%20etter%20endring.pdf

---

[d155_d155 | Side [1]]
esarealene, eller rett utenfor inngangsdører.
Hamring, boring og annet arbeid som skaper støy må skje til tider der det er til minst mulig
sjenanse for naboene. På søndager og helligdager skal støyende arbeider unngås.
§ 3. Orden i fellesområdene
Sykler, sportsutstyr, leker og lignende skal ikke hensettes i oppganger, korridorer, plen og
lekeområder.
Det må utvises forsiktighet når innbo bæres inn og ut av bygget i forbindelse med flytting.
Sameier er ansvarlig for enhver skade som han eller hun påfører

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "Setningssprekker i veggkonstruksjonen (TG 2): Det er avdekket setningssprekker i veggkonstruksjonen på stue/kjøkken og soverom 1. Sprekkdannelsene har karakter som er forenlig med bevegelser i grunnen, noe som kan indikere pågående setninger i bygget.",
      "evidence": [
        "Det avdekkes setningssprekk i veggkonstruksjonen på stue/kjøkken og på soverom 1.",
        "Sprekkdannelser i veggen har karakter som er forenlig med bevegelser i grunnen.",
        "Det anbefales å få vurdert sprekkdannelsene av fagperson med bygningsfaglig kompetanse for å avklare årsak, utvikling og eventuelt behov for tiltak.",
        "Det er noen tynne riss i murveggene inne i leiligheten. Utbygger sa at disse kun utgjør en kosmetisk ulempe."
      ],
      "source_documents": [
        "d155_d155"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R2",
      "description": "Kvikkleire- og marin leire-risiko: Eiendommen ligger i et område under marin grense med svært stor mulighet for marin leire, og i et aktsomhetsområde for kvikkleireskred. Dette utgjør en potensiell geoteknisk risiko.",
      "evidence": [
        "Eiendommen ligger i et område under marin grense med svært stor mulighet for marin leire.",
        "Eiendommen ligger i et aktsomhetsområde for kvikkleireskred.",
        "Temakart fra NGU viser at boligen ligger i ett område under marin grense. Der det finnes marin leire, kan det også være kvikkleire."
      ],
      "source_documents": [
        "d155_d155"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R3",
      "description": "Støyrisiko: Eiendommen ligger hovedsakelig i gul støysone, men også dels i rød støysone i forbindelse med vei. Rød støysone innebærer høye støynivåer som kan påvirke bokvaliteten negativt.",
      "evidence": [
        "Eiendommen ligger hovedsakelig i gul støysone, men også dels i rød støysone ifb med vei."
      ],
      "source_documents": [
        "d155_d155"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R4",
      "description": "Fukt og vanninntrenging i kjeller/sportsbod: Det har vært vanninntrenging i kjelleren, og sportsboden utsettes tidvis for fuktig luft i forbindelse med værskifte. Dette kan medføre fuktskader på eiendeler lagret i boden.",
      "evidence": [
        "I kjeller har det vært vanninntregning. Styret i sameiet har håndtert dette. Sportsboden utsettes tidvis for fuktig luft ifm. værskifte.",
        "I kjeller har det vært vanninntregning. Styret i sameiet har håndtert dette. Sportsboden utsettes tidvis for fuktig luft ifm værskifte."
      ],
      "source_documents": [
        "d155_d155"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R5",
      "description": "Utvendig terreng, terrasse, yttertak og takrenner ikke vurdert: Grunnet snø på befaringstidspunktet ble disse områdene ikke inspisert. Eventuelle skader eller vedlikeholdsbehov kan dermed ha blitt oversett.",
      "evidence": [
        "Grunnet mye snø på befaringstidspunktet ble ikke utvendig terreng, terrassen, yttertak, takrenner og nedløp vurdert eller satt tilstandsgrad på. Dette kan innebære at eventuelle skader eller vedlikeholdsbehov på disse områdene ikke har blitt oppdaget under befaringen.",
        "For å få en fullverdig vurdering av eiendommens tilstand på disse punktene anbefales det derfor en ny inspeksjon når snøforholdene tillater."
      ],
      "source_documents": [
        "d155_d155"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R6",
      "description": "Åpne reklamasjonssaker mot utbygger (Aas og Nordal): Det er fortsatt åpne reklamasjonssaker mot utbygger som ikke er avklart. Dette kan medføre usikkerhet rundt utbedringer av feil og mangler i bygget.",
      "evidence": [
        "å rapportere og følge opp reklamasjonssaker mot Aas og Nordal. Det er fortsatt noen åpne reklamasjonssaker som det jobbes med å få avklart."
      ],
      "source_documents": [
        "d155_d155"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R7",
      "description": "Økte felleskostnader: For 2025 er det budsjettert med økte felleskostnader, blant annet som følge av beising av ytterkledning på begge bygningene i sameiet. Kostnaden er anslått til ca. kr 400 000 og dekkes gjennom økte månedlige felleskostnader i 2025 og 2026 (ca. kr 1 000/mnd for denne leiligheten).",
      "evidence": [
        "For 2025 er det budsjettert med økte felleskostnader.",
        "Beising av ytterkledning av begge bygningen i sameiet er inkludert i mnd fellesutgifter 2025 og 2026, utgjør ca 1000 kr i mnd for denne leiligheten.",
        "Arbeidet er anslått til ca. kr 400 000 etter anbudsrunde.",
        "Styret har vurdert engangsinnbetaling, men valgt å dekke kostnadene gjennom økte felleskostnader."
      ],
      "source_documents": [
        "d155_d155"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R8",
      "description": "Restriksjonsområde for Avinors lufthavner: Eiendommen ligger i et restriksjonsområde for Avinors lufthavner (nær Oslo Gardermoen). Dette kan medføre begrensninger på byggehøyder og andre tiltak på eiendommen.",
      "evidence": [
        "Eiendommen ligger i et restriksjonsområde for Avinors lufthavner."
      ],
      "source_documents": [
        "d155_d155"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.78
    },
    {
      "risk_id": "R9",
      "description": "Radonrisiko ikke avklart: Det er ikke foretatt radonmåling av eiendommen. Eiendommen ligger i et område med moderat til lav aktsomhet for radon, men uten måling er det usikkert om radonnivåene er innenfor akseptable grenser, særlig relevant ved utleie.",
      "evidence": [
        "Eiendommen ligget i et område med moderat til lav aktsomhet for radon.",
        "Er det foretatt radonmåling? Nei",
        "Dersom selger ikke har gitt informasjon om eiendommens radonnivå, vil kjøper overta risikoen for radonnivået i boligen/utleieenheten."
      ],
      "source_documents": [
        "d155_d155"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R10",
      "description": "Selger har ikke bodd i leiligheten: Selger har leid ut leiligheten siden den var ny og har dermed begrenset førstehåndskunnskap om boligens tilstand. Dette øker risikoen for at relevante opplysninger om feil og mangler ikke er kjent eller opplyst.",
      "evidence": [
        "Selger har ikke selv bodd i leiligheten. Leiligheten har vært leid ut til en familie på 3 fra den var ny."
      ],
      "source_documents": [
        "d155_d155"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R11",
      "description": "Garantiutbedring av ventilasjonsanlegget: Ventilasjonsanlegget har vært gjenstand for garantiutbedring så sent som februar 2026, noe som indikerer at det har vært feil eller mangler ved anlegget. Inspeksjons- og rengjøringsdato er ukjent.",
      "evidence": [
        "Garantiutbedring av ventilasjonsanlegget ved i leiligheten februar 2026.",
        "Ventilasjonsanlegget var nytt i 2023. Det var sist inspisert i ukjent år? Det var rengjort i ukjent år?"
      ],
      "source_documents": [
        "d155_d155"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.75
    },
    {
      "risk_id": "R12",
      "description": "Legalpant og sameiernes solidaransvar: Kommunen har legalpant for kommunale avgifter, og de øvrige seksjonseierne har legalpant på inntil 2G for krav knyttet til sameieforholdet. Sameierne er ansvarlige overfor sameiets kreditorer i forhold til sin sameiebrøk, noe som kan medføre økonomisk risiko ved mislighold fra andre seksjonseiere.",
      "evidence": [
        "Legalpant: Kommunen har legalpant som sikkerhet for betaling av kommunale avgifter og eventuell eiendomsskatt. De øvrige seksjonseierne i sameiet har legalpant på inntil 2G som sikkerhet for krav knyttet til sameieforholdet, som felleskostnader.",
        "I henhold til eierseksjonsloven § 31 er sameierne ansvarlige overfor sameiets kreditorer i forhold til sin sameiebrøk."
      ],
      "source_documents": [
        "d155_d155"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.72
    },
    {
      "risk_id": "R13",
      "description": "Manglende tinglysning av felles uteområder: Sameiet jobber fortsatt med tinglysning av de felles uteområdene til sameiene i Smedhagen Park 1–7, og det ble ikke noe realsameie som først oppgitt av utbygger. Dette kan skape uklarhet om rettigheter og ansvar for uteområdene.",
      "evidence": [
        "2 sameiermøter med alle sameiene i Smedhagen Park 1 til 7 med Dalan advokatfirma i Lillestrøm ifm tinglysning av de felles uteområdene til sameiene",
        "Det blir ikke noe realsameiet som først oppgitt av utbygger."
      ],
      "source_documents": [
        "d155_d155"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.72
    }
  ],
  "re_retrieval_queries": [
    "hva er status på tinglysning av felles uteområder Smedhagen Park",
    "hvilke konkrete reklamasjonssaker er åpne mot Aas og Nordal",
    "hva er årsaken til garantiutbedring av ventilasjonsanlegget februar 2026",
    "støysone rød gul vei Teiealleen 10 Nannestad detaljer",
    "geoteknisk rapport kvikkleire grunnundersøkelse Smedhagen Park",
    "restriksjonsområde Avinor konkrete begrensninger byggehøyde",
    "drenering fuktutbedring kjeller tiltak sameiet Smedhagen Park",
    "vedlikeholdsplan sameiet fremtidige kostnader budsjett 2026 2027"
  ],
  "reasoning": "\nGjennomgang av alle 13 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Setningssprekker (TG 2):** Meget godt dokumentert. Takstmann har satt TG 2, årsak er angitt som bevegelser i grunnen, og faglig vurdering anbefales. Selger bekrefter riss i egenerklæring, men bagatelliserer dem som kosmetiske. Confidence opprettholdes på 0.95.\n\n**R2 – Kvikkleire/marin leire:** Direkte bekreftet i grunnboksutskrift og NGU-temakart. Dobbelt evidens fra to separate dokumentkilder. Confidence opprettholdes på 0.95.\n\n**R3 – Støysone:** Bekreftet i grunnboksutskrift. Kun én kilde, men klar og entydig. Confidence justeres ned marginalt til 0.88 da det ikke fremgår hvilke deler av eiendommen som er i rød sone, og det mangler detaljer om støynivå i dB.\n\n**R4 – Fukt/vanninntrenging kjeller:** Bekreftet i både egenerklæring (spørsmål 5 og 6) og tilstandsrapportens sammendrag. Styret har håndtert det, men det er uklart om problemet er permanent utbedret. Confidence opprettholdes på 0.90.\n\n**R5 – Ikke-vurderte utvendige områder:** Direkte bekreftet i tilstandsrapporten under forutsetninger. Merk at dette delvis er en standardrisiko ved sameier (fellesareal er uansett sameiets ansvar), men snøforhindringen gjelder terrasse/balkong som tilhører seksjonen. Confidence justeres ned til 0.85.\n\n**R6 – Åpne reklamasjonssaker:** Bekreftet i styrets årsberetning/aktivitetsliste. Ingen detaljer om hvilke saker eller omfang. Confidence opprettholdes på 0.88.\n\n**R7 – Økte felleskostnader:** Meget godt dokumentert med konkrete tall (kr 400 000, ca. kr 1 000/mnd). Bekreftet i budsjett og styrets informasjon. Confidence justeres opp til 0.92 da evidensen er svært konkret.\n\n**R8 – Restriksjonsområde Avinor:** Bekreftet i grunnboksutskrift, men ingen detaljer om hvilke konkrete begrensninger dette medfører for denne eiendommen. Confidence justeres ned til 0.78 da risikoen er reell men konsekvensene er uklare for en leilighet i et eksisterende bygg.\n\n**R9 – Radon ikke målt:** Bekreftet i egenerklæring (spørsmål 21: Nei) og salgsoppgaven advarer eksplisitt om at kjøper overtar risikoen. Confidence justeres opp til 0.85 da dette er eksplisitt nevnt som kjøpers risiko.\n\n**R10 – Selger ikke bodd i leiligheten:** Bekreftet i tilleggskommentar til egenerklæring. Dette er en viktig risikofaktor som øker usikkerheten rundt alle andre opplysninger. Confidence justeres opp til 0.82.\n\n**R11 – Garantiutbedring ventilasjon:** Bekreftet i egenerklæring og tilstandsrapport. TG 1 er satt, men ukjent inspeksjons-/rengjøringsdato og nylig garantiutbedring gir usikkerhet. Confidence justeres ned til 0.75 da TG 1 indikerer at anlegget fungerer, men historikken er bekymringsfull.\n\n**R12 – Legalpant/solidaransvar:** Bekreftet i salgsoppgaven. Dette er imidlertid standardvilkår for alle eierseksjonssameier i Norge og ikke spesifikt for denne eiendommen. Risikoen er reell men generisk. Confidence justeres ned til 0.72.\n\n**R13 – Manglende tinglysning uteområder:** Bekreftet i styrets aktivitetsliste. Uklart om dette er en pågående prosess eller om det er løst. Manglende realsameie som opprinnelig lovet av utbygger er en konkret avvik fra det som ble kommunisert ved kjøp. Confidence opprettholdes på 0.72.\n\n**Manglende risikoer identifisert:**\n- Ingen TG 3-forhold er nevnt, men det bør bekreftes.\n- Etterbehandling av ytterkledning Teiealleen 8 (vår 2026) er nevnt – dette er en fremtidig kostnad som ikke er fullt ut reflektert i R7.\n- Begrensning på korttidsutleie (maks 90 døgn/år, maks 30 døgn sammenhengende) er nevnt i dokumentet og kan være relevant for kjøpere som vurderer utleie.\n- Eiergrense (maks 2 seksjoner per eier) er standard men bør nevnes.\n- Frisiktsone (delareal 21 m2) er tinglyst – kan begrense bruk av deler av eiendommen.\n"
}

## Raw Response
```json
{
  "id": "msg_01WRk7opwv4kfz5zviSec5pb",
  "container": null,
  "content": [
    {
      "id": "toolu_01BUj49STsc64BddpxkDVviK",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "Setningssprekker i veggkonstruksjonen (TG 2): Det er avdekket setningssprekker i veggkonstruksjonen på stue/kjøkken og soverom 1. Sprekkdannelsene har karakter som er forenlig med bevegelser i grunnen, noe som kan indikere pågående setninger i bygget.",
            "evidence": [
              "Det avdekkes setningssprekk i veggkonstruksjonen på stue/kjøkken og på soverom 1.",
              "Sprekkdannelser i veggen har karakter som er forenlig med bevegelser i grunnen.",
              "Det anbefales å få vurdert sprekkdannelsene av fagperson med bygningsfaglig kompetanse for å avklare årsak, utvikling og eventuelt behov for tiltak.",
              "Det er noen tynne riss i murveggene inne i leiligheten. Utbygger sa at disse kun utgjør en kosmetisk ulempe."
            ],
            "source_documents": [
              "d155_d155"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R2",
            "description": "Kvikkleire- og marin leire-risiko: Eiendommen ligger i et område under marin grense med svært stor mulighet for marin leire, og i et aktsomhetsområde for kvikkleireskred. Dette utgjør en potensiell geoteknisk risiko.",
            "evidence": [
              "Eiendommen ligger i et område under marin grense med svært stor mulighet for marin leire.",
              "Eiendommen ligger i et aktsomhetsområde for kvikkleireskred.",
              "Temakart fra NGU viser at boligen ligger i ett område under marin grense. Der det finnes marin leire, kan det også være kvikkleire."
            ],
            "source_documents": [
              "d155_d155"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R3",
            "description": "Støyrisiko: Eiendommen ligger hovedsakelig i gul støysone, men også dels i rød støysone i forbindelse med vei. Rød støysone innebærer høye støynivåer som kan påvirke bokvaliteten negativt.",
            "evidence": [
              "Eiendommen ligger hovedsakelig i gul støysone, men også dels i rød støysone ifb med vei."
            ],
            "source_documents": [
              "d155_d155"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R4",
            "description": "Fukt og vanninntrenging i kjeller/sportsbod: Det har vært vanninntrenging i kjelleren, og sportsboden utsettes tidvis for fuktig luft i forbindelse med værskifte. Dette kan medføre fuktskader på eiendeler lagret i boden.",
            "evidence": [
              "I kjeller har det vært vanninntregning. Styret i sameiet har håndtert dette. Sportsboden utsettes tidvis for fuktig luft ifm. værskifte.",
              "I kjeller har det vært vanninntregning. Styret i sameiet har håndtert dette. Sportsboden utsettes tidvis for fuktig luft ifm værskifte."
            ],
            "source_documents": [
              "d155_d155"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R5",
            "description": "Utvendig terreng, terrasse, yttertak og takrenner ikke vurdert: Grunnet snø på befaringstidspunktet ble disse områdene ikke inspisert. Eventuelle skader eller vedlikeholdsbehov kan dermed ha blitt oversett.",
            "evidence": [
              "Grunnet mye snø på befaringstidspunktet ble ikke utvendig terreng, terrassen, yttertak, takrenner og nedløp vurdert eller satt tilstandsgrad på. Dette kan innebære at eventuelle skader eller vedlikeholdsbehov på disse områdene ikke har blitt oppdaget under befaringen.",
              "For å få en fullverdig vurdering av eiendommens tilstand på disse punktene anbefales det derfor en ny inspeksjon når snøforholdene tillater."
            ],
            "source_documents": [
              "d155_d155"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R6",
            "description": "Åpne reklamasjonssaker mot utbygger (Aas og Nordal): Det er fortsatt åpne reklamasjonssaker mot utbygger som ikke er avklart. Dette kan medføre usikkerhet rundt utbedringer av feil og mangler i bygget.",
            "evidence": [
              "å rapportere og følge opp reklamasjonssaker mot Aas og Nordal. Det er fortsatt noen åpne reklamasjonssaker som det jobbes med å få avklart."
            ],
            "source_documents": [
              "d155_d155"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R7",
            "description": "Økte felleskostnader: For 2025 er det budsjettert med økte felleskostnader, blant annet som følge av beising av ytterkledning på begge bygningene i sameiet. Kostnaden er anslått til ca. kr 400 000 og dekkes gjennom økte månedlige felleskostnader i 2025 og 2026 (ca. kr 1 000/mnd for denne leiligheten).",
            "evidence": [
              "For 2025 er det budsjettert med økte felleskostnader.",
              "Beising av ytterkledning av begge bygningen i sameiet er inkludert i mnd fellesutgifter 2025 og 2026, utgjør ca 1000 kr i mnd for denne leiligheten.",
              "Arbeidet er anslått til ca. kr 400 000 etter anbudsrunde.",
              "Styret har vurdert engangsinnbetaling, men valgt å dekke kostnadene gjennom økte felleskostnader."
            ],
            "source_documents": [
              "d155_d155"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R8",
            "description": "Restriksjonsområde for Avinors lufthavner: Eiendommen ligger i et restriksjonsområde for Avinors lufthavner (nær Oslo Gardermoen). Dette kan medføre begrensninger på byggehøyder og andre tiltak på eiendommen.",
            "evidence": [
              "Eiendommen ligger i et restriksjonsområde for Avinors lufthavner."
            ],
            "source_documents": [
              "d155_d155"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.78
          },
          {
            "risk_id": "R9",
            "description": "Radonrisiko ikke avklart: Det er ikke foretatt radonmåling av eiendommen. Eiendommen ligger i et område med moderat til lav aktsomhet for radon, men uten måling er det usikkert om radonnivåene er innenfor akseptable grenser, særlig relevant ved utleie.",
            "evidence": [
              "Eiendommen ligget i et område med moderat til lav aktsomhet for radon.",
              "Er det foretatt radonmåling? Nei",
              "Dersom selger ikke har gitt informasjon om eiendommens radonnivå, vil kjøper overta risikoen for radonnivået i boligen/utleieenheten."
            ],
            "source_documents": [
              "d155_d155"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R10",
            "description": "Selger har ikke bodd i leiligheten: Selger har leid ut leiligheten siden den var ny og har dermed begrenset førstehåndskunnskap om boligens tilstand. Dette øker risikoen for at relevante opplysninger om feil og mangler ikke er kjent eller opplyst.",
            "evidence": [
              "Selger har ikke selv bodd i leiligheten. Leiligheten har vært leid ut til en familie på 3 fra den var ny."
            ],
            "source_documents": [
              "d155_d155"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R11",
            "description": "Garantiutbedring av ventilasjonsanlegget: Ventilasjonsanlegget har vært gjenstand for garantiutbedring så sent som februar 2026, noe som indikerer at det har vært feil eller mangler ved anlegget. Inspeksjons- og rengjøringsdato er ukjent.",
            "evidence": [
              "Garantiutbedring av ventilasjonsanlegget ved i leiligheten februar 2026.",
              "Ventilasjonsanlegget var nytt i 2023. Det var sist inspisert i ukjent år? Det var rengjort i ukjent år?"
            ],
            "source_documents": [
              "d155_d155"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.75
          },
          {
            "risk_id": "R12",
            "description": "Legalpant og sameiernes solidaransvar: Kommunen har legalpant for kommunale avgifter, og de øvrige seksjonseierne har legalpant på inntil 2G for krav knyttet til sameieforholdet. Sameierne er ansvarlige overfor sameiets kreditorer i forhold til sin sameiebrøk, noe som kan medføre økonomisk risiko ved mislighold fra andre seksjonseiere.",
            "evidence": [
              "Legalpant: Kommunen har legalpant som sikkerhet for betaling av kommunale avgifter og eventuell eiendomsskatt. De øvrige seksjonseierne i sameiet har legalpant på inntil 2G som sikkerhet for krav knyttet til sameieforholdet, som felleskostnader.",
              "I henhold til eierseksjonsloven § 31 er sameierne ansvarlige overfor sameiets kreditorer i forhold til sin sameiebrøk."
            ],
            "source_documents": [
              "d155_d155"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.72
          },
          {
            "risk_id": "R13",
            "description": "Manglende tinglysning av felles uteområder: Sameiet jobber fortsatt med tinglysning av de felles uteområdene til sameiene i Smedhagen Park 1–7, og det ble ikke noe realsameie som først oppgitt av utbygger. Dette kan skape uklarhet om rettigheter og ansvar for uteområdene.",
            "evidence": [
              "2 sameiermøter med alle sameiene i Smedhagen Park 1 til 7 med Dalan advokatfirma i Lillestrøm ifm tinglysning av de felles uteområdene til sameiene",
              "Det blir ikke noe realsameiet som først oppgitt av utbygger."
            ],
            "source_documents": [
              "d155_d155"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.72
          }
        ],
        "re_retrieval_queries": [
          "hva er status på tinglysning av felles uteområder Smedhagen Park",
          "hvilke konkrete reklamasjonssaker er åpne mot Aas og Nordal",
          "hva er årsaken til garantiutbedring av ventilasjonsanlegget februar 2026",
          "støysone rød gul vei Teiealleen 10 Nannestad detaljer",
          "geoteknisk rapport kvikkleire grunnundersøkelse Smedhagen Park",
          "restriksjonsområde Avinor konkrete begrensninger byggehøyde",
          "drenering fuktutbedring kjeller tiltak sameiet Smedhagen Park",
          "vedlikeholdsplan sameiet fremtidige kostnader budsjett 2026 2027"
        ],
        "reasoning": "\nGjennomgang av alle 13 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Setningssprekker (TG 2):** Meget godt dokumentert. Takstmann har satt TG 2, årsak er angitt som bevegelser i grunnen, og faglig vurdering anbefales. Selger bekrefter riss i egenerklæring, men bagatelliserer dem som kosmetiske. Confidence opprettholdes på 0.95.\n\n**R2 – Kvikkleire/marin leire:** Direkte bekreftet i grunnboksutskrift og NGU-temakart. Dobbelt evidens fra to separate dokumentkilder. Confidence opprettholdes på 0.95.\n\n**R3 – Støysone:** Bekreftet i grunnboksutskrift. Kun én kilde, men klar og entydig. Confidence justeres ned marginalt til 0.88 da det ikke fremgår hvilke deler av eiendommen som er i rød sone, og det mangler detaljer om støynivå i dB.\n\n**R4 – Fukt/vanninntrenging kjeller:** Bekreftet i både egenerklæring (spørsmål 5 og 6) og tilstandsrapportens sammendrag. Styret har håndtert det, men det er uklart om problemet er permanent utbedret. Confidence opprettholdes på 0.90.\n\n**R5 – Ikke-vurderte utvendige områder:** Direkte bekreftet i tilstandsrapporten under forutsetninger. Merk at dette delvis er en standardrisiko ved sameier (fellesareal er uansett sameiets ansvar), men snøforhindringen gjelder terrasse/balkong som tilhører seksjonen. Confidence justeres ned til 0.85.\n\n**R6 – Åpne reklamasjonssaker:** Bekreftet i styrets årsberetning/aktivitetsliste. Ingen detaljer om hvilke saker eller omfang. Confidence opprettholdes på 0.88.\n\n**R7 – Økte felleskostnader:** Meget godt dokumentert med konkrete tall (kr 400 000, ca. kr 1 000/mnd). Bekreftet i budsjett og styrets informasjon. Confidence justeres opp til 0.92 da evidensen er svært konkret.\n\n**R8 – Restriksjonsområde Avinor:** Bekreftet i grunnboksutskrift, men ingen detaljer om hvilke konkrete begrensninger dette medfører for denne eiendommen. Confidence justeres ned til 0.78 da risikoen er reell men konsekvensene er uklare for en leilighet i et eksisterende bygg.\n\n**R9 – Radon ikke målt:** Bekreftet i egenerklæring (spørsmål 21: Nei) og salgsoppgaven advarer eksplisitt om at kjøper overtar risikoen. Confidence justeres opp til 0.85 da dette er eksplisitt nevnt som kjøpers risiko.\n\n**R10 – Selger ikke bodd i leiligheten:** Bekreftet i tilleggskommentar til egenerklæring. Dette er en viktig risikofaktor som øker usikkerheten rundt alle andre opplysninger. Confidence justeres opp til 0.82.\n\n**R11 – Garantiutbedring ventilasjon:** Bekreftet i egenerklæring og tilstandsrapport. TG 1 er satt, men ukjent inspeksjons-/rengjøringsdato og nylig garantiutbedring gir usikkerhet. Confidence justeres ned til 0.75 da TG 1 indikerer at anlegget fungerer, men historikken er bekymringsfull.\n\n**R12 – Legalpant/solidaransvar:** Bekreftet i salgsoppgaven. Dette er imidlertid standardvilkår for alle eierseksjonssameier i Norge og ikke spesifikt for denne eiendommen. Risikoen er reell men generisk. Confidence justeres ned til 0.72.\n\n**R13 – Manglende tinglysning uteområder:** Bekreftet i styrets aktivitetsliste. Uklart om dette er en pågående prosess eller om det er løst. Manglende realsameie som opprinnelig lovet av utbygger er en konkret avvik fra det som ble kommunisert ved kjøp. Confidence opprettholdes på 0.72.\n\n**Manglende risikoer identifisert:**\n- Ingen TG 3-forhold er nevnt, men det bør bekreftes.\n- Etterbehandling av ytterkledning Teiealleen 8 (vår 2026) er nevnt – dette er en fremtidig kostnad som ikke er fullt ut reflektert i R7.\n- Begrensning på korttidsutleie (maks 90 døgn/år, maks 30 døgn sammenhengende) er nevnt i dokumentet og kan være relevant for kjøpere som vurderer utleie.\n- Eiergrense (maks 2 seksjoner per eier) er standard men bør nevnes.\n- Frisiktsone (delareal 21 m2) er tinglyst – kan begrense bruk av deler av eiendommen.\n"
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
    "input_tokens": 18566,
    "output_tokens": 4818,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
