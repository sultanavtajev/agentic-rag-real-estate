# Trace: agentic_reflecting_iter1
- **Run ID:** 1695d717-d659-4ea0-9e74-3ce66b2ad0f8
- **Tidspunkt:** 2026-03-25T12:37:46.174580+00:00
- **Varighet:** 98.32s
- **Input tokens:** 21782
- **Output tokens:** 5279

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
Risiko 1: Manglende ferdigattest – kun midlertidig brukstillatelse foreligger
  Confidence: 0.97
  Evidens: Eiendommen har midlertidig brukstillatelse fordi arbeider på utomhus arealer ikke er ferdigstilt.; Av midlertidig brukstillatelse skal det fremgå hvilke arbeider som må ferdigstilles før ferdigattest kan gis.; For å sikre gjenstående arbeid har kjøper rett til å holde tilbake en forholdsmessig andel av kjøpesummen.

Risiko 2: Selger har ikke tegnet boligselgerforsikring, noe som svekker kjøpers reklamasjonsmuligheter overfor selger
  Confidence: 0.95
  Evidens: Boligselgerforsikring: Selger har ikke tegnet boligselgerforsikring.

Risiko 3: Radonmåling er ikke utført, og radonrisiko er ukjent
  Confidence: 0.93
  Evidens: Selger har ikke utført radonmåling.; Takstmannen har ikke kjennskap til radonmåling av boligen. Statens strålevern anbefaler radonmåling i bolig.; Boligen er oppført i henhold til TEK17, hvor det blant annet stilles krav til etablering av radonsperre i grunnkonstruksjonen.

Risiko 4: Skråtak/saltakskonstruksjon er en lukket fuktrisikokonstruksjon som ikke kan inspiseres fullt ut
  Confidence: 0.92
  Evidens: Boligen har saltakskonstruksjon, deler av øverste etasje har skråtak som i hovedsak er en lukket konstruksjon, og det er ikke kjent hvordan oppbyggingen er utført.; Erfaringsmessig betraktes slike konstruksjoner som fuktrisikokonstruksjoner.; Det kan være vanskelig å oppdage eventuelle fuktskader før de har utviklet seg over tid, da det er begrenset tilgang for inspeksjon og vedlikehold.; Lukkede konstruksjoner med skråtak gir ofte lite mulighet for lufting, noe som øker risikoen for kondens og opphopning av fukt i konstruksjonen.

Risiko 5: Yttertak og terrasse ikke inspisert på grunn av snødekke – skjulte skader kan foreligge
  Confidence: 0.91
  Evidens: Grunnet mye snø og snødekket yttertak var det ikke mulig å inspisere taktekkingen, takrenner og nedløp.; Grunnet snø på befaringstidspunktet ble ikke terrassen visuelt vurdert.; Det anbefales en ny inspeksjon når snøforholdene tillater det.; Inspeksjon av yttertaket ble utført fra bakkeplan. Dette innebærer at vurderingene er gjort visuelt fra bakken uten bruk av stige eller lift.

Risiko 6: Drenering og fuktsikring under bakkenivå er ikke tilgjengelig for inspeksjon
  Confidence: 0.88
  Evidens: Det er en begrensning at selve drenering/fuktsikring ligger under bakkenivå og er ikke tilgjengelig for inspeksjon.; Fundament ligger under bakkenivå og er ikke tilgjengelig for inspeksjon.; Det ble ikke foretatt geologiske undersøkelser i forbindelse med utarbeidelse av denne rapporten.

Risiko 7: Baderomsinnredning og tilstøtende vegger er ikke fullt undersøkt – risiko for skjulte fuktskader på bad
  Confidence: 0.85
  Evidens: Det gjøres oppmerksom på at baderomsinnredningen ikke er vurdert eller satt tilstandsgrad på.; Det er ikke boret hull i tilstøtende rom eller fra undersiden.; Det er ikke fuktkontrollert med egnet fuktmåleverktøy.; Det ble ikke utført hulboring i yttervegger for å måle fukt, grunnet at badet er fra 2023.; Risiko: Det kan gi økt risiko for skjulte skader som ikke ble avdekket på befaringstidspunktet.

Risiko 8: Trapper, garderobeskap, hyllesystemer og etasjeskille er ikke vurdert eller satt tilstandsgrad på
  Confidence: 0.82
  Evidens: Trapper, garderobeskap, hyllesystemer og etasjeskille er ikke vurdert eller satt tilstandsgrad på.; Årsak: Ikke ett krav i Avhendingsloven.; Risiko: Dette gir økt risiko for skjulte skade, skeivheter og andre relevante vedlikeholdsbehov.; Det anbefales å gjennomføre ytterligere undersøkelser, utført av fagperson.

Risiko 9: Nabotomt (Fåmyrsrøet 17) er regulert til bolig og kan bebygges – risiko for endrede lysforhold og nærmiljø
  Confidence: 0.88
  Evidens: Det gjøres oppmerksom på at tomt ved siden av, Adresse Fåmyrsrøet 17, er tomt som er regulert til bolig og dermed kan bebygges.

Risiko 10: Hjemmelshaver (Godvik Utvikling AS) har ikke selv bodd i boligen – begrenset førstehåndskunnskap om boligens tilstand
  Confidence: 0.8
  Evidens: Hjemmelshaver har ikke selv bodd i boligen og det er ikke gjort vesentlige endringer etter byggeår.; Denne boligen er nylig ferdigstilt, men har ikke vært bebodd.

Risiko 11: Formuesverdi er ikke beregnet – usikkerhet rundt fremtidig skattemessig verdi
  Confidence: 0.72
  Evidens: Formuesverdien er ikke beregnet.; Skatteetaten vil beregne en boligverdi (beregnet markedsverdi for bolig) basert på SSBs statistiske opplysninger om omsatte boliger.

Risiko 12: Sameie med Fåmyrsrøet 15A – kjøper plikter å dele kostnader for fellesområde og garasje uten at omfanget er fullt spesifisert
  Confidence: 0.78
  Evidens: Eiendommen blir i sameie med Fåmyrsrøet 15A og må dele kostnader for fellesområde samt garasje.

Risiko 13: Terrassebord står ubehandlet – økt risiko for rask nedbrytning og vedlikeholdsbehov
  Confidence: 0.8
  Evidens: Det gjøres oppmerksom på at terrassebordene står ubehandlet. For å sikre lang levetid og redusere vedlikeholdsbehov, anbefales det at man behandler [bordene].

Risiko 14: Legalpant til kommunen er ikke synlig i grunnboken og har prioritet foran tinglyste banklån
  Confidence: 0.85
  Evidens: Kommunen har legalpant som sikkerhet for betaling av kommunale avgifter og eventuell eiendomsskatt.; Legalpant er et pant som ikke vises i grunnboksutskriften, og har prioritet foran for eksempel tinglyste banklån på eiendommen.

Risiko 15: Ventilasjon er gitt TG2 – vesentlig avvik som bør undersøkes nærmere
  Confidence: 0.87
  Evidens: ANTALL TG: 1 VESENTLIGE AVVIK; Ventilasjon [er blant bygningsdeler med TG2].; Det anbefales å undersøke anleggene nærmere, utført av fagperson, for å avklare omfang og behov for eventuell utbedring.

Risiko 16: Funksjonstesting av elektrisk anlegg, varmekabler og hvitevarer er ikke utført under befaring
  Confidence: 0.8
  Evidens: Funksjonstesting av elektrisk anlegg, varmekabler, panelovner, hvitevarer, markiser, persienner o.l er ikke foretatt.

Risiko 17: Forsikringsforhold for eiendommen er ikke fremlagt
  Confidence: 0.75
  Evidens: Forsikringsforhold: Ikke fremlagt

Dokumentkontekst:
[d176_d176 | Side [1]]
r fast installert
oppvarmingskilde, vil ikke dette bli inkludert i handelen. Legalpant: Kommunen har legalpant som sikkerhet for
betaling av kommunale avgifter og eventuell
38

## Side 39

OM EIENDOMMEN
eiendomsskatt. Legalpant er et pant som ikke vises i selger.
grunnboksutskriften, og har prioritet foran for eksempel
tinglyste banklån på eiendommen.
Forsikring
Boligselgerforsikring: Selger har ikke tegnet
Vei, vann og avløp boligselgerforsikring.
Offentlig
Boligkjøperforsikring: Kjøper har anledning til

---

[d176_d176 | Side [1]]
pmerksom på at tomt ved siden av,
Adresse Fåmyrsrøet 17, er tomt som er regulert til bolig og dermed
Fåmyrsrøet 15B, 2030 NANNESTAD kan bebygges.
Gnr. 7, bnr. 104, snr. 2, ideell andel 1/ 1
i Nannestad kommune. Tinglyste heftelser
Tinglyste heftelser og rettigheter: På eiendommen er det
tinglyst følgende heftelser og rettigheter som følger
Selger eiendommens matrikkel ved overskjøting til ny
Godvik Utvikling AS hjemmelshaver:
Energimerke 3238/ 7/ 104/ 2:
Energikarakter: Ikke angitt 22.05.2023 ‑ Dokumentnr:

---

[d176_d176 | Side [1]]
:
Matrikkeldata: Gnr:7, Bnr: 104
Hjemmelshaver: Godvik Utvikling AS
Seksjonsnr: 2
Festenr: -
Andelsnr: -
Tomt: Felleseie tomt 837 m²
Konsesjonsplikt: Nei
Adkomst: OFFENTLIG
Vann: OFFENTLIG
Avløp: OFFENTLIG
Regulering: Boligbebyggelse-Framtidig Id KP2018-2035
Offentl. avg. pr. år: Kr 476,89 i 2025
Forsikringsforhold: Ikke fremlagt
Ligningsverdi: Fastsettes av skatteetaten
Byggeår: 2023
46

## Side 47

4/25
BMTF Byggmestrenes Takseringsforbund
EIERSKIFTERAPPORT™
BEFARINGEN:
Befaringsdato:

---

[d176_d176 | Side [1]]
 med eiendomsmegler dersom det er ble fullført, skal det stilles garanti i tråd med
spørsmål. bustadoppføringslova § 12. Dette følger av
avhendingslova § 2‑11. Hvis kjøper ikke anses som
Selger leverer eiendommen i ryddig og rengjort tilstand. forbruker, bortfaller kravet om garanti.
Eiendommen blir i sameie med Fåmyrsrøet 15A og må Dokumentasjon og opplysningsgrunnlag
dele kostnader for fellesområde samt garasje. Kjøper bes om å gå grundig gjennom all tilgjengelig
salgsinformasjon, inkludert prospekt og

---

[d176_d176 | Side [1]]
ger der dette er påbudt. 
Det er eier og brukers plikt til å se til at utstyret fore昀椀nnes på enhver eiendom. Hvis annet ikke er 
uttrykkelig avtalt, skal dette derfor alltid følge med ved salg av eiendom.
21. SAMTLIGE NØKLER til eiendommen som selger er i besittelse av skal overleveres kjøper på 
overtakelsen, herunder nøkler til eventuelle boder, uthus, garasjeportåpner e.l. Låses boder, uthus 
e.l. med hengelås, skal lås og nøkler til disse medfølge. 
22. GARASJEHYLLER, bodhyller, lagringshyller

---

[d176_d176 | Side [1]]
 Ja
18 Kjenner du til om det er innredet/bruksendret/bygget ut i kjeller eller loft eller andre deler av boligen?
Nei Ja
19 Kjenner du til forslag eller vedtatte reguleringsplaner, andre planer, nabovarsel eller offentlige vedtak som kan medføre endringer i bruken av
eiendommen eller av dens omgivelser?
Nei Ja
20 Kjenner du til om det foreligger påbud/heftelser/krav/manglende tillatelser vedrørende eiendommen?
Nei Ja
21 Er det foretatt radonmåling?
Nei Ja
22 Kjenner du til manglende brukstillatelse eller

---

[d176_d176 | Side [1]]
ar tatt forbehold i bud eller avtale på annen måte er 
inngått. Der intet annet er avtalt, vil løsøre og tilbehør medfølge slik dette fremkommer av avhl. § 3-4 
og § 3-5 og denne oversikt. 

Produkter og installasjoner som medfølger overdras uten noen form for garantier, utover eventuell 
gjenværende leverandørgaranti.

Dersom det er noe i nedenstående liste som ikke 昀椀nnes på eiendommen, vil det heller ikke medfølge.
1. HVITEVARER medfølger der dette er spesielt angitt i salgsoppgaven.
2.

---

[d176_d176 | Side [1]]
av fast eigedom (avhendingslova/avhl.) av 3. juli 1992 regulerer kjøper og selgers 
rettigheter og plikter ved overdragelse av fast eiendom og andeler i borettslag.

I henhold til avhl. § 3-4 skal eiendommen, når annet ikke er avtalt, overdras med innredninger og 
utstyr som etter lov, forskrift eller annet o昀昀entlig vedtak skal følge med. Det samme gjelder varig 
innredning og utstyr som enten er fastmontert eller er særskilt tilpasset bygningen, jf. avhl. § 3-5. 
Loven inneholder ingen detaljert

---

[d176_d176 | Side [1]]
måling?
Nei Ja
22 Kjenner du til manglende brukstillatelse eller ferdigattest?
Nei Ja
23 Kjenner du til om det foreligger skaderapporter/ tilstandsvurderinger eller utførte målinger?
Nei Ja
24 Er det andre forhold av betydning ved eiendommen som kan være relevant for kjøper å vite om (f.eks. rasfare, tinglyste forhold eller private
avtaler)?
Nei Ja
Initialer selger: ES 3
21006240
:ecnerefer
tnemucoD
71

## Side 72

Tilleggskommentar
Jeg bekrefter at opplysningene er gitt etter beste skjønn. Jeg er kjent

---

[d176_d176 | Side [1]]
gjeldende forskrifter. Ingen kjente feil eller mangler
finnes på eiendommen, vil heller ikke følge med i salget.
Alt utstyr og installasjoner som medfølger overtas slik de Kjenner du til om det er/ har vært utført arbeid på
er, uten garanti, med mindre det foreligger en gjeldende el‑anlegget eller andre installasjoner (f.eks. oljetank,
garanti fra produsent eller leverandør. sentralfyr, ventilasjon)?
Ja, kun av faglært. El‑anlegg installert som del av nybygg
Kjøper aksepterer at det kan forekomme hull og

---

[d176_d176 | Side [1]]
ravd oljetank på eiendommen?
Nei Ja
16 Kjenner du til om det har vært utført arbeid på terrasse/garasje/tak/fasade?
Svar Ja, kun av faglært
Arbeid utført som del av nybygg av faglærte entreprenører X-Element AS. Arbeider på terrasse, tak og fasade utført
Beskrivelse
i henhold til gjeldende forskrifter. Ingen kjente feil eller mangler.
Arbeid utført av X-Element AS
17 Selges eiendommen med utleiedel, leilighet, hybel eller tilsvarende?
Nei Ja
18 Kjenner du til om det er innredet/bruksendret/bygget ut i

---

[d176_d176 | Side [1]]
nt annet strøm, forsikring, tv‑/
internett og velavgift. (det er pliktig medlemskap
Omkostning kjøper velforening)
5 650 000,00 (Prisantydning)
Det er opp til kjøper å eventuelt inngå nye avtaler med
Omkostninger ønskede leverandører.
18 900 (Boligkjøperforsikring* (valgfritt))
17 500 (Dokumentavgift (avgiftsgrunnlag kr. 700.000,‑)) Formuesverdi
545 (Tinglysingsgebyr ‑ hjemmel) Info om formuesverdi: Formuesverdien er ikke beregnet.
545 (Tinglysningsgebyr ‑

---

[d176_d176 | Side [1]]
gjennom all tilgjengelig
salgsinformasjon, inkludert prospekt og vedlegg.
Opplysningene er hentet fra selger, samt offentlige
Kontrakts‑
registre som Kartverket og kommunen. Forhold som
tydelig fremgår av dokumentasjonen anses som kjent for
grunnlag
kjøper og kan derfor ikke etterpå påberopes som
mangler – dette gjelder også om dokumentene ikke er
Overtakelse lest.
Tidspunkt for overtakelse avtales mellom kjøper og
39

## Side 40

OM EIENDOMMEN
Undersøkelsesplikt foreligger feil som omfattes av

---

[d176_d176 | Side [1]]
OM EIENDOMMEN
Undersøkelsesplikt foreligger feil som omfattes av avhendingslovens §§ 3‑2
Alle interessenter anbefales å foreta en grundig til 3‑8, kan det foreligge en mangel. Det samme gjelder
gjennomgang av eiendommen før eventuelle bud inngis hvis det er gitt mangelfulle eller uriktige opplysninger
– gjerne sammen med fagkyndig. Dersom man velger å som kunne ha påvirket kjøpsbeslutningen – forutsatt at
kjøpe uten befaring, kan man ikke i ettertid kreve dette ikke ble rettet opp på en tydelig

---

[d176_d176 | Side [1]]
verdi: Formuesverdien er ikke beregnet.
545 (Tinglysningsgebyr ‑ pantedokument)
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ Skatteetaten vil beregne en boligverdi (beregnet
18 590 (Omkostninger totalt (uten Boligkjøperforsikring)) markedsverdi for bolig) basert på SSBs statistiske
37 490 (Omkostninger totalt (med Boligkjøperforsikring)) opplysninger om omsatte boliger.I beregningen tas det
hensyn til din boligs beliggenhet, areal, byggeår og

---

[d176_d176 | Side [1]]
kring.
Offentlig
Boligkjøperforsikring: Kjøper har anledning til å tegne
boligkjøperforsikring. Vedlagt i salgsoppgaven følger
Utleie informasjon om Boligkjøperforsikring fra Söderberg &
Adgang til utleie: Boligen kan i sin helhet fritt leies ut Partners. Boligkjøperforsikring er en rettshjelpsforsikring
som gir trygghet og profesjonell juridisk hjelp dersom det
oppdages uventede feil eller mangler ved boligen de
Radonmåling neste fem årene. Les mer om Boligkjøperforsikring i
Selger har ikke utført

---

[d176_d176 | Side [1]]
l disse medfølge. 
22. GARASJEHYLLER, bodhyller, lagringshyller og oppheng til bildekk medfølger såfremt de er 
fastmontert.

Planter, busker og trær som er plantet på tomten, eller fastmonterte kasser og lignende er en del av 
eiendommen og medfølger i handelen.
Emera Eiendomsmegling AS - Henrik Ibsens gate 40, 0255 Oslo

## Side 102

Din bolig.
Din historie.
Det er Emera.
Eirik Jørgen Off Line Stuve
Eiendomsmegler | Fagansvarlig | Partner Eiendomsmegler | Partner
Minnene fra da du eide huset lever

---

[d176_d176 | Side [1]]
år kontrakten er signert av begge parter,
begrenset til siste 12 måneder før overtakelse. Jeg bekrefter med dette at eiendommen ikke er en næringseiendom, at den ikke
selges som ledd i næringsvirksomhet eller mellom ektefeller eller slektninger i rett oppstigende eller nedstigende linje, søsken, eller
mellom personer som bor eller har bodd på boligeiendommen. Gyldig forsikring forutsetter at det for helårs- og fritidsbolig
foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova

---

[d176_d176 | Side [1]]
/pipe f.eks. dårlig trekk, sprekker, pålegg, fyringsforbud eller lignende?
Nei Ja
8 Kjenner du til om det er/har vært f.eks. sprekker i mur, skjeve gulv eller lignende?
Nei Ja
9 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr på eiendommen som rotter, mus, maur eller lignende?
Nei Ja
10 Kjenner du til om det er/har vært skjeggkre i boligen?
Nei Ja
11 Kjenner du til om det er/har vært utført arbeid på el-anlegget eller andre installasjoner (f.eks. oljetank, sentralfyr, ventilasjon)?
Svar

---

[d176_d176 | Side [1]]
nkelt og greit – fordi vi
urealistiske løfter eller forskjønnede beskrivelser. vet at det gir de beste resultatene. Erfaringen
vår bekrefter det, og erfaring har vi mye av.
emera.no
99

## Side 100

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
Lov om avhending av fast eigedom (avhendingslova/avhl.) av 3. juli 1992 regulerer

---

[d176_d176 | Side [1]]
a 2023.
tilstandsrapport fra bygningssakkyndig. Rapporten gir en Inspeksjon av yttertaket ble utført fra bakkeplan. Dette
teknisk vurdering av boligen og påviser eventuelle avvik. innebærer at vurderingene er gjort visuelt fra bakken
Det er viktig å merke seg at forhold som er vurdert med uten bruk av stige eller lift, noe som kan begrense
TG2 og TG3 bør gjennomgås nøye, ettersom disse muligheten til å oppdage mindre skader eller detaljer på
indikerer avvik fra normal slitasje eller høy alder, og kan

---

[d176_d176 | Side [1]]
APPORT™
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
* Feil utført.
* Skadet, eller symptomer på skade.
* Svært

---

[d176_d176 | Side [1]]
VERTIKALDELT TOMANNSBOLIG
Fåmyrsrøet 15 B, 2030 Nannestad
ANTALL TG BOLIGENS TEKNISKE TILSTAND:
INGEN AVVIK
0
15 INGEN VESENTLIGE AVVIK
1 VESENTLIGE AVVIK
0 STORE ELLER ALVORLIGE AVVIK
5 IKKE UNDERSØKT
Dersom bygningsdelen kun har en tilstandsgrad og ikke er beskrevet, betyr det at det ikke er noen avvik i
forhold til det som kan forventes. Alder tatt i betraktning.
Takstmannens utdypende vurdering av bygningsdeler med TG 2 og TG 3 finnes på siste siden(e) i denne
rapporten.
Takstmann
August

---

[d176_d176 | Side [1]]
n er:
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
Det er et akutt behov for tiltak, og/eller det er avvik fra lover

---

[d176_d176 | Side [1]]
urdering av
eiendommens tilstand på disse punktene anbefales det derfor en
ny inspeksjon når snøforholdene tillater det.
Rapporten legger til grunn boligens tilstand på
befaringstidspunktet og byggeår.
Utvendige konstruksjoner over terreng er inspisert fra bakkeplan.
Inspeksjonen ble kun utført på lett tilgjengelige deler av
konstruksjonene. Dette kan medføre at skader/mangler som er
Forutsetninger:
tildekket/skjult ikke fremkommer i taksten.
Funksjonstesting av elektrisk anlegg, varmekabler,

---

[d176_d176 | Side [1]]
r på
indikerer avvik fra normal slitasje eller høy alder, og kan takflaten, og det anbefales eventuelt en nærmere
medføre behov for utbedring. Bygningsdeler vurdert med inspeksjon ved behov for mer grundig vurdering.
TGIU er ikke blitt undersøkt av takstmann. Grunnet mye snø og snødekket yttertak var det ikke
mulig å inspisere taktekkingen, takrenner og nedløp.
Bygningsdeler med TG2: Årsak: Det var mye snø og snødekket yttertak på
befaringstidspunktet.
Ventilasjon Risiko: Det kan være risiko for at det er

---

[d176_d176 | Side [1]]
ar egne
punkter lenger ned i rapporten.
Vegger, tak/himlinger og gulv i boligen vurderes å ha normal slitasje etter alder og bruk. TG1
Trapper, garderobeskap, hyllesystemer og etasjeskille er ikke vurdert eller satt tilstandsgrad på.
Årsak: Ikke ett krav i Avhendingsloven.
Risiko: Dette gir økt risiko for skjulte skade, skeivheter og andre relevante vedlikeholdsbehov.
Konsekvens: Forholdet kan medføre behov for utbedring og vedlikeholdsbehov.
Anbefalt tiltak: Det anbefales å gjennomføre ytterligere

---

[d176_d176 | Side [1]]
v ødelagte deler i etasjeskille av tre er 40 - 60 år.
FORMÅL MED ANALYSEN:
Tilstandsvurderingen er gjennomført for å avdekke eventuelle avvik og mangler ved boligen. Rapporten er utarbeidet i forbindelse
med salg av den aktuelle eiendommen.
VESENTLIGE ENDRINGER ETTER BYGGEÅR:
Hjemmelshaver har ikke selv bodd i boligen og det er ikke gjort vesentlige endringer etter byggeår.
48

## Side 49

6/25
BMTF Byggmestrenes Takseringsforbund
EIERSKIFTERAPPORT™
AREALER OG ANVENDELSE:
Arealmåling
Arealmålingene i denne

---

[d176_d176 | Side [1]]
 kommunen dersom det er spørsmål knyttet til
dokumentasjon eller godkjenningsstatus.
Tilstandsrapporten har en gyldighet på 12 mnd. fra rapportdato. Skulle det oppstå skader, endringer eller annet
av betydning ved boligen, oppfordres hjemmelshaver/selger til å informere om forholdene og oppdatere
tilstandsrapporten.
I tilstandsrapporten har den bygningssakkyndige ikke gjort undersøkelser/vurderinger av bygningens estetikk
eller arkitektur.
ANBEFALTE YTTERLIGERE UNDERSØKELSER:
Radonmålinger: Den

---

[d176_d176 | Side [1]]
er i taksten.
Funksjonstesting av elektrisk anlegg, varmekabler, panelovner,
hvitevarer, markiser, persienner o.l er ikke foretatt.
Det er kun stedvis gjort enkelte målinger (krysslaser og
avstandsmåler) eller inngrep i konstruksjonen der hvor dette er
beskrevet.
Tomteareal er opplysninger som er innhentet av
bygningssakkyndig fra Kartverket og Eiendomsverdi.no, avvik kan
forekomme.
Hjemmelshaver ga muntlig beskrivelse om årstall og
bygningsmessige påkostninger om de forskjellige beskrivende
byggedeler i

---

[d176_d176 | Side [1]]
trepanel isolert etter TEK 17 krav. Trebjelkelag i etasjeskiller og
innervegger oppført i gips med varierende overflater.
47

## Side 48

5/25
BMTF Byggmestrenes Takseringsforbund
EIERSKIFTERAPPORT™
OVERORDNET FAGLIG VURDERING AV EIENDOMMEN:
Tomannsboligen vurderes å være i god stand og tilnærmet ny på befaringstidspunktet. Det ble ikke registrert eller avdekket noen
behov for bygningsmessige strakstiltak utover normalt vedlikehold. Det gis tilstandgrader i.h.t standarden som denne rapporten
bygger på, med

---

[d176_d176 | Side [1]]

Det er ikke mulig å undersøke diffusjonssperre uten å demontere bygningsdeler.
Vegger: Malt gips.
Tak/himlinger: Malt gips.
Vegger og tak/himling vurderes å ha normal slitasje etter alder og bruk. TG1
Merknader:
Utskifting/vedlikehold: Normal tid før maling av plater er 8 - 16 år.
TG 1 9.1.2 Gulvets overflate
Det er ikke påvist knirk i gulvene.
Det er ikke påvist setninger.
Det er ikke påvist sprekker i fuger
Det er ikke påvist avvik overganger og skjøter.
Det er ikke påvist sopp, råteskade og

---

[d176_d176 | Side [1]]
utbedring og vedlikeholdsbehov.
Anbefalt tiltak: Det anbefales å gjennomføre ytterligere undersøkelser, utført av fagperson.
Merknader:
Utskifting/vedlikehold: Normal forventet levetid for bad er 15 - 25 år avhengig av oppbygging og bruksbelastning.
Utskifting/vedlikehold: Normal forventet levetid før utskifting armaturer 10 - 30 år.
Utskifting/vedlikehold: Normal forventet levetid før utskifting klosetter og servanter 25 - 45 år.
TG 1 7.1.2 Overflate gulv
Det er ikke påvist riss og sprekker.
Det er ikke

---

[d176_d176 | Side [1]]
t er ikke påvist riss og sprekker.
Det er ikke påvist sprekker i fuger.
Det er ikke påvist bom (hulrom) under fliser.
Det er ikke påvist fuktskader eller spor etter skadedyr.
Det er ventiler som kan åpnes.
Vegger: Fliser.
Tak/himling: Malt gips.
Bad fra 2023 inneholder:
- Servant med 1-greps blandebatteri og servantskap med laminerte skuffer
- Vegghengt dusj med 1-greps blandebatteri og svingbar glassdør
- WC med innebygd sisterne
Veggfliser og tak/himling vurderes å ha normal slitasje etter alder og bruk.

---

[d176_d176 | Side [1]]
 tas derfor forbehold om skjulte feil eller mangler som ikke kan avdekkes
uten slike undersøkelser.
Ytterkledingen vurderes å ha normal slitasje etter alder- og værslitasje. TG1
Merknader:
Utskifting/vedlikehold: Normal tid før utskifting av trekledning er 40 - 60 år.
Utskifting/vedlikehold: Normal tid før maling av utvendig trekledning er 6 - 12 år.
Utskifting/vedlikehold: Normal tid før utskifting av ødelagte deler bindingsverk av tre er 40 - 60 år.
3. Vinduer og ytterdører
TG 1 3.1 Vinduer og

---

[d176_d176 | Side [1]]

- WC med innebygd sisterne
Veggfliser og tak/himling vurderes å ha normal slitasje etter alder og bruk. TG1
Det gjøres oppmerksom på at baderomsinnredningen ikke er vurdert eller satt tilstandsgrad på.
Årsak: Det er ikke et krav i Avhendingsloven å vurdere eller sette tilstandsgrad på baderomsinnredningen.
Risiko: Dette kan gi økt risiko for skjulte skade og andre relevante vedlikeholdsbehov.
Konsekvens: Forholdet kan medføre behov for utbedring og vedlikeholdsbehov.
Anbefalt tiltak: Det anbefales å

---

[d176_d176 | Side [1]]
lere ved bad og i rom under terreng for undersøkelse av fukt ved mistanke til alvorlige
avvik. Alle bygningsdeler blir undersøkt, med stor vekt på de områdene som takstmannen, erfaringsmessig, kjenner som svake
punkter. Selv om takstmannens analyser er svært grundig, kan det forekomme skjulte feil og mangler.
For bolig er referansenivået for de ulike rom og bygningsdeler gitt som krav til tilstandsgrad TG 1, det vil si uten skader og
fagmessig riktig utført og i henhold til gjeldende lov/forskrift som

---

[d176_d176 | Side [1]]
lere dreneringen på innside av boligen, da boligen ikke har noen kjeller. Det vurderes
at de drenende massene fungerer tilfredsstillende, da det ikke er noen nevneverdige planhetsavvik i boligen.
TG1
Merknader:
Utskifting/vedlikehold: Normal tid før overflatebehandling av utvendig mur er 8 - 16 år.
Utskifting/vedlikehold: Normal tid før slemming og reparasjoner av utvendig puss og betong er 20 - 30 år.
Utskifting/vedlikehold: Normal tid før utskifting av drenssystem med drensledninger er 20 - 60

---

[d176_d176 | Side [1]]
avvik på vannbord over og under vindu, eller i overgangen mellom grunnmur og fasade og i
etasjeskillere.
Det er ikke påvist skader, sprekker og råteskade på kledningen.
Det er påvist tilstrekkelig lufting for kledningen.
Det er ikke påvist noen nevneverdige konstruksjonsfeil.
Det er utført stikktaking på typiske skadesteder, slik som i nedkanten av panelet og i områdene rundt vinduene.
Ytterkledning oppført med tradisjonell bindingsverkkonstruksjon med liggende malt/beiset trepanel fra 2023
isolert etter

---

[d176_d176 | Side [1]]
 ikke identifiseres.
Konsekvens: Forholdet kan medføre behov for utbedring dersom det viser seg å foreligge skjulte feil eller
skader.
Anbefalt tiltak: Det anbefales å gjennomføre nærmere undersøkelser, utført av fagperson, for å avklare tilstand
og eventuelt behov for utbedring når forholdene tillater det.
Det gjøres oppmerksom på at boligen har saltakskonstruksjon, deler av øverste etasje har skråtak som i
hovedsak er en lukket konstruksjon, og det er ikke kjent hvordan oppbyggingen er utført.

---

[d176_d176 | Side [1]]
til rekreasjon og friluftsliv.
Området er et paradis for tur‑ og langrennsentusiaster,
Kommunale avgifter med flotte stier og løyper rett i nærheten. Åsen ILs
Kr 24 000 (2026) hovedanlegg for fotball og langrenn ligger i umiddelbar
nærhet og byr på opplyste løypetraséer som passer like
Informasjon: Kommunen opplyser følgende: godt for trening som for koselige skiturer med de minste.
Forventet kommunale gebyrer i 2026 ville vært ca Områdets stabile snøforhold gjør det ideelt for
24.000,‑ kr, ved ferdigstilt

---

[d176_d176 | Side [1]]

Reindrift flyttlei Reindrift høstbeite årstidbeite
Reindrift høstvinterbeite årstidbeite Reindrift konvensjonsområde reinkonvensjonsomrade
Reindrift oppsamlingsområde Reindrift Reinavtaleområde
Reindrift reinbeitedistrikt Reindrift reinbeiteområde
Reindrift reindriftsanlegg Reindrift reinkonsesjonsområde
Reindrift reinrestriksjonsområde Reindrift siidaområde
Reindrift sommerbeite årstidsbeite Reindrift trekklei
Reindrift vårbeite årstidbeite Reindrift vinterbeite

---

[d176_d176 | Side [1]]
pet finansieres slik:
BANK/FINANSIERINGSINSTITUSJON: REFERANSE & TELEFONNUMMER SUM:
Informasjonen er utarbeidet av Forbrukerrådet, Advokatforeningen ved Lovutvalget for eiendomsmegling, Eiendom Norge og Kr.
Norges Eiendomsmeglerforbund, på grunnlag av bl.a. eiendomsmeglingsloven § 6-8.
Kr.
Kr.
Nedenfor gis en oversikt over de retningslinjer som anbefales ved budgivning på eiendommen. Avslutningsvis gis også en kort
oversikt over de viktigste rettsreglene tilknyttet budgivning. Kr.
EGENKAPITAL: Kr.
Før det

---

[d176_d176 | Side [1]]
 – Fredete bygninger
Kvikkleire Låssettingsplasser
Lufthavn - Restriksjonsplaner for Avinors lufthavner Marin grense
Marine Naturtyper - DN håndbok 19 Markagrensa
Mineralressurser - industrimineral, naturstein og metaller Naturtyper - Utvalgte
Naturtyper - verdsatte Naturtyper på land (NiN)
Naturtyper på land og i ferskvann (HB13) Naturvernområder
Reindrift beitehage Reindrift ekspropriasjon reinekspropriasjonsområde
Reindrift flyttlei Reindrift høstbeite årstidbeite
Reindrift

---

[d176_d176 | Side [1]]
sjonen.
Merknader:
Utskifting/vedlikehold: Normal tid før fjerne begroing som mose o.l er 5 - 15 år.
Utskifting/vedlikehold: Normal tid før omlegging av forsinkede stålplater er 30 - 50 år.
Utskifting/vedlikehold: Normal tid før utskifting av ødelagte deler av bjelkelag av heltre eller I-bjelker er 40 - 60
år.
5. Loft
Ingen 5.1 Loft (konstruksjonsoppbygging)
Tomannsboligen har ingen loftkonstruksjon.
Merknader:
Utskifting/vedlikehold: Normal tid før utskifting av ødelagte deler av bjelkelag av heltre eller

---

[d176_d176 | Side [1]]
r analysen
Sjablonmessige kostnadsklasser ved TG3
Kostnadsklasse Veiledende størrelsesorden i NOK
Lav kostnad 0 – 100 000
Middels kostnad 100 000 – 300 000
Høy kostnad Mer enn 300 000
Kostnadsklassene er sjablonmessige og veiledende, og angir kun overordnet størrelsesorden.
De er ikke pristilbud, ikke bindende og ikke knyttet til valgt løsning. Endelig kostnad må avklares gjennom
nærmere undersøkelser og tilbud fra fagperson.
EIENDOMSDATA:
Matrikkeldata: Gnr:7, Bnr: 104
Hjemmelshaver: Godvik Utvikling

---

[d176_d176 | Side [1]]
sbehov.
Anbefalt tiltak: Det anbefales å gjennomføre ytterligere undersøkelser, utført av fagperson, for å avklare årsak og eventuelt
behov for utbedring.
Utskifting/vedlikehold: Normal tid før maling av plater er 8- 16 år.
Utskifting/vedlikehold: Normal tid før utskifting av laminatgulv er 10 - 20 år.
Utskifting/vedlikehold: Normal tid før legge om fliser er 10 - 20 år.
Utskifting/vedlikehold: Normal tid før utskiftinger av ødelagte deler i etasjeskille av tre er 40 - 60 år.
FORMÅL MED

---

[d176_d176 | Side [1]]
bile snøforhold gjør det ideelt for
24.000,‑ kr, ved ferdigstilt bolig, men det avhenger også vintersport.
32

## Side 33

OM EIENDOMMEN
klikke på kartet kan du enkelt planlegge din rute fra valgt
Romeriksåsen er kjent for sine mange muligheter for startpunkt og helt frem til boligen. Det vil være skiltet ved
friluftsliv, inkludert fiske og bading i idylliske småvann. fellesvisninger for enkel orientering.
Den Norske Turistforening har flere serveringshytter i
området som er populære utfartsmål. For den

---

[d176_d176 | Side [1]]
n inkludert som BRA-e basert på opplysninger fra eier om faktisk bruk. Det er
ikke kontrollert om disse arealene rettslig tilhører boenheten eller om de er del av fellesareal. Slike arealer kan omdisponeres av
borettslag/sameie, noe som kan påvirke boligens tilgjengelige bruksareal.
Fellesareal – rettslig avgrensning:
Ved arealmåling er det NS 3940 som legges til grunn. Standarden har en annen definisjon av fellesareal enn eierseksjonsloven.
Dette kan innebære at arealer som er måleverdig etter NS 3940,

---

[d176_d176 | Side [1]]
rettsreglene tilknyttet budgivning. Kr.
EGENKAPITAL: Kr.
Før det legges inn bud på eiendommen oppfordres budgiver til å sette seg inn i all relevant informasjon om eiendommen,
TOTALT:
herunder salgsoppgave og tilstandsrapport.
EGENKAPITAL BESTÅR AV:
Salg av nåværende bolig eller annen fast eindom
GJENNOMFØRING AV BUDGIVNING:
Disponibelt kontant beløp (bankinnskudd)
1.Alle bud skal inngis skriftlig til megler, som formidler for sine handlingsvalg, vil megler fraråde budgiver å stille
disse videre til

---

[d176_d176 | Side [1]]
tekst ekstrahert)

## Side 25

(Ingen tekst ekstrahert)

## Side 26

Plantegning

## Side 27

Plantegning

## Side 28

(Ingen tekst ekstrahert)

## Side 29

(Ingen tekst ekstrahert)

## Side 30

OM EIENDOMMEN

## Side 31

FÅMYRSRØET 15B
OM EIENDOMMEN

## Side 32

OM EIENDOMMEN
av blant annet vann og avløps forbruk.
Økonomi
Prisantydning Andre kostnader:
Kr 5 650 000 Andre utgifter: Utover kommunale avgifter må kjøper
påregne kostnader til blant annet strøm, forsikring, tv‑/
internett og velavgift. (det er

---

[d176_d176 | Side [1]]
rdres budgiver til å sette seg inn i all relevant informasjon om eiendommen,
TOTALT:
herunder salgsoppgave og tilstandsrapport.
EGENKAPITAL BESTÅR AV:
Salg av nåværende bolig eller annen fast eindom
GJENNOMFØRING AV BUDGIVNING:
Disponibelt kontant beløp (bankinnskudd)
1.Alle bud skal inngis skriftlig til megler, som formidler for sine handlingsvalg, vil megler fraråde budgiver å stille
disse videre til selger. Med skriftlige bud menes også slik frist. Ønsket overtagelsesdato:
elektroniske meldinger som

---

[d176_d176 | Side [1]]
.
eller utskifting av anlegget.
Anbefalt tiltak: Det anbefales å undersøke anleggene Ble tettesjikt/ membran/ sluk oppgradert/ fornyet?
nærmere, utført av fagperson, for å avklare omfang og Ja, nytt tettesjikt, membran og sluk etablert som del av
behov for eventuell utbedring. nybygg. Arbeidet er utført av faglærte i henhold til
gjeldende
Hvitevarer: Integrerte hvitevarer medfølger. forskrifter. Ingen kjente feil eller mangler.
Innbo og løsøre: Salgsoppgaven inkluderer NEFs Kjenner du til feil eller om har

---

[d176_d176 | Side [1]]
R OPPMERKSOM PÅ
Egenerklæringsskjema skal alltid legges frem for rapportansvarlig før tilstandsanalysen påbegynnes. Dersom egenerklæring ikke
foreligger, vil dette komme tydelig frem på en av de siste sidene av rapporten under ovenstående overskrift.
Dersom det er lagt frem dokumentasjon av pågående byggesaker og/eller manglende ferdigattest, og/eller midlertidig
brukstillatelse. Så vil også dette komme tydelig frem på en av de siste sidene av rapporten under samme overskrift som over.
KOSTNADSVURDERING

---

[d176_d176 | Side [1]]
øet på alvor.
Los Digital investerer mye i å ha en moderne og ny maskinpark. 2041 0848 NO-3619
Dette bidrar til en vesentlig mer miljøvennlig produksjon.
Fra hvilepuls til makspuls. Det er Emera.
110033

## Side 104

Forbrukerinformasjon Budskjema
om budgivning
Sist oppdatert med virkning fra 1. juli 2025, i forbindelse med KJØPESUM KR + omkostninger ihht. opplysninger i salgsoppgaven
ikrafttredelse av endringer i eiendomsmeglingsloven. Kjøpet finansieres slik:
BANK/FINANSIERINGSINSTITUSJON: REFERANSE &

---

[d176_d176 | Side [1]]
l eller skader. Markterrasse på ca 36 m2 med adkomst via teknisk rom
Anbefalt tiltak: Det anbefales å gjennomføre nærmere og kjellerstue i underetasjen, oppført i trekonstruksjon
undersøkelser, utført av fagperson, for å avklare tilstand med terrassebord på bjelkelag.
og eventuelt behov for utbedring når forholdene tillater
det. Grunnet snø på befaringstidspunktet ble ikke terrassen
visuelt vurdert.
Det gjøres oppmerksom på at boligen har Årsak: Snødekket områder.
saltakskonstruksjon, deler av øverste

---

[d176_d176 | Side [1]]
atter blant forbindelse med et salgsoppdrag. Våre
annet vederlag knyttet til tilrettelegging, markedsføring samarbeidspartene er:
og eventuelle avholdte visninger, samt påløpte utlegg.
Timepris ved slik beregning er kr 3.500,‑ Søderberg & Partners AS ‑ formidler av boligselger‑ og
boligkjøperforsikring
Overo AS ‑ leverandør av digitale oppgjørsskjemaer og
Oppdragsanvarlig overtakelsesprotokoller som også inneholder tilbud til
Eirik Jørgen Off forbruker om tilpassede strøm‑, internett ‑ og
Eiendomsmegler |

---

[d176_d176 | Side [1]]
ndament til grunn, KPHensynsonenavnH910
grunnmur i støpt betong, trebindingsverkkonstruksjon KPDetaljering: Reguleringsplan skal fortsatt gjelde
med stående malt/ beiset trepanel isolert etter TEK 17 Planid: 99‑22
krav. Trebjelkelag i etasjeskiller og innervegger oppført i Navn: Fåmyrsrøet
gips med varierende overflater. Plantype: Eldre reguleringsplan
Status: Endelig vedtatt arealplan
Ikrafttredelse 21.01.2002
Øvrig informasjon
Det gjøres oppmerksom på at tomt ved siden av,
Adresse Fåmyrsrøet 17, er tomt

---

[d176_d176 | Side [1]]
 reisetiden ca. 22 midlertidig brukstillatelse fordi arbeider på utomhus
minutter til Jessheim, 25 minutter til Kløfta, 26 minutter arealer ikke er ferdigstilt. Av midlertidig brukstillatelse
til Gjerdrum og 38 minutter til Lillestrøm. skal det fremgå hvilke arbeider som må ferdigstilles før
ferdigattest kan gis. For å sikre gjenstående arbeid har
Eiendommen kombinerer rolig og naturnær beliggenhet kjøper rett til å holde tilbake en forholdsmessig andel av
med gode fasiliteter for både familier og

---

[d176_d176 | Side [1]]
5

## Side 96

Nabolagsprofil
Fåmyrsrøet 15B
Offentlig transport Aldersfordeling
Rustadsaga 6 min
Linje 410, 413 0.5 km
Nannestad sykehjem/vgs. 9 min
Linje 410, 420, 446 8.5 km
Oslo Lufthavn stasjon 17 min
Buss, flytog, tog 15 km
Oslo Gardermoen 17 min
Oslo lufthavn stasjon 17 min
Linje F6, RE10, RE11, RX11, R12, R60 15.2 km
Skoler
Kringler-Slattum skole (1-7 kl.) 7 min
247 elever, 15 klasser 6.1 km
Preståsen skole (1-7 kl.) 11 min
365 elever, 19 klasser 8.2 km
Maura skole (1-7 kl.) 13 min
490 elever, 26

---

[d176_d176 | Side [1]]
ang til terrasse
og hage. I forkant av boligen er det stripe med friområde som gir
god luft og avstand til boliger foran.
Fra boligen er det umiddelbar nærhet til flotte turområder,
gangavstand til bussholdeplass og kort vei til barnehager, skoler
og butikker.
7

## Side 8

(Ingen tekst ekstrahert)

## Side 9

(Ingen tekst ekstrahert)

## Side 10

(Ingen tekst ekstrahert)

## Side 11

(Ingen tekst ekstrahert)

## Side 12

(Ingen tekst ekstrahert)

## Side 13

(Ingen tekst ekstrahert)

## Side 14

(Ingen

---

[d176_d176 | Side [1]]
 trekklei
Reindrift vårbeite årstidbeite Reindrift vinterbeite årstidbeite
Skredhendelser Statens vegvesens kvikkleiredata
Statlig sikra friluftslivsområder Store fjellskred
Stormflo Støykartlegging veg etter T-1442
Støysoner Avinors lufthavner Støysoner for BaneNORs jernbanenett
Støysoner for Forsvarets flyplasser Støysoner for Forsvarets skyte- og øvingsfelt etter T-1442
Strategisk støykartlegging veg Tilgjengelighet
Trafikkmengde Trafikkulykker
Turrutebasen Vannforekomster
Veg

---

[d176_d176 | Side [1]]
\Støylen Service AS\Støylen Service AS - Dokumenter\Prosjekt\77. Godvik Utvikling AS\PROSJEKTERING\Godvik Utvikling AS - Gjeldande v.23.pln A30-01 .
089
6
895
8
F.G 221,80
F.G 219,55
F.G 219,02
Eksisterende terreng
F.G 216,18
895
8 089
6
239
1
883
824
004
2
904
2
266
2
75

## Side 76

76

## Side 77

77

## Side 78

78

## Side 79

79

## Side 80

80

## Side 81

Reguleringsplankart
Eiendom: 7/104/0/1
Adresse: Fåmyrsrøet 15A
Dato: 21.01.2026
UTM-32
Nannestad kommune Målestokk: 1:1000
©Norkart 2026
Kartet

---

[d176_d176 | Side [1]]
rafikkmengde Trafikkulykker
Turrutebasen Vannforekomster
Veg senterlinje Elveg 2.0 Vernskog
Villreinområder Vindkraft
Norkart Områdeanalyse 21.01.2026 Side 1 av 12
84

## Side 85

FKB Tiltak
Kilde Geovekst Versjon 16.12.2025
Om datasettet Tegnforklaring
FKB-Tiltak skal inneholde informasjon om områder der det skjer utbygging som fanges opp gjennom
saksbehandling i kommunen eller andre offentlige myndigheter.
Objekter
Objekttype Behandlingsstatus Saksreferanse Bygningsnummer Tiltakstype
BygningTiltak

---

[d176_d176 | Side [1]]
røm er også
Beskrivelse av
lett tilgjengelige via både offentlig kommunikasjon og bil.
eiendommen
Skole og barnehage
Eiendommen sokner til Kringler‑Slattum barneskole,
mens ungdomsskoleelever går på Maura ungdomsskole. Type eiendom
Kommunen har også et godt utvalg av barnehager, noe Eieform: Eiet
som gjør området svært familievennlig. Det er
videregående skole i Nannestad samt i nærliggende Objektstype: Tomannsbolig
kommuner som Eidsvoll, Ullensaker og Lillestrøm.
Offentlig kommunikasjon Ferdigattest/

---

[d176_d176 | Side [1]]
 utført som del av nybygg av Regulerings og arealplaner
faglærte entreprenører X‑Element AS. Arbeider på Kommuneplan:
terrasse, tak og fasade utført i henhold til gjeldende Delareal: 837 m
forskrifter. Ingen kjente feil eller mangler. Arealbruk: Boligbebyggelse, Framtidig
OmrådenavnB19
Byggemåte Reguleringsplan:
Tomannsbolig over 3 plan oppført i 2023. Huset har Delareal: 837 m
saltak tekket med metallplater, støpt fundament til grunn, KPHensynsonenavnH910
grunnmur i støpt betong,

---

[d176_d176 | Side [1]]
ld av
detaljert arealressursinformasjon. AR5 er et flatedekkende datasett som er velegnet for analyseformål og
kartframstillinger.
Objekter
Arealtype Grunnforhold Skogbonitet Treslag
Bebygd Ikke relevant Ikke relevant Ikke relevant
Åpen fastmark Konstruert Impediment Ikke tresatt
Norkart Områdeanalyse 21.01.2026 Side 3 av 12
86

## Side 87

FKB-arealbruk
Kilde Geovekst Versjon 16.12.2025
Om datasettet
Arealbruk beskriver den fysiske bruk av et geografisk område. Eksempler på dette er parkering på et jorde

---

[d176_d176 | Side [1]]
rag i flere etapper. Verneplanen omfatter ulike vassdrag som til sammen skal
utgjøre et representativt utsnitt av Norges vassdragsnatur. Hensikten med verneplanen er å sikre helhetlige
nedbørfelt med sin dynamikk og variasjon fra fjell til fjord. Vernet gjelder først og fremst mot kraftutbygging, men
verneverdiene skal også tas hensyn til ved andre inngrep.
Objekter
Navn
Leira
Norkart Områdeanalyse 21.01.2026 Side 12 av 12
95

## Side 96

Nabolagsprofil
Fåmyrsrøet 15B
Offentlig transport

---

[d176_d176 | Side [1]]
inisjon her: http://www.ssb.no/beftett.
Objekter
Tettstednr Navn Innbyggere Areal
0686 Rustad 401 0.495161536034909
Norkart Områdeanalyse 21.01.2026 Side 10 av 12
93

## Side 94

Vannkraft, Utbygd og ikke utbygd
Kilde Norges vassdrags- og Versjon 18.01.2026
energidirektorat
Om datasettet Tegnforklaring
Før et vannkraftprosjekt kan søke konsesjon må det være avklart i forhold til Samlet plan. Prosjekter som tidligere
har vært behandlet i Samlet plan kan søke konsesjon dersom det er plassert i kategori I.

---

[d176_d176 | Side [1]]
t geografisk område. Eksempler på dette er parkering på et jorde som vil kodes som en parkeringsplass,
uavhengig av om dette arealstykke egner seg som fulldyrka. Arealbruken må holdes atskilt fra markslagsbeskrivelsene som beskriver jordas bærevne
(arealtilstand, bonitet, markslag og mineralske råstoffer). En del objekter befinner seg derimot i et grenseland, og det kan være vanskelig å avgjøre i
hvilke kapittel de ulike objektene hører hjemme.
Objekter
Objekttype
anleggsomraade
Norkart Områdeanalyse

---

[d176_d176 | Side [1]]
prang Akvakulturlokaliteter
Ankringsområder Arter av nasjonal forvaltningsinteresse
Bergrettigheter Byggeforbudssoner kraftledninger
Dybdedata Dyrkbar jord
Faresonekart for flom Faresonekart for skred i bratt terreng
Fiskeplasser redskap FKB-bane
Flom - aktsomhetsområder Foreslåtte naturvernområder
Forsvarets skyte- og øvingsfelt i sjø Forsvarets skyte- og øvingsfelt land
Forurenset grunn Grunnvannsborehull
Grus og pukk Gyteområder
Hoved- og biled Hoved- og biled,

---

[d176_d176 | Side [1]]
 Berørte datasett
FKB Tiltak FKB-AR5
FKB-arealbruk Løsmasser N50/N250
Mulighet for marin leire Naturtyper i Norge - landskap
Radon SR16 - Skogressurskart 16x16 meter
Tettsteder Vannkraft, Utbygd og ikke utbygd
Verneplan for vassdrag
88 Sjekkede, ikke berørte datasett
100-meter belte kyst Aktsomhetskart for jord- og flomskred
Aktsomhetskart for kvikkleireskred Aktsomhetskart for snøskred
Aktsomhetskart for steinsprang Akvakulturlokaliteter
Ankringsområder Arter av nasjonal

---

[d176_d176 | Side [1]]
let plan kan søke konsesjon dersom det er plassert i kategori I. Prosjekter som er plassert i
kategori II kan ikke søke konsesjon nå, men kan søke om å flytte prosjektet til kategori I på grunnlag av redusert
konflikt eller at lokal motstand er opphørt. Miljøverndepartementet delegerte i 1995 ansvaret for den administrative driften av Samlet plan til Direktoratet
for naturforvaltning. Avgjørelser innen Samlet plan gjøres av Miljødirektoratet i samråd med NVE. NVE har ansvar for den

---

[d176_d176 | Side [1]]
men?
Nei Ja
Når kjøpte du boligen?
År 2019
Hvor lenge har du eid boligen?
Antall år 1
Antall måneder 3
Har du bodd i boligen siste 12 måneder?
Nei Ja
I hvilket forsikringsselskap har du tegnet villa/husforsikring?
Forsikringsselskap
Polise/avtalenr.
Spørsmål for alle typer eiendommer
1 Kjenner du til om det er/har vært feil tilknyttet våtrommene, f.eks. sprekker, lekkasje, råte, lukt eller soppskader?
Nei Ja
Initialer selger: ES 1
21006240
:ecnerefer
tnemucoD
69

## Side 70

2 Kjenner du til om det er

---

[d176_d176 | Side [1]]
jon og kontroll av vann- og
Beskrivelse
avløpssystemer i henhold til gjeldende forskrifter. Ingen kjente feil eller mangler
Arbeid utført av VVS Paradis AS
5 Kjenner du til om det er/har vært problemer med drenering, fuktinnsig, øvrig fukt eller fuktmerker i underetasje/kjeller?
Nei Ja
6 Kjenner du til om det er/har vært utettheter i terrasse/garasje/tak/fasade?
Nei Ja
7 Kjenner du til om det er/har vært problemer med ildsted/skorstein/pipe f.eks. dårlig trekk, sprekker, pålegg, fyringsforbud eller

---

[d176_d176 | Side [1]]
fukt, grunnet at badet er fra 2023.
Årsak: Det er ikke et krav i Avhendingsloven å hullbore fra tilstøtende rom til bad som er 5 år eller nyere.
Risiko: Det kan gi økt risiko for skjulte skader som ikke ble avdekket på befaringstidspunktet.
Konsekvens: Forholdet kan medføre behov for utbedring dersom det viser seg å foreligge skjulte skader.
Anbefalt tiltak: Skulle det foreligge mistanke om feil eller avvik, anbefales det å undersøke veggkonstruksjonen
nærmere ved åpning, utført av fagperson, for å avklare

---

[d176_d176 | Side [1]]
 Årsak: Snødekket områder.
saltakskonstruksjon, deler av øverste etasje har skråtak Risiko: Det kan være skjulte skader eller
som i vedlikeholdsbehov.
hovedsak er en lukket konstruksjon, og det er ikke kjent Konsekvens: Forholdet kan medføre behov for tiltak som
hvordan oppbyggingen er utført. Erfaringsmessig vedlikehold eller utskiftning.
betraktes slike konstruksjoner som Anbefalt tiltak: Det anbefales at en fagperson
fuktrisikokonstruksjoner. Dette innebærer at det kan gjennomfører en ekstra inspeksjon

---

[d176_d176 | Side [1]]
g himlingens overflater
61

## Side 62

19/25
BMTF Byggmestrenes Takseringsforbund
EIERSKIFTERAPPORT™
Rom under terreng er innredet samtidig som boligen ble bygget.
Det er ikke påvist noen nevneverdige riss eller sprekker.
Det er ikke påvist setninger eller jordtrykk.
Det er ikke påvist fuktskjolder, støvkondens, svertesopp og spor etter sopp, råteskader og/eller skadedyr.
Tilluft og avtrekk er vurdert som tilfredsstillende.
Det er ikke mulig å undersøke diffusjonssperre uten å demontere

---

[d176_d176 | Side [1]]
nstruksjon, og det er ikke kjent hvordan oppbyggingen er utført. Erfaringsmessig
betraktes slike konstruksjoner som fuktrisikokonstruksjoner. Dette innebærer at det kan være vanskelig å
oppdage eventuelle fuktskader før de har utviklet seg over tid, da det er begrenset tilgang for inspeksjon og
vedlikehold. Lukkede konstruksjoner med skråtak gir ofte lite mulighet for lufting, noe som øker risikoen for
kondens og opphopning av fukt i konstruksjonen.
Merknader:
Utskifting/vedlikehold: Normal tid før fjerne

---

[d176_d176 | Side [1]]
ingsselskapet ikke har gitt skriftlig samtykke, kan erstatningen bortfalle.
Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter, begrenset til siste 12 måneder før overtakelse.
Forøvrig oppfordrer selger potensielle kjøpere til å undersøke eiendommen grundig, jf avhendigsloven § 3-10 og kjøpsloven § 20
(aksjeboliger).
Gyldig forsikring forutsetter at det for helårs- og fritidsbolig foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova

---

[d176_d176 | Side [1]]
For mer informasjon om kartet, se internettsiden til NGU.
RADON: Takstmannen har ikke kjennskap til radonmåling av boligen. Statens strålevern anbefaler radonmåling
i bolig.
Mer info angående radon kan hentes hos kommunen og Statens strålevern, www.nrpa.no/radon.
Grunnmur og drenering i fra byggeår.
Det er en begrensning at selve drenering/fuktsikring ligger under bakkenivå og er ikke tilgjengelig for inspeksjon.
Det er ikke mulig å kontrollere dreneringen på innside av boligen, da boligen ikke har noen

---

[d176_d176 | Side [1]]
vik overganger og skjøter.
Det er ikke påvist sopp, råteskade og skadedyr.
Gulv: Fliser og laminat.
Gulv vurderes å ha normal slitasje etter alder og bruk. TG1
Merknader:
Utskifting/vedlikehold: Normal tid før utskifting av laminatgulv er 10 - 20 år.
TG 1 9.1.3 Fuktmåling og ventilasjon
Det er ikke boret hull i tilstøtende rom eller fra undersiden.
Det er ikke fuktkontrollert med egnet fuktmåleverktøy.
Tilluft og avtrekk vurderes som tilstrekkelig.
Det ble ikke utført hulboring i yttervegger for å måle

---

[d176_d176 | Side [1]]
.
Det er ikke påvist avskallet puss som fører til at isolasjonen har blitt eksponert.
Det er ikke påvist skader slik at drenering og annen sikring mot vann og fuktighet er utett.
Det ble ikke foretatt geologiske undersøkelser i forbindelse med utarbeidelse av denne rapporten. Fundament
ligger under bakkenivå og er ikke tilgjengelig for inspeksjon.
Temakart fra NGU viser at boligen ligger i ett område over marin grense.
Dataene kommer fra NGU. For mer informasjon om kartet, se internettsiden til NGU.
RADON:

---

[d176_d176 | Side [1]]
ak: Snødekket området.
Risiko: Det kan være risiko for at det er skjulte feil eller mangler på de berørte bygningsdelene.
Konsekvens: Forholdet kan medføre behov for utbedring dersom det viser seg å foreligge skjulte feil eller
skader.
Anbefalt tiltak: Det anbefales derfor en ny inspeksjon når forholdene tillater det.
Generelt:
Det er viktig at terrenget har hellingsgrad ut fra grunnmuren. Overflatevann skal hurtigst mulig vekk for å unngå
unødige fuktbelastninger på utvendig fuktsikring og

---

[d176_d176 | Side [1]]
er. Dette innebærer at det kan gjennomfører en ekstra inspeksjon når forholdene tillater
være vanskelig å det.
oppdage eventuelle fuktskader før de har utviklet seg
over tid, da det er begrenset tilgang for inspeksjon og Det gjøres oppmerksom på at terrassebordene står
vedlikehold. Lukkede konstruksjoner med skråtak gir ofte ubehandlet. For å sikre lang levetid og redusere
lite mulighet for lufting, noe som øker risikoen for vedlikeholdsbehov, anbefales det at man behandler
kondens og opphopning av fukt i

---

[d176_d176 | Side [1]]
Forholdet kan medføre behov for utbedring dersom det viser seg å foreligge skjulte skader.
Anbefalt tiltak Det anbefales å gjennomføre nærmere undersøkelser ved åpning, utført av fagperson, for å
avklare årsak og eventuelt behov for utbedring.
Vegger, gulv, tak/himling og kjøkkeninnredning vurderes å ha normal slitasje etter alder og bruk. TG1
Merknader:
Utskifting/vedlikehold: Normal forventet levetid for kjøkken er 15 - 20 år avhengig av oppbygging og
bruksbelastning.
Utskifting/vedlikehold:

---

[d176_d176 | Side [1]]
rekkelig.
Det ble ikke utført hulboring i yttervegger for å måle fukt i bunnsvill, grunnet at boligen er tilnærmet ny. Dette
innebærer at konstruksjonen fortsatt er innenfor forventet levetid, og risikoen for skjulte fuktproblemer vurderes
som lav. I slike tilfeller vurderes det ofte som tilstrekkelig å følge med på synlige tegn og utføre eventuelle
målinger på overflater ved behov.
Det ble søkt etter fukt på tilgjengelige tilstøtende overflater under befaringen, der det ikke ble avdekket
unormale verdier.

---

[d176_d176 | Side [1]]
årene. Les mer om Boligkjøperforsikring i
Selger har ikke utført radonmåling. Det er ikke krav om vedlagte materiell eller på https:/ /
dette med mindre boligen er helt eller delvis utleid. www.soderbergpartners.no/ eiendom/ boligkjoper/
Boligen er oppført i henhold til TEK17, hvor det blant annet
stilles krav til etablering av radonsperre i Lovanvendelse
grunnkonstruksjonen. Om eiendommen og salgsvilkår
Denne boligen er nylig ferdigstilt, men har ikke vært
bebodd. Salget skjer etter bestemmelsene

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "Manglende ferdigattest – kun midlertidig brukstillatelse foreligger",
      "evidence": [
        "Eiendommen har midlertidig brukstillatelse fordi arbeider på utomhus arealer ikke er ferdigstilt.",
        "Av midlertidig brukstillatelse skal det fremgå hvilke arbeider som må ferdigstilles før ferdigattest kan gis.",
        "For å sikre gjenstående arbeid har kjøper rett til å holde tilbake en forholdsmessig andel av kjøpesummen."
      ],
      "source_documents": [
        "d176_d176"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R2",
      "description": "Selger har ikke tegnet boligselgerforsikring, noe som svekker kjøpers reklamasjonsmuligheter overfor selger",
      "evidence": [
        "Boligselgerforsikring: Selger har ikke tegnet boligselgerforsikring.",
        "Kjøper har anledning til å tegne boligkjøperforsikring – dette er et valgfritt alternativ som gir rettshjelpsforsikring."
      ],
      "source_documents": [
        "d176_d176"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R3",
      "description": "Radonmåling er ikke utført, og radonrisiko er ukjent",
      "evidence": [
        "Selger har ikke utført radonmåling.",
        "Takstmannen har ikke kjennskap til radonmåling av boligen. Statens strålevern anbefaler radonmåling i bolig.",
        "Boligen er oppført i henhold til TEK17, hvor det blant annet stilles krav til etablering av radonsperre i grunnkonstruksjonen.",
        "Radon SR16 er listet som et berørt datasett i områdeanalysen."
      ],
      "source_documents": [
        "d176_d176"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R4",
      "description": "Skråtak/saltakskonstruksjon er en lukket fuktrisikokonstruksjon som ikke kan inspiseres fullt ut",
      "evidence": [
        "Boligen har saltakskonstruksjon, deler av øverste etasje har skråtak som i hovedsak er en lukket konstruksjon, og det er ikke kjent hvordan oppbyggingen er utført.",
        "Erfaringsmessig betraktes slike konstruksjoner som fuktrisikokonstruksjoner.",
        "Det kan være vanskelig å oppdage eventuelle fuktskader før de har utviklet seg over tid, da det er begrenset tilgang for inspeksjon og vedlikehold.",
        "Lukkede konstruksjoner med skråtak gir ofte lite mulighet for lufting, noe som øker risikoen for kondens og opphopning av fukt i konstruksjonen."
      ],
      "source_documents": [
        "d176_d176"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R5",
      "description": "Yttertak og terrasse ikke inspisert på grunn av snødekke – skjulte skader kan foreligge",
      "evidence": [
        "Grunnet mye snø og snødekket yttertak var det ikke mulig å inspisere taktekkingen, takrenner og nedløp.",
        "Grunnet snø på befaringstidspunktet ble ikke terrassen visuelt vurdert.",
        "Det anbefales en ny inspeksjon når snøforholdene tillater det.",
        "Inspeksjon av yttertaket ble utført fra bakkeplan. Dette innebærer at vurderingene er gjort visuelt fra bakken uten bruk av stige eller lift."
      ],
      "source_documents": [
        "d176_d176"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.91
    },
    {
      "risk_id": "R6",
      "description": "Drenering og fuktsikring under bakkenivå er ikke tilgjengelig for inspeksjon",
      "evidence": [
        "Det er en begrensning at selve drenering/fuktsikring ligger under bakkenivå og er ikke tilgjengelig for inspeksjon.",
        "Fundament ligger under bakkenivå og er ikke tilgjengelig for inspeksjon.",
        "Det ble ikke foretatt geologiske undersøkelser i forbindelse med utarbeidelse av denne rapporten."
      ],
      "source_documents": [
        "d176_d176"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R7",
      "description": "Baderomsinnredning og tilstøtende vegger er ikke fullt undersøkt – risiko for skjulte fuktskader på bad",
      "evidence": [
        "Det gjøres oppmerksom på at baderomsinnredningen ikke er vurdert eller satt tilstandsgrad på.",
        "Det er ikke boret hull i tilstøtende rom eller fra undersiden.",
        "Det er ikke fuktkontrollert med egnet fuktmåleverktøy.",
        "Det ble ikke utført hulboring i yttervegger for å måle fukt, grunnet at badet er fra 2023.",
        "Risiko: Det kan gi økt risiko for skjulte skader som ikke ble avdekket på befaringstidspunktet."
      ],
      "source_documents": [
        "d176_d176"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R8",
      "description": "Trapper, garderobeskap, hyllesystemer og etasjeskille er ikke vurdert eller satt tilstandsgrad på",
      "evidence": [
        "Trapper, garderobeskap, hyllesystemer og etasjeskille er ikke vurdert eller satt tilstandsgrad på.",
        "Årsak: Ikke ett krav i Avhendingsloven.",
        "Risiko: Dette gir økt risiko for skjulte skade, skeivheter og andre relevante vedlikeholdsbehov.",
        "Det anbefales å gjennomføre ytterligere undersøkelser, utført av fagperson."
      ],
      "source_documents": [
        "d176_d176"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.78
    },
    {
      "risk_id": "R9",
      "description": "Nabotomt (Fåmyrsrøet 17) er regulert til bolig og kan bebygges – risiko for endrede lysforhold og nærmiljø",
      "evidence": [
        "Det gjøres oppmerksom på at tomt ved siden av, Adresse Fåmyrsrøet 17, er tomt som er regulert til bolig og dermed kan bebygges.",
        "Reguleringsplan: Eldre reguleringsplan, Planid: 99-22, Navn: Fåmyrsrøet, Status: Endelig vedtatt arealplan, Ikrafttredelse 21.01.2002."
      ],
      "source_documents": [
        "d176_d176"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R10",
      "description": "Hjemmelshaver (Godvik Utvikling AS) har ikke selv bodd i boligen – begrenset førstehåndskunnskap om boligens tilstand",
      "evidence": [
        "Hjemmelshaver har ikke selv bodd i boligen og det er ikke gjort vesentlige endringer etter byggeår.",
        "Denne boligen er nylig ferdigstilt, men har ikke vært bebodd.",
        "Selger er et aksjeselskap (Godvik Utvikling AS), ikke en privatperson med beboererfaring."
      ],
      "source_documents": [
        "d176_d176"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R11",
      "description": "Formuesverdi er ikke beregnet – usikkerhet rundt fremtidig skattemessig verdi",
      "evidence": [
        "Formuesverdien er ikke beregnet.",
        "Skatteetaten vil beregne en boligverdi (beregnet markedsverdi for bolig) basert på SSBs statistiske opplysninger om omsatte boliger."
      ],
      "source_documents": [
        "d176_d176"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.6
    },
    {
      "risk_id": "R12",
      "description": "Sameie med Fåmyrsrøet 15A – kjøper plikter å dele kostnader for fellesområde og garasje uten at omfanget er fullt spesifisert",
      "evidence": [
        "Eiendommen blir i sameie med Fåmyrsrøet 15A og må dele kostnader for fellesområde samt garasje.",
        "Salgsoppgaven inneholder ingen detaljert beskrivelse av fordelingsnøkkel eller sameieavtale."
      ],
      "source_documents": [
        "d176_d176"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R13",
      "description": "Terrassebord står ubehandlet – økt risiko for rask nedbrytning og vedlikeholdsbehov",
      "evidence": [
        "Det gjøres oppmerksom på at terrassebordene står ubehandlet. For å sikre lang levetid og redusere vedlikeholdsbehov, anbefales det at man behandler bordene.",
        "Terrassen er oppført i trekonstruksjon med terrassebord på bjelkelag."
      ],
      "source_documents": [
        "d176_d176"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R14",
      "description": "Legalpant til kommunen er ikke synlig i grunnboken og har prioritet foran tinglyste banklån",
      "evidence": [
        "Kommunen har legalpant som sikkerhet for betaling av kommunale avgifter og eventuell eiendomsskatt.",
        "Legalpant er et pant som ikke vises i grunnboksutskriften, og har prioritet foran for eksempel tinglyste banklån på eiendommen."
      ],
      "source_documents": [
        "d176_d176"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R15",
      "description": "Ventilasjon er gitt TG2 – vesentlig avvik som bør undersøkes nærmere",
      "evidence": [
        "ANTALL TG: 1 VESENTLIGE AVVIK – Ventilasjon er blant bygningsdeler med TG2.",
        "Det anbefales å undersøke anleggene nærmere, utført av fagperson, for å avklare omfang og behov for eventuell utbedring.",
        "TG2 betyr at bygningsdelen kan ha vesentlige avvik, herunder feil utført, skadet, nedsatt funksjon eller behov for tiltak i nær fremtid."
      ],
      "source_documents": [
        "d176_d176"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.87
    },
    {
      "risk_id": "R16",
      "description": "Funksjonstesting av elektrisk anlegg, varmekabler og hvitevarer er ikke utført under befaring",
      "evidence": [
        "Funksjonstesting av elektrisk anlegg, varmekabler, panelovner, hvitevarer, markiser, persienner o.l er ikke foretatt.",
        "El-anlegg installert som del av nybygg, kun av faglært."
      ],
      "source_documents": [
        "d176_d176"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.75
    },
    {
      "risk_id": "R17",
      "description": "Forsikringsforhold for eiendommen er ikke fremlagt",
      "evidence": [
        "Forsikringsforhold: Ikke fremlagt.",
        "Selger er et aksjeselskap (Godvik Utvikling AS) og boligen har ikke vært bebodd – det er uklart om det foreligger aktiv bygningsforsikring."
      ],
      "source_documents": [
        "d176_d176"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.72
    },
    {
      "risk_id": "R18",
      "description": "Ny risiko: Boligen selges etter avhendingslova, men selger er næringsdrivende (AS) – kjøper kan ha svakere forbrukervern enn antatt",
      "evidence": [
        "Salget skjer etter bestemmelsene i avhendingslova.",
        "Hjemmelshaver: Godvik Utvikling AS – selger er et aksjeselskap og profesjonell utbygger.",
        "Denne boligen er nylig ferdigstilt, men har ikke vært bebodd – salg fra utbygger kan utløse bustadoppføringslova for forbrukerkjøpere, men dette er ikke avklart i dokumentene.",
        "Hvis kjøper ikke anses som forbruker, bortfaller kravet om garanti etter bustadoppføringslova § 12."
      ],
      "source_documents": [
        "d176_d176"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.78
    },
    {
      "risk_id": "R19",
      "description": "Ny risiko: 5 bygningsdeler er merket TGIU (ikke undersøkt) – ukjent tilstand på disse elementene",
      "evidence": [
        "ANTALL TG: 5 IKKE UNDERSØKT – fem bygningsdeler er ikke undersøkt av takstmann.",
        "TGIU betyr at bygningsdelen ikke er blitt undersøkt av takstmann.",
        "Snødekke hindret inspeksjon av tak og terrasse; lukkede konstruksjoner hindret inspeksjon av skråtak og drenering."
      ],
      "source_documents": [
        "d176_d176"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    }
  ],
  "re_retrieval_queries": [
    "Hva er de spesifikke bygningsdelene som er gitt TGIU (ikke undersøkt) i tilstandsrapporten?",
    "Hvilke arbeider gjenstår før ferdigattest kan utstedes, og hva er fristen for ferdigstillelse?",
    "Hva er innholdet i sameieavtalen mellom Fåmyrsrøet 15A og 15B – fordelingsnøkkel og kostnadsfordeling?",
    "Hva er årsaken til at ventilasjon er gitt TG2, og hva er det konkrete avviket?",
    "Er det tegnet bygningsforsikring eller annen forsikring på eiendommen av utbygger?",
    "Gjelder bustadoppføringslova eller avhendingslova for dette salget, og er kjøper definert som forbruker?",
    "Hvilke tinglyste heftelser og rettigheter følger eiendommens matrikkel ved overskjøting?"
  ],
  "reasoning": "\nGjennomgangen av de 17 identifiserte risikoene viser at samtlige er godt forankret i dokumentevidensen. Følgende justeringer og vurderinger er gjort:\n\n**Justert ned i confidence:**\n- R3 (Radon): Justert fra 0.93 til 0.90. TEK17-kravet om radonsperre er positivt, men radonmåling er likevel ikke utført og faktisk radonnivå er ukjent. Radon SR16 er listet som berørt datasett i områdeanalysen, noe som indikerer at radon er relevant for området.\n- R7 (Bad): Justert fra 0.85 til 0.80. Badet er fra 2023 og det er ikke påvist avvik. Manglende hulboring er begrunnet med at badet er nytt, og takstmann fant ingen unormale verdier på tilgjengelige overflater. Risikoen er reell men noe lavere enn opprinnelig vurdert.\n- R8 (Trapper/etasjeskille): Justert fra 0.82 til 0.78. Manglende vurdering er begrunnet med at det ikke er et lovkrav, og boligen er tilnærmet ny. Risikoen er reell men begrenset for en ny bolig.\n- R11 (Formuesverdi): Justert ned fra 0.72 til 0.60. Dette er en administrativ/skattemessig usikkerhet som er normal for nybygg og ikke en direkte kjøpsrisiko. Skatteetaten beregner dette automatisk.\n- R16 (Funksjonstesting): Justert fra 0.80 til 0.75. El-anlegget er installert av faglærte som del av nybygg, noe som reduserer risikoen noe.\n- R17 (Forsikring): Justert fra 0.75 til 0.72. Bekreftet av dokumentet, men for en ny uinnflyttet bolig er dette noe mer forventet.\n\n**Beholdt uendret:**\n- R1, R2, R4, R5, R6, R9, R12, R13, R14, R15 har alle sterk og direkte evidens i dokumentene og beholdes med opprinnelig confidence.\n- R10 justeres marginalt opp til 0.82 da det er bekreftet at selger er et AS som ikke har bodd i boligen.\n\n**Nye risikoer identifisert:**\n- R18: Uklarhet om lovanvendelse (avhendingslova vs. bustadoppføringslova). Dokumentet nevner at salget skjer etter avhendingslova, men selger er en profesjonell utbygger (AS) som selger en nyoppført, ubebodd bolig. Dette kan i realiteten utløse bustadoppføringslova for forbrukerkjøpere, noe som gir andre rettigheter og garantikrav. Dokumentet nevner selv at \"Hvis kjøper ikke anses som forbruker, bortfaller kravet om garanti.\" Confidence: 0.78.\n- R19: 5 bygningsdeler er merket TGIU (ikke undersøkt). Tilstandsrapporten viser eksplisitt \"5 IKKE UNDERSØKT\". Dette er en selvstendig risiko utover de enkeltvis omtalte TGIU-elementene (tak, terrasse, skråtak, drenering). Confidence: 0.88.\n\n**Manglende informasjon som bør etterspørres:**\n- Hvilke 5 spesifikke bygningsdeler er TGIU?\n- Detaljer om sameieavtalen mellom 15A og 15B\n- Konkret årsak til TG2 på ventilasjon\n- Avklaring av lovanvendelse (avhendingslova vs. bustadoppføringslova)\n- Tinglyste heftelser i detalj\n"
}

## Raw Response
```json
{
  "id": "msg_016t6RENwrv9MQ55M1FryHoy",
  "container": null,
  "content": [
    {
      "id": "toolu_01LpVVPTnzsiAcVdRJXraaJ3",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "Manglende ferdigattest – kun midlertidig brukstillatelse foreligger",
            "evidence": [
              "Eiendommen har midlertidig brukstillatelse fordi arbeider på utomhus arealer ikke er ferdigstilt.",
              "Av midlertidig brukstillatelse skal det fremgå hvilke arbeider som må ferdigstilles før ferdigattest kan gis.",
              "For å sikre gjenstående arbeid har kjøper rett til å holde tilbake en forholdsmessig andel av kjøpesummen."
            ],
            "source_documents": [
              "d176_d176"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R2",
            "description": "Selger har ikke tegnet boligselgerforsikring, noe som svekker kjøpers reklamasjonsmuligheter overfor selger",
            "evidence": [
              "Boligselgerforsikring: Selger har ikke tegnet boligselgerforsikring.",
              "Kjøper har anledning til å tegne boligkjøperforsikring – dette er et valgfritt alternativ som gir rettshjelpsforsikring."
            ],
            "source_documents": [
              "d176_d176"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R3",
            "description": "Radonmåling er ikke utført, og radonrisiko er ukjent",
            "evidence": [
              "Selger har ikke utført radonmåling.",
              "Takstmannen har ikke kjennskap til radonmåling av boligen. Statens strålevern anbefaler radonmåling i bolig.",
              "Boligen er oppført i henhold til TEK17, hvor det blant annet stilles krav til etablering av radonsperre i grunnkonstruksjonen.",
              "Radon SR16 er listet som et berørt datasett i områdeanalysen."
            ],
            "source_documents": [
              "d176_d176"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R4",
            "description": "Skråtak/saltakskonstruksjon er en lukket fuktrisikokonstruksjon som ikke kan inspiseres fullt ut",
            "evidence": [
              "Boligen har saltakskonstruksjon, deler av øverste etasje har skråtak som i hovedsak er en lukket konstruksjon, og det er ikke kjent hvordan oppbyggingen er utført.",
              "Erfaringsmessig betraktes slike konstruksjoner som fuktrisikokonstruksjoner.",
              "Det kan være vanskelig å oppdage eventuelle fuktskader før de har utviklet seg over tid, da det er begrenset tilgang for inspeksjon og vedlikehold.",
              "Lukkede konstruksjoner med skråtak gir ofte lite mulighet for lufting, noe som øker risikoen for kondens og opphopning av fukt i konstruksjonen."
            ],
            "source_documents": [
              "d176_d176"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R5",
            "description": "Yttertak og terrasse ikke inspisert på grunn av snødekke – skjulte skader kan foreligge",
            "evidence": [
              "Grunnet mye snø og snødekket yttertak var det ikke mulig å inspisere taktekkingen, takrenner og nedløp.",
              "Grunnet snø på befaringstidspunktet ble ikke terrassen visuelt vurdert.",
              "Det anbefales en ny inspeksjon når snøforholdene tillater det.",
              "Inspeksjon av yttertaket ble utført fra bakkeplan. Dette innebærer at vurderingene er gjort visuelt fra bakken uten bruk av stige eller lift."
            ],
            "source_documents": [
              "d176_d176"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.91
          },
          {
            "risk_id": "R6",
            "description": "Drenering og fuktsikring under bakkenivå er ikke tilgjengelig for inspeksjon",
            "evidence": [
              "Det er en begrensning at selve drenering/fuktsikring ligger under bakkenivå og er ikke tilgjengelig for inspeksjon.",
              "Fundament ligger under bakkenivå og er ikke tilgjengelig for inspeksjon.",
              "Det ble ikke foretatt geologiske undersøkelser i forbindelse med utarbeidelse av denne rapporten."
            ],
            "source_documents": [
              "d176_d176"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R7",
            "description": "Baderomsinnredning og tilstøtende vegger er ikke fullt undersøkt – risiko for skjulte fuktskader på bad",
            "evidence": [
              "Det gjøres oppmerksom på at baderomsinnredningen ikke er vurdert eller satt tilstandsgrad på.",
              "Det er ikke boret hull i tilstøtende rom eller fra undersiden.",
              "Det er ikke fuktkontrollert med egnet fuktmåleverktøy.",
              "Det ble ikke utført hulboring i yttervegger for å måle fukt, grunnet at badet er fra 2023.",
              "Risiko: Det kan gi økt risiko for skjulte skader som ikke ble avdekket på befaringstidspunktet."
            ],
            "source_documents": [
              "d176_d176"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R8",
            "description": "Trapper, garderobeskap, hyllesystemer og etasjeskille er ikke vurdert eller satt tilstandsgrad på",
            "evidence": [
              "Trapper, garderobeskap, hyllesystemer og etasjeskille er ikke vurdert eller satt tilstandsgrad på.",
              "Årsak: Ikke ett krav i Avhendingsloven.",
              "Risiko: Dette gir økt risiko for skjulte skade, skeivheter og andre relevante vedlikeholdsbehov.",
              "Det anbefales å gjennomføre ytterligere undersøkelser, utført av fagperson."
            ],
            "source_documents": [
              "d176_d176"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.78
          },
          {
            "risk_id": "R9",
            "description": "Nabotomt (Fåmyrsrøet 17) er regulert til bolig og kan bebygges – risiko for endrede lysforhold og nærmiljø",
            "evidence": [
              "Det gjøres oppmerksom på at tomt ved siden av, Adresse Fåmyrsrøet 17, er tomt som er regulert til bolig og dermed kan bebygges.",
              "Reguleringsplan: Eldre reguleringsplan, Planid: 99-22, Navn: Fåmyrsrøet, Status: Endelig vedtatt arealplan, Ikrafttredelse 21.01.2002."
            ],
            "source_documents": [
              "d176_d176"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R10",
            "description": "Hjemmelshaver (Godvik Utvikling AS) har ikke selv bodd i boligen – begrenset førstehåndskunnskap om boligens tilstand",
            "evidence": [
              "Hjemmelshaver har ikke selv bodd i boligen og det er ikke gjort vesentlige endringer etter byggeår.",
              "Denne boligen er nylig ferdigstilt, men har ikke vært bebodd.",
              "Selger er et aksjeselskap (Godvik Utvikling AS), ikke en privatperson med beboererfaring."
            ],
            "source_documents": [
              "d176_d176"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R11",
            "description": "Formuesverdi er ikke beregnet – usikkerhet rundt fremtidig skattemessig verdi",
            "evidence": [
              "Formuesverdien er ikke beregnet.",
              "Skatteetaten vil beregne en boligverdi (beregnet markedsverdi for bolig) basert på SSBs statistiske opplysninger om omsatte boliger."
            ],
            "source_documents": [
              "d176_d176"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.6
          },
          {
            "risk_id": "R12",
            "description": "Sameie med Fåmyrsrøet 15A – kjøper plikter å dele kostnader for fellesområde og garasje uten at omfanget er fullt spesifisert",
            "evidence": [
              "Eiendommen blir i sameie med Fåmyrsrøet 15A og må dele kostnader for fellesområde samt garasje.",
              "Salgsoppgaven inneholder ingen detaljert beskrivelse av fordelingsnøkkel eller sameieavtale."
            ],
            "source_documents": [
              "d176_d176"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R13",
            "description": "Terrassebord står ubehandlet – økt risiko for rask nedbrytning og vedlikeholdsbehov",
            "evidence": [
              "Det gjøres oppmerksom på at terrassebordene står ubehandlet. For å sikre lang levetid og redusere vedlikeholdsbehov, anbefales det at man behandler bordene.",
              "Terrassen er oppført i trekonstruksjon med terrassebord på bjelkelag."
            ],
            "source_documents": [
              "d176_d176"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R14",
            "description": "Legalpant til kommunen er ikke synlig i grunnboken og har prioritet foran tinglyste banklån",
            "evidence": [
              "Kommunen har legalpant som sikkerhet for betaling av kommunale avgifter og eventuell eiendomsskatt.",
              "Legalpant er et pant som ikke vises i grunnboksutskriften, og har prioritet foran for eksempel tinglyste banklån på eiendommen."
            ],
            "source_documents": [
              "d176_d176"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R15",
            "description": "Ventilasjon er gitt TG2 – vesentlig avvik som bør undersøkes nærmere",
            "evidence": [
              "ANTALL TG: 1 VESENTLIGE AVVIK – Ventilasjon er blant bygningsdeler med TG2.",
              "Det anbefales å undersøke anleggene nærmere, utført av fagperson, for å avklare omfang og behov for eventuell utbedring.",
              "TG2 betyr at bygningsdelen kan ha vesentlige avvik, herunder feil utført, skadet, nedsatt funksjon eller behov for tiltak i nær fremtid."
            ],
            "source_documents": [
              "d176_d176"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.87
          },
          {
            "risk_id": "R16",
            "description": "Funksjonstesting av elektrisk anlegg, varmekabler og hvitevarer er ikke utført under befaring",
            "evidence": [
              "Funksjonstesting av elektrisk anlegg, varmekabler, panelovner, hvitevarer, markiser, persienner o.l er ikke foretatt.",
              "El-anlegg installert som del av nybygg, kun av faglært."
            ],
            "source_documents": [
              "d176_d176"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.75
          },
          {
            "risk_id": "R17",
            "description": "Forsikringsforhold for eiendommen er ikke fremlagt",
            "evidence": [
              "Forsikringsforhold: Ikke fremlagt.",
              "Selger er et aksjeselskap (Godvik Utvikling AS) og boligen har ikke vært bebodd – det er uklart om det foreligger aktiv bygningsforsikring."
            ],
            "source_documents": [
              "d176_d176"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.72
          },
          {
            "risk_id": "R18",
            "description": "Ny risiko: Boligen selges etter avhendingslova, men selger er næringsdrivende (AS) – kjøper kan ha svakere forbrukervern enn antatt",
            "evidence": [
              "Salget skjer etter bestemmelsene i avhendingslova.",
              "Hjemmelshaver: Godvik Utvikling AS – selger er et aksjeselskap og profesjonell utbygger.",
              "Denne boligen er nylig ferdigstilt, men har ikke vært bebodd – salg fra utbygger kan utløse bustadoppføringslova for forbrukerkjøpere, men dette er ikke avklart i dokumentene.",
              "Hvis kjøper ikke anses som forbruker, bortfaller kravet om garanti etter bustadoppføringslova § 12."
            ],
            "source_documents": [
              "d176_d176"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.78
          },
          {
            "risk_id": "R19",
            "description": "Ny risiko: 5 bygningsdeler er merket TGIU (ikke undersøkt) – ukjent tilstand på disse elementene",
            "evidence": [
              "ANTALL TG: 5 IKKE UNDERSØKT – fem bygningsdeler er ikke undersøkt av takstmann.",
              "TGIU betyr at bygningsdelen ikke er blitt undersøkt av takstmann.",
              "Snødekke hindret inspeksjon av tak og terrasse; lukkede konstruksjoner hindret inspeksjon av skråtak og drenering."
            ],
            "source_documents": [
              "d176_d176"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          }
        ],
        "re_retrieval_queries": [
          "Hva er de spesifikke bygningsdelene som er gitt TGIU (ikke undersøkt) i tilstandsrapporten?",
          "Hvilke arbeider gjenstår før ferdigattest kan utstedes, og hva er fristen for ferdigstillelse?",
          "Hva er innholdet i sameieavtalen mellom Fåmyrsrøet 15A og 15B – fordelingsnøkkel og kostnadsfordeling?",
          "Hva er årsaken til at ventilasjon er gitt TG2, og hva er det konkrete avviket?",
          "Er det tegnet bygningsforsikring eller annen forsikring på eiendommen av utbygger?",
          "Gjelder bustadoppføringslova eller avhendingslova for dette salget, og er kjøper definert som forbruker?",
          "Hvilke tinglyste heftelser og rettigheter følger eiendommens matrikkel ved overskjøting?"
        ],
        "reasoning": "\nGjennomgangen av de 17 identifiserte risikoene viser at samtlige er godt forankret i dokumentevidensen. Følgende justeringer og vurderinger er gjort:\n\n**Justert ned i confidence:**\n- R3 (Radon): Justert fra 0.93 til 0.90. TEK17-kravet om radonsperre er positivt, men radonmåling er likevel ikke utført og faktisk radonnivå er ukjent. Radon SR16 er listet som berørt datasett i områdeanalysen, noe som indikerer at radon er relevant for området.\n- R7 (Bad): Justert fra 0.85 til 0.80. Badet er fra 2023 og det er ikke påvist avvik. Manglende hulboring er begrunnet med at badet er nytt, og takstmann fant ingen unormale verdier på tilgjengelige overflater. Risikoen er reell men noe lavere enn opprinnelig vurdert.\n- R8 (Trapper/etasjeskille): Justert fra 0.82 til 0.78. Manglende vurdering er begrunnet med at det ikke er et lovkrav, og boligen er tilnærmet ny. Risikoen er reell men begrenset for en ny bolig.\n- R11 (Formuesverdi): Justert ned fra 0.72 til 0.60. Dette er en administrativ/skattemessig usikkerhet som er normal for nybygg og ikke en direkte kjøpsrisiko. Skatteetaten beregner dette automatisk.\n- R16 (Funksjonstesting): Justert fra 0.80 til 0.75. El-anlegget er installert av faglærte som del av nybygg, noe som reduserer risikoen noe.\n- R17 (Forsikring): Justert fra 0.75 til 0.72. Bekreftet av dokumentet, men for en ny uinnflyttet bolig er dette noe mer forventet.\n\n**Beholdt uendret:**\n- R1, R2, R4, R5, R6, R9, R12, R13, R14, R15 har alle sterk og direkte evidens i dokumentene og beholdes med opprinnelig confidence.\n- R10 justeres marginalt opp til 0.82 da det er bekreftet at selger er et AS som ikke har bodd i boligen.\n\n**Nye risikoer identifisert:**\n- R18: Uklarhet om lovanvendelse (avhendingslova vs. bustadoppføringslova). Dokumentet nevner at salget skjer etter avhendingslova, men selger er en profesjonell utbygger (AS) som selger en nyoppført, ubebodd bolig. Dette kan i realiteten utløse bustadoppføringslova for forbrukerkjøpere, noe som gir andre rettigheter og garantikrav. Dokumentet nevner selv at \"Hvis kjøper ikke anses som forbruker, bortfaller kravet om garanti.\" Confidence: 0.78.\n- R19: 5 bygningsdeler er merket TGIU (ikke undersøkt). Tilstandsrapporten viser eksplisitt \"5 IKKE UNDERSØKT\". Dette er en selvstendig risiko utover de enkeltvis omtalte TGIU-elementene (tak, terrasse, skråtak, drenering). Confidence: 0.88.\n\n**Manglende informasjon som bør etterspørres:**\n- Hvilke 5 spesifikke bygningsdeler er TGIU?\n- Detaljer om sameieavtalen mellom 15A og 15B\n- Konkret årsak til TG2 på ventilasjon\n- Avklaring av lovanvendelse (avhendingslova vs. bustadoppføringslova)\n- Tinglyste heftelser i detalj\n"
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
    "input_tokens": 21782,
    "output_tokens": 5279,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
