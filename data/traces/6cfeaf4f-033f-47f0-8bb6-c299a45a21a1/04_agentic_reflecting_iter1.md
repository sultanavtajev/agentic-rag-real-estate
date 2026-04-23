# Trace: agentic_reflecting_iter1
- **Run ID:** 6cfeaf4f-033f-47f0-8bb6-c299a45a21a1
- **Tidspunkt:** 2026-03-24T21:03:31.343581+00:00
- **Varighet:** 110.40s
- **Input tokens:** 19240
- **Output tokens:** 6107

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
Risiko 1: Ingen tilstandsrapport er innhentet. Selger har ikke skaffet en tilstandsrapport som oppfyller kravene i forskriften til avhendingsloven. Dette medfører at det er gjort færre undersøkelser av bygningssakkyndig, og kjøper får mindre informasjon om eiendommens tilstand. Risikoen for skjulte feil og mangler er dermed høyere.
  Confidence: 0.98
  Evidens: Selger har ikke skaffet en tilstandsrapport som oppfyller kravene i forskriften til avhendingsloven.; Det er ikke et lovkrav å fremskaffe en slik tilstandsrapport, men mangelen på en slik rapport medfører at det vanligvis er gjort færre undersøkelser av bygningssakkyndig, og at kjøper får mindre informasjon om eiendommens tilstand enn hva som ville vært tilfelle dersom en tilstandsrapport var innhentet.

Risiko 2: Midlertidig brukstillatelse – ferdigattest ikke utstedt. Eiendommen har kun midlertidig brukstillatelse datert 06.02.2026. Det gjenstår arbeid før ferdigattest kan utstedes. Dette innebærer en risiko for at gjenstående arbeider ikke blir fullført, eller at det oppstår tvister om hva som skal ferdigstilles.
  Confidence: 0.97
  Evidens: Det foreligger midlertidig brukstillatelse for eiendommen, datert 06.02.2026. Midlertidig brukstillatelse bekrefter at boligen lovlig kan benyttes, men at det fortsatt gjenstår arbeid før ferdigattest kan utstedes.; Ferdigattest/ brukstillatelse datert: 06.02.2026.

Risiko 3: Selger har ikke bebodd eiendommen og har begrenset kunnskap om den. Selger er et utbyggingsselskap (Bm Prosjekt Og Utvikling AS) som ikke har bodd i boligen. Det kan derfor være skader og andre forhold ved eiendommen som ikke er spesifikt opplyst om i egenerklæringen.
  Confidence: 0.95
  Evidens: Selger har ikke bebodd eiendommen og har derfor ikke spesifikk kunnskap om den. Det kan derfor være skader og andre forhold ved eiendommen som ikke er spesifikt opplyst.; Kjøper oppfordres derfor til å foreta en særlig grundig undersøkelse av eiendommen, gjerne med bistand av teknisk sakkyndig.

Risiko 4: Selger har ikke tegnet boligselgerforsikring. Dersom det avdekkes skjulte feil eller mangler etter overtakelse, kan kjøper ha vanskeligere for å få dekket krav mot selger, ettersom selger ikke har forsikring som dekker slike krav.
  Confidence: 0.93
  Evidens: Boligselgerforsikring: Selger har ikke tegnet boligselgerforsikring.

Risiko 5: Ingen radonmåling er utført. Selger har ikke utført radonmåling av boligen. Radon er en usynlig og luktfri gass som kan utgjøre en helserisiko ved forhøyede konsentrasjoner innendørs.
  Confidence: 0.9
  Evidens: Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid.

Risiko 6: Legalpant – prioritet foran tinglyste lån. Sameiet har legalpant på inntil 2G (to ganger folketrygdens grunnbeløp) i den enkelte eierseksjon som sikkerhet for krav knyttet til sameieforholdet. Kommunen har legalpant med enda høyere prioritet. Dette pantet vises ikke i grunnboksutskriften og kan komme som en overraskelse for kjøper.
  Confidence: 0.92
  Evidens: Legalpant er pant som ikke vises i grunnboksutskriften, og har prioritet foran tinglyste lån, for eksempel banklån på seksjonen.; Legalpant til kommunen har høyere prioritet enn legalpant til sameiet.; Kommunen har legalpant som sikkerhet for betaling av kommunale avgifter og eventuell eiendomsskatt. De øvrige seksjonseierne i sameiet har legalpant på inntil 2G som sikkerhet for krav knyttet til sameieforholdet.

Risiko 7: Tinglyste heftelser og bestemmelser på eiendommen. Det er tinglyst en rekke heftelser og bestemmelser på eiendommen, blant annet bestemmelser om vann/kloakkledninger, felles vedlikehold, solidarisk ansvar for fellesledninger, garasje/parkering, veg og bestemmelse om å rive/fjerne bygg når bygningsrådet forlanger det. Disse kan medføre forpliktelser og begrensninger for ny eier.
  Confidence: 0.88
  Evidens: 08.06.1964 - Dokumentnr: 1790 - Best. om vann/kloakkledn.; 01.10.1964 - Dokumentnr: 3184 - Best. om vann/kloakkledn. Bestemmelse om felles vedlikehold; 01.12.1966 - Dokumentnr: 4275 - Bestemmelse om veg; 24.06.1970 - Dokumentnr: 3106 - Best om garasje/parkering; 3222/107/111/5: Bestemmelse om å rive/fjerne bygg når bygningsrådet forlanger det; Bestemmelse om solidarisk ansvar for fellesledninger; Bestemmelse om frostsikkert fundament på garasje

Risiko 8: Bestemmelse om å rive/fjerne bygg når bygningsrådet forlanger det. Det er tinglyst en bestemmelse om at bygningsrådet kan kreve at bygg på eiendommen rives eller fjernes. Dette er en alvorlig heftelse som kan påvirke eiendommens verdi og bruken av den.
  Confidence: 0.91
  Evidens: 3222/107/111/5: Bestemmelse om å rive/fjerne bygg når bygningsrådet forlanger det

Risiko 9: Ukjente kommunale avgifter. Eiendommen er nyoppført og det foreligger ikke tall for kommunale avgifter. Kjøper vet dermed ikke nøyaktig hva de løpende kommunale kostnadene vil bli.
  Confidence: 0.82
  Evidens: Informasjon: Eiendommen er nyoppført og det foreligger derfor ikke tall for kommunale avgifter. For eneboliger ligger kommunale avgifter vanligvis mellom 15 000,- til 25 000,- pr år, avhengig av størrelse på husholdningen.

Risiko 10: Ingen formuesverdi foreligger. Boligen er nyoppført i 2026 og det foreligger ikke formuesverdi. Dette gjør det vanskelig for kjøper å forutse fremtidig skattegrunnlag og formuesskatt.
  Confidence: 0.78
  Evidens: Info om formuesverdi: Boligen er nyoppført i 2026, det foreligger derfor ikke formuesverdi.

Risiko 11: Stikkledninger er private og vedlikeholdsansvaret påhviler sameiet. Stikkledningene fra eiendommen og ut til det kommunale nettet er private. Vedlikeholdsansvaret for disse påhviler sameiet, noe som kan medføre uforutsette kostnader ved fremtidige reparasjoner eller utskiftninger.
  Confidence: 0.85
  Evidens: Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler sameiet.

Risiko 12: Energimerke B med rød energifarge. Boligen har energikarakter B, men energifarge rød. Rød energifarge indikerer at boligen i stor grad benytter elektrisitet som energikilde, noe som kan medføre høye strømkostnader.
  Confidence: 0.8
  Evidens: Energikarakter: B; Energifarge: Rød; Total energibruk 12998 kWh; Elektrisitet 11332 kWh

Risiko 13: Salget reguleres av avhendingsloven, ikke bustadoppføringslova. Boligen er nylig ferdigstilt, men har ikke vært bebodd, og salget skjer etter bestemmelsene i avhendingsloven. Dette kan bety at kjøper ikke har de samme rettighetene som ved kjøp av bolig under oppføring etter bustadoppføringslova, herunder rett til garanti etter bustadoppføringslova § 12.
  Confidence: 0.87
  Evidens: Denne boligen er nylig ferdigstilt, men har ikke vært bebodd. Salget skjer etter bestemmelsene i avhendingsloven.

Risiko 14: Begrensning på eierskap – maks to seksjoner per person. Ingen kan eie mer enn to boligseksjoner i sameiet, i henhold til eierseksjonsloven § 23. Seksjoner eid av nærstående eller gjennom firma regnes også med. Dette kan begrense investorers muligheter.
  Confidence: 0.75
  Evidens: Det informeres om at ingen kan eie mer enn to boligseksjoner i sameiet, i henhold til eierseksjonsloven § 23. Seksjoner som eies av nærstående eller gjennom et firma regnes også med.

Risiko 15: Ukjent strømforbruk. Boligen har ikke vært bebodd, og selger har derfor ikke mulighet til å opplyse om faktisk strømforbruk. Kjøper kan ikke basere seg på historiske forbrukstall ved budsjettering av løpende kostnader.
  Confidence: 0.8
  Evidens: Boligen er ikke bebodd, selger har derfor ikke mulighet til å opplyse om strømforbruk.

Dokumentkontekst:
[d085_d085 | Side [1]]
rapport var innhentet. Eiendommen er regulert til bolig. For mer informasjon om
reguleringsforhold, kontakt megler eller søk på
saksnummer, adresse eller gårds‑ og bruksnummer på
Plan‑ og bygningsetatens hjemmeside.
Øvrig
40

## Side 41

OM EIENDOMMEN
Bestemmelse om felles vedlikehold
Tinglyste heftelser
Overført fra: Knr:3222 Gnr:107 Bnr:111
Tinglyste heftelser og rettigheter: På eiendommen er det Gjelder denne registerenheten med flere
tinglyst følgende heftelser og rettigheter som følger
eiendommens

---

[d085_d085 | Side [1]]
inglyst følgende heftelser og rettigheter som følger
eiendommens matrikkel ved overskjøting til ny
hjemmelshaver: 24.06.1970 ‑ Dokumentnr: 3106 ‑ Best om garasje/
parkering
3222/ 107/ 111/ 5: Bestemmelse om å rive/ fjerne bygg når bygningsrådet
08.06.1964 ‑ Dokumentnr: 1790 ‑ Best. om vann/ forlanger det
kloakkledn. Overført fra: Knr:3222 Gnr:107 Bnr:111
Rettighetshaver: Knr:3222 Gnr:107 Bnr:365 Gjelder denne registerenheten med flere
Bestemmelse om felles vedlikehold
Overført fra: Knr:3222 Gnr:107

---

[d085_d085 | Side [1]]
v knyttet til
Gjelder bnr.108, 111, 365 og 1386 sameieforholdet, som felleskostnader. Legalpant er pant
Overført fra: Knr:3222 Gnr:107 Bnr:111 som ikke vises i grunnboksutskriften, og har prioritet
Gjelder denne registerenheten med flere foran tinglyste lån, for eksempel banklån på seksjonen.
Legalpant til kommunen har høyere prioritet enn
legalpant til sameiet.
01.12.1966 ‑ Dokumentnr: 4275 ‑ Bestemmelse om veg
41

## Side 42

OM EIENDOMMEN
grunnlag
Vei, vann og avløp
Eiendommen er tilknyttet offentlig

---

[d085_d085 | Side [1]]
 felles vedlikehold Formål: Bolig
Overført fra: Knr:3222 Gnr:107 Bnr:111 Tilleggsdel: Bygning og grunn
Gjelder denne registerenheten med flere Sameiebrøk: 1/ 6
Legalpant: Kommunen har legalpant som sikkerhet for
01.10.1964 ‑ Dokumentnr: 3184 ‑ Best. om vann/ betaling av kommunale avgifter og eventuell
kloakkledn. eiendomsskatt. De øvrige seksjonseierne i sameiet har
Bestemmelse om felles vedlikehold legalpant på inntil 2G som sikkerhet for krav knyttet til
Gjelder bnr.108, 111, 365 og 1386 sameieforholdet,

---

[d085_d085 | Side [1]]
svilkår
ansvarlige overfor sameiets kreditorer i forhold til sin Denne boligen er nylig ferdigstilt, men har ikke vært
sameiebrøk. Ved manglende betaling av fellesutgifter har bebodd. Salget skjer etter bestemmelsene i
sameiet legal panterett i den enkelte eierseksjon, avhendingsloven.
begrenset til inntil 2 ganger folketrygdens grunnbeløp.
Garanti ved salg til forbruker
Kjøper og selger er forpliktet til å signere den standard Dersom kjøperen er en privatperson og kjøpet
kjøpekontrakten utarbeidet av

---

[d085_d085 | Side [1]]
N
grunnlag
Vei, vann og avløp
Eiendommen er tilknyttet offentlig vann‑ og
Overtakelse
avløpssystem. Stikkledningene fra eiendommen og ut til
det kommunale nettet er private, og Tidspunkt for overtakelse avtales mellom kjøper og
vedlikeholdsansvaret for disse påhviler sameiet. selger.
Adkomst til eiendommen skjer via offentlig vei.
Forsikring
Utleie
Boligselgerforsikring: Selger har ikke tegnet
Adgang til utleie: Boligen kan leies ut. boligselgerforsikring.
Boligkjøperforsikring: Kjøper har anledning til å

---

[d085_d085 | Side [1]]
temmelse om solidarisk ansvar for fellesledninger Bestemmelse om frostsikkert fundament på garasje
Overført fra: Knr:3222 Gnr:107 Bnr:111 Overført fra: Knr:3222 Gnr:107 Bnr:111
Gjelder denne registerenheten med flere Gjelder denne registerenheten med flere
01.10.1964 ‑ Dokumentnr: 3184 ‑ Best. om vann/ 27.01.2026 ‑ Dokumentnr: 95940 ‑ Seksjonering
kloakkledn. Opprettet seksjoner:
Rettighetshaver: Knr:3222 Gnr:107 Bnr:111 Snr: 5
Bestemmelse om felles vedlikehold Formål: Bolig
Overført fra: Knr:3222 Gnr:107

---

[d085_d085 | Side [1]]
eller mangler ved boligen de
Diverse
neste fem årene. Les mer om Boligkjøperforsikring i
Det informeres om at ingen kan eie mer enn to vedlagte materiell eller på https:/ /
boligseksjoner i sameiet, i henhold til eierseksjonsloven § www.soderbergpartners.no/ eiendom/ boligkjoper/
23. Seksjoner som eies av nærstående eller gjennom et
firma regnes også med.
Lovanvendelse
I henhold til eierseksjonsloven § 31 er sameierne Om eiendommen og salgsvilkår
ansvarlige overfor sameiets kreditorer i forhold til sin

---

[d085_d085 | Side [1]]

## Side 79

Kontorforretning, seksjonering
sak:25/6783. Eiendom (gbnr): 107/111
Myrstubben 9-19
12.12.2025
Målestokk 1:350
Lørenskog kommune v/Geodata
79

## Side 80

 

80

## Side 81

 

81

## Side 82

Boligkjøperforsikring
Hvis din nye bolig har skjulte feil kan dette koste
deg både tid og penger.
Dine fordeler
− Unngå bekymring og

---

[d085_d085 | Side [1]]
Bestemmelse om felles vedlikehold
Overført fra: Knr:3222 Gnr:107 Bnr:111
Gjelder denne registerenheten med flere 09.06.1971 ‑ Dokumentnr: 2811 ‑ Bestemmelse om
kloakkledn
Overført fra: Knr:3222 Gnr:107 Bnr:111
08.06.1964 ‑ Dokumentnr: 1790 ‑ Best. om vann/ Gjelder denne registerenheten med flere
kloakkledn.
Rettighetshaver: Knr:3222 Gnr:107 Bnr:108
Rettighetshaver: Knr:3222 Gnr:107 Bnr:365 28.04.1981 ‑ Dokumentnr: 2720 ‑ Erklæring/ avtale
Bestemmelse om solidarisk ansvar for fellesledninger Bestemmelse om

---

[d085_d085 | Side [1]]
m²), kan dette også gi grunnlag for krav etter § 3‑3. For
Dersom noe er uklart, anbefales det at budgivere søker prisavslag/ erstatning gjelder en egenandel på 10 000
råd hos megler eller bygningssakkyndig før budgivning. kroner, som kjøper selv må dekke.
Kjøp utenfor forbrukerdefinisjonen
Avtalegrunnlag og partenes plikter
Partenes rettigheter og forpliktelser fastsettes i Når regnes kjøper som ikke‑forbruker?
kjøpsavtalen og de dokumenter som er gjort tilgjengelige Dersom kjøperen er en juridisk person

---

[d085_d085 | Side [1]]
470 LØRENSKOG
Alt utstyr og installasjoner som medfølger overtas slik de
er, uten garanti, med mindre det foreligger en gjeldende Gnr. 107, bnr. 111, snr. 5, ideell andel 1/ 1
garanti fra produsent eller leverandør. i Lørenskog kommune.
Kjøper aksepterer at det kan forekomme hull og merker
Selger
etter montering av inventar og utstyr som ikke er en del
av overdragelsen. Bm Prosjekt Og Utvikling AS
Sameie
Eiendommens
Sameiets forsikringsselskap: Fremtind Forsikring
tilstand
Energimerke
Sammendrag selgers

---

[d085_d085 | Side [1]]
ravet om garanti.
Selger leverer eiendommen i ryddig og rengjort stand.
Dokumentasjon og opplysningsgrunnlag
Kjøper bes om å gå grundig gjennom all tilgjengelig
salgsinformasjon, inkludert prospekt og vedlegg.
Kontrakts‑
Opplysningene er hentet fra selger, samt offentlige
registre som Kartverket og kommunen. Forhold som
42

## Side 43

OM EIENDOMMEN
tydelig fremgår av dokumentasjonen anses som kjent for En forbruker er en fysisk person som handler for privat
kjøper og kan derfor ikke etterpå påberopes som

---

[d085_d085 | Side [1]]
sultatene skal presenteres i rapporten. Det
er ikke et lovkrav å fremskaffe en slik tilstandsrapport, Boligen er ikke bebodd, selger har derfor ikke mulighet til
men mangelen på en slik rapport medfører at det å opplyse om strømforbruk.
vanligvis er gjort færre undersøkelser av
bygningssakkyndig, og at kjøper får mindre informasjon
Regulerings og arealplaner
om eiendommens tilstand enn hva som ville vært tilfelle
dersom en tilstandsrapport var innhentet. Eiendommen er regulert til bolig. For mer

---

[d085_d085 | Side [1]]
t og det foreligger
derfor ikke tall for kommunale avgifter. For eneboliger
Omkostning kjøper
ligger kommunale avgifter vanligvis mellom
9 300 000,00 (Prisantydning) 15 000,‑ til 25 000,‑ pr år, avhengig av størrelse på
husholdningen.
Omkostninger
Andre kostnader:
66 650 (Dokumentavgift (2,5% av tomteverdi))
545 (Tinglysningsgebyr ‑ pantedokument) TV/ Internett/ Bredbånd: Kjøper må tegne eget
545 (Tinglysningsgebyr skjøte) abonnement.
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑
67 740

---

[d085_d085 | Side [1]]
e utgang til hage og uteplass. Etasjen gir også Innbo og løsøre: Salgsoppgaven inkluderer NEFs
gode muligheter for etablering av praktikantdel. standardliste "Oversikt over løsøre og tilbehør", som
39

## Side 40

OM EIENDOMMEN
legges til grunn med mindre annet er spesifisert i
informasjon
salgsoppgaven.
Adresse
Gjenstander som er nevnt i standardlisten, men som ikke
finnes på eiendommen, vil heller ikke følge med i salget. Myrstubben 17, 1470 LØRENSKOG
Alt utstyr og installasjoner som medfølger overtas

---

[d085_d085 | Side [1]]
sje til stor balkong
 Utsikt
 Store skyvedører i 1. etasje med utgang til hage
 Stor skyvedør i stue i 2. etasje med utgang til ca. 30 kvm terrasse
 Spotter under terrasse
 Malt garasje og slipt gulv i garasje
 Balansert ventilasjon fra Flexit
 Peis
 Gress i markert eget område
 Seksjonert egen tomt
 Tua hekk
 Langvannet i nærområdet – bading, båt, fiske osv.
 Det er lagt inn røropplegg til 2. etasje stue/soverom dersom det ønskes kjøkken i 2.
etasje
 Mulighet for å leie ut 1. etasje og

---

[d085_d085 | Side [1]]
. Felles avkjørsel mellom Asbjørn Klosters vei og Elveveien skal betjene følgende
eiendommer:
- blokkbebyggelsen på gnr. 107, bnr. 19 og 993.
- felles parkeringsanlegg på gnr. 107, bnr. 979, 1334 og 1335.
- boligbebyggelsen på gnr. 107, bnr. 585, 582 nordre del, 823, 967 og 1856.
c. Øvrige felles avkjørsler vist i planen skal betjene eiendommer som grenser til disse
samt eventuelle fremtidige parseller av eiendommene. Bygningsrådet kan godkjenne
annen ordning hvor rådet finner dette forsvarlig.
§

---

[d085_d085 | Side [1]]
eiendommen og har derfor ikke spesifikk kunnskap om den. Det kan derfor være skader og andre forhold ved
eiendommen som ikke er spesifikt opplyst. Kjøper oppfordres derfor til å foreta en særlig grundig undersøkelse av eiendommen, gjerne med
bistand av teknisk sakkyndig.
Jeg bekrefter at opplysningene er gitt etter beste skjønn. Jeg er kjent med at dersom jeg har gitt ufullstendige, uriktige eller misvisende
opplysninger om eiendommen, vil forsikringsselskapet kunne søke hel eller delvis regress for sine

---

[d085_d085 | Side [1]]
45
 Underlag – terrassebord 28 × 120 impregnert furu klasse 1
 Membran fra Perun
 Beslag i sort
 Bergene Holm rekkeverkspiler, impregnert og nordbehandlet
Carport
 3 stk. downlights i sort
 Mørk kledning i himling
VIKTIGE PUNKTER Å FÅ MED I
SALGSOPPGAVEN
 Knevegg i 3. etasje er høy, slik at du får skråtak med god romfølelse
 Terrasser og balkonger er komplett tette – eksklusivt for bruk over og under terrasse
 Balkongdør i 3. etasje til stor balkong
 Utsikt
 Store skyvedører i 1. etasje med

---

[d085_d085 | Side [1]]
ergiattest fra selger som vedlegg til
salgsoppgave. Megler påtar seg ikke ansvar for
Byggemåte
informasjonen som fremgår av energiattesten.
Selger har ikke skaffet en tilstandsrapport som oppfyller
kravene i forskriften til avhendingsloven. Forskriften
Oppvarming
fastsetter minstekrav for hvilke bygningsdeler som skal
undersøkes, hvordan undersøkelsene skal gjennomføres, Elektrisk oppvarming, vedovn og balansert ventilasjon.
og hvordan resultatene skal presenteres i rapporten. Det
er ikke et lovkrav å

---

[d085_d085 | Side [1]]
nomgang av eiendommen før eventuelle bud inngis hvis det er gitt mangelfulle eller uriktige opplysninger
– gjerne sammen med fagkyndig. Dersom man velger å som kunne ha påvirket kjøpsbeslutningen – forutsatt at
kjøpe uten befaring, kan man ikke i ettertid kreve dette ikke ble rettet opp på en tydelig måte.
kompensasjon for forhold som burde vært avdekket ved
en normal undersøkelse. Hvis innendørs areal avviker med 2 % eller mer (og minst
1 m²), kan dette også gi grunnlag for krav etter § 3‑3. For
Dersom

---

[d085_d085 | Side [1]]
kap: Fremtind Forsikring
tilstand
Energimerke
Sammendrag selgers egenerklæring: Selger har ikke
bebodd eiendommen og har derfor ikke spesifikk Energikarakter: B
kunnskap om den. Det kan derfor være skader og andre
forhold ved eiendommen som ikke er spesifikt opplyst. Energifarge: Rød
Kjøper oppfordres derfor til å foreta en særlig grundig
undersøkelse av eiendommen, gjerne med bistand av
Info energiklasse
teknisk sakkyndig.
Se fullstendig energiattest fra selger som vedlegg til
salgsoppgave. Megler påtar

---

[d085_d085 | Side [1]]
der. utgang til balkong med gode lys‑ og utsiktsforhold.
BRA‑b ‑ Innglasset balkong, altan, terrasser.
Boligen leveres med to delikate, flislagte bad, begge med
Andre arealer: fliser fra Flisekompaniet – RAKO Extra Ivory 60 x 60, som
TBA ‑Terrasser og åpen altan som er tilknyttet boligen. gir et tidløst og eksklusivt uttrykk. Badene er innredet
ALH ‑ Areal med lav himlingshøyde måles på samme med moderne møbler og sorte detaljer. Det er også
måte som BRA, men man ser bort fra krav til varmekabler på badene

---

[d085_d085 | Side [1]]
 måneder før overtakelse.
Forøvrig oppfordrer selger potensielle kjøpere til å undersøke eiendommen grundig, jf avhendigsloven § 3-10 og kjøpsloven § 20
(aksjeboliger).
Gyldig forsikring forutsetter at det for helårs- og fritidsbolig foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere
bolighandel).
Jeg ønsker boligselgerforsikring, og bekrefter å ha mottatt og lest forsikringsvilkårene og informasjonsbrosjyre til selger i
forbindelse med kjøp av boligselgerforsikring.

---

[d085_d085 | Side [1]]
et gjøres oppmerksom på at ferdigattest ikke vil bli
utstedt for ufullførte byggesaker/ bygningsmeldinger som
Parkering
er fra før 1998.
Boligen har egen garasje samt carport.
Ferdigattest/ brukstillatelse datert: 06.02.2026.
Adkomst
Innhold
På høyre side i annonsen finner du et kartutsnitt. Ved å
klikke på kartet kan du enkelt planlegge din rute fra valgt
Areal
startpunkt og helt frem til boligen. Det vil være skiltet ved
fellesvisninger for enkel orientering. BRA ‑ i: 124 m²
BRA ‑ e: 16 m²
BRA ‑ b: 0

---

[d085_d085 | Side [1]]
ne: E, G;
Forventet levert energi
Beskrivelse Verdi
Elektrisitet 11332 kWh
Olje 0 kWh
Gass 0 kWh
Fjernvarme 0 kWh
Biobrensel 1666 kWh
Annen energivare 0 kWh
Total energibruk 12998 kWh
Dokumentasjon av sentrale inndata (1)
Beskrivelse Verdi Dokumentasjon
Areal yttervegger [m²]: 145
Areal tak [m²]: 64
Areal gulv [m²]: 51
Areal vinduer og ytterdører [m²]: 39
Oppvarmet bruksareal (BRA) [m²]: 123
Oppvarmet luftvolum [m³]: 304
U-verdi yttervegger [W/m²K] 0,15
U-verdi tak [W/m²K] 0,13
U-verdi gulv [W/m²K]

---

[d085_d085 | Side [1]]
ide 58

SIMIEN
Energimerke
Simuleringsnavn: Energimerke
Tid/dato simulering: 06:29 4/7-2024
Programversjon: 6.018
Simuleringsansvarlig:
Firma: Alfa Øst AS
Inndatafil: C:\...\Marcus Thranes vei 38 E+F Hus E, G - 04.07.2024.smi
Prosjekt: Marcus Thranes vei 38 E+F hus E, G
Sone: E, G;
Inndata bygning
Beskrivelse Verdi
Bygningskategori Småhus
Simuleringsansvarlig
Kommentar
SIMIEN; Energimerke Side 4 av 4
58

## Side

---

[d085_d085 | Side [1]]
råtak eller lav himlingshøyde. Arealet oppgis bad og uteområder. Det er komplett elektrisk anlegg med
som tilleggsinformasjon til øvrige arealer. klargjøring for elbillader.
Utearealene er godt tilrettelagt med terrasse, hage og
Standard
balkong, spotter under terrasse og gode solforhold.
Boligen holder en gjennomgående høy standard med Garasje/ carport er ferdigstilt med et helhetlig og
moderne og tidløse materialvalg, lyse flater og elegante gjennomført uttrykk. Eiendommen skal seksjoneres med
mørke

---

[d085_d085 | Side [1]]
ofilen er hentet fra ulike datakilder, og feil eller mangler kan forekomme. Vurderinger og sitater er innhentet på web og gir uttrykk for
hvordan naboene vurderer nabolaget. FINN.no AS kan ikke holdes ansvarlig for feil/mangler i profilen. Copyright © Finn.no AS 2026
54

## Side 55

SIMIEN
Energimerke
Simuleringsnavn: Energimerke
Tid/dato simulering: 06:29 4/7-2024
Programversjon: 6.018
Simuleringsansvarlig:
Firma: Alfa Øst AS
Inndatafil: C:\...\Marcus Thranes vei 38 E+F Hus E, G - 04.07.2024.smi
Prosjekt:

---

[d085_d085 | Side [1]]
 n g e e ik . er r tea n ss b jgoj a ne n n innn e oem s n 1 f p aonr o les r 6 kgrgas N vp 4 eerrt ioodmernå.de Gul1 s8t1ø,y0s mon 1 2 e 65 166 1 1 7 0 67 40D 40E
1 60
Regnb
N
ed
161 Nordøst fasade
E
4 Sør 0 vest fas Cad S e n I i J tt I, J
38A
38B
38C
38D
Sørvest
fasade G
4Snitt G0B
N P M ro a s r j c e u kt s n a T v h n: ranes vei 38 E+F Tegningsnr: S 1 k : a 2 l 0 a 0 @ A2: C Sig B n. H H J O R T H A R K I T E K T E R
GSPublisherVersion 200.0.87.100 G 1 å 0 r 7 d / s 1 - 3 og 8 6 br u + k s 1 n 0 u 7

---

[d085_d085 | Side [1]]
ritidsbolig er det krav til at det foreligger tilstandsrapport i henhold til Forskrift til avhendingslova (tryggere
bolighandel).
Forsikringsselskapet kan ved skriftlig samtykke akseptere tegning av forsikring også i ovennevnte tilfeller.
Dersom forsikringsselskapet ikke har gitt skriftlig samtykke, kan erstatningen bortfalle.
Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter, begrenset til siste 12 måneder før overtakelse.
Forøvrig oppfordrer selger potensielle

---

[d085_d085 | Side [1]]
klasser 1.3 km
Wang Ung Romerike (8-10 kl.) 16 min
190 elever, 6 klasser 1.4 km
Mailand videregående skole 19 min
900 elever 1.6 km
Lørenskog videregående skole 4 min
850 elever, 39 klasser 1.8 km
% 81 % 7.41 % 5.41 %
3.7
%
5.6
%
2.7
% 9.12
%
6.52 % 2.12
%
4.14
%
3.93
%
9.83
% 5.11 % 1.41 % 3.81
Barn Ungdom Unge voksne Voksne Eldre
(0-12 år) (13-18 år) (19-34 år) (35-64 år) (over 65 år)
Område Personer Husholdninger
Fjellet 1 597 662
Oslo og omegn 999 185 490 708
Norge 5 425 412 2 654

---

[d085_d085 | Side [1]]
r Emera.
86

## Side 87

Forbrukerinformasjon
om budgivning
Sist oppdatert med virkning fra 1. juli 2025, i forbindelse med
ikrafttredelse av endringer i eiendomsmeglingsloven.
Informasjonen er utarbeidet av Forbrukerrådet, Advokatforeningen ved Lovutvalget for eiendomsmegling, Eiendom Norge og
Norges Eiendomsmeglerforbund, på grunnlag av bl.a. eiendomsmeglingsloven § 6-8.
Nedenfor gis en oversikt over de retningslinjer som anbefales ved budgivning på eiendommen. Avslutningsvis gis også en kort
oversikt

---

[d085_d085 | Side [1]]
 omfatter vanligvis Emera Norge AS og eiendomsmeglingsforetakene som
innhenting av informasjon fra kommunen, eventuell er tilknyttet Emera har samarbeid med forskjellige
forretningsfører, samt kopi av tinglyste dokumenter. foretak som tilbyr forbrukerne produkter eller tjenester i
Total kostnad ved salg til prisantydning: kr 150 650,00 forbindelse med et salgsoppdrag. Våre
Dette inkluderer både vederlag og stipulerte utlegg. samarbeidspartene er:
Ved avbrutt oppdrag: Søderberg & Partners AS ‑ formidler av

---

[d085_d085 | Side [1]]
ønskes kjøkken i 2.
etasje
 Mulighet for å leie ut 1. etasje og etablere utleiedel (se vedlegg – alternativ løsning,
adresse må fjernes da den er fra annen bolig, men løsningen er helt lik)
70

## Side 71

170
167
165166
164
Renov Ogsgt a j r p ae ø p nn s ft a dn e j a ro r o b rm f e dr n a fi e dø r 1 S er to t t a tm nil t 6 ty e av n vkes e,i e b 1 t i a i V b r l e e t R e r g e r e je t s å e . n dg t n e o d n E dv m k r o s a ee is n m v t l . e s h g a o e g e e k s s k p g e d f n o r j i r o o

---

[d085_d085 | Side [1]]
sør.

## Side 35

Langvannet og Rådhusparken ‑ flere
badeplasser rundt vannet.
I området ved Lørenskog stasjon finner
du én av verdens råeste helårsarena for
snøopplevelser ‑ SNØ.

## Side 36

MYRSTUBBEN 17
OM EIENDOMMEN

## Side 37

OM EIENDOMMEN
OM EIENDOMMEN
sider. Det er estimert eiendomsskatt på kr. 6 410,‑ pr. år
Økonomi
med en markedsverdi på 9 300 000.
Prisantydning
Kommunale avgifter
Kr 9 300 000
Informasjon: Eiendommen er nyoppført og det foreligger
derfor ikke tall for kommunale avgifter. For

---

[d085_d085 | Side [1]]
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

[d085_d085 | Side [1]]

‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑
67 740 (Omkostninger totalt)
Formuesverdi
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ Info om formuesverdi: Boligen er nyoppført i 2026, det
9 367 740 (Totalpris inkl. omkostninger) foreligger derfor ikke formuesverdi.
Skatteetaten beregner en boligverdi (beregnet
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ markedsverdi for bolig) basert på SSBs statistiske
opplysninger om omsatte boliger. I beregningen tas det
18 900

---

[d085_d085 | Side [1]]
sjon ved salg til prisantydning: kr 93 000,00 Henrik Ibsens gate 40–42, 0255 OSLO
Tilrettelegging: kr 15.000 Tlf: 229 52 222
Visninger/ overtagelser: kr 3000 pr. stk.
Markedspakke: kr 23.900
Salgsoppgavedato
Oppgjørshonorar inkl. factoring: kr 9900
Grunnpakke bolig Info: kr 9.900 06.03.2026
Samarbeidspartnere og
Utlegg:
tilknyttede foretak
Selger dekker utlegg i henhold til oppdragsavtalen. Disse
er estimert til ca. kr 7 900,00, og omfatter vanligvis Emera Norge AS og eiendomsmeglingsforetakene

---

[d085_d085 | Side [1]]
nnen fast eindom
Disponibelt kontant beløp (bankinnskudd)
Ønsket overtagelsesdato:
NÅVÆRENDE BUD ER BINDENDE FOR UNDERTEGNEDE TIL OG MED DEN:
Budet er bindende til klokken: 16.00 den dagen, hvis ikke budgiver har angitt et annet klokkeslett, dog ikke tidligere enn
kl. 12.00 første virkedag etter siste annonserte visning. Bud skal ikke ha kortere akseptfrist enn 30 minutter fra budet inngis. Bud med kortere
frist kan bli avvist.
Evt. forbehold (eks. finansiering, salg av egen bolig etc.):
NAVN:

---

[d085_d085 | Side [1]]
pe deg i fem år etter
overtagelse – uten at du trenger å bekymre deg for egne Borettslagseiendom: kr 9 300
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
Forsikringen er meglet frem av Söderberg

---

[d085_d085 | Side [1]]
en fullmektig.
oversendes før budgivning.
For mer informasjon om budgivningsprosessen, se
Et bud bør inneholde eiendommens adresse (eventuelt «Forbrukerinformasjon om budgivning», som er vedlagt
gnr/ bnr), kjøpesum, budgivers kontaktinformasjon, salgsoppgaven, eller ta kontakt med megler.
finansieringsplan, akseptfrist, overtakelsesdato og
eventuelle forbehold som for eksempel usikker
Betalingsbetingelser
finansiering, salg av nåværende bolig ol. Normalt vil ikke
et bud med forbehold bli akseptert før

---

[d085_d085 | Side [1]]
ringer og sitater er innhentet på web og gir uttrykk for
hvordan naboene vurderer nabolaget. FINN.no AS kan ikke holdes ansvarlig for feil/mangler i profilen. Copyright © Finn.no AS 2026
52

## Side 53

Primære transportmidler Varer/Tjenester
Metro Senter 6 min
1. Egen bil
Apotek 1 Fjellhamar 17 min
2. Tog/t-bane
Aldersfordeling barn (0-18 år)
Støynivået
Lite støynivå 83/100
30% i barnehagealder
41% 6-12 år
Turmulighetene
12% 13-15 år
Nærhet til skog og mark 82/100 17% 16-18 år
Trafikk
Lite trafikk

---

[d085_d085 | Side [1]]


74

## Side 75

22-4-10
FJELLHAMARSKOGEN
REGULERINGSBESTEMMELSER TIL REGULERINGSPLAN FOR
FJELLHAMARSKOGEN
Disse bestemmelser gjelder for det område som på plankartet er vist med reguleringsgrense.
Området reguleres til følgende formål i h.h.t. bygningslovens. § 25:
— Boligområde, småhus.
— Boligområde, blokkbebyggelse.
— Forretningsområde.
— Offentlig formål, trygdesenter.
— Almennyttig formål, velhus.
— Fellesareal,

---

[d085_d085 | Side [1]]
rmål, trygdesenter.
— Almennyttig formål, velhus.
— Fellesareal, parkering.
— Fellesareal, lek.
— Friområde, park og turvei.
— Trafikkområde.
Boligområde, småhus
§ 1
Område som på plankartet er merket ”Boligområde” (uten undertittel) skal benyttes til
småhus. I bebyggelsen kan det foruten til boliger innredes til sosiale formål som etter
bygningsrådets skjønn ikke er til sjenanse for omkringliggende bebyggelse m.h.t. støy,
trafikk, parkering m.m.
§ 2
(utgår –kfr kom.plan)
Utnyttelsen skal ikke overstige

---

[d085_d085 | Side [1]]
orhånd anmeldes og godkjennes
av bygningsrådet.
c. Bygningsrådet kan tillate at det oppføres bygninger og konstruksjoner innenfor
friområdet som har direkte tilknytning til bruken av dette til rekreasjonsformål.
Trafikkområder
3
77

## Side 78

§ 12
a. Frisiktsoner, som vist i planen, skal ryddes og planeres slik at det blir fri sikt i en
høyde av 0,5 m over tilstøtende veiers planum.
b. Private avkjørsler til fylkesveiene i planområdet tillates ikke utenom de steder som er
avmerket i plankartet.

---

[d085_d085 | Side [1]]
nes som for boliger i § 2. Det forutsettes at det på tomta eller i rimelig
nærhet av denne, opparbeides tilstrekkelig antall parkeringsplasser (Jfr. Lørenskog kommunes
vedtekter til § 69.3).
Offentlig formål (trygdesenter)
§ 7
Området for trygdesenter omfatter gnr. 107, bnr. 555, 556, 596 og 677, og anses ferdig utbygd
med trygdesenter og trygdeboliger slik som vist på plankartet.
Allmennyttig formål
§ 8
Området avsatt til almennyttig formål (Vangsveien 1) gnr. 107, bnr. 728 m.m. skal nyttes

---

[d085_d085 | Side [1]]
e kan opparbeides på
egen eiendom.
1
75

## Side 76

Boligområde (blokker)
§ 4
Området omfatter gnr. 107, bnr. 19, 653 og 993 og skal benyttes til blokkbebyggelse i inntil 4
etasjer slik det fremgår av plankartet. Området anses ferdig utbygd, men bygningsrådet kan
dog godkjenne oppføring av mindre bygninger for sosiale funksjoner innen området.
§ 5
Parkering/garasjer for blokkbebyggelsen er avsatt som fellesarealer på gnr. 107, bnr. 979 og
gnr. 107, bnr. 1334, 1335. Jfr. § 9a. Garasjeanlegg kan oppføres på

---

[d085_d085 | Side [1]]
e of signing.
→ For more information about document formats, see https://doc.ingroupe.com/developer
75006220
:ecnerefer
tnemucoD
51

## Side 52

Nabolagsprofil
Myrstubben 17 - Nabolaget Fjellet - vurdert av 47 lokalkjente
Nabolaget spesielt anbefalt for
Opplevd trygghet
Familier med barn Veldig trygt 87/100
Etablerere
Kvalitet på skolene
Husdyreiere
Bra 68/100
Naboskapet
Offentlig transport Godt vennskap 67/100
Hanaborg stasjon 6 min
Linje L1 0.5 km
Aldersfordeling
Hanaborg 8 min
Linje 316 0.7 km
Lørenskog

---

[d085_d085 | Side [1]]
nyttig formål (Vangsveien 1) gnr. 107, bnr. 728 m.m. skal nyttes til
velhus/grendehus for Fjellhamarskogen Vel. Området skal bebygges i inntil 2 etasjer med
utnyttelsesgrad maksimalt 0,15 beregnet som for boliger under § 2.
Fellesarealer
2
76

## Side 77

§ 9
a. Felles parkeringsplass på gnr. 107, bnr. 1334 og 1335 samt på gnr. 107, bnr. 979 skal
dekke parkeringsbehovet for blokkbebyggelsen (Fjellet borettslag) på gnr. 107, bnr. 19
og 993.
b. Felles avkjørsel mellom Asbjørn Klosters vei og Elveveien skal

---

[d085_d085 | Side [1]]
an godkjenne
annen ordning hvor rådet finner dette forsvarlig.
§ 10
Fellesarealer (lek) avsatt på gnr. 107, bnr. 19 skal tjene blokkbebyggelsens behov.
Friområder
§ 11
a. Arealer regulert til friområde (turvei), forutsettes opparbeidet til gangveistandard
under hensyntagen til moderate terrenginngrep.
b. Friområder forøvrig skal bearbeides parkmessig i det eksisterende vegetasjon søkes
bevart. Evt. oppfyllings- og planeringsarbeider må på forhånd anmeldes og godkjennes
av bygningsrådet.
c. Bygningsrådet

---

[d085_d085 | Side [1]]
Nærhet til skog og mark 82/100 17% 16-18 år
Trafikk
Lite trafikk 79/100
Familiesammensetning
Sport
Par m. barn
Fjellhamarskogen balløkke 3 min
Ballspill 0.3 km
Par u. barn
Luhr skole 11 min
Aktivitetshall, fotball 0.9 km
EVO SNØ 16 min Enslig m. barn
Sportytude Lørenskog Snø 17 min
Enslig u. barn
Boligmasse
Flerfamilier
52% enebolig
4% rekkehus 0% 47%
25% blokk
20% annet Fjellet
Oslo og omegn
Norge
Sivilstand
Norge
«Hyggelige naboer. Sentralt til alt.
Grøntområder.» Gift 32% 33%
Sitat fra en lokalkjent

---

[d085_d085 | Side [1]]
det tillates ikke utenom de steder som er
avmerket i plankartet. Avkjørsler skal utformes med stigningsforhold og frisikt etter
fylkesvegsjefens bestemmelser.
c. Nødvendige synlige anlegg i forbindelse med kommunalteknisk drift eller
elektrisitetsforsyning kan tillates oppført innenfor regulert trafikkområde såfremt det
ikke blir til ulempe for den offentlige ferdsel. Ved fylkesvei må vegsjefens tillatelse
foreligge.
d. Gjerder mot vei, regulert til offentlig bruk, tillates ikke oppført nærmere enn 4,5 m

---

[d085_d085 | Side [1]]
alt til alt.
Grøntområder.» Gift 32% 33%
Sitat fra en lokalkjent Ikke gift 55% 54%
Separert 10% 9%
Enke/Enkemann 3% 4%
Innholdet i nabolagsprofilen er hentet fra ulike datakilder, og feil eller mangler kan forekomme. Vurderinger og sitater er innhentet på web og gir uttrykk for
hvordan naboene vurderer nabolaget. FINN.no AS kan ikke holdes ansvarlig for feil/mangler i profilen. Copyright © Finn.no AS 2026
53

## Side 54

Innholdet i nabolagsprofilen er hentet fra ulike datakilder, og feil eller mangler kan

---

[d085_d085 | Side [1]]
lert til offentlig bruk, tillates ikke oppført nærmere enn 4,5 m fra
regulert senterlinje.
Generelt
§ 13
Unntak fra disse bestemmelser kan, når særlige grunner tilsier det, tillates av bygningsrådet
innenfor rammen av bygningsloven og bygningsvedtektene for Lørenskog kommune.
Egengodkjent av Lørenskog kommunestyre den 25.02.1987
Sak 32/87
Kommuneplanbestemmelser vedtatt den 15.03.2023
erstatter § 2 i disse reguleringsbestemmelsene.
4
78

## Side 79

Kontorforretning, seksjonering
sak:25/6783. Eiendom

---

[d085_d085 | Side [1]]
g m.m.
§ 2
(utgår –kfr kom.plan)
Utnyttelsen skal ikke overstige 0,20 for 1 etasjers bolig og 0,15 for 2 etasjers bolig i det
utnyttelsesgraden defineres som forholdet mellom bebygd tomteareal og nettotomteareal.
Garasjer inntil 50 m² tas ikke med i beregningsgrunnlaget.
§ 3
Bygningsrådet kan tillate at garasjer oppføres foran byggelinje mot kommunale og private
veier. Enhver garasje skal plasseres slik at snuplass i tilslutning til denne kan opparbeides på
egen eiendom.
1
75

## Side 76

Boligområde

---

[d085_d085 | Side [1]]
et 1 597 662
Oslo og omegn 999 185 490 708
Norge 5 425 412 2 654 586
Barnehager
Framtia barnehage (1-5 år) 10 min
101 barn 0.8 km
Vangen barnehage (0-5 år) 10 min
53 barn 0.9 km
Margaretalia barnehage (1-5 år) 11 min
46 barn 0.9 km
Dagligvare
Rema 1000 Lørenskog Stasjonsby 12 min
Coop Mega Fjellhamar 17 min
Post i butikk, PostNord 1.5 km
Innholdet i nabolagsprofilen er hentet fra ulike datakilder, og feil eller mangler kan forekomme. Vurderinger og sitater er innhentet på web og gir uttrykk for
hvordan

---

[d085_d085 | Side [1]]
flere
rom.

## Side 30

Boligen har to flislagte bad med
moderne innredning og varmekabler.
Balansert ventilasjon sørger for et sunt
og godt inneklima i hele boligen.

## Side 31

I tredje etasje finner du en ekstra stue,
ideell for hjemmekontor eller lekerom.
Rommene er av god størrelse og enkle
å møblere.

## Side 32

Ca. 15 minutters gange til nye
Fjellhamar barneskole (1‑7 trinn)
Kort vei til flotte rekreasjonsområder ‑
her fra parken ved Fjellhamarelva.

## Side 33

Like ved barneskolen finner du

---

[d085_d085 | Side [1]]
 bussforbindelser i området med enkel adkomst til
både Lørenskog sentrum og Oslo. For bilpendlere er det Det foreligger midlertidig brukstillatelse for eiendommen,
rask og enkel tilkobling til E6 og RV159, som gir smidig datert 06.02.2026. Midlertidig brukstillatelse bekrefter at
adkomst i flere retninger. boligen lovlig kan benyttes, men at det fortsatt gjenstår
arbeid før ferdigattest kan utstedes. For å kunne søke om
Med kort vei til Østmarka og Losby er det gode ferdigattest må følgende tiltak

---

[d085_d085 | Side [1]]
het eller mellom ektefeller eller slektninger i rett oppstigende eller nedstigende linje, søsken, eller
mellom personer som bor eller har bodd på boligeiendommen. Gyldig forsikring forutsetter at det for helårs- og fritidsbolig
foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere bolighandel). Forsikringen er ugyldig dersom
den tegnes i strid med forsikringsvilkårene. Jeg er innforstått med at eiendomsmegleren ikke har fullmakt til å gjøre unntak fra
ovennevnte

---

[d085_d085 | Side [1]]
spremien og forsikringsvilkårene på ny
signeringsdato som legges til grunn.
Det kan ikke tegnes boligselgerforsikring ved følgende salg:
mellom ektefeller eller slektninger i rett oppstigende eller nedstigenede linje, søsken, eller
mellom personer som bor eller har bodd på boligeiendommen og/eller
når salget skjer som ledd i sikredes næringsvirksomhet/er en næringseiendom
etter at boligeiendommen er lagt ut for salg.
ved salg av helårs- og fritidsbolig er det krav til at det foreligger tilstandsrapport i

---

[d085_d085 | Side [1]]
jyre til selger i
forbindelse med kjøp av boligselgerforsikring. Forsikringen trer i kraft på det tidspunkt det foreligger en budaksept mellom partene,
begrenset til tolv måneder før overtagelse. Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter,
begrenset til siste 12 måneder før overtakelse. Jeg bekrefter med dette at eiendommen ikke er en næringseiendom, at den ikke
selges som ledd i næringsvirksomhet eller mellom ektefeller eller slektninger i rett oppstigende

---

[d085_d085 | Side [1]]
også klar over at premietilbudet først kan påberopes når boligen er solgt
(budaksept). Premietilbudet som er gitt av megler er bindende for forsikringsgiver i 6 – seks – måneder fra oppdragsinngåelse med megler.
Etter dette vil premien og forsikringsvilkårene kunne justeres. Når premietilbudet ikke lenger er bindende for forsikringsselskapet må
egenerklæringsskjemaet signeres på nytt og eventuelle endringer påføres. Det vil da være forsikringspremien og forsikringsvilkårene på ny
signeringsdato som legges

---

[d085_d085 | Side [1]]
orsikringsselskapet kunne søke hel eller delvis regress for sine utbetalinger eller redusere sitt ansvar helt
eller delvis, jfr. vilkår for boligselgerforsikring punkt 7.1 og forsikringsavtaleloven kapittel 4.
Jeg er orientert om mitt mulige ansvar som selger etter avhendingsloven, eventuelt etter kjøpsloven (aksjeboliger), og om forsikringsgiver sitt
boligselgerforsikringstilbud.
Jeg er klar over at avtale om forsikring er bindende. Jeg er også klar over at premietilbudet først kan påberopes når boligen

---

[d085_d085 | Side [1]]
domsmegleren ikke har fullmakt til å gjøre unntak fra
ovennevnte begrensninger. Jeg er oppmerksom på at 8% av total forsikringspremie er honorar til Söderberg & Partners.
Jeg ønsker ikke boligselgerforsikring, men megler har tilbudt meg å kjøpe slik forsikring.
Jeg kan ikke kjøpe boligselgerforsikring ihht vilkår.
Initialer selger: BA 2
75006220
:ecnerefer
tnemucoD
50

## Side 51

E-Signing validated secured by
NAME OF SIGNER IDENTIFIER TIME ELECTRONIC ID
Bujamin Ali 5d117e90974d64668d8a4 05.03.2026 Signer

---

[d085_d085 | Side [1]]
gerforsikring.
Boligkjøperforsikring: Kjøper har anledning til å tegne
Radonmåling
boligkjøperforsikring. Vedlagt i salgsoppgaven følger
Selger har ikke utført radonmåling. Det er ikke krav om informasjon om Boligkjøperforsikring fra Söderberg &
dette med mindre boligen er helt eller delvis utleid. Partners. Boligkjøperforsikring er en rettshjelpsforsikring
som gir trygghet og profesjonell juridisk hjelp dersom det
oppdages uventede feil eller mangler ved boligen de
Diverse
neste fem årene. Les mer om

---

[d085_d085 | Side [1]]
urdering og selgers frihet den er"‑forbehold. Selgers ansvar for eventuelle mangler
Siden reglene varierer etter hvem som kjøper, kan bud fra begrenses til det som er eksplisitt avtalt.
profesjonelle aktører vurderes annerledes enn bud fra
privatpersoner. Ved salg til ikke‑forbruker, kan I tillegg fravikes avhendingslovens § 3‑3 andre ledd, og
eiendommen selges med begrenset ansvar fra selgers spørsmål om arealavvik skal da vurderes etter § 3‑8.
side ("som den er"). Dette gir selgeren lavere risiko og

---

[d085_d085 | Side [1]]
t. forbehold (eks. finansiering, salg av egen bolig etc.):
NAVN: NAVN:
PERSONNR: PERSONNR:
ADRESSE: ADRESSE:
POSTNR: POSTSTED: POSTNR: POSTSTED:
MOB TLF: MOB TLF:
E-POST: E-POST:
DATO: STED: DATO: STED:
SIGNATUR: SIGNATUR:
Jeg ønsker boligkjøperforsikring Hvis mitt bud blir akseptert, ønsker jeg at megler forbereder en
kjøpekontrakt med boligkjøperforsikring. Avtale om forsikring inngås ikke
før jeg undertegner kjøpekontrakten.
Minnene fra da du eide huset lever videre. Derfor har vi i Emera Trykt i Norge,

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "Ingen tilstandsrapport er innhentet. Selger har ikke skaffet en tilstandsrapport som oppfyller kravene i forskriften til avhendingsloven. Dette medfører at det er gjort færre undersøkelser av bygningssakkyndig, og kjøper får mindre informasjon om eiendommens tilstand. Risikoen for skjulte feil og mangler er dermed høyere.",
      "evidence": [
        "Selger har ikke skaffet en tilstandsrapport som oppfyller kravene i forskriften til avhendingsloven.",
        "Det er ikke et lovkrav å fremskaffe en slik tilstandsrapport, men mangelen på en slik rapport medfører at det vanligvis er gjort færre undersøkelser av bygningssakkyndig, og at kjøper får mindre informasjon om eiendommens tilstand enn hva som ville vært tilfelle dersom en tilstandsrapport var innhentet.",
        "Gyldig forsikring forutsetter at det for helårs- og fritidsbolig foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere bolighandel)."
      ],
      "source_documents": [
        "d085_d085"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.98
    },
    {
      "risk_id": "R2",
      "description": "Midlertidig brukstillatelse – ferdigattest ikke utstedt. Eiendommen har kun midlertidig brukstillatelse datert 06.02.2026. Det gjenstår arbeid før ferdigattest kan utstedes. Dette innebærer en risiko for at gjenstående arbeider ikke blir fullført, eller at det oppstår tvister om hva som skal ferdigstilles.",
      "evidence": [
        "Det foreligger midlertidig brukstillatelse for eiendommen, datert 06.02.2026.",
        "Midlertidig brukstillatelse bekrefter at boligen lovlig kan benyttes, men at det fortsatt gjenstår arbeid før ferdigattest kan utstedes.",
        "Ferdigattest/brukstillatelse datert: 06.02.2026.",
        "For å kunne søke om ferdigattest må følgende tiltak [gjenstå] (tekst avskåret i dokumentet)"
      ],
      "source_documents": [
        "d085_d085"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R3",
      "description": "Selger har ikke bebodd eiendommen og har begrenset kunnskap om den. Selger er et utbyggingsselskap (Bm Prosjekt Og Utvikling AS) som ikke har bodd i boligen. Det kan derfor være skader og andre forhold ved eiendommen som ikke er spesifikt opplyst om i egenerklæringen.",
      "evidence": [
        "Selger har ikke bebodd eiendommen og har derfor ikke spesifikk kunnskap om den.",
        "Det kan derfor være skader og andre forhold ved eiendommen som ikke er spesifikt opplyst.",
        "Kjøper oppfordres derfor til å foreta en særlig grundig undersøkelse av eiendommen, gjerne med bistand av teknisk sakkyndig.",
        "Selger: Bm Prosjekt Og Utvikling AS"
      ],
      "source_documents": [
        "d085_d085"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R4",
      "description": "Selger har ikke tegnet boligselgerforsikring. Dersom det avdekkes skjulte feil eller mangler etter overtakelse, kan kjøper ha vanskeligere for å få dekket krav mot selger, ettersom selger ikke har forsikring som dekker slike krav. Merk: Selger kan heller ikke tegne boligselgerforsikring ettersom det ikke foreligger tilstandsrapport, og salget skjer som ledd i næringsvirksomhet.",
      "evidence": [
        "Boligselgerforsikring: Selger har ikke tegnet boligselgerforsikring.",
        "Jeg ønsker ikke boligselgerforsikring, men megler har tilbudt meg å kjøpe slik forsikring. Jeg kan ikke kjøpe boligselgerforsikring ihht vilkår.",
        "Det kan ikke tegnes boligselgerforsikring når salget skjer som ledd i sikredes næringsvirksomhet.",
        "Gyldig forsikring forutsetter at det for helårs- og fritidsbolig foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova."
      ],
      "source_documents": [
        "d085_d085"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R5",
      "description": "Ingen radonmåling er utført. Selger har ikke utført radonmåling av boligen. Radon er en usynlig og luktfri gass som kan utgjøre en helserisiko ved forhøyede konsentrasjoner innendørs.",
      "evidence": [
        "Selger har ikke utført radonmåling.",
        "Det er ikke krav om dette med mindre boligen er helt eller delvis utleid."
      ],
      "source_documents": [
        "d085_d085"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R6",
      "description": "Legalpant – prioritet foran tinglyste lån. Sameiet har legalpant på inntil 2G i den enkelte eierseksjon som sikkerhet for krav knyttet til sameieforholdet. Kommunen har legalpant med enda høyere prioritet. Dette pantet vises ikke i grunnboksutskriften og kan komme som en overraskelse for kjøper.",
      "evidence": [
        "Legalpant er pant som ikke vises i grunnboksutskriften, og har prioritet foran tinglyste lån, for eksempel banklån på seksjonen.",
        "Legalpant til kommunen har høyere prioritet enn legalpant til sameiet.",
        "Kommunen har legalpant som sikkerhet for betaling av kommunale avgifter og eventuell eiendomsskatt.",
        "De øvrige seksjonseierne i sameiet har legalpant på inntil 2G som sikkerhet for krav knyttet til sameieforholdet.",
        "Ved manglende betaling av fellesutgifter har sameiet legal panterett i den enkelte eierseksjon, begrenset til inntil 2 ganger folketrygdens grunnbeløp."
      ],
      "source_documents": [
        "d085_d085"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.93
    },
    {
      "risk_id": "R7",
      "description": "Tinglyste heftelser og bestemmelser på eiendommen. Det er tinglyst en rekke heftelser og bestemmelser på eiendommen, blant annet bestemmelser om vann/kloakkledninger, felles vedlikehold, solidarisk ansvar for fellesledninger, garasje/parkering, veg og bestemmelse om å rive/fjerne bygg når bygningsrådet forlanger det. Disse kan medføre forpliktelser og begrensninger for ny eier.",
      "evidence": [
        "08.06.1964 - Dokumentnr: 1790 - Best. om vann/kloakkledn.",
        "01.10.1964 - Dokumentnr: 3184 - Best. om vann/kloakkledn. Bestemmelse om felles vedlikehold",
        "01.12.1966 - Dokumentnr: 4275 - Bestemmelse om veg",
        "24.06.1970 - Dokumentnr: 3106 - Best om garasje/parkering",
        "Bestemmelse om solidarisk ansvar for fellesledninger",
        "Bestemmelse om frostsikkert fundament på garasje",
        "09.06.1971 - Dokumentnr: 2811 - Bestemmelse om kloakkledn",
        "28.04.1981 - Dokumentnr: 2720 - Erklæring/avtale"
      ],
      "source_documents": [
        "d085_d085"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R8",
      "description": "Bestemmelse om å rive/fjerne bygg når bygningsrådet forlanger det. Det er tinglyst en bestemmelse om at bygningsrådet kan kreve at bygg på eiendommen rives eller fjernes. Dette er en alvorlig heftelse som kan påvirke eiendommens verdi og bruken av den.",
      "evidence": [
        "3222/107/111/5: Bestemmelse om å rive/fjerne bygg når bygningsrådet forlanger det"
      ],
      "source_documents": [
        "d085_d085"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R9",
      "description": "Ukjente kommunale avgifter. Eiendommen er nyoppført og det foreligger ikke tall for kommunale avgifter. Kjøper vet dermed ikke nøyaktig hva de løpende kommunale kostnadene vil bli.",
      "evidence": [
        "Informasjon: Eiendommen er nyoppført og det foreligger derfor ikke tall for kommunale avgifter.",
        "For eneboliger ligger kommunale avgifter vanligvis mellom 15 000,- til 25 000,- pr år, avhengig av størrelse på husholdningen.",
        "Det er estimert eiendomsskatt på kr. 6 410,- pr. år med en markedsverdi på 9 300 000."
      ],
      "source_documents": [
        "d085_d085"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R10",
      "description": "Ingen formuesverdi foreligger. Boligen er nyoppført i 2026 og det foreligger ikke formuesverdi. Dette gjør det vanskelig for kjøper å forutse fremtidig skattegrunnlag og formuesskatt.",
      "evidence": [
        "Info om formuesverdi: Boligen er nyoppført i 2026, det foreligger derfor ikke formuesverdi.",
        "Skatteetaten beregner en boligverdi (beregnet markedsverdi for bolig) basert på SSBs statistiske opplysninger om omsatte boliger."
      ],
      "source_documents": [
        "d085_d085"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.72
    },
    {
      "risk_id": "R11",
      "description": "Stikkledninger er private og vedlikeholdsansvaret påhviler sameiet. Stikkledningene fra eiendommen og ut til det kommunale nettet er private. Vedlikeholdsansvaret for disse påhviler sameiet, noe som kan medføre uforutsette kostnader ved fremtidige reparasjoner eller utskiftninger.",
      "evidence": [
        "Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler sameiet."
      ],
      "source_documents": [
        "d085_d085"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R12",
      "description": "Energimerke B med rød energifarge. Boligen har energikarakter B, men energifarge rød. Rød energifarge indikerer at boligen i stor grad benytter elektrisitet som energikilde, noe som kan medføre høye strømkostnader.",
      "evidence": [
        "Energikarakter: B",
        "Energifarge: Rød",
        "Total energibruk 12998 kWh",
        "Elektrisitet 11332 kWh",
        "Elektrisk oppvarming, vedovn og balansert ventilasjon."
      ],
      "source_documents": [
        "d085_d085"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R13",
      "description": "Salget reguleres av avhendingsloven, ikke bustadoppføringslova. Boligen er nylig ferdigstilt, men har ikke vært bebodd, og salget skjer etter bestemmelsene i avhendingsloven. Dette kan bety at kjøper ikke har de samme rettighetene som ved kjøp av bolig under oppføring etter bustadoppføringslova, herunder rett til garanti etter bustadoppføringslova § 12.",
      "evidence": [
        "Denne boligen er nylig ferdigstilt, men har ikke vært bebodd. Salget skjer etter bestemmelsene i avhendingsloven.",
        "Dersom kjøperen er en privatperson og kjøpet [skjer som forbruker, gjelder særskilte regler] (tekst avskåret)"
      ],
      "source_documents": [
        "d085_d085"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R14",
      "description": "Begrensning på eierskap – maks to seksjoner per person. Ingen kan eie mer enn to boligseksjoner i sameiet, i henhold til eierseksjonsloven § 23. Seksjoner eid av nærstående eller gjennom firma regnes også med. Dette kan begrense investorers muligheter.",
      "evidence": [
        "Det informeres om at ingen kan eie mer enn to boligseksjoner i sameiet, i henhold til eierseksjonsloven § 23.",
        "Seksjoner som eies av nærstående eller gjennom et firma regnes også med."
      ],
      "source_documents": [
        "d085_d085"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.75
    },
    {
      "risk_id": "R15",
      "description": "Ukjent strømforbruk. Boligen har ikke vært bebodd, og selger har derfor ikke mulighet til å opplyse om faktisk strømforbruk. Kjøper kan ikke basere seg på historiske forbrukstall ved budsjettering av løpende kostnader.",
      "evidence": [
        "Boligen er ikke bebodd, selger har derfor ikke mulighet til å opplyse om strømforbruk."
      ],
      "source_documents": [
        "d085_d085"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R16_NY",
      "description": "Salg som ledd i næringsvirksomhet – kjøper utenfor forbrukerdefinisjon. Selger er et aksjeselskap (Bm Prosjekt Og Utvikling AS) og salget skjer som ledd i næringsvirksomhet. Dersom kjøper er en juridisk person eller profesjonell aktør, kan eiendommen selges med begrenset ansvar ('som den er'), og avhendingslovens forbrukervern fravikes. Dette gir kjøper svakere rettigheter.",
      "evidence": [
        "Kjøp utenfor forbrukerdefinisjonen: Dersom kjøperen er en juridisk person [gjelder andre regler]",
        "Ved salg til ikke-forbruker, kan eiendommen selges med begrenset ansvar fra selgers side ('som den er').",
        "Selger: Bm Prosjekt Og Utvikling AS",
        "Jeg kan ikke kjøpe boligselgerforsikring ihht vilkår. (Initialer selger: BA 2)"
      ],
      "source_documents": [
        "d085_d085"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R17_NY",
      "description": "Solidarisk ansvar for fellesledninger. Det er tinglyst bestemmelse om solidarisk ansvar for fellesledninger. Dette innebærer at seksjonseier kan bli holdt ansvarlig for kostnader knyttet til fellesledninger som strekker seg over flere eiendommer, selv om skaden ikke skyldes egen seksjon.",
      "evidence": [
        "Bestemmelse om solidarisk ansvar for fellesledninger",
        "Overført fra: Knr:3222 Gnr:107 Bnr:111 – Gjelder denne registerenheten med flere"
      ],
      "source_documents": [
        "d085_d085"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    }
  ],
  "re_retrieval_queries": [
    "Hva gjenstår før ferdigattest kan utstedes – hvilke konkrete tiltak er listet opp?",
    "Garanti etter bustadoppføringslova § 12 – er det nevnt noe om garantiforpliktelser fra utbygger?",
    "Felleskostnader og budsjett for sameiet – hva er månedlige fellesutgifter?",
    "Hva er sameiebrøken og hvilke rettigheter/plikter følger av denne?",
    "Er det opplyst om pågående tvister, klager eller rettslige prosesser knyttet til eiendommen eller sameiet?",
    "Teknisk tilstand – er det opplyst om konkrete feil, avvik eller mangler ved bygget?",
    "Hva er tomtestørrelse og seksjonert tomt – er det risiko knyttet til tomtegrenser?"
  ],
  "reasoning": "\nGjennomgangen av de 15 identifiserte risikoene mot dokumentevidensen viser følgende:\n\n**Bekreftede risikoer med høy evidens (R1–R4, R6–R7, R11, R13):**\n- R1 (ingen tilstandsrapport): Meget godt dokumentert. Confidence opprettholdes på 0.98. Tilleggspoeng: mangel på tilstandsrapport gjør også boligselgerforsikring ugyldig, noe som forsterker risikoen ytterligere.\n- R2 (midlertidig brukstillatelse): Godt dokumentert. Confidence opprettholdes på 0.97. Dokumentet nevner at konkrete gjenstående tiltak er listet, men teksten er avskåret – dette bør undersøkes nærmere.\n- R3 (selger ikke bebodd): Godt dokumentert. Confidence opprettholdes på 0.95.\n- R4 (ingen boligselgerforsikring): Evidensen er sterkere enn opprinnelig vurdert. Selger har eksplisitt krysset av for at forsikring ikke kan tegnes ihht. vilkår (næringsvirksomhet + manglende tilstandsrapport). Confidence justeres opp til 0.95.\n- R6 (legalpant): Meget godt dokumentert med to separate kildepassasjer. Confidence justeres opp til 0.93.\n- R7 (tinglyste heftelser): Evidensen er bredere enn opprinnelig – flere heftelser er identifisert i dokumentet. Confidence justeres opp til 0.90.\n- R11 (private stikkledninger): Godt dokumentert. Confidence opprettholdes på 0.85.\n- R13 (avhendingsloven, ikke bustadoppføringslova): Godt dokumentert. Confidence justeres opp til 0.88.\n\n**Risikoer med moderat evidens (R5, R8, R9, R12, R14, R15):**\n- R5 (ingen radonmåling): Dokumentert, men risikoen er noe begrenset da det ikke er lovkrav for ubebodd nybygg. Confidence justeres ned til 0.88 (fra 0.90) – fortsatt relevant.\n- R8 (rive/fjerne bygg): Dokumentert, men kun én setning. Confidence justeres ned til 0.85 (fra 0.91) – bør undersøkes nærmere hva denne bestemmelsen faktisk innebærer i praksis.\n- R9 (ukjente kommunale avgifter): Dokumentert. Eiendomsskatt er estimert (kr 6 410), men kommunale avgifter er ukjente. Confidence justeres ned til 0.80 (fra 0.82) da dette er en normal situasjon for nybygg.\n- R12 (energimerke B, rød farge): Godt dokumentert med energidata. Confidence opprettholdes på 0.80.\n- R14 (maks to seksjoner): Dokumentert. Confidence opprettholdes på 0.75 – dette er mer en begrensning enn en risiko for ordinær boligkjøper.\n- R15 (ukjent strømforbruk): Dokumentert. Confidence opprettholdes på 0.80, men risikoen er delvis overlappende med R12.\n\n**Justert risiko (R10):**\n- R10 (ingen formuesverdi): Dokumentert, men dette er en normal og forventet situasjon for nybygg. Skatteetaten vil beregne formuesverdi basert på SSB-statistikk. Confidence justeres ned til 0.72 (fra 0.78) – lav praktisk risiko.\n\n**Nye risikoer identifisert:**\n- R16_NY (salg som ledd i næringsvirksomhet): Dokumentet viser tydelig at selger er et AS og at salget skjer som næringsvirksomhet. Dette påvirker kjøpers rettigheter vesentlig. Confidence: 0.82.\n- R17_NY (solidarisk ansvar for fellesledninger): Tinglyst heftelse som ikke var tilstrekkelig fremhevet som selvstendig risiko. Confidence: 0.80.\n\n**Manglende informasjon som bør undersøkes:**\n1. Hvilke konkrete tiltak gjenstår før ferdigattest kan utstedes (tekst avskåret i dokumentet).\n2. Om det foreligger garanti fra utbygger (bustadoppføringslova § 12 eller tilsvarende).\n3. Månedlige felleskostnader for sameiet.\n4. Om det er pågående tvister eller klager.\n5. Teknisk tilstand – konkrete avvik eller mangler.\n6. Tomtestørrelse og seksjonert tomt.\n"
}

## Raw Response
```json
{
  "id": "msg_011oKRzsrV5gH6enDkmocTgb",
  "container": null,
  "content": [
    {
      "id": "toolu_01Dg75F32amFsELGj6XTp3ya",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "Ingen tilstandsrapport er innhentet. Selger har ikke skaffet en tilstandsrapport som oppfyller kravene i forskriften til avhendingsloven. Dette medfører at det er gjort færre undersøkelser av bygningssakkyndig, og kjøper får mindre informasjon om eiendommens tilstand. Risikoen for skjulte feil og mangler er dermed høyere.",
            "evidence": [
              "Selger har ikke skaffet en tilstandsrapport som oppfyller kravene i forskriften til avhendingsloven.",
              "Det er ikke et lovkrav å fremskaffe en slik tilstandsrapport, men mangelen på en slik rapport medfører at det vanligvis er gjort færre undersøkelser av bygningssakkyndig, og at kjøper får mindre informasjon om eiendommens tilstand enn hva som ville vært tilfelle dersom en tilstandsrapport var innhentet.",
              "Gyldig forsikring forutsetter at det for helårs- og fritidsbolig foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere bolighandel)."
            ],
            "source_documents": [
              "d085_d085"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.98
          },
          {
            "risk_id": "R2",
            "description": "Midlertidig brukstillatelse – ferdigattest ikke utstedt. Eiendommen har kun midlertidig brukstillatelse datert 06.02.2026. Det gjenstår arbeid før ferdigattest kan utstedes. Dette innebærer en risiko for at gjenstående arbeider ikke blir fullført, eller at det oppstår tvister om hva som skal ferdigstilles.",
            "evidence": [
              "Det foreligger midlertidig brukstillatelse for eiendommen, datert 06.02.2026.",
              "Midlertidig brukstillatelse bekrefter at boligen lovlig kan benyttes, men at det fortsatt gjenstår arbeid før ferdigattest kan utstedes.",
              "Ferdigattest/brukstillatelse datert: 06.02.2026.",
              "For å kunne søke om ferdigattest må følgende tiltak [gjenstå] (tekst avskåret i dokumentet)"
            ],
            "source_documents": [
              "d085_d085"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R3",
            "description": "Selger har ikke bebodd eiendommen og har begrenset kunnskap om den. Selger er et utbyggingsselskap (Bm Prosjekt Og Utvikling AS) som ikke har bodd i boligen. Det kan derfor være skader og andre forhold ved eiendommen som ikke er spesifikt opplyst om i egenerklæringen.",
            "evidence": [
              "Selger har ikke bebodd eiendommen og har derfor ikke spesifikk kunnskap om den.",
              "Det kan derfor være skader og andre forhold ved eiendommen som ikke er spesifikt opplyst.",
              "Kjøper oppfordres derfor til å foreta en særlig grundig undersøkelse av eiendommen, gjerne med bistand av teknisk sakkyndig.",
              "Selger: Bm Prosjekt Og Utvikling AS"
            ],
            "source_documents": [
              "d085_d085"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R4",
            "description": "Selger har ikke tegnet boligselgerforsikring. Dersom det avdekkes skjulte feil eller mangler etter overtakelse, kan kjøper ha vanskeligere for å få dekket krav mot selger, ettersom selger ikke har forsikring som dekker slike krav. Merk: Selger kan heller ikke tegne boligselgerforsikring ettersom det ikke foreligger tilstandsrapport, og salget skjer som ledd i næringsvirksomhet.",
            "evidence": [
              "Boligselgerforsikring: Selger har ikke tegnet boligselgerforsikring.",
              "Jeg ønsker ikke boligselgerforsikring, men megler har tilbudt meg å kjøpe slik forsikring. Jeg kan ikke kjøpe boligselgerforsikring ihht vilkår.",
              "Det kan ikke tegnes boligselgerforsikring når salget skjer som ledd i sikredes næringsvirksomhet.",
              "Gyldig forsikring forutsetter at det for helårs- og fritidsbolig foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova."
            ],
            "source_documents": [
              "d085_d085"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R5",
            "description": "Ingen radonmåling er utført. Selger har ikke utført radonmåling av boligen. Radon er en usynlig og luktfri gass som kan utgjøre en helserisiko ved forhøyede konsentrasjoner innendørs.",
            "evidence": [
              "Selger har ikke utført radonmåling.",
              "Det er ikke krav om dette med mindre boligen er helt eller delvis utleid."
            ],
            "source_documents": [
              "d085_d085"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R6",
            "description": "Legalpant – prioritet foran tinglyste lån. Sameiet har legalpant på inntil 2G i den enkelte eierseksjon som sikkerhet for krav knyttet til sameieforholdet. Kommunen har legalpant med enda høyere prioritet. Dette pantet vises ikke i grunnboksutskriften og kan komme som en overraskelse for kjøper.",
            "evidence": [
              "Legalpant er pant som ikke vises i grunnboksutskriften, og har prioritet foran tinglyste lån, for eksempel banklån på seksjonen.",
              "Legalpant til kommunen har høyere prioritet enn legalpant til sameiet.",
              "Kommunen har legalpant som sikkerhet for betaling av kommunale avgifter og eventuell eiendomsskatt.",
              "De øvrige seksjonseierne i sameiet har legalpant på inntil 2G som sikkerhet for krav knyttet til sameieforholdet.",
              "Ved manglende betaling av fellesutgifter har sameiet legal panterett i den enkelte eierseksjon, begrenset til inntil 2 ganger folketrygdens grunnbeløp."
            ],
            "source_documents": [
              "d085_d085"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.93
          },
          {
            "risk_id": "R7",
            "description": "Tinglyste heftelser og bestemmelser på eiendommen. Det er tinglyst en rekke heftelser og bestemmelser på eiendommen, blant annet bestemmelser om vann/kloakkledninger, felles vedlikehold, solidarisk ansvar for fellesledninger, garasje/parkering, veg og bestemmelse om å rive/fjerne bygg når bygningsrådet forlanger det. Disse kan medføre forpliktelser og begrensninger for ny eier.",
            "evidence": [
              "08.06.1964 - Dokumentnr: 1790 - Best. om vann/kloakkledn.",
              "01.10.1964 - Dokumentnr: 3184 - Best. om vann/kloakkledn. Bestemmelse om felles vedlikehold",
              "01.12.1966 - Dokumentnr: 4275 - Bestemmelse om veg",
              "24.06.1970 - Dokumentnr: 3106 - Best om garasje/parkering",
              "Bestemmelse om solidarisk ansvar for fellesledninger",
              "Bestemmelse om frostsikkert fundament på garasje",
              "09.06.1971 - Dokumentnr: 2811 - Bestemmelse om kloakkledn",
              "28.04.1981 - Dokumentnr: 2720 - Erklæring/avtale"
            ],
            "source_documents": [
              "d085_d085"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R8",
            "description": "Bestemmelse om å rive/fjerne bygg når bygningsrådet forlanger det. Det er tinglyst en bestemmelse om at bygningsrådet kan kreve at bygg på eiendommen rives eller fjernes. Dette er en alvorlig heftelse som kan påvirke eiendommens verdi og bruken av den.",
            "evidence": [
              "3222/107/111/5: Bestemmelse om å rive/fjerne bygg når bygningsrådet forlanger det"
            ],
            "source_documents": [
              "d085_d085"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R9",
            "description": "Ukjente kommunale avgifter. Eiendommen er nyoppført og det foreligger ikke tall for kommunale avgifter. Kjøper vet dermed ikke nøyaktig hva de løpende kommunale kostnadene vil bli.",
            "evidence": [
              "Informasjon: Eiendommen er nyoppført og det foreligger derfor ikke tall for kommunale avgifter.",
              "For eneboliger ligger kommunale avgifter vanligvis mellom 15 000,- til 25 000,- pr år, avhengig av størrelse på husholdningen.",
              "Det er estimert eiendomsskatt på kr. 6 410,- pr. år med en markedsverdi på 9 300 000."
            ],
            "source_documents": [
              "d085_d085"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R10",
            "description": "Ingen formuesverdi foreligger. Boligen er nyoppført i 2026 og det foreligger ikke formuesverdi. Dette gjør det vanskelig for kjøper å forutse fremtidig skattegrunnlag og formuesskatt.",
            "evidence": [
              "Info om formuesverdi: Boligen er nyoppført i 2026, det foreligger derfor ikke formuesverdi.",
              "Skatteetaten beregner en boligverdi (beregnet markedsverdi for bolig) basert på SSBs statistiske opplysninger om omsatte boliger."
            ],
            "source_documents": [
              "d085_d085"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.72
          },
          {
            "risk_id": "R11",
            "description": "Stikkledninger er private og vedlikeholdsansvaret påhviler sameiet. Stikkledningene fra eiendommen og ut til det kommunale nettet er private. Vedlikeholdsansvaret for disse påhviler sameiet, noe som kan medføre uforutsette kostnader ved fremtidige reparasjoner eller utskiftninger.",
            "evidence": [
              "Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler sameiet."
            ],
            "source_documents": [
              "d085_d085"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R12",
            "description": "Energimerke B med rød energifarge. Boligen har energikarakter B, men energifarge rød. Rød energifarge indikerer at boligen i stor grad benytter elektrisitet som energikilde, noe som kan medføre høye strømkostnader.",
            "evidence": [
              "Energikarakter: B",
              "Energifarge: Rød",
              "Total energibruk 12998 kWh",
              "Elektrisitet 11332 kWh",
              "Elektrisk oppvarming, vedovn og balansert ventilasjon."
            ],
            "source_documents": [
              "d085_d085"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R13",
            "description": "Salget reguleres av avhendingsloven, ikke bustadoppføringslova. Boligen er nylig ferdigstilt, men har ikke vært bebodd, og salget skjer etter bestemmelsene i avhendingsloven. Dette kan bety at kjøper ikke har de samme rettighetene som ved kjøp av bolig under oppføring etter bustadoppføringslova, herunder rett til garanti etter bustadoppføringslova § 12.",
            "evidence": [
              "Denne boligen er nylig ferdigstilt, men har ikke vært bebodd. Salget skjer etter bestemmelsene i avhendingsloven.",
              "Dersom kjøperen er en privatperson og kjøpet [skjer som forbruker, gjelder særskilte regler] (tekst avskåret)"
            ],
            "source_documents": [
              "d085_d085"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R14",
            "description": "Begrensning på eierskap – maks to seksjoner per person. Ingen kan eie mer enn to boligseksjoner i sameiet, i henhold til eierseksjonsloven § 23. Seksjoner eid av nærstående eller gjennom firma regnes også med. Dette kan begrense investorers muligheter.",
            "evidence": [
              "Det informeres om at ingen kan eie mer enn to boligseksjoner i sameiet, i henhold til eierseksjonsloven § 23.",
              "Seksjoner som eies av nærstående eller gjennom et firma regnes også med."
            ],
            "source_documents": [
              "d085_d085"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.75
          },
          {
            "risk_id": "R15",
            "description": "Ukjent strømforbruk. Boligen har ikke vært bebodd, og selger har derfor ikke mulighet til å opplyse om faktisk strømforbruk. Kjøper kan ikke basere seg på historiske forbrukstall ved budsjettering av løpende kostnader.",
            "evidence": [
              "Boligen er ikke bebodd, selger har derfor ikke mulighet til å opplyse om strømforbruk."
            ],
            "source_documents": [
              "d085_d085"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R16_NY",
            "description": "Salg som ledd i næringsvirksomhet – kjøper utenfor forbrukerdefinisjon. Selger er et aksjeselskap (Bm Prosjekt Og Utvikling AS) og salget skjer som ledd i næringsvirksomhet. Dersom kjøper er en juridisk person eller profesjonell aktør, kan eiendommen selges med begrenset ansvar ('som den er'), og avhendingslovens forbrukervern fravikes. Dette gir kjøper svakere rettigheter.",
            "evidence": [
              "Kjøp utenfor forbrukerdefinisjonen: Dersom kjøperen er en juridisk person [gjelder andre regler]",
              "Ved salg til ikke-forbruker, kan eiendommen selges med begrenset ansvar fra selgers side ('som den er').",
              "Selger: Bm Prosjekt Og Utvikling AS",
              "Jeg kan ikke kjøpe boligselgerforsikring ihht vilkår. (Initialer selger: BA 2)"
            ],
            "source_documents": [
              "d085_d085"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R17_NY",
            "description": "Solidarisk ansvar for fellesledninger. Det er tinglyst bestemmelse om solidarisk ansvar for fellesledninger. Dette innebærer at seksjonseier kan bli holdt ansvarlig for kostnader knyttet til fellesledninger som strekker seg over flere eiendommer, selv om skaden ikke skyldes egen seksjon.",
            "evidence": [
              "Bestemmelse om solidarisk ansvar for fellesledninger",
              "Overført fra: Knr:3222 Gnr:107 Bnr:111 – Gjelder denne registerenheten med flere"
            ],
            "source_documents": [
              "d085_d085"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          }
        ],
        "re_retrieval_queries": [
          "Hva gjenstår før ferdigattest kan utstedes – hvilke konkrete tiltak er listet opp?",
          "Garanti etter bustadoppføringslova § 12 – er det nevnt noe om garantiforpliktelser fra utbygger?",
          "Felleskostnader og budsjett for sameiet – hva er månedlige fellesutgifter?",
          "Hva er sameiebrøken og hvilke rettigheter/plikter følger av denne?",
          "Er det opplyst om pågående tvister, klager eller rettslige prosesser knyttet til eiendommen eller sameiet?",
          "Teknisk tilstand – er det opplyst om konkrete feil, avvik eller mangler ved bygget?",
          "Hva er tomtestørrelse og seksjonert tomt – er det risiko knyttet til tomtegrenser?"
        ],
        "reasoning": "\nGjennomgangen av de 15 identifiserte risikoene mot dokumentevidensen viser følgende:\n\n**Bekreftede risikoer med høy evidens (R1–R4, R6–R7, R11, R13):**\n- R1 (ingen tilstandsrapport): Meget godt dokumentert. Confidence opprettholdes på 0.98. Tilleggspoeng: mangel på tilstandsrapport gjør også boligselgerforsikring ugyldig, noe som forsterker risikoen ytterligere.\n- R2 (midlertidig brukstillatelse): Godt dokumentert. Confidence opprettholdes på 0.97. Dokumentet nevner at konkrete gjenstående tiltak er listet, men teksten er avskåret – dette bør undersøkes nærmere.\n- R3 (selger ikke bebodd): Godt dokumentert. Confidence opprettholdes på 0.95.\n- R4 (ingen boligselgerforsikring): Evidensen er sterkere enn opprinnelig vurdert. Selger har eksplisitt krysset av for at forsikring ikke kan tegnes ihht. vilkår (næringsvirksomhet + manglende tilstandsrapport). Confidence justeres opp til 0.95.\n- R6 (legalpant): Meget godt dokumentert med to separate kildepassasjer. Confidence justeres opp til 0.93.\n- R7 (tinglyste heftelser): Evidensen er bredere enn opprinnelig – flere heftelser er identifisert i dokumentet. Confidence justeres opp til 0.90.\n- R11 (private stikkledninger): Godt dokumentert. Confidence opprettholdes på 0.85.\n- R13 (avhendingsloven, ikke bustadoppføringslova): Godt dokumentert. Confidence justeres opp til 0.88.\n\n**Risikoer med moderat evidens (R5, R8, R9, R12, R14, R15):**\n- R5 (ingen radonmåling): Dokumentert, men risikoen er noe begrenset da det ikke er lovkrav for ubebodd nybygg. Confidence justeres ned til 0.88 (fra 0.90) – fortsatt relevant.\n- R8 (rive/fjerne bygg): Dokumentert, men kun én setning. Confidence justeres ned til 0.85 (fra 0.91) – bør undersøkes nærmere hva denne bestemmelsen faktisk innebærer i praksis.\n- R9 (ukjente kommunale avgifter): Dokumentert. Eiendomsskatt er estimert (kr 6 410), men kommunale avgifter er ukjente. Confidence justeres ned til 0.80 (fra 0.82) da dette er en normal situasjon for nybygg.\n- R12 (energimerke B, rød farge): Godt dokumentert med energidata. Confidence opprettholdes på 0.80.\n- R14 (maks to seksjoner): Dokumentert. Confidence opprettholdes på 0.75 – dette er mer en begrensning enn en risiko for ordinær boligkjøper.\n- R15 (ukjent strømforbruk): Dokumentert. Confidence opprettholdes på 0.80, men risikoen er delvis overlappende med R12.\n\n**Justert risiko (R10):**\n- R10 (ingen formuesverdi): Dokumentert, men dette er en normal og forventet situasjon for nybygg. Skatteetaten vil beregne formuesverdi basert på SSB-statistikk. Confidence justeres ned til 0.72 (fra 0.78) – lav praktisk risiko.\n\n**Nye risikoer identifisert:**\n- R16_NY (salg som ledd i næringsvirksomhet): Dokumentet viser tydelig at selger er et AS og at salget skjer som næringsvirksomhet. Dette påvirker kjøpers rettigheter vesentlig. Confidence: 0.82.\n- R17_NY (solidarisk ansvar for fellesledninger): Tinglyst heftelse som ikke var tilstrekkelig fremhevet som selvstendig risiko. Confidence: 0.80.\n\n**Manglende informasjon som bør undersøkes:**\n1. Hvilke konkrete tiltak gjenstår før ferdigattest kan utstedes (tekst avskåret i dokumentet).\n2. Om det foreligger garanti fra utbygger (bustadoppføringslova § 12 eller tilsvarende).\n3. Månedlige felleskostnader for sameiet.\n4. Om det er pågående tvister eller klager.\n5. Teknisk tilstand – konkrete avvik eller mangler.\n6. Tomtestørrelse og seksjonert tomt.\n"
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
    "input_tokens": 19240,
    "output_tokens": 6107,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
