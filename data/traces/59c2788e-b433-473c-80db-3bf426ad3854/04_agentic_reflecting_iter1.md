# Trace: agentic_reflecting_iter1
- **Run ID:** 59c2788e-b433-473c-80db-3bf426ad3854
- **Tidspunkt:** 2026-03-24T12:38:50.271894+00:00
- **Varighet:** 101.27s
- **Input tokens:** 23843
- **Output tokens:** 5124

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
Risiko 1: Pågående balkongreklamasjon mot utbygger (Skanska) – uavklart tvist
  Confidence: 0.98
  Evidens: Sameiet har reklamert overfor utbygger (Skanska) på manglende fuktsikring i overgang mellom balkong og leilighet i bygg O. Reklamasjonen gjelder balkonger fra 2. til 6. etasje, og videre prosess pågår mellom sameiet og utbygger.; Vi har reklamert på manglende fuktsikring ved balkongoverganger i bygg O. Problemet gjelder balkonger fra 2. til 6. etasje. Vann trenger inn bak beslaget mellom balkongdør og balkongdør og ledes bak teglforblending, noe som gir saltutslag ved balkongene.; Spesielt forhold som er vurdert tilfredsstillende mtp. fuktsikring og anbefaler utbedring av alle balkonger i bygg O.

Risiko 2: Fuktinnsig på balkong i selgers leilighet – tidligere utbedret, men usikkerhet om varig løsning
  Confidence: 0.85
  Evidens: Sommeren 2024 oppdaget vi at det rant vann langs veggen ute på balkongen, noe som kom fra balkongen over oss ved tung nedbør. Dette ble meldt fra om til Skanska, og feilen ble utbedret.; I selgers leilighet ble tilsvarende forhold avdekket i 2024, og dette ble utbedret av Skanska samme år. Selger er ikke kjent med pågående eller uavklarte forhold knyttet til balkong/fuktsikring i egen leilighet per salgsdato.

Risiko 3: Skjeggkre oppdaget i bygget – skadedyrproblem i sameiet
  Confidence: 0.97
  Evidens: Det ble oppdaget skjeggkre i bygget i januar 2025. Åte ble lagt ut i forbindelse med fellesaksjon.; Kjenner du til om det er/har vært skjeggkre i sameiet/laget/selskapet (fellesareal eller i andre boliger)? Nei Ja – Beskrivelse: Det ble oppdaget skjeggkre i bygget i januar 2025.

Risiko 4: Ingen radonmåling er utført – potensiell helserisiko
  Confidence: 0.9
  Evidens: Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid.

Risiko 5: Selger har ikke tegnet boligselgerforsikring – redusert kjøpervern
  Confidence: 0.92
  Evidens: Boligselgerforsikring: Selger har ikke tegnet slike forhold kan ikke senere gjøres gjeldende som en mangel ved boligen.

Risiko 6: Pågående nabobygg-demolering og byggeaktivitet i nærområdet – støy, støv og ulemper
  Confidence: 0.93
  Evidens: Oktober 2025 startet de første forberedende arbeidene på tomten. Først skal byggene i Ensjøveien 3 og fem demonteres, deretter Ensjøveien 7.; Ensjøveien 16 rives og erstattes av nybygg.; Det skal legges til rette for nytt hovedkontor for Norsk rikskringkasting (NRK). Tomten er på drøyt 14 mål.

Risiko 7: Plikt til å etablere støyskjerm mot Gjøvikbanen – fremtidig kostnad og usikkerhet
  Confidence: 0.88
  Evidens: Ensjø Torg 4 Boligsameie, Ensjø Torg 3 Boligsameie og eier av gnr. 237 bnr. 21 i fellesskap forpliktet til å etablere, vedlikeholde og drifte støyskjerm mot Gjøvikbanen. Plikten til å etablere støyskjerm gjelder uavhengig av om behovet oppstår som følge av endringer.

Risiko 8: Uteeiendommen ikke ferdig organisert, regulert eller utbygget på seksjoneringstidspunktet – fremtidig usikkerhet
  Confidence: 0.85
  Evidens: På seksjoneringstidspunktet er Uteeiendommen og omkringliggende bebyggelse ikke ferdig organisert, regulert eller utbygget. Det skal bl.a. skilles ut areal fra Uteeiendommen, og tilføres areal til denne.

Risiko 9: Legalpant og panteforpliktelser – kommunen og sameiet har prioritert pant foran banklån
  Confidence: 0.9
  Evidens: Kommunen har legalpant som sikkerhet for betaling av kommunale avgifter og eventuell eiendomsskatt.; De øvrige seksjonseierne i sameiet har legalpant på inntil 2G som sikkerhet for krav knyttet til sameieforholdet, som felleskostnader. Legalpant er pant som ikke vises i grunnboksutskriften, og har prioritet foran tinglyste lån, for eksempel banklån på seksjonen.; Legalpant til kommunen har høyere prioritet.

Risiko 10: Sameiet har proratansvar for gjeld i Ensjø Torg Garasjesameie – indirekte gjeldseksponering
  Confidence: 0.8
  Evidens: Selskapet eier 342/5276 deler av Ensjø Torg Garasjesameie. Selskapet har prorataansvar for sin forholdsmessige andel av gjelden som utgjør kr 893...

Risiko 11: Høye kommunale avgifter og risiko for økning – vann/avløp budsjettert til over 1 million
  Confidence: 0.75
  Evidens: Kommunale avgifter 9 -916 588 -788 658 -931 744 -1 030 000; Vann- og avløpsavgift -565 750, Renovasjonsavgift -350 838, SUM KOMMUNALE AVGIFTER -916 588

Risiko 12: Gammel bygningsmasse i deler av eiendommen (Hus Levahns) – fasader og bygningsdeler opptil 100–120 år gamle
  Confidence: 0.82
  Evidens: Gammel del av Hus Levahns har murte og pussede fasader, og fasadene og flere andre utvendige bygningsdeler er opptil ca. 100-120 år gamle.

Risiko 13: Stikkledninger fra eiendommen til kommunalt nett er private – vedlikeholdsansvar påhviler sameiet
  Confidence: 0.8
  Evidens: Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler sameiet.

Risiko 14: Allmennhetens tinglyste rett til fri ferdsel over Uteeiendommen – begrenser eksklusiv bruk
  Confidence: 0.83
  Evidens: Allmennheten har tinglyst rett til fri ferdsel på framtidig del av Søndre tverrforbindelse på Ensjø over Uteeiendommen.

Risiko 15: Korttidsutleie begrenset til maksimalt 90 dager per år – begrensning i disposisjonsrett
  Confidence: 0.88
  Evidens: Korttidsutleie av hele boligseksjonen i mer enn 90 dager årlig er ikke tillatt.

Risiko 16: Budsjettert underskudd og historisk negativt årsresultat i sameiet – risiko for økte felleskostnader
  Confidence: 0.78
  Evidens: ÅRSRESULTAT 142 933 -118 486 211 808 128 266; SUM DRIFTSKOSTNADER -2 630 833 -2 663 031 -2 799 192 -3 041 539; Budsjett 2025 viser økte kostnader på 3 041 539 mot inntekter på 3 173 805.

Dokumentkontekst:
[d053_d053 | Side [1]]
eiendommen i ryddig og rengjort tilstand. selger.
Regulerings og arealplaner: Eiendommen er regulert til betaling av kommunale avgifter og eventuell
kombinert bolig‑ og anleggsformål iht. S‑4858. eiendomsskatt. De øvrige seksjonseierne i sameiet har Om informasjonsgrunnlaget
Kontrakts‑
legalpant på inntil 2G som sikkerhet for krav knyttet til Opplysninger om boligens størrelse og utforming, både
Pågående plansaker: sameieforholdet, som felleskostnader. Legalpant er pant innvendig og utvendig, bygger på

---

[d053_d053 | Side [1]]
legges En standard tilbehørsliste utarbeidet av Norges
i måneden (inkluderer nettleie). Totalt ca. 3036 kWh pr år. inn. Ta kontakt med eiendomsmegler dersom det er Eiendomsmeglerforbund (NEF) følger salgsoppgaven, og
spørsmål. gjelder som utgangspunkt for hva som inkluderes i salget
Tinglyste heftelser
– med mindre avvik er tydelig avtalt mellom kjøper og
Regulering
Legalpant: Kommunen har legalpant som sikkerhet for Selger leverer eiendommen i ryddig og rengjort tilstand. selger.
Regulerings og

---

[d053_d053 | Side [1]]
g sameie av Hus O og Levahns (Ensjø
Torg 4 Boligsameie), Hus M&N (Ensjø Torg 3 Boligsameie), samt Skedsmogata 25 i
fellesskap. I tillegg har Ensjø Torg 2 Eierseksjonssameie tinglyst vederlagsfri rett til opphold
og adkomst over Uteeiendommen, og allmennheten har tinglyst rett til fri ferdsel på framtidig
del av Søndre tverrforbindelse på Ensjø over Uteeiendommen. De nærmere regler om
disponering, kostnadsfordeling osv. knyttet til Uteeiendommen er regulert i vedtekter for
Ensjø Torg Utomhussameie (heretter

---

[d053_d053 | Side [1]]
/bruksendret/bygget ut i kjeller eller loft eller andre deler av boligen?
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
23 Kjenner du til om

---

[d053_d053 | Side [1]]
ing: Selger har ikke tegnet slike forhold kan ikke senere gjøres gjeldende som en
Følg planen her: https:/ / innsyn.pbe.oslo.kommune.no/ det kommunale nettet er private, og boligselgerforsikring. mangel ved boligen. Dette gjelder uavhengig av om
saksinnsyn/ casedet.asp? vedlikeholdsansvaret for disse påhviler sameiet. dokumentene er lest.
direct=Y&mode=&caseno=202506870 Adkomst til eiendommen skjer via offentlig vei. Boligkjøperforsikring: Kjøper har anledning til å tegne
boligkjøperforsikring. Vedlagt i

---

[d053_d053 | Side [1]]
opplysninger eller egne rådgivere før de gir bud.
Radonmåling
en kombinasjon av nybygg og ombruk av eksisterende Boligen selges med det inventar og utstyr som i henhold
bebyggelse. Intensjonen er å bevare Selger har ikke utført radonmåling. Det er ikke krav om til gjeldende lover, forskrifter eller offentlige pålegg skal Slitasje og bruk
Ensjøveien 18, 20 og 22, med påbygg på Ensjøveien 18 og dette med mindre boligen er helt eller delvis utleid. følge med eiendommen, jf. avhendingsloven § 3‑4. Det må også

---

[d053_d053 | Side [1]]
## Side 28

14 Kjenner du til om ufaglærte har utført arbeid som normalt bør utføres av faglærte, utover det som er nevnt tidligere (f.eks. drenering,
murerarbeid, tømrerarbeid etc)?
Nei Ja
15 Er det nedgravd oljetank på eiendommen?
Nei Ja
16 Kjenner du til om det har vært utført arbeid på terrasse/garasje/tak/fasade?
Svar Nei
17 Selges eiendommen med utleiedel, leilighet, hybel eller tilsvarende?
Nei Ja
18 Kjenner du til om det er innredet/bruksendret/bygget ut i kjeller eller loft eller andre deler av

---

[d053_d053 | Side [1]]
 eventuelt en eller flere tilleggsdeler.
Hoveddelen består av en sammenhengende og klart avgrenset del av en bygning, med egen
inngang. Seksjonerte tilleggsdeler består av privat uteareal på bakkeplan og innvendige
boder.
(3) De deler av eiendommen som ikke inngår i de enkelte bruksenheter er fellesareal.
(4) Eiendommen gnr. 133 bnr. 7 (utomhusarealet beliggende mellom bebyggelsen, heretter
"Uteeiendommen") eies og disponeres i et tingsrettslig sameie av Hus O og Levahns (Ensjø
Torg 4 Boligsameie), Hus M&N

---

[d053_d053 | Side [1]]
eell andel 1/ 1 Hva skjer nå? energiattest. Unntak gjelder blant annet for frittstående
merket med TGIU er ikke blitt vurdert av takstmannen. i Oslo kommune. ‑ Vi mottar skriftlig takstrapport om ca. en uke. bygninger med bruksareal mindre enn 50 m². Det er eier
‑ Sammen med vår advokat utarbeider vi et formelt svar som plikter å fremlegge energiattest og er selv ansvarlig
Beskrivelsen av boligen nedenfor er hentet direkte fra til Skanska. for at opplysningene er korrekte. Selger har fylt

---

[d053_d053 | Side [1]]
ftlig om alle overdragelser og leieforhold. Det samme
gjelder ny seksjonseiers/leietakers navn og kontaktinformasjon. Ved eierskifte betales et
eierskiftegebyr fastsatt av styret. 4. Garasjeanlegget
(5) Nye begrensninger i rettslig disposisjonsrett krever samtykke fra de som berøres. 4-1 Organisering
(1) Garasjeanlegget under bebyggelsen på felt B1 er organisert i et tingsrettslig sameie
(Ensjø Torg Garasjesameie) og utgjør en egen anleggseiendom, gnr. 133 bnr. 49 (heretter
3. Seksjonseierens rett til å

---

[d053_d053 | Side [1]]
ringen når du kjøper en brukt
bolig. Da gjelder avhendingsloven. 6.
− Hvor: Hos eiendomsmegler senest ved medfølger. Innredning i garderobeskap, for eksempel løse eller fastmonterte trådkurver, hyller,
kontraktsmøte. stenger og lignende, medfølger.
− Hvordan: Krysses av i kjøpekontrakten.
Forsikringsbevis og vilkår sendes per e-post.
Forsikringen er meglet frem av Söderberg & Partners og soderbergpartners.no/eiendom
er

---

[d053_d053 | Side [1]]
menhengende og klart avgrenset del av en bygning,
• Innføring av vedtektsbestemmelser som begrenser den rettslige
rådigheten over seksjonen, med egen inngang.
• Innføring av vedtektsbestemmelsene om en annen fordeling
d) bruksenhetens tilleggsdel: de delene av bruksenheten som ikke er hoveddel.
av felleskostnadene enn bestemt i punkt 6.
e) fellesareal: de delene av eiendommen som ikke inngår i bruksenhetene.
9-12 Inhabilitet f) boligseksjon: en seksjon som skal brukes til helårsbolig eller

---

[d053_d053 | Side [1]]
tober 2025 startet de første forberedende herunder salgsoppgave, tilstandsrapport og selgers
Vei, vann og avløp
arbeidene på tomten. Først skal byggene i Ensjøveien 3 egenerklæring. Kjøper anses for å være kjent med
Forsikring
og fem demonteres, deretter Ensjøveien 7. Eiendommen er tilknyttet offentlig vann‑ og forhold som er tydelig beskrevet i salgsdokumentene,
avløpssystem. Stikkledningene fra eiendommen og ut til Boligselgerforsikring: Selger har ikke tegnet slike forhold kan ikke senere gjøres

---

[d053_d053 | Side [1]]
ar ikke rett til å foreta arbeider som påvirker/berører sameiets fellesarealer
og fellesanlegg uten forhåndsgodkjenning fra styret/årsmøtet.
(7) Ensjø Torg 4 Boligsameie har, sammen med Ensjø Torg 3 Boligsameie, tinglyst
bruksrett til utearealene som ligger mellom boligbyggene på plan 3 og utearealet sørøst for Dette gjelder alle installasjoner, herunder oppsetting/montering av antenner, varmepumper,
den østre bygningen på gnr. 133 bnr. 52. sol/vindavskjerming, skillevegger/gjerder, plattinger, flislegging

---

[d053_d053 | Side [1]]
ng/fuktsikring i egen leilighet per salgsdato.
26 Kjenner du til vedtak/forslag til vedtak om forhold vedr. eiendommen som kan medføre økte felleskostnader/økt fellesgjeld?
Nei Ja
27 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr i sameiet/laget/selskapet (fellesareal eller i andre boliger) som rotter, mus,
maur eller lignende?
Nei Ja
28 Kjenner du til om det er/har vært skjeggkre i sameiet/laget/selskapet (fellesareal eller i andre boliger)?
Nei Ja
Beskrivelse Det ble oppdaget

---

[d053_d053 | Side [1]]
leskostnader. Legalpant er pant innvendig og utvendig, bygger på informasjon hentet fra
grunnlag
Ensjøveien 3 ‑ Oppføring av bygg for NRK som ikke vises i grunnboksutskriften, og har prioritet vedlagte tilstands‑ og boligsalgsrapport. Innholdet i
Det skal legges til rette for nytt hovedkontor for Norsk foran tinglyste lån, for eksempel banklån på seksjonen. salgsoppgaven er basert på selgers informasjon,
Overtakelse
rikskringkasting (NRK). Tomten er på drøyt 14 mål og Legalpant til kommunen har høyere

---

[d053_d053 | Side [1]]
der i bindingsverk utvendig forblendet Eiendomsforvaltning AS og sameiets revisor er PWC. urimelig eller unødvendig måte er til skade eller ulempe
samme år. Selger er ikke kjent med pågående eller med spekkmurt teglstein og trepanel. for de øvrige brukerne av eiendommen.
uavklarte forhold knyttet til balkong/ fuktsikring i egen Informasjon fra styret vedrørende balkongreklamasjon:
leilighet per salgsdato. Vinduer Vi har reklamert på manglende fuktsikring ved Forkjøpsrett: Det praktiseres ikke

---

[d053_d053 | Side [1]]
tår behov for støyskjerm, er Ensjø Torg 4 Boligsameie,
styre har ansvar for å innhente slikt samtykke i forkant av utskifting.
Ensjø Torg 3 Boligsameie og eier av gnr. 237 bnr. 21 i fellesskap forpliktet til å
(4) Gammel del av Hus Levahns har murte og pussede fasader, og fasadene og flere etablere, vedlikeholde og drifte støyskjerm mot Gjøvikbanen. Plikten til å etablere
andre utvendige bygningsdeler er opptil ca. 100-120 år gamle.
støyskjerm gjelder uavhengig av om behovet oppstår som følge av endringer

---

[d053_d053 | Side [1]]
 på manglende fuktsikring ved Forkjøpsrett: Det praktiseres ikke forkjøpsrett.
Vinduer med trerammer og tre‑lags isolerglass. balkongoverganger i bygg O. Problemet gjelder
balkonger fra 2. til 6. etasje. Vann trenger inn bak Styregodkjennelse: Det praktiseres ikke
Bebyggelsen
Dører beslaget mellom balkongdør og balkongdør og ledes bak styregodkjenning.
Området består hovedsakelig av nyere blokkbebyggelse. Entredør i Brannklasse El‑30 og Lydklasse dB40. teglforblending, noe som gir saltutslag ved balkongene

---

[d053_d053 | Side [1]]
id. følge med eiendommen, jf. avhendingsloven § 3‑4. Det må også forventes at eiendommer som har vært i
20, mens Ensjøveien 16 rives og erstattes av nybygg. Fastmonterte eller spesialtilpassede installasjoner og bruk, vil kunne ha tegn til slitasje og eventuelle skader.
46 47

## Side 25

OM EIENDOMMEN OM EIENDOMMEN
Slik normal bruksslitasje og behov for vedlikehold må areal på minst 2 % og samtidig minst 1 kvadratmeter, kan oversendes før budgivning.
kjøper påregne, og dette vil normalt ikke gi grunnlag

---

[d053_d053 | Side [1]]
ger og eventuelt i oppforede kjellergulv.
3600 gir TG 2, men som ikke nødvendigvis krever umiddelbare 琀椀ltak.
Konstruksjonen har normalt enten feil u琀昀ørelse, en skade eller symptomer • Normal slitasjegrad: Forventet nedsli琀椀ng av materiale i over昀氀aten som er
på skade, sterk slitasje eller nedsa琀琀 funksjon. Vedlikehold eller 琀椀ltak trengs basert på enkle visuelle observasjoner. Kan vurderes sammen med
i nær frem琀椀d, det er grunn 琀椀l å varsle fare for skader på grunn av alder eller bygningsdelens

---

[d053_d053 | Side [1]]
e av bygning som brukes av to eller 昀氀ere bruksenheter eller 琀椀l bygningens
i)Tilstandsgrad 0, TG0:Ingen avvik eller skader. I 琀椀llegg må bygningsdelen dagens bruk. observasjoner. forvaltning, dri昀琀 eller vedlikehold.
være 琀椀lnærmet ny, mindre enn 5 år, og det foreligger dokumentasjon på
faglig god u琀昀ørelse. • Bygningssakkyndig gir en forenklet vurdering av branntekniske forhold og • Fuktmåling: Måling av fuk琀椀nnhold i materiale eller i bakenforliggende
elektriske installasjoner i boligen dersom det er

---

[d053_d053 | Side [1]]
 å varsle fare for skader på grunn av alder eller bygningsdelens alder.
PERSONVERN
overvåke spesielt på grunn av fare for større skade eller følgeskade. For
TILLEGGSUNDERSØKELSER
skjulte konstruksjoner vil alder i seg selv være et symptom som kan gi TG2. • Forventet gjenværende bruks琀椀d: Anslå琀琀 琀椀d et byggverk eller en del av et iVerdi AS, bygningssakkyndig og taks琀昀oretaket behandler person-
For synlige konstruksjoner kan alder sammen med andre symptomer og byggverk fortsa琀琀 vil være tjenlig for si琀琀

---

[d053_d053 | Side [1]]
tatus på et gi琀琀 琀椀dspunkt. eiendommens verdi.
mellom P-areal og S-areal.
• Tilbakeholdt eller urik琀椀g informasjon som har betydning for vurderingen, •Kontroll av fukt i konstruksjonen ved hulltaking i bad og vaskerom • Symptom: Observerbart forhold som gir indikasjon på hvilken 琀椀lstand et • Rom som ligger utenfor boenheten, men som eier har påvist og/eller
er ikke bygningssakkyndiges ansvar. Rapporten beskriver avvik, altså en (våtrom), rom under terreng (kjelleretasje, underetasje og sokkeletasje)

---

[d053_d053 | Side [1]]
dresse
som er nevnt i rapporten. Spesielt forhold som er vurdert tilfredsstillende mtp. fuktsikring og anbefaler utbedring
Info energiklasse
med TG2 og TG3 bør vurderes nøye, da de indikerer Rolf Hofmos gate 6, 0655 OSLO av alle balkonger i bygg O.
avvik fra normal slitasje og/ eller høy alder, noe som kan Alle eiendommer som selges eller leies ut, skal ha
innebære behov for utbedringer. Bygningsdeler som er Gnr. 133, bnr. 50, snr. 25, ideell andel 1/ 1 Hva skjer nå? energiattest. Unntak gjelder blant

---

[d053_d053 | Side [1]]
3600 GIR TG 2
integrerte hvitevarer.
Bygningsdelen skal enten ha feil u琀昀ørelse, en skade eller symptomer på skade, sterk slitasje eller nedsa琀琀
funksjon. Graden gis når bygningsdelen trenger vedlikehold eller 琀椀ltak i nær frem琀椀d. Graden skal også brukes
når delen er gammel og det er grunn 琀椀l å varsle om faren for skader på grunn av alderen, eller når det er grunn
琀椀l å overvåke delen spesielt på grunn av fare for større skader eller følgeskader. Arealer
Gå 琀椀l side
TILSTANDSGRAD 3, TG3: STORE ELLER

---

[d053_d053 | Side [1]]
at bygningsdeler under er
TG2 eller TG3 uten at det nødvendigvis er krav om at avviket utbedres.
forbedret.
De琀琀e kan gjelde sluk, te琀琀esjikt og fall på bad og vaskerom, forhold som
gjelder sikkerhet mot brann, rekkverk, trapper osv.
Tilstandsrapporten beskriver ikke hele boligen
BYGNINGSSAKKYNDIGE SER FOR EKSEMPEL IKKE PÅ
• vanlig slitasje og normal vedlikeholds琀椀lstand • bagatellmessige forhold som ikke påvirker bygningens bruk eller verdi vesentlig • etasjeskillere •
Rapportansvarlig 琀椀lleggsbygg slik

---

[d053_d053 | Side [1]]
e avvik
TG2: Avvik som kan kreve 琀椀ltak Overnevnte bygningsdeler er en del av sameiets/bore琀琀slagets Årstall: 2020
vedlikeholdsansvar, og er ikke omfa琀琀et av denne rapporten.
TG3: Store eller alvorlige avvik
Det blir ikke sa琀琀 琀椀lstandsgrad for disse bygningsdelene.
TG IU: Konstruksjoner som ikke er undersøkt 5. ETASJE > BAD/VASKEROM
Over昀氀ater vegger og himling
Vinduer
Flislagte vegger og panel plater i tak.
Vinduer med trerammer og tre-lags isolerglass.
5. ETASJE > BAD/VASKEROM
Dører
Over昀氀ater

---

[d053_d053 | Side [1]]
kan gis når bygningsdelen er 琀椀lnærmet ny og det ikke o昀昀entlige myndigheter eller kvali昀椀sert elektrofaglig fagperson ved behov
foreligger dokumentasjon på faglig god u琀昀ørelse. for grundigere undersøkelser. • Utvidet fuktsøk (hulltaking): Boring av hull for inspeksjon og fuktmåling i
risikoutsa琀琀e konstruksjoner, primært i 琀椀lstøtende vegger 琀椀l bad, u琀昀orede
iii)Tilstandsgrad 2, TG2:Vesentlige avvik, og mindre avvik som e琀琀er NS kjellervegger og eventuelt i oppforede kjellergulv.
3600 gir TG 2, men som

---

[d053_d053 | Side [1]]
pp og skadedyr. på at NS 3940:2023 og eierseksjonsloven har ulik de昀椀nisjon av fellesareal.
blant annet vurdert ut fra alder og normal bruk slik: • Kontroll av romfunksjoner for P-ROM u琀昀øres kun når det ikke foreligger Ved arealmåling gjelder NS 3940:2023 som de昀椀nerer fellesareal slik: “Delen
godkjente og byggemeldte tegninger, eller når tegninger ikke stemmer med • Fuktsøk: Over昀氀atesøk med egnet søkeutstyr (fuk琀椀ndikator) eller visuelle av bygning som brukes av to eller 昀氀ere bruksenheter eller 琀椀l

---

[d053_d053 | Side [1]]
et prefabrikkert baderom med 昀氀islagte over昀氀ater og
montert som et ferdig rom under oppførelse av eiendommen.
Bygningsdelen skal bare ha normal slitasje, og straks琀椀ltak skal ikke anses som nødvendig. Graden kan også
brukes når delen er ny, men der dokumentasjon på faglig god u琀昀ørelse mangler.
KJØKKEN Gå 琀椀l side
Innredning med gla琀琀e skapfronter, laminat benkeplater og
TILSTANDSGRAD 2, TG2: VESENTLIGE AVVIK OG MINDRE AVVIK SOM ETTER NS 3600 GIR TG 2
integrerte hvitevarer.
Bygningsdelen skal enten ha

---

[d053_d053 | Side [1]]
sanalysen har ikke avdekket noen symptomer på svikt og
avvik fra normal standard. Det er gjennomgående registrert TG
1.
TILSTANDSGRAD 0, TG0: INGEN AVVIK Eiet seksjon i boligbygg med 昀氀ere boenheter - Byggeår:
2020
Bygningsdelen skal være 琀椀lnærmet ny, ikke vise tegn på slitasje og det skal være lagt frem dokumentasjon på
faglig god u琀昀ørelse. Det er ingen merknader 琀椀l delen.
VÅTROM Gå 琀椀l side
TILSTANDSGRAD 1, TG1: MINDRE AVVIK Baderom er et prefabrikkert baderom med 昀氀islagte over昀氀ater og
montert som

---

[d053_d053 | Side [1]]
琀 forventet 琀椀lstand, blant annet vurdert ut fra alder og normal bruk. Ved Tilstandsgrad 0 (TG0) og Tilstandsgrad 1 følge av bygningens alder.
(TG1) gir den bygningssakkyndige normalt ingen begrunnelse for valg av 琀椀lstandsgrad. Grunnen er at bygningen eller bygningsdelen da bare har
normal slitasje. Ved skjulte konstruksjoner kan alder alene avgjøre 琀椀lstandsgrad. Når bygningssakkyndige anbefaler 琀椀ltak, for eksempel Eiendommen er vurdert i den stand den var på
utbedringer, må brukeren av rapporten

---

[d053_d053 | Side [1]]
Gnr 133 - Bnr 50 Pb. 80 Tåsen Gnr 133 - Bnr 50 Pb. 80 Tåsen
0301 OSLO 0801 OSLO 0301 OSLO 0801 OSLO
Beskrivelse av eiendommen
De琀琀e trenger du å vite om 琀椀lstandsrapporten
Boligblokken er oppført og gi琀琀 midler琀椀dig bruks琀椀llatelse i 2020
e琀琀er gjeldende byggeskikk og forskri昀琀er, TEK 10. Over昀氀ater og
Tilstanden vurderes med ulike 琀椀lstandsgrader
våtrom er vurdert mot hva som må forventes av standard som
Tilstanden gir u琀琀rykk for en gi琀琀 forventet 琀椀lstand, blant annet vurdert ut fra alder og normal

---

[d053_d053 | Side [1]]
lgeskader. Arealer
Gå 琀椀l side
TILSTANDSGRAD 3, TG3: STORE ELLER ALVORLIGE AVVIK
Forutsetninger og vedlegg Gå 琀椀l side
Denne 琀椀lstandsgraden brukes ved kra昀琀ige tegn på forhold som man må regne med trenger utbedring straks
eller innen kort 琀椀d. Det er påvist funksjonssvikt eller sammenbrudd.
Lovlighet Gå 琀椀l side
IKKE UNDERSØKT/IKKE TILGJENGELIG FOR UNDERSØKELSE Eiet seksjon i boligbygg med 昀氀ere boenheter
Det kan være avvik/skader som ikke er avdekket. • Det foreligger godkjente og byggemeldte tegninger,

---

[d053_d053 | Side [1]]
sk stemme på verdensbasis. Organisasjonen
Den bygningssakkyndige vurderer boligen ut fra hva man kan forvente av en bygning av samme alder
bidrar i næringspoli琀椀sk sammenheng, og har vært en pådriver for å sikre at lover og regler gir trygghet for forbrukerne og type. Vurderingen gjøres som regel mot hvordan det var vanlig å bygge og regler som gjaldt da
i boligomsetningen. boligen ble oppført (søknads琀椀dspunktet). Forhold som er vanlige for bygningens alder, slik som slitasje
e琀琀er normal bruk regnes ikke

---

[d053_d053 | Side [1]]
ert i den stand den var på
utbedringer, må brukeren av rapporten vurdere om 琀椀ltakene er nødvendige og lønnsomme. besik琀椀gelsesdagen. Kommentarer vedrørende vedlikehold osv.
Når den bygningssakkyndige velger 琀椀lstandsgrad, baseres vurderingen på faste kriterier som følger av gjeldende bransjestandard for Teknisk er anført i den tekniske beskrivelsen i rapporten.
琀椀lstandsanalyse ved omsetning av bolig og Forskri昀琀 琀椀l avhendingslova.
Tilstandsanalysen har ikke avdekket noen symptomer på svikt og
avvik fra

---

[d053_d053 | Side [1]]
on og verdi, og som kommer frem av forskri昀琀 琀椀l
og vær og vind. Mange boliger fornyes helt eller delvis, noen i 昀氀ere avhendingslova.
omganger, eller det oppføres 琀椀lbygg. Særlig for boliger som er
Noen bygningsdeler og forhold vil den bygningssakkyndige vurdere mot
pusset opp eller endret, er det vik琀椀g å merke seg at fornyelse av
dagens regelverk. E琀琀er dagens regelverk vil disse kunne få avvik og/eller
over昀氀ater ikke nødvendigvis betyr at bygningsdeler under er
TG2 eller TG3 uten at det nødvendigvis

---

[d053_d053 | Side [1]]
 det er/har vært problemer med drenering, fuktinnsig, øvrig fukt eller fuktmerker i underetasje/kjeller?
Nei Ja
6 Kjenner du til om det er/har vært utettheter i terrasse/garasje/tak/fasade?
Nei Ja
Sommeren 2024 oppdaget vi at det rant vann langs veggen ute på balkongen, noe som kom fra balkongen over
Beskrivelse
oss ved tung nedbør. Dette ble meldt fra om til Skanska, og feilen ble utbedret.
7 Kjenner du til om det er/har vært problemer med ildsted/skorstein/pipe f.eks. dårlig trekk, sprekker, pålegg,

---

[d053_d053 | Side [1]]
TREKKSKONTO Kostnader dugnader -7 769
Selskapet har egen separat skattetrekkskonto i OBOS-banken. Innskuddet tilhører
SUM DRIFT OG VEDLIKEHOLD -381 050
myndighetene og kan ikke disponeres fritt.
NOTE: 9
NOTE: 2
KOMMUNALE AVGIFTER
INNKREVDE FELLESKOSTNADER
Vann- og avløpsavgift -565 750
Felleskostnader brøk 2 277 209
Renovasjonsavgift -350 838
Felleskostnader lik fordeling 350 882
SUM KOMMUNALE AVGIFTER -916 588
Bredbånd 164 010
TV/Bredbånd 123 540
NOTE: 10
Felleskostnader til S.2681 -147

---

[d053_d053 | Side [1]]
Vedlegg 1 17 av 24 2655 endelig beretning.pdf Vedlegg 1 18 av 24 2655 endelig beretning.pdf
126 127

## Side 65

6 7
SUM KOSTNADER 822 736
NOTE: 12
FINANSINNTEKTER
Renter bank 1 232 SUM ENERGIAVREGNING -29 780
Renter av for sent innbetalte felleskostnader 531
Andre renteinntekter 366 Oppstillingen ovenfor viser hvilke energikostnader som avregnes etter hver enkelts
SUM FINANSINNTEKTER 2 129 forbruk.
For å dekke de løpende kostnadene, krever selskapet inn et forskuddsbeløp fra hver
enkelt.
NOTE: 13
På

---

[d053_d053 | Side [1]]
vregning 0 37 235
Forretningsførerhonorar -122 050 -116 068 -121 871 -128 000 Driftskonto OBOS-banken 348 571 152 344
Konsulenthonorar 7 -8 251 -33 962 -10 000 -10 000 SUM OMLØPSMIDLER 406 228 237 450
Drift og vedlikehold 8 -381 050 -321 052 -340 000 -483 884
Forsikringer -135 143 -121 971 -137 000 -158 000
SUM EIENDELER 419 974 228 090
Kommunale avgifter 9 -916 588 -788 658 -931 744 -1 030 000
Andre anlegg 0 -175 918 -147 120 -165 566
EGENKAPITAL OG GJELD
Kostnader sameie 14 2 800 1 120 -18 492 -23

---

[d053_d053 | Side [1]]
kument)
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ Sameiet har avtale med Techem for levering av
213 590,00 (Omkostninger totalt (uten energiservicetjenester. OBOS fakturerer a‑konto på
Boligkjøperforsikring)) vegne av Techem sammen med ordinær innkreving av
227 090,00 (Omkostninger totalt (med felleskostnader. Techem avregner deretter energiforbruk
Boligkjøperforsikring)) pr. år mot innkrevd a‑kontobeløp.
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑
Eiendomsskatt
8 713 590,00

---

[d053_d053 | Side [1]]
010
TV/Bredbånd 123 540
NOTE: 10
Felleskostnader til S.2681 -147 120
ENERGI/FYRING
SUM INNKREVDE FELLESKOSTNADER 2 768 521
Elektrisk energi -97 955
Fjernvarme -85 398
NOTE: 3
Andre fyringskostnader -5 704
ANDRE INNTEKTER
SUM ENERGI / FYRING -189 057
Viderefakturering nedkjørt port 7 000
SUM ANDRE INNTEKTER 7 000
NOTE: 11
ANDRE DRIFTSKOSTNADER
NOTE: 4
Vaktmestertjenester -66 998
PERSONALKOSTNADER
Vakthold -130 943
Arbeidsgiveravgift -23 265
Renhold ved firmaer -176 049
SUM PERSONALKOSTNADER -23 265 Andre

---

[d053_d053 | Side [1]]
dsvis betale et akontobeløp som fastsettes
på årsmøtet, eller av styret, for å dekke sin andel av felleskostnadene.
administrasjon, som styrehonorar, arbeidsgiveravgift på styrehonorar, revisjon,
forretningsførsel skal fordeles med lik andel pr seksjon. Kostnader til vedlikehold og (2) Akontobeløpet kan også dekke avsetning av midler til framtidig vedlikehold, påkostninger
eller andre fellestiltak på eiendommen dersom årsmøtet har vedtatt slik avsetning. Midlene
utskifting av overlystak/foldevinduer som

---

[d053_d053 | Side [1]]
l, vaktmestertjenester, felles
forsikringer, vedlikeholdsfond og generell drift.
Omkostninger kjøpers beløp
8 500 000,00 (Prisantydning) Fordeles slik:
A‑konto energi 860
Omkostninger Felleskostnader likt fordelt 395
Bredbånd 169
13 500,00 (Boligkjøperforsikring* (valgfritt)) Vedlikeholdsfond 210,90
212 500,00 (Dokumentavgift) Felleskost brøk 3 902,17
545,00 (Tinglysingsgebyr ‑ hjemmel) TV/ bredbånd 145
545,00 (Tinglysningsgebyr ‑ pantedokument)
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑

---

[d053_d053 | Side [1]]
TORG 4 BOLIGSAMEIE ENSJØ TORG 4 BOLIGSAMEIE
ORG.NR. 926 144 073, KUNDENR. 2655 ORG.NR. 926 144 073, KUNDENR. 2655
RESULTATREGNSKAP BALANSE
Note Regnskap Regnskap Budsjett Budsjett Note 2024 2023
2024 2023 2024 2025 EIENDELER
DRIFTSINNTEKTER: ANLEGGSMIDLER
Innkrevde felleskostnader 2 2 768 521 2 548 261 3 015 000 3 173 805 Andel egenkapital i fellesanlegg 14 13 745 -9 362
Andre inntekter 3 7 000 0 0 0 Andre varige driftsmidler 15 1 1
SUM DRIFTSINNTEKTER 2 775 521 2 548 261 3 015 000 3 173 805 SUM

---

[d053_d053 | Side [1]]


## Side 14

(Ingen tekst ekstrahert)

## Side 15

(Ingen tekst ekstrahert)

## Side 16

(Ingen tekst ekstrahert)

## Side 17

(Ingen tekst ekstrahert)

## Side 18

(Ingen tekst ekstrahert)

## Side 19

Plantegning

## Side 20

OM EIENDOMMEN
ROLF HOFMOS GATE 6
OM EIENDOMMEN
Økonomi
Felleskostnader
Felleskostnader kr 5 682,‑ pr. mnd
Prisantydning
Kr 8 500 000 Felleskostnader inkulderer: Tv, internett, kommunale
avgifter, forretningsførsel, vaktmestertjenester, felles
forsikringer, vedlikeholdsfond og

---

[d053_d053 | Side [1]]
. Informasjonen
over er hentet fra eiendomsskattelistene. http:/ /
www.oslo.kommune.no/ skatt‑og‑naring/ skatt‑og‑avgift/
Eierskiftegebyr
eiendomsskatt/ eiendomsskatt
Kr 6725
Kommunale avgifter
Estimert totalpris ink. omk
Informasjon: Inkludert i felleskostnadene.
Kr 8 727 090
39

## Side 21

OM EIENDOMMEN OM EIENDOMMEN
Beskrivelse av
Fellesgjeld Parkering
Selve Ensjø er et boligområde i rask utvikling, med et
Ingen lån registrert på selskap eller seksjon. stadig bredere servicetilbud og flere attraktive

---

[d053_d053 | Side [1]]
felleskostnadene, kreves det flertall på minst to tredjedeler av de avgitte stemmene på 10-3 Forsikring
årsmøtet. (1) Styret er ansvarlig for at eiendommen til enhver tid er forsvarlig forsikret i et godkjent
forsikringsselskap. Forsikringen skal også omfatte huseieransvarsforsikring,
(2) Hvis tiltakene fører med seg et samlet økonomisk ansvar eller utlegg for enkelte styreansvarsforsikring og rettshjelpsforsikring. Innboforsikring er den enkelte sameier
seksjonseiere på mer enn halvparten av folketrygdens

---

[d053_d053 | Side [1]]
ng enn den som følger av 6-1 (1).
6-1 Felleskostnader (4) Enhver endring av fordelingsnøkkelen som utføres i strid med denne bestemmelse
(1) Kostnader med eiendommen som ikke knytter seg til den enkelte bruksenhet, er er ugyldig.
felleskostnader. Felleskostnader fordeles mellom seksjonseierne etter
6-2 Betaling av felleskostnader
sameiebrøken med mindre annet følger av disse vedtektene. Kostnader til (1) Den enkelte seksjonseier skal forskuddsvis betale et akontobeløp som fastsettes
på årsmøtet, eller av

---

[d053_d053 | Side [1]]
lik avsetning. Midlene
utskifting av overlystak/foldevinduer som nevnt i punkt 5-1 (6) og som det påligger
skal settes på egen bankkonto. Avsetning til vedlikehold er en felleskostnad og
den enkelte seksjonseier å vedlikeholde, dekkes av den respektive seksjonseier innbetalingene skal følge sameiebrøk.
direkte og inngår ikke i felleskostnadene.
6-3 Panterett for seksjonseiernes forpliktelse
 De andre seksjonseierne har lovbestemt panterett i seksjonen for krav mot seksjonseieren
som følger av

---

[d053_d053 | Side [1]]
4 770 215 808 132 266
Forskuddsbetalte felleskostnader 75 603 64 783
Leverandørgjeld 27 699 -12 979
FINANSINNTEKTER/-KOSTNADER: Kassekreditt (totalt innvilget kreditt kr 200 000) 0 0
Finansinntekter 12 2 129 1 095 0 0 Energiavregning 16 29 780 0
Finanskostnader 13 -3 884 -4 810 -4 000 -4 000 Annen kortsiktig gjeld 17 105 446 137 773
RES. FINANSINNT./-KOSTNADER -1 755 -3 716 -4 000 -4 000
SUM KORTSIKTIG GJELD 238 528 189 577
ÅRSRESULTAT 142 933 -118 486 211 808 128 266 SUM EGENKAPITAL OG GJELD 419 974 228

---

[d053_d053 | Side [1]]
utvendig anlegg -399
FORDRINGER Drift/vedlikehold heisanlegg -49 697
Kundefordringer og andre fordringer er oppført i balansen til pålydende etter fradrag for
Drift/vedlikehold brannsikring -188 678
avsetning til forventet tap. Avsetning til tap gjøres på grunnlag av individuelle vurderinger
Drift/vedlikehold ventilasjonsanlegg -49 509
av de enkelte fordringene.
Drift/vedlikehold parkeringsanlegg -90
Egenandel forsikring -6 000
SKATTETREKKSKONTO Kostnader dugnader -7 769
Selskapet har egen separat

---

[d053_d053 | Side [1]]
EGENKAPITAL OG GJELD
Kostnader sameie 14 2 800 1 120 -18 492 -23 112
EGENKAPITAL
Energi/fyring 10 -189 057 -194 955 -100 000 -179 000
Opptjent egenkapital 181 446 38 513
TV-anlegg/bredbånd -271 481 -333 257 -362 000 -267 540
SUM EGENKAPITAL 181 446 38 513
Andre driftskostnader 11 -412 750 -443 075 -432 700 -398 172
SUM DRIFTSKOSTNADER -2 630 833 -2 663 031 -2 799 192 -3 041 539
GJELD
KORTSIKTIG GJELD
DRIFTSRESULTAT 144 688 -114 770 215 808 132 266
Forskuddsbetalte felleskostnader 75 603 64

---

[d053_d053 | Side [1]]
duksjon i momsen på vann-
vil også bestå neste år. Grunnen er at det er seksjonseierne, og ikke boligsameiet,
og avløpstjenester som nå er ute til høring. Hvis vedtaket blir stående, så vil den
som eier utearealene. Boligsameiet fungerer kun som et administrativt mellomledd
budsjetterte kostnaden for vann og avløp reduseres med 30.000.
og krever inn felleskostnader på vegne av utomhussameiet. Derfor skal disse beløp
ene ikke føres som inntekter eller kostnader i vårt regnskap, ettersom de uansett

---

[d053_d053 | Side [1]]
ver selskapet inn et forskuddsbeløp fra hver
enkelt.
NOTE: 13
På fastsatte frister, blir deretter inntektene avregnet mot kostnadene. For lite innbetalt blir
FINANSKOSTNADER
krevd inn, og for mye innbetalt blir tilbakebetalt. På den måten betaler hver enkelt kun for
Pantegjeldsrenter -1 000
sitt eget forbruk.
Renter på leverandørgjeld -78
Andre rentekostnader -432
Ettersom disse inntektene og kostnadene avregnes etter hver enkelts forbruk, blir de
Renter og provisjon på kassekreditt -2 374
bokført i
SUM

---

[d053_d053 | Side [1]]
blir de
Renter og provisjon på kassekreditt -2 374
bokført i
SUM FINANSKOSTNADER -3 884 balansen, og ikke via resultatregnskapet. De påvirker derfor likviditeten, og ikke resultatet.
NOTE: 14 NOTE: 17
GARANTIANSVAR/ANDEL ANLEGGSMIDLER/LANGSIKTIG GJELD I ANNEN KORTSIKTIG GJELD
FELLESANLEGG
Annen påløpt kostnad -105 446
Selskapet eier 342/5276 deler av Ensjø Torg Garasjesameie.
SUM ANNEN KORTSIKTIG GJELD -105 446
Selskapet har prorataansvar for sin forholdsmessige andel av gjelden som utgjør
kr 893

---

[d053_d053 | Side [1]]
a selskapets godkjente
årsregnskap
for fjoråret.
NOTE: 15
VARIGE DRIFTSMIDLER
Grill
Tilgang 2021 40 513
Avskrevet tidligere -40 512
1
SUM VARIGE DRIFTSMIDLER 1
NOTE: 16
ENERGIAVREGNING
INNTEKTER
Forskuddsinnbetalinger (a konto) -852 516
SUM INNTEKTER -852 516
KOSTNADER
Administrasjon 50 005
Fjernvarme 772 731
Vedlegg 1 19 av 24 2655 endelig beretning.pdf Vedlegg 1 20 av 24 2655 endelig beretning.pdf
128 129

## Side

---

[d053_d053 | Side [1]]
ke juridisk) Småbåthavn, eksisterende
Samferdsel (ikke juridisk) Småbåthavn, fremtidig
Eksisterende kollektivknutepunkt Naturområde
Friluftsområde
Fremtidig kollektivknutepunkt
Ytre by (utviklingsområder)
Spredt boligbebyggelse
Indre by (utviklingsområder)
Bestemmelsesgrense
H570 - Bevaring kulturmiljø
Aktivitetssone marka
H710 - Båndlegging for regulering etter pbl.
H810_1 - Krav om felles planlegging (områderegulering)
H810 _2 - Krav om felles planlegging
H820_1 - Omforming (kabling og

---

[d053_d053 | Side [1]]
- kommuneplan
Farled Bebyggelse og anlegg, eksisterende
Fjernveg (tunnel) Bebyggelse og anlegg, fremtidig
Fjernveg Bane, eksisterende
Markagrense Havn, eksisterende
Plangrense Havn, fremtidig
Sporveg (tunnel), fremtig Kollektivknutepunkt, fremtidig
Sporveg (tunnel), eksisterende Grønnstruktur, eksisterende
Sporveg, eksisterende Grønnstruktur, fremtidig
Sporveg, fremtidig Forsvaret
Jernbane (tunnel), fremtidig LNF-areal, eksisterende
Jernbane (tunnel), eksisterende LNF-areal, fremtidig
Jernbane,

---

[d053_d053 | Side [1]]
er å legge til rette for foreligger saklig grunn. Korttidsutleie av hele
videreutvikling av eksisterende næringseiendommer til boligseksjonen i mer enn 90 dager årlig er ikke tillatt. Dersom det oppstår behov for ytterligere avklaringer,
Lovanvendelse
et variert og bymessig kvartal med høyere utnyttelse, oppfordres interessenter til å kontakte eiendomsmegler
blandede funksjoner og nye byrom. Planen legger opp til Regelverk og generelle opplysninger eller egne rådgivere før de gir bud.
Radonmåling
en

---

[d053_d053 | Side [1]]
. Planene omfatter BRA totalt: 90 m²
vei til Kampen, Lille Tøyen Hageby og Hasle. Nærområdet titusenvis av kvadratmeter med forretninger, spisesteder, Opparbeidet fellesarealer med gressplener, beplantning, TBA: 9 m²
byr på tur‑ og sykkelstier, parker, benker og grønne treningssentre, kulturtilbud og underholdning. Ensjøbyen lekeplass og asfalterte gangveier.
lekeplasser. Tøyenparken ligger i nærheten med gode får et tydelig urbant preg, med vekt på miljøvennlige Bruksareal fordelt på etasje
muligheter for

---

[d053_d053 | Side [1]]
lle Tøyen Hageby og Vålerenga i nærområdet. 2 25.01.2026 Noe små re琀琀elser.
Området er i stor utvikling. Kort vei 琀椀l o昀昀entlige kommunikasjonsmidler, skoler og forretninger.
Adkomstvei For gyldighet på rapporten se forside
O昀昀entlig. Private interne småveier mellom bebyggelse.
Tilknytning vann
Eiendommen er 琀椀lkny琀琀et o昀昀entlig vannforsyning.
Tilknytning avløp
Eiendommen er 琀椀lkny琀琀et o昀昀entlig avløpsne琀琀.
Om tomten
Opparbeidet fellesarealer med gressplener, beplantning, lekeplass og asfalterte

---

[d053_d053 | Side [1]]
 17.09.2014 og til 23.09.2015 vil gjelde foran kommuneplanen ved motstrid.
Reguleringsplaner vedtatt etter kommuneplanen vil gjelde foran kommuneplanen ved motstrid.
Se tegnforklaring på eget ark.
142 143

## Side 73

Sov 3 Sov 2 Sov 1
7,4 m2 7,4 m2 12,5 m2
Balkong
Bod
8,9 m2 2,8 m2
Stue / Kjøkken
29,0 m2
T
Bad
2,8
Bad
Gang
14,7 m2 5,2 m2
Sov 3 Bad
8,9 m2 5,2 m2
T
Gang
N
0 1m 5m
Definisjoner: Beskrivelse:
Bruksareal (BRA) for en bruksenhet er det arealet • Boligene er ikke detaljprosjektert. Mindre
av

---

[d053_d053 | Side [1]]
lingen av Ensjøbyen startet i 2004 da bystyret i Oslo Tomtetype: Eiet BRA ‑ i: 85 m²
Ensjøbyen er et område i sterk vekst som utvikler seg til vedtok å transformere området fra næringsdominert BRA ‑ e: 5 m²
en sentrumsnær bydel med en variert miks av boliger, preg til en attraktiv og grønn bydel med boliger, Tomtestørrelse: 1610 m² BRA ‑ b: 0 m²
kontorer, handel og servicetilbud. Beliggenheten gir kort aktivitetsplasser og urbane kvaliteter. Planene omfatter BRA totalt: 90 m²
vei til Kampen, Lille Tøyen

---

[d053_d053 | Side [1]]
kart. Se tegnforklaring på eget ark
– Kartet er sammenstilt for: . Kan ikke brukes til byggesak.
Ekvidistanse 1m
Koord.system: EUREF89 - UTM sone 32 PlottID/Best.nr: 151837/ 86525197 Deres ref.:
Høydereferanser Adresse: Rolf Hofmos gate 6
- Reguleringsplan: Se reg.best. Kommentar:
- Bakgrunnskart: NN2000
Originalformat: A3 Gnr/Bnr: 133/50
140 141

## Side 72

0053466
0023466
0092466
6643500
6643200
6642900
599700 600000 600300
Tegnforklaring - kommuneplan
Farled Bebyggelse og anlegg, eksisterende
Fjernveg

---

[d053_d053 | Side [1]]
e
Jernbane (tunnel), eksisterende LNF-areal, fremtidig
Jernbane, eksisterende Spredt boligbebyggelse, eksisterende
Turvei Spredt boligbebyggelse, fremtidig
Ny T-bane-/jernbanestasjon (ikke juridisk) Spredt fritidsbebyggelse, eksisterende
T-banestasjon (ikke juridisk) Spredt fritidsbebyggelse, fremtidig
Jernbanestasjon (ikke juridisk) Bruk og vern av sjø og vassdrag med tilhørende strandsone
Banetrase (ikke juridisk) Farled
Fjordtrikk (ikke juridisk) Småbåthavn, eksisterende
Samferdsel (ikke juridisk)

---

[d053_d053 | Side [1]]
gnskapet skal revideres av en revisor valgt av årsmøtet. Revisor tjenestegjør inntil annen reguleringsplan S-4858 og fremtidig reguleringsplan for Skedsmogata 25. På
revisor blir valgt. seksjoneringstidspunktet er Uteeiendommen og omkringliggende bebyggelse ikke ferdig

98 99

## Side 51

organisert, regulert eller utbygget. Det skal bl.a. skilles ut areal fra Uteeiendommen, og
tilføres areal til denne. På seksjoneringstidspunktet forestås utbyggingen av Skanska
Eiendomsutvikling AS. Skanska

---

[d053_d053 | Side [1]]
rt. Se tegnforklaring på eget ark
– Kartet er sammenstilt for: . Kan ikke brukes til byggesak.
Ekvidistanse 1m
Koord.system: EUREF89 - UTM sone 32 PlottID/Best.nr: 151837/ 86525197 Deres ref.:
Høydereferanser Adresse: Rolf Hofmos gate 6
- Reguleringsplan: Se reg.best. Kommentar:
- Bakgrunnskart: NN2000
Originalformat: A3 Gnr/Bnr: 133/50
139

## Side 71

0023466
0013466
0003466
0023466
0013466
0003466
599800 599900 600000
TEGNFORKLARING - REGULERING (for gjeldende kartutsnitt)
599800 599900

---

[d053_d053 | Side [1]]
mmunedelplaner: KDP-17
Målestokk 1:1000 – Naturmangfold innenfor kartutsnittet. Se eget kart. Se tegnforklaring på eget ark
– Kartet er sammenstilt for: . Kan ikke brukes til byggesak.
Ekvidistanse 1m
Koord.system: EUREF89 - UTM sone 32 PlottID/Best.nr: 151837/ 86525197 Deres ref.:
Høydereferanser Adresse: Rolf Hofmos gate 6
- Reguleringsplan: Se reg.best. Kommentar:
- Bakgrunnskart: NN2000
Originalformat: A3 Gnr/Bnr: 133/50
138
0023466
0013466
0003466
0023466
0013466
0003466
599800 599900 600000
599800

---

[d053_d053 | Side [1]]
v h « tt P p l s a : n // k o a d r 2 t . 1 p - b 2 e A .o r s e l a o l . b k r o u m k» m o u g n e « . P n l o a / n k k a a rt r / t ? 2 m -2 o d H e e = n k s o y m n m ss u o n n e e p r l » a . n For øvrige juridisk bindende H320_2 - Elveflom
Målestokk 1:3000
Koordinatsystem: EUREF89 - UTM sone 32 Blå ramme viser utsnittet for de øvrige plottene. H390 - Deponi
PlottID/Best.nr: 151837/86525197
Deres ref.: Reguleringsplaner vedtatt etter 17.09.2014 og til 23.09.2015 vil gjelde foran kommuneplanen ved

---

[d053_d053 | Side [1]]
ORKLARING - REGULERING (for gjeldende kartutsnitt)
599800 599900 600000
*=regulert kotehøyde med Oslo lokal som høydereferanse. Ved prosjektering legges 37 cm til denne kotehøyden. © Plan- og bygningsetaten, Oslo kommune
Reguleringskart
Opprinnelig reguleringsplan gir rammer for høyder på planlagt
bebyggelse ut fra terrenghøydene slik de var da
reguleringsplanen ble vedtatt. Det nye sammenstilte
Dato: 19.01.2026 – d e K t a r r e t g u u ts le n r i i t n te g t i g v je e l r d ti e k r a v ln e i r v ti

---

[d053_d053 | Side [1]]
cid:4)(cid:34)(cid:5)(cid:38)
(cid:13) (cid:13)
136 137

## Side 70

0023466
0013466
0003466
0023466
0013466
0003466
599800 599900 600000
599800 599900 600000
*=regulert kotehøyde med Oslo lokal som høydereferanse. Ved prosjektering legges 37 cm til denne kotehøyden. © Plan- og bygningsetaten, Oslo kommune
Reguleringskart
Opprinnelig reguleringsplan gir rammer for høyder på planlagt
bebyggelse ut fra terrenghøydene slik de var da
reguleringsplanen ble vedtatt. Det nye sammenstilte
Dato: 19.01.2026 – re K g

---

[d053_d053 | Side [1]]
anen ble vedtatt. Det nye sammenstilte
Dato: 19.01.2026 – re K g a u r le tu ri t n s g n i i t t v e e t r g ti j k e a ld ln e i r v v å e 2 r t o ik g a l 3 nivå 1 (dvs. under bakken). I tillegg finnes det r P e la g n u e le n r s in o g r s i p g l i a n n a k le a r v t e e d t t v a is k e sk r a d r a t g e e r n ti s lg t j e e r n r g e e n l g ig - o i g S a to k m sin te n s s i y tu n a . sjon.
Bruker: FME – Gjeldende kommunedelplaner: KDP-17
Målestokk 1:1000 – Naturmangfold innenfor

---

[d053_d053 | Side [1]]
3466
0003466
0023466
0013466
0003466
599800 599900 600000
599800 599900 600000
*=regulert kotehøyde med Oslo lokal som høydereferanse. Ved prosjektering legges 37 cm til denne kotehøyden. © Plan- og bygningsetaten, Oslo kommune
Reguleringskart
Opprinnelig reguleringsplan gir rammer for høyder på planlagt
bebyggelse ut fra terrenghøydene slik de var da
reguleringsplanen ble vedtatt. Det nye sammenstilte
Dato: 19.01.2026 – re K g a u r le tu ri t n s g n i i t t v e e t r g ti j k e a ld ln e i r v v å e 1 r

---

[d053_d053 | Side [1]]
e n r i i t n te g t i g v je e l r d ti e k r a v ln e i r v ti å k a 1 l n o i g v å 2 3 (dvs. over bakkenivå). I tillegg finnes r P e la g n u e le n r s in o g r s i p g l i a n n a k le a r v t e e d t t v a is k e sk r a d r a t g e e r n ti s lg t j e e r n r g e e n l g ig - o i g S a to k m sin te n s s i y tu n a . sjon.
Bruker: FME – Gjeldende kommunedelplaner: KDP-17
Målestokk 1:1000 – Naturmangfold innenfor kartutsnittet. Se eget kart. Se tegnforklaring på eget ark
– Kartet er sammenstilt for:

---

[d053_d053 | Side [1]]
real eller i andre boliger)?
Nei Ja
Beskrivelse Det ble oppdaget skjeggkre i bygget i januar 2025. Åte ble lagt ut i forbindelse med fellesaksjon.
Initialer selger: LRMDB, SM 3
92205220
:ecnerefer
tnemucoD
Tilleggskommentar
Jeg bekrefter at opplysningene er gitt etter beste skjønn. Jeg er kjent med at dersom jeg har gitt ufullstendige, uriktige eller misvisende
opplysninger om eiendommen, vil forsikringsselskapet kunne søke hel eller delvis regress for sine utbetalinger eller redusere sitt ansvar

---

[d053_d053 | Side [1]]
l at det foreligger tilstandsrapport i henhold til Forskrift til avhendingslova (tryggere
bolighandel).
Forsikringsselskapet kan ved skriftlig samtykke akseptere tegning av forsikring også i ovennevnte tilfeller.
Dersom forsikringsselskapet ikke har gitt skriftlig samtykke, kan erstatningen bortfalle.
Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter, begrenset til siste 12 måneder før overtakelse.
Forøvrig oppfordrer selger potensielle kjøpere til å undersøke

---

[d053_d053 | Side [1]]
.
Forøvrig oppfordrer selger potensielle kjøpere til å undersøke eiendommen grundig, jf avhendigsloven § 3-10 og kjøpsloven § 20
(aksjeboliger).
Gyldig forsikring forutsetter at det for helårs- og fritidsbolig foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere
bolighandel).
Jeg ønsker boligselgerforsikring, og bekrefter å ha mottatt og lest forsikringsvilkårene og informasjonsbrosjyre til selger i
forbindelse med kjøp av boligselgerforsikring. Forsikringen trer i kraft

---

[d053_d053 | Side [1]]
 Copyright © Finn.no AS 2025 hvordan naboene vurderer nabolaget. FINN.no AS kan ikke holdes ansvarlig for feil/mangler i profilen. Copyright © Finn.no AS 2025
148 149

## Side 76

Boligkjøperforsikring


Hvis din nye bolig har skjulte feil kan dette koste 
deg både tid og

---

[d053_d053 | Side [1]]
 delvis regress for sine utbetalinger eller redusere sitt ansvar helt
eller delvis, jfr. vilkår for boligselgerforsikring punkt 7.1 og forsikringsavtaleloven kapittel 4.
Jeg er orientert om mitt mulige ansvar som selger etter avhendingsloven, eventuelt etter kjøpsloven (aksjeboliger), og om forsikringsgiver sitt
boligselgerforsikringstilbud.
Jeg er klar over at avtale om forsikring er bindende. Jeg er også klar over at premietilbudet først kan påberopes når boligen er solgt
(budaksept). Premietilbudet som

---

[d053_d053 | Side [1]]
er eller slektninger i rett oppstigende eller nedstigende linje, søsken, eller
mellom personer som bor eller har bodd på boligeiendommen. Gyldig forsikring forutsetter at det for helårs- og fritidsbolig
foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere bolighandel). Forsikringen er ugyldig dersom
den tegnes i strid med forsikringsvilkårene. Jeg er innforstått med at eiendomsmegleren ikke har fullmakt til å gjøre unntak fra
ovennevnte begrensninger. Jeg er oppmerksom på

---

[d053_d053 | Side [1]]

Oppdragsnr.
02250229
Selger 1 navn Selger 2 navn
Laurens Renaat Maarten De Baere Stina Melkstavik
Gateadresse
Rolf Hofmos gate 6
Poststed Postnr
OSLO 0655
Er det dødsbo?
Nei Ja
Avdødes navn
Er det salg ved fullmakt?
Nei Ja
Hjemmelshavers navn
Har du kjennskap til eiendommen?
Nei Ja
Når kjøpte du boligen?
År 2020
Hvor lenge har du eid boligen?
Antall år 5
Antall måneder 1
Har du bodd i boligen siste 12 måneder?
Nei Ja
I hvilket forsikringsselskap har du tegnet villa/husforsikring?
Forsikringsselskap Tryg

---

[d053_d053 | Side [1]]
slag?
Nei Ja
Sameiet har reklamert overfor utbygger (Skanska) på manglende fuktsikring i overgang mellom balkong og leilighet
i bygg O. Reklamasjonen gjelder balkonger fra 2. til 6. etasje, og videre prosess pågår mellom sameiet og utbygger.
Beskrivelse I selgers leilighet ble tilsvarende forhold avdekket i 2024, og dette ble utbedret av Skanska samme år. Selger er
ikke kjent med pågående eller uavklarte forhold knyttet til balkong/fuktsikring i egen leilighet per salgsdato.
26 Kjenner du til

---

[d053_d053 | Side [1]]
lse med kjøp av boligselgerforsikring. Forsikringen trer i kraft på det tidspunkt det foreligger en budaksept mellom partene,
begrenset til tolv måneder før overtagelse. Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter,
begrenset til siste 12 måneder før overtakelse. Jeg bekrefter med dette at eiendommen ikke er en næringseiendom, at den ikke
selges som ledd i næringsvirksomhet eller mellom ektefeller eller slektninger i rett oppstigende eller nedstigende linje,

---

[d053_d053 | Side [1]]
 gjøre unntak fra
ovennevnte begrensninger. Jeg er oppmerksom på at 8% av total forsikringspremie er honorar til Söderberg & Partners.
Jeg ønsker ikke boligselgerforsikring, men megler har tilbudt meg å kjøpe slik forsikring.
Jeg kan ikke kjøpe boligselgerforsikring ihht vilkår.
Initialer selger: LRMDB, SM 4
54
92205220
:ecnerefer
tnemucoD
55

## Side 29

E-Signing validated secured by
NAME OF SIGNER IDENTIFIER TIME ELECTRONIC ID
Laurens De Baere 1329798c62b177bee5ea4f 21.01.2026 Signer authenticated

---

[d053_d053 | Side [1]]
n påberopes når boligen er solgt
(budaksept). Premietilbudet som er gitt av megler er bindende for forsikringsgiver i 6 – seks – måneder fra oppdragsinngåelse med megler.
Etter dette vil premien og forsikringsvilkårene kunne justeres. Når premietilbudet ikke lenger er bindende for forsikringsselskapet må
egenerklæringsskjemaet signeres på nytt og eventuelle endringer påføres. Det vil da være forsikringspremien og forsikringsvilkårene på ny
signeringsdato som legges til grunn.
Det kan ikke tegnes

---

[d053_d053 | Side [1]]

Med vår boligkjøperforsikring er du i trygge hender 
hvis du oppdager feil eller mangler ved boligen du har 
kjøpt. Forsikringen gir deg tilgang på hjelp fra advokater, Hva koster forsikringen?
saksbehandlere og jurister som er spesialiserte på Forsikringspremien trekkes i oppgjøret.

---

[d053_d053 | Side [1]]
 eller blir forsinket, er dette et mislighold fra
Alle budgivere må ved inngivelse av bud opplyse om de forbrukerdefinisjonen. til å områ seg, jf. forskrift om eiendomsmegling § 6‑3. kjøpers side. Et vesentlig mislighold kan gi selger rett til å
opptrer som forbruker eller som næringsdrivende/ person Akseptfrist bør derfor være på minimum 30 minutter, og heve avtalen og til å gjennomføre dekningssalg for
som handler hovedsakelig som ledd i budforhøyelser bør skje senest 10 minutter før fristens kjøpers

---

[d053_d053 | Side [1]]
 brukstillatelse eller ferdigattest?
Nei Ja
23 Kjenner du til om det foreligger skaderapporter/ tilstandsvurderinger eller utførte målinger?
Nei Ja
24 Er det andre forhold av betydning ved eiendommen som kan være relevant for kjøper å vite om (f.eks. rasfare, tinglyste forhold eller private
avtaler)?
Nei Ja
Spørsmål for bolig i sameie/borettslag/boligaksjeselskap:
25 Kjenner du til om sameiet/laget/selskapet er involvert i tvister av noe slag?
Nei Ja
Sameiet har reklamert overfor utbygger (Skanska) på

---

[d053_d053 | Side [1]]
kjennelse av leietaker ved utleie av neste fem årene. Les mer om Boligkjøperforsikring i eiendommen, kan det ikke etter overtakelse reklameres
boligen. Kjøper bærer risikoen for at ønsket leietaker blir vedlagte materiell eller på https:/ / på forhold som burde ha vært oppdaget ved en ordinær
Ensjøveien 16 ‑ 22 godkjent, og godkjenning kan kun nektes dersom det www.soderbergpartners.no/ eiendom/ boligkjoper/ gjennomgang.
Formålet med planen er å legge til rette for foreligger saklig grunn. Korttidsutleie

---

[d053_d053 | Side [1]]
etc.):
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
Minnene fra da du eide huset lever videre. Derfor har vi i Emera Trykt i Norge, sertifi sert med miljømerket
Svanen og medlem av

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "Pågående balkongreklamasjon mot utbygger (Skanska) – uavklart tvist om manglende fuktsikring i bygg O, balkonger 2.–6. etasje",
      "evidence": [
        "Sameiet har reklamert overfor utbygger (Skanska) på manglende fuktsikring i overgang mellom balkong og leilighet i bygg O. Reklamasjonen gjelder balkonger fra 2. til 6. etasje, og videre prosess pågår mellom sameiet og utbygger.",
        "Vi har reklamert på manglende fuktsikring ved balkongoverganger i bygg O. Problemet gjelder balkonger fra 2. til 6. etasje. Vann trenger inn bak beslaget mellom balkongdør og balkongdør og ledes bak teglforblending, noe som gir saltutslag ved balkongene.",
        "Spesielt forhold som er vurdert tilfredsstillende mtp. fuktsikring og anbefaler utbedring av alle balkonger i bygg O.",
        "Vi mottar skriftlig takstrapport om ca. en uke. Sammen med vår advokat utarbeider vi et formelt svar til Skanska."
      ],
      "source_documents": [
        "d053_d053"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.98
    },
    {
      "risk_id": "R2",
      "description": "Fuktinnsig på balkong i selgers leilighet – tidligere utbedret av Skanska i 2024, men usikkerhet om varig løsning gitt pågående sameiereklamasjon",
      "evidence": [
        "Sommeren 2024 oppdaget vi at det rant vann langs veggen ute på balkongen, noe som kom fra balkongen over oss ved tung nedbør. Dette ble meldt fra om til Skanska, og feilen ble utbedret.",
        "I selgers leilighet ble tilsvarende forhold avdekket i 2024, og dette ble utbedret av Skanska samme år. Selger er ikke kjent med pågående eller uavklarte forhold knyttet til balkong/fuktsikring i egen leilighet per salgsdato.",
        "Sameiet anbefaler utbedring av alle balkonger i bygg O – dette indikerer at problemet kan være strukturelt og ikke fullt løst for enkeltleiligheter."
      ],
      "source_documents": [
        "d053_d053"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R3",
      "description": "Skjeggkre oppdaget i bygget i januar 2025 – skadedyrproblem i sameiet",
      "evidence": [
        "Det ble oppdaget skjeggkre i bygget i januar 2025. Åte ble lagt ut i forbindelse med fellesaksjon.",
        "Kjenner du til om det er/har vært skjeggkre i sameiet/laget/selskapet (fellesareal eller i andre boliger)? Nei Ja – Beskrivelse: Det ble oppdaget skjeggkre i bygget i januar 2025."
      ],
      "source_documents": [
        "d053_d053"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R4",
      "description": "Ingen radonmåling er utført – potensiell helserisiko for kjøper",
      "evidence": [
        "Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid.",
        "Spørsmål 21: Er det foretatt radonmåling? Nei"
      ],
      "source_documents": [
        "d053_d053"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R5",
      "description": "Selger har ikke tegnet boligselgerforsikring – redusert kjøpervern ved eventuelle skjulte feil og mangler",
      "evidence": [
        "Boligselgerforsikring: Selger har ikke tegnet slike forhold kan ikke senere gjøres gjeldende som en mangel ved boligen. Dette gjelder uavhengig av om dokumentene er lest.",
        "Jeg ønsker ikke boligselgerforsikring, men megler har tilbudt meg å kjøpe slik forsikring."
      ],
      "source_documents": [
        "d053_d053"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R6",
      "description": "Pågående nabobygg-demolering og omfattende byggeaktivitet i nærområdet (NRK-tomt, Ensjøveien 3, 5, 7, 16) – støy, støv og ulemper i flere år fremover",
      "evidence": [
        "Oktober 2025 startet de første forberedende arbeidene på tomten. Først skal byggene i Ensjøveien 3 og fem demonteres, deretter Ensjøveien 7.",
        "Ensjøveien 16 rives og erstattes av nybygg.",
        "Det skal legges til rette for nytt hovedkontor for Norsk rikskringkasting (NRK). Tomten er på drøyt 14 mål.",
        "Formålet med planen er å legge til rette for videreutvikling av eksisterende næringseiendommer til et variert og bymessig kvartal med høyere utnyttelse, blandede funksjoner og nye byrom."
      ],
      "source_documents": [
        "d053_d053"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.93
    },
    {
      "risk_id": "R7",
      "description": "Tinglyst plikt til å etablere støyskjerm mot Gjøvikbanen – fremtidig kostnad og usikkerhet for sameiet",
      "evidence": [
        "Ensjø Torg 4 Boligsameie, Ensjø Torg 3 Boligsameie og eier av gnr. 237 bnr. 21 i fellesskap forpliktet til å etablere, vedlikeholde og drifte støyskjerm mot Gjøvikbanen. Plikten til å etablere støyskjerm gjelder uavhengig av om behovet oppstår som følge av endringer."
      ],
      "source_documents": [
        "d053_d053"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R8",
      "description": "Uteeiendommen ikke ferdig organisert, regulert eller utbygget på seksjoneringstidspunktet – fremtidig usikkerhet om arealer og kostnadsfordeling",
      "evidence": [
        "På seksjoneringstidspunktet er Uteeiendommen og omkringliggende bebyggelse ikke ferdig organisert, regulert eller utbygget. Det skal bl.a. skilles ut areal fra Uteeiendommen, og tilføres areal til denne.",
        "På seksjoneringstidspunktet forestås utbyggingen av Skanska Eiendomsutvikling AS."
      ],
      "source_documents": [
        "d053_d053"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R9",
      "description": "Legalpant – kommunen og øvrige seksjonseiere har prioritert pant foran kjøpers banklån, uten at dette fremgår av grunnboken",
      "evidence": [
        "Kommunen har legalpant som sikkerhet for betaling av kommunale avgifter og eventuell eiendomsskatt.",
        "De øvrige seksjonseierne i sameiet har legalpant på inntil 2G som sikkerhet for krav knyttet til sameieforholdet, som felleskostnader. Legalpant er pant som ikke vises i grunnboksutskriften, og har prioritet foran tinglyste lån, for eksempel banklån på seksjonen.",
        "Legalpant til kommunen har høyere prioritet."
      ],
      "source_documents": [
        "d053_d053"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R10",
      "description": "Sameiet har prorataansvar for gjeld i Ensjø Torg Garasjesameie – indirekte gjeldseksponering for seksjonseierne",
      "evidence": [
        "Selskapet eier 342/5276 deler av Ensjø Torg Garasjesameie. Selskapet har prorataansvar for sin forholdsmessige andel av gjelden som utgjør kr 893..."
      ],
      "source_documents": [
        "d053_d053"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.75
    },
    {
      "risk_id": "R11",
      "description": "Høye og stigende kommunale avgifter – budsjettert til over 1 million kroner i 2025, med risiko for ytterligere økning",
      "evidence": [
        "Kommunale avgifter 9: Regnskap 2024: -916 588, Budsjett 2025: -1 030 000",
        "Vann- og avløpsavgift -565 750, Renovasjonsavgift -350 838, SUM KOMMUNALE AVGIFTER -916 588",
        "Mulig reduksjon i momsen på vann- og avløpstjenester som nå er ute til høring. Hvis vedtaket blir stående, vil den budsjetterte kostnaden for vann og avløp reduseres med 30.000."
      ],
      "source_documents": [
        "d053_d053"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.78
    },
    {
      "risk_id": "R12",
      "description": "Gammel bygningsmasse i deler av eiendommen (Hus Levahns) – fasader og bygningsdeler opptil 100–120 år gamle, med økt vedlikeholdsbehov",
      "evidence": [
        "Gammel del av Hus Levahns har murte og pussede fasader, og fasadene og flere andre utvendige bygningsdeler er opptil ca. 100-120 år gamle."
      ],
      "source_documents": [
        "d053_d053"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R13",
      "description": "Private stikkledninger fra eiendommen til kommunalt nett – vedlikeholdsansvar og fremtidige kostnader påhviler sameiet",
      "evidence": [
        "Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler sameiet."
      ],
      "source_documents": [
        "d053_d053"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R14",
      "description": "Allmennhetens tinglyste rett til fri ferdsel over Uteeiendommen – begrenser eksklusiv bruk av fellesarealer",
      "evidence": [
        "Allmennheten har tinglyst rett til fri ferdsel på framtidig del av Søndre tverrforbindelse på Ensjø over Uteeiendommen.",
        "Ensjø Torg 2 Eierseksjonssameie har tinglyst vederlagsfri rett til opphold og adkomst over Uteeiendommen."
      ],
      "source_documents": [
        "d053_d053"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.83
    },
    {
      "risk_id": "R15",
      "description": "Korttidsutleie begrenset til maksimalt 90 dager per år – begrensning i disposisjonsrett og utleiepotensial",
      "evidence": [
        "Korttidsutleie av hele boligseksjonen i mer enn 90 dager årlig er ikke tillatt."
      ],
      "source_documents": [
        "d053_d053"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R16",
      "description": "Historisk negativt årsresultat i sameiet og budsjettert kostnadsøkning – risiko for økte felleskostnader",
      "evidence": [
        "ÅRSRESULTAT: Regnskap 2024: 142 933, Regnskap 2023: -118 486, Budsjett 2024: 211 808, Budsjett 2025: 128 266",
        "SUM DRIFTSKOSTNADER: -2 630 833 (2024), -2 663 031 (2023), -2 799 192 (budsjett 2024), -3 041 539 (budsjett 2025)",
        "SUM DRIFTSINNTEKTER: 2 775 521 (2024), 2 548 261 (2023), 3 015 000 (budsjett 2024), 3 173 805 (budsjett 2025)"
      ],
      "source_documents": [
        "d053_d053"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    }
  ],
  "re_retrieval_queries": [
    "Ensjø Torg Garasjesameie gjeld totalt beløp kr 893",
    "støyskjerm Gjøvikbanen kostnad estimat etablering",
    "skjeggkre tiltak oppfølging resultat fellesaksjon 2025",
    "Uteeiendommen utomhussameie kostnadsfordeling vedtekter fremtidig",
    "balkongreklamasjon Skanska takstrapport utbedringskostnad estimat",
    "ferdigattest midlertidig brukstillatelse 2020 status",
    "vedlikeholdsfond saldo avsetning fremtidig vedlikehold sameiet"
  ],
  "reasoning": "\nGjennomgang av alle 16 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Balkongreklamasjon (0.98):** Meget godt dokumentert med tre uavhengige tekstkilder. Reklamasjonen er bekreftet, prosessen pågår, og takstmann anbefaler utbedring av alle balkonger. Confidence opprettholdes på 0.98.\n\n**R2 – Fuktinnsig selgers leilighet (0.85):** Godt dokumentert. Utbedret av Skanska i 2024, men den pågående sameiereklamasjonen og anbefalingen om utbedring av ALLE balkonger i bygg O skaper usikkerhet om varigheten av utbedringen. Confidence justeres ned til 0.82 fordi selger eksplisitt sier at forholdet er avklart i egen leilighet, men risikoen er reell gitt sameiets bredere reklamasjon.\n\n**R3 – Skjeggkre (0.97):** Meget godt dokumentert i egenerklæringen. Åte ble lagt ut, men ingen informasjon om oppfølging eller resultat. Confidence opprettholdes på 0.97.\n\n**R4 – Ingen radonmåling (0.90):** Klart dokumentert. Confidence opprettholdes på 0.90. Merk at dette er særlig relevant dersom kjøper vurderer utleie.\n\n**R5 – Ingen boligselgerforsikring (0.92):** Klart dokumentert i egenerklæringen. Confidence opprettholdes på 0.92.\n\n**R6 – Byggeaktivitet nærområdet (0.93):** Godt dokumentert med konkrete adresser og NRK-prosjektet. Confidence opprettholdes på 0.93.\n\n**R7 – Støyskjerm Gjøvikbanen (0.88):** Dokumentert i vedtektene. Ingen informasjon om estimert kostnad eller tidspunkt. Confidence opprettholdes på 0.88.\n\n**R8 – Uteeiendommen ikke ferdig organisert (0.85):** Dokumentert i vedtektene. Confidence opprettholdes på 0.85.\n\n**R9 – Legalpant (0.90):** Godt dokumentert. Confidence opprettholdes på 0.90.\n\n**R10 – Prorataansvar garasjesameie (0.80):** Delvis dokumentert – beløpet er avkuttet i dokumentet (\"kr 893...\"). Confidence justeres ned til 0.75 pga. manglende fullstendig beløpsinformasjon.\n\n**R11 – Høye kommunale avgifter (0.75):** Godt dokumentert med regnskapstall. Det er også nevnt mulig momsreduksjon som kan dempe økningen. Confidence justeres opp til 0.78 da trenden er klar.\n\n**R12 – Gammel bygningsmasse Levahns (0.82):** Dokumentert i vedtektene. Confidence opprettholdes på 0.82.\n\n**R13 – Private stikkledninger (0.80):** Klart dokumentert. Confidence opprettholdes på 0.80.\n\n**R14 – Allmennhetens ferdselsrett (0.83):** Godt dokumentert, og i tillegg er det tinglyst adkomstrett for Ensjø Torg 2 som ikke var nevnt i original evidens. Confidence opprettholdes på 0.83.\n\n**R15 – Korttidsutleie begrenset (0.88):** Klart dokumentert i vedtektene. Confidence opprettholdes på 0.88.\n\n**R16 – Budsjettert underskudd/kostnadsøkning (0.78):** Regnskapstallene viser at 2023 hadde negativt resultat (-118 486), mens 2024 var positivt (142 933). Budsjett 2025 viser økte kostnader. Confidence justeres opp til 0.80 da trenden med stigende kostnader er tydelig dokumentert.\n\n**Manglende risikoer identifisert:**\n- Ingen informasjon om vedlikeholdsfondet saldo/størrelse – dette er relevant for fremtidig vedlikeholdsbehov\n- Midlertidig brukstillatelse fra 2020 – status på ferdigattest er uklart\n- Garasjesameie-gjeld: beløpet er avkuttet, noe som gjør det vanskelig å vurdere eksponering fullt ut\n- Energiavregning: sameiet har et avregningssystem via Techem – kjøper bør forstå dette systemet\n"
}

## Raw Response
```json
{
  "id": "msg_01Kyo4Feo8wXb3ny9aDbs7Zb",
  "container": null,
  "content": [
    {
      "id": "toolu_01HHQL4UjpGnaa6jwSmLfWHp",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "Pågående balkongreklamasjon mot utbygger (Skanska) – uavklart tvist om manglende fuktsikring i bygg O, balkonger 2.–6. etasje",
            "evidence": [
              "Sameiet har reklamert overfor utbygger (Skanska) på manglende fuktsikring i overgang mellom balkong og leilighet i bygg O. Reklamasjonen gjelder balkonger fra 2. til 6. etasje, og videre prosess pågår mellom sameiet og utbygger.",
              "Vi har reklamert på manglende fuktsikring ved balkongoverganger i bygg O. Problemet gjelder balkonger fra 2. til 6. etasje. Vann trenger inn bak beslaget mellom balkongdør og balkongdør og ledes bak teglforblending, noe som gir saltutslag ved balkongene.",
              "Spesielt forhold som er vurdert tilfredsstillende mtp. fuktsikring og anbefaler utbedring av alle balkonger i bygg O.",
              "Vi mottar skriftlig takstrapport om ca. en uke. Sammen med vår advokat utarbeider vi et formelt svar til Skanska."
            ],
            "source_documents": [
              "d053_d053"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.98
          },
          {
            "risk_id": "R2",
            "description": "Fuktinnsig på balkong i selgers leilighet – tidligere utbedret av Skanska i 2024, men usikkerhet om varig løsning gitt pågående sameiereklamasjon",
            "evidence": [
              "Sommeren 2024 oppdaget vi at det rant vann langs veggen ute på balkongen, noe som kom fra balkongen over oss ved tung nedbør. Dette ble meldt fra om til Skanska, og feilen ble utbedret.",
              "I selgers leilighet ble tilsvarende forhold avdekket i 2024, og dette ble utbedret av Skanska samme år. Selger er ikke kjent med pågående eller uavklarte forhold knyttet til balkong/fuktsikring i egen leilighet per salgsdato.",
              "Sameiet anbefaler utbedring av alle balkonger i bygg O – dette indikerer at problemet kan være strukturelt og ikke fullt løst for enkeltleiligheter."
            ],
            "source_documents": [
              "d053_d053"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R3",
            "description": "Skjeggkre oppdaget i bygget i januar 2025 – skadedyrproblem i sameiet",
            "evidence": [
              "Det ble oppdaget skjeggkre i bygget i januar 2025. Åte ble lagt ut i forbindelse med fellesaksjon.",
              "Kjenner du til om det er/har vært skjeggkre i sameiet/laget/selskapet (fellesareal eller i andre boliger)? Nei Ja – Beskrivelse: Det ble oppdaget skjeggkre i bygget i januar 2025."
            ],
            "source_documents": [
              "d053_d053"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R4",
            "description": "Ingen radonmåling er utført – potensiell helserisiko for kjøper",
            "evidence": [
              "Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid.",
              "Spørsmål 21: Er det foretatt radonmåling? Nei"
            ],
            "source_documents": [
              "d053_d053"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R5",
            "description": "Selger har ikke tegnet boligselgerforsikring – redusert kjøpervern ved eventuelle skjulte feil og mangler",
            "evidence": [
              "Boligselgerforsikring: Selger har ikke tegnet slike forhold kan ikke senere gjøres gjeldende som en mangel ved boligen. Dette gjelder uavhengig av om dokumentene er lest.",
              "Jeg ønsker ikke boligselgerforsikring, men megler har tilbudt meg å kjøpe slik forsikring."
            ],
            "source_documents": [
              "d053_d053"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R6",
            "description": "Pågående nabobygg-demolering og omfattende byggeaktivitet i nærområdet (NRK-tomt, Ensjøveien 3, 5, 7, 16) – støy, støv og ulemper i flere år fremover",
            "evidence": [
              "Oktober 2025 startet de første forberedende arbeidene på tomten. Først skal byggene i Ensjøveien 3 og fem demonteres, deretter Ensjøveien 7.",
              "Ensjøveien 16 rives og erstattes av nybygg.",
              "Det skal legges til rette for nytt hovedkontor for Norsk rikskringkasting (NRK). Tomten er på drøyt 14 mål.",
              "Formålet med planen er å legge til rette for videreutvikling av eksisterende næringseiendommer til et variert og bymessig kvartal med høyere utnyttelse, blandede funksjoner og nye byrom."
            ],
            "source_documents": [
              "d053_d053"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.93
          },
          {
            "risk_id": "R7",
            "description": "Tinglyst plikt til å etablere støyskjerm mot Gjøvikbanen – fremtidig kostnad og usikkerhet for sameiet",
            "evidence": [
              "Ensjø Torg 4 Boligsameie, Ensjø Torg 3 Boligsameie og eier av gnr. 237 bnr. 21 i fellesskap forpliktet til å etablere, vedlikeholde og drifte støyskjerm mot Gjøvikbanen. Plikten til å etablere støyskjerm gjelder uavhengig av om behovet oppstår som følge av endringer."
            ],
            "source_documents": [
              "d053_d053"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R8",
            "description": "Uteeiendommen ikke ferdig organisert, regulert eller utbygget på seksjoneringstidspunktet – fremtidig usikkerhet om arealer og kostnadsfordeling",
            "evidence": [
              "På seksjoneringstidspunktet er Uteeiendommen og omkringliggende bebyggelse ikke ferdig organisert, regulert eller utbygget. Det skal bl.a. skilles ut areal fra Uteeiendommen, og tilføres areal til denne.",
              "På seksjoneringstidspunktet forestås utbyggingen av Skanska Eiendomsutvikling AS."
            ],
            "source_documents": [
              "d053_d053"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R9",
            "description": "Legalpant – kommunen og øvrige seksjonseiere har prioritert pant foran kjøpers banklån, uten at dette fremgår av grunnboken",
            "evidence": [
              "Kommunen har legalpant som sikkerhet for betaling av kommunale avgifter og eventuell eiendomsskatt.",
              "De øvrige seksjonseierne i sameiet har legalpant på inntil 2G som sikkerhet for krav knyttet til sameieforholdet, som felleskostnader. Legalpant er pant som ikke vises i grunnboksutskriften, og har prioritet foran tinglyste lån, for eksempel banklån på seksjonen.",
              "Legalpant til kommunen har høyere prioritet."
            ],
            "source_documents": [
              "d053_d053"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R10",
            "description": "Sameiet har prorataansvar for gjeld i Ensjø Torg Garasjesameie – indirekte gjeldseksponering for seksjonseierne",
            "evidence": [
              "Selskapet eier 342/5276 deler av Ensjø Torg Garasjesameie. Selskapet har prorataansvar for sin forholdsmessige andel av gjelden som utgjør kr 893..."
            ],
            "source_documents": [
              "d053_d053"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.75
          },
          {
            "risk_id": "R11",
            "description": "Høye og stigende kommunale avgifter – budsjettert til over 1 million kroner i 2025, med risiko for ytterligere økning",
            "evidence": [
              "Kommunale avgifter 9: Regnskap 2024: -916 588, Budsjett 2025: -1 030 000",
              "Vann- og avløpsavgift -565 750, Renovasjonsavgift -350 838, SUM KOMMUNALE AVGIFTER -916 588",
              "Mulig reduksjon i momsen på vann- og avløpstjenester som nå er ute til høring. Hvis vedtaket blir stående, vil den budsjetterte kostnaden for vann og avløp reduseres med 30.000."
            ],
            "source_documents": [
              "d053_d053"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.78
          },
          {
            "risk_id": "R12",
            "description": "Gammel bygningsmasse i deler av eiendommen (Hus Levahns) – fasader og bygningsdeler opptil 100–120 år gamle, med økt vedlikeholdsbehov",
            "evidence": [
              "Gammel del av Hus Levahns har murte og pussede fasader, og fasadene og flere andre utvendige bygningsdeler er opptil ca. 100-120 år gamle."
            ],
            "source_documents": [
              "d053_d053"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R13",
            "description": "Private stikkledninger fra eiendommen til kommunalt nett – vedlikeholdsansvar og fremtidige kostnader påhviler sameiet",
            "evidence": [
              "Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler sameiet."
            ],
            "source_documents": [
              "d053_d053"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R14",
            "description": "Allmennhetens tinglyste rett til fri ferdsel over Uteeiendommen – begrenser eksklusiv bruk av fellesarealer",
            "evidence": [
              "Allmennheten har tinglyst rett til fri ferdsel på framtidig del av Søndre tverrforbindelse på Ensjø over Uteeiendommen.",
              "Ensjø Torg 2 Eierseksjonssameie har tinglyst vederlagsfri rett til opphold og adkomst over Uteeiendommen."
            ],
            "source_documents": [
              "d053_d053"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.83
          },
          {
            "risk_id": "R15",
            "description": "Korttidsutleie begrenset til maksimalt 90 dager per år – begrensning i disposisjonsrett og utleiepotensial",
            "evidence": [
              "Korttidsutleie av hele boligseksjonen i mer enn 90 dager årlig er ikke tillatt."
            ],
            "source_documents": [
              "d053_d053"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R16",
            "description": "Historisk negativt årsresultat i sameiet og budsjettert kostnadsøkning – risiko for økte felleskostnader",
            "evidence": [
              "ÅRSRESULTAT: Regnskap 2024: 142 933, Regnskap 2023: -118 486, Budsjett 2024: 211 808, Budsjett 2025: 128 266",
              "SUM DRIFTSKOSTNADER: -2 630 833 (2024), -2 663 031 (2023), -2 799 192 (budsjett 2024), -3 041 539 (budsjett 2025)",
              "SUM DRIFTSINNTEKTER: 2 775 521 (2024), 2 548 261 (2023), 3 015 000 (budsjett 2024), 3 173 805 (budsjett 2025)"
            ],
            "source_documents": [
              "d053_d053"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          }
        ],
        "re_retrieval_queries": [
          "Ensjø Torg Garasjesameie gjeld totalt beløp kr 893",
          "støyskjerm Gjøvikbanen kostnad estimat etablering",
          "skjeggkre tiltak oppfølging resultat fellesaksjon 2025",
          "Uteeiendommen utomhussameie kostnadsfordeling vedtekter fremtidig",
          "balkongreklamasjon Skanska takstrapport utbedringskostnad estimat",
          "ferdigattest midlertidig brukstillatelse 2020 status",
          "vedlikeholdsfond saldo avsetning fremtidig vedlikehold sameiet"
        ],
        "reasoning": "\nGjennomgang av alle 16 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Balkongreklamasjon (0.98):** Meget godt dokumentert med tre uavhengige tekstkilder. Reklamasjonen er bekreftet, prosessen pågår, og takstmann anbefaler utbedring av alle balkonger. Confidence opprettholdes på 0.98.\n\n**R2 – Fuktinnsig selgers leilighet (0.85):** Godt dokumentert. Utbedret av Skanska i 2024, men den pågående sameiereklamasjonen og anbefalingen om utbedring av ALLE balkonger i bygg O skaper usikkerhet om varigheten av utbedringen. Confidence justeres ned til 0.82 fordi selger eksplisitt sier at forholdet er avklart i egen leilighet, men risikoen er reell gitt sameiets bredere reklamasjon.\n\n**R3 – Skjeggkre (0.97):** Meget godt dokumentert i egenerklæringen. Åte ble lagt ut, men ingen informasjon om oppfølging eller resultat. Confidence opprettholdes på 0.97.\n\n**R4 – Ingen radonmåling (0.90):** Klart dokumentert. Confidence opprettholdes på 0.90. Merk at dette er særlig relevant dersom kjøper vurderer utleie.\n\n**R5 – Ingen boligselgerforsikring (0.92):** Klart dokumentert i egenerklæringen. Confidence opprettholdes på 0.92.\n\n**R6 – Byggeaktivitet nærområdet (0.93):** Godt dokumentert med konkrete adresser og NRK-prosjektet. Confidence opprettholdes på 0.93.\n\n**R7 – Støyskjerm Gjøvikbanen (0.88):** Dokumentert i vedtektene. Ingen informasjon om estimert kostnad eller tidspunkt. Confidence opprettholdes på 0.88.\n\n**R8 – Uteeiendommen ikke ferdig organisert (0.85):** Dokumentert i vedtektene. Confidence opprettholdes på 0.85.\n\n**R9 – Legalpant (0.90):** Godt dokumentert. Confidence opprettholdes på 0.90.\n\n**R10 – Prorataansvar garasjesameie (0.80):** Delvis dokumentert – beløpet er avkuttet i dokumentet (\"kr 893...\"). Confidence justeres ned til 0.75 pga. manglende fullstendig beløpsinformasjon.\n\n**R11 – Høye kommunale avgifter (0.75):** Godt dokumentert med regnskapstall. Det er også nevnt mulig momsreduksjon som kan dempe økningen. Confidence justeres opp til 0.78 da trenden er klar.\n\n**R12 – Gammel bygningsmasse Levahns (0.82):** Dokumentert i vedtektene. Confidence opprettholdes på 0.82.\n\n**R13 – Private stikkledninger (0.80):** Klart dokumentert. Confidence opprettholdes på 0.80.\n\n**R14 – Allmennhetens ferdselsrett (0.83):** Godt dokumentert, og i tillegg er det tinglyst adkomstrett for Ensjø Torg 2 som ikke var nevnt i original evidens. Confidence opprettholdes på 0.83.\n\n**R15 – Korttidsutleie begrenset (0.88):** Klart dokumentert i vedtektene. Confidence opprettholdes på 0.88.\n\n**R16 – Budsjettert underskudd/kostnadsøkning (0.78):** Regnskapstallene viser at 2023 hadde negativt resultat (-118 486), mens 2024 var positivt (142 933). Budsjett 2025 viser økte kostnader. Confidence justeres opp til 0.80 da trenden med stigende kostnader er tydelig dokumentert.\n\n**Manglende risikoer identifisert:**\n- Ingen informasjon om vedlikeholdsfondet saldo/størrelse – dette er relevant for fremtidig vedlikeholdsbehov\n- Midlertidig brukstillatelse fra 2020 – status på ferdigattest er uklart\n- Garasjesameie-gjeld: beløpet er avkuttet, noe som gjør det vanskelig å vurdere eksponering fullt ut\n- Energiavregning: sameiet har et avregningssystem via Techem – kjøper bør forstå dette systemet\n"
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
    "input_tokens": 23843,
    "output_tokens": 5124,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
