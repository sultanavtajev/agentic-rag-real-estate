# Trace: agentic_reflecting_iter1
- **Run ID:** 730bdaab-3f95-4645-86a4-2cacf7ed4d25
- **Tidspunkt:** 2026-03-24T20:46:04.390277+00:00
- **Varighet:** 109.43s
- **Input tokens:** 23710
- **Output tokens:** 5346

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
Risiko 1: Membraner og tettesjikt på bad har oppbrukt mer enn halvparten av forventet brukstid (byggeår 2008, nå ~18 år gamle). TG2 er gitt, noe som indikerer behov for tiltak i nær fremtid og risiko for lekkasje og følgeskader.
  Confidence: 0.95
  Evidens: Smøremembran på vegg som er over 15 år og banemembran over 20 år blir vurdert til TG2 i rapporten.; Dette badet er nå snart 20 år gammelt. TG2 gis med bakgrunn i at mer enn halvparten av forventet brukstid for membran/tettesjikt er oppbrukt.; To plassbygde baderom fra byggeår med flislagte... TG2 pga alder på membraner.

Risiko 2: Sameiet vurderer å bytte ut fjernvarme med bergvarmeanlegg til en estimert kostnad på 14–16 millioner kroner. Dette kan medføre betydelig økning i felleskostnader og/eller fellesgjeld for alle seksjonseiere, inkludert kjøper.
  Confidence: 0.92
  Evidens: Totalkostnad for boring, installasjon av varmepumper, røranlegg, automasjon, måling og tilpasning til eksisterende systemer, inkludert prosjektledelse, usikkerhet og mva, er anslått til å ligge i området 14–16 millioner kroner.; Bergvarmeanlegget er planlagt å dekke ca. 40–60% av årlig energibehov, mens resterende effekt må dekkes med elektrisitet.

Risiko 3: Sameiet vurderer etablering av solcelleanlegg til en estimert kostnad på 2,5–3,0 millioner kroner. Dette kan medføre økte felleskostnader eller fellesgjeld dersom prosjektet vedtas.
  Confidence: 0.85
  Evidens: Basert på innhentede priser, inkludert teknisk installasjon, integrert fallsikring, elektroarbeider, prosjektledelse, usikkerhet og mva, anslås totalkostnaden å være i størrelsesorden 2,5–3,0 millioner kroner.; Det ble på årsmøtet 2023 vedtatt å utrede muligheten for å etablere solcelleanlegg på sameiets to hovedtak.

Risiko 4: Sameiet er ikke tilknyttet sikringsordning for fellesgjeld. Dette innebærer at kjøper ikke er beskyttet mot at andre seksjonseiere misligholder sine forpliktelser, og kan i ytterste konsekvens måtte dekke andres andel av sameiets forpliktelser.
  Confidence: 0.93
  Evidens: Ikke tilknyttet sikringsordning. Sameiet har legalpant som sikkerhet for betaling av felleskostnader.; Dette betyr at alle nåværende og fremtidige seksjonseiere, også for de seksjoner hvor fellesgjelden er innfridd, risikerer å måtte dekke sin forholdsmessige andel av sameiets betalingsforpliktelser ved mislighold.

Risiko 5: Legalpant til kommunen og sameiet har prioritet foran tinglyste lån (f.eks. banklån). Kjøper kan risikere at disse kravene dekkes før kjøpers eventuelle panthaver ved tvangssalg.
  Confidence: 0.9
  Evidens: Legalpant er pant som ikke vises i grunnboksutskriften, og har prioritet foran tinglyste lån, for eksempel banklån på seksjonen.; Legalpant til kommunen har høyere prioritet enn legalpant til sameiet.; Kommunen har legalpant som sikkerhet for betaling av kommunale avgifter og eventuell eiendomsskatt.

Risiko 6: Selger har ikke utført radonmåling. Selv om det ikke er krav om dette når boligen ikke er utleid, er radoneksponering en helserisiko som kjøper bør være oppmerksom på.
  Confidence: 0.8
  Evidens: Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid.

Risiko 7: Området er under aktiv utvikling med flere pågående reguleringsplaner, inkludert ny barneskole, ungdomsskole, bekkeåpning og sykkelvei. Dette kan medføre anleggsarbeid, støy, endrede omgivelser og usikkerhet rundt fremtidig bruk av nærliggende arealer.
  Confidence: 0.88
  Evidens: Det gjøres oppmerksom på at området er under utvikling og at endringer og oppføring av nye bygg vil kunne skje.; Grenseveien mellom Økernveien og Grensesvingen – Saksnr. 202460006. Hovedhensikten med planen er å etablere et eget anlegg for syklende og legge bedre til rette for gående.; Grenseveien 73, 91 og 95 – Regulering til barneskole, barnehage og park – Saksnr. 202118619.; Bekkeåpningen vil berøre deler av eiendommene Gladengveien 18 og 16. Dagens bruk på eiendommene forutsettes videreført, men driftsmulighetene kan bli påvirket av bekkeåpningen.

Risiko 8: Staking av tett avløp ble utført i 2025. Dette kan indikere underliggende problemer med avløpssystemet, og private stikkledninger er sameiets ansvar å vedlikeholde.
  Confidence: 0.78
  Evidens: Ja, kun av faglært. Staking av tett avløp 2025. Arbeid utført av Tanga rør AS.; Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler sameiet.

Risiko 9: Energimerket er E (grønn farge), noe som indikerer relativt høyt energiforbruk. Dette kan medføre høyere løpende energikostnader for kjøper.
  Confidence: 0.82
  Evidens: Energikarakter: E; Energifarge: Grønn

Risiko 10: Tilstandsrapporten er begrenset i omfang og gir ingen garanti for at det ikke finnes skjulte feil, skader eller mangler. Skjulte konstruksjoner, installasjoner og fellesarealer er ikke vurdert.
  Confidence: 0.87
  Evidens: Rapporten er likevel ingen garanti for at det ikke kan finnes skjulte feil, skader og mangler.; Bygningssakkyndige ser for eksempel ikke på: skjulte installasjoner, installasjoner utenfor bygningen, full funksjonstesting av el- og VVS-installasjoner, geologiske forhold og bygningens plassering på grunnen.; Tilstandsrapporten beskriver ikke hele boligen.

Risiko 11: Kommunale avgifter utgjør en betydelig og voksende kostnad for sameiet (kr 2 326 184 i 2024 mot kr 1 998 924 i 2023 – en økning på ca. 16%). Budsjett for 2025 er satt til kr 2 598 000, noe som kan presse felleskostnadene opp.
  Confidence: 0.8
  Evidens: Kommunale avgifter: Vann- og avløpsavgift -1 462 686, Renovasjonsavgift -863 498, SUM KOMMUNALE AVGIFTER -2 326 184.; Regnskap 2023: -1 998 924. Budsjett 2025: -2 598 000.

Risiko 12: Korttidsutleie av hele boligseksjonen er begrenset til maksimalt 90 døgn per år, og sammenhengende utleie kan ikke overstige 30 døgn. Dette begrenser kjøpers mulighet til å leie ut boligen på kortidsplattformer som Airbnb.
  Confidence: 0.9
  Evidens: Korttidsutleie av hele boligseksjonen i mer enn 90 døgn årlig er ikke tillatt. Med korttidsutleie menes utleie i inntil 30 døgn sammenhengende.

Risiko 13: Kjøper er forpliktet til å signere en standard kjøpekontrakt utarbeidet av Emera (eiendomshandleren), noe som kan begrense kjøpers forhandlingsrom og avtalefrihet.
  Confidence: 0.75
  Evidens: Kjøper og selger er forpliktet til å signere den standard kjøpekontrakten utarbeidet av Emera som en del av eiendomshandleren. Kjøpekontrakten kan gjennomgås hos eiendomsmegler før budet legges inn.

Dokumentkontekst:
[d083_d083 | Side [1]]
 av fellesutgifter har
eiendomsskatt. De øvrige seksjonseierne i sameiet har sameiet legal panterett i den enkelte eierseksjon,
legalpant på inntil 2G som sikkerhet for krav knyttet til begrenset til inntil 2 ganger folketrygdens grunnbeløp.
sameieforholdet, som felleskostnader. Legalpant er pant
som ikke vises i grunnboksutskriften, og har prioritet Kjøper og selger er forpliktet til å signere den standard
foran tinglyste lån, for eksempel banklån på seksjonen. kjøpekontrakten utarbeidet av Emera som en

---

[d083_d083 | Side [1]]
nnsyn/ boligseksjoner i sameiet, i henhold til eierseksjonsloven §
showfile.asp?fileid=9922718&jno=2021154015 23. Seksjoner som eies av nærstående eller gjennom et
firma regnes også med.
Tinglyste heftelser
I henhold til eierseksjonsloven § 31 er sameierne
Legalpant: Kommunen har legalpant som sikkerhet for ansvarlige overfor sameiets kreditorer i forhold til sin
betaling av kommunale avgifter og eventuell sameiebrøk. Ved manglende betaling av fellesutgifter har
eiendomsskatt. De øvrige seksjonseierne i

---

[d083_d083 | Side [1]]
banklån på seksjonen. kjøpekontrakten utarbeidet av Emera som en del av
Legalpant til kommunen har høyere prioritet enn eiendomshandleren. Kjøpekontrakten kan gjennomgås
legalpant til sameiet. hos eiendomsmegler før budet legges inn. Kontakt
eiendomsmegler for eventuelle spørsmål.
Vei, vann og avløp
Selger leverer eiendommen i ryddig og rengjort stand.
Eiendommen er tilknyttet offentlig vann‑ og
avløpssystem. Stikkledningene fra eiendommen og ut til
Kontrakts‑
det kommunale nettet er private,

---

[d083_d083 | Side [1]]
eller vedtatte reguleringsplaner, andre planer, nabovarsel eller offentlige vedtak som kan medføre endringer i bruken av
eiendommen eller av dens omgivelser?
Nei Ja
20 Kjenner du til om det foreligger påbud/heftelser/krav/manglende tillatelser vedrørende eiendommen?
Nei Ja
21 Er det foretatt radonmåling?
Nei Ja
22 Kjenner du til manglende brukstillatelse eller ferdigattest?
Nei Ja
23 Kjenner du til om det foreligger skaderapporter/ tilstandsvurderinger eller utførte målinger?
Nei Ja
24 Er det andre forhold

---

[d083_d083 | Side [1]]
ommen?
Nei Ja
16 Kjenner du til om det har vært utført arbeid på terrasse/garasje/tak/fasade?
Svar Ja, kun av faglært
Beskrivelse - Lagt nytt terrasse dekke på balkong 2023 - Møre Royal
Arbeid utført av Høie Service AS
17 Selges eiendommen med utleiedel, leilighet, hybel eller tilsvarende?
Nei Ja
18 Kjenner du til om det er innredet/bruksendret/bygget ut i kjeller eller loft eller andre deler av boligen?
Nei Ja
19 Kjenner du til forslag eller vedtatte reguleringsplaner, andre planer, nabovarsel eller

---

[d083_d083 | Side [1]]
felleskostnader/økt fellesgjeld?
Nei Ja
27 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr i sameiet/laget/selskapet (fellesareal eller i andre boliger) som rotter, mus,
maur eller lignende?
Nei Ja
28 Kjenner du til om det er/har vært skjeggkre i sameiet/laget/selskapet (fellesareal eller i andre boliger)?
Nei Ja
Initialer selger: JLB, HF 3
15006220
:ecnerefer
tnemucoD
57

## Side 58

Tilleggskommentar
1) Solskjerming montert på alle vinduer fra Oslo solskjerming (2019): -

---

[d083_d083 | Side [1]]
rderinger eller utførte målinger?
Nei Ja
24 Er det andre forhold av betydning ved eiendommen som kan være relevant for kjøper å vite om (f.eks. rasfare, tinglyste forhold eller private
avtaler)?
Nei Ja
Spørsmål for bolig i sameie/borettslag/boligaksjeselskap:
25 Kjenner du til om sameiet/laget/selskapet er involvert i tvister av noe slag?
Nei Ja
26 Kjenner du til vedtak/forslag til vedtak om forhold vedr. eiendommen som kan medføre økte felleskostnader/økt fellesgjeld?
Nei Ja
27 Kjenner du til om det

---

[d083_d083 | Side [1]]
 sitt debitoransvar. Dette betyr at alle nåværende og
fremtidige seksjonseiere, også for de seksjoner hvor fellesgjelden er innfridd, risikerer å
måtte dekke sin forholdsmessige andel av sameiets betalingsforpliktelser ved mislighold.
OBOS Eiendomsforvaltning AS påtar seg intet ansvar for eventuelle konsekvenser for
Eierseksjonssameiet, seksjonseierne eller seksjonseiernes rettsetterfølgere, av dette.
11-4 Definisjoner
I disse vedtektene menes med
a) eierseksjon: eierandel i en bebygd eller planlagt bebygd

---

[d083_d083 | Side [1]]
rapporten anses som kjent for i Oslo kommune.
kjøper, og det vil ikke være mulig å reklamere på forhold
som er nevnt i rapporten. Spesielt forhold som er vurdert
Selger
med TG2 og TG3 bør vurderes nøye, da de indikerer
avvik fra normal slitasje og/ eller høy alder, noe som kan Hanne Finstad og Johan Lædre Bjørdal
innebære behov for utbedringer. Bygningsdeler som er
Sameie
merket med TGIU er ikke blitt vurdert av takstmannen.
Eierseksjonssameiet Tiedemannsjordet
Beskrivelsen av boligen nedenfor er hentet

---

[d083_d083 | Side [1]]
peil og gangbro.
Innfrielsesdato: 30.12.2046 Tiedemannsparken og Valle Hovin er de nærmeste
Type rente: Flytende rente parkene og ligger kun et steinkast unna.
Terminer i året: 12
Administrasjonsavtale: Ja Området har gjennomgått en betydelig utvikling de siste
Andel fellesgjeld: 0,‑ årene, med moderne boligprosjekter, oppgraderte
uterom, ny infrastruktur og gode servicetilbud. Her bor du
i et nabolag som kombinerer urbant preg med grønne
Sikringsordning
omgivelser.
Ikke tilknyttet sikringsordning. Sameiet

---

[d083_d083 | Side [1]]
e, miljø og sikkerhet) •
fellesarealer (med mindre boligeier har vedlikeholdsplikt for fellesarealer og de琀琀e er kjent for bygningssakkyndig, eller fellesarealet har en særlig
琀椀lknytning 琀椀l boligen).
© iVerdi 2023 © Norsk takst 2023
Malen 琀椀l denne rapporten, inkludert standardtekstene fra Norsk takst, er vernet e琀琀er åndsverkloven og kan kun beny琀琀es av medlemsforetakene i Norsk takst og
av taks琀椀ngeniører som er ser琀椀昀椀sert i slikt foretak, samt av kunder hos iVerdi og studenter hos NEAK. For andre

---

[d083_d083 | Side [1]]
om kjøper velger å kjøpe uten å ha sett
neste fem årene. Les mer om Boligkjøperforsikring i eiendommen, kan det ikke etter overtakelse reklameres
vedlagte materiell eller på https:/ / på forhold som burde ha vært oppdaget ved en ordinær
www.soderbergpartners.no/ eiendom/ boligkjoper/ gjennomgang.
Dersom det oppstår behov for ytterligere avklaringer,
Lovanvendelse
oppfordres interessenter til å kontakte eiendomsmegler
Regelverk og generelle opplysninger eller egne rådgivere før de gir bud.
Boligen selges

---

[d083_d083 | Side [1]]
ste "Oversikt over løsøre og tilbehør", som
legges til grunn med mindre annet er spesifisert i Kjenner du til feil eller om har vært utført arbeid/ kontroll
salgsoppgaven. på vann/ avløp?
Ja, kun av faglært. Staking av tett avløp 2025. Arbeid
Gjenstander som er nevnt i standardlisten, men som ikke utført av Tanga rør AS.
finnes på eiendommen, vil heller ikke følge med i salget.
Alt utstyr og installasjoner som medfølger overtas slik de Kjenner du til om det er/ har vært utført arbeid på
er, uten garanti,

---

[d083_d083 | Side [1]]
De andre seksjonseierne har lovbestemt panterett i seksjonen for krav mot seksjonseieren
som følger av sameieforholdet, jf. eierseksjonslovens § 31. Pantekravet kan ikke overstige et
beløp som for hver bruksenhet svarer til to ganger folketrygdens grunnbeløp på det
tidspunktet tvangsdekning besluttes gjennomført. Panteretten omfatter også krav som skulle
ha vært betalt etter at det er kommet inn en begjæring til namsmyndighetene om
tvangsdekning.
6-4 Seksjonseierens heftelse for sameiets ansvar og

---

[d083_d083 | Side [1]]
 få
bruk for det senere, f.eks ved salg
av boligen.
143

## Side

---

[d083_d083 | Side [1]]
eiendommen og ut til
Kontrakts‑
det kommunale nettet er private, og
vedlikeholdsansvaret for disse påhviler sameiet.
grunnlag
Adkomst til eiendommen skjer via offentlig vei.
Overtakelse
Utleie
Tidspunkt for overtakelse avtales mellom kjøper og
Adgang til utleie: Boligen kan leies ut i henhold til selger.
gjeldende lovverk. Korttidsutleie av hele boligseksjonen i
mer enn 90 døgn årlig er ikke tillatt. Med korttidsutleie
Forsikring
menes utleie i inntil 30 døgn sammenhengende.
Boligselgerforsikring: Selger

---

[d083_d083 | Side [1]]
ligen, følger Slik normal bruksslitasje og behov for vedlikehold må
normalt med i handelen, med mindre det foreligger en kjøper påregne, og dette vil normalt ikke gi grunnlag for
særskilt avtale mellom partene om noe annet, jf. reklamasjon eller prisavslag.
avhendingsloven § 3‑5.
Avtalerettslig
En standard tilbehørsliste utarbeidet av Norges Partenes rettigheter og plikter reguleres av avtalen
Eiendomsmeglerforbund (NEF) følger salgsoppgaven, og mellom partene, og all tilgjengelig dokumentasjon som
gjelder

---

[d083_d083 | Side [1]]
e.
Oppdragsnr.: 15467-2966 Befaringsdato: 05.02.2026 Side: 15 av 16
75

## Side 76

Bertrand Narvesens vei 1, 0661 OSLO Takstmann Jan Berby MNTF
Gnr 128 - Bnr 5 Pb. 80 Tåsen
0301 OSLO 0801 OSLO
Tilstandsrapportens avgrensninger
betydning for om arealet måles og oppgis i 琀椀lstandsrapporten. Når arealet
måles tas det ikke hensyn 琀椀l om arealet er lovlig oppført eller om bruken er
lovlig, bruksendringer, lysforhold eller andre sikkerhetsmangler.
UTTRYKK OG DEFINISJONER • Eiendommens markedsverdi kan ikke

---

[d083_d083 | Side [1]]
琀. Gjennomgå琀琀 Nei
Opplysninger vedrørende hjemmel,
gårdsnummer, bruksnummer,
seksjonsnummer, eiendomsbetegnelser,
Norges Eiendommer Gjennomgå琀琀 Nei
eiet/festet tomt, tomteareal og byggeår
oppgi琀琀 ved elektronisk grunnbok, Norges
Eiendommer.
Tegninger Gjennomgå琀琀 Nei
Revisjoner
Versjon Ny versjon Kommentar
1 20.02.2026
For gyldighet på rapporten se forside
Oppdragsnr.: 15467-2966 Befaringsdato: 05.02.2026 Side: 14 av 16
74

## Side 75

Bertrand Narvesens vei 1, 0661 OSLO Takstmann Jan Berby MNTF
Gnr 128 -

---

[d083_d083 | Side [1]]
. Begrunnelsen er at
seksjonseiere som har innfridd sin andel av fellesgjelden fortsatt er ansvarlig for selskapets
lån. Virkningen i overgangsåret er at " langsiktig fordring" er overført til egenkapitalen og
prinsippendringen er omtalt i noten.
Vedlegg 1 20 av 38 Årsregnskap 2024.pdf
Transaction 09222115557540746751 Signed MMR, TKF, MNO, MH, HVS
125

## Side 126

NOTE: 2
INNKREVDE FELLESKOSTNADER
Felleskostnader 7 233 180
Internett 356 796
Garasje 306 000
Vedlikeholdsfond 299 988
Dugnadsgebyr 112

---

[d083_d083 | Side [1]]
Graden kan også
brukes når delen er ny, men der dokumentasjon på faglig god u琀昀ørelse mangler.
TILSTANDSGRAD 2, TG2: VESENTLIGE AVVIK OG MINDRE AVVIK SOM ETTER NS 3600 GIR TG 2
Bygningsdelen skal enten ha feil u琀昀ørelse, en skade eller symptomer på skade, sterk slitasje eller nedsa琀琀
funksjon. Graden gis når bygningsdelen trenger vedlikehold eller 琀椀ltak i nær frem琀椀d. Graden skal også brukes
når delen er gammel og det er grunn 琀椀l å varsle om faren for skader på grunn av alderen, eller når det er

---

[d083_d083 | Side [1]]
Tilstandsgrad 2, TG2:Vesentlige avvik, og mindre avvik som e琀琀er NS
3600 gir TG 2, men som ikke nødvendigvis krever umiddelbare 琀椀ltak.
Konstruksjonen har normalt enten feil u琀昀ørelse, en skade eller symptomer
på skade, sterk slitasje eller nedsa琀琀 funksjon. Vedlikehold eller 琀椀ltak trengs
i nær frem琀椀d, det er grunn 琀椀l å varsle fare for skader på grunn av alder eller
overvåke spesielt på grunn av fare for større skade eller følgeskade. For
TILLEGGSUNDERSØKELSER
skjulte konstruksjoner vil alder i seg selv

---

[d083_d083 | Side [1]]
ordan det var vanlig å bygge og regler som gjaldt da
boligen ble oppført (søknads琀椀dspunktet). Forhold som er vanlige for bygningens alder, slik som slitasje
e琀琀er normal bruk regnes ikke som avvik.
Hva inneholder 琀椀lstandsrapporten?
Den bygningssakkyndige undersøker rom og bygningsdeler slik det kommer frem av Forskri昀琀 琀椀l
avhendingsloven. Tilstandsrapporten inneholder bare avvik som den bygningssakkyndige kan se eller
kontrollere med enkle hjelpemidler. Det gjøres ikke nærmere undersøkelser slik som

---

[d083_d083 | Side [1]]
 i den tekniske beskrivelsen i rapporten.
Leiligheten ble pusset opp i 2022/23 med ny kjøkkeninnredning
og oppussing av over昀氀ater i oppholdsrom. To originale baderom
hvor noe sanitærutstyr er oppgradert. Tilstandsanalysen har ikke
avdekket noen tydelige symptomer på svikt og avvik fra normal
standard. Det er gjennomgående registrert TG1 bortse琀琀 fra en
TG2 pga alder på membraner.
Eiet seksjon i boligbygg med 昀氀ere boenheter - Byggeår:
2008
VÅTROM Gå 琀椀l side
To plassbygde baderom fra byggeår med 昀氀islagte

---

[d083_d083 | Side [1]]
sluk, te琀琀esjikt og fall på bad og vaskerom, forhold som
gjelder sikkerhet mot brann, rekkverk, trapper osv.
Tilstandsrapporten beskriver ikke hele boligen
BYGNINGSSAKKYNDIGE SER FOR EKSEMPEL IKKE PÅ
• vanlig slitasje og normal vedlikeholds琀椀lstand • bagatellmessige forhold som ikke påvirker bygningens bruk eller verdi vesentlig • etasjeskillere •
琀椀lleggsbygg slik som garasje, bod, anneks, naust også videre • utvendige trapper • stø琀琀emurer • skjulte installasjoner • installasjoner utenfor
bygningen •

---

[d083_d083 | Side [1]]
: 15467-2966 Befaringsdato: 05.02.2026 Side: 7 av 16
67

## Side 68

Bertrand Narvesens vei 1, 0661 OSLO Takstmann Jan Berby MNTF
Gnr 128 - Bnr 5 Pb. 80 Tåsen
0301 OSLO 0801 OSLO
Tilstandsrapport
Smøremembran på vegg som er over 15 år og banemembran over 20 år Årstall: 2008
blir vurdert 琀椀l TG2 i rapporten.
De琀琀e badet er nå snart 20 år gammelt. 3. ETASJE > BAD
TG 2 gis med bakgrunn i at mer enn halvparten av forventet bruks琀椀d for
membran/te琀琀esjikt er oppbrukt. Over昀氀ater vegger og

---

[d083_d083 | Side [1]]
alder og normal bruk slik: • Kontroll av romfunksjoner for P-ROM u琀昀øres kun når det ikke foreligger
godkjente og byggemeldte tegninger, eller når tegninger ikke stemmer med
i)Tilstandsgrad 0, TG0:Ingen avvik eller skader. I 琀椀llegg må bygningsdelen dagens bruk.
være 琀椀lnærmet ny, mindre enn 5 år, og det foreligger dokumentasjon på
faglig god u琀昀ørelse. • Bygningssakkyndig gir en forenklet vurdering av branntekniske forhold og
elektriske installasjoner i boligen dersom det er mer enn fem år siden

---

[d083_d083 | Side [1]]
 regne med trenger utbedring straks eller innen kort
琀椀d. Påvist funksjonssvikt eller sammenbrudd. Avvik under TG3 skal gis
sjablongmessig anslag.
BEFARINGEN
v)Tilstandsgrad TGiU:Ikke undersøkt/ikke 琀椀lgjengelig for undersøkelse. Rapporten gir en vurdering av byggverk og bygningsdeler som
bygningssakkyndig har observert, og som fremkommer av Forskri昀琀 琀椀l
• Ved TG0 og TG1 gis det normalt ingen begrunnelse for valg av avhendingsloven. Rapporten er likevel ingen garan琀椀 for at det ikke kan
琀椀lstandsgrad,

---

[d083_d083 | Side [1]]
rten er likevel ingen garan琀椀 for at det ikke kan
琀椀lstandsgrad, fordi bygningen eller bygningsdelen da bare har normal 昀椀nnes skjulte feil, skader og mangler. NS 3600:2018 (Teknisk
slitasje. For anbefalte 琀椀ltak ved TG2 og TG3 må bruker av rapporten 琀椀lstandsanalyse ved omsetning av bolig) har undersøkelsesnivå fra 1 琀椀l 3,
vurdere om 琀椀ltakene er nødvendige og lønnsomme. Hva det vil koste å der undersøkelsesnivå 1 er det laveste og baseres på visuell observasjon.
utbedre rom eller bygningsdeler er et

---

[d083_d083 | Side [1]]
asje, underetasje og sokkeletasje)
琀椀lstand som er dårligere enn referansenivået. Rapporten framhever eller andre bygningsdeler skjer e琀琀er eiers aksept. Hulltaking av våtrom og
normalt ikke posi琀椀ve sider ved boligen ut over det som fremgår av rom under terreng kan unntaksvis unnlates, se Forskri昀琀 琀椀l
琀椀lstandsgradene. Avhendingsloven.
• Tilstanden angis i rapporten og gir u琀琀rykk for en gi琀琀 forventet 琀椀lstand
blant annet vurdert ut fra alder og normal bruk slik: • Kontroll av romfunksjoner for P-ROM

---

[d083_d083 | Side [1]]
ssakkyndige normalt ingen begrunnelse for valg av 琀椀lstandsgrad. Grunnen er at bygningen eller bygningsdelen da bare har
normal slitasje. Ved skjulte konstruksjoner kan alder alene avgjøre 琀椀lstandsgrad. Når bygningssakkyndige anbefaler 琀椀ltak, for eksempel
utbedringer, må brukeren av rapporten vurdere om 琀椀ltakene er nødvendige og lønnsomme.
Når den bygningssakkyndige velger 琀椀lstandsgrad, baseres vurderingen på faste kriterier som følger av gjeldende bransjestandard for Teknisk
琀椀lstandsanalyse ved

---

[d083_d083 | Side [1]]
ILLEGGSUNDERSØKELSER
skjulte konstruksjoner vil alder i seg selv være et symptom som kan gi TG2.
For synlige konstruksjoner kan alder sammen med andre symptomer og
momenter gi TG2. Avvik under TG2 kan gis sjablongmessig anslag. E琀琀er avtale kan 琀椀lstandsanalysen utvides 琀椀l også å omfa琀琀e
琀椀lleggsundersøkelser utover minimumskravet i forskri昀琀en.
iv)Tilstandsgrad 3, TG3:Store eller alvorlige avvik. Kra昀琀ige symptomer på
forhold som man må regne med trenger utbedring straks eller innen kort
琀椀d. Påvist

---

[d083_d083 | Side [1]]
nr 5 Pb. 80 Tåsen
0301 OSLO 0801 OSLO
De琀琀e trenger du å vite om 琀椀lstandsrapporten
Hva er en 琀椀lstandsrapport?
En 琀椀lstandsrapport beskriver synlige skader/avvik eller tegn på skader/avvik på boligen. Rapporten
fremhever vanligvis ikke posi琀椀ve egenskaper ved boligen.
Hva vurderer en bygningssakkyndig?
Den bygningssakkyndige vurderer boligen ut fra hva man kan forvente av en bygning av samme alder
og type. Vurderingen gjøres som regel mot hvordan det var vanlig å bygge og regler som gjaldt da
boligen ble

---

[d083_d083 | Side [1]]
iske installasjoner i boligen dersom det er mer enn fem år siden sist
ii)Tilstandsgrad 1, TG1:Mindre avvik. Normal slitasje. Straks琀椀ltak ikke boligen hadde el-琀椀lsyn. Bygningssakkyndig kan anbefale å konsultere
nødvendig. TG1 kan gis når bygningsdelen er 琀椀lnærmet ny og det ikke o昀昀entlige myndigheter eller kvali昀椀sert elektrofaglig fagperson ved behov
foreligger dokumentasjon på faglig god u琀昀ørelse. for grundigere undersøkelser.
iii)Tilstandsgrad 2, TG2:Vesentlige avvik, og mindre avvik som e琀琀er

---

[d083_d083 | Side [1]]
er av gjeldende bransjestandard for Teknisk
琀椀lstandsanalyse ved omsetning av bolig og Forskri昀琀 琀椀l avhendingslova.
TILSTANDSGRAD 0, TG0: INGEN AVVIK
Bygningsdelen skal være 琀椀lnærmet ny, ikke vise tegn på slitasje og det skal være lagt frem dokumentasjon på
faglig god u琀昀ørelse. Det er ingen merknader 琀椀l delen.
TILSTANDSGRAD 1, TG1: MINDRE AVVIK
Bygningsdelen skal bare ha normal slitasje, og straks琀椀ltak skal ikke anses som nødvendig. Graden kan også
brukes når delen er ny, men der dokumentasjon på

---

[d083_d083 | Side [1]]
: 15467-2966 Befaringsdato: 05.02.2026 Side: 3 av 16
63

## Side 64

Bertrand Narvesens vei 1, 0661 OSLO Takstmann Jan Berby MNTF
Gnr 128 - Bnr 5 Pb. 80 Tåsen
0301 OSLO 0801 OSLO
De琀琀e trenger du å vite om 琀椀lstandsrapporten
Tilstanden vurderes med ulike 琀椀lstandsgrader
Tilstanden gir u琀琀rykk for en gi琀琀 forventet 琀椀lstand, blant annet vurdert ut fra alder og normal bruk. Ved Tilstandsgrad 0 (TG0) og Tilstandsgrad 1
(TG1) gir den bygningssakkyndige normalt ingen begrunnelse for valg av 琀椀lstandsgrad.

---

[d083_d083 | Side [1]]
varsle om faren for skader på grunn av alderen, eller når det er grunn
琀椀l å overvåke delen spesielt på grunn av fare for større skader eller følgeskader.
TILSTANDSGRAD 3, TG3: STORE ELLER ALVORLIGE AVVIK
Denne 琀椀lstandsgraden brukes ved kra昀琀ige tegn på forhold som man må regne med trenger utbedring straks
eller innen kort 琀椀d. Det er påvist funksjonssvikt eller sammenbrudd.
IKKE UNDERSØKT/IKKE TILGJENGELIG FOR UNDERSØKELSE
Det kan være avvik/skader som ikke er avdekket.
Informasjon om utbedringskostnader

---

[d083_d083 | Side [1]]
indelse med salget er det blitt utført en
tilstandsrapport av en bygningssakkyndig, som gir en
informasjon
teknisk gjennomgang av boligen og påpeker eventuelle
avvik. Rapporten, sammen med selgers egenerklæring,
Adresse
er vedlagt salgsoppgaven. Det er viktig at interessenter
grundig gjennomgår disse dokumentene før bud legges Bertrand Narvesens vei 1, 0661 OSLO
inn.
Gnr. 128, bnr. 5, snr. 136, ideell andel 1/ 1
All informasjon i tilstandsrapporten anses som kjent for i Oslo kommune.
kjøper, og det vil

---

[d083_d083 | Side [1]]
nd Narvesens vei 1, 0661 OSLO Takstmann Jan Berby MNTF
Gnr 128 - Bnr 5 Pb. 80 Tåsen
0301 OSLO 0801 OSLO
Tilstandsrapportens avgrensninger
ii) Forhold rundt brann, rømming, sikkerhet, for eksempel
STRUKTUR•REFERANSENIVÅ•TILSTANDSGRADER rekkverkshøyder/åpninger, ulovlige bruksendringer, brannceller mv.
• Rapporten er basert på innholdskrav i Forskri昀琀 琀椀l avhendingslova • For skjulte konstruksjoner slik som vann og avløp uten dokumentasjon, er
(tryggere bolighandel). Formålet er å gi en 琀椀lstandsanalyse 琀椀l

---

[d083_d083 | Side [1]]
ektene.
(2) Dersom særlige grunner taler for det, kan kostnadene fordeles etter nytten for den
enkelte bruksenhet eller etter forbruk.
(3) Kostnader til fjernvarme og varmtvann til den enkelte bruksenhet betales løpende med
et beløp som avregnes etter målt forbruk.
(4) I tillegg til de vanlige fellesutgiftene skal den enkelte sameier innbetale kr 50 per måned i
dugnadspenger. Beløpet dekker de utgifter sameiet sparer ved å avholde 2 dugnader i året.
Pengene skal tilbakebetales i januar påfølgende år dersom

---

[d083_d083 | Side [1]]
l rehabilitering,
også evt. påkostning, kostnadsføres i perioden arbeidene utføres. Eventuelle verdiøkninger
som følge av tiltakene, tilfaller den enkelte sameier uten at det føres i sameiets balanse.
Siden tiltakene er finansiert gjennom felles låneopptak i sameiet, fremkommer låne-
opptaket som gjeld i balansen og nedbetales gjennom fremtidige felleskostnader.
Ved kjøp og salg av bolig er udekket tap (negativ egenkapital) reflektert gjennom
fellesgjelden på hver enkelt leilighet.
Vedlegg 1 24 av 38

---

[d083_d083 | Side [1]]
# Side 123

EIERSEKSJONSSAMEIET TIEDEMANNSJORDET
ORG.NR. 992 208 015, KUNDENR. 5685
RESULTATREGNSKAP
Note Regnskap Regnskap Budsjett Budsjett
2024 2023 2024 2025
DRIFTSINNTEKTER:
Innkrevde felleskostnader 2 9 525 097 9 566 671 9 554 984 9 555 000
Ladeinntekter EL-bil 172 582 200 361 130 000 130 000
Andre inntekter 3 328 046 2 601 812 75 000 75 000
SUM DRIFTSINNTEKTER 10 025 724 12 368 845 9 759 984 9 760 000
DRIFTSKOSTNADER:
Personalkostnader 4 -45 120 -42 300 -42 300 -42 000
Styrehonorar 5 -320 000 -300

---

[d083_d083 | Side [1]]
56 796
Garasje 306 000
Vedlikeholdsfond 299 988
Dugnadsgebyr 112 200
Dugnad -15 900
KabelTV 65 076
Lånekostnad I (Adm-avtale) 1 165 823
Regulering Lånekostnad I (Adm-avtale) 1 934
SUM INNKREVDE FELLESKOSTNADER 9 525 097
NOTE: 3
ANDRE INNTEKTER
Telenor avregning strøm 114 576
Telenor, leie fasade 2023 og 2024 52 000
Advokatfirma Mettevold 156 825
Diverse 4 538
Opprydding kundereskontro 107
SUM ANDRE INNTEKTER 328 046
NOTE: 4
PERSONALKOSTNADER
Arbeidsgiveravgift -45 120
SUM PERSONALKOSTNADER -45 120
Det har

---

[d083_d083 | Side [1]]
k:
Dugnad 50,00
Omkostninger Internett 159,00
Garasje 150,00
850 (Administrasjonskostnader garasje ) Vedlikeholdsfond 168,00
13 500 (Boligkjøperforsikring* (valgfritt)) Felleskostnader 4 433,31
330 000 (Dokumentavgift) Kabel‑tv (mottakerutstyr) 29,00
545 (Tinglysingsgebyr ‑ hjemmel)
545 (Tinglysningsgebyr ‑ pantedokument) Sameiet har inngått avtale om energiavregning med ISTA
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ Norge AS for avregning av fjernvarme. Jf. vedtektene
331 940 (Omkostninger

---

[d083_d083 | Side [1]]
ned MMR, TKF, MNO, MH, HVS
123

## Side 124

EIERSEKSJONSSAMEIET TIEDEMANNSJORDET
ORG.NR. 992 208 015, KUNDENR. 5685
BALANSE
Note 2024 2023
EIENDELER
OMLØPSMIDLER
Restanser felleskostnader/kundefordringer 43 117 48 532
Forskuddsbetalte kostnader 290 280 281 911
Andre kortsiktige fordringer 14 130 975 65 847
Driftskonto OBOS-banken 553 841 1 320 176
Sparekonto OBOS-banken 575 259 613 785
Sparekonto OBOS-banken II 3 842 880 3 256 567
SUM OMLØPSMIDLER 5 436 352 5 586 818
SUM EIENDELER 5 436 352 5 586

---

[d083_d083 | Side [1]]
 EL-bil -158 430 0 0 -100 000
Kostnader underutvalg -104 228 -18 340 -70 000 -70 000
Energi/fyring 10 -762 673 -768 387 -800 000 -600 000
TV-anlegg/bredbånd -427 347 -581 529 -500 000 -520 000
Andre driftskostnader 11 -745 015 -644 580 -764 000 -803 000
SUM DRIFTSKOSTNADER -8 264 362 -7 878 545 -8 351 300 -8 792 000
DRIFTSRESULTAT FØR IN/ADM.AVT: 1 761 362 4 490 300 1 408 684 968 000
Innbetalt andel fellesgjeld 422 097 1 241 673 0 0
DRIFTSRESULTAT 2 183 459 5 731 973 1 408 684 968

---

[d083_d083 | Side [1]]
ingsordning
omgivelser.
Ikke tilknyttet sikringsordning. Sameiet har legalpant som
sikkerhet for betaling av felleskostnader. Dagligvarehandelen er godt ivaretatt med blant annet
Rema 1000 og Kiwi i Hovinveien, samt Coop Mega på
Hasle Torg. På Ensjø finner du også flere alternativer som
Andre kostnader:
Rema 1000, Kiwi og Spar. Hasle Torg kjøpesenter ligger
Andre utgifter: I tillegg til felleskostnader påløper det kun få minutters gange unna, med tilbud som
kostnader knyttet til strøm, innboforsikring,

---

[d083_d083 | Side [1]]
60% av årlig energibehov, mens
blant annet tømme søppeldunker på fellesarealet, fjerne resterende effekt må dekkes med elektrisitet (dvs. ikke
hensatt skrot, sjekke VVS anlegg, inspeksjon av fjernvarme). Totalkostnad for boring, installasjon av
hovedtavle m.m. varmepumper, røranlegg, automasjon, måling og
tilpasning til eksisterende systemer, inkludert
Bydelshus prosjektledelse, usikkerhet og mva, er anslått til å ligge i
Sameiet har avtale med Petersborghuset som gjør at området 14‑16 millioner kroner.

---

[d083_d083 | Side [1]]
 Forkjøpsrett: Praktiseres ikke forkjøpsrett.
usikkerhet og mva, anslås totalkostnaden å være i
størrelsesorden 2,5‑3,0 millioner kroner. Det kan bli Styregodkjennelse: Praktiseres ikke styregodkjenning.
aktuelt å søke støtte til selve tiltaket dersom slike
ordninger åpnes. Videre ble saken igjen tatt opp på Regnskap/ budsjett/ kostnadsøkninger: Regnskapet for
årsmøtet i 2025 hvor følgende ble vedtatt: Styret foreslår 2024 viser et overskudd på 1 377 983,‑.
derfor at årsmøtet tar saken til orientering, og

---

[d083_d083 | Side [1]]
r 4 -45 120 -42 300 -42 300 -42 000
Styrehonorar 5 -320 000 -300 000 -320 000 -320 000
Revisjonshonorar 6 -15 120 -20 295 -22 000 -23 000
Forretningsførerhonorar -252 885 -240 490 -254 000 -267 000
Konsulenthonorar 7 -345 522 -292 697 -140 000 -140 000
Drift og vedlikehold 8 -2 242 232 -2 524 533 -2 635 000 -2 720 000
Forsikringer -519 606 -446 468 -491 000 -589 000
Kommunale avgifter 9 -2 326 184 -1 998 924 -2 313 000 -2 598 000
Ladekostnader EL-bil -158 430 0 0 -100 000
Kostnader underutvalg -104 228 -18

---

[d083_d083 | Side [1]]
, som følge av årsmøtevedtak i 2023, vurdert
Sameiet har inngått samarbeid med Lille Tøyen Hageby muligheten for å bytte ut dagens fjernvarme med et
og driftsleder og vaktmester der. Vår faste vaktmester bergvarmeanlegg. Også her er det innhentet støtte fra
besøker nå sameiet flere ganger ukentlig. Vaktmesteren Enova til energikartlegging. Bergvarmeanlegget er
følger en fast instruks på hva som skal gjøres hver uke, planlagt å dekke ca. 40–60% av årlig energibehov, mens
blant annet tømme søppeldunker på

---

[d083_d083 | Side [1]]
åte, bore琀琀slaget/sameiet og de琀琀e kan påvirke boligens BRA. Vær oppmerksom
sopp og skadedyr. på at NS 3940:2023 og eierseksjonsloven har ulik de昀椀nisjon av fellesareal.
Ved arealmåling gjelder NS 3940:2023 som de昀椀nerer fellesareal slik: “Delen
• Fuktsøk: Over昀氀atesøk med egnet søkeutstyr (fuk琀椀ndikator) eller visuelle av bygning som brukes av to eller 昀氀ere bruksenheter eller 琀椀l bygningens
observasjoner. forvaltning, dri昀琀 eller vedlikehold.
• Fuktmåling: Måling av fuk琀椀nnhold i materiale eller i

---

[d083_d083 | Side [1]]
o beløp som fastsettes
på årsmøtet, eller av styret, for å dekke sin andel av felleskostnadene.
(2) Akontobeløpet kan også dekke avsetning av midler til fremtidig vedlikehold,
påkostninger eller andre fellestiltak på eiendommen dersom årsmøtet har vedtatt slik
avsetning. Midlene skal settes på egen bankkonto. Avsetning til vedlikehold er en
felleskostnad og innbetalingene skal følge sameiebrøk.
6-3 Panterett for seksjonseiernes forpliktelse
De andre seksjonseierne har lovbestemt panterett i seksjonen for

---

[d083_d083 | Side [1]]
e grunner, eller på grunn av økt hærverk er behov for supplering kan
styret beslutte utvidelse innenfor sine fullmakter. Større utvidelser utover disse rammene
må godkjennes av årsmøtet. Drift av anlegget belastes driftsbudsjett. Opptak kan ikke
utleveres til den enkelte beboer.
11-3 Avtale om individuell innfrielse av fellesgjeld
Eierseksjonssameiet har vedtatt en ordning for innfrielse av andel fellesgjeld knyttet til
bestemte lån. Denne ordningen er betinget av at det er signert en

---

[d083_d083 | Side [1]]
kehold fyringsanlegg -43 830
Drift/vedlikehold brannsikring -251 370
Drift/vedlikehold ventilasjonsanlegg -306 984
Drift/vedlikehold garasjeanlegg -144 031
Kostnader dugnader -4 882
SUM DRIFT OG VEDLIKEHOLD -2 242 232
NOTE: 9
KOMMUNALE AVGIFTER
Vann- og avløpsavgift -1 462 686
Renovasjonsavgift -863 498
SUM KOMMUNALE AVGIFTER -2 326 184
NOTE: 10
ENERGI/FYRING
Sum annet enn energi
Elektrisk energi -322 625
Andre fyringskostnader -440 048
SUM ENERGI / FYRING -762 673
NOTE: 11
ANDRE DRIFTSKOSTNADER
Container

---

[d083_d083 | Side [1]]
nvarme 869 404
SUM KOSTNADER 863 188
Uoppgjorte avregninger -841 518
SUM ENERGIAVREGNING -874 239
Oppstillingen ovenfor viser hvilke energikostnader som avregnes etter hver enkelts forbruk.
For å dekke de løpende kostnadene, krever selskapet inn et forskuddsbeløp fra hver enkelt.
På fastsatte frister, blir deretter inntektene avregnet mot kostnadene. For lite innbetalt blir
krevd inn, og for mye innbetalt blir tilbakebetalt. På den måten betaler hver enkelt kun for
sitt eget forbruk.
Ettersom disse

---

[d083_d083 | Side [1]]
eten for Sameiets forsikringsselskap: Tryg Forsikring
å etablere solcelleanlegg på sameiets to hovedtak, med
mål om å redusere fellesstrømsforbruket. Det er Polisenummer fellesforsikring: 7881285
identifisert plass til et anlegg på opptil 121 kWp, som kan
produsere mellom 88000 og 155000 kWh per år. Basert Husdyr: Må søkes styret.
på innhentede priser, inkludert teknisk installasjon,
integrert fallsikring, elektroarbeider, prosjektledelse, Forkjøpsrett: Praktiseres ikke forkjøpsrett.
usikkerhet og mva,

---

[d083_d083 | Side [1]]
NERGI / FYRING -762 673
NOTE: 11
ANDRE DRIFTSKOSTNADER
Container -35 271
Skadedyrarbeid/soppkontroll -50 785
Annet driftsmateriale -1 090
Lyspærer og sikringer -2 175
Vaktmestertjenester -192 835
Renhold ved firmaer -234 896
Snørydding -34 186
Gressklipping -13 766
Andre fremmede tjenester -87 590
Kontor- og datarekvisita -12 084
Andre kostnader tillitsvalgte -4 100
Andre kontorkostnader -63 749
Telefon u/mva -428
Bank- og kortgebyr -5 822
Øreavrunding -24
Velferdskostnader -6 018
Tap på fordringer,

---

[d083_d083 | Side [1]]
 Småbåthavn, eksisterende
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
H820_1 - Omforming (kabling og høystentledninger)
H820_2 -

---

[d083_d083 | Side [1]]
/ ensjoskolene/
Oppvarming
Grenseveien 73, 91 og 95 ‑ Regulering til barneskole,
Leiligheten er oppvarmet med radiatorer via sentral barnehage og park ‑ Saksnr. 202118619
fjernvarme. I tillegg varmekabler på badene. Tiltaket vil bidra til en grønnere bydel med ny park og
omgjøring av industribebyggelse til skole og barnehage
med utearealer med høy kvalitet.
Regulerings og arealplaner
Eiendommen er regulert til bolig med tilhørende anlegg Informasjon om plankunngjøring for Vestre bekkedrag/
iht. S‑4157.

---

[d083_d083 | Side [1]]
rt/?mode=kommuneplan
Målestokk 1:3000
Koordinatsystem: EUREF89 - UTM sone 32 Blå ramme viser utsnittet for de øvrige plottene.
PlottID/Best.nr: 149909/86522470
Deres ref.: Reguleringsplaner vedtatt etter 17.09.2014 og til 23.09.2015 vil gjelde foran kommuneplanen ved motstrid.
Reguleringsplaner vedtatt etter kommuneplanen vil gjelde foran kommuneplanen ved motstrid.
Se tegnforklaring på eget ark.
154

## Side 155

Tegnforklaring - kommuneplan
Farled Bebyggelse og anlegg, eksisterende
Fjernveg (tunnel)

---

[d083_d083 | Side [1]]
vedhensikten med planen er å etablere et eget anlegg påvirket av bekkeåpningen. Reguleringen følger opp
for syklende og legge bedre til rette for gående. VPOR Ensjø, men avviker formelt fra arealbruksformål
48

## Side 49

OM EIENDOMMEN
«byggeområde» fastsatt i kommuneplanen for Oslo.
Diverse
Les dokumentet med planen Det informeres om at ingen kan eie mer enn to
https:/ / innsyn.pbe.oslo.kommune.no/ saksinnsyn/ boligseksjoner i sameiet, i henhold til eierseksjonsloven

---

[d083_d083 | Side [1]]
leringskart
Opprinnelig reguleringsplan gir rammer for høyder på planlagt
bebyggelse ut fra terrenghøydene slik de var da
reguleringsplanen ble vedtatt. Det nye sammenstilte
Dato: 17.11.2025 – Kartutsnittet gjelder vertikalnivå 2 (dvs. på bakkenivå). reguleringsplankartet viser dagens terreng- og tomtesituasjon.
– Gjeldende kommunedelplaner: KDP-17 Planens originale vedtakskart er tilgjengelig i Saksinnsyn.
Bruker: FME
– Naturmangfold innenfor kartutsnittet. Se eget kart.
Målestokk 1:1000 – Kartet er

---

[d083_d083 | Side [1]]
Tøyen Hageby og Hasle i
nærområdet. Området er i stor utvikling. Kort vei 琀椀l o昀昀entlige kommunikasjonsmidler, skoler og forretninger.
Adkomstvei
O昀昀entlig. Private interne småveier mellom bebyggelse.
Tilknytning vann
Eiendommen er 琀椀lkny琀琀et o昀昀entlig vannforsyning.
Tilknytning avløp
Eiendommen er 琀椀lkny琀琀et o昀昀entlig avløpsne琀琀.
Om tomten
Opparbeidet fellesarealer med gressplener, beplantning, lekeplass og asfalterte gangveier.
Parkering
Seksjonen har en 琀椀lhørende parkeringsplass, nummer 177, med el-bil

---

[d083_d083 | Side [1]]
FORKLARING - REGULERING (for gjeldende kartutsnitt)
153

## Side 154

0014466
0083466
0053466
6644100
6643800
6643500
599700 600000 600300
599700 600000 600300
© Plan- og bygningsetaten, Oslo kommune
Kommuneplanen 2015–2030
Vedtatt av bystyret 23.09.2015, sak 262
Dato: 17.11.2025 Kartet viser utsnitt av «Plankart 1-2 Arealbruk» og «Plankart 2-2 Hensynssoner». For øvrige juridisk bindende
kart, se Planinnsyn - https://od2.pbe.oslo.kommune.no/kart/?mode=kommuneplan
Målestokk 1:3000
Koordinatsystem: EUREF89 -

---

[d083_d083 | Side [1]]
nenfor kartutsnittet. Se eget kart.
Målestokk 1:1000 – Kartet er sammenstilt for: . Kan ikke brukes til byggesak. Se tegnforklaring på eget ark
Ekvidistanse 1m
Koord.system: EUREF89 - UTM sone 32 PlottID/Best.nr: 149909/ 86522470 Deres ref.:
Høydereferanser Adresse: Bertrand Narvesens vei 1
- Reguleringsplan: Se reg.best. Kommentar:
- Bakgrunnskart: NN2000
Originalformat: A3 Gnr/Bnr: 128/5
152

## Side 153

TEGNFORKLARING - REGULERING (for gjeldende kartutsnitt)
153

## Side

---

[d083_d083 | Side [1]]
plan
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
Jernbane, eksisterende Spredt

---

[d083_d083 | Side [1]]
gging
H820_1 - Omforming (kabling og høystentledninger)
H820_2 - Omforming (trafostasjoner)
H110 - Nedlagsfelt drikkevann
H190 - Andre sikringssoner
H310_1 - Kvikkleire
H310_2 - Steinsprang
H320_1 - Stormflo
H320_2 - Elveflom
H390 - Deponi
155

## Side 156

ØVRIGE VEDLEGG

## Side 157

Nabolagsprofil
Bertrand Narvesens vei 1 - Nabolaget Lille Tøyen/Keyserløkka/Hasle - vurdert av 298 lokalkjente
Nabolaget spesielt anbefalt for
Opplevd trygghet
Familier med barn Veldig trygt 87/100
Etablerere
Kvalitet på

---

[d083_d083 | Side [1]]
nformasjon om plankunngjøring for Vestre bekkedrag/
iht. S‑4157. Hovinbekken
Eiendoms‑ og byfornyelsesetaten i Oslo kommune,
Det gjøres oppmerksom på at området er under utvikling ønsker å omregulere Gladengveien 18 mfl. fra industri til
og at endringer og oppføring av nye bygg vil kunne skje. grønnstruktur. Hensikten med planarbeidet er å legge til
Det anbefales spesielt å følge med på de planer og rette for gjenåpning av resterende del av hovedløpet for
prosesser som pågår for området via Oslo kommune,

---

[d083_d083 | Side [1]]
 eksisterende LNF-areal, fremtidig
Jernbane, eksisterende Spredt boligbebyggelse, eksisterende
Turvei Spredt boligbebyggelse, fremtidig
Ny T-bane-/jernbanestasjon (ikke juridisk) Spredt fritidsbebyggelse, eksisterende
T-banestasjon (ikke juridisk) Spredt fritidsbebyggelse, fremtidig
Jernbanestasjon (ikke juridisk) Bruk og vern av sjø og vassdrag med tilhørende strandsone
Banetrase (ikke juridisk) Farled
Fjordtrikk (ikke juridisk) Småbåthavn, eksisterende
Samferdsel (ikke juridisk) Småbåthavn,

---

[d083_d083 | Side [1]]
ss Ensjø 10 min
Flerfamilier
Boligmasse
0% 47%
1% enebolig
Lille Tøyen/Keyserløkka/Hasle
3% rekkehus
Oslo og omegn
95% blokk
Norge
1% annet
Sivilstand
Norge
Gift 24% 33%
«Fantastisk sted å bo med
Ikke gift 67% 54%
barn!»
Separert 7% 9%
Sitat fra en lokalkjent
Enke/Enkemann 1% 4%
Innholdet i nabolagsprofilen er hentet fra ulike datakilder, og feil eller mangler kan forekomme. Vurderinger og sitater er innhentet på web og gir uttrykk for
hvordan naboene vurderer nabolaget. FINN.no AS kan ikke holdes

---

[d083_d083 | Side [1]]
hovedløpet for
prosesser som pågår for området via Oslo kommune, Hovinbekken på Ensjø i tråd med traseen i Veiledende
Plan‑ og bygningsetaten. prinsipplan for offentlige rom (VPOR Ensjø).
Pågående plansaker i området: Bekkeåpningen vil berøre deler av eiendommene
Grenseveien mellom Økernveien og Grensesvingen ‑ Gladengveien 18 og 16. Dagens bruk på eiendommene
Saksnr. 202460006 forutsettes videreført, men driftsmulighetene kan bli
Hovedhensikten med planen er å etablere et eget anlegg påvirket av

---

[d083_d083 | Side [1]]
tørre total
Vedtekter/ husordensregler
bredde enn i dag.
Vedlagt salgsoppgaven.
Ensjøskolene
Ensjø skal få ny barneskole og ny ungdomsskole. Det har
Energimerke
vært stor boligbygging i Ensjø‑området de siste årene, og
Energikarakter: E det er forventet høy elevtallsvekst fremover. Den nye
ungdomsskole planlegges med åtte paralleller (U8) for
Energifarge: Grønn 720 elever med flerbrukshall, lokaler for kulturformål og
en spesialavdeling for inntil 16 elever. Det legges til rette
for meråpne lokaler i

---

[d083_d083 | Side [1]]
het
Familier med barn Veldig trygt 87/100
Etablerere
Kvalitet på skolene
Godt voksne
Veldig bra 85/100
Naboskapet
Offentlig transport Godt vennskap 75/100
Gladengveien 6 min
Linje 5N, FB5A, 21, 126 0.5 km
Aldersfordeling
Tøyen stasjon 10 min
Linje RE30, R31 0.8 km
Hasle 10 min
Linje 5 0.8 km
Carl Berners plass 17 min
T-bane, buss, trikk 1.4 km
Carl Berners plass 18 min
Linje 17 1.5 km
Skoler
Hasle skole (1-7 kl.) 5 min
757 elever, 40 klasser 0.4 km
Teglverket skole (1-10 kl.) 11 min
738 elever, 53 klasser

---

[d083_d083 | Side [1]]
værende eller tidligere
seksjonseier har montert, slik som nevnt i (5) 2. avsnitt, må ved rehabilitering og andre felles
tiltak på eiendommen, belastes den seksjon installasjonen tilhører. Styret/årsmøtet avgjør
om remontering skal tillates.
2
89

## Side 90

(8) Forandringer som skjer i strid med de til enhver tid gjeldende bygningsforskrifter og andre
offentlige bestemmelser er ikke tillatt.
3-2 Ordensregler
(1) Årsmøtet kan fastsette vanlige ordensregler for eiendommen.
4. Sameiets parkeringsplasser
4-1

---

[d083_d083 | Side [1]]
10727.5 m²
kort vei til både Ensjø og Hasle T‑banestasjoner. Fra Ensjø
går linje 1, 2, 3 og 4, med reisetid til sentrum på rundt fem Opparbeidet fellesarealer med gressplener, beplantning,
minutter. Hasle betjenes av linje 5. I tillegg er Tøyen lekeplass og asfalterte gangveier.
togstasjon på Gjøvikbanen et flott utgangspunkt for både
byturer og utflukter i marka.
Beskrivelse av
Kulturlivet i området er rikt, med blant annet Kanonhallen
eiendommen
kulturhus som byr på konserter og arrangementer
gjennom

---

[d083_d083 | Side [1]]
gger tilstandsrapport i henhold til Forskrift til avhendingslova (tryggere
bolighandel).
Forsikringsselskapet kan ved skriftlig samtykke akseptere tegning av forsikring også i ovennevnte tilfeller.
Dersom forsikringsselskapet ikke har gitt skriftlig samtykke, kan erstatningen bortfalle.
Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter, begrenset til siste 12 måneder før overtakelse.
Forøvrig oppfordrer selger potensielle kjøpere til å undersøke eiendommen grundig, jf

---

[d083_d083 | Side [1]]
dd i næringsvirksomhet eller mellom ektefeller eller slektninger i rett oppstigende eller nedstigende linje, søsken, eller
mellom personer som bor eller har bodd på boligeiendommen. Gyldig forsikring forutsetter at det for helårs- og fritidsbolig
foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere bolighandel). Forsikringen er ugyldig dersom
den tegnes i strid med forsikringsvilkårene. Jeg er innforstått med at eiendomsmegleren ikke har fullmakt til å gjøre unntak

---

[d083_d083 | Side [1]]
på Forsikringspremien trekkes i oppgjøret.
eiendomskjøp. De står klare til å hjelpe deg i fem år etter
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
− Hvordan: Krysses av i

---

[d083_d083 | Side [1]]
e i inntil 30 døgn sammenhengende.
Boligselgerforsikring: Selger har tegnet
boligselgerforsikring som dekker selgers ansvar etter
Radonmåling
avhendingsloven begrenset oppad kr. 20 000 000,‑.
Selger har ikke utført radonmåling. Det er ikke krav om Egenerklæringsskjema er vedlagt salgsoppgaven og
dette med mindre boligen er helt eller delvis utleid. interessenter oppfordres til å gjennomgå denne før bud
inngis.
Boligkjøperforsikring: Kjøper har anledning til å tegne
boligkjøperforsikring. Vedlagt i

---

[d083_d083 | Side [1]]
g regnskapsførsel.
Regnskapet skal revideres av en revisor valgt av årsmøtet. Revisor tjenestegjør inntil annen
revisor blir valgt.
10-3 Forsikring
(1) Styret er ansvarlig for at eiendommen til enhver tid er forsvarlig forsikret i et godkjent
forsikringsselskap. Forsikringen skal også omfatte huseieransvarsforsikring,
styreansvarsforsikring og rettshjelpsforsikring. Innboforsikring er den enkelte seksjonseier
selv ansvarlig for å tegne.
11
98

## Side 99

(2) Selv om sameiets forsikring brukes, skal styret

---

[d083_d083 | Side [1]]
en er solgt
(budaksept). Premietilbudet som er gitt av megler er bindende for forsikringsgiver i 6 – seks – måneder fra oppdragsinngåelse med megler.
Etter dette vil premien og forsikringsvilkårene kunne justeres. Når premietilbudet ikke lenger er bindende for forsikringsselskapet må
egenerklæringsskjemaet signeres på nytt og eventuelle endringer påføres. Det vil da være forsikringspremien og forsikringsvilkårene på ny
signeringsdato som legges til grunn.
Det kan ikke tegnes boligselgerforsikring ved

---

[d083_d083 | Side [1]]
 utbetalinger eller redusere sitt ansvar helt
eller delvis, jfr. vilkår for boligselgerforsikring punkt 7.1 og forsikringsavtaleloven kapittel 4.
Jeg er orientert om mitt mulige ansvar som selger etter avhendingsloven, eventuelt etter kjøpsloven (aksjeboliger), og om forsikringsgiver sitt
boligselgerforsikringstilbud.
Jeg er klar over at avtale om forsikring er bindende. Jeg er også klar over at premietilbudet først kan påberopes når boligen er solgt
(budaksept). Premietilbudet som er gitt av megler er

---

[d083_d083 | Side [1]]
er du til om det er/ har vært utført arbeid på
er, uten garanti, med mindre det foreligger en gjeldende el‑anlegget eller andre installasjoner (f.eks. oljetank,
garanti fra produsent eller leverandør. sentralfyr, ventilasjon)?
Ja, kun av faglært.
Kjøper aksepterer at det kan forekomme hull og merker Abildsø Elektriske:
etter montering av inventar og utstyr som ikke er en del ‑Opplegg av nye zip spotlight skinne.
av overdragelsen. ‑Ny tilførsel fra tidligere stikk i tak 2021.
Storo Elektro AS:
‑ Skiftet ut

---

[d083_d083 | Side [1]]
ene og informasjonsbrosjyre til selger i
forbindelse med kjøp av boligselgerforsikring. Forsikringen trer i kraft på det tidspunkt det foreligger en budaksept mellom partene,
begrenset til tolv måneder før overtagelse. Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter,
begrenset til siste 12 måneder før overtakelse. Jeg bekrefter med dette at eiendommen ikke er en næringseiendom, at den ikke
selges som ledd i næringsvirksomhet eller mellom ektefeller eller slektninger

---

[d083_d083 | Side [1]]
# Side 160

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
saksbehandlere og jurister som er spesialiserte på Forsikringspremien trekkes i oppgjøret.
eiendomskjøp. De står

---

[d083_d083 | Side [1]]
elkommen!). Det er mange tilbud til bydelens beboere på nytt når markedsforholdene stabiliserer seg og
på Petersborghuset (se facebook: forutsetningene viser at nedbetalingstiden kan bli som
nabolagshusetpetersborg). ønsket (for eksempel innen 9‑12 år). Styret vil da fremme
saken for ny behandling.
Viktig informasjon fra årsmøtet 2025
Forretningsfører: Obos Eiendomsforvaltning
Solcelleanlegg
Det ble på årsmøtet 2023 vedtatt å utrede muligheten for Sameiets forsikringsselskap: Tryg Forsikring
å etablere

---

[d083_d083 | Side [1]]
eiendomsmegler senest ved
kontraktsmøte.
− Hvordan: Krysses av i kjøpekontrakten.
Forsikringsbevis og vilkår sendes per e-post.
Forsikringen er meglet frem av Söderberg & Partners og soderbergpartners.no/eiendom
er plassert hos Gar-Bo Försäkring AB.
*Det tas forbehold om pris- og vilkårsendringer.

## Side

---

[d083_d083 | Side [1]]
er • skjulte installasjoner • installasjoner utenfor
bygningen • full funksjonstes琀椀ng av el- og VVS-installasjoner • geologiske forhold og bygningens plassering på grunnen • bygningens
planløsning • bygningens innredning • løsøre slik som hvitevarer • utendørs svømmebasseng og pumpeanlegg • bygningens este琀椀kk og
arkitektur • bygningens lovlighet (bortse琀琀 fra bruksendringer, brannceller og forhold som åpenbart kan påvirke helse, miljø og sikkerhet) •
fellesarealer (med mindre boligeier har

---

[d083_d083 | Side [1]]
måte ha noen egeninteresse kny琀琀et 琀椀l
handelen.
Uavhengighet og god fagkunnskap har over 琀椀d bygget troverdighet og 琀椀llit. Både selger og kjøper skal kunne stole på
bygningssakkyndiges vurderinger. For 琀椀lfeller der det likevel skulle oppstå misnøye med u琀昀ørt arbeid, har vi sammen
med Forbrukerrådet etablert en klagenemnd.
Norsk takst har en sentral rolle i utviklingen av norske standarder, regler og profesjonsprinsipper, og representerer
bransjen i alle relevante internasjonale fora. De琀琀e sikrer at

---

[d083_d083 | Side [1]]
r 1.1.1999?
Ja
Eksisterer det samsvarserklæring?
Ja
Gjort en del oppgradering av anlegget, se egenerklæring for hva
som er gjort. Arbeidene gjort i perioden 2021-2024.
4. Foreligger det kontrollrapport fra o昀昀entlig myndighet – Det Lokale
El琀椀lsyn (DLE) eller eventuelt andre 琀椀lsvarende kontrollinstanser med
avvik som ikke er utbedret eller kontrollen er over 5 år?
Nei
5. Forekommer det o昀琀e at sikringene løses ut?
Oppdragsnr.: 15467-2966 Befaringsdato: 05.02.2026 Side: 9 av 16
69

## Side 70

Bertrand

---

[d083_d083 | Side [1]]
elger potensielle kjøpere til å undersøke eiendommen grundig, jf avhendigsloven § 3-10 og kjøpsloven § 20
(aksjeboliger).
Gyldig forsikring forutsetter at det for helårs- og fritidsbolig foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere
bolighandel).
Initialer selger: JLB, HF 4
15006220
:ecnerefer
tnemucoD
58

## Side 59

Jeg ønsker boligselgerforsikring, og bekrefter å ha mottatt og lest forsikringsvilkårene og informasjonsbrosjyre til selger i
forbindelse med kjøp av

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "Membraner og tettesjikt på bad har oppbrukt mer enn halvparten av forventet brukstid (byggeår 2008, nå ~18 år gamle). TG2 er gitt, noe som indikerer behov for tiltak i nær fremtid og risiko for lekkasje og følgeskader.",
      "evidence": [
        "Smøremembran på vegg som er over 15 år og banemembran over 20 år blir vurdert til TG2 i rapporten.",
        "Dette badet er nå snart 20 år gammelt. TG2 gis med bakgrunn i at mer enn halvparten av forventet brukstid for membran/tettesjikt er oppbrukt.",
        "To plassbygde baderom fra byggeår med flislagte... TG2 pga alder på membraner.",
        "Tilstandsgrad 2, TG2: Vedlikehold eller tiltak trengs i nær fremtid, det er grunn til å varsle fare for skader på grunn av alder eller overvåke spesielt på grunn av fare for større skade eller følgeskade."
      ],
      "source_documents": [
        "d083_d083"
      ],
      "source_pages": [
        67,
        68
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R2",
      "description": "Sameiet vurderer å bytte ut fjernvarme med bergvarmeanlegg til en estimert kostnad på 14–16 millioner kroner. Dette kan medføre betydelig økning i felleskostnader og/eller fellesgjeld for alle seksjonseiere, inkludert kjøper.",
      "evidence": [
        "Totalkostnad for boring, installasjon av varmepumper, røranlegg, automasjon, måling og tilpasning til eksisterende systemer, inkludert prosjektledelse, usikkerhet og mva, er anslått til å ligge i området 14–16 millioner kroner.",
        "Bergvarmeanlegget er planlagt å dekke ca. 40–60% av årlig energibehov, mens resterende effekt må dekkes med elektrisitet.",
        "Sameiet har, som følge av årsmøtevedtak i 2023, vurdert muligheten for å bytte ut dagens fjernvarme med et bergvarmeanlegg.",
        "Styret vil fremme saken for ny behandling når markedsforholdene stabiliserer seg og forutsetningene viser at nedbetalingstiden kan bli som ønsket (for eksempel innen 9–12 år)."
      ],
      "source_documents": [
        "d083_d083"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.93
    },
    {
      "risk_id": "R3",
      "description": "Sameiet vurderer etablering av solcelleanlegg til en estimert kostnad på 2,5–3,0 millioner kroner. Dette kan medføre økte felleskostnader eller fellesgjeld dersom prosjektet vedtas.",
      "evidence": [
        "Basert på innhentede priser, inkludert teknisk installasjon, integrert fallsikring, elektroarbeider, prosjektledelse, usikkerhet og mva, anslås totalkostnaden å være i størrelsesorden 2,5–3,0 millioner kroner.",
        "Det ble på årsmøtet 2023 vedtatt å utrede muligheten for å etablere solcelleanlegg på sameiets to hovedtak.",
        "Videre ble saken igjen tatt opp på årsmøtet i 2025 hvor følgende ble vedtatt: Styret foreslår derfor at årsmøtet tar saken til orientering."
      ],
      "source_documents": [
        "d083_d083"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R4",
      "description": "Sameiet er ikke tilknyttet sikringsordning for fellesgjeld. Dette innebærer at kjøper ikke er beskyttet mot at andre seksjonseiere misligholder sine forpliktelser, og kan i ytterste konsekvens måtte dekke andres andel av sameiets forpliktelser.",
      "evidence": [
        "Ikke tilknyttet sikringsordning. Sameiet har legalpant som sikkerhet for betaling av felleskostnader.",
        "Dette betyr at alle nåværende og fremtidige seksjonseiere, også for de seksjoner hvor fellesgjelden er innfridd, risikerer å måtte dekke sin forholdsmessige andel av sameiets betalingsforpliktelser ved mislighold.",
        "I henhold til eierseksjonsloven § 31 er sameierne ansvarlige overfor sameiets kreditorer i forhold til sin sameiebrøk."
      ],
      "source_documents": [
        "d083_d083"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R5",
      "description": "Legalpant til kommunen og sameiet har prioritet foran tinglyste lån (f.eks. banklån). Kjøper kan risikere at disse kravene dekkes før kjøpers eventuelle panthaver ved tvangssalg.",
      "evidence": [
        "Legalpant er pant som ikke vises i grunnboksutskriften, og har prioritet foran tinglyste lån, for eksempel banklån på seksjonen.",
        "Legalpant til kommunen har høyere prioritet enn legalpant til sameiet.",
        "Kommunen har legalpant som sikkerhet for betaling av kommunale avgifter og eventuell eiendomsskatt.",
        "De andre seksjonseierne har lovbestemt panterett i seksjonen for krav mot seksjonseieren som følger av sameieforholdet, jf. eierseksjonslovens § 31. Pantekravet kan ikke overstige et beløp som for hver bruksenhet svarer til to ganger folketrygdens grunnbeløp."
      ],
      "source_documents": [
        "d083_d083"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R6",
      "description": "Selger har ikke utført radonmåling. Selv om det ikke er krav om dette når boligen ikke er utleid, er radoneksponering en helserisiko som kjøper bør være oppmerksom på.",
      "evidence": [
        "Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid."
      ],
      "source_documents": [
        "d083_d083"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.78
    },
    {
      "risk_id": "R7",
      "description": "Området er under aktiv utvikling med flere pågående reguleringsplaner, inkludert ny barneskole, ungdomsskole, bekkeåpning og sykkelvei. Dette kan medføre anleggsarbeid, støy, endrede omgivelser og usikkerhet rundt fremtidig bruk av nærliggende arealer.",
      "evidence": [
        "Det gjøres oppmerksom på at området er under utvikling og at endringer og oppføring av nye bygg vil kunne skje.",
        "Grenseveien mellom Økernveien og Grensesvingen – Saksnr. 202460006. Hovedhensikten med planen er å etablere et eget anlegg for syklende og legge bedre til rette for gående.",
        "Grenseveien 73, 91 og 95 – Regulering til barneskole, barnehage og park – Saksnr. 202118619.",
        "Bekkeåpningen vil berøre deler av eiendommene Gladengveien 18 og 16. Dagens bruk på eiendommene forutsettes videreført, men driftsmulighetene kan bli påvirket av bekkeåpningen.",
        "Ensjø skal få ny barneskole og ny ungdomsskole."
      ],
      "source_documents": [
        "d083_d083"
      ],
      "source_pages": [
        1,
        48,
        49
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R8",
      "description": "Staking av tett avløp ble utført i 2025. Dette kan indikere underliggende problemer med avløpssystemet, og private stikkledninger er sameiets ansvar å vedlikeholde.",
      "evidence": [
        "Ja, kun av faglært. Staking av tett avløp 2025. Arbeid utført av Tanga rør AS.",
        "Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler sameiet."
      ],
      "source_documents": [
        "d083_d083"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.72
    },
    {
      "risk_id": "R9",
      "description": "Energimerket er E (grønn farge), noe som indikerer relativt høyt energiforbruk. Dette kan medføre høyere løpende energikostnader for kjøper.",
      "evidence": [
        "Energikarakter: E",
        "Energifarge: Grønn",
        "Leiligheten er oppvarmet med radiatorer via sentral fjernvarme. I tillegg varmekabler på badene."
      ],
      "source_documents": [
        "d083_d083"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R10",
      "description": "Tilstandsrapporten er begrenset i omfang og gir ingen garanti for at det ikke finnes skjulte feil, skader eller mangler. Skjulte konstruksjoner, installasjoner og fellesarealer er ikke vurdert.",
      "evidence": [
        "Rapporten er likevel ingen garanti for at det ikke kan finnes skjulte feil, skader og mangler.",
        "Bygningssakkyndige ser for eksempel ikke på: skjulte installasjoner, installasjoner utenfor bygningen, full funksjonstesting av el- og VVS-installasjoner, geologiske forhold og bygningens plassering på grunnen.",
        "Tilstandsrapporten beskriver ikke hele boligen.",
        "fellesarealer (med mindre boligeier har vedlikeholdsplikt for fellesarealer og dette er kjent for bygningssakkyndig)."
      ],
      "source_documents": [
        "d083_d083"
      ],
      "source_pages": [
        1,
        74,
        75
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R11",
      "description": "Kommunale avgifter utgjør en betydelig og voksende kostnad for sameiet (kr 2 326 184 i 2024 mot kr 1 998 924 i 2023 – en økning på ca. 16%). Budsjett for 2025 er satt til kr 2 598 000, noe som kan presse felleskostnadene opp.",
      "evidence": [
        "Kommunale avgifter: Vann- og avløpsavgift -1 462 686, Renovasjonsavgift -863 498, SUM KOMMUNALE AVGIFTER -2 326 184.",
        "Regnskap 2023: -1 998 924. Budsjett 2025: -2 598 000.",
        "Forsikringer -519 606 mot -446 468 i 2023 (økning ~16%)."
      ],
      "source_documents": [
        "d083_d083"
      ],
      "source_pages": [
        123,
        124
      ],
      "confidence": 0.83
    },
    {
      "risk_id": "R12",
      "description": "Korttidsutleie av hele boligseksjonen er begrenset til maksimalt 90 døgn per år, og sammenhengende utleie kan ikke overstige 30 døgn. Dette begrenser kjøpers mulighet til å leie ut boligen på korttidsplattformer som Airbnb.",
      "evidence": [
        "Korttidsutleie av hele boligseksjonen i mer enn 90 døgn årlig er ikke tillatt. Med korttidsutleie menes utleie i inntil 30 døgn sammenhengende."
      ],
      "source_documents": [
        "d083_d083"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R13",
      "description": "Kjøper er forpliktet til å signere en standard kjøpekontrakt utarbeidet av Emera (eiendomshandleren), noe som kan begrense kjøpers forhandlingsrom og avtalefrihet.",
      "evidence": [
        "Kjøper og selger er forpliktet til å signere den standard kjøpekontrakten utarbeidet av Emera som en del av eiendomshandleren. Kjøpekontrakten kan gjennomgås hos eiendomsmegler før budet legges inn."
      ],
      "source_documents": [
        "d083_d083"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.7
    },
    {
      "risk_id": "R14",
      "description": "Sameiet har betydelige drift- og vedlikeholdskostnader (kr 2 242 232 i 2024) samt stigende forsikringspremier (kr 519 606 i 2024 mot kr 446 468 i 2023, +16%). Kombinert med planlagte investeringer kan dette presse felleskostnadene ytterligere opp.",
      "evidence": [
        "Drift og vedlikehold 8 -2 242 232 -2 524 533 -2 635 000 -2 720 000",
        "Forsikringer -519 606 -446 468 -491 000 -589 000",
        "SUM DRIFTSKOSTNADER -8 264 362 -7 878 545 -8 351 300 -8 792 000",
        "Budsjett 2025 for driftskostnader er satt til -8 792 000, en økning fra -8 264 362 i 2024."
      ],
      "source_documents": [
        "d083_d083"
      ],
      "source_pages": [
        123
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R15",
      "description": "Ingen kan eie mer enn to boligseksjoner i sameiet, jf. eierseksjonsloven § 23. Dette begrenser investorers mulighet til å kjøpe flere enheter og kan påvirke videresalgsmarkedet.",
      "evidence": [
        "Det informeres om at ingen kan eie mer enn to boligseksjoner i sameiet, i henhold til eierseksjonsloven § 23. Seksjoner som eies av nærstående eller gjennom et firma regnes også med."
      ],
      "source_documents": [
        "d083_d083"
      ],
      "source_pages": [
        1,
        49
      ],
      "confidence": 0.78
    }
  ],
  "re_retrieval_queries": [
    "fellesgjeld sameiet Tiedemannsjordet lånebetingelser rente",
    "bergvarmeanlegg vedtak finansiering fellesgjeld økning",
    "solcelleanlegg vedtak 2025 finansiering",
    "el-anlegg tilstandsgrad rapport avvik",
    "ventilasjon tilstandsgrad avvik rapport",
    "skjeggkre skadedyr sameiet fellesareal",
    "parkeringsplass el-bil lading kostnader",
    "andel fellesgjeld seksjon 136 innfrielse"
  ],
  "reasoning": "\nGjennomgangen av de 13 identifiserte risikoene mot dokumentevidensen viser følgende:\n\n**R1 (Membraner/bad):** Meget godt dokumentert med direkte sitat fra tilstandsrapporten. Confidence justeres opp til 0.97 da evidensen er eksplisitt og entydig.\n\n**R2 (Bergvarmeanlegg):** Godt dokumentert. Tilleggsevid ens om at styret vil fremme saken på nytt når forutsetningene er til stede, bekrefter at risikoen er reell og fremtidig. Confidence opprettholdes på 0.93.\n\n**R3 (Solcelleanlegg):** Dokumentert, men saken er per 2025 kun til orientering – ikke vedtatt gjennomført. Confidence justeres ned til 0.82 da risikoen er mer usikker enn opprinnelig angitt.\n\n**R4 (Ingen sikringsordning):** Meget godt dokumentert med direkte sitat fra vedtekter og salgsoppgave. Confidence justeres opp til 0.95.\n\n**R5 (Legalpant prioritet):** Godt dokumentert. Tilleggsevid ens om 2G-begrensning for sameiets legalpant er inkludert. Confidence justeres opp til 0.92.\n\n**R6 (Radon):** Dokumentert med ett enkelt sitat. Confidence justeres ned til 0.78 da det kun er én kilde og risikoen er generell/hypotetisk.\n\n**R7 (Reguleringsplaner/utvikling):** Godt dokumentert med flere konkrete plansaker. Confidence opprettholdes på 0.88.\n\n**R8 (Avløp/staking):** Dokumentert, men staking av tett avløp er en relativt vanlig vedlikeholdsoperasjon og indikerer ikke nødvendigvis alvorlige underliggende problemer. Confidence justeres ned til 0.72.\n\n**R9 (Energimerke E):** Dokumentert. Tilleggsevid ens om fjernvarme som oppvarmingskilde er inkludert. Confidence opprettholdes på 0.80.\n\n**R10 (Tilstandsrapportens begrensninger):** Meget godt dokumentert med flere sitater. Confidence justeres opp til 0.90.\n\n**R11 (Kommunale avgifter):** Godt dokumentert med konkrete tall fra regnskapet. Confidence justeres opp til 0.83.\n\n**R12 (Korttidsutleie):** Godt dokumentert. Confidence justeres opp til 0.92 da dette er en klar og entydig begrensning.\n\n**R13 (Standard kjøpekontrakt):** Dokumentert, men risikoen er relativt lav da kjøpekontrakten kan gjennomgås på forhånd. Confidence justeres ned til 0.70.\n\n**Nye risikoer identifisert:**\n- **R14:** Stigende totale driftskostnader i sameiet (budsjett 2025: -8 792 000 vs regnskap 2024: -8 264 362) kombinert med planlagte investeringer. Godt dokumentert i regnskapet.\n- **R15:** Begrensning på maks to seksjoner per eier (inkl. nærstående/firma), jf. eierseksjonsloven § 23. Kan påvirke investorer og videresalgsmarkedet.\n\n**Manglende informasjon som bør undersøkes:**\n- Størrelse og betingelser på sameiets fellesgjeld (lånebetingelser, rente, innfrielsesdato)\n- Status på el-anlegg og ventilasjon (tilstandsgrader)\n- Eventuelle funn av skjeggkre eller skadedyr i sameiet\n- Konkret andel fellesgjeld for seksjon 136\n- Finansieringsplan for bergvarmeanlegg og solceller dersom vedtatt\n"
}

## Raw Response
```json
{
  "id": "msg_01BLoVYieb4mbFq6f6xNkh8T",
  "container": null,
  "content": [
    {
      "id": "toolu_01PKsTLKr2puTjuEeguBaaTm",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "Membraner og tettesjikt på bad har oppbrukt mer enn halvparten av forventet brukstid (byggeår 2008, nå ~18 år gamle). TG2 er gitt, noe som indikerer behov for tiltak i nær fremtid og risiko for lekkasje og følgeskader.",
            "evidence": [
              "Smøremembran på vegg som er over 15 år og banemembran over 20 år blir vurdert til TG2 i rapporten.",
              "Dette badet er nå snart 20 år gammelt. TG2 gis med bakgrunn i at mer enn halvparten av forventet brukstid for membran/tettesjikt er oppbrukt.",
              "To plassbygde baderom fra byggeår med flislagte... TG2 pga alder på membraner.",
              "Tilstandsgrad 2, TG2: Vedlikehold eller tiltak trengs i nær fremtid, det er grunn til å varsle fare for skader på grunn av alder eller overvåke spesielt på grunn av fare for større skade eller følgeskade."
            ],
            "source_documents": [
              "d083_d083"
            ],
            "source_pages": [
              67,
              68
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R2",
            "description": "Sameiet vurderer å bytte ut fjernvarme med bergvarmeanlegg til en estimert kostnad på 14–16 millioner kroner. Dette kan medføre betydelig økning i felleskostnader og/eller fellesgjeld for alle seksjonseiere, inkludert kjøper.",
            "evidence": [
              "Totalkostnad for boring, installasjon av varmepumper, røranlegg, automasjon, måling og tilpasning til eksisterende systemer, inkludert prosjektledelse, usikkerhet og mva, er anslått til å ligge i området 14–16 millioner kroner.",
              "Bergvarmeanlegget er planlagt å dekke ca. 40–60% av årlig energibehov, mens resterende effekt må dekkes med elektrisitet.",
              "Sameiet har, som følge av årsmøtevedtak i 2023, vurdert muligheten for å bytte ut dagens fjernvarme med et bergvarmeanlegg.",
              "Styret vil fremme saken for ny behandling når markedsforholdene stabiliserer seg og forutsetningene viser at nedbetalingstiden kan bli som ønsket (for eksempel innen 9–12 år)."
            ],
            "source_documents": [
              "d083_d083"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.93
          },
          {
            "risk_id": "R3",
            "description": "Sameiet vurderer etablering av solcelleanlegg til en estimert kostnad på 2,5–3,0 millioner kroner. Dette kan medføre økte felleskostnader eller fellesgjeld dersom prosjektet vedtas.",
            "evidence": [
              "Basert på innhentede priser, inkludert teknisk installasjon, integrert fallsikring, elektroarbeider, prosjektledelse, usikkerhet og mva, anslås totalkostnaden å være i størrelsesorden 2,5–3,0 millioner kroner.",
              "Det ble på årsmøtet 2023 vedtatt å utrede muligheten for å etablere solcelleanlegg på sameiets to hovedtak.",
              "Videre ble saken igjen tatt opp på årsmøtet i 2025 hvor følgende ble vedtatt: Styret foreslår derfor at årsmøtet tar saken til orientering."
            ],
            "source_documents": [
              "d083_d083"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R4",
            "description": "Sameiet er ikke tilknyttet sikringsordning for fellesgjeld. Dette innebærer at kjøper ikke er beskyttet mot at andre seksjonseiere misligholder sine forpliktelser, og kan i ytterste konsekvens måtte dekke andres andel av sameiets forpliktelser.",
            "evidence": [
              "Ikke tilknyttet sikringsordning. Sameiet har legalpant som sikkerhet for betaling av felleskostnader.",
              "Dette betyr at alle nåværende og fremtidige seksjonseiere, også for de seksjoner hvor fellesgjelden er innfridd, risikerer å måtte dekke sin forholdsmessige andel av sameiets betalingsforpliktelser ved mislighold.",
              "I henhold til eierseksjonsloven § 31 er sameierne ansvarlige overfor sameiets kreditorer i forhold til sin sameiebrøk."
            ],
            "source_documents": [
              "d083_d083"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R5",
            "description": "Legalpant til kommunen og sameiet har prioritet foran tinglyste lån (f.eks. banklån). Kjøper kan risikere at disse kravene dekkes før kjøpers eventuelle panthaver ved tvangssalg.",
            "evidence": [
              "Legalpant er pant som ikke vises i grunnboksutskriften, og har prioritet foran tinglyste lån, for eksempel banklån på seksjonen.",
              "Legalpant til kommunen har høyere prioritet enn legalpant til sameiet.",
              "Kommunen har legalpant som sikkerhet for betaling av kommunale avgifter og eventuell eiendomsskatt.",
              "De andre seksjonseierne har lovbestemt panterett i seksjonen for krav mot seksjonseieren som følger av sameieforholdet, jf. eierseksjonslovens § 31. Pantekravet kan ikke overstige et beløp som for hver bruksenhet svarer til to ganger folketrygdens grunnbeløp."
            ],
            "source_documents": [
              "d083_d083"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R6",
            "description": "Selger har ikke utført radonmåling. Selv om det ikke er krav om dette når boligen ikke er utleid, er radoneksponering en helserisiko som kjøper bør være oppmerksom på.",
            "evidence": [
              "Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid."
            ],
            "source_documents": [
              "d083_d083"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.78
          },
          {
            "risk_id": "R7",
            "description": "Området er under aktiv utvikling med flere pågående reguleringsplaner, inkludert ny barneskole, ungdomsskole, bekkeåpning og sykkelvei. Dette kan medføre anleggsarbeid, støy, endrede omgivelser og usikkerhet rundt fremtidig bruk av nærliggende arealer.",
            "evidence": [
              "Det gjøres oppmerksom på at området er under utvikling og at endringer og oppføring av nye bygg vil kunne skje.",
              "Grenseveien mellom Økernveien og Grensesvingen – Saksnr. 202460006. Hovedhensikten med planen er å etablere et eget anlegg for syklende og legge bedre til rette for gående.",
              "Grenseveien 73, 91 og 95 – Regulering til barneskole, barnehage og park – Saksnr. 202118619.",
              "Bekkeåpningen vil berøre deler av eiendommene Gladengveien 18 og 16. Dagens bruk på eiendommene forutsettes videreført, men driftsmulighetene kan bli påvirket av bekkeåpningen.",
              "Ensjø skal få ny barneskole og ny ungdomsskole."
            ],
            "source_documents": [
              "d083_d083"
            ],
            "source_pages": [
              1,
              48,
              49
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R8",
            "description": "Staking av tett avløp ble utført i 2025. Dette kan indikere underliggende problemer med avløpssystemet, og private stikkledninger er sameiets ansvar å vedlikeholde.",
            "evidence": [
              "Ja, kun av faglært. Staking av tett avløp 2025. Arbeid utført av Tanga rør AS.",
              "Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler sameiet."
            ],
            "source_documents": [
              "d083_d083"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.72
          },
          {
            "risk_id": "R9",
            "description": "Energimerket er E (grønn farge), noe som indikerer relativt høyt energiforbruk. Dette kan medføre høyere løpende energikostnader for kjøper.",
            "evidence": [
              "Energikarakter: E",
              "Energifarge: Grønn",
              "Leiligheten er oppvarmet med radiatorer via sentral fjernvarme. I tillegg varmekabler på badene."
            ],
            "source_documents": [
              "d083_d083"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R10",
            "description": "Tilstandsrapporten er begrenset i omfang og gir ingen garanti for at det ikke finnes skjulte feil, skader eller mangler. Skjulte konstruksjoner, installasjoner og fellesarealer er ikke vurdert.",
            "evidence": [
              "Rapporten er likevel ingen garanti for at det ikke kan finnes skjulte feil, skader og mangler.",
              "Bygningssakkyndige ser for eksempel ikke på: skjulte installasjoner, installasjoner utenfor bygningen, full funksjonstesting av el- og VVS-installasjoner, geologiske forhold og bygningens plassering på grunnen.",
              "Tilstandsrapporten beskriver ikke hele boligen.",
              "fellesarealer (med mindre boligeier har vedlikeholdsplikt for fellesarealer og dette er kjent for bygningssakkyndig)."
            ],
            "source_documents": [
              "d083_d083"
            ],
            "source_pages": [
              1,
              74,
              75
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R11",
            "description": "Kommunale avgifter utgjør en betydelig og voksende kostnad for sameiet (kr 2 326 184 i 2024 mot kr 1 998 924 i 2023 – en økning på ca. 16%). Budsjett for 2025 er satt til kr 2 598 000, noe som kan presse felleskostnadene opp.",
            "evidence": [
              "Kommunale avgifter: Vann- og avløpsavgift -1 462 686, Renovasjonsavgift -863 498, SUM KOMMUNALE AVGIFTER -2 326 184.",
              "Regnskap 2023: -1 998 924. Budsjett 2025: -2 598 000.",
              "Forsikringer -519 606 mot -446 468 i 2023 (økning ~16%)."
            ],
            "source_documents": [
              "d083_d083"
            ],
            "source_pages": [
              123,
              124
            ],
            "confidence": 0.83
          },
          {
            "risk_id": "R12",
            "description": "Korttidsutleie av hele boligseksjonen er begrenset til maksimalt 90 døgn per år, og sammenhengende utleie kan ikke overstige 30 døgn. Dette begrenser kjøpers mulighet til å leie ut boligen på korttidsplattformer som Airbnb.",
            "evidence": [
              "Korttidsutleie av hele boligseksjonen i mer enn 90 døgn årlig er ikke tillatt. Med korttidsutleie menes utleie i inntil 30 døgn sammenhengende."
            ],
            "source_documents": [
              "d083_d083"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R13",
            "description": "Kjøper er forpliktet til å signere en standard kjøpekontrakt utarbeidet av Emera (eiendomshandleren), noe som kan begrense kjøpers forhandlingsrom og avtalefrihet.",
            "evidence": [
              "Kjøper og selger er forpliktet til å signere den standard kjøpekontrakten utarbeidet av Emera som en del av eiendomshandleren. Kjøpekontrakten kan gjennomgås hos eiendomsmegler før budet legges inn."
            ],
            "source_documents": [
              "d083_d083"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.7
          },
          {
            "risk_id": "R14",
            "description": "Sameiet har betydelige drift- og vedlikeholdskostnader (kr 2 242 232 i 2024) samt stigende forsikringspremier (kr 519 606 i 2024 mot kr 446 468 i 2023, +16%). Kombinert med planlagte investeringer kan dette presse felleskostnadene ytterligere opp.",
            "evidence": [
              "Drift og vedlikehold 8 -2 242 232 -2 524 533 -2 635 000 -2 720 000",
              "Forsikringer -519 606 -446 468 -491 000 -589 000",
              "SUM DRIFTSKOSTNADER -8 264 362 -7 878 545 -8 351 300 -8 792 000",
              "Budsjett 2025 for driftskostnader er satt til -8 792 000, en økning fra -8 264 362 i 2024."
            ],
            "source_documents": [
              "d083_d083"
            ],
            "source_pages": [
              123
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R15",
            "description": "Ingen kan eie mer enn to boligseksjoner i sameiet, jf. eierseksjonsloven § 23. Dette begrenser investorers mulighet til å kjøpe flere enheter og kan påvirke videresalgsmarkedet.",
            "evidence": [
              "Det informeres om at ingen kan eie mer enn to boligseksjoner i sameiet, i henhold til eierseksjonsloven § 23. Seksjoner som eies av nærstående eller gjennom et firma regnes også med."
            ],
            "source_documents": [
              "d083_d083"
            ],
            "source_pages": [
              1,
              49
            ],
            "confidence": 0.78
          }
        ],
        "re_retrieval_queries": [
          "fellesgjeld sameiet Tiedemannsjordet lånebetingelser rente",
          "bergvarmeanlegg vedtak finansiering fellesgjeld økning",
          "solcelleanlegg vedtak 2025 finansiering",
          "el-anlegg tilstandsgrad rapport avvik",
          "ventilasjon tilstandsgrad avvik rapport",
          "skjeggkre skadedyr sameiet fellesareal",
          "parkeringsplass el-bil lading kostnader",
          "andel fellesgjeld seksjon 136 innfrielse"
        ],
        "reasoning": "\nGjennomgangen av de 13 identifiserte risikoene mot dokumentevidensen viser følgende:\n\n**R1 (Membraner/bad):** Meget godt dokumentert med direkte sitat fra tilstandsrapporten. Confidence justeres opp til 0.97 da evidensen er eksplisitt og entydig.\n\n**R2 (Bergvarmeanlegg):** Godt dokumentert. Tilleggsevid ens om at styret vil fremme saken på nytt når forutsetningene er til stede, bekrefter at risikoen er reell og fremtidig. Confidence opprettholdes på 0.93.\n\n**R3 (Solcelleanlegg):** Dokumentert, men saken er per 2025 kun til orientering – ikke vedtatt gjennomført. Confidence justeres ned til 0.82 da risikoen er mer usikker enn opprinnelig angitt.\n\n**R4 (Ingen sikringsordning):** Meget godt dokumentert med direkte sitat fra vedtekter og salgsoppgave. Confidence justeres opp til 0.95.\n\n**R5 (Legalpant prioritet):** Godt dokumentert. Tilleggsevid ens om 2G-begrensning for sameiets legalpant er inkludert. Confidence justeres opp til 0.92.\n\n**R6 (Radon):** Dokumentert med ett enkelt sitat. Confidence justeres ned til 0.78 da det kun er én kilde og risikoen er generell/hypotetisk.\n\n**R7 (Reguleringsplaner/utvikling):** Godt dokumentert med flere konkrete plansaker. Confidence opprettholdes på 0.88.\n\n**R8 (Avløp/staking):** Dokumentert, men staking av tett avløp er en relativt vanlig vedlikeholdsoperasjon og indikerer ikke nødvendigvis alvorlige underliggende problemer. Confidence justeres ned til 0.72.\n\n**R9 (Energimerke E):** Dokumentert. Tilleggsevid ens om fjernvarme som oppvarmingskilde er inkludert. Confidence opprettholdes på 0.80.\n\n**R10 (Tilstandsrapportens begrensninger):** Meget godt dokumentert med flere sitater. Confidence justeres opp til 0.90.\n\n**R11 (Kommunale avgifter):** Godt dokumentert med konkrete tall fra regnskapet. Confidence justeres opp til 0.83.\n\n**R12 (Korttidsutleie):** Godt dokumentert. Confidence justeres opp til 0.92 da dette er en klar og entydig begrensning.\n\n**R13 (Standard kjøpekontrakt):** Dokumentert, men risikoen er relativt lav da kjøpekontrakten kan gjennomgås på forhånd. Confidence justeres ned til 0.70.\n\n**Nye risikoer identifisert:**\n- **R14:** Stigende totale driftskostnader i sameiet (budsjett 2025: -8 792 000 vs regnskap 2024: -8 264 362) kombinert med planlagte investeringer. Godt dokumentert i regnskapet.\n- **R15:** Begrensning på maks to seksjoner per eier (inkl. nærstående/firma), jf. eierseksjonsloven § 23. Kan påvirke investorer og videresalgsmarkedet.\n\n**Manglende informasjon som bør undersøkes:**\n- Størrelse og betingelser på sameiets fellesgjeld (lånebetingelser, rente, innfrielsesdato)\n- Status på el-anlegg og ventilasjon (tilstandsgrader)\n- Eventuelle funn av skjeggkre eller skadedyr i sameiet\n- Konkret andel fellesgjeld for seksjon 136\n- Finansieringsplan for bergvarmeanlegg og solceller dersom vedtatt\n"
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
    "input_tokens": 23710,
    "output_tokens": 5346,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
