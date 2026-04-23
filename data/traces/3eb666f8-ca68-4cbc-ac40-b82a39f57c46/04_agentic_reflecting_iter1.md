# Trace: agentic_reflecting_iter1
- **Run ID:** 3eb666f8-ca68-4cbc-ac40-b82a39f57c46
- **Tidspunkt:** 2026-03-25T00:13:59.982879+00:00
- **Varighet:** 113.60s
- **Input tokens:** 23113
- **Output tokens:** 6186

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
Risiko 1: Selger har ikke bebodd eiendommen og mangler spesifikk kunnskap om den. Dette øker risikoen for skjulte feil og mangler som ikke er opplyst om.
  Confidence: 0.95
  Evidens: Selger har ikke bebodd eiendommen og har derfor ikke spesifikk kunnskap om den. Det kan derfor være skader og andre forhold ved eiendommen som ikke er spesifikt opplyst.; Kjøper oppfordres derfor til å foreta en særlig grundig undersøkelse av eiendommen, gjerne med bistand av teknisk sakkyndig.

Risiko 2: Høy fellesgjeld i borettslaget. Andel fellesgjeld er kr 438 165, og borettslagets samlede fellesgjeld er ca. kr 67–68 millioner. Dette medfører betydelig finansiell risiko for kjøper gjennom høye felleskostnader og renterisiko.
  Confidence: 0.95
  Evidens: Lånebetingelser fellesgjeld: Borettslaget har en samlet fellesgjeld per 14.01.2026 på kr 67 477 490,‑ fordelt på andelene.; Andel fellesgjeld: 438 165; 2265 Andre pantelån 'IN-light' 68 248 462; Innkrevde finanskostnader 4 581 192 (2024)

Risiko 3: Styret vurderer utbedring av tak, men ingenting er bestemt. Dette kan medføre økning i felleskostnadene.
  Confidence: 0.93
  Evidens: Styret opplyser om at de vurderer utbedring av tak. Det er ingenting som er bestemt. Dette kan medføre økning i felleskostnadene.; Felleskostnadene kan bli besluttet økt.

Risiko 4: Taktekking er fra slutten av 1990-tallet/begynnelsen av 2000-tallet og er ikke besiktiget. Flat takkonstruksjon med takbelegg utgjør en risiko for lekkasjer og kostbare utbedringer.
  Confidence: 0.9
  Evidens: Flat takkonstruksjon. Tekket med takbelegg. Taket er ikke besiktiget. Taktekking er fra slutten av 1990-tallet/begynnelsen av 2000-tallet.; Taktekking er Brls ansvar.

Risiko 5: Avvik mellom dagens planløsning og godkjente byggetegninger. Bad og vaskerom er slått sammen uten at dette er i samsvar med originale tegninger, noe som kan innebære ulovlig bruksendring.
  Confidence: 0.92
  Evidens: Det gjøres oppmerksom på at dagens planløsning ikke stemmer overens med de opprinnelige godkjente tegningene.; På de originale tegningene er dagens bad tegnet inn som bad og vaskerom.; Det foreligger godkjente og byggemeldte tegninger, men det er avvik fra disse.; Bad og vaskerom er slått sammen i forbindelse med modernisering av bad som ble utført i regi av tidligere eier.

Risiko 6: Badet er utdatert og modernisert på 1980/1990-tallet av tidligere eier. Det er påvist bom i gulvfliser, delvis løsnet fliselim og oppsprukket fuge. Støpejernsluk bør skiftes ved modernisering.
  Confidence: 0.88
  Evidens: Badet ble modernisert og utvidet på 1980/1990-tallet i regi av tidligere eier. Badet må anses å være utdatert.; Bom registrert i flere gulvfliser. Enkelte gulvfliser v/balkongdør virker å ha delvis løsnet fra fliselim.; Delvis oppsprukket fuge mellom gulvfliser pga. bevegelse i flis.; Når bad/våtrom moderniseres bør støpejernsluk skiftes.

Risiko 7: Innvendige avløpsledninger har passert mer enn halvparten av forventet brukstid. Hovedstamme/avløpsrør er skjult og tilstandsvurdering må utføres av spesialfirma.
  Confidence: 0.9
  Evidens: Mer enn halvparten av forventet brukstid er passert på innvendige avløpsledninger.; Hovedstamme/avløpsrør er skjult og tilstandsvurdering må utføres av spesialfirma.; Avløpsrør på grunn av alder.

Risiko 8: Vannledninger og varmtvannstank er vurdert å ha risiko på grunn av alder. Varmtvannstanken har bul i deksel.
  Confidence: 0.85
  Evidens: Vannledninger på grunn av alder.; Varmtvannstank på grunn av bul i deksel.

Risiko 9: Ventilasjon er mangelfull. Kjøkkenet har ventilator mot yttervegg, noe som kan føre til matos i innglasset balkong ved matlaging.
  Confidence: 0.8
  Evidens: Det kan føre til matos i innglasset balkong v/matlaging.; Ventilasjonsløsning bør utbedres v/behov.

Risiko 10: Skjevheter i gulv er registrert, spesielt i entre/gang. Skjevheter på 5–25 mm er registrert, og tilsvarende skjevheter er funnet i flere leiligheter i borettslaget.
  Confidence: 0.85
  Evidens: 05 mm - 25 mm skjevheter registrert v/kontroll. Det er spesielt skjevt i bredderetning av leiligheten.; De største skjevhetene ble registrert i entre/gang.; Skjevheter er registrert i flere tilsvarende leiligheter i Brl.

Risiko 11: Vinduer er fra 1992/1993 (unntatt stuevindu fra 2018) og har passert mer enn halvparten av forventet brukstid. Eldre vinduer har normalt dårligere isoleringsevne og tetting.
  Confidence: 0.82
  Evidens: Vinduene ble skiftet i 1992/1993, unntatt stuevindu.; Mer enn halvparten av forventet brukstid er oppbrukt.; Eldre dører har normalt sett dårligere isoleringsevne og dårligere tetting rundt karmer enn nyere dører.; Vinduer har en normal brukstid på 20 til 60 år.

Risiko 12: Skyvedør kan ikke lukkes igjen på grunn av parkett. Dette er en funksjonsfeil som bør utbedres.
  Confidence: 0.83
  Evidens: Skyvedør kan ikke lukkes igjen pga parkett.; Innerdørene bærer preg av elde/slitasje.

Risiko 13: Det er ikke foretatt radonmålinger, og bygget er ikke utført med radonsperre. Dette innebærer en potensiell helserisiko for beboere.
  Confidence: 0.88
  Evidens: Det er ikke foretatt radonmålinger, og bygget er heller ikke utført med radonsperre.

Risiko 14: Borettslaget har legalpant på inntil 2G (to ganger folketrygdens grunnbeløp) i andelen som sikkerhet for felleskostnader. Dette gir borettslaget prioritet over tinglyste lån, noe som er en risiko for kjøper og eventuelle långivere.
  Confidence: 0.9
  Evidens: Borettslaget har legalpant på inntil 2G som sikkerhet for betaling av felleskostnader.; Borettslaget har prioritet over tinglyste lån når det gjelder betaling av felleskostnader, og kan kreve inn pengene før andre kreditorer, selv om de har lån registrert på andelen.; Borettslaget har legalpanterett i andelen for krav på dekning av felleskostnader og andre krav fra borettslaget, på inntil 2 ganger folketrygdens grunnbeløp.

Risiko 15: Risiko for økte felleskostnader dersom andre andelshavere misligholder sine forpliktelser, eller dersom borettslaget sitter på fraflyttede/usolgte andeler. De øvrige andelseierne må da dekke underskuddet.
  Confidence: 0.85
  Evidens: Manglende innbetaling av fellesutgiftene som følge av andre andelshaveres mislighold, eller dersom borettslaget sitter på fraflyttede og/eller usolgte andeler, må dekkes av de øvrige andelseierne.

Risiko 16: Grunnforhold er ikke kjent utover at bygget er fundamentert på antatt faste masser av sprengstein/grov pukk på fjell. Drenering har generelt begrenset levetid fra byggedato på mellom 20 til 60 år.
  Confidence: 0.78
  Evidens: Grunnmur: Fundamentert på antatt faste masser av sprengstein/grov pukk på fjell. Videre grunnforhold er ikke kjent.; Drenering har generelt sett begrenset levetid fra byggedato på mellom 20 til 60 år avhengig av grunnforhold.

Risiko 17: Energimerke D (gul) indikerer relativt høyt energiforbruk. Boligen har kun elektrisk oppvarming og varmekabler, noe som kan gi høye strømkostnader.
  Confidence: 0.8
  Evidens: Energikarakter: D; Energifarge: Gul; Elektrisk oppvarming.; Varmekabler på bad og innglasset balkong.

Risiko 18: Begrenset adgang til utleie i borettslag. Boligen kan kun leies ut i inntil 3 år med styrets godkjenning, noe som begrenser kjøpers fleksibilitet.
  Confidence: 0.88
  Evidens: Adgang til utleie: Det er begrenset adgang til å leie ut bolig i borettslag. Med styrets godkjenning og under visse vilkår kan boligen leies ut i inntil 3 år, jf. borettslagsloven § 5‑3 til § 5‑10.

Risiko 19: Hensynssoner på eiendommen inkluderer bevaring av kulturmiljø (91,7% dekningsgrad) og flomfare (6,3% dekningsgrad). Dette kan begrense fremtidige bygningstiltak og innebære risiko ved ekstremvær.
  Confidence: 0.75
  Evidens: Bevaring kulturmiljø, dekningsgrad 91,7%; Flomfare, dekningsgrad 6,3%

Risiko 20: Stikkledninger fra eiendommen til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler borettslaget. Dette kan medføre uforutsette vedlikeholdskostnader.
  Confidence: 0.8
  Evidens: Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler borettslaget.

Risiko 21: Reguleringsplan under arbeid i nærheten (PlanID 71340000, Nebbestølen boliger, berøringsgrad 10,6%) kan påvirke eiendommen og nærområdet fremover.
  Confidence: 0.72
  Evidens: Reguleringsplaner under arbeid: PlanID: 71340000. Fyllingsdalen. Gnr 22 Bnr 20, Nebbestølen, boliger. Berøringsgrad 10,6%

Dokumentkontekst:
[d106_d106 | Side [1]]
ikke dette bli inkludert i handelen. Legalpant: Borettslaget har legalpant på inntil 2G som
Adresse
vedlagt i salgsoppgaven. sikkerhet for betaling av felleskostnader. Dette betyr at
Nebbestølen 41, 5144 FYLLINGSDALEN borettslaget har prioritet over tinglyste lån når det gjelder
Regulering
betaling av felleskostnader, og kan kreve inn pengene før
Energimerke
Gnr. 23, bnr. 203, ideell andel 1/ 1 Regulerings og arealplaner: Eiendommen er i henhold til andre kreditorer, selv om de har lån registrert på

---

[d106_d106 | Side [1]]
ng informasjonen som fremgår av energiattesten.
kontrollerer det elektriske anlegget. dersom det foreligger saklig grunnlag, jf. borettslagsloven
Tinglyste heftelser
‑ Det er ikke foretatt radonmålinger, og bygget er heller § 4‑4.
Oppvarming
ikke utført med radonsperre. Tinglyste heftelser og rettigheter: På eiendommen er det
Regnskap/ budsjett/ kostnadsøkninger: Borettslagets Boligen har følgende oppvarmingskilder: tinglyst en rettighet som følger eiendommens matrikkel
årsregnskap for 2024 ligger vedlagt

---

[d106_d106 | Side [1]]
 eller usolgte andeler, Dersom det oppstår behov for ytterligere avklaringer, det som med rimelighet kunne forventes ut fra blant
må dekkes av de øvrige andelseierne. oppfordres interessenter til å kontakte eiendomsmegler annet alder, type og synlig tilstand – eller hvis det er
Lovanvendelse
eller egne rådgivere før de gir bud. tilbakeholdt, eller gitt feilaktige opplysninger, og dette har
Borettslaget har legalpanterett i andelen for krav på Regelverk og generelle opplysninger påvirket avtalen.
dekning av

---

[d106_d106 | Side [1]]
e måles på samme Selger har ikke bebodd eiendommen og har derfor ikke skiftet i 1992/ 1993, unntatt stuevindu som ble montert i
tegnet inn som bad og vaskerom. Bruksendring fra måte som BRA, men man ser bort fra krav til spesifikk kunnskap om den. Det kan derfor være skader 2018
hoveddel til hoveddel er ikke søknadspliktig. himlingshøyde. Arealet inngår ikke i BRA, men opplyses og andre forhold ved eiendommen som ikke er spesifikt
om sammen med BRA som et tillegg. opplyst. Kjøper oppfordres derfor til å

---

[d106_d106 | Side [1]]
Regelverk og generelle opplysninger påvirket avtalen.
dekning av felleskostnader og andre krav fra Boligen selges med det inventar og utstyr som i henhold Slitasje og bruk
borettslaget, på inntil 2 ganger folketrygdens grunnbeløp. til gjeldende lover, forskrifter eller offentlige pålegg skal Det må også forventes at eiendommer som har vært i Dersom det er avvik mellom oppgitt og faktisk innvendig
følge med eiendommen, jf. avhendingsloven § 3‑4. bruk, vil kunne ha tegn til slitasje og eventuelle skader.

---

[d106_d106 | Side [1]]
ekke kostnader med inntil kr 10 000 (som en
Partenes rettigheter og plikter reguleres av avtalen egenandel).
Selger leverer eiendommen i ryddig og rengjort stand. En standard tilbehørsliste utarbeidet av Norges mellom partene, og all tilgjengelig dokumentasjon som
Eiendomsmeglerforbund (NEF) følger salgsoppgaven, og forelå for kjøper før handelen ble inngått. I tillegg gjelder Ikke‑forbruker – definisjon og vilkår:
gjelder som utgangspunkt for hva som inkluderes i salget avhendingsloven. Det gjelder ulike

---

[d106_d106 | Side [1]]
g er fra 2018. 0 bygningsmassen. Megler skal også opplyse om det foreligger
ferdiga琀琀ester eller midler琀椀dig bruks琀椀llatelser. De琀琀e
Norgespris: innebærer at den bygningssakkyndige/takstmann har en plikt Eier har pr. i dag ikke bes琀椀lt norgespris. For å bes琀椀lle: Gå 琀椀l
琀椀l å Elhub.no og logg inn på «Elhub Min Side» med elektronisk ID.
påpeke åpenbare ulovligheter som avdekkes. De har ikke et
Binding gjelder ut 2026.
ansvar for å hente sist godkjente tegninger hos kommunen.
De琀琀e ansvaret ligger fortsa琀琀

---

[d106_d106 | Side [1]]
het) •
fellesarealer (med mindre boligeier har vedlikeholdsplikt for fellesarealer og de琀琀e er kjent for bygningssakkyndig, eller fellesarealet har en særlig
琀椀lknytning 琀椀l boligen).
Trond Bertelsen
© iVerdi 2023
Malen 琀椀l denne rapporten, inkludert standardtekstene fra Verdi er vernet e琀琀er åndsverkloven og kan kun beny琀琀es av av kunder hos iVerdi. For andre aktører er
trond@takstoppdrag.no
eksemplarfrems琀椀lling av malen og standardtekster, som utskri昀琀 og annen kopiering 琀椀l bruk som grunnlag for

---

[d106_d106 | Side [1]]
i henhold til andre kreditorer, selv om de har lån registrert på andelen.
i Bergen kommune.Andelsnr. 33 i Minken Borettslag Energikarakter: D reguleringsplan Fyllingsdalen. Gnr 22, 23 og 24,
med orgnr. 953155818 Energifarge: Gul Fyllingsdalen sentrale deler regulert til boligbeb. ‑
Vei, vann og avløp
blokkbebyggelse.
Eiendommen er tilknyttet offentlig vann‑ og
Selger Info energiklasse
Hensynssoner: avløpssystem. Stikkledningene fra eiendommen og ut til
Ragnhild Madsen Alle eiendommer som selges eller leies

---

[d106_d106 | Side [1]]
følger eiendommens matrikkel
årsregnskap for 2024 ligger vedlagt i salgsoppgaven. ‑ Elektrisk oppvarming. ved overskjøting til ny hjemmelshaver. Dette er en
Øvrig
‑ Varmekabler på bad og innglasset balkong. bestemmelse om vann/ kloakk. Dette vil ikke påvirke en
kjøper direkte.
informasjon
Vedtekter/ husordensregler
Hvis et rom på visningen mangler fast installert
Borettslagets vedtekter og husordensregler ligger oppvarmingskilde, vil ikke dette bli inkludert i handelen. Legalpant: Borettslaget har

---

[d106_d106 | Side [1]]
ten viser fellesgjeld fordelt på de ulike leilighetstypene.
1101 Rehabilitering/påkostning 34 944 739
Ved avdragsfrihet viser noten forventet økning ved første avdrag, beregnet i hht. dagens rentenivå.
Sum 57 696 489
Note 59 Minken Borettslag Orgnr.: 953155818 Utskriftsdato 05.03.2025 Note 59 Minken Borettslag Orgnr.: 953155818 Utskriftsdato 05.03.2025
Side 13 av 25 Side 14 av 25
92 93

## Side 48

Note 59 Minken Borettslag 2024 Note 59 Minken Borettslag 2024
Note 6 - Gjeld som er sikret med pant utgjør

---

[d106_d106 | Side [1]]
 ha vært oppdaget ved en ordinær oppfyller kravene som følger av avtalen, eller ved brudd
utgifter. Manglende innbetaling av fellesutgiftene som vedlagte materiell eller på https:/ / gjennomgang. på bestemmelser i avhendingsloven §§ 3‑2 til 3‑8. Det
følge av andre andelshaveres mislighold, eller dersom www.soderbergpartners.no/ eiendom/ boligkjoper/ samme gjelder hvis eiendommen ikke samsvarer med
borettslaget sitter på fraflyttede og/ eller usolgte andeler, Dersom det oppstår behov for ytterligere

---

[d106_d106 | Side [1]]
og ut til
Ragnhild Madsen Alle eiendommer som selges eller leies ut skal ha en ‑ Bevaring kulturmiljø, dekningsgrad 91,7% det kommunale nettet er private, og
energiattest. Unntak gjelder blant annet for frittstående ‑ Flomfare, dekningsgrad 6,3% vedlikeholdsansvaret for disse påhviler borettslaget.
Borettslag
bygninger med et bruksareal mindre enn 50 m². Det er Adkomst til eiendommen skjer via offentlig til privat vei.
Minken Borettslag eier som har plikt til å fremlegge energiattest og er

---

[d106_d106 | Side [1]]
olig. som gir trygghet og profesjonell juridisk hjelp dersom det Dersom kjøper velger å kjøpe uten å ha sett
Andelseierne har ikke personlig ansvar for borettslagets oppdages uventede feil eller mangler ved boligen de eiendommen, kan det ikke etter overtakelse reklameres En eiendom anses å ha en mangel dersom den ikke
fellesgjeld, men de må dekke borettslagets løpende neste fem årene. Les mer om Boligkjøperforsikring i på forhold som burde ha vært oppdaget ved en ordinær oppfyller kravene som følger av

---

[d106_d106 | Side [1]]



Dine fordeler 
− Unngå bekymring og stress 
− Spar verdifull tid
− Få advokatkostnadene dekket

---

[d106_d106 | Side [1]]
g ‑ Grunnmur: Fundamentert på antatt faste masser av
øvrige krav etter plan‑ og bygningslovgivningen. Det er opplysning av areal på boliger. sprengstein/ grov pukk på fjell. Videre grunnforhold er
Eiendommens
viktig å merke seg at selv om ferdigattest foreligger, gir De nye arealbegrepene er: ikke kjent. Grunnmur/ fundamenter av betong. Gulv mot
det ingen garanti for at bygget er oppført i henhold til grunn i betong.
tilstand
tillatelsen og gjeldende regelverk, eller at det senere er Bruksareal BRA: ‑

---

[d106_d106 | Side [1]]
ringen når du kjøper en brukt
bolig. Da gjelder avhendingsloven. 6.
− Hvor: Hos eiendomsmegler senest ved medfølger. Innredning i garderobeskap, for eksempel løse eller fastmonterte trådkurver, hyller,
kontraktsmøte. stenger og lignende, medfølger.
− Hvordan: Krysses av i kjøpekontrakten.
Forsikringsbevis og vilkår sendes per e-post.
Forsikringen er meglet frem av Söderberg & Partners og soderbergpartners.no/eiendom
er

---

[d106_d106 | Side [1]]
:ecnerefer
tnemucoD
45

## Side 24

Tilleggskommentar
Selger har ikke bebodd eiendommen og har derfor ikke spesifikk kunnskap om den. Det kan derfor være skader og andre forhold ved
eiendommen som ikke er spesifikt opplyst. Kjøper oppfordres derfor til å foreta en særlig grundig undersøkelse av eiendommen, gjerne med
bistand av teknisk sakkyndig.
Jeg bekrefter at opplysningene er gitt etter beste skjønn. Jeg er kjent med at dersom jeg har gitt ufullstendige, uriktige eller misvisende
opplysninger om

---

[d106_d106 | Side [1]]
gene er ikke avskrevet (avskr.sats null). Selskapet har i stedet vurdert om tilstrekkelig vedlikehold er gjennomført som oppveier verdiforringelse av
bygningene.
Langsiktig gjeld
Note 3 - Balanseført verdi av de pantsatte eiendelene utgjør Ant. andeler Andel gjeld 31.12 Sum fellesgjeld
Regnskap 2024 Antall andeler, andel gjeld og sum av fellesgjeld for enheter 154 443 172 68 248 488
1100 Bygningsmessige anlegg 22 751 750 Noten viser fellesgjeld fordelt på de ulike leilighetstypene.
1101

---

[d106_d106 | Side [1]]
godkjente tegninger hos kommunen.
De琀琀e ansvaret ligger fortsa琀琀 hos megler. Kilde:
Norgespris er en statlig 昀椀nansiert ordning, som gir deg forutsigbar Vil du vite mer om 琀椀lstandsgrader? Se side 4.
www.dibk.no/regelverk/forskri昀琀-琀椀l-avhendingslova-tryggere-
strømpris gjennom året. Fra 1. oktober 2025 og ut 2026 er
bolighandel/
Norgesprisen 40 øre per kilowa琀紀me eksklusiv merverdiavgi昀琀.
Prisen vil justeres 1. januar 2027. Ordningen omfa琀琀er
For y琀琀erligere detaljer og opplysninger henvises det

---

[d106_d106 | Side [1]]
ig god u琀昀ørelse mangler. Teknisk 琀椀lstand på hvitevarer er ikke kontrollert.
Veggkonstruksjon:
Lavblokken er oppført i plasstøpte konstruksjoner som Badet ble modernisert og utvidet på 1980/1990-tallet i regi av
TILSTANDSGRAD 2, TG2: VESENTLIGE AVVIK OG MINDRE AVVIK SOM ETTER NS 3600 GIR TG 2 bærevegger/gavlvegger og etasjeskillere. Y琀琀erveggene er u琀昀ørt 琀椀dligere eier. Badet må anses å være utdatert. Badet har eldre
Bygningsdelen skal enten ha feil u琀昀ørelse, en skade eller symptomer på skade, sterk

---

[d106_d106 | Side [1]]
høyder/åpninger, ulovlige bruksendringer, brannceller UTTRYKK OG DEFINISJONER
osv.
•For skjulte konstruksjoner, som vann og avløp uten •Referansenivå: kravet til bygningsdelen eller rommet på
dokumentasjon, er kvalitet og alder vurdert. byggetidspunktet.
Versjon Ny versjon Kommentar
•Fastmonterte installasjoner, for eksempel innfelt belysning og •Tilstand: byggverkets eller bygningsdelens tekniske, funksjonelle
1 19.01.2026 h D ø e y tt t e ta e le r r a e v , s h k e a n l s ik y k n e t i d l e b m yg o

---

[d106_d106 | Side [1]]
skjulte installasjoner • installasjoner utenfor
bygningen • full funksjonstes琀椀ng av el- og VVS-installasjoner • geologiske forhold og bygningens plassering på grunnen • bygningens
planløsning • bygningens innredning • løsøre slik som hvitevarer • utendørs svømmebasseng og pumpeanlegg • bygningens este琀椀kk og
arkitektur • bygningens lovlighet (bortse琀琀 fra bruksendringer, brannceller og forhold som åpenbart kan påvirke helse, miljø og sikkerhet) •
fellesarealer (med mindre boligeier har vedlikeholdsplikt

---

[d106_d106 | Side [1]]
nten ha feil u琀昀ørelse, en skade eller symptomer på skade, sterk slitasje eller nedsa琀琀 som bindingsverk. Y琀琀erkledning av fasadeplater/liggende støpejernsluker.
funksjon. Graden gis når bygningsdelen trenger vedlikehold eller 琀椀ltak i nær frem琀椀d. Graden skal også brukes trekledning.
når delen er gammel og det er grunn 琀椀l å varsle om faren for skader på grunn av alderen, eller når det er grunn
KJØKKEN Gå 琀椀l side
琀椀l å overvåke delen spesielt på grunn av fare for større skader eller følgeskader. Brls

---

[d106_d106 | Side [1]]
g for tilstandsvurderingen. omfatte tilleggsundersøkelser utover minimumskravet i forskriften.
I 1992/93 ble Minken Bore琀琀slag fullt rehabilitert med bla isolering, nye fasader, nye vinduer/balkongdører og ny entredør. Rapporten beskriver avvik, det vil si en tilstand som er dårligere
Nye innglassede balkonger ble oppført i 2018-2020. Arbeidet ble u琀昀ørt av Balkongentreprenøren AS. enn referansenivået. Rapporten vil normalt ikke fremheve positive BEFARINGEN
sider ved boligen ut over det som fremgår av

---

[d106_d106 | Side [1]]
sielt på grunn av fare for større skader eller følgeskader. Brls fasader ble renovert i 1992/1993. Nye fasadeplater
Areal: 9,7 m².
v/innglasset balkong i 2018/2019. Fasadene er Brls ansvar.
Tre-stavs eikeparke琀琀 på gulv, malt strie på vegger, malt betong i
TILSTANDSGRAD 3, TG3: STORE ELLER ALVORLIGE AVVIK
himling.
Denne 琀椀lstandsgraden brukes ved kra昀琀ige tegn på forhold som man må regne med trenger utbedring straks Taktekking:
Eldre kjøkkeninnredning med sle琀琀e fronter. E琀琀 overskap med
eller innen kort

---

[d106_d106 | Side [1]]
avvik eller tegn på skader/avvik på boligen. Rapporten
fremhever vanligvis ikke posi琀椀ve egenskaper ved boligen.
Hva vurderer en bygningssakkyndig?
Den bygningssakkyndige vurderer boligen ut fra hva man kan forvente av en bygning av samme alder
og type. Vurderingen gjøres som regel mot hvordan det var vanlig å bygge og regler som gjaldt da
boligen ble oppført (søknads琀椀dspunktet). Forhold som er vanlige for bygningens alder, slik som slitasje
e琀琀er normal bruk regnes ikke som avvik.
Hva inneholder

---

[d106_d106 | Side [1]]
 av y琀琀ervegg. Det kan føre 琀椀l matos i
Felles avløpsrør er Brls ansvar.
innglasset balkong v/matlaging.
Konsekvens/琀椀ltak Tilstandsgrad er sa琀琀 u琀椀fra alder. Hovedstamme/avløpsrør er skjult og
• Andre 琀椀ltak: 琀椀lstandsvurdering må u琀昀øres av spesial昀椀rma.
Ven琀椀lasjonsløsning bør utbedres v/behov. Vurdering av avvik:
Ingen forhøyede fuktverdier ble registrert i kjøkkenbenken. • Mer enn halvparten av forventet bruks琀椀d er passert på innvendige
avløpsledninger.
Konsekvens/琀椀ltak
Synlig del av

---

[d106_d106 | Side [1]]
et, og slike mindre "avvik" er å
Vinduer er Brls ansvar. Mer enn halvparten av forventet bruks琀椀d er oppbrukt. Eldre dører har ha delvis løsnet fra 昀氀iselim. anse som normalt.
normalt se琀琀 dårligere isoleringsevne og dårligere te琀紀ng rundt karmer
enn nyere dører. Konsekvens/琀椀ltak Vurdering av avvik:
Forventet bruks琀椀d: • Andre 琀椀ltak: • Det er påvist andre avvik:
Vinduer har en normal bruks琀椀d på 20 琀椀l 60 år. Konsekvens/琀椀ltak
• Andre 琀椀ltak: Vedr. Bom i gulv昀氀iser: I utgangspunktet er det ikke en stor

---

[d106_d106 | Side [1]]
innredning med sle琀琀e fronter. E琀琀 overskap med
eller innen kort 琀椀d. Det er påvist funksjonssvikt eller sammenbrudd. Flat takkonstruksjon. Tekket med takbelegg. Taket er ikke
glassfronter.
besik琀椀get. Taktekking er fra slu琀琀en av 1990-tallet/begynnelsen av
Laminat benkeplate, stål vaskekum, ven琀椀lator, opplegg for
2000-tallet. Taktekking er Brls ansvar.
IKKE UNDERSØKT/IKKE TILGJENGELIG FOR UNDERSØKELSE oppvaskmaskin.
Det kan være avvik/skader som ikke er avdekket. Tilstandsgrad på fellesdeler: Keramiske

---

[d106_d106 | Side [1]]
slitasje
e琀琀er normal bruk regnes ikke som avvik.
Hva inneholder 琀椀lstandsrapporten?
Den bygningssakkyndige undersøker rom og bygningsdeler slik det kommer frem av Forskri昀琀 琀椀l
avhendingsloven. Tilstandsrapporten inneholder bare avvik som den bygningssakkyndige kan se eller
kontrollere med enkle hjelpemidler. Det gjøres ikke nærmere undersøkelser slik som åpning av vegger
eller andre bygningsdeler. I vegg mot våtrom og rom under terreng kan det borres et hull for å gjøre
enkle undersøkelser slik som

---

[d106_d106 | Side [1]]
yller/møblement etc har vært plassert. På gulv vil det som regel være
Vurdering av avvik: • Det er påvist andre avvik: div slitasje, og noe misfarge/riper etc hvor møblement har vært plassert.
Vinduene ble ski昀琀et i 1992/1993, unnta琀琀 stuevindu. • Det er påvist andre avvik:
Vinduene har normal slitasje, alder ta琀琀 i betraktning. Bom registrert i 昀氀ere gulv昀氀iser. Enkelte gulv昀氀iser v/balkongdør virker å De琀琀e er normalt i en fra昀氀y琀琀et bo-enhet, og slike mindre "avvik" er å
Vinduer er Brls ansvar. Mer enn

---

[d106_d106 | Side [1]]
nger bygningssakkyndige ser e琀琀er avvik som har betydning for og som
svekkes over 琀椀d, og utse琀琀es for slitasje blant annet på grunn av bruk reduserer boligens funksjon og verdi, og som kommer frem av Forskri昀琀 琀椀l
og vær og vind. Mange boliger fornyes helt eller delvis, noen i 昀氀ere avhendingslova.
omganger, eller det oppføres 琀椀lbygg. Særlig for boliger som er
pusset opp eller endret, er det vik琀椀g å merke seg at fornyelse av
over昀氀ater ikke nødvendigvis betyr at bygningsdeler under

---

[d106_d106 | Side [1]]
ong. tilstandsrapport av en bygningssakkyndig, som gir en løsnet fra fliselim.
Innbo og løsøre: Følgende løsøre og tilbehør følger med: teknisk gjennomgang av boligen og påpeker eventuelle ‑ Overflater grunnet alder og på grunn av parkett har en
I tillegg disponerer leiligheten en ekstern bod på 1,7m². ‑ Integrerte hvitevarerer på kjøkken avvik. Rapporten, sammen med selgers egenerklæring, del striper og slitasje.
‑ Oppvasmaskin og kombinert kjøle‑ og fryseskap er vedlagt salgsoppgaven. Det er viktig at

---

[d106_d106 | Side [1]]
v. beslag. Balkonger, terrasser og rom under balkonger og Delvis oppsprukket fuge mellom gulv昀氀iser pga. bevegelse i 昀氀is.
For nærmere informasjon om standard: Se under de enkelte terrasser INNVENDIG
punkter for beskrivelse og anbefalte 琀椀ltak. Ny琀琀 stuevindu ble montert i 2018.
Vindu har normal slitasje, alder ta琀琀 i betraktning. Sørvestvendt innglasset balkong på 17 m² med utgang fra stue
Generelt: Vindu er Brls ansvar. (inkludert i BRA-b). Over昀氀ater
Bygningen og leilighetens alder 琀椀lsier at det ved

---

[d106_d106 | Side [1]]
følgende hvitevarer:
å sikre mur/såle på samme metode som dagens skikk, samt - Vaskemaskin (Miele).
TILSTANDSGRAD 1, TG1: MINDRE AVVIK drenering har generelt se琀琀 begrenset leve琀椀d fra byggedato på - Tørketrommel (Siemens). Eldre modell.
mellom 20 琀椀l 60 år avhengig av grunnforhold.
Bygningsdelen skal bare ha normal slitasje, og straks琀椀ltak skal ikke anses som nødvendig. Graden kan også
brukes når delen er ny, men der dokumentasjon på faglig god u琀昀ørelse mangler. Teknisk 琀椀lstand på hvitevarer er ikke

---

[d106_d106 | Side [1]]
lse av
over昀氀ater ikke nødvendigvis betyr at bygningsdeler under er
forbedret.
Tilstandsrapporten beskriver ikke hele boligen
BYGNINGSSAKKYNDIGE SER FOR EKSEMPEL IKKE PÅ
• vanlig slitasje og normal vedlikeholds琀椀lstand • bagatellmessige forhold som ikke påvirker bygningens bruk eller verdi vesentlig • etasjeskillere •
Rapportansvarlig 琀椀lleggsbygg slik som garasje, bod, anneks, naust også videre • utvendige trapper • stø琀琀emurer • skjulte installasjoner • installasjoner utenfor
bygningen • full

---

[d106_d106 | Side [1]]
positive BEFARINGEN
sider ved boligen ut over det som fremgår av tilstandsgradene.
•For anbefalte tiltak ved TG2 og TG3 må du vurdere om tiltakene Rapporten gir en vurdering av byggverk og bygningsdeler som
er nødvendige og lønnsomme. Hva det vil koste å utbedre rom bygningssakkyndig har observert, og som fremkommer av
eller bygningsdeler vil avhenge av registrerte avvik og tiltak som forskrift til avhendingslova. Rapporten er likevel ingen garanti for
kommer frem i rapporten. Anslaget er gitt på generelt

---

[d106_d106 | Side [1]]
 05 mm - 25 mm skjevheter registrert v/kontroll. Det er spesielt skjevt Innerdørene bærer preg av elde/slitasje. Skyvedør kan ikke lukkes igjen te琀琀 i overgang mellom sluk og betonggulv og sam琀椀dig sørge for at
i bredderetning av leiligheten. De største skjevhetene ble registrert i pga parke琀琀. sluken er ren slik at vann ikke s琀椀ger 琀椀l over sluk. Når bad/våtrom
entre/gang. Skjevheter er registrert i 昀氀ere 琀椀lsvarende leiligheter i Brl. moderniseres bør støpejernsluk ski昀琀es.
Konsekvens/琀椀ltak Eldre

---

[d106_d106 | Side [1]]
). Over昀氀ater
Bygningen og leilighetens alder 琀椀lsier at det ved ombygging eller Innglasset balkong er oppført i stålpro昀椀ler/betong og belagt med
modernisering kan fremkomme feil og mangler. En må være klar Forventet bruks琀椀d: keramiske 昀氀iser. Gulv: Laminat, tre-stavs eikeparke琀琀, tre-stavs kirsebær parke琀琀.
over at bygningen/leiligheten kan ha eldre bygningsdeler som ikke Vinduer har en normal bruks琀椀d på 20 琀椀l 60 år. Front er oppført i stålpro昀椀ler og glass/frostet glass. Vegger: Malt tapet, malt

---

[d106_d106 | Side [1]]

84 85

## Side 44

59 Minken Borettslag RESULTATREGNSKAP 2024


Note Regnskap 2024 Regnskap 2023 Budsjett 2024 Budsjett 2025


 INNTEKTER:
Innkrevde felleskostnader 5 845 780 5 317 692 5 853 180 6 169 860
 Innkrevde finanskostnader 4 581 192 4 048 968 4 581 192 4 581

---

[d106_d106 | Side [1]]
ken Borettslag 2024
Note 6 - Gjeld som er sikret med pant utgjør Note 9 - Andre Driftskostnader
Regnskap 2024 Regnskap 2023
Regnskap 2024 Regnskap 2023
5124 Fri dugnadsutbetaling 12 250 10 750
2265 Andre pantelån "IN-light" 68 248 462 68 951 491 6330 Vaktmestertjenester 57 568 133 125
2250 Borettsinnskudd 5 194 350 5 194 350 6360 Renhold 203 755 209 791
Sum 73 442 812 74 145 841 6390 Andre driftskostnader 0 4 578
6395 Sommer- og vinterkostnader 3 125 16 759
6500 Verktøy 11 604 2 130
6570 Arbeidsklær og

---

[d106_d106 | Side [1]]
er som ikke er avdekket. Tilstandsgrad på fellesdeler: Keramiske 昀氀iser over deler av benkeplate.
Det blir ikke angi琀琀 琀椀lstandsgrad på felles bygningsdeler i sameier,
Integrerte hvitevarer:
boliglag eller bore琀琀slag. For 琀椀lstandopplysninger om
- Stekeovn (Siemens).
bygningsmassen henvises det 琀椀l bore琀琀slaget/sameiets og deres
- Platetopp m/induksjon (Siemens).
vedlikeholdsru琀椀ner, og ev. 琀椀lstandsrapporter. Det anbefales at alle
Informasjon om utbedringskostnader Tiltak under kr 20 000
sameier, boliglag

---

[d106_d106 | Side [1]]
liktig 2 689 2 154 Regnskap 2024 Regnskap 2023
5290 Motkonto for gruppe52 -2 689 -2 154
6600 Reparasjon og vedlikehold bygninger 787 920 469 678
5330 Styrehonorar 265 000 160 000
6610 Reparasjon og vedlikehold fellesanlegg 144 959 651 859
5400 Arbeidsgiveravgift 113 353 92 476
6620 Reparasjon og vedlikehold utstyr 14 415 6 875
5401 Arbeidsgiveravg. av påløpt ferielønn 8 830 7 866
6640 Periodisk vedlikehold 4 419 98 991
5420 Innberetning aga pensjon 50 932 26 197
6690 Reparasjon og vedlikehold annet 138 380

---

[d106_d106 | Side [1]]
kumenter - Nebbestølen 33 - 87 (ulike nr).
141/Minken Bore琀琀slag 953155818 141 Vestbo. Tlf: 55 30 96 Ragnhild Madsen Tinglyste/andre forhold
00. www.vestbo.no
Kommentarer 琀椀l grunnboksbladet (ev. sameiekontrakt):
Ikke relevant for bore琀琀slagsleiligheter.
Innskudd, pålydende mm
Andelsnummer Pålydende Opprinnelig innskudd Andel fellesformue Andel fellesgjeld
33 100 34 350 26 532 438 165
Kommentar
Månedlig andel fellesutgi昀琀er: Kr 6121,-. Fellesutgi昀琀ene inkluderer: Kommunale avgi昀琀er/eiendomsska琀琀,

---

[d106_d106 | Side [1]]
entrum via Minde, eller ut mot Flesland. Tomtestørrelse: 19559.6 m²
Kollektiv avtale digital‑tv og bredbånd kr 443,‑
Renhold kr 125,‑ Info om formuesverdi: Skatteetaten beregner en Naturen er din nærmeste nabo, med flotte tur‑ og Tomtearealet er felles for borettslaget. Tomten er foruten
boligverdi (beregnet markedsverdi for bolig) basert på løpemuligheter i Kanadaskogen, rundt Storavatnet og eiendommens bygningsmasse opparbeidet med div
Styret opplyser om at de vurderer utbedring av tak. Det SSBs

---

[d106_d106 | Side [1]]
ortsiktig gjeld = Disp.midler 4 027 113 3 944 888
Note 59 Minken Borettslag Orgnr.: 953155818 Utskriftsdato 05.03.2025 Note 59 Minken Borettslag Orgnr.: 953155818 Utskriftsdato 05.03.2025
Side 11 av 25 Side 12 av 25
90 91

## Side 47

Note 59 Minken Borettslag 2024 Note 59 Minken Borettslag 2024
Note 2 - Anleggsmidler/varige driftsmidler Note 4 - Egenkapital
Altaner 2018 Altaner 2019 Altaner 2019 Traktor medHøytrykksvaskerByggningsmessige 01.01.2024 Årets resultat 31.12.2024
strøkasse Anlegg
Endring av

---

[d106_d106 | Side [1]]
__________, dato:_______________________
Katrine Flatekvål Tommy Grindheim Joakim Slotte
Styreleder Styremedlem Styremedlem
Tor Ellingsen Carina Greve Løberg
Styremedlem Styremedlem
59 Minken Borettslag Orgnr.: 953155818 Utskriftsdato 05.03.2025 59 Minken Borettslag Orgnr.: 953155818 Utskriftsdato 05.03.2025
Side 9 av 25 Side 10 av 25
88 89

## Side 46

Note 59 Minken Borettslag 2024 Note 59 Minken Borettslag 2024
Note 0 - Regnskapsprinsipper Note 1 - Disponible midler
Årsregnskapet er satt opp i samsvar

---

[d106_d106 | Side [1]]
nader 3 125 16 759
6500 Verktøy 11 604 2 130
6570 Arbeidsklær og verneutstyr 12 024 5 025
Note 7 - Andre inntekter 6780 Løpende drifts- og serviceavtaler 41 208 38 999
Regnskap 2024 Regnskap 2023 6790 Vakthold 4 018 3 380
6800 Kontorrekvisita 5 535 12 207
3616 Kabel-TV / Digital-TV / Internett 788 172 709 632
6860 Møte,kurs,oppdatering, o.l 71 015 114 520
3617 Renhold 231 000 231 000
6900 Elektronisk kommunikasjon 12 784 12 701
3620 Innkreving strøm 44 296 27 007
6940 Porto og andre forsendelseskostnader

---

[d106_d106 | Side [1]]
nsjon 50 932 26 197
6690 Reparasjon og vedlikehold annet 138 380 89 404
5421 Motkonto aga pensjon -13 661 -13 289
6695 Forsikringsskadesaker 15 000 0
5425 Trekk pensjon ansatte -2 014 0
5500 Annen kostnadsgodtgjørelse 495 0 Sum 1 105 092 1 316 807
Sum 1 008 125 809 451
Andre opplysninger
Det har vært ansatt vaktmester i 100% stilling i regnskapsåret. Selskapet har OTP AVREGNING FINANSINNTEKTER/KOSTNADER ALTANLÅN 2024 2023
3643 - Innbetalt 4 581 192,- 4 048 968,-
Over-/underskudd tidligere år: 477 482,- 648

---

[d106_d106 | Side [1]]
 om utbedringskostnader Tiltak under kr 20 000
sameier, boliglag og bore琀琀slag foretar jevnlig kontroll av
Medfølgende hvitevarer:
Utbedringskostnadene i rapporten er sjablongmessige anslag Tiltak mellom kr 20 000 – 100 000 bygningsmassen. - Oppvaskmaskin (Bosch).
basert på observerte forhold som feil, skader eller - Kjøleskap/frys (Samsung).
uregelmessigheter, samt foreslå琀琀e 琀椀ltak. Disse anslagene er Tiltak mellom kr 100 000 – 200 000 INNVENDIG Gå 琀椀l side
v e e rf i a le r d in e g n s d ta e l , l , a

---

[d106_d106 | Side [1]]
div
Styret opplyser om at de vurderer utbedring av tak. Det SSBs statistiske opplysninger om omsatte boliger. I opp mot både Damsgårdsfjellet og Løvstakken. Vakre interne veier, lekeplass, grøntarealer og div prydbusker/
er ingenting som er bestemt. Dette kan medføre økning i beregningen tas det hensyn til din boligs beliggenhet, Ortuvannet er også et yndet turmål. Den nye beplantning.
felleskostnadene. Felleskostnadene kan bli besluttet økt areal, byggeår og type bolig. Formuesverdien er en

---

[d106_d106 | Side [1]]
1 192,- 4 048 968,-
Over-/underskudd tidligere år: 477 482,- 648 827,-
SUM FINANSINNTEKTER: 5 058 674,- 4 697 795,-
2265 - Avdrag 703 029,- 914 263,-
8195 - Renter 3 866 430,- 3 306 050,-
SUM BETALT AVDRAG/RENTER: 4 569 459,- 4 220 313,-
Over-/underskudd : - 11 733,- - 171 345,-
TOTALT over-/underksudd 489 215,- 477 482,-
Note 59 Minken Borettslag Orgnr.: 953155818 Utskriftsdato 05.03.2025 Note 59 Minken Borettslag Orgnr.: 953155818 Utskriftsdato 05.03.2025
Side 15 av 25 Side 16 av 25
94 95

## Side

---

[d106_d106 | Side [1]]
r 11 460 10 291
Note 8 - Lønn/pensjonkostnader/Styrehonorar
7720 Generalforsamling 0 755
Regnskap 2024 Regnskap 2023 7770 Bank og kortgebyrer 388 426
7781 Bomiljø 12 308 108 949
5000 Lønn ansatte 484 050 455 101
7791 Annen kostnad 5 000 0
5013 Overtidsarbeid 37 826 21 809
5020 Feriepenger 62 625 55 789 Sum 1 265 778 1 422 218
5146 Trekkpliktig bilgodtgjørelse 689 503
5360 Honorarer 0 3 000 Note 10 - Vedlikehold
5252 Personforsikring skattepliktig 2 689 2 154 Regnskap 2024 Regnskap 2023
5290 Motkonto for

---

[d106_d106 | Side [1]]
 





–  – 
84 85

## Side 44

59 Minken Borettslag RESULTATREGNSKAP

---

[d106_d106 | Side [1]]
tning avløp
Eiendommen er 琀椀lkny琀琀et o昀昀entlig avløp via private s琀椀kkledninger.
Regulering
Eiendommen omfa琀琀es av reguleringsplan (11440000). Formål: Bolig.
Befaring
Planid: 11440000.
Planens navn: FYLLINGSDALEN. BOLIGFELT VII.
Dato Til stede Rolle
Type plan: Eldre reguleringsplan.
14.1.2026 Trond Bertelsen Taks琀椀ngeniør Planstatus: Gjeldende plan.
Vedtak i kra昀琀: 01.02.1965.
Evelyn Margaret Hansen Eiers da琀琀er
Ragne Janne Madsen Eiers da琀琀er For øvrige opplysninger vedrørende reguleringsmessige
forhold

---

[d106_d106 | Side [1]]
er. Sentral og a琀琀rak琀椀v beliggenhet i et etablert boligområde i Fyllingsdalen.
Nevnte endring er ikke søknadsplik琀椀g hos Bergen Kommune. Fra leiligheten er det utsikt over nærområde/nabolaget og omkringliggende 昀樀ell.
Området er hovedsakelig bebygd med 琀椀lsvarende blokkbebyggelse.
ØVRIGE OPPLYSNINGER:
Det er fortsa琀琀 eiendomsmegler som har plikt 琀椀l å sørge for at boligkjøperen får opplysningene han eller hun har grunn Kort vei 琀椀l Oasen Senter med de 昀氀este fasiliteter/service琀椀lbud, samt 昀氀ere

---

[d106_d106 | Side [1]]
eldig bra 91/100
10% 13-15 år
16% 16-18 år
Turmulighetene
Nærhet til skog og mark 88/100
Støynivået
Lite støynivå 86/100
Familiesammensetning
Par m. barn
Sport
Lynghaugparken "binge" 4 min
Par u. barn
Ballspill 0.4 km
Løvås skole 5 min
Enslig m. barn
Aktivitetshall 0.4 km
Sprek & Blid Sissel's 8 min
Enslig u. barn
SATS Oasen 8 min
Flerfamilier
Boligmasse
0% 58%
4% enebolig
Nebbestølen/Oasen
96% blokk
Bergen
Norge
Sivilstand
Norge
Gift 25% 33%
«Har bodd her hele livet unntatt siste
Ikke gift 54% 54%
året.

---

[d106_d106 | Side [1]]
remlagt Planer i nærheten av eiendommen: bolig i borettslag. Med styrets godkjenning og under
energiattest før avtale om salg er inngått, kan kjøper få ‑ PlanID: 71740000. Kommuneplanens arealdel KPA 2027. visse vilkår kan boligen leies ut i inntil 3 år, jf.
Forretningsfører: Vestbo Bbl laget en energiattest ved hjelp av ekspert for selgers Bystyret legger til grunn at revisjon av borettslagsloven § 5‑3 til § 5‑10. Andelseier som selv bor i
regning, innen ett år etter at avtale om salg er inngått.

---

[d106_d106 | Side [1]]
Borettslag eier som har plikt til å fremlegge energiattest og er Reguleringsplaner under arbeid:
ansvarlig for at opplysningene er korrekte. ‑ PlanID: 71340000. Fyllingsdalen. Gnr 22 Bnr 20,
Utleie
Organisasjonsnummer: 953155818 Nebbestølen, boliger. Berøringsgrad 10,6%
Dersom eier ikke har lagt frem energiattest, og eier etter Adgang til utleie: Det er begrenset adgang til å leie ut
Andelsnummer: 33 skriftlig anmodning fra kjøper ikke har fremlagt Planer i nærheten av eiendommen: bolig i borettslag. Med

---

[d106_d106 | Side [1]]
 datakilder, og feil eller mangler kan forekomme. Vurderinger og sitater er innhentet på web og gir uttrykk for
hvordan naboene vurderer nabolaget. FINN.no AS kan ikke holdes ansvarlig for feil/mangler i profilen. Copyright © Finn.no AS 2026
73

## Side 38

Primære transportmidler Varer/Tjenester
Oasen 4 min
1. Egen bil
Boots apotek Oasen 8 min
2. Buss
3. Gående
Aldersfordeling barn (0-18 år)
Kollektivtilbud 37% i barnehagealder
37% 6-12 år
Veldig bra 91/100
10% 13-15 år
16% 16-18 år
Turmulighetene
Nærhet

---

[d106_d106 | Side [1]]
: 17 av 22
62 63

## Side 33

Nebbestølen 41, 5144 FYLLINGSDALEN Takstoppdrag AS Nebbestølen 41, 5144 FYLLINGSDALEN Takstoppdrag AS
Gnr 23 - Bnr 203 Vallaskaret 32 Gnr 23 - Bnr 203 Vallaskaret 32
4601 BERGEN 5227 NESTTUN 4601 BERGEN 5227 NESTTUN
TEGNINGER/LOVLIGHET: Beliggenhet
Det er framlagt godkjente/stemplede byggetegninger.
Bad og vaskerom er slå琀琀 sammen i forbindelse med modernisering av bad som ble u琀昀ørt i regi av 琀椀dligere eier. Sentral og a琀琀rak琀椀v beliggenhet i et etablert boligområde i

---

[d106_d106 | Side [1]]
%
«Har bodd her hele livet unntatt siste
Ikke gift 54% 54%
året. Hatt en fantastisk barndom og
ungdomstid.» Separert 16% 9%
Sitat fra en lokalkjent
Enke/Enkemann 5% 4%
Innholdet i nabolagsprofilen er hentet fra ulike datakilder, og feil eller mangler kan forekomme. Vurderinger og sitater er innhentet på web og gir uttrykk for Innholdet i nabolagsprofilen er hentet fra ulike datakilder, og feil eller mangler kan forekomme. Vurderinger og sitater er innhentet på web og gir uttrykk for
hvordan naboene

---

[d106_d106 | Side [1]]
er For øvrige opplysninger vedrørende reguleringsmessige
forhold henvises det 琀椀l Meglerpakken som bes琀椀lles av
meglerforetak i forbindelse med kjøp/salg av eiendommen
Matrikkeldata
Om tomten
Kommune gnr. bnr. fnr. snr. Areal Kilde Eieforhold Tomt:
Tomtearealet er felles for bore琀琀slaget.
4601 BERGEN 23 203 0 0 21825.5 m² BEREGNET AREAL Eiet
Tomten er foruten eiendommens bygningsmasse opparbeidet med
(Ambita)
div interne veier, lekeplass, grøntarealer og div prydbusker/beplantning.
Adresse
Nebbestølen 41

---

[d106_d106 | Side [1]]
r. De aller fleste blir boende i sine boliger i 16 min gange til Sælen Oppveksttun (1‑7 kl.) Ferdigattest utstedes av bygningsmyndighetene basert
mange år eller oppgraderer internt i området. 14 min gange til Ortun skole (8‑10 kl.) på dokumentasjon mottatt fra kontrollansvarlig når et
34 35

## Side 19

OM EIENDOMMEN OM EIENDOMMEN
søknadspliktig tiltak er utført i samsvar med tillatelsen og Fra 01.01.24 er det innført nye regler for måling og ‑ Grunnmur: Fundamentert på antatt faste masser av
øvrige krav

---

[d106_d106 | Side [1]]
 rømningsvei. Lovlighet
e琀琀er kravene i byggteknisk forskri昀琀 på befarings琀椀dspunktet, skal det opplyses om
de琀琀e. Bruksendring som krever godkjenning, og som ikke er søkt bruksendret, Byggetegninger
er ulovlig. Kommunen kan e琀琀er plan- og bygningsloven kapi琀琀el 32
Reglene om bruksendring og brannceller kan være kompliserte. Søk videre faglige forfølge overtredelser. Kommunen kan pålegge deg å avslu琀琀e den Det foreligger godkjente og byggemeldte tegninger, men det er avvik fra disse.
råd om rapporten ikke

---

[d106_d106 | Side [1]]
tiv og familievennlig 2 min gange til Nebbestølen barnehage (0‑5 år)
Lånebetingelser fellesgjeld: Borettslaget har en samlet beliggenhet i et rolig boligområde i Fyllingsdalen. 2 min gange til Minken barnehage (1‑5 år) Eieform: Borettslag
fellesgjeld per 14.01.2026 på kr 67 477 490,‑ fordelt på Leilighetens innglassede balkong er vestvendt, perfekt 4 min gange til Løvås Oppveksttun barnehage (1‑5 år) Objektstype: Andelsleilighet
andelene: for å nyte en solrik dag. Fyllingsdalen er et etablert
boligområde

---

[d106_d106 | Side [1]]
r å nyte en solrik dag. Fyllingsdalen er et etablert
boligområde og har vært under stor utvikling i de senere Barne‑ og ungdomsskoler:
Ferdigattest/ brukstillatelse:
år. Området bærer preg av god boligplanlegging ‑ her 4 min gange til Løvås Oppvekttun skole (1‑7 kl.)
finner man en flott blanding av leiligheter, rekkehus og 16 min gange til Lyshovden Oppveksttun (1‑7 kl.) Det foreligger ferdigattest for boligblokk, datert 15.12.1975.
eneboliger. De aller fleste blir boende i sine boliger i 16 min gange til

---

[d106_d106 | Side [1]]
dte tegninger, men det er avvik fra disse.
råd om rapporten ikke gir deg svar. Den bygningssakkyndige kan ikke vurdere og ulovlige bruken, eventuelt å re琀琀e eller 琀椀lbakeføre rommet 琀椀l godkjent Kommentar:
svare på alle spørsmål, og kan heller ikke vite om kommunen kan gi unntak for bruk.
kravene som gjelder. Vil du vite mer?
Oppdragsnr.: 20286-2531 Befaringsdato: 14.01.2026 Side: 16 av 22 Oppdragsnr.: 20286-2531 Befaringsdato: 14.01.2026 Side: 17 av 22
62 63

## Side 33

Nebbestølen 41, 5144 FYLLINGSDALEN

---

[d106_d106 | Side [1]]
vhenge av personlige visuell observasjon. Rapporten er basert på undersøkelsesnivå 1,
preferanser og markedspris på materialer og tjenesteyter. med noen få unntak: våtrom og rom under terreng.
Dokumenter •Vurdering mot byggeregler I praksis betyr dette at:
Den bygningssakyndige vil vurdere boligen mot hvordan det var
vanlig å bygge og regler som gjaldt på søknadstidspunktet. Noen •befaringen skal begrenses til kun visuelle observasjoner på
Beskrivelse Dato Kommentar Status Sider Vedlagt rom og

---

[d106_d106 | Side [1]]
. slutten av 1990‑tallet/ begynnelsen av 2000‑tallet.
Det gjøres oppmerksom på at dagens planløsning ikke Andre arealer: Interessenter oppfordres til å gjennomgå dette nøye. Taktekking er Brls ansvar.
stemmer overens med de opprinnelige godkjente TBA ‑Terrasser og åpen altan som er tilknyttet boligen. ‑ Vinduer: Isolerglass i hvite pvc karmer. Vinduene ble
tegningene. På de originale tegningene er dagens bad ALH ‑ Areal med lav himlingshøyde måles på samme Selger har ikke bebodd eiendommen og har derfor

---

[d106_d106 | Side [1]]
Oasen Senter med de 昀氀este fasiliteter/service琀椀lbud, samt 昀氀ere dagligvare bu琀椀kker i gangavstand.
琀椀l å regne med å få, og som kan ha betydning for avtalen. De琀琀e innebærer blant annet opplysninger om bebyggelsens Fine turmuligheter med bla Løvstakken, Kanadaskogen og 昀氀ere parkområder.
arealer og eventuell adgang 琀椀l utleie av hele eller deler av bygningsmassen. Megler skal også opplyse om det foreligger Mange idre琀琀sanlegg/fri琀椀ds琀椀lbud som bla Framohallen, Varden idre琀琀sanlegg, Fyllingsdalen

---

[d106_d106 | Side [1]]
ar gitt ufullstendige, uriktige eller misvisende
opplysninger om eiendommen, vil forsikringsselskapet kunne søke hel eller delvis regress for sine utbetalinger eller redusere sitt ansvar helt
eller delvis, jfr. vilkår for boligselgerforsikring punkt 7.1 og forsikringsavtaleloven kapittel 4.
Jeg er orientert om mitt mulige ansvar som selger etter avhendingsloven, eventuelt etter kjøpsloven (aksjeboliger), og om forsikringsgiver sitt
boligselgerforsikringstilbud.
Jeg er klar over at avtale om forsikring er

---

[d106_d106 | Side [1]]
 forsikringen i kraft når kontrakten er signert av begge parter, begrenset til siste 12 måneder før overtakelse.
Forøvrig oppfordrer selger potensielle kjøpere til å undersøke eiendommen grundig, jf avhendigsloven § 3-10 og kjøpsloven § 20
(aksjeboliger).
Gyldig forsikring forutsetter at det for helårs- og fritidsbolig foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere
bolighandel).
Jeg ønsker boligselgerforsikring, og bekrefter å ha mottatt og lest forsikringsvilkårene

---

[d106_d106 | Side [1]]
ndommen ikke er en næringseiendom, at den ikke
selges som ledd i næringsvirksomhet eller mellom ektefeller eller slektninger i rett oppstigende eller nedstigende linje, søsken, eller
mellom personer som bor eller har bodd på boligeiendommen. Gyldig forsikring forutsetter at det for helårs- og fritidsbolig
foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere bolighandel). Forsikringen er ugyldig dersom
den tegnes i strid med forsikringsvilkårene. Jeg er innforstått med at

---

[d106_d106 | Side [1]]
rsikring, og bekrefter å ha mottatt og lest forsikringsvilkårene og informasjonsbrosjyre til selger i
forbindelse med kjøp av boligselgerforsikring. Forsikringen trer i kraft på det tidspunkt det foreligger en budaksept mellom partene,
begrenset til tolv måneder før overtagelse. Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter,
begrenset til siste 12 måneder før overtakelse. Jeg bekrefter med dette at eiendommen ikke er en næringseiendom, at den ikke
selges som ledd i

---

[d106_d106 | Side [1]]
erforsikringstilbud.
Jeg er klar over at avtale om forsikring er bindende. Jeg er også klar over at premietilbudet først kan påberopes når boligen er solgt
(budaksept). Premietilbudet som er gitt av megler er bindende for forsikringsgiver i 6 – seks – måneder fra oppdragsinngåelse med megler.
Etter dette vil premien og forsikringsvilkårene kunne justeres. Når premietilbudet ikke lenger er bindende for forsikringsselskapet må
egenerklæringsskjemaet signeres på nytt og eventuelle endringer påføres. Det vil

---

[d106_d106 | Side [1]]
gsloven § 3‑9. I disse tilfellene
selger. vedlagte tilstands‑ og boligsalgsrapport. Innholdet i enn et forbrukerbud. Når kjøper ikke er forbruker, kan fravikes § 3‑3 andre ledd, og eventuelle arealavvik
salgsoppgaven er basert på selgers informasjon, selges ansvar begrenses ettersom boligen selges «som vurderes etter § 3‑8.
fagkyndig vurdering, samt opplysninger fra offentlige den er», noe som kan være av verdi for selger. Det
Forsikring
registre som kommunen og Kartverket. Det er viktig at understrekes at

---

[d106_d106 | Side [1]]
næringseiendom
etter at boligeiendommen er lagt ut for salg.
ved salg av helårs- og fritidsbolig er det krav til at det foreligger tilstandsrapport i henhold til Forskrift til avhendingslova (tryggere
bolighandel).
Forsikringsselskapet kan ved skriftlig samtykke akseptere tegning av forsikring også i ovennevnte tilfeller.
Dersom forsikringsselskapet ikke har gitt skriftlig samtykke, kan erstatningen bortfalle.
Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter,

---

[d106_d106 | Side [1]]

Med vår boligkjøperforsikring er du i trygge hender 
hvis du oppdager feil eller mangler ved boligen du har 
kjøpt. Forsikringen gir deg tilgang på hjelp fra advokater, Hva koster forsikringen?
saksbehandlere og jurister som er spesialiserte på Forsikringspremien trekkes i oppgjøret.

---

[d106_d106 | Side [1]]
selgers vurdering Ved slike kjøp selges eiendommen «som den er», og
Overtakelse
Opplysninger om boligens størrelse og utforming, både På grunn av ulike ansvarsforhold kan selger velge å selgers ansvar er begrenset til det som følger direkte av
Tidspunkt for overtakelse avtales mellom kjøper og innvendig og utvendig, bygger på informasjon hentet fra prioritere bud fra ikke‑forbrukere, selv om budet er lavere avtalen, jf. avhendingsloven § 3‑9. I disse tilfellene
selger. vedlagte tilstands‑ og

---

[d106_d106 | Side [1]]
gnes i strid med forsikringsvilkårene. Jeg er innforstått med at eiendomsmegleren ikke har fullmakt til å gjøre unntak fra
ovennevnte begrensninger. Jeg er oppmerksom på at 8% av total forsikringspremie er honorar til Söderberg & Partners.
Jeg ønsker ikke boligselgerforsikring, men megler har tilbudt meg å kjøpe slik forsikring.
Jeg kan ikke kjøpe boligselgerforsikring ihht vilkår.
Initialer selger: TAM, EMH, RJM 2
70006230
:ecnerefer
tnemucoD
Tilstandsrapport
Leilighet i boligblokk
Nebbestølen 41, 5144

---

[d106_d106 | Side [1]]
tre som kommunen og Kartverket. Det er viktig at understrekes at selger står fritt til å velge hvilket bud som Kjøperens plikt til å foreta grundige undersøkelser gjelder
Boligselgerforsikring: Selger har tegnet kjøper setter seg grundig inn i alle salgsdokumentene, aksepteres, og er ikke forpliktet til å velge det høyeste. også fullt ut for kjøpere som ikke omfattes av
boligselgerforsikring som dekker selgers ansvar etter herunder salgsoppgave, tilstandsrapport og selgers

---

[d106_d106 | Side [1]]
følger kjøper påregne, og dette vil normalt ikke gi grunnlag for avhendingsloven.
eiendomstransaksjonen. Kjøpekontrakten kan besiktiges normalt med i handelen, med mindre det foreligger en reklamasjon eller prisavslag.
hos eiendomsmegler før bud inngis. Kontakt særskilt avtale mellom partene om noe annet, jf. Ved beregning av krav om prisavslag eller erstatning må
eiendomsmegler for spørsmål. avhendingsloven § 3‑5. Avtalerettslig kjøper selv dekke kostnader med inntil kr 10 000 (som en
Partenes rettigheter

---

[d106_d106 | Side [1]]
 ansvar etter herunder salgsoppgave, tilstandsrapport og selgers forbrukerdefinisjonen.
avhendingsloven begrenset oppad kr. 20 000 000,‑. egenerklæring. Kjøper anses for å være kjent med Alle budgivere må ved inngivelse av bud opplyse om de
Egenerklæringsskjema er vedlagt salgsoppgaven og forhold som er tydelig beskrevet i salgsdokumentene, opptrer som forbruker eller som næringsdrivende/ person
interessenter oppfordres til å gjennomgå denne før bud slike forhold kan ikke senere gjøres gjeldende som en som

---

[d106_d106 | Side [1]]
rdigattest for For øvrig gjelder NEF sin standardliste "Oversikt over skyvedør ikke kan lukkes igjen.
ytterligere informasjon. løsøre og tilbehør" med mindre annet fremkommer av All informasjon i tilstandsrapporten anses som kjent for ‑ Vannledninger på grunn av alder.
salgsoppgaven. Listen er vedlagt. kjøper, og det vil ikke være mulig å reklamere på forhold ‑ Avløpsrør på grunn av alder.
som er nevnt i rapporten. Spesielt forhold som er vurdert ‑ Varmtvannstank på grunn av bul i deksel

---

[d106_d106 | Side [1]]
 3‑4. bruk, vil kunne ha tegn til slitasje og eventuelle skader. areal på minst 2 % og samtidig minst 1 kvadratmeter, kan
Kjøper og selger er forpliktet til å undertegne standard Fastmonterte eller spesialtilpassede installasjoner og Slik normal bruksslitasje og behov for vedlikehold må dette utløse rett til kompensasjon etter § 3‑3 i
kjøpekontrakt utarbeidet av Emera i forbindelse med innredning som anses som varig tilknyttet boligen, følger kjøper påregne, og dette vil normalt ikke gi grunnlag for

---

[d106_d106 | Side [1]]
IGE OPPLYSNINGER:
4
Det er fortsa琀琀 eiendomsmegler som har plikt 琀椀l å sørge for at
Ny strømmåler i september 2017. boligkjøperen får opplysningene han eller hun har grunn
琀椀l å regne med å få, og som kan ha betydning for avtalen. 2
El.oppvarming:
De琀琀e innebærer blant annet opplysninger om bebyggelsens
Varmekabler på bad og innglasset balkong. Varmekabler i
arealer og eventuell adgang 琀椀l utleie av hele eller deler av
innglasset balkong er fra 2018. 0 bygningsmassen. Megler skal også opplyse om det

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R01",
      "description": "Selger har ikke bebodd eiendommen og mangler spesifikk kunnskap om den. Dette øker risikoen for skjulte feil og mangler som ikke er opplyst om.",
      "evidence": [
        "Selger har ikke bebodd eiendommen og har derfor ikke spesifikk kunnskap om den. Det kan derfor være skader og andre forhold ved eiendommen som ikke er spesifikt opplyst.",
        "Kjøper oppfordres derfor til å foreta en særlig grundig undersøkelse av eiendommen, gjerne med bistand av teknisk sakkyndig."
      ],
      "source_documents": [
        "d106_d106"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R02",
      "description": "Høy fellesgjeld i borettslaget. Andel fellesgjeld er kr 438 165, og borettslagets samlede fellesgjeld er ca. kr 67–68 millioner. Dette medfører betydelig finansiell risiko for kjøper gjennom høye felleskostnader og renterisiko.",
      "evidence": [
        "Lånebetingelser fellesgjeld: Borettslaget har en samlet fellesgjeld per 14.01.2026 på kr 67 477 490,‑ fordelt på andelene.",
        "Andel fellesgjeld: 438 165",
        "2265 Andre pantelån 'IN-light' 68 248 462",
        "Innkrevde finanskostnader 4 581 192 (2024)"
      ],
      "source_documents": [
        "d106_d106"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R03",
      "description": "Styret vurderer utbedring av tak, men ingenting er bestemt. Dette kan medføre økning i felleskostnadene.",
      "evidence": [
        "Styret opplyser om at de vurderer utbedring av tak. Det er ingenting som er bestemt. Dette kan medføre økning i felleskostnadene.",
        "Felleskostnadene kan bli besluttet økt."
      ],
      "source_documents": [
        "d106_d106"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R04",
      "description": "Taktekking er fra slutten av 1990-tallet/begynnelsen av 2000-tallet og er ikke besiktiget. Flat takkonstruksjon med takbelegg utgjør en risiko for lekkasjer og kostbare utbedringer.",
      "evidence": [
        "Flat takkonstruksjon. Tekket med takbelegg. Taket er ikke besiktiget. Taktekking er fra slutten av 1990-tallet/begynnelsen av 2000-tallet.",
        "Taktekking er Brls ansvar."
      ],
      "source_documents": [
        "d106_d106"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R05",
      "description": "Avvik mellom dagens planløsning og godkjente byggetegninger. Bad og vaskerom er slått sammen uten at dette er i samsvar med originale tegninger, noe som kan innebære ulovlig bruksendring.",
      "evidence": [
        "Det gjøres oppmerksom på at dagens planløsning ikke stemmer overens med de opprinnelige godkjente tegningene.",
        "På de originale tegningene er dagens bad tegnet inn som bad og vaskerom.",
        "Det foreligger godkjente og byggemeldte tegninger, men det er avvik fra disse.",
        "Bad og vaskerom er slått sammen i forbindelse med modernisering av bad som ble utført i regi av tidligere eier."
      ],
      "source_documents": [
        "d106_d106"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.93
    },
    {
      "risk_id": "R06",
      "description": "Badet er utdatert og modernisert på 1980/1990-tallet av tidligere eier. Det er påvist bom i gulvfliser, delvis løsnet fliselim og oppsprukket fuge. Støpejernsluk bør skiftes ved modernisering.",
      "evidence": [
        "Badet ble modernisert og utvidet på 1980/1990-tallet i regi av tidligere eier. Badet må anses å være utdatert.",
        "Bom registrert i flere gulvfliser. Enkelte gulvfliser v/balkongdør virker å ha delvis løsnet fra fliselim.",
        "Delvis oppsprukket fuge mellom gulvfliser pga. bevegelse i flis.",
        "Når bad/våtrom moderniseres bør støpejernsluk skiftes."
      ],
      "source_documents": [
        "d106_d106"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R07",
      "description": "Innvendige avløpsledninger har passert mer enn halvparten av forventet brukstid. Hovedstamme/avløpsrør er skjult og tilstandsvurdering må utføres av spesialfirma.",
      "evidence": [
        "Mer enn halvparten av forventet brukstid er passert på innvendige avløpsledninger.",
        "Hovedstamme/avløpsrør er skjult og tilstandsvurdering må utføres av spesialfirma.",
        "Avløpsrør på grunn av alder."
      ],
      "source_documents": [
        "d106_d106"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R08",
      "description": "Vannledninger og varmtvannstank er vurdert å ha risiko på grunn av alder. Varmtvannstanken har bul i deksel.",
      "evidence": [
        "Vannledninger på grunn av alder.",
        "Varmtvannstank på grunn av bul i deksel."
      ],
      "source_documents": [
        "d106_d106"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R09",
      "description": "Ventilasjon er mangelfull. Kjøkkenet har ventilator mot yttervegg, noe som kan føre til matos i innglasset balkong ved matlaging.",
      "evidence": [
        "Det kan føre til matos i innglasset balkong v/matlaging.",
        "Ventilasjonsløsning bør utbedres v/behov."
      ],
      "source_documents": [
        "d106_d106"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R10",
      "description": "Skjevheter i gulv er registrert, spesielt i entre/gang. Skjevheter på 5–25 mm er registrert, og tilsvarende skjevheter er funnet i flere leiligheter i borettslaget.",
      "evidence": [
        "05 mm - 25 mm skjevheter registrert v/kontroll. Det er spesielt skjevt i bredderetning av leiligheten.",
        "De største skjevhetene ble registrert i entre/gang.",
        "Skjevheter er registrert i flere tilsvarende leiligheter i Brl."
      ],
      "source_documents": [
        "d106_d106"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.87
    },
    {
      "risk_id": "R11",
      "description": "Vinduer er fra 1992/1993 (unntatt stuevindu fra 2018) og har passert mer enn halvparten av forventet brukstid. Eldre vinduer har normalt dårligere isoleringsevne og tetting.",
      "evidence": [
        "Vinduene ble skiftet i 1992/1993, unntatt stuevindu.",
        "Mer enn halvparten av forventet brukstid er oppbrukt.",
        "Eldre dører har normalt sett dårligere isoleringsevne og dårligere tetting rundt karmer enn nyere dører.",
        "Vinduer har en normal brukstid på 20 til 60 år."
      ],
      "source_documents": [
        "d106_d106"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R12",
      "description": "Skyvedør kan ikke lukkes igjen på grunn av parkett. Dette er en funksjonsfeil som bør utbedres.",
      "evidence": [
        "Skyvedør kan ikke lukkes igjen pga parkett.",
        "Innerdørene bærer preg av elde/slitasje."
      ],
      "source_documents": [
        "d106_d106"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R13",
      "description": "Det er ikke foretatt radonmålinger, og bygget er ikke utført med radonsperre. Dette innebærer en potensiell helserisiko for beboere.",
      "evidence": [
        "Det er ikke foretatt radonmålinger, og bygget er heller ikke utført med radonsperre."
      ],
      "source_documents": [
        "d106_d106"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R14",
      "description": "Borettslaget har legalpant på inntil 2G (to ganger folketrygdens grunnbeløp) i andelen som sikkerhet for felleskostnader. Dette gir borettslaget prioritet over tinglyste lån, noe som er en risiko for kjøper og eventuelle långivere.",
      "evidence": [
        "Borettslaget har legalpant på inntil 2G som sikkerhet for betaling av felleskostnader.",
        "Borettslaget har prioritet over tinglyste lån når det gjelder betaling av felleskostnader, og kan kreve inn pengene før andre kreditorer, selv om de har lån registrert på andelen.",
        "Borettslaget har legalpanterett i andelen for krav på dekning av felleskostnader og andre krav fra borettslaget, på inntil 2 ganger folketrygdens grunnbeløp."
      ],
      "source_documents": [
        "d106_d106"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R15",
      "description": "Risiko for økte felleskostnader dersom andre andelshavere misligholder sine forpliktelser, eller dersom borettslaget sitter på fraflyttede/usolgte andeler. De øvrige andelseierne må da dekke underskuddet.",
      "evidence": [
        "Manglende innbetaling av fellesutgiftene som følge av andre andelshaveres mislighold, eller dersom borettslaget sitter på fraflyttede og/eller usolgte andeler, må dekkes av de øvrige andelseierne."
      ],
      "source_documents": [
        "d106_d106"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R16",
      "description": "Grunnforhold er ikke kjent utover at bygget er fundamentert på antatt faste masser av sprengstein/grov pukk på fjell. Drenering har generelt begrenset levetid fra byggedato på mellom 20 til 60 år.",
      "evidence": [
        "Grunnmur: Fundamentert på antatt faste masser av sprengstein/grov pukk på fjell. Videre grunnforhold er ikke kjent.",
        "Drenering har generelt sett begrenset levetid fra byggedato på mellom 20 til 60 år avhengig av grunnforhold."
      ],
      "source_documents": [
        "d106_d106"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.78
    },
    {
      "risk_id": "R17",
      "description": "Energimerke D (gul) indikerer relativt høyt energiforbruk. Boligen har kun elektrisk oppvarming og varmekabler, noe som kan gi høye strømkostnader.",
      "evidence": [
        "Energikarakter: D",
        "Energifarge: Gul",
        "Elektrisk oppvarming.",
        "Varmekabler på bad og innglasset balkong."
      ],
      "source_documents": [
        "d106_d106"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R18",
      "description": "Begrenset adgang til utleie i borettslag. Boligen kan kun leies ut i inntil 3 år med styrets godkjenning, noe som begrenser kjøpers fleksibilitet.",
      "evidence": [
        "Adgang til utleie: Det er begrenset adgang til å leie ut bolig i borettslag. Med styrets godkjenning og under visse vilkår kan boligen leies ut i inntil 3 år, jf. borettslagsloven § 5‑3 til § 5‑10."
      ],
      "source_documents": [
        "d106_d106"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R19",
      "description": "Hensynssoner på eiendommen inkluderer bevaring av kulturmiljø (91,7% dekningsgrad) og flomfare (6,3% dekningsgrad). Dette kan begrense fremtidige bygningstiltak og innebære risiko ved ekstremvær.",
      "evidence": [
        "Bevaring kulturmiljø, dekningsgrad 91,7%",
        "Flomfare, dekningsgrad 6,3%"
      ],
      "source_documents": [
        "d106_d106"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.78
    },
    {
      "risk_id": "R20",
      "description": "Stikkledninger fra eiendommen til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler borettslaget. Dette kan medføre uforutsette vedlikeholdskostnader.",
      "evidence": [
        "Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler borettslaget."
      ],
      "source_documents": [
        "d106_d106"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R21",
      "description": "Reguleringsplan under arbeid i nærheten (PlanID 71340000, Nebbestølen boliger, berøringsgrad 10,6%) kan påvirke eiendommen og nærområdet fremover.",
      "evidence": [
        "Reguleringsplaner under arbeid: PlanID: 71340000. Fyllingsdalen. Gnr 22 Bnr 20, Nebbestølen, boliger. Berøringsgrad 10,6%"
      ],
      "source_documents": [
        "d106_d106"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.72
    },
    {
      "risk_id": "R22",
      "description": "Borettslaget har høye finanskostnader og avdragsfrihet på lån. Renter utgjorde kr 3 866 430 i 2024, og avdragsfriheten innebærer at fremtidige avdrag vil øke de månedlige felleskostnadene betydelig.",
      "evidence": [
        "8195 - Renter 3 866 430,- (2024)",
        "2265 - Avdrag 703 029,- (2024)",
        "Ved avdragsfrihet viser noten forventet økning ved første avdrag, beregnet i hht. dagens rentenivå.",
        "Innkrevde finanskostnader 4 581 192 (2024)"
      ],
      "source_documents": [
        "d106_d106"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R23",
      "description": "Bygget er fra 1975 og har gjennomgått rehabilitering i 1992/93, men store deler av bygningsmassen nærmer seg eller har passert forventet levetid. Dette gir generell risiko for økte vedlikeholdskostnader i borettslaget.",
      "evidence": [
        "Det foreligger ferdigattest for boligblokk, datert 15.12.1975.",
        "I 1992/93 ble Minken Borettslag fullt rehabilitert med bla isolering, nye fasader, nye vinduer/balkongdører og ny entredør.",
        "Reparasjon og vedlikehold bygninger 787 920 (2024)",
        "Bygningen og leilighetens alder tilsier at det ved ombygging eller modernisering kan fremkomme feil og mangler."
      ],
      "source_documents": [
        "d106_d106"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    }
  ],
  "re_retrieval_queries": [
    "avdragsfrihet fellesgjeld Minken borettslag økning felleskostnader",
    "tilstandsgrad TG3 alvorlige avvik Nebbestølen 41",
    "el-anlegg elektrisk anlegg tilstand alder kontroll",
    "ferdigattest brukstillatelse ulovlig bruksendring bad vaskerom Bergen kommune",
    "drenering levetid fundamentering grunnmur tilstand",
    "forsikring boligselgerforsikring selger ansvar avhendingsloven",
    "kommuneplan KPA 2027 Fyllingsdalen regulering fremtidig utvikling"
  ],
  "reasoning": "\nGjennomgang av alle 21 opprinnelige risikoer mot dokumentevidensen:\n\n**Bekreftede og justerte risikoer (R01–R21):**\n\n- R01 (Selger ikke bebodd): Meget sterk evidens, direkte sitat fra tilleggskommentar i tilstandsrapport. Confidence justeres opp til 0.97.\n- R02 (Høy fellesgjeld): Sterk evidens fra både salgsoppgave og regnskap. Fellesgjeld kr 67,5M bekreftet per 14.01.2026, andel kr 438 165. Confidence justeres opp til 0.97.\n- R03 (Takutbedring vurderes): Direkte sitat bekreftet. Confidence justeres opp til 0.95.\n- R04 (Gammelt tak ikke besiktiget): Direkte sitat bekreftet. Confidence justeres opp til 0.92.\n- R05 (Avvik byggetegninger): Sterk evidens fra tilstandsrapport og lovlighetsavsnitt. Confidence justeres opp til 0.93.\n- R06 (Utdatert bad): Godt dokumentert med konkrete funn. Confidence beholdes 0.88.\n- R07 (Avløpsledninger alder): Direkte evidens bekreftet. Confidence justeres opp til 0.92.\n- R08 (Vannledninger/varmtvannstank): Evidens bekreftet, men noe kortfattet. Confidence beholdes 0.85.\n- R09 (Ventilasjon mangelfull): Evidens bekreftet. Confidence beholdes 0.80.\n- R10 (Gulvskjevheter): Direkte evidens med målte verdier. Confidence justeres opp til 0.87.\n- R11 (Eldre vinduer): Evidens bekreftet med årstall og brukstid. Confidence beholdes 0.82.\n- R12 (Skyvedør funksjonsfeil): Direkte sitat bekreftet. Confidence justeres opp til 0.85.\n- R13 (Radon): Direkte sitat bekreftet. Confidence justeres opp til 0.90.\n- R14 (Legalpant 2G): Sterk evidens, gjentatt i flere dokumentavsnitt. Confidence beholdes 0.90.\n- R15 (Mislighold andre andelshavere): Direkte sitat bekreftet. Confidence beholdes 0.85.\n- R16 (Grunnforhold/drenering): Evidens bekreftet, men begrenset informasjon. Confidence beholdes 0.78.\n- R17 (Energimerke D): Evidens bekreftet. Confidence beholdes 0.80.\n- R18 (Begrenset utleie): Direkte sitat bekreftet. Confidence beholdes 0.88.\n- R19 (Hensynssoner): Evidens bekreftet. Confidence beholdes 0.78.\n- R20 (Private stikkledninger): Direkte sitat bekreftet. Confidence beholdes 0.80.\n- R21 (Reguleringsplan under arbeid): Evidens bekreftet, men usikker påvirkning. Confidence beholdes 0.72.\n\n**Nye risikoer identifisert:**\n\n- R22 (Avdragsfrihet på lån): Dokumentet nevner eksplisitt at avdragsfrihet medfører forventet økning ved første avdrag. Renter på kr 3,87M i 2024 er høye. Dette er en vesentlig risiko som ikke var eksplisitt identifisert som egen risiko, men som er delvis overlappende med R02. Likevel fortjener den egen omtale pga. avdragsfrihetsaspektet. Confidence 0.88.\n\n- R23 (Generell aldersrisiko bygningsmasse): Bygget fra 1975, rehabilitert 1992/93. Store vedlikeholdskostnader i regnskapet (kr 787 920 i 2024 for bygninger alene). Generell risiko for økte kostnader fremover. Confidence 0.85.\n\n**Manglende risikoer som bør undersøkes nærmere:**\n- El-anleggets tilstand og alder er ikke eksplisitt vurdert i de fremlagte risikoene, men dokumentet nevner at det ikke er kontrollert.\n- Kommuneplan KPA 2027 er nevnt som plan i nærheten – bør undersøkes nærmere.\n- Ferdigattest-problematikk knyttet til bruksendring av bad bør undersøkes mot kommunen.\n"
}

## Raw Response
```json
{
  "id": "msg_01RvTfuU2zCSt8FqjhcL27ze",
  "container": null,
  "content": [
    {
      "id": "toolu_015CcyWPfNXqPYtVSAY3Ltoj",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R01",
            "description": "Selger har ikke bebodd eiendommen og mangler spesifikk kunnskap om den. Dette øker risikoen for skjulte feil og mangler som ikke er opplyst om.",
            "evidence": [
              "Selger har ikke bebodd eiendommen og har derfor ikke spesifikk kunnskap om den. Det kan derfor være skader og andre forhold ved eiendommen som ikke er spesifikt opplyst.",
              "Kjøper oppfordres derfor til å foreta en særlig grundig undersøkelse av eiendommen, gjerne med bistand av teknisk sakkyndig."
            ],
            "source_documents": [
              "d106_d106"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R02",
            "description": "Høy fellesgjeld i borettslaget. Andel fellesgjeld er kr 438 165, og borettslagets samlede fellesgjeld er ca. kr 67–68 millioner. Dette medfører betydelig finansiell risiko for kjøper gjennom høye felleskostnader og renterisiko.",
            "evidence": [
              "Lånebetingelser fellesgjeld: Borettslaget har en samlet fellesgjeld per 14.01.2026 på kr 67 477 490,‑ fordelt på andelene.",
              "Andel fellesgjeld: 438 165",
              "2265 Andre pantelån 'IN-light' 68 248 462",
              "Innkrevde finanskostnader 4 581 192 (2024)"
            ],
            "source_documents": [
              "d106_d106"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R03",
            "description": "Styret vurderer utbedring av tak, men ingenting er bestemt. Dette kan medføre økning i felleskostnadene.",
            "evidence": [
              "Styret opplyser om at de vurderer utbedring av tak. Det er ingenting som er bestemt. Dette kan medføre økning i felleskostnadene.",
              "Felleskostnadene kan bli besluttet økt."
            ],
            "source_documents": [
              "d106_d106"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R04",
            "description": "Taktekking er fra slutten av 1990-tallet/begynnelsen av 2000-tallet og er ikke besiktiget. Flat takkonstruksjon med takbelegg utgjør en risiko for lekkasjer og kostbare utbedringer.",
            "evidence": [
              "Flat takkonstruksjon. Tekket med takbelegg. Taket er ikke besiktiget. Taktekking er fra slutten av 1990-tallet/begynnelsen av 2000-tallet.",
              "Taktekking er Brls ansvar."
            ],
            "source_documents": [
              "d106_d106"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R05",
            "description": "Avvik mellom dagens planløsning og godkjente byggetegninger. Bad og vaskerom er slått sammen uten at dette er i samsvar med originale tegninger, noe som kan innebære ulovlig bruksendring.",
            "evidence": [
              "Det gjøres oppmerksom på at dagens planløsning ikke stemmer overens med de opprinnelige godkjente tegningene.",
              "På de originale tegningene er dagens bad tegnet inn som bad og vaskerom.",
              "Det foreligger godkjente og byggemeldte tegninger, men det er avvik fra disse.",
              "Bad og vaskerom er slått sammen i forbindelse med modernisering av bad som ble utført i regi av tidligere eier."
            ],
            "source_documents": [
              "d106_d106"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.93
          },
          {
            "risk_id": "R06",
            "description": "Badet er utdatert og modernisert på 1980/1990-tallet av tidligere eier. Det er påvist bom i gulvfliser, delvis løsnet fliselim og oppsprukket fuge. Støpejernsluk bør skiftes ved modernisering.",
            "evidence": [
              "Badet ble modernisert og utvidet på 1980/1990-tallet i regi av tidligere eier. Badet må anses å være utdatert.",
              "Bom registrert i flere gulvfliser. Enkelte gulvfliser v/balkongdør virker å ha delvis løsnet fra fliselim.",
              "Delvis oppsprukket fuge mellom gulvfliser pga. bevegelse i flis.",
              "Når bad/våtrom moderniseres bør støpejernsluk skiftes."
            ],
            "source_documents": [
              "d106_d106"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R07",
            "description": "Innvendige avløpsledninger har passert mer enn halvparten av forventet brukstid. Hovedstamme/avløpsrør er skjult og tilstandsvurdering må utføres av spesialfirma.",
            "evidence": [
              "Mer enn halvparten av forventet brukstid er passert på innvendige avløpsledninger.",
              "Hovedstamme/avløpsrør er skjult og tilstandsvurdering må utføres av spesialfirma.",
              "Avløpsrør på grunn av alder."
            ],
            "source_documents": [
              "d106_d106"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R08",
            "description": "Vannledninger og varmtvannstank er vurdert å ha risiko på grunn av alder. Varmtvannstanken har bul i deksel.",
            "evidence": [
              "Vannledninger på grunn av alder.",
              "Varmtvannstank på grunn av bul i deksel."
            ],
            "source_documents": [
              "d106_d106"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R09",
            "description": "Ventilasjon er mangelfull. Kjøkkenet har ventilator mot yttervegg, noe som kan føre til matos i innglasset balkong ved matlaging.",
            "evidence": [
              "Det kan føre til matos i innglasset balkong v/matlaging.",
              "Ventilasjonsløsning bør utbedres v/behov."
            ],
            "source_documents": [
              "d106_d106"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R10",
            "description": "Skjevheter i gulv er registrert, spesielt i entre/gang. Skjevheter på 5–25 mm er registrert, og tilsvarende skjevheter er funnet i flere leiligheter i borettslaget.",
            "evidence": [
              "05 mm - 25 mm skjevheter registrert v/kontroll. Det er spesielt skjevt i bredderetning av leiligheten.",
              "De største skjevhetene ble registrert i entre/gang.",
              "Skjevheter er registrert i flere tilsvarende leiligheter i Brl."
            ],
            "source_documents": [
              "d106_d106"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.87
          },
          {
            "risk_id": "R11",
            "description": "Vinduer er fra 1992/1993 (unntatt stuevindu fra 2018) og har passert mer enn halvparten av forventet brukstid. Eldre vinduer har normalt dårligere isoleringsevne og tetting.",
            "evidence": [
              "Vinduene ble skiftet i 1992/1993, unntatt stuevindu.",
              "Mer enn halvparten av forventet brukstid er oppbrukt.",
              "Eldre dører har normalt sett dårligere isoleringsevne og dårligere tetting rundt karmer enn nyere dører.",
              "Vinduer har en normal brukstid på 20 til 60 år."
            ],
            "source_documents": [
              "d106_d106"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R12",
            "description": "Skyvedør kan ikke lukkes igjen på grunn av parkett. Dette er en funksjonsfeil som bør utbedres.",
            "evidence": [
              "Skyvedør kan ikke lukkes igjen pga parkett.",
              "Innerdørene bærer preg av elde/slitasje."
            ],
            "source_documents": [
              "d106_d106"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R13",
            "description": "Det er ikke foretatt radonmålinger, og bygget er ikke utført med radonsperre. Dette innebærer en potensiell helserisiko for beboere.",
            "evidence": [
              "Det er ikke foretatt radonmålinger, og bygget er heller ikke utført med radonsperre."
            ],
            "source_documents": [
              "d106_d106"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R14",
            "description": "Borettslaget har legalpant på inntil 2G (to ganger folketrygdens grunnbeløp) i andelen som sikkerhet for felleskostnader. Dette gir borettslaget prioritet over tinglyste lån, noe som er en risiko for kjøper og eventuelle långivere.",
            "evidence": [
              "Borettslaget har legalpant på inntil 2G som sikkerhet for betaling av felleskostnader.",
              "Borettslaget har prioritet over tinglyste lån når det gjelder betaling av felleskostnader, og kan kreve inn pengene før andre kreditorer, selv om de har lån registrert på andelen.",
              "Borettslaget har legalpanterett i andelen for krav på dekning av felleskostnader og andre krav fra borettslaget, på inntil 2 ganger folketrygdens grunnbeløp."
            ],
            "source_documents": [
              "d106_d106"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R15",
            "description": "Risiko for økte felleskostnader dersom andre andelshavere misligholder sine forpliktelser, eller dersom borettslaget sitter på fraflyttede/usolgte andeler. De øvrige andelseierne må da dekke underskuddet.",
            "evidence": [
              "Manglende innbetaling av fellesutgiftene som følge av andre andelshaveres mislighold, eller dersom borettslaget sitter på fraflyttede og/eller usolgte andeler, må dekkes av de øvrige andelseierne."
            ],
            "source_documents": [
              "d106_d106"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R16",
            "description": "Grunnforhold er ikke kjent utover at bygget er fundamentert på antatt faste masser av sprengstein/grov pukk på fjell. Drenering har generelt begrenset levetid fra byggedato på mellom 20 til 60 år.",
            "evidence": [
              "Grunnmur: Fundamentert på antatt faste masser av sprengstein/grov pukk på fjell. Videre grunnforhold er ikke kjent.",
              "Drenering har generelt sett begrenset levetid fra byggedato på mellom 20 til 60 år avhengig av grunnforhold."
            ],
            "source_documents": [
              "d106_d106"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.78
          },
          {
            "risk_id": "R17",
            "description": "Energimerke D (gul) indikerer relativt høyt energiforbruk. Boligen har kun elektrisk oppvarming og varmekabler, noe som kan gi høye strømkostnader.",
            "evidence": [
              "Energikarakter: D",
              "Energifarge: Gul",
              "Elektrisk oppvarming.",
              "Varmekabler på bad og innglasset balkong."
            ],
            "source_documents": [
              "d106_d106"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R18",
            "description": "Begrenset adgang til utleie i borettslag. Boligen kan kun leies ut i inntil 3 år med styrets godkjenning, noe som begrenser kjøpers fleksibilitet.",
            "evidence": [
              "Adgang til utleie: Det er begrenset adgang til å leie ut bolig i borettslag. Med styrets godkjenning og under visse vilkår kan boligen leies ut i inntil 3 år, jf. borettslagsloven § 5‑3 til § 5‑10."
            ],
            "source_documents": [
              "d106_d106"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R19",
            "description": "Hensynssoner på eiendommen inkluderer bevaring av kulturmiljø (91,7% dekningsgrad) og flomfare (6,3% dekningsgrad). Dette kan begrense fremtidige bygningstiltak og innebære risiko ved ekstremvær.",
            "evidence": [
              "Bevaring kulturmiljø, dekningsgrad 91,7%",
              "Flomfare, dekningsgrad 6,3%"
            ],
            "source_documents": [
              "d106_d106"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.78
          },
          {
            "risk_id": "R20",
            "description": "Stikkledninger fra eiendommen til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler borettslaget. Dette kan medføre uforutsette vedlikeholdskostnader.",
            "evidence": [
              "Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler borettslaget."
            ],
            "source_documents": [
              "d106_d106"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R21",
            "description": "Reguleringsplan under arbeid i nærheten (PlanID 71340000, Nebbestølen boliger, berøringsgrad 10,6%) kan påvirke eiendommen og nærområdet fremover.",
            "evidence": [
              "Reguleringsplaner under arbeid: PlanID: 71340000. Fyllingsdalen. Gnr 22 Bnr 20, Nebbestølen, boliger. Berøringsgrad 10,6%"
            ],
            "source_documents": [
              "d106_d106"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.72
          },
          {
            "risk_id": "R22",
            "description": "Borettslaget har høye finanskostnader og avdragsfrihet på lån. Renter utgjorde kr 3 866 430 i 2024, og avdragsfriheten innebærer at fremtidige avdrag vil øke de månedlige felleskostnadene betydelig.",
            "evidence": [
              "8195 - Renter 3 866 430,- (2024)",
              "2265 - Avdrag 703 029,- (2024)",
              "Ved avdragsfrihet viser noten forventet økning ved første avdrag, beregnet i hht. dagens rentenivå.",
              "Innkrevde finanskostnader 4 581 192 (2024)"
            ],
            "source_documents": [
              "d106_d106"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R23",
            "description": "Bygget er fra 1975 og har gjennomgått rehabilitering i 1992/93, men store deler av bygningsmassen nærmer seg eller har passert forventet levetid. Dette gir generell risiko for økte vedlikeholdskostnader i borettslaget.",
            "evidence": [
              "Det foreligger ferdigattest for boligblokk, datert 15.12.1975.",
              "I 1992/93 ble Minken Borettslag fullt rehabilitert med bla isolering, nye fasader, nye vinduer/balkongdører og ny entredør.",
              "Reparasjon og vedlikehold bygninger 787 920 (2024)",
              "Bygningen og leilighetens alder tilsier at det ved ombygging eller modernisering kan fremkomme feil og mangler."
            ],
            "source_documents": [
              "d106_d106"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          }
        ],
        "re_retrieval_queries": [
          "avdragsfrihet fellesgjeld Minken borettslag økning felleskostnader",
          "tilstandsgrad TG3 alvorlige avvik Nebbestølen 41",
          "el-anlegg elektrisk anlegg tilstand alder kontroll",
          "ferdigattest brukstillatelse ulovlig bruksendring bad vaskerom Bergen kommune",
          "drenering levetid fundamentering grunnmur tilstand",
          "forsikring boligselgerforsikring selger ansvar avhendingsloven",
          "kommuneplan KPA 2027 Fyllingsdalen regulering fremtidig utvikling"
        ],
        "reasoning": "\nGjennomgang av alle 21 opprinnelige risikoer mot dokumentevidensen:\n\n**Bekreftede og justerte risikoer (R01–R21):**\n\n- R01 (Selger ikke bebodd): Meget sterk evidens, direkte sitat fra tilleggskommentar i tilstandsrapport. Confidence justeres opp til 0.97.\n- R02 (Høy fellesgjeld): Sterk evidens fra både salgsoppgave og regnskap. Fellesgjeld kr 67,5M bekreftet per 14.01.2026, andel kr 438 165. Confidence justeres opp til 0.97.\n- R03 (Takutbedring vurderes): Direkte sitat bekreftet. Confidence justeres opp til 0.95.\n- R04 (Gammelt tak ikke besiktiget): Direkte sitat bekreftet. Confidence justeres opp til 0.92.\n- R05 (Avvik byggetegninger): Sterk evidens fra tilstandsrapport og lovlighetsavsnitt. Confidence justeres opp til 0.93.\n- R06 (Utdatert bad): Godt dokumentert med konkrete funn. Confidence beholdes 0.88.\n- R07 (Avløpsledninger alder): Direkte evidens bekreftet. Confidence justeres opp til 0.92.\n- R08 (Vannledninger/varmtvannstank): Evidens bekreftet, men noe kortfattet. Confidence beholdes 0.85.\n- R09 (Ventilasjon mangelfull): Evidens bekreftet. Confidence beholdes 0.80.\n- R10 (Gulvskjevheter): Direkte evidens med målte verdier. Confidence justeres opp til 0.87.\n- R11 (Eldre vinduer): Evidens bekreftet med årstall og brukstid. Confidence beholdes 0.82.\n- R12 (Skyvedør funksjonsfeil): Direkte sitat bekreftet. Confidence justeres opp til 0.85.\n- R13 (Radon): Direkte sitat bekreftet. Confidence justeres opp til 0.90.\n- R14 (Legalpant 2G): Sterk evidens, gjentatt i flere dokumentavsnitt. Confidence beholdes 0.90.\n- R15 (Mislighold andre andelshavere): Direkte sitat bekreftet. Confidence beholdes 0.85.\n- R16 (Grunnforhold/drenering): Evidens bekreftet, men begrenset informasjon. Confidence beholdes 0.78.\n- R17 (Energimerke D): Evidens bekreftet. Confidence beholdes 0.80.\n- R18 (Begrenset utleie): Direkte sitat bekreftet. Confidence beholdes 0.88.\n- R19 (Hensynssoner): Evidens bekreftet. Confidence beholdes 0.78.\n- R20 (Private stikkledninger): Direkte sitat bekreftet. Confidence beholdes 0.80.\n- R21 (Reguleringsplan under arbeid): Evidens bekreftet, men usikker påvirkning. Confidence beholdes 0.72.\n\n**Nye risikoer identifisert:**\n\n- R22 (Avdragsfrihet på lån): Dokumentet nevner eksplisitt at avdragsfrihet medfører forventet økning ved første avdrag. Renter på kr 3,87M i 2024 er høye. Dette er en vesentlig risiko som ikke var eksplisitt identifisert som egen risiko, men som er delvis overlappende med R02. Likevel fortjener den egen omtale pga. avdragsfrihetsaspektet. Confidence 0.88.\n\n- R23 (Generell aldersrisiko bygningsmasse): Bygget fra 1975, rehabilitert 1992/93. Store vedlikeholdskostnader i regnskapet (kr 787 920 i 2024 for bygninger alene). Generell risiko for økte kostnader fremover. Confidence 0.85.\n\n**Manglende risikoer som bør undersøkes nærmere:**\n- El-anleggets tilstand og alder er ikke eksplisitt vurdert i de fremlagte risikoene, men dokumentet nevner at det ikke er kontrollert.\n- Kommuneplan KPA 2027 er nevnt som plan i nærheten – bør undersøkes nærmere.\n- Ferdigattest-problematikk knyttet til bruksendring av bad bør undersøkes mot kommunen.\n"
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
    "input_tokens": 23113,
    "output_tokens": 6186,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
