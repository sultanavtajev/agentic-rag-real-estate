# Trace: agentic_reflecting_iter1
- **Run ID:** 296c8b2f-09bc-4b3f-a453-78c0fbe8c591
- **Tidspunkt:** 2026-03-25T23:11:08.507079+00:00
- **Varighet:** 109.46s
- **Input tokens:** 21696
- **Output tokens:** 5854

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
Risiko 1: Planlagte økte felleskostnader fra oktober 2026: Avdragsfriheten på borettslagets lån knyttet til takrehabiliteringen utløper, noe som vil medføre økte kapitalkostnader fordelt gjennom felleskostnadene. Felleskostnadene øker fra kr 4.078,- til kr 4.271,- per måned fra 01.10.2026.
  Confidence: 0.95
  Evidens: Det er vedtatt at felleskostnadene justeres fra oktober 2026. Bakgrunnen for dette er at avdragsfriheten på deler av borettslagets lån knyttet til takrehabiliteringen utløper.; Felleskostnadene øker til kr 4.271,‑ den 01.10.2026.; Styret estimerte at dette ville medføre et tillegg i felleskostnadene på om lag kr 500 per måned frem til lånet er nedbetalt

Risiko 2: Høy fellesgjeld i borettslaget: Borettslaget har en betydelig fellesgjeld med saldo på kr 14.180.564 per 10.03.2026, og andel fellesgjeld for denne leiligheten er kr 155.064. Renten er 4,64% p.a. med kun 10 terminer igjen til innfrielse.
  Confidence: 0.9
  Evidens: Saldo per 10.03.2026: 14 180 564; Andel av fellesgjeld: Kr 155 064 pr. 10.03.2026; Rentesats per 10.03.2026: 4.64% pa.; Antall terminer til innfrielse: 10

Risiko 3: Borettslaget har ikke sikringsordning for fellesgjeld: Dersom andre andelseiere misligholder sine forpliktelser, må øvrige andelseiere dekke borettslagets løpende utgifter. Dette innebærer en risiko for økte kostnader for kjøper.
  Confidence: 0.92
  Evidens: Borettslaget er ikke tilknyttet sikringsordning for fellesgjeld.; Andelseierne har ikke personlig ansvar for borettslagets fellesgjeld, men de må dekke borettslagets løpende utgifter. Manglende innbetaling av fellesutgiftene som følge av andre andelshaveres mislighold, eller dersom borettslaget sitter på fraflyttede og/eller usolgte andeler, må dekkes av de øvrige andelseierne.

Risiko 4: Borettslagets årsregnskap viser underskudd: Årsregnskapet for foregående år viser et underskudd på kr 6.354.535, noe som kan indikere svak økonomi i borettslaget og risiko for fremtidige kostnadsøkninger.
  Confidence: 0.88
  Evidens: Årsregnskapet for foregående år viser et underskudd på kr 6 354 535.; For inneværende år er det lagt opp til et budsjettert overskudd på kr 858 709.

Risiko 5: Planavvik i gulv (TG2): Det er målt betydelige planavvik i alkove (17 mm) og stue/kjøkken (16 mm), noe som er klassifisert som tilstandsgrad 2 og kan indikere setninger eller konstruksjonsmessige problemer.
  Confidence: 0.9
  Evidens: Alkove: Det ble målt 17 mm planavvik gjennom hele rommet (TG2).; Stue/kjøkken: Det ble målt 16 mm planavvik gjennom hele rommet (TG2).

Risiko 6: Manglende radonmåling: Det er ikke utført radonmåling i boligen, og bygget er heller ikke utført med radonsperre. Radon kan utgjøre en helserisiko for beboerne.
  Confidence: 0.95
  Evidens: Det er ikke foretatt radonmålinger, og bygget er heller ikke utført med radonsperre.; Selger har ikke utført radonmåling.

Risiko 7: Rekkverk på balkong er for lavt i henhold til dagens krav: Rekkverket på balkong eller terrasse er for lavt i forhold til dagens krav, noe som utgjør en sikkerhetsrisiko og er klassifisert som avvik.
  Confidence: 0.93
  Evidens: Rekkverket på balkong eller terrasse er for lavt i forhold til dagens krav.

Risiko 8: Naturlig ventilasjon er enklere enn dagens krav (TG2): Ventilasjonsløsningen er enklere enn det som benyttes i dag, og oppfyller ikke dagens strenge krav til ventilasjon. Dette er gitt tilstandsgrad 2.
  Confidence: 0.88
  Evidens: Ventilasjonsløsningen er enklere enn det som benyttes i dag.; Naturlig ventilasjon gis på generelt grunnlag tilstandsgrad 2 da dagens strenge krav til ventilasjon ikke er oppfylt.

Risiko 9: Manglende synliggjøring av lekkasje fra innebygget sisterne (TG2): Det er ikke påvist tilfredsstillende løsning for å synliggjøre lekkasje fra innebygget sisterne på badet, noe som kan medføre skjulte vannskader.
  Confidence: 0.87
  Evidens: Det er ikke påvist tilfredsstillende løsning for å synliggjøre lekkasje fra innebygget sisterne.; Normal og forventet bruksslitasje er observert.

Risiko 10: Tidligere utettheter i tak/fasade: Selger bekrefter at det har vært utettheter i terrasse/garasje/tak/fasade, og det er utført arbeider for å sikre mot vanninntrenging. Det er usikkerhet knyttet til om alle lekkasjer er fullstendig utbedret.
  Confidence: 0.85
  Evidens: Kjenner du til om det er/har vært utettheter i terrasse/garasje/tak/fasade? Ja.; har som sagt hvert gjort arbeider med å tekke om taket for å være sikker mot vanninntrenging. Arbeid utført av Nortekk.; det har vært håndtert tre større vannlekkasjer der USBL prosjekt og Gravco har bistått.

Risiko 11: Planlagt fremtidig utbygging i nærområdet: Området mellom Blystadringen og Blystadvegen er avsatt til fremtidig boligbebyggelse (Plan-ID 245, Blystadlia Vest), og det planlegges ca. 143 leiligheter. Dette kan medføre byggeaktivitet, støy og endrede omgivelser.
  Confidence: 0.88
  Evidens: Som følge av eventuell fremtidig utbygging i området må det påregnes byggeaktivitet og noe støy i perioder.; Det planlegges videre for opparbeiding av felles leke‑ og rekreasjonsarealer, samt trafikale løsninger i området.; Det tas til sikte på å planlegge for ca. 16 500 kvm BRA boligbebyggelse, noe som utgjør omtrent 143 leiligheter fordelt på to byggområder.

Risiko 12: Planlagt kapasitetsøkning av drikkevannsforsyning (Rælingsåsen): Det pågår planlegging av tunnelportaler og nytt vannmagasin i åsen nær eiendommen, noe som kan medføre anleggsarbeid og støy i perioden.
  Confidence: 0.82
  Evidens: Det planlegges for å etablere tre tunnelportaler, henholdsvis ved Nedre Rælingsveg, Sandbekken og Blystadringen.; Reguleringsplaner under arbeid: ID: 255, Navn: Kapasitetsøkning Rælingsåsen, Status: Planlegging igangsatt.

Risiko 13: Begrenset adgang til utleie: Det er begrenset adgang til utleie av boligen, og korttidsutleie er kun tillatt i opptil 30 døgn per år uten samtykke fra styret. Dette begrenser kjøpers fleksibilitet.
  Confidence: 0.85
  Evidens: Adgang til utleie: Det er begrenset; Korttidsutleie er tillatt i opptil 30 døgn per år uten samtykke fra styret.

Risiko 14: Styregodkjennelse kreves for kjøper: Kjøper må godkjennes av borettslagets styre, noe som innebærer en risiko for at kjøpet ikke gjennomføres dersom styret nekter godkjenning.
  Confidence: 0.8
  Evidens: Styregodkjennelse: Kjøper må godkjennes av borettslagets styre. Styret kan kun nekte godkjenning dersom det foreligger saklig grunnlag, jf. borettslagsloven § 4‑4.

Risiko 15: Energikarakter E: Boligen har energikarakter E, som er lavt og indikerer høyt energiforbruk. Dette kan medføre høye strømkostnader for kjøper.
  Confidence: 0.85
  Evidens: Energikarakter: E

Risiko 16: Tilstandsrapporten er begrenset til visuell befaring (nivå 1): Rapporten er basert på kun visuelle observasjoner uten åpning av konstruksjoner, noe som betyr at skjulte feil og mangler ikke nødvendigvis er avdekket.
  Confidence: 0.9
  Evidens: Det gjøres oppmerksom på at dette er en tilstandsrapport på nivå 1, dvs. kun en visuell befaring, uten åpning av konstruksjoner.; Ved evt. åpning av konstruksjoner kan feil og mangler avdekkes også utover det som er omtalt i rapporten.; Det gjøres ikke nærmere undersøkelser slik som åpning av vegger eller andre bygningsdeler.

Risiko 17: Tinglyst rett for Hafslund Nett AS til plassering av nettstasjon på eiendommen: Det er tinglyst en avtale fra 2016 som gir netteier varig rett til plassering, drift og vedlikehold av en frittliggende nettstasjon med tilhørende kabelanlegg på eiendommen.
  Confidence: 0.82
  Evidens: Det er tinglyst en avtale fra 2016 mellom Blystadringen Borettslag og Hafslund Nett AS som gir netteier varig rett til plassering, drift og vedlikehold av en frittliggende nettstasjon med tilhørende kabelanlegg på eiendommen.

Risiko 18: Alkove/soveplass har byttet plass med stue uten søknadspliktig godkjenning: Selger opplyser at soveplass/alkove har byttet plass med stue, og at dette er et mindre tiltak som ikke er søknadspliktig. Det er usikkerhet knyttet til om dette er korrekt klassifisert.
  Confidence: 0.75
  Evidens: Beskrivelse: Mindre tiltak som ikke er søknadspliktig er blitt utført. Soveplass/alkove har byttet plass med stue.; Er innredning/utbyggingen godkjent hos bygningsmyndighetene? Nei

Risiko 19: Bereder og røranlegg for varmtvann ikke fullt ut vurdert: Takstmannen har ikke fullt ut vurdert bereder og røranlegget for varmtvann, da dette krever spesielt utstyr og kompetanse. Alder, fortetning og brudd kan være risikomomenter.
  Confidence: 0.8
  Evidens: Undertegnede har ikke fullt ut vurdert bereder og røranlegget for varmtvann av den grunn at dette krever spesielt utstyr og kompetanse.; Alder, fortetning og brudd kan være risikomomenter i et hvert anlegg.

Dokumentkontekst:
[d181_d181 | Side [1]]
dsanalysen utvides til også å
informasjon, som har betydning for tilstandsvurderingen. omfatte tilleggsundersøkelser utover minimumskravet i forskriften.
Rapporten beskriver avvik, det vil si en tilstand som er dårligere
enn referansenivået. Rapporten vil normalt ikke fremheve positive BEFARINGEN
sider ved boligen ut over det som fremgår av tilstandsgradene.
•For anbefalte tiltak ved TG2 og TG3 må du vurdere om tiltakene Rapporten gir en vurdering av byggverk og bygningsdeler som
er nødvendige og

---

[d181_d181 | Side [1]]
, slik som slitasje
e琀琀er normal bruk regnes ikke som avvik.
Hva inneholder 琀椀lstandsrapporten?
Den bygningssakkyndige undersøker rom og bygningsdeler slik det kommer frem av Forskri昀琀 琀椀l
avhendingsloven. Tilstandsrapporten inneholder bare avvik som den bygningssakkyndige kan se eller
kontrollere med enkle hjelpemidler. Det gjøres ikke nærmere undersøkelser slik som åpning av vegger
eller andre bygningsdeler. I vegg mot våtrom og rom under terreng kan det borres et hull for å gjøre
enkle undersøkelser

---

[d181_d181 | Side [1]]
 avholdt i henhold til gjeldende
som er basert på enkle visuelle observasjoner. Kan vurderes avhendingslov (tryggere bolighandel) og forskrift til
sammen med bygningsdelens alder. avhendingslova.
Tilstandsgrader settes i henhold til NS3600.
Hjemmel er kontrollert utfra Norges eiendommer/Ambita.
•Forventet gjenværende brukstid: anslått tid et byggverk eller en
del av et byggverk vil kunne tjene sitt formål (NS 3600:2018,
Rapporten omfatter ikke tekniske vurderinger av fagområder som
termer og definisjoner

---

[d181_d181 | Side [1]]
jøre 琀椀lstandsgrad. Når bygningssakkyndige anbefaler 琀椀ltak, for eksempel
utbedringer, må brukeren av rapporten vurdere om 琀椀ltakene er nødvendige og lønnsomme.
Når den bygningssakkyndige velger 琀椀lstandsgrad, baseres vurderingen på faste kriterier som følger av gjeldende bransjestandard for Teknisk
琀椀lstandsanalyse ved omsetning av bolig og Forskri昀琀 琀椀l avhendingslova.
TILSTANDSGRAD 0, TG0: INGEN AVVIK
Bygningsdelen skal være 琀椀lnærmet ny, ikke vise tegn på slitasje og det skal være lagt frem

---

[d181_d181 | Side [1]]
, vil den
bygningssakkyndige vurdere mot dagens regelverk. Etter dagens
•flater som er skjult av snø eller på annen måte ikke er tilgjengelig
regelverk vil disse kunne få en tilstandsgrad 2 eller 3 uten at det
eller skjult, blir ikke kontrollert.
nødvendigvis er krav om at avviket må utbedres.
•det blir ikke utført funksjonsprøving av bygningsdeler, som
isolasjon, piper, ventilasjon, elektrisk anlegg, osv.
PRESISERINGER
•det gis ikke en vurdering av boligens tilbehør, hvite- og
brunevarer og annet

---

[d181_d181 | Side [1]]
brukt bolig.
Det er observert stedvise riper, merker samt mindre oppsprekking i hjørner og plateskjøter. Slike forhold er vanlige og kan blant annet skyldes bevegelser i
trevirke som følge av års琀椀d og værforhold. Spiker- og skruehull i vegger e琀琀er normal bruk, kan forekomme.
For eldre og brukte boliger gjelder det ikke toleransekrav 琀椀l ferdige over昀氀ater.
Mindre este琀椀ske forhold og avvik som ikke påvirker over昀氀atenes bruksfunksjon, kommenteres derfor ikke særskilt.
Tilstandsgrad 1 er sa琀琀 på bakgrunn

---

[d181_d181 | Side [1]]
res eventuelle avvik gjennom s琀椀kkprøver på fem 琀椀lfeldige ulike punkter i rommet, som er i henholdt 琀椀l
gjeldende standard (NS3600).
Det kan dermed forekomme avvik som ikke avdekkes ved denne metoden.
Slike avvik kan få betydning for vurdering av 琀椀lstandsgrad ved et senere salg.
Dersom de琀琀e anses som vesentlig for kjøper, oppfordres kjøper 琀椀l å gjennomføre supplerende undersøkelser utover hva NS3600 legger 琀椀l grunn.
Tilstandsgrad er sa琀琀 ut fra en helhetlig vurdering og i henhold 琀椀l NS3600 sin

---

[d181_d181 | Side [1]]
en vurdering av boligens tilbehør, hvite- og
brunevarer og annet inventar. Dette gjelder også integrert
Tilstandsrapporten gjelder hovedbygget. Tilleggsbygninger, som tilbehør.
for eksempel garasje, gis kun en enkel beskrivelse.
•inspisering av yttertak er basert på det som er synlig, normalt på
Avvik er vurdert ut fra tekniske forskrifter på innsiden fra loftet og utvendig fra stige/bakkenivå. I en del
godkjenningstidspunktet for bygget. Noen bygningsdeler er situasjoner er det ikke sikkerhetsmessig

---

[d181_d181 | Side [1]]
lse av
over昀氀ater ikke nødvendigvis betyr at bygningsdeler under er
forbedret.
Tilstandsrapporten beskriver ikke hele boligen
BYGNINGSSAKKYNDIGE SER FOR EKSEMPEL IKKE PÅ
• vanlig slitasje og normal vedlikeholds琀椀lstand • bagatellmessige forhold som ikke påvirker bygningens bruk eller verdi vesentlig • etasjeskillere •
琀椀lleggsbygg slik som garasje, bod, anneks, naust også videre • utvendige trapper • stø琀琀emurer • skjulte installasjoner • installasjoner utenfor
bygningen • full funksjonstes琀椀ng av el- og

---

[d181_d181 | Side [1]]
ier) og eventuelle svakheter som er
for BRA av for eksempel loft med skråtak. BRA består av internt registrert.
bruksareal (BRA-i), eksternt bruksareal (BRA-e) og innglasset
balkong mv (BRA-b). Terrasse- og balkongareal (TBA) opplyses Endret bruk, kan over tid avdekke skjulte feil og mangler som ikke
der tilstandsrapporten skal benyttes i boligomsetningen og der det oppdages ved visuell kontroll (undersøkelsesnivå 1) på
er aktuelt. I tillegg kan gulvareal (GUA) og areal med lav

---

[d181_d181 | Side [1]]
llert.
Avtrekk over stekesone.
Leiligheten disponerer en ekstern bod.
Det henvises ellers 琀椀l rapporten i sin helhet.
Arealer
Gå 琀椀l side
Forutsetninger og vedlegg Gå 琀椀l side
Oppdragsnr.: 22179-26061 Befaringsdato: 11.03.2026 Side: 5 av 28
53

## Side 54

12
10
8
6
4
2
0
Vil du vite mer om 琀椀lstandsgrader? Se side 4.
Oppsummering av avvik
Vil du vite mer? Se på rommet eller bygningsdelen senere i
rapporten.
llatnA
Blystadringen 8 F, 2014 BLYSTADLIA Taksator AS
Gnr 103 - Bnr 297 Olaf Helsets vei 6
3224

---

[d181_d181 | Side [1]]
srapport på nivå
1, dvs. kun en visuell befaring, uten åpning av konstruksjoner.
•Eiendommens markedsverdi kan ikke baseres på en rent
Kontrollomfang kan være begrenset.
matematisk beregning i forhold til antall kvadratmeter opplyst i
rapporten. Opplysninger om areal kan altså ikke alene benyttes
Merk at dagens krav til isolering og tetthet osv. ofte er strengere
for beregning av eiendommens verdi.
enn da bygget ble oppført. Tilstandsanalysen er basert på en
visuell befaring og registrering av

---

[d181_d181 | Side [1]]
iver synlige skader/avvik eller tegn på skader/avvik på boligen. Rapporten
fremhever vanligvis ikke posi琀椀ve egenskaper ved boligen.
Hva vurderer en bygningssakkyndig?
Den bygningssakkyndige vurderer boligen ut fra hva man kan forvente av en bygning av samme alder
og type. Vurderingen gjøres som regel mot hvordan det var vanlig å bygge og regler som gjaldt da
boligen ble oppført (søknads琀椀dspunktet). Forhold som er vanlige for bygningens alder, slik som slitasje
e琀琀er normal bruk regnes ikke som avvik.
Hva

---

[d181_d181 | Side [1]]
r sa琀琀 ut fra en helhetlig vurdering og i henhold 琀椀l NS3600 sin standard.
Vurdering av avvik:
• Det er avvik:
Oppdragsnr.: 22179-26061 Befaringsdato: 11.03.2026 Side: 9 av 28
57

## Side 58

Blystadringen 8 F, 2014 BLYSTADLIA Taksator AS
Gnr 103 - Bnr 297 Olaf Helsets vei 6
3224 RÆLINGEN 0694 OSLO
Tilstandsrapport
Følgende mål ble registrert på befaringsdagen:
Alkove: Det ble målt 17 mm planavvik gjennom hele rommet (TG2).
Stue/kjøkken: Det ble målt 16 mm planavvik gjennom hele rommet (TG2).
___
Det ble

---

[d181_d181 | Side [1]]
nærmet ny, ikke vise tegn på slitasje og det skal være lagt frem dokumentasjon på
faglig god u琀昀ørelse. Det er ingen merknader 琀椀l delen.
TILSTANDSGRAD 1, TG1: MINDRE AVVIK
Bygningsdelen skal bare ha normal slitasje, og straks琀椀ltak skal ikke anses som nødvendig. Graden kan også
brukes når delen er ny, men der dokumentasjon på faglig god u琀昀ørelse mangler.
TILSTANDSGRAD 2, TG2: VESENTLIGE AVVIK OG MINDRE AVVIK SOM ETTER NS 3600 GIR TG 2
Bygningsdelen skal enten ha feil u琀昀ørelse, en skade eller symptomer

---

[d181_d181 | Side [1]]
t.
Undertegnede har ikke fullt ut vurdert bereder og røranlegget for varmtvann av den grunn at de琀琀e krever spesielt utstyr og kompetanse.
Alder, forte琀紀ng og brudd kan være risikomomenter i et hvert anlegg.
Tegn 琀椀l de琀琀e ble ikke observert på befaringsdagen.
Det er ikke gi琀琀 opplysninger om eventuelle avvik.
Tilstandsgrad er sa琀琀 ut fra vurdering av de bygningsdelene som var 琀椀lgjengelige og mulige å bedømme ut fra en visuell befaring, og alder.
Vurdering av avvik:
• Det er avvik:
• Det er ikke

---

[d181_d181 | Side [1]]
nteres derfor ikke særskilt.
Tilstandsgrad 1 er sa琀琀 på bakgrunn av normal slitasje uten at bruksfunksjonen anses redusert, basert på visuelle observasjoner ved befarings琀椀dspunktet.
Rapporten bygger på en forutsetning om at eventuelle produsentanvisninger for beny琀琀ede produkter er fulgt, da de琀琀e ikke er veri昀椀serbart ved visuell
befaring.
Over昀氀ater i våtrom er vurdert separat under punktet «Baderom».
Tilstandsgrad er fastsa琀琀 e琀琀er en samlet vurdering.
Etasjeskille/gulv mot

---

[d181_d181 | Side [1]]
ingsdelen skal enten ha feil u琀昀ørelse, en skade eller symptomer på skade, sterk slitasje eller nedsa琀琀
funksjon. Graden gis når bygningsdelen trenger vedlikehold eller 琀椀ltak i nær frem琀椀d. Graden skal også brukes
når delen er gammel og det er grunn 琀椀l å varsle om faren for skader på grunn av alderen, eller når det er grunn
琀椀l å overvåke delen spesielt på grunn av fare for større skader eller følgeskader.
TILSTANDSGRAD 3, TG3: STORE ELLER ALVORLIGE AVVIK
Denne 琀椀lstandsgraden brukes ved kra昀琀ige tegn på

---

[d181_d181 | Side [1]]
ig
på byggetiden.
‑ Underetasje Bad: Sanitærutstyr og innredning Ventilasjonsløsningen er enklere enn det som benyttes i
Avvik: dag.
Det er ikke påvist tilfredsstillende løsning for å synliggjøre Naturlig ventilasjon gis på generelt grunnlag
lekkasje fra innebygget sisterne. tilstandsgrad 2 da dagens strenge krav til ventilasjon ikke
Normal og forventet bruksslitasje er observert. er oppfylt, til tross for at denne typen ventilasjon er
Konsekvens/ tiltak normalt for boliger/ leiligheter bygget i denne
Ved

---

[d181_d181 | Side [1]]
 får betydning for om arealet takstmannen ble gjort kjent med på befaringsdagen.
måles og oppgis i tilstandsrapporten. Når arealet måles tas det
ikke hensyn til om arealet er lovlig oppført eller om bruken er Ved evt. åpning av konstruksjoner kan feil og mangler avdekkes
lovlig, bruksendringer, lysforhold eller andre sikkerhetsmangler. også utover det som er omtalt i rapporten.
Det gjøres oppmerksom på at dette er en tilstandsrapport på nivå
1, dvs. kun en visuell befaring, uten åpning av

---

[d181_d181 | Side [1]]
t fore昀椀nnes på enhver eiendom. Hvis annet ikke er 
uttrykkelig avtalt, skal dette derfor alltid følge med ved salg av eiendom.
21. SAMTLIGE NØKLER til eiendommen som selger er i besittelse av skal overleveres kjøper på 
overtakelsen, herunder nøkler til eventuelle boder, uthus, garasjeportåpner e.l. Låses boder, uthus 
e.l. med hengelås, skal lås og nøkler til disse medfølge. 
22. GARASJEHYLLER, bodhyller, lagringshyller og oppheng til bildekk medfølger såfremt de er 
fastmontert.

Planter, busker

---

[d181_d181 | Side [1]]
sitter på fraflyttede og/ eller usolgte andeler,
må dekkes av de øvrige andelseierne.
38

## Side 39

OM EIENDOMMEN
Dersom det oppstår behov for ytterligere avklaringer,
Lovanvendelse oppfordres interessenter til å kontakte eiendomsmegler
Regelverk og generelle opplysninger eller egne rådgivere før de gir bud.
Boligen selges med det inventar og utstyr som i henhold
til gjeldende lover, forskrifter eller offentlige pålegg skal Slitasje og bruk
følge med eiendommen, jf. avhendingsloven § 3‑4. Det må også

---

[d181_d181 | Side [1]]
yggingen godkjent hos bygningsmyndighetene?
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
23 Kjenner du til om det foreligger

---

[d181_d181 | Side [1]]
ers 
rettigheter og plikter ved overdragelse av fast eiendom og andeler i borettslag.

I henhold til avhl. § 3-4 skal eiendommen, når annet ikke er avtalt, overdras med innredninger og 
utstyr som etter lov, forskrift eller annet o昀昀entlig vedtak skal følge med. Det samme gjelder varig 
innredning og utstyr som enten er fastmontert eller er særskilt tilpasset bygningen, jf. avhl. § 3-5. 
Loven inneholder ingen detaljert oversikt over hva som omfattes av «innredning og utstyr», og over 
hva som skal

---

[d181_d181 | Side [1]]
ner du til vedtak/forslag til vedtak om forhold vedr. eiendommen som kan medføre økte felleskostnader/økt fellesgjeld?
Nei Ja
27 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr i sameiet/laget/selskapet (fellesareal eller i andre boliger) som rotter, mus,
maur eller lignende?
Nei Ja
28 Kjenner du til om det er/har vært skjeggkre i sameiet/laget/selskapet (fellesareal eller i andre boliger)?
Nei Ja
Initialer selger: MK 3
24005240
:ecnerefer
tnemucoD
46

## Side 47

Tilleggskommentar
Jeg

---

[d181_d181 | Side [1]]
alpant på inntil 2G som dekning av felleskostnader og andre krav fra
sikkerhet for betaling av felleskostnader. Dette betyr at borettslaget, på inntil 2 ganger folketrygdens grunnbeløp.
borettslaget har prioritet over tinglyste lån når det gjelder
betaling av felleskostnader, og kan kreve inn pengene før Kjøper og selger er forpliktet til å undertegne standard
andre kreditorer, selv om de har lån registrert på andelen. kjøpekontrakt utarbeidet av Emera i forbindelse med
eiendomstransaksjonen.

---

[d181_d181 | Side [1]]
avtalt, vil løsøre og tilbehør medfølge slik dette fremkommer av avhl. § 3-4 
og § 3-5 og denne oversikt. 

Produkter og installasjoner som medfølger overdras uten noen form for garantier, utover eventuell 
gjenværende leverandørgaranti.

Dersom det er noe i nedenstående liste som ikke 昀椀nnes på eiendommen, vil det heller ikke medfølge.
1. HVITEVARER medfølger der dette er spesielt angitt i salgsoppgaven.
2. HELDEKKENDE TEPPER følger med uansett festemåte.
3. VARMEKILDER, slik som ovner, kaminer,

---

[d181_d181 | Side [1]]
mtidig utbygging i området må eiendommen. Avtalen regulerer også adkomst,
det påregnes byggeaktivitet og noe støy i perioder. sikkerhetssoner og ansvar ved eventuelle skader. Slike
avtaler er standard for strømforsyning og anses som
Reguleringskart, kommuneplan og relevante temakart er normalt forekommende i boligområder.
37

## Side 38

OM EIENDOMMEN
Borettslaget har legalpanterett i andelen for krav på
Legalpant: Borettslaget har legalpant på inntil 2G som dekning av felleskostnader og andre krav

---

[d181_d181 | Side [1]]
e eller ferdigattest?
Nei Ja
23 Kjenner du til om det foreligger skaderapporter/ tilstandsvurderinger eller utførte målinger?
Nei Ja
24 Er det andre forhold av betydning ved eiendommen som kan være relevant for kjøper å vite om (f.eks. rasfare, tinglyste forhold eller private
avtaler)?
Nei Ja
Spørsmål for bolig i sameie/borettslag/boligaksjeselskap:
25 Kjenner du til om sameiet/laget/selskapet er involvert i tvister av noe slag?
Nei Ja
26 Kjenner du til vedtak/forslag til vedtak om forhold vedr. eiendommen

---

[d181_d181 | Side [1]]
rtners.no/eiendom
er plassert hos Gar-Bo Försäkring AB.
*Det tas forbehold om pris- og vilkårsendringer.

## Side 108

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
Lov om avhending av fast eigedom (avhendingslova/avhl.) av 3. juli 1992 regulerer kjøper og selgers 
rettigheter og plikter ved overdragelse av fast eiendom og

---

[d181_d181 | Side [1]]
terende bygninger er derfor ikke pålagt å oppgraderes 琀椀l dagens forskri昀琀skrav,
med mindre det gjennomføres søknadsplik琀椀ge 琀椀ltak, bruksendring eller hovedombygging.
Det er ikke foreta琀琀 kontroll eller veri昀椀sering av branncelleinndelingens u琀昀ørelse, te琀琀het eller ytelse.
Kilder og vedlegg
Dokumenter
Beskrivelse Dato Kommentar Status Sider Vedlagt
Egenerklæring U琀昀ylt av selger. Finnes ikke Nei
Eiendomsverdi informasjon fra statens
kartverk. Opplysninger om adresse, bnr.,
Eiendomsverdi.no 11.03.2026

---

[d181_d181 | Side [1]]
r derfor tømt.
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

[d181_d181 | Side [1]]
m følge av beslutninger i borettslagets
Kr 3 163 860 styre eller generalforsamlinger.
Lånebetingelser fellesgjeld: Lånenummer: 114212202,
Felleskostnader Den Norske Stats Husbank
Felleskostnader kr 4 078,‑ pr. mnd ‑ Annuitetslån, 2 terminer per år.
‑ Rentesats per 10.03.2026: 4.64% pa.
26

## Side 27

OM EIENDOMMEN
‑ Antall terminer til innfrielse: 10 beregningen tas det hensyn til boligens beliggenhet,
‑ Saldo per 10.03.2026: 14 180 564 areal, byggeår og type bolig. Stortinget har vedtatt en ny
‑ Andel av

---

[d181_d181 | Side [1]]
akt utarbeidet av Emera i forbindelse med
eiendomstransaksjonen. Kjøpekontrakten kan besiktiges
hos eiendomsmegler før bud inngis. Kontakt
Vei, vann og avløp eiendomsmegler for spørsmål.
Offentlig vann og avløp i henhold til informasjon til
kommunen. Det er gang‑ og sykkelveger inne på Selger leverer eiendommen i ryddig og rengjort stand.
borettslaget, samt privat veg fra borettslaget ut til
kommunal veg i henhold til informasjon fra kommunen.
Kontrakts‑
grunnlag
Utleie
Adgang til utleie: Det er begrenset

---

[d181_d181 | Side [1]]
ene øker til kr 4.271,‑ den 01.10.2026.
545 (Tinglysningsgebyr ‑ pantedokument)
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑
9 496 (Omkostninger totalt (uten Boligkjøperforsikring)) Eiendomsskatt
18 796 (Omkostninger totalt (med Boligkjøperforsikring)) Rælingen kommune har per dags dato ikke
eiendomsskatt på bolig.
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑
3 154 560 (Totalpris inkl. omkostninger (uten
Boligkjøperforsikring)) Kommunale avgifter
3 163 860 (Totalpris inkl.

---

[d181_d181 | Side [1]]
 og arealplaner
2026. Bakgrunnen for dette er at avdragsfriheten på Eiendommen ligger i et uregulert område, men er avsatt
deler av borettslagets lån knyttet til takrehabiliteringen til boligbebyggelse ‑ nåværende i kommuneplanens
utløper. Når ordinære avdrag starter, vil dette gi økte arealdel 2022‑2033, ikrafttredelse 15.02.2023.
kapitalkostnader for borettslaget, som da fordeles
gjennom felleskostnadene. Eiendommen omfattes av reguleringsplan med planID
045, Reguleringsplan for Øvre Aamodt skog

---

[d181_d181 | Side [1]]
 til disse. På forespørsel har rekvirent/eier opplyst at de ikke er kjent med at
boligen/leiligheten har skjulte feil eller mangler, offentlige pålegg
som ikke er utført eller vedtak som medfører eller har medført nytt
låneopptak/økning av utgifter, utover det som er nevnt i rapporten.
PERSONVERN
Oppdragsnr.: 22179-26061 Befaringsdato: 11.03.2026 Side: 27 av 28
75

## Side 76

Blystadringen 8 F, 2014 BLYSTADLIA Taksator AS
Gnr 103 - Bnr 297 Olaf Helsets vei 6
3224 RÆLINGEN 0694

---

[d181_d181 | Side [1]]
 å sikre korrekt
funksjon, og tidligere søppelrom er frigjort og benyttes Forkjøpsrett: Dersom andel skifter eier, har andelseierne i
nå som felles boder for bilrekvisita og elsykler. borettslaget og dernest de øvrige andelseierne i
boligbyggelaget forkjøpsrett. Meldefrist er 31.03.2026.
Borettslaget har bidratt økonomisk til arrangementer
35

## Side 36

OM EIENDOMMEN
Forkjøpsfrist: 31.03.2026.
Info energiklasse
Styregodkjennelse: Kjøper må godkjennes av Se fullstendig energiattest fra selger som vedlegg

---

[d181_d181 | Side [1]]
t vanninntrenging.
Arbeid utført av Nortekk
Initialer selger: MK 2
24005240
:ecnerefer
tnemucoD
45

## Side 46

17 Selges eiendommen med utleiedel, leilighet, hybel eller tilsvarende?
Nei Ja
18 Kjenner du til om det er innredet/bruksendret/bygget ut i kjeller eller loft eller andre deler av boligen?
Nei Ja
Beskrivelse Mindre tiltak som ikke er søknadspliktig er blitt utført. Soveplass/alkove har byttet plass med stue.
18.1 Er innredning/utbyggingen godkjent hos bygningsmyndighetene?
Nei Ja
19 Kjenner du

---

[d181_d181 | Side [1]]
ruk
følge med eiendommen, jf. avhendingsloven § 3‑4. Det må også forventes at eiendommer som har vært i
Fastmonterte eller spesialtilpassede installasjoner og bruk, vil kunne ha tegn til slitasje og eventuelle skader.
innredning som anses som varig tilknyttet boligen, følger Slik normal bruksslitasje og behov for vedlikehold må
normalt med i handelen, med mindre det foreligger en kjøper påregne, og dette vil normalt ikke gi grunnlag for
særskilt avtale mellom partene om noe annet, jf. reklamasjon eller

---

[d181_d181 | Side [1]]
g i felleskostnadene på om lag kr
I tillegg til takprosjektet er utebelysningen i borettslaget 500 per måned frem til lånet er nedbetalt, med
oppgradert til LED. Deler av fasadene er rehabilitert som variasjoner avhengig av leilighetsstørrelse, rentenivå og
følge av normal slitasje, og det har vært håndtert tre total lånesum. Fullstendig referat og foreløpig
større vannlekkasjer der USBL prosjekt og Gravco har fremdriftsplan er tilgjengelig på borettslagets
bistått. Styret har også inngått avtale med

---

[d181_d181 | Side [1]]
ndelseieren den til enhver tid
gjeldende forsinkelsesrente etter lov av 17. desember 1976 nr 100.
7-2 Borettslagets pantesikkerhet
For krav på dekning av felleskostnader og andre krav fra lagsforholdet har laget panterett i
andelen foran alle andre heftelser. Pantekravet er begrenset til en sum som svarer til to ganger
folketrygdens grunnbeløp på tidspunktet da tvangsdekning besluttes gjennomført.
8. Styret og dets vedtak
8-1 Styret
(1) Borettslaget skal ha et styre som skal bestå av en styreleder og 4

---

[d181_d181 | Side [1]]
vannskader.
Parallelt med dette har styret påbegynt arbeidet med en Det ble avholdt beboermøte i januar 2024 med tema
økonomisk plan knyttet til kommende nedbetaling av lån, takrehabilitering. Her ble det informert om at prosjektet
samt startet energikartlegging i forbindelse med kravene finansieres gjennom låneopptak, i tråd med vedtak på
i energidirektivet. generalforsamlingen i 2023. Styret estimerte at dette
ville medføre et tillegg i felleskostnadene på om lag kr
I tillegg til takprosjektet er

---

[d181_d181 | Side [1]]
lleskostnader inkulderer: Felleskostnadene inkluderer
Økonomi
og fordeles på følgende måte:
‑ Avdrag felleslån kr. 535,‑
Prisantydning ‑ Avsetning vedlikeholdsfond kr. 270,‑
Kr 2 990 000 ‑ Renter felleslån kr. 369,‑
‑ Felleskostnader kr. 2 415,‑
‑ Renter felleslån kr. 158,‑
Omkostning kjøper ‑ Renter felleslån kr. 133,‑
2 990 000,00 (Prisantydning) ‑ Avdrag felleslån kr. 68,‑
155 064 (Andel av fellesgjeld) Tilleggsytelser:
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ ‑ Trappevask kr. 130,‑
3

---

[d181_d181 | Side [1]]
lvvarme på
For inneværende år er det lagt opp til et budsjettert badet.
overskudd på kr 858 709. Underskuddet for 2024 ble
vesentlig lavere enn forutsatt i budsjettet, hvor det Hvis et rom på visningen mangler fast installert
opprinnelig var estimert et underskudd på kr 12 117 148. oppvarmingskilde, vil ikke dette bli inkludert i handelen.
Kostnadsøkninger og felleskostnader
Det er vedtatt at felleskostnadene justeres fra oktober Regulerings og arealplaner
2026. Bakgrunnen for dette er at avdragsfriheten

---

[d181_d181 | Side [1]]
kjøperforsikring)) Kommunale avgifter
3 163 860 (Totalpris inkl. omkostninger (med Informasjon: Kommunale avgifter er inkludert i
Boligkjøperforsikring)) borettslagets felleskostnader.
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑
Fellesgjeld
Kr 155 064 pr. 10.03.2026
Kjøperen må være inneforstått med at fellesgjelden i
borettslaget og fellesutgiftene kan variere over tid, også
Estimert totalpris ink. omk at den kan øke som følge av beslutninger i borettslagets
Kr 3 163 860 styre eller

---

[d181_d181 | Side [1]]
rettslige disposisjoner over fast eiendom som går ut over vanlig forvaltning,
6. andre tiltak som går ut over vanlig forvaltning, når tiltaket fører med seg økonomisk
ansvar eller utlegg for laget på mer enn fem prosent av de årlige felleskostnadene.
8-4 Representasjon og fullmakt
Styreleder og et styremedlem i fellesskap representerer laget utad og tegner dets navn.
9. Generalforsamlingen
9-1 Myndighet
Den øverste myndighet i borettslaget utøves av generalforsamlingen.
9-2 Tidspunkt for

---

[d181_d181 | Side [1]]
røm kommune.
(2) Borettslaget har USBL som forretningsfører.
(3) Borettslaget er tilknyttet Bori (Boligbyggelaget Romerike)
2. Andeler og andelseiere
2-1 Andeler og andelseiere
(1) Andelene skal være på kroner 100,-.
(2) Bare andelseiere i boligbyggelaget og bare fysiske personer (enkeltpersoner) kan være
andelseiere i borettslaget. Likevel kan Forsvarsbygg eie inntil 29 andeler. Boligene skal leies
ut til ansatte i Forsvaret. Ingen fysiske personer kan eie mer enn en andel.
(3) Uansett kan staten, en

---

[d181_d181 | Side [1]]
disk hjelp dersom det
Andelseierne har ikke personlig ansvar for borettslagets oppdages uventede feil eller mangler ved boligen de
fellesgjeld, men de må dekke borettslagets løpende neste fem årene. Les mer om Boligkjøperforsikring i
utgifter. Manglende innbetaling av fellesutgiftene som vedlagte materiell eller på https:/ /
følge av andre andelshaveres mislighold, eller dersom www.soderbergpartners.no/ eiendom/ boligkjoper/
borettslaget sitter på fraflyttede og/ eller usolgte andeler,
må dekkes av de

---

[d181_d181 | Side [1]]
godkjennes av Se fullstendig energiattest fra selger som vedlegg til
borettslagets styre. Styret kan kun nekte godkjenning salgsoppgave. Megler påtar seg ikke ansvar for
dersom det foreligger saklig grunnlag, jf. borettslagsloven informasjonen som fremgår av energiattesten.
§ 4‑4.
Regnskap/ budsjett/ kostnadsøkninger: Årsregnskapet Oppvarming
for foregående år viser et underskudd på kr 6 354 535. Oppvarming via elektrisk panelovn og gulvvarme på
For inneværende år er det lagt opp til et budsjettert

---

[d181_d181 | Side [1]]
andelseierens eller brukerens oppførsel til alvorlig plage
eller sjenanse for eiendommenes øvrige andelseiere eller brukere, kan styret kreve fravikelse
fra boligen etter tvangsfullbyrdelseslovens kapittel 13.
7. Felleskostnader og pantesikkerhet
7-1 Felleskostnader
(1) Felleskostnadene betales hver måned. Borettslaget kan endre felleskostnadene med en
måneds skriftlig varsel.
(2) For felleskostnader som ikke blir betalt ved forfall, svarer andelseieren den til enhver tid
gjeldende forsinkelsesrente etter

---

[d181_d181 | Side [1]]
leringsplan med planID
045, Reguleringsplan for Øvre Aamodt skog (Blystadlia).
Det er viktig å merke seg at denne økningen er Denne planen er også en eldre reguleringsplan og har
forutsigbar og allerede vedtatt, og ikke et resultat av status som endelig vedtatt arealplan med ikrafttredelse
uforutsette økonomiske problemer. Borettslaget har valgt 23.10.1973.
en ansvarlig finansieringsmodell som gir lavere
kostnader i anleggsperioden og mer stabile forhold over Eiendommen omfattes av reguleringsplan med

---

[d181_d181 | Side [1]]
m utenfor aksje- eller andelseier.
boenheten kan omdisponeres av borettslaget/sameiet og dette Normalt utgjør dette alt innenfor leilighetens/andelens vegger.
kan påvirke boligens BRA. Vær oppmerksom på at NS 3940:2023 Tilstandsrapporten tar derfor ikke for seg bygningens fellesdeler
og eierseksjonsloven har ulik definisjon av fellesareal. Ved som for eksempel tak, yttervegger, grunnmur, drenering, og felles
arealmåling gjelder NS 3940:2023 som definerer fellesareal slik: tekniske installasjoner med mindre

---

[d181_d181 | Side [1]]
m andelseieren har
gitt adgang til eiendommen eller har overlatt leiligheten sin til.
5-2 Borettslagets vedlikeholdsplikt
(1) Borettslaget skal holde bygninger og eiendommen for øvrig i forsvarlig stand så langt
plikten ikke ligger på andelseierne. Skade på bolig eller inventar som tilhører laget, skal laget
utbedre dersom skaden følger av mislighold fra en annen andelseier.
(2) Felles rør, ledninger, kanaler og andre felles installasjoner som går gjennom boligen, skal
borettslaget holde ved like.

---

[d181_d181 | Side [1]]
 stabile forhold over Eiendommen omfattes av reguleringsplan med planID
tid. 092, Reguleringsplan for del av Øvre Aamodt/ (Blystadlia)
Område for barnehage. Denne planen er også en eldre
reguleringsplan og har status som endelig vedtatt
Vedtekter/ husordensregler arealplan med ikrafttredelse 15.08.1983.
Vedtekter og husordensregler ligger vedlagt i
salgsoppgaven. Omkringliggende områder er regulert til LNFR, herunder
arealer for nødvendige tiltak innen landbruk, natur,
friluftsliv og reindrift, samt

---

[d181_d181 | Side [1]]
ige tiltak innen landbruk, natur,
friluftsliv og reindrift, samt boligbebyggelse i form av
Energimerke blokkbebyggelse og lekeplasser.
Energikarakter: E
Reguleringsplaner under arbeid:
Energifarge: Ikke angitt ID: 255
Navn: Kapasitetsøkning Rælingsåsen
Status: Planlegging igangsatt.
Plantype: Detaljegulering.
36

## Side 37

OM EIENDOMMEN
Formål: Hensikten med planen er å sikre at tilgjengelig på Rælingen kommune sine nettsider via
drikkevannsforsyningen er i henhold til krav som kommunekart.
Mattilsynet

---

[d181_d181 | Side [1]]
rne og
HMS (forhold av betydning for Helse, miljø og sikkerhet): egner seg godt til blant annet barnedåp, barnebursdager,
konfirmasjoner og andre private arrangementer.
Vurdering av avvik: Nærmere informasjon om utleie finnes på borettslagets
‑Det er ikke foretatt radonmålinger, og bygget er heller hjemmeside.
ikke utført med radonsperre.
‑Rekkverket på balkong eller terrasse er for lavt i forhold Styrets arbeid i perioden 2024 til 2025 har hatt særlig
til dagens krav. fokus på rutiner, vedlikehold og

---

[d181_d181 | Side [1]]
 er rolig og populært, og byr på gode oppvekstvilkår samt
nærhet til både natur og servicetilbud.
Sikringsordning I nærområdet finnes blant annet dagligvarebutikker som
Borettslaget er ikke tilknyttet sikringsordning for Kiwi og Coop Extra, hvor førstnevnte ligger i kort avstand
fellesgjeld. fra boligen. For et større utvalg av butikker, servicetilbud
og serveringssteder er det kort vei til Lillestrøm sentrum.
Her finner du også kino, restauranter og et variert
Formue: bytilbud. Strømmen Storsenter med

---

[d181_d181 | Side [1]]
 i Blystadlia Vest til Org.nr: 980 489 698
boligformål i form av blokkbebyggelse. Området har en Rettigheter og plikter ved oppføring, drift og vedlikehold
størrelse på ca. 46,7 daa. Det planlegges videre for av frittliggende nettstasjon (prefabrikkert kiosk)
opparbeiding av felles leke‑ og rekreasjonsarealer, samt (stedsevarig rett)
trafikale løsninger i området. Nye gang‑ og Bestemmelse om transport og ferdsel
sykkelforbindelser etableres. Det tas til sikte på å Bestemmelse om byggeforbud og

---

[d181_d181 | Side [1]]
opplysninger om eiendommen og området omkring.
Presentasjonen av informasjon er i samsvar med nasjonal standard.
Kartet kan inneholde feil, mangler eller avvik i forhold til kravene i oppgitt standard.
Kartet kan ikke benyttes til andre formål enn det formålet det er utlevert til uten samtykke fra kommunen jf. lov om åndsverk.
85

## Side 86

Tegnforklaring
86

## Side 87

Reguleringsplanforslag
Eiendom: 103/297
Adresse: Blystadringen 6A
Utskriftsdato: 05.01.2026
UTM-32
Rælingen kommune Målestokk:

---

[d181_d181 | Side [1]]
i et trivelig og rolig nabolag med nærhet til marka,
hvor flotte turmuligheter starter rett utenfor døren. Området byr på
fine omgivelser og god utsikt mot nærliggende natur. Samtidig er
det enkel tilgang til hverdagslige fasiliteter, med kort avstand til
både kollektivtransport og dagligvarebutikk. For et bredere utvalg
av butikker og servicetilbud er det også kort vei til Strømmen
Storsenter og Lillestrøm sentrum.
Velkommen til visning ‑ husk påmelding!
9

## Side 10

Rommet har en fleksibel utforming

---

[d181_d181 | Side [1]]
annet bruk av tomten til boligformål, samt
boligformål i form av blokkbebyggelse. Området har en rett til etablering og vedlikehold av tekniske anlegg som
størrelse på ca. 46,7 daa. Det planlegges videre for vei, vann og avløp. Det følger også bestemmelser om rett
opparbeiding av felles leke‑ og rekreasjonsarealer, samt for kommune og offentlige etater til å ha liggende
trafikale løsninger i området. Nye gang‑ og ledninger over eiendommen, med adgang for inspeksjon
sykkelforbindelser etableres. Det tas til

---

[d181_d181 | Side [1]]
nnmagasin inne i åsen. Det planlegges for å etablere eiendommens matrikkel ved overskjøting til ny
tre tunnelportaler, henholdsvis ved Nedre Rælingsveg, hjemmelshaver:
Sandbekken og Blystadringen.
Se også: https:/ / www.ralingen.kommune.no/ 3224/ 103/ 297:
kapasitetsoekning‑raelingsaasen 07.07.1977 ‑ Dokumentnr: 103827 ‑ Rettigheter iflg. skjøte
Rett for kommunen til å anlegge og vedlikeholde
Området mellom Blystadringen og Blystadvegen er ledninger m.m.
avsatt til boligbebyggelse ‑ fremtidig i

---

[d181_d181 | Side [1]]
 blir nok Gift 32% 33%
boende :)»
Ikke gift 51% 54%
Sitat fra en lokalkjent
Separert 13% 9%
Enke/Enkemann 4% 4%
Innholdet i nabolagsprofilen er hentet fra ulike datakilder, og feil eller mangler kan forekomme. Vurderinger og sitater er innhentet på web og gir uttrykk for
hvordan naboene vurderer nabolaget. FINN.no AS kan ikke holdes ansvarlig for feil/mangler i profilen. Copyright © Finn.no AS 2026
105

## Side 106

Innholdet i nabolagsprofilen er hentet fra ulike datakilder, og feil eller mangler kan

---

[d181_d181 | Side [1]]
 etableres. Det tas til sikte på å Bestemmelse om byggeforbud og beplantning
planlegge for ca. 16 500 kvm BRA boligbebyggelse, noe Kort fortalt: Det er tinglyst en avtale fra 2016 mellom
som utgjør omtrent 143 leiligheter fordelt på to Blystadringen Borettslag og Hafslund Nett AS som gir
byggområder netteier varig rett til plassering, drift og vedlikehold av en
frittliggende nettstasjon med tilhørende kabelanlegg på
Som følge av eventuell fremtidig utbygging i området må eiendommen. Avtalen regulerer også

---

[d181_d181 | Side [1]]
vegen er ledninger m.m.
avsatt til boligbebyggelse ‑ fremtidig i kommuneplanen. Bestemmelse om generende virksomhet
Dette må da påregnes bebygget. Plan‑ID er 245, Med flere bestemmelser
Blystadlia Vest. Kort fortalt: Eiendommen ble i 1977 overdratt fra A/ S
Planens formål: Hensikten med planen er å legge til rette Rælingen Tomteselskap til Blystadlia Borettslag. Skjøtet
for utviklingen av eiendommene i Blystadlia Vest til regulerer blant annet bruk av tomten til boligformål, samt
boligformål i form av

---

[d181_d181 | Side [1]]
 er den begrenset 琀椀l
30 år (eierseksjonsloven). I bore琀琀slag og aksjeleiligheter kan bruksre琀琀 琀椀ldeles, men kan endres av generalforsamlingen. Rom utenfor
boenheten kan omdisponeres, noe som kan påvirke boligens BRA.
Lovlighet
Byggetegninger
Det foreligger godkjente og byggemeldte tegninger, som stemmer med dagens bruk
Kommentar: I henhold 琀椀l NS 3600:2025 skal bygningstegninger kun gjennomgås av bygningssakkyndig der disse er fremlagt av selger eller
megler.
Det er oversendt godkjente byggemeldte

---

[d181_d181 | Side [1]]
ns verdi og appell.
Tinglyste/andre forhold
På generelt grunnlag oppfordres alle 琀椀l å se琀琀e seg inn i vedtekter, husordensregler, regnskap, budsje琀琀 og årsberetning.
Dokumentene vil være 琀椀lgjengelig hos meglerforetaket. Det gjøres oppmerksom på at fellesgjeld og felleskostnader kan variere over 琀椀d som
følge av beslutninger foreta琀琀 i sameiet.
Bebyggelsen
Boligblokk over 6 etasjer.
Området består hovedsakelig av blokker.
Bygningen ble ta琀琀 i bruk i 1978 med bærende konstruksjoner, etasjeskillere og

---

[d181_d181 | Side [1]]
ove har byttet plass med stue.
Sammendrag selgers egenerklæring: Selgers
egenerklæringsskjema følger vedlagt salgsoppgaven. Se vedlagt egenerklæringsskjema for fullstendig utfylt
Interessenter oppfordres til å gjennomgå dette nøye. dokument.
Følgende opplysninger er spesielt viktig å merke seg: Moderniseringer og påkostninger: Håndverkstjenester
siste 5 år i følge selgers opplysninger:
6 Kjenner du til om det er/ har vært utettheter i terrasse/ 2018: Balkong oppgradert i 2018.
garasje/ tak/ fasade? Ja.

---

[d181_d181 | Side [1]]
g inn i alle salgsdokumentene, understrekes at selger står fritt til å velge hvilket bud som
herunder salgsoppgave, tilstandsrapport og selgers aksepteres, og er ikke forpliktet til å velge det høyeste.
egenerklæring. Kjøper anses for å være kjent med
forhold som er tydelig beskrevet i salgsdokumentene, Alle budgivere må ved inngivelse av bud opplyse om de
slike forhold kan ikke senere gjøres gjeldende som en opptrer som forbruker eller som næringsdrivende/ person
mangel ved boligen. Dette gjelder

---

[d181_d181 | Side [1]]
en § 5‑4.
Korttidsutleie er tillatt i opptil 30 døgn per år uten Forsikring
samtykke fra styret. Boligselgerforsikring: Selger har tegnet
boligselgerforsikring som dekker selgers ansvar etter
avhendingsloven begrenset oppad kr. 20 000 000,‑.
Radonmåling Egenerklæringsskjema er vedlagt salgsoppgaven og
Selger har ikke utført radonmåling. Det er ikke krav om interessenter oppfordres til å gjennomgå denne før bud
dette med mindre boligen er helt eller delvis utleid. inngis.
Boligkjøperforsikring: Kjøper har

---

[d181_d181 | Side [1]]
jon som må
inntas, ber vi om å få beskjed om dette snarest etter utkastet er
sendt.
Viktig:
Det gjøres oppmerksom på at egenerklæringsskjemaet bør leses
nøye, da det inneholder relevant og nyttig informasjon om
boligen.
Skjemaet gir oversikt over forhold som er opplyst av selger,
herunder utførte arbeider, vedlikehold og øvrige forhold som kan
være av betydning for interessenter.
Innholdet utgjør en viktig del av dokumentasjonen ved eierskifte.
Oppdragsnr.: 22179-26061 Befaringsdato: 11.03.2026 Side: 28 av

---

[d181_d181 | Side [1]]
er be om
en oppdatert rapport.
Merk at en oppdatering av rapport etter en viss tid kan medføre
en merkostnad.
NB!
Takstrapporten er en viktig del av avtalegrunnlaget.
Kunden/rekvirent må derfor lese nøye igjennom for å sjekke at de
opplysningene som er gitt er korrekte.
Vi minner om at selger er pliktig til å opplyse om alle forhold ved
eiendommen som kan ha betydning for en kjøper.
Dersom det er presiseringer etter ytterligere informasjon som må
inntas, ber vi om å få beskjed om dette snarest etter

---

[d181_d181 | Side [1]]
rtakelsesprotokoller som også inneholder tilbud til
forbruker om tilpassede strøm‑, internett ‑ og
alarmtjenester
Hvilke produkter/ tjenester kjøper og selger får i
forbindelse med oppdraget, kan variere ut fra hvor i
42

## Side 43

BLYSTADRINGEN 8F

## Side 44

EGENERKLÆRINGSSKJEMA
Til orientering vil dette skjema være en del av salgsoppgaven
Meglerfirma
EMERA Lillestrøm
Oppdragsnr.
04250042
Selger 1 navn
Marius Kristiansen
Gateadresse
Blystadringen 8F
Poststed Postnr
BLYSTADLIA 2014
Er det dødsbo?
Nei

---

[d181_d181 | Side [1]]
kin, platetopp, stekeovn og integrert kjøl‑ og
fryseskap. Øvrige hvitevarer medfølger ikke.
Bad:
Badet er et pent, flislagt baderom fra 2005 med fliser på Innbo og løsøre: Salgsoppgaven inkluderer NEFs
både gulv og vegger. Gulvet er utstyrt med varmekabler standardliste "Oversikt over løsøre og tilbehør", som
som gir god komfort. Rommet inneholder vegghengt legges til grunn med mindre annet er spesifisert i
toalett, dusjhjørne samt servant med tilhørende salgsoppgaven.
skapplass. Himlingen har en glatt,

---

[d181_d181 | Side [1]]
e møblement. Alkoven er skjermet fra øvrig garanti fra produsent eller leverandør.
oppholdsrom og gir en naturlig inndeling mellom sove‑
og oppholdsareal. Sovealkoven ble byttet plass på i 2024, Kjøper aksepterer at det kan forekomme hull og merker
den var tidligere plassert i det som er stue per dags dato. etter montering av inventar og utstyr som ikke er en del
av overdragelsen.
30

## Side 31

OM EIENDOMMEN
Beskrivelse: Husker ikke helt om det var Nortekk, men
har som sagt hvert gjort arbeider med å

---

[d181_d181 | Side [1]]
005240
:ecnerefer
tnemucoD
46

## Side 47

Tilleggskommentar
Jeg bekrefter at opplysningene er gitt etter beste skjønn. Jeg er kjent med at dersom jeg har gitt ufullstendige, uriktige eller misvisende
opplysninger om eiendommen, vil forsikringsselskapet kunne søke hel eller delvis regress for sine utbetalinger eller redusere sitt ansvar helt
eller delvis, jfr. vilkår for boligselgerforsikring punkt 7.1 og forsikringsavtaleloven kapittel 4.
Jeg er orientert om mitt mulige ansvar som selger etter

---

[d181_d181 | Side [1]]
p foreligger når en fysisk person kjøper
nøye, gjerne sammen med fagperson, før bud gis. eiendom uten at formålet hovedsakelig er knyttet til
Dersom kjøper velger å kjøpe uten å ha sett næringsvirksomhet.
eiendommen, kan det ikke etter overtakelse reklameres
på forhold som burde ha vært oppdaget ved en ordinær En eiendom anses å ha en mangel dersom den ikke
gjennomgang. oppfyller kravene som følger av avtalen, eller ved brudd
på bestemmelser i avhendingsloven §§ 3‑2 til 3‑8. Det
39

## Side 40

OM

---

[d181_d181 | Side [1]]
t el‑anlegg ble byttet i 2018 tilstandsrapport av en kvalifisert bygningssakkyndig.
Arbeid utført av Smart Service Norge. Rapporten gir en grundig vurdering av boligens tilstand
og påpeker eventuelle avvik som ble oppdaget under
11.1 Foreligger det samsvarserklæring (i henhold til befaringen. Tilstandsrapporten og selgers egenerklæring
forskrift om elektriske lavspenningsanlegg)? Ja. er vedlagt salgsoppgaven, og det er viktig at
interessenter setter seg grundig inn i disse dokumentene
13 Har du ladeanlegg/

---

[d181_d181 | Side [1]]
eanlegg i
11 Kjenner du til om det er/ har vært utført arbeid på kjeller.
el‑anlegget eller andre installasjoner (f.eks. oljetank, Området består hovedsakelig av blokker.
sentralfyr, ventilasjon)? Ja, kun av faglært.
Beskrivelse: Samsvarserklæring som henger i
sikringsskapet tilsier at det har blitt utført arbeider av Byggemåte
faglærte. Annonse fra da jeg kjøpte leiligheten beskriver I forbindelse med salget er det blitt utført en
også at el‑anlegg ble byttet i 2018 tilstandsrapport av en kvalifisert

---

[d181_d181 | Side [1]]
 om det var Nortekk, men
har som sagt hvert gjort arbeider med å tekke om taket
Eiendommens
for å være sikker mot vanninntrenging.
Arbeid utført av Nortekk.
tilstand
Takstmann: Remi Bjørnstad 18 Kjenner du til om det er innredet/ bruksendret/ bygget
ut i kjeller eller loft eller andre deler av boligen? Ja.
Type takst avholdt av takstmann: Tilstandsrapport Beskrivelse: Mindre tiltak som ikke er søknadspliktig er
blitt utført. Soveplass/ alkove har byttet plass med stue.
Sammendrag selgers egenerklæring:

---

[d181_d181 | Side [1]]
med tilhørende salgsoppgaven.
skapplass. Himlingen har en glatt, malt overflate og er
utstyrt med downlights som gir god belysning. Gjenstander som er nevnt i standardlisten, men som ikke
finnes på eiendommen, vil heller ikke følge med i salget.
Sovealkove Alt utstyr og installasjoner som medfølger overtas slik de
Leiligheten har en praktisk sovealkove med plass til seng er, uten garanti, med mindre det foreligger en gjeldende
og tilhørende møblement. Alkoven er skjermet fra øvrig garanti fra produsent

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "Planlagte økte felleskostnader fra oktober 2026: Avdragsfriheten på borettslagets lån knyttet til takrehabiliteringen utløper, noe som vil medføre økte kapitalkostnader fordelt gjennom felleskostnadene. Felleskostnadene øker fra kr 4.078,- til kr 4.271,- per måned fra 01.10.2026.",
      "evidence": [
        "Det er vedtatt at felleskostnadene justeres fra oktober 2026. Bakgrunnen for dette er at avdragsfriheten på deler av borettslagets lån knyttet til takrehabiliteringen utløper.",
        "Felleskostnadene øker til kr 4.271,‑ den 01.10.2026.",
        "Styret estimerte at dette ville medføre et tillegg i felleskostnadene på om lag kr 500 per måned frem til lånet er nedbetalt."
      ],
      "source_documents": [
        "d181_d181"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R2",
      "description": "Høy fellesgjeld i borettslaget: Borettslaget har en betydelig fellesgjeld med saldo på kr 14.180.564 per 10.03.2026, og andel fellesgjeld for denne leiligheten er kr 155.064. Renten er 4,64% p.a. med kun 10 terminer igjen til innfrielse.",
      "evidence": [
        "Saldo per 10.03.2026: 14 180 564",
        "Andel av fellesgjeld: Kr 155 064 pr. 10.03.2026",
        "Rentesats per 10.03.2026: 4.64% pa.",
        "Antall terminer til innfrielse: 10"
      ],
      "source_documents": [
        "d181_d181"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R3",
      "description": "Borettslaget har ikke sikringsordning for fellesgjeld: Dersom andre andelseiere misligholder sine forpliktelser, må øvrige andelseiere dekke borettslagets løpende utgifter. Dette innebærer en risiko for økte kostnader for kjøper.",
      "evidence": [
        "Borettslaget er ikke tilknyttet sikringsordning for fellesgjeld.",
        "Andelseierne har ikke personlig ansvar for borettslagets fellesgjeld, men de må dekke borettslagets løpende utgifter. Manglende innbetaling av fellesutgiftene som følge av andre andelshaveres mislighold, eller dersom borettslaget sitter på fraflyttede og/eller usolgte andeler, må dekkes av de øvrige andelseierne."
      ],
      "source_documents": [
        "d181_d181"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.93
    },
    {
      "risk_id": "R4",
      "description": "Borettslagets årsregnskap viser underskudd: Årsregnskapet for foregående år viser et underskudd på kr 6.354.535, noe som kan indikere svak økonomi i borettslaget og risiko for fremtidige kostnadsøkninger. Merk at budsjettert underskudd var kr 12.117.148, og faktisk underskudd ble vesentlig lavere. Inneværende år er det budsjettert med overskudd på kr 858.709.",
      "evidence": [
        "Årsregnskapet for foregående år viser et underskudd på kr 6 354 535.",
        "For inneværende år er det lagt opp til et budsjettert overskudd på kr 858 709.",
        "Underskuddet for 2024 ble vesentlig lavere enn forutsatt i budsjettet, hvor det opprinnelig var estimert et underskudd på kr 12 117 148."
      ],
      "source_documents": [
        "d181_d181"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.75
    },
    {
      "risk_id": "R5",
      "description": "Planavvik i gulv (TG2): Det er målt betydelige planavvik i alkove (17 mm) og stue/kjøkken (16 mm), noe som er klassifisert som tilstandsgrad 2 og kan indikere setninger eller konstruksjonsmessige problemer.",
      "evidence": [
        "Alkove: Det ble målt 17 mm planavvik gjennom hele rommet (TG2).",
        "Stue/kjøkken: Det ble målt 16 mm planavvik gjennom hele rommet (TG2)."
      ],
      "source_documents": [
        "d181_d181"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R6",
      "description": "Manglende radonmåling: Det er ikke utført radonmåling i boligen, og bygget er heller ikke utført med radonsperre. Radon kan utgjøre en helserisiko for beboerne.",
      "evidence": [
        "Det er ikke foretatt radonmålinger, og bygget er heller ikke utført med radonsperre.",
        "Selger har ikke utført radonmåling."
      ],
      "source_documents": [
        "d181_d181"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R7",
      "description": "Rekkverk på balkong er for lavt i henhold til dagens krav: Rekkverket på balkong eller terrasse er for lavt i forhold til dagens krav, noe som utgjør en sikkerhetsrisiko og er klassifisert som avvik.",
      "evidence": [
        "Rekkverket på balkong eller terrasse er for lavt i forhold til dagens krav."
      ],
      "source_documents": [
        "d181_d181"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.93
    },
    {
      "risk_id": "R8",
      "description": "Naturlig ventilasjon er enklere enn dagens krav (TG2): Ventilasjonsløsningen er enklere enn det som benyttes i dag, og oppfyller ikke dagens strenge krav til ventilasjon. Dette er gitt tilstandsgrad 2.",
      "evidence": [
        "Ventilasjonsløsningen er enklere enn det som benyttes i dag.",
        "Naturlig ventilasjon gis på generelt grunnlag tilstandsgrad 2 da dagens strenge krav til ventilasjon ikke er oppfylt."
      ],
      "source_documents": [
        "d181_d181"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R9",
      "description": "Manglende synliggjøring av lekkasje fra innebygget sisterne (TG2): Det er ikke påvist tilfredsstillende løsning for å synliggjøre lekkasje fra innebygget sisterne på badet, noe som kan medføre skjulte vannskader.",
      "evidence": [
        "Det er ikke påvist tilfredsstillende løsning for å synliggjøre lekkasje fra innebygget sisterne.",
        "Normal og forventet bruksslitasje er observert."
      ],
      "source_documents": [
        "d181_d181"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.87
    },
    {
      "risk_id": "R10",
      "description": "Tidligere utettheter i tak/fasade: Selger bekrefter at det har vært utettheter i terrasse/garasje/tak/fasade, og det er utført arbeider for å sikre mot vanninntrenging. Det er usikkerhet knyttet til om alle lekkasjer er fullstendig utbedret.",
      "evidence": [
        "Kjenner du til om det er/har vært utettheter i terrasse/garasje/tak/fasade? Ja.",
        "har som sagt hvert gjort arbeider med å tekke om taket for å være sikker mot vanninntrenging. Arbeid utført av Nortekk.",
        "det har vært håndtert tre større vannlekkasjer der USBL prosjekt og Gravco har bistått."
      ],
      "source_documents": [
        "d181_d181"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.87
    },
    {
      "risk_id": "R11",
      "description": "Planlagt fremtidig utbygging i nærområdet: Området mellom Blystadringen og Blystadvegen er avsatt til fremtidig boligbebyggelse (Plan-ID 245, Blystadlia Vest), og det planlegges ca. 143 leiligheter. Dette kan medføre byggeaktivitet, støy og endrede omgivelser.",
      "evidence": [
        "Som følge av eventuell fremtidig utbygging i området må det påregnes byggeaktivitet og noe støy i perioder.",
        "Det planlegges videre for opparbeiding av felles leke‑ og rekreasjonsarealer, samt trafikale løsninger i området.",
        "Det tas til sikte på å planlegge for ca. 16 500 kvm BRA boligbebyggelse, noe som utgjør omtrent 143 leiligheter fordelt på to byggområder."
      ],
      "source_documents": [
        "d181_d181"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R12",
      "description": "Planlagt kapasitetsøkning av drikkevannsforsyning (Rælingsåsen): Det pågår planlegging av tunnelportaler og nytt vannmagasin i åsen nær eiendommen, noe som kan medføre anleggsarbeid og støy i perioden.",
      "evidence": [
        "Det planlegges for å etablere tre tunnelportaler, henholdsvis ved Nedre Rælingsveg, Sandbekken og Blystadringen.",
        "Reguleringsplaner under arbeid: ID: 255, Navn: Kapasitetsøkning Rælingsåsen, Status: Planlegging igangsatt."
      ],
      "source_documents": [
        "d181_d181"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R13",
      "description": "Begrenset adgang til utleie: Det er begrenset adgang til utleie av boligen, og korttidsutleie er kun tillatt i opptil 30 døgn per år uten samtykke fra styret. Dette begrenser kjøpers fleksibilitet.",
      "evidence": [
        "Adgang til utleie: Det er begrenset",
        "Korttidsutleie er tillatt i opptil 30 døgn per år uten samtykke fra styret."
      ],
      "source_documents": [
        "d181_d181"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R14",
      "description": "Styregodkjennelse kreves for kjøper: Kjøper må godkjennes av borettslagets styre, noe som innebærer en risiko for at kjøpet ikke gjennomføres dersom styret nekter godkjenning.",
      "evidence": [
        "Styregodkjennelse: Kjøper må godkjennes av borettslagets styre. Styret kan kun nekte godkjenning dersom det foreligger saklig grunnlag, jf. borettslagsloven § 4‑4."
      ],
      "source_documents": [
        "d181_d181"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R15",
      "description": "Energikarakter E: Boligen har energikarakter E, som er lavt og indikerer høyt energiforbruk. Dette kan medføre høye strømkostnader for kjøper.",
      "evidence": [
        "Energikarakter: E"
      ],
      "source_documents": [
        "d181_d181"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R16",
      "description": "Tilstandsrapporten er begrenset til visuell befaring (nivå 1): Rapporten er basert på kun visuelle observasjoner uten åpning av konstruksjoner, noe som betyr at skjulte feil og mangler ikke nødvendigvis er avdekket.",
      "evidence": [
        "Det gjøres oppmerksom på at dette er en tilstandsrapport på nivå 1, dvs. kun en visuell befaring, uten åpning av konstruksjoner.",
        "Ved evt. åpning av konstruksjoner kan feil og mangler avdekkes også utover det som er omtalt i rapporten.",
        "Det gjøres ikke nærmere undersøkelser slik som åpning av vegger eller andre bygningsdeler."
      ],
      "source_documents": [
        "d181_d181"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R17",
      "description": "Tinglyst rett for Hafslund Nett AS til plassering av nettstasjon på eiendommen: Det er tinglyst en avtale fra 2016 som gir netteier varig rett til plassering, drift og vedlikehold av en frittliggende nettstasjon med tilhørende kabelanlegg på eiendommen.",
      "evidence": [
        "Det er tinglyst en avtale fra 2016 mellom Blystadringen Borettslag og Hafslund Nett AS som gir netteier varig rett til plassering, drift og vedlikehold av en frittliggende nettstasjon med tilhørende kabelanlegg på eiendommen."
      ],
      "source_documents": [
        "d181_d181"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.78
    },
    {
      "risk_id": "R18",
      "description": "Alkove/soveplass har byttet plass med stue uten søknadspliktig godkjenning: Selger opplyser at soveplass/alkove har byttet plass med stue, og at dette er et mindre tiltak som ikke er søknadspliktig. Det er usikkerhet knyttet til om dette er korrekt klassifisert.",
      "evidence": [
        "Beskrivelse: Mindre tiltak som ikke er søknadspliktig er blitt utført. Soveplass/alkove har byttet plass med stue.",
        "Er innredning/utbyggingen godkjent hos bygningsmyndighetene? Nei"
      ],
      "source_documents": [
        "d181_d181"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.72
    },
    {
      "risk_id": "R19",
      "description": "Bereder og røranlegg for varmtvann ikke fullt ut vurdert: Takstmannen har ikke fullt ut vurdert bereder og røranlegget for varmtvann, da dette krever spesielt utstyr og kompetanse. Alder, fortetning og brudd kan være risikomomenter.",
      "evidence": [
        "Undertegnede har ikke fullt ut vurdert bereder og røranlegget for varmtvann av den grunn at dette krever spesielt utstyr og kompetanse.",
        "Alder, fortetning og brudd kan være risikomomenter i et hvert anlegg."
      ],
      "source_documents": [
        "d181_d181"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    }
  ],
  "re_retrieval_queries": [
    "tilstandsgrad TG3 alvorlige avvik bolig",
    "balkong rekkverk høyde krav utbedring kostnad",
    "bad baderom tilstandsgrad membran fukt",
    "el-anlegg elektrisk anlegg alder tilstand",
    "forkjøpsrett meldefrist borettslag",
    "årsregnskap underskudd årsak borettslag økonomi",
    "skjeggkre insekter skadedyr borettslag",
    "byggeår 1978 alder konstruksjon risiko"
  ],
  "reasoning": "\nGjennomgang av alle 19 identifiserte risikoer mot tilgjengelig dokumentevidens:\n\n**R1 – Økte felleskostnader fra okt. 2026:** Meget godt dokumentert. Tre separate evidenspunkter bekrefter vedtatt økning, beløp og årsak. Confidence justeres opp til 0.97 da dette er et vedtatt faktum, ikke en usikkerhet.\n\n**R2 – Høy fellesgjeld:** Godt dokumentert med konkrete tall. Merk at kun 10 terminer gjenstår, noe som betyr lånet snart er nedbetalt – dette er egentlig en positiv faktor på sikt. Confidence justeres marginalt opp til 0.92 da tallene er klart dokumentert, men risikoen er moderat gitt kort gjenværende løpetid.\n\n**R3 – Ingen sikringsordning:** Direkte bekreftet i dokumentet. Confidence opprettholdes på 0.93.\n\n**R4 – Underskudd i årsregnskap:** Evidensen er til stede, men konteksten nyanserer risikoen betydelig: underskuddet (kr 6,35 mill.) var vesentlig lavere enn budsjettert (kr 12,1 mill.), og inneværende år budsjetteres med overskudd. Underskuddet skyldes sannsynligvis ekstraordinære kostnader knyttet til takrehabiliteringen. Confidence justeres ned til 0.75 da risikoen er reell men konteksten er mer positiv enn beskrivelsen antyder.\n\n**R5 – Planavvik TG2:** Direkte dokumentert med målte verdier. Confidence opprettholdes på 0.90.\n\n**R6 – Manglende radonmåling:** Dobbelt bekreftet. Confidence opprettholdes på 0.95.\n\n**R7 – Rekkverk for lavt:** Direkte nevnt som avvik i HMS-seksjonen. Confidence opprettholdes på 0.93.\n\n**R8 – Naturlig ventilasjon TG2:** Direkte dokumentert. Confidence opprettholdes på 0.88.\n\n**R9 – Sisterne lekkasjesynliggjøring TG2:** Direkte dokumentert. Confidence opprettholdes på 0.87.\n\n**R10 – Tidligere utettheter i tak/fasade:** Godt dokumentert med tre lekkasjer og utbedringsarbeider. Confidence justeres marginalt ned til 0.87 da det er noe usikkerhet om fullstendig utbedring, men evidensen er klar.\n\n**R11 – Fremtidig utbygging:** Godt dokumentert med Plan-ID 245. Confidence opprettholdes på 0.88.\n\n**R12 – Kapasitetsøkning Rælingsåsen:** Dokumentert med Plan-ID 255. Confidence opprettholdes på 0.82.\n\n**R13 – Begrenset utleie:** Direkte dokumentert. Confidence opprettholdes på 0.85.\n\n**R14 – Styregodkjennelse:** Direkte dokumentert med lovhenvisning. Confidence opprettholdes på 0.80. Merk at risikoen er begrenset da styret kun kan nekte ved saklig grunn.\n\n**R15 – Energikarakter E:** Direkte dokumentert. Confidence opprettholdes på 0.85.\n\n**R16 – Begrenset tilstandsrapport nivå 1:** Meget godt dokumentert med tre evidenspunkter. Confidence opprettholdes på 0.90.\n\n**R17 – Tinglyst rett Hafslund Nett:** Direkte dokumentert. Dokumentet selv omtaler dette som \"standard for strømforsyning og anses som normalt forekommende i boligområder\", noe som reduserer risikoen noe. Confidence justeres ned til 0.78.\n\n**R18 – Alkove/stue byttet plass:** Dokumentert, men selger klassifiserer det som ikke søknadspliktig. Usikkerheten er reell men begrenset. Confidence justeres ned til 0.72.\n\n**R19 – Bereder/røranlegg ikke vurdert:** Direkte dokumentert. Confidence opprettholdes på 0.80.\n\n**Manglende risikoer som bør vurderes:**\n1. Byggets alder (1978) – generell risiko for skjulte aldersrelaterte feil i konstruksjoner, rør og installasjoner som ikke er fanget opp av visuell befaring.\n2. Forkjøpsrett med frist 31.03.2026 – kjøper kan miste boligen til en andelseier med forkjøpsrett.\n3. El-anlegg byttet i 2018 – positivt, men bør verifiseres nærmere.\n4. Skjeggkre/skadedyr – spørsmål stilt i egenerklæring, svar ikke synlig i tilgjengelige chunks.\n5. Baderom fra 2005 – alder på membran og flisarbeid kan være en risiko.\n"
}

## Raw Response
```json
{
  "id": "msg_01EJVBQR2LSmDyia7XSQiBie",
  "container": null,
  "content": [
    {
      "id": "toolu_01H5PtHJhCenKXyQKu2x1yyB",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "Planlagte økte felleskostnader fra oktober 2026: Avdragsfriheten på borettslagets lån knyttet til takrehabiliteringen utløper, noe som vil medføre økte kapitalkostnader fordelt gjennom felleskostnadene. Felleskostnadene øker fra kr 4.078,- til kr 4.271,- per måned fra 01.10.2026.",
            "evidence": [
              "Det er vedtatt at felleskostnadene justeres fra oktober 2026. Bakgrunnen for dette er at avdragsfriheten på deler av borettslagets lån knyttet til takrehabiliteringen utløper.",
              "Felleskostnadene øker til kr 4.271,‑ den 01.10.2026.",
              "Styret estimerte at dette ville medføre et tillegg i felleskostnadene på om lag kr 500 per måned frem til lånet er nedbetalt."
            ],
            "source_documents": [
              "d181_d181"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R2",
            "description": "Høy fellesgjeld i borettslaget: Borettslaget har en betydelig fellesgjeld med saldo på kr 14.180.564 per 10.03.2026, og andel fellesgjeld for denne leiligheten er kr 155.064. Renten er 4,64% p.a. med kun 10 terminer igjen til innfrielse.",
            "evidence": [
              "Saldo per 10.03.2026: 14 180 564",
              "Andel av fellesgjeld: Kr 155 064 pr. 10.03.2026",
              "Rentesats per 10.03.2026: 4.64% pa.",
              "Antall terminer til innfrielse: 10"
            ],
            "source_documents": [
              "d181_d181"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R3",
            "description": "Borettslaget har ikke sikringsordning for fellesgjeld: Dersom andre andelseiere misligholder sine forpliktelser, må øvrige andelseiere dekke borettslagets løpende utgifter. Dette innebærer en risiko for økte kostnader for kjøper.",
            "evidence": [
              "Borettslaget er ikke tilknyttet sikringsordning for fellesgjeld.",
              "Andelseierne har ikke personlig ansvar for borettslagets fellesgjeld, men de må dekke borettslagets løpende utgifter. Manglende innbetaling av fellesutgiftene som følge av andre andelshaveres mislighold, eller dersom borettslaget sitter på fraflyttede og/eller usolgte andeler, må dekkes av de øvrige andelseierne."
            ],
            "source_documents": [
              "d181_d181"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.93
          },
          {
            "risk_id": "R4",
            "description": "Borettslagets årsregnskap viser underskudd: Årsregnskapet for foregående år viser et underskudd på kr 6.354.535, noe som kan indikere svak økonomi i borettslaget og risiko for fremtidige kostnadsøkninger. Merk at budsjettert underskudd var kr 12.117.148, og faktisk underskudd ble vesentlig lavere. Inneværende år er det budsjettert med overskudd på kr 858.709.",
            "evidence": [
              "Årsregnskapet for foregående år viser et underskudd på kr 6 354 535.",
              "For inneværende år er det lagt opp til et budsjettert overskudd på kr 858 709.",
              "Underskuddet for 2024 ble vesentlig lavere enn forutsatt i budsjettet, hvor det opprinnelig var estimert et underskudd på kr 12 117 148."
            ],
            "source_documents": [
              "d181_d181"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.75
          },
          {
            "risk_id": "R5",
            "description": "Planavvik i gulv (TG2): Det er målt betydelige planavvik i alkove (17 mm) og stue/kjøkken (16 mm), noe som er klassifisert som tilstandsgrad 2 og kan indikere setninger eller konstruksjonsmessige problemer.",
            "evidence": [
              "Alkove: Det ble målt 17 mm planavvik gjennom hele rommet (TG2).",
              "Stue/kjøkken: Det ble målt 16 mm planavvik gjennom hele rommet (TG2)."
            ],
            "source_documents": [
              "d181_d181"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R6",
            "description": "Manglende radonmåling: Det er ikke utført radonmåling i boligen, og bygget er heller ikke utført med radonsperre. Radon kan utgjøre en helserisiko for beboerne.",
            "evidence": [
              "Det er ikke foretatt radonmålinger, og bygget er heller ikke utført med radonsperre.",
              "Selger har ikke utført radonmåling."
            ],
            "source_documents": [
              "d181_d181"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R7",
            "description": "Rekkverk på balkong er for lavt i henhold til dagens krav: Rekkverket på balkong eller terrasse er for lavt i forhold til dagens krav, noe som utgjør en sikkerhetsrisiko og er klassifisert som avvik.",
            "evidence": [
              "Rekkverket på balkong eller terrasse er for lavt i forhold til dagens krav."
            ],
            "source_documents": [
              "d181_d181"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.93
          },
          {
            "risk_id": "R8",
            "description": "Naturlig ventilasjon er enklere enn dagens krav (TG2): Ventilasjonsløsningen er enklere enn det som benyttes i dag, og oppfyller ikke dagens strenge krav til ventilasjon. Dette er gitt tilstandsgrad 2.",
            "evidence": [
              "Ventilasjonsløsningen er enklere enn det som benyttes i dag.",
              "Naturlig ventilasjon gis på generelt grunnlag tilstandsgrad 2 da dagens strenge krav til ventilasjon ikke er oppfylt."
            ],
            "source_documents": [
              "d181_d181"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R9",
            "description": "Manglende synliggjøring av lekkasje fra innebygget sisterne (TG2): Det er ikke påvist tilfredsstillende løsning for å synliggjøre lekkasje fra innebygget sisterne på badet, noe som kan medføre skjulte vannskader.",
            "evidence": [
              "Det er ikke påvist tilfredsstillende løsning for å synliggjøre lekkasje fra innebygget sisterne.",
              "Normal og forventet bruksslitasje er observert."
            ],
            "source_documents": [
              "d181_d181"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.87
          },
          {
            "risk_id": "R10",
            "description": "Tidligere utettheter i tak/fasade: Selger bekrefter at det har vært utettheter i terrasse/garasje/tak/fasade, og det er utført arbeider for å sikre mot vanninntrenging. Det er usikkerhet knyttet til om alle lekkasjer er fullstendig utbedret.",
            "evidence": [
              "Kjenner du til om det er/har vært utettheter i terrasse/garasje/tak/fasade? Ja.",
              "har som sagt hvert gjort arbeider med å tekke om taket for å være sikker mot vanninntrenging. Arbeid utført av Nortekk.",
              "det har vært håndtert tre større vannlekkasjer der USBL prosjekt og Gravco har bistått."
            ],
            "source_documents": [
              "d181_d181"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.87
          },
          {
            "risk_id": "R11",
            "description": "Planlagt fremtidig utbygging i nærområdet: Området mellom Blystadringen og Blystadvegen er avsatt til fremtidig boligbebyggelse (Plan-ID 245, Blystadlia Vest), og det planlegges ca. 143 leiligheter. Dette kan medføre byggeaktivitet, støy og endrede omgivelser.",
            "evidence": [
              "Som følge av eventuell fremtidig utbygging i området må det påregnes byggeaktivitet og noe støy i perioder.",
              "Det planlegges videre for opparbeiding av felles leke‑ og rekreasjonsarealer, samt trafikale løsninger i området.",
              "Det tas til sikte på å planlegge for ca. 16 500 kvm BRA boligbebyggelse, noe som utgjør omtrent 143 leiligheter fordelt på to byggområder."
            ],
            "source_documents": [
              "d181_d181"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R12",
            "description": "Planlagt kapasitetsøkning av drikkevannsforsyning (Rælingsåsen): Det pågår planlegging av tunnelportaler og nytt vannmagasin i åsen nær eiendommen, noe som kan medføre anleggsarbeid og støy i perioden.",
            "evidence": [
              "Det planlegges for å etablere tre tunnelportaler, henholdsvis ved Nedre Rælingsveg, Sandbekken og Blystadringen.",
              "Reguleringsplaner under arbeid: ID: 255, Navn: Kapasitetsøkning Rælingsåsen, Status: Planlegging igangsatt."
            ],
            "source_documents": [
              "d181_d181"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R13",
            "description": "Begrenset adgang til utleie: Det er begrenset adgang til utleie av boligen, og korttidsutleie er kun tillatt i opptil 30 døgn per år uten samtykke fra styret. Dette begrenser kjøpers fleksibilitet.",
            "evidence": [
              "Adgang til utleie: Det er begrenset",
              "Korttidsutleie er tillatt i opptil 30 døgn per år uten samtykke fra styret."
            ],
            "source_documents": [
              "d181_d181"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R14",
            "description": "Styregodkjennelse kreves for kjøper: Kjøper må godkjennes av borettslagets styre, noe som innebærer en risiko for at kjøpet ikke gjennomføres dersom styret nekter godkjenning.",
            "evidence": [
              "Styregodkjennelse: Kjøper må godkjennes av borettslagets styre. Styret kan kun nekte godkjenning dersom det foreligger saklig grunnlag, jf. borettslagsloven § 4‑4."
            ],
            "source_documents": [
              "d181_d181"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R15",
            "description": "Energikarakter E: Boligen har energikarakter E, som er lavt og indikerer høyt energiforbruk. Dette kan medføre høye strømkostnader for kjøper.",
            "evidence": [
              "Energikarakter: E"
            ],
            "source_documents": [
              "d181_d181"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R16",
            "description": "Tilstandsrapporten er begrenset til visuell befaring (nivå 1): Rapporten er basert på kun visuelle observasjoner uten åpning av konstruksjoner, noe som betyr at skjulte feil og mangler ikke nødvendigvis er avdekket.",
            "evidence": [
              "Det gjøres oppmerksom på at dette er en tilstandsrapport på nivå 1, dvs. kun en visuell befaring, uten åpning av konstruksjoner.",
              "Ved evt. åpning av konstruksjoner kan feil og mangler avdekkes også utover det som er omtalt i rapporten.",
              "Det gjøres ikke nærmere undersøkelser slik som åpning av vegger eller andre bygningsdeler."
            ],
            "source_documents": [
              "d181_d181"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R17",
            "description": "Tinglyst rett for Hafslund Nett AS til plassering av nettstasjon på eiendommen: Det er tinglyst en avtale fra 2016 som gir netteier varig rett til plassering, drift og vedlikehold av en frittliggende nettstasjon med tilhørende kabelanlegg på eiendommen.",
            "evidence": [
              "Det er tinglyst en avtale fra 2016 mellom Blystadringen Borettslag og Hafslund Nett AS som gir netteier varig rett til plassering, drift og vedlikehold av en frittliggende nettstasjon med tilhørende kabelanlegg på eiendommen."
            ],
            "source_documents": [
              "d181_d181"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.78
          },
          {
            "risk_id": "R18",
            "description": "Alkove/soveplass har byttet plass med stue uten søknadspliktig godkjenning: Selger opplyser at soveplass/alkove har byttet plass med stue, og at dette er et mindre tiltak som ikke er søknadspliktig. Det er usikkerhet knyttet til om dette er korrekt klassifisert.",
            "evidence": [
              "Beskrivelse: Mindre tiltak som ikke er søknadspliktig er blitt utført. Soveplass/alkove har byttet plass med stue.",
              "Er innredning/utbyggingen godkjent hos bygningsmyndighetene? Nei"
            ],
            "source_documents": [
              "d181_d181"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.72
          },
          {
            "risk_id": "R19",
            "description": "Bereder og røranlegg for varmtvann ikke fullt ut vurdert: Takstmannen har ikke fullt ut vurdert bereder og røranlegget for varmtvann, da dette krever spesielt utstyr og kompetanse. Alder, fortetning og brudd kan være risikomomenter.",
            "evidence": [
              "Undertegnede har ikke fullt ut vurdert bereder og røranlegget for varmtvann av den grunn at dette krever spesielt utstyr og kompetanse.",
              "Alder, fortetning og brudd kan være risikomomenter i et hvert anlegg."
            ],
            "source_documents": [
              "d181_d181"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          }
        ],
        "re_retrieval_queries": [
          "tilstandsgrad TG3 alvorlige avvik bolig",
          "balkong rekkverk høyde krav utbedring kostnad",
          "bad baderom tilstandsgrad membran fukt",
          "el-anlegg elektrisk anlegg alder tilstand",
          "forkjøpsrett meldefrist borettslag",
          "årsregnskap underskudd årsak borettslag økonomi",
          "skjeggkre insekter skadedyr borettslag",
          "byggeår 1978 alder konstruksjon risiko"
        ],
        "reasoning": "\nGjennomgang av alle 19 identifiserte risikoer mot tilgjengelig dokumentevidens:\n\n**R1 – Økte felleskostnader fra okt. 2026:** Meget godt dokumentert. Tre separate evidenspunkter bekrefter vedtatt økning, beløp og årsak. Confidence justeres opp til 0.97 da dette er et vedtatt faktum, ikke en usikkerhet.\n\n**R2 – Høy fellesgjeld:** Godt dokumentert med konkrete tall. Merk at kun 10 terminer gjenstår, noe som betyr lånet snart er nedbetalt – dette er egentlig en positiv faktor på sikt. Confidence justeres marginalt opp til 0.92 da tallene er klart dokumentert, men risikoen er moderat gitt kort gjenværende løpetid.\n\n**R3 – Ingen sikringsordning:** Direkte bekreftet i dokumentet. Confidence opprettholdes på 0.93.\n\n**R4 – Underskudd i årsregnskap:** Evidensen er til stede, men konteksten nyanserer risikoen betydelig: underskuddet (kr 6,35 mill.) var vesentlig lavere enn budsjettert (kr 12,1 mill.), og inneværende år budsjetteres med overskudd. Underskuddet skyldes sannsynligvis ekstraordinære kostnader knyttet til takrehabiliteringen. Confidence justeres ned til 0.75 da risikoen er reell men konteksten er mer positiv enn beskrivelsen antyder.\n\n**R5 – Planavvik TG2:** Direkte dokumentert med målte verdier. Confidence opprettholdes på 0.90.\n\n**R6 – Manglende radonmåling:** Dobbelt bekreftet. Confidence opprettholdes på 0.95.\n\n**R7 – Rekkverk for lavt:** Direkte nevnt som avvik i HMS-seksjonen. Confidence opprettholdes på 0.93.\n\n**R8 – Naturlig ventilasjon TG2:** Direkte dokumentert. Confidence opprettholdes på 0.88.\n\n**R9 – Sisterne lekkasjesynliggjøring TG2:** Direkte dokumentert. Confidence opprettholdes på 0.87.\n\n**R10 – Tidligere utettheter i tak/fasade:** Godt dokumentert med tre lekkasjer og utbedringsarbeider. Confidence justeres marginalt ned til 0.87 da det er noe usikkerhet om fullstendig utbedring, men evidensen er klar.\n\n**R11 – Fremtidig utbygging:** Godt dokumentert med Plan-ID 245. Confidence opprettholdes på 0.88.\n\n**R12 – Kapasitetsøkning Rælingsåsen:** Dokumentert med Plan-ID 255. Confidence opprettholdes på 0.82.\n\n**R13 – Begrenset utleie:** Direkte dokumentert. Confidence opprettholdes på 0.85.\n\n**R14 – Styregodkjennelse:** Direkte dokumentert med lovhenvisning. Confidence opprettholdes på 0.80. Merk at risikoen er begrenset da styret kun kan nekte ved saklig grunn.\n\n**R15 – Energikarakter E:** Direkte dokumentert. Confidence opprettholdes på 0.85.\n\n**R16 – Begrenset tilstandsrapport nivå 1:** Meget godt dokumentert med tre evidenspunkter. Confidence opprettholdes på 0.90.\n\n**R17 – Tinglyst rett Hafslund Nett:** Direkte dokumentert. Dokumentet selv omtaler dette som \"standard for strømforsyning og anses som normalt forekommende i boligområder\", noe som reduserer risikoen noe. Confidence justeres ned til 0.78.\n\n**R18 – Alkove/stue byttet plass:** Dokumentert, men selger klassifiserer det som ikke søknadspliktig. Usikkerheten er reell men begrenset. Confidence justeres ned til 0.72.\n\n**R19 – Bereder/røranlegg ikke vurdert:** Direkte dokumentert. Confidence opprettholdes på 0.80.\n\n**Manglende risikoer som bør vurderes:**\n1. Byggets alder (1978) – generell risiko for skjulte aldersrelaterte feil i konstruksjoner, rør og installasjoner som ikke er fanget opp av visuell befaring.\n2. Forkjøpsrett med frist 31.03.2026 – kjøper kan miste boligen til en andelseier med forkjøpsrett.\n3. El-anlegg byttet i 2018 – positivt, men bør verifiseres nærmere.\n4. Skjeggkre/skadedyr – spørsmål stilt i egenerklæring, svar ikke synlig i tilgjengelige chunks.\n5. Baderom fra 2005 – alder på membran og flisarbeid kan være en risiko.\n"
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
    "input_tokens": 21696,
    "output_tokens": 5854,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
