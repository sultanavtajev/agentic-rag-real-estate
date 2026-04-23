# Trace: agentic_reflecting_iter1
- **Run ID:** f4a4a90f-ea58-415a-90e5-953e0d57866e
- **Tidspunkt:** 2026-03-22T23:37:03.972586+00:00
- **Varighet:** 140.50s
- **Input tokens:** 21916
- **Output tokens:** 6535

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
Risiko 1: Borettslagets lån er avdragsfrie frem til desember 2025, og det er søkt om ytterligere avdragsfrihet. Lånet planlegges økt med ca. 10 000 000 kr, noe som vil øke felleskostnadene betydelig for andelseierne.
  Confidence: 0.97
  Evidens: Borettslagets lån er avdragsfrie frem til og med desember 2025. Det er søkt om avdragsfrihet også i...; Som varslet på beboermøte som ble avholdt 29. oktober 2024 må lånet økes med totalt ca 10 000 000,‑ slik at de totale lånekostnadene for dette prosjektet blir på ca kr. 78 550 000,‑. Dette utgjør i gjennomsnitt ca kr. 293 000,‑ pr. leilighet.; På grunn av prisstigning og renteøkning er det påregnelig at felleskostnadene økes etter utarbeidelse av denne salgsoppgaven.

Risiko 2: Høy fellesgjeld og usikker fremtidig kostnadsutvikling. Andel fellesgjeld er kr 410 105 pr. 31.12.2025, og felleskostnadene inkluderer stipulerte renter og avdrag som kan øke vesentlig når avdragsfriheten opphører.
  Confidence: 0.95
  Evidens: Fellesgjeld Kr 410 105 pr. 31.12.2025; Felleskostnader kr. 4295,‑ Stipulerte avdrag kr. 739,‑ Stipulerte renter kr. 1590,‑ Total: kr. 6 624,‑; Kjøperen må være inneforstått med at fellesgjelden i sameiet og fellesutgiftene kan variere over tid, også at den kan øke som følge av beslutninger i sameiets styre eller generalforsamlinger.

Risiko 3: Pågående og kostbart balkong- og karnapp-rehabiliteringsprosjekt. Det oppstod en ekstrakostnad på ca. 5 000 000 kr, og prosjektet er ikke ferdigstilt. Balkongdørene måtte byttes grunnet råteskader.
  Confidence: 0.95
  Evidens: I årsrapporten til generalforsamlingen 2024 informerte styret om at det ble en ekstrakostnad på ca kr. 5 000 000,‑. Grunnen til dette var at balkongdørene i Elgtråkket og Bjørnefaret måtte byttes p.g.a. råteskader, år 2021.; Rehab. av balkonger og karnapper. Elgtråkket 5, 3 og 1 og Bjørnefaret 2 og 4 og Elgtråkket 5, år 2022.; Planlagt å være ferdig i løpet av våren 2025.

Risiko 4: Planlagt rørfornyingsprosjekt for avløpsrør. Avløpsrørene nærmer seg 50 år og vannskader har allerede oppstått i noen leiligheter. Kostnadene for dette prosjektet er ikke avklart, men vil sannsynligvis øke fellesgjelden ytterligere.
  Confidence: 0.97
  Evidens: I noen leiligheter har det vært vannskader i forbindelse med avløpsrørene. P.g.a. alder på avløpsrørene (de begynner å nærme seg 50 år) blir ikke årsaken til skadene dekket av byggforsikringen vi har.; Styret har derfor planlagt for at det må startes et prosjekt for å kartlegge tilstanden på alle avløpsrørene med sikte på rørfornying.; Avløpsrør (ink. sluk): Skjulte avløpsrør er av ukjent type, alder og tilstand. Bygningsdelen er ikke tilgjengelig for undersøkelser. Restlevetiden er ukjent.

Risiko 5: Elektrisk anlegg har vesentlige avvik (TG2). Det mangler samsvarserklæring, ingen dokumentasjon på deler montert før 1999, og varmtvannsberederen er koblet til stikkontakt med fare for varmgang. Utvidet el-kontroll anbefales.
  Confidence: 0.97
  Evidens: Det er ikke fremlagt samsvarserklæring på det elektriske anlegget.; Det er ikke fremlagt dokumentasjon på de deler av det elektriske anlegget som er montert før 1999.; Varmtvannsbereder har ikke fast tilkobling, men er koblet med stikkontakt (konsekvens er fare for varmgang).; På bakgrunn av ovennevnte avvik bør det gjennomføres en utvidet el-kontroll av en kvalifisert elektrofaglig person.

Risiko 6: Vannrør av kobber har passert anbefalt brukstid, og det er risiko for skjulte avvik og svekket funksjon. Varmtvannsberederen (fra 2004) har usikker restlevetid.
  Confidence: 0.93
  Evidens: Vannrør: Vannrør av kobber er vurdert til å ha en alder som tilsier at anbefalt brukstid er passert. På bakgrunn av alderen er det grunn til å varsle om risiko for skjulte avvik, svekket funksjon, usikker restlevetid eller lignende forhold som utvikles over tid.; Varmtvannsbereder: På bakgrunn av berederens alder er det grunn til å varsle om usikker restlevetid eller andre forhold som utvikles over tid. Det kan ikke utelukkes behov for reparasjon/utskiftning.

Risiko 7: Tettesjikt på bad er skjult og ikke tilgjengelig for inspeksjon. Alder og tilstand er ukjent, og lekkasjesikkerhet kan ikke verifiseres. Nytt tettesjikt kan bli nødvendig.
  Confidence: 0.93
  Evidens: Tettesjiktet er skjult og ikke tilgjengelig for inspeksjon og alder/tilstand er ikke kjent.; Bygningsdelen er fuktutsatt. Ytterligere undersøkelser anbefales slik at tiltak kan iverksettes ved behov.; Membran, tettesjikt og overgang til sluk: Tettesjiktet har en alder som tilsier at restlevetiden er usikker. Rommets lekkasjesikkerhet kan derfor ikke verifiseres, eventuelt bør nytt tettesjikt etableres.

Risiko 8: Våtromsplater bærer preg av slitasje og skader, og utskifting bør påregnes. Badet er fra ukjent årstall, noe som øker usikkerheten rundt tilstand og restlevetid.
  Confidence: 0.9
  Evidens: Utskifting av våtromsplater bør påregnes. Våtromsplater bærer preg av slitasje/skader. Våtromsplater bør skiftes ut.; Bad fra ukjent årstall.

Risiko 9: Skjevhetsmålinger viser avvik på opptil 22 mm i stue. Årsaken til skjevhetene er ikke vurdert, noe som kan indikere setningsskader eller konstruksjonsproblemer.
  Confidence: 0.85
  Evidens: Skjevhetsmåling: Største målte avvik er målt til 8mm og 22 mm i stue. Årsaken til skjevhetene er ikke vurdert.

Risiko 10: Eiendommen ligger i et aktsomhetsområde for radon (moderat/lav), og selger har ikke utført radonmåling. Dette kan utgjøre en helserisiko for beboerne.
  Confidence: 0.88
  Evidens: Det gjøres oppmerksom på at eiendommen ligger i et aktsomhetsområde for radon (moderat/lav stedsevarig rett til å legge og vedlikeholde alle...).; Selger har ikke utført radonmåling.

Risiko 11: Energikarakter G (rød) indikerer svært dårlig energieffektivitet. Vinduer er av eldre dato med høyere varmetap. Dette kan medføre høye strøm- og oppvarmingskostnader for kjøper.
  Confidence: 0.92
  Evidens: Energikarakter: G; Energifarge: Rød; Vinduer er av eldre dato, og det må forventes høyere varmetap fra disse vinduene.

Risiko 12: Planlagt ny blokkbebyggelse i nærområdet (Kapasitetsøkning Rælingsåsen) med tre tunnelportaler og ca. 16 500 kvm BRA boligbebyggelse. Dette kan medføre støy, anleggsarbeid og endrede omgivelser i en lengre periode.
  Confidence: 0.88
  Evidens: Det planlegges for å etablere byggefelt A‑L slik vedlagte situasjonskart viser. Forbruket tre tunnelportaler, henholdsvis ved Nedre Rælingsveg, Sandbekken og Blystadringen.; Det tas til sikte på å planlegge for ca. 16 500 kvm BRA boligbebyggelse.; Status: Planlegging igangsatt. Plantype: Detaljregulering.

Risiko 13: Borettslaget har legalpant på inntil 2G i andelen. Dersom andre andelshavere misligholder sine felleskostnader, kan dette påvirke borettslagets økonomi og potensielt øke kostnadene for øvrige andelseiere.
  Confidence: 0.85
  Evidens: Borettslaget har legalpant på inntil 2G som sikkerhet for betaling av felleskostnader.; Manglende innbetaling av fellesutgiftene som følge av andre andelshaveres mislighold, eller dersom borettslaget sitter på fraflyttede og/eller usolgte andeler, må dekkes av de øvrige andelseierne.; Borettslaget har prioritet over tinglyste lån når det gjelder betaling av felleskostnader, og kan kreve inn pengene før andre kreditorer.

Risiko 14: Ferdigattest er datert 01.06.1979, og godkjente byggetegninger viser en annen boligtype i underetasjen enn det som faktisk finnes. Det kan foreligge ulovlige eller ikke-godkjente endringer.
  Confidence: 0.87
  Evidens: Ferdigattest/brukstillatelse datert: 01.06.1979.; Godkjente byggetegninger som er mottatt fra kommunen viser underetasje med en annen boligtype der denne...; Det gjøres oppmerksom på at rom som er innredet som kontor ikke er godkjent for varig oppholdsrom.

Risiko 15: Brann i søppelrom i borettslaget. Dette indikerer en sikkerhetsrisiko og kan ha medført skader på fellesarealer.
  Confidence: 0.8
  Evidens: Det kan nevnes at det har vært brann i et av søppelrommene, med full brannutrykning.

Risiko 16: Kullfilter på kjøkken uten eget utkast kan medføre redusert ventilasjon og dårligere inneklima i boligen.
  Confidence: 0.82
  Evidens: kullfilter (ikke eget utkast) noe som kan medføre lavere... (ventilasjon); kan føre til redusert ventilasjon.

Risiko 17: Stoppekran er av eldre type og anbefalt brukstid er passert. Dette øker risikoen for svikt ved behov for stenging av vann, noe som kan forverre eventuelle vannskader.
  Confidence: 0.85
  Evidens: Hovedstoppekran: Stoppekran er av eldre type. Anbefalt brukstid er passert. Oppfølging med jevnlig ettersyn anbefales slik at tiltak kan iverksettes ved behov.

Risiko 18: Ventilasjonsmotoren for mekanisk avtrekk er felles for bygningen og er ikke undersøkt (TGIU). Tilstanden er ukjent, noe som medfører usikkerhet rundt inneklimaet i boligen.
  Confidence: 0.8
  Evidens: Ventilasjon: Motor for mekanisk avtrekksventilasjon er felles for bygningen. Bygningsdelen er ikke undersøkt.; Ventilasjon: Motor for mekanisk avtrekksventilasjon er felles for bygningen og er ikke undersøkt (TGIU).

Risiko 19: Fyringskostnadene (gass) i borettslaget er blitt vesentlig høyere enn budsjettert, primært på grunn av forsinkelser i oppstarten av prosjektet. Dette kan indikere fremtidige budsjettavvik og økte felleskostnader.
  Confidence: 0.78
  Evidens: Fyringskostnadene (gass) blir en god del høyere enn budsjett. Dette mest p.g.a. forsinkelsen i forbindelse med oppstarten på prosjektet.

Risiko 20: Eiendommen er uregulert, men avsatt til boligbebyggelse. Fremtidig regulering kan medføre endringer i utnyttelse og omgivelser som er vanskelig å forutse på kjøpstidspunktet.
  Confidence: 0.72
  Evidens: Eiendommen ligger i et uregulert område, men er avsatt til boligbebyggelse.

Dokumentkontekst:
[d001_2310692408845 | Side [1]]
de må dekke borettslagets løpende oppfordres interessenter til å kontakte eiendomsmegler
Lovanvendelse
utgifter. Manglende innbetaling av fellesutgiftene som eller egne rådgivere før de gir bud.
Legalpant: Borettslaget har legalpant på inntil 2G som følge av andre andelshaveres mislighold, eller dersom Regelverk og generelle opplysninger
sikkerhet for betaling av felleskostnader. Dette betyr at borettslaget sitter på fraflyttede og/ eller usolgte andeler, Boligen selges med det inventar og utstyr som i

---

[d001_2310692408845 | Side [1]]
in inne i åsen. Det planlegges for å etablere byggefelt A‑L slik vedlagte situasjonskart viser.
husstandens forbruk og utgifter de siste årene. Forbruket tre tunnelportaler, henholdsvis ved Nedre Rælingsveg, Tinglyste heftelser og rettigheter: På eiendommen er det Rælingen El‑verk har rett til fri adkomst til
kan variere avhengig av faktorer som antall Sandbekken og Blystadringen. tinglyst følgende heftelser og rettigheter som følger koblingskiosken.
familiemedlemmer, ønsket innetemperatur, egne avtaler Se

---

[d001_2310692408845 | Side [1]]
usolgte andeler, Boligen selges med det inventar og utstyr som i henhold Slitasje og bruk
borettslaget har prioritet over tinglyste lån når det gjelder må dekkes av de øvrige andelseierne. til gjeldende lover, forskrifter eller offentlige pålegg skal Det må også forventes at eiendommer som har vært i
betaling av felleskostnader, og kan kreve inn pengene før følge med eiendommen, jf. avhendingsloven § 3‑4. bruk, vil kunne ha tegn til slitasje og eventuelle skader.
andre kreditorer, selv om de har lån

---

[d001_2310692408845 | Side [1]]
tasje og eventuelle skader.
andre kreditorer, selv om de har lån registrert på andelen. Borettslaget har legalpanterett i andelen for krav på Fastmonterte eller spesialtilpassede installasjoner og Slik normal bruksslitasje og behov for vedlikehold må
dekning av felleskostnader og andre krav fra borettslaget, innredning som anses som varig tilknyttet boligen, følger kjøper påregne, og dette vil normalt ikke gi grunnlag for
på inntil 2 ganger folketrygdens grunnbeløp. normalt med i handelen, med mindre det

---

[d001_2310692408845 | Side [1]]
ellesgjeld)
Felleskostnader utgjør:
Omkostninger Felleskostnader kr. 4295,‑
Stipulerte avdrag kr. 739,‑
8 406,00 (Avklaring av forkjøpsrett) Stipulerte renter kr. 1590,‑
9 300,00 (Boligkjøperforsikring* (valgfritt)) Total: kr. 6 624,‑
545,00 (Tinglysingsgebyr ‑ hjemmel)
545,00 (Tinglysningsgebyr ‑ pantedokument) Borettslagets lån er avdragsfrie frem til og med
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ desember 2025. Det er søkt om avdragsfrihet også i
9 496,00 (Omkostninger totalt (uten

---

[d001_2310692408845 | Side [1]]
 mange finnes på eiendommen, vil heller ikke følge med i salget. teknisk gjennomgang av boligen og påpeker eventuelle
setter pris på. Innredningen har tidløse, glatte fronter Alt utstyr og installasjoner som medfølger overtas slik de avvik. Rapporten, sammen med selgers egenerklæring, er
Andre arealer: kombinert med laminatbenkeplate og nedfelt er, uten garanti, med mindre det foreligger en gjeldende vedlagt salgsoppgaven. Det er viktig at interessenter
TBA ‑Terrasser og åpen altan som er tilknyttet

---

[d001_2310692408845 | Side [1]]
folketrygdens grunnbeløp. normalt med i handelen, med mindre det foreligger en reklamasjon eller prisavslag.
Vei, vann og avløp
særskilt avtale mellom partene om noe annet, jf.
Eiendommen er tilknyttet offentlig vann‑ og Kjøper og selger er forpliktet til å undertegne standard avhendingsloven § 3‑5. Avtalerettslig
avløpssystem. Stikkledningene fra eiendommen og ut til kjøpekontrakt utarbeidet av Emera i forbindelse med Partenes rettigheter og plikter reguleres av avtalen
det kommunale nettet er private, og

---

[d001_2310692408845 | Side [1]]
ttest ved hjelp av ekspert for selgers Mattilsynet har stilt til NRVA, og for eksisterende gjensidig Det gjøres oppmerksom på at eiendommen ligger i et eiendommen vederlagsfritt. Rælingen El‑verk har også
regning, innen ett år etter at avtale om salg er inngått. avtale med Oslo kommune om vannleveranser. aktsomhetsområde for radon (moderat/ lav stedsevarig rett til å legge og vedlikeholde alle
Dette følger av forskrift om energimerking av bygninger Planarbeidet legger til rette for å øke kapasiteten på

---

[d001_2310692408845 | Side [1]]
inger i området. Nye gang‑ og hovedledninger etter godkjent plan for stikkledninger og Bestemmelse om rettigheter og plikter ved oppføring,
Regulerings og arealplaner: Eiendommen ligger i et sykkelforbindelser etableres. Det tas til sikte på å for øvrig etter bygningsmyndighetens anvisning. Ved drift og vedlikehold av frittliggende nettstasjon R0016
uregulert område, men er avsatt til boligbebyggelse ‑ planlegge for ca. 16 500 kvm BRA boligbebyggelse, noe skade på annenmanns eiendom blir skaden å erstatte.

---

[d001_2310692408845 | Side [1]]
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ søppelsorteringsanlegg.
På grunn av prisstigning og renteøkning er det påregnelig
at felleskostnadene økes etter utarbeidelse av denne
salgsoppgaven.
Eierskiftegebyr
Eiendomsskatt
Kr 6725
Det er ikke innført eiendomsskatt i Rælingen kommune
pt.
21

## Side 12

OM EIENDOMMEN OM EIENDOMMEN
over 200 butikker og tilknyttede virksomheter, samt
Kommunale avgifter Ferdigattest/ brukstillatelse:
Lørenskog med både Metro og Triaden. Lillestrøm ligger
Formueverdi
Informasjon: Kommunale

---

[d001_2310692408845 | Side [1]]
illegg gjelder
skjer via offentlig vei frem til privat stikkvei. eiendomsmegler for spørsmål. gjelder som utgangspunkt for hva som inkluderes i salget avhendingsloven. Det gjelder ulike avtalevilkår avhengig
– med mindre avvik er tydelig avtalt mellom kjøper og av om kjøper er forbrukerkjøper eller ikke, og dette er
Selger leverer eiendommen i ryddig og rengjort stand. selger. nærmere forklart nedenfor.
Utleie
Adgang til utleie: Det er begrenset adgang til å leie ut Om informasjonsgrunnlaget Budgivning og

---

[d001_2310692408845 | Side [1]]
yggelse, noe skade på annenmanns eiendom blir skaden å erstatte. Bestemmelse om adkomstrett
30 31

## Side 17

OM EIENDOMMEN OM EIENDOMMEN
Bestemmelse om bebyggelse og beplantning Borettslagsmodellen innebærer at borettslaget eier neste fem årene. Les mer om Boligkjøperforsikring i kan det ikke etter overtakelse reklameres på forhold som
Forklaring: Overenskomst om rettigheter og plikter ved eiendommen, mens andelseierne eier andeler i vedlagte materiell eller på https:/ / www. burde ha vært oppdaget ved

---

[d001_2310692408845 | Side [1]]
strøm. Du kan lar seg godkjenne, og alle kostnader forbundet med dette.
Beskrivelse av
Selskapet er medlem av sikringsordningen. blant annet sykle ned til Nebbursvollen friluftsbad, et flott Det kan være krav i lov, forskrift og planverk som ikke er
badested med basseng, vannsklier, grøntområder og eller kan oppfylles, i så fall vil kommunen kunne kreve at
eiendommen
kiosk med mer. Det er også asfalterte gang‑ og overnevnte tiltak settes tilbake til opprinnelig godkjent
Andre kostnader:
sykkelveier i

---

[d001_2310692408845 | Side [1]]
gte materiell eller på https:/ / www. burde ha vært oppdaget ved en ordinær gjennomgang.
oppføring, drift og vedlikehold av frittliggende nettstasjon borettslaget, som gir borett til en bestemt bolig. soderbergpartners.no/ eiendom/ boligkjoper/
(prefabrikkert kiosk) mellom Hafslund nett AS og Andelseierne har ikke personlig ansvar for borettslagets Dersom det oppstår behov for ytterligere avklaringer,
Elgtråkket borettslag. fellesgjeld, men de må dekke borettslagets løpende oppfordres interessenter til å

---

[d001_2310692408845 | Side [1]]
rstatning for skade som oppstår har kommunen rett
ikrafttredelse 15.02.2023. byggområder til fremtiden å legge og ha liggende offentlige ledninger
Se også: Hensikten med planen er å legge til rette for over tomten med adgang til vedlikehold av samme.
Energimerke
Eiendommen inngår i eldre reguleringsplan: "Regplan for utviklingen av eiendommene i Blystadlia Vest til Likeledes har Tele‑ og Elektrisitetsverket rett til
Energikarakter: G Øvre Aamodt skog (Blystadlia)", ikrafttredelse 23.10.1973. boligformål i

---

[d001_2310692408845 | Side [1]]
del). finansiering, salg av nåværende bolig ol. Normalt vil ikke Eiendomsmeglere er underlagt lov om hvitvasking, og er Total kostnad ved salg til prisantydning: kr 126 415.
et bud med forbehold bli akseptert før forbeholdet er blant annet forpliktet til å gjennomføre kundetiltak av Dette inkluderer både vederlag og stipulerte utlegg.
Ikke‑forbruker – definisjon og vilkår: avklart. Konferer gjerne med megler før bud avgis. både selger og kjøper.
Dersom kjøper er en juridisk enhet, eller en fysisk person

---

[d001_2310692408845 | Side [1]]
tvister av noe slag?
Nei Ja
26 Kjenner du til vedtak/forslag til vedtak om forhold vedr. eiendommen som kan medføre økte felleskostnader/økt fellesgjeld?
Nei Ja
27 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr i sameiet/laget/selskapet (fellesareal eller i andre boliger) som rotter, mus,
maur eller lignende?
Nei Ja
28 Kjenner du til om det er/har vært skjeggkre i sameiet/laget/selskapet (fellesareal eller i andre boliger)?
Nei Ja
Initialer selger: JAA

---

[d001_2310692408845 | Side [1]]
plikter reguleres av avtalen
det kommunale nettet er private, og vedlikeholdsansvaret eiendomstransaksjonen. Kjøpekontrakten kan besiktiges En standard tilbehørsliste utarbeidet av Norges mellom partene, og all tilgjengelig dokumentasjon som
for disse påhviler borettslaget. Adkomst til eiendommen hos eiendomsmegler før bud inngis. Kontakt Eiendomsmeglerforbund (NEF) følger salgsoppgaven, og forelå for kjøper før handelen ble inngått. I tillegg gjelder
skjer via offentlig vei frem til privat stikkvei.

---

[d001_2310692408845 | Side [1]]
eler av boligen?
Nei Ja
19 Kjenner du til forslag eller vedtatte reguleringsplaner, andre planer, nabovarsel eller offentlige vedtak som kan medføre endringer i bruken av
eiendommen eller av dens omgivelser?
Nei Ja
20 Kjenner du til om det foreligger påbud/heftelser/krav/manglende tillatelser vedrørende eiendommen?
Nei Ja
Initialer selger: JAA 2
38
30006240
:ecnerefer
tnemucoD
39

## Side 21

21 Er det foretatt radonmåling?
Nei Ja
22 Kjenner du til manglende brukstillatelse eller ferdigattest?
Nei Ja
23

---

[d001_2310692408845 | Side [1]]
4) benyttes, men at det fortsatt gjenstår arbeid før
Fellesgjeld Parkering
ferdigattest kan utstedes.
Kr 410 105 pr. 31.12.2025 Info om formuesverdi: Skatteetaten beregner en Det medfølger egen parkeringsplass i felles Merknader:
boligverdi (beregnet markedsverdi for bolig) basert på garasjeanlegg med elbil‑lader. ‑Tilkobling av snortrekk mellom 1.etg og røykluke.
Kjøperen må være inneforstått med at fellesgjelden i SSBs statistiske opplysninger om omsatte boliger. I Øvrig parkering etter områdets

---

[d001_2310692408845 | Side [1]]
13.2 - Vurdering av teknisk verdi
• 14.3 - Oppsummering
• Tabell A.1 (kun påfølgende deler): Punkt 22 (Geologiske forhold)
TG 2 Vesentlige avvik (alder, slitasje, skader mv.)
• Tabell A.3 - Undersøkelser av fellesdeler
• Tillegg C.2 - Tilstandsgrad for branntekniske forhold
Tilstandsgrad 2 gis når bygningsdelen har vesentlige avvik. Bygningsdelen skal enten ha feil utførelse, en skade eller symptomer på skade, sterk
Det er gjort et utvalg med prinsippet kost / nytte basert på avhendingsloven. Annen

---

[d001_2310692408845 | Side [1]]
ntet direkte fra kan føre til redusert ventilasjon. deler av det elektriske anlegget som er montert før 1999. Elgtråkket Borettslag
tilstandsrapporten: ‑Vannrør: Vannrør av kobber er vurdert til å ha en alder Varmtvannsbereder har ikke fast tilkobling, men er koblet
som tilsier at anbefalt brukstid er passert. På bakgrunn av med stikkontakt (konsekvens er fare for varmgang). Med Organisasjonsnummer: 953417766
Bygningen har støpt gulv mot grunn. Grunnmur, bærende alderen er det grunn til å varsle om risiko

---

[d001_2310692408845 | Side [1]]
 løpet av
Ytterligere undersøkelser anbefales slik at tiltak kan 2025.
Bygningsdeler vurdert med TG2: ØVRIGE ROM: iverksettes ved behov. Eiendommen har gnr. 103 og bnr. 303 i Rælingen
‑ Overflater vegger: Veggoverflater bærer preg av slitasje. kommune.
VÅTROM‑BAD: Tiltak kan iverksettes ved behov. Bygningsdeler vurdert med TG3: Ingen.
‑Vannrør: Vannrør av kobber er vurdert til å ha en alder ‑ Overflater gulv: Gulvoverflater bærer preg av slitasje. Informasjon hentet fra innkalling til årsmøte 2025:
som

---

[d001_2310692408845 | Side [1]]
lig slitasje
rapporten eldre enn dette må Anticimex AS kontaktes angående videre
Utgang fra stue til vestvendt balkong på 19 m2. Tilstandsgrad TG 2 (gul farge) benyttes i flere sammenhenger, blant bruk. Hvis rapporten skal benyttes ved videresalg innenfor
Balkong i betongkonstruksjoner med rekkverk av metall og glass. annet for å synliggjøre at enkelte bygningselementer ikke er nye (eldre gyldighetsperioden på 12 måneder, må det innhentes skriftlig tillatelse
Gulvoverflater er belagt med fliser. boliger)

---

[d001_2310692408845 | Side [1]]
n. Grunnmur, bærende alderen er det grunn til å varsle om risiko for skjulte avvik, bakgrunn i ovennevnte avvik bør det gjennomføres en
konstruksjoner og skillende dekker av betong med svekket funksjon, usikker restlevetid eller lignende forhold utvidet el‑kontroll av en kvalifisert elektrofaglig person Andelsnummer: 210
utfyllende bindingsverk. Utvendige fasader forblendet som utvikles over tid.
med teglstein, fasadeplater, malt betong/ mur og liggende ‑Overflater vegger: Veggoverflater bærer preg av

---

[d001_2310692408845 | Side [1]]
ort tid. Graden skal også brukes ved påvist funksjonssvikt eller sammenbrudd.
listet opp horisontalt i starten av hvert hovedelement. Hovedhensikten med denne tilstandsrapporten er å bidra til å vurdere boligens tilstand,
oppfylle selgers opplysningsplikt overfor kjøper av boligen, og gi den bygningssakkyndiges faglige vurderinger som gjelder byggetekniske forhold for Sjablongmessig prisanslag er gitt på generelt grunnlag og må ikke ses på som et pristilbud fra håndverker. Kostnader ved utbedring avhenger

---

[d001_2310692408845 | Side [1]]
 slitasjer og skader er vanlige og må forventes.
Tettesjiktet er skjult og ikke tilgjengelig for inspeksjon og alder/tilstand er ikke kjent. Primærkonstruksjoner som eksempelvis drenering, yttertak inklusive Yttertak besiktiges når stige på forhånd er reist og forsvarlig sikret, og i
Bygningsdelen er fuktutsatt. Ytterligere undersøkelser anbefales slik at tiltak kan undertak (under yttertak) og vann- og avløpsrør er skjulte elementer og tillegg den bygningssakkyndige på egen selvstendig vurdering

---

[d001_2310692408845 | Side [1]]
ns bestemmelser er tatt med. Dette gjelder for eksempel følgende bestemmelser:
Tilstandsgrad 1 gis når bygningsdelen har mindre avvik. Bygningsdelen skal bare ha normal slitasje, og strakstiltak skal ikke anses som nødvendig.
• 9 - Gjennomgang av dokumentasjon av boligen (kun påfølgende deler): Innhenting av informasjon fra kommunens tekniske etat Graden kan også brukes når delen er ny, men der dokumentasjon på faglig god utførelse mangler
• 13.2 - Vurdering av teknisk verdi
• 14.3 - Oppsummering
• Tabell

---

[d001_2310692408845 | Side [1]]
rapporten. Spesielt forhold som er vurdert
gulvareal som ikke er måleverdig på grunn av for Bad: med TG2 og TG3 bør vurderes nøye, da de indikerer avvik
Eiendommens
eksempel skråtak eller lav himlingshøyde. Arealet oppgis Bad fra ukjent årstall. Rommet har gulvbelegg og fra normal slitasje og/ eller høy alder, noe som kan
24 25

## Side 14

OM EIENDOMMEN OM EIENDOMMEN
innebære behov for utbedringer. Bygningsdeler som er kullfilter (ikke eget utkast) noe som kan medføre lavere ‑Elektrisk anlegg: Det er ikke

---

[d001_2310692408845 | Side [1]]
og fasade) Byggetegninger ikke fremlagt på befaringstidspunktet. har også den enkeltes ambisjonsniva betydning. ikkeautorisert el-fagmann sitt skjønn. Feil og skader som er skjulte/ikke
da den ble bygd og senere byggemeldingspliktige synlige, eller som av andre årsaker er for krevende å oppdage på
endringer Eksempler denne rapportens undersøkelsesnivå, kan derfor likevel kunne
forekomme.
Dokumentasjon på arbeider utført de siste fem år Ifølge huseier er det ikke utført arbeider på boligen de siste fem år.

---

[d001_2310692408845 | Side [1]]
ndig)
(eventuelt kryssmåling i ett rom), og i hvert rom er det 5 målepunkter. Stikkprøveprinsippet er benyttet.
Tilstandsgrad 3 gis når bygningsdelen har store eller alvorlige avvik. Bygningsdelen har kraftige symptomer på forhold som man må regne med
I rapporten har alle TG 2, TG 3 og TG IU kommentarer for bedre forståelse. De sjekkpunkter som har fått TG 0 og 1 (ikke funnet funksjonssvikt) er
trenger utbedring straks eller innen kort tid. Graden skal også brukes ved påvist funksjonssvikt eller

---

[d001_2310692408845 | Side [1]]
ell stakeluke er ikke lokalisert.
Ventilasjon Motor for mekanisk avtrekksventilasjon er felles for bygningen. Bygningsdelen er ikke
undersøkt.
EIENDOM |15074439, Elgtråkket 5A, 2014 BLYSTADLIA Side 10/14 EIENDOM |15074439, Elgtråkket 5A, 2014 BLYSTADLIA Side 11/14
52 53

## Side 28

Viktig om TG 2 Gyldighet
Balkonger, terrasser, veranda etc
Rapporten skal ikke være eldre enn 12 måneder (fra befaringsdato). Er
TG 2 beskriver også elde/naturlig slitasje
rapporten eldre enn dette må Anticimex AS kontaktes

---

[d001_2310692408845 | Side [1]]
litasje. Informasjon hentet fra innkalling til årsmøte 2025:
som tilsier at anbefalt brukstid er passert. På bakgrunn av Tiltak kan iverksettes ved behov. Bygningsdeler som ikke har blitt undersøkt (TGIU):
alderen er det grunn til å varsle om risiko for skjulte avvik, ‑ Innerdører: Enkelte innerdører har bærer preg av slitasje. ‑Ventilasjon: Motor for mekanisk avtrekksventilasjon er Styrets arbeid:
svekket funksjon, usikker restlevetid eller lignende forhold Utskiftning/ utbedring kan iverksettes ved

---

[d001_2310692408845 | Side [1]]
alg med prinsippet kost / nytte basert på avhendingsloven. Annen relevant bygningsteknisk erfaring og forståelse er også lagt til slitasje eller nedsatt funksjon. Graden gis når bygningsdelen trenger vedlikehold eller tiltak i nær fremtid.
grunn, herunder forhold som har registrerte høye klagefrekvenser og/eller skadesaker. Graden skal også brukes når delen er gammel og det er grunn til å varsle om faren for skader på grunn av alderen, eller når det er grunn til å
overvåke delen spesielt på grunn av fare

---

[d001_2310692408845 | Side [1]]
old
‑Avløpsrør (ink. sluk): Skjulte avløpsrør er av ukjent type, ‑Hovedstoppekran: Stoppekran er av eldre type. Anbefalt Gnr. 103, bnr. 303 · Startet planlegging av avfallshåndtering for erstatning
alder og tilstand. Bygningsdelen er ikke tilgjengelig for brukstid er passert. Oppfølging med jevnlig ettersyn i Rælingen kommune.Andelsnr. 210 i Elgtråkket av sjaktene.
undersøkelser. Restlevetiden er ukjent. anbefales slik at tiltak kan iverksettes ved behov. Borettslag med orgnr.

---

[d001_2310692408845 | Side [1]]
innerdører har bærer preg av slitasje. Utskiftning/utbedring kan iverksettes
ved behov.
TG 2 Forenklet vurdering av det Det er ikke fremlagt samsvarserklæring på det elektriske anlegget (tilstandsgrad
elektriske anlegget settes i henhold til NS3600).
Det er ikke fremlagt dokumentasjon på de deler av det elektriske anlegget som er
Etasjeskiller - Underetasje. montert før 1999.
Varmtvannsbereder har ikke fast tilkobling, men er koblet med stikkontakt
Etasjeskille av betong. (konsekvens er fare for

---

[d001_2310692408845 | Side [1]]
iseres der det er klargjort for det, og ellers
boligen tross alt bruksslitasjer. Helt normale og påregnelige
har tilfredsstillende og forsvarlig inspeksjonsmulighet.
vedlikeholdstiltak og kostnader må det alltid tas høyde for når
Branntekniske vurderinger bygningselementer når en viss alder. Ytterligere noen eksempler på hva den bygningssakkyndige ikke
vurderer:
Det er foretatt en forenklet vurdering av boligens branntekniske forhold opp mot dagens byggtekniske forskrift. Det legges vekt på at den Når en

---

[d001_2310692408845 | Side [1]]
NISKE ANLEGG VVS‑ANLEGG: avholdt 18 møter og behandlet saker, så som:
Det er ikke registrert synlige skader, men på bakgrunn av ‑Varmtvannsbereder: På bakgrunn av berederens alder er · Godkjenning av nye eiere
informasjon
alder er TG2 satt for å belyse risiko for fuktskader. det grunn til å varsle om usikker restlevetid eller andre · Budsjettering
‑Membran, tettesjikt og overgang til sluk: Tettesjiktet har forhold som utvikles over tid. Det kan ikke utelukkes · Regulering av felleskostnader
Adresse
en

---

[d001_2310692408845 | Side [1]]
ekran er plassert på bad. TG 1 Følgende sjekkpunkter er vurdert, uten at det er oppdaget vesentlige, store eller
Synlige avløpsrør i plast. alvorlige avvik:
Varmtvannsbereder på 194L (fra 2004) plassert på bad.
Mekanisk avtrekk på våtrom. Motor for mekanisk avtrekk er felles for bygningen Vinduer - Dører
TG 2 Hovedstoppekran Stoppekran er av eldre type. Anbefalt brukstid er passert. Oppfølging med jevnlig TG i Vinduer Vinduer er av eldre dato, og det må forventes høyere varmetap fra disse vinduene
ettersyn

---

[d001_2310692408845 | Side [1]]
t e g n is e e n t v fr a a r m se s l k o re m d e a n t noe er Eksempler på hva rapporten ikke vurderer
brukstid der vedlikeholdstiltak ikke må komme som en overraskelse. Tekniske installasjoner og innretninger er som hovedregel ikke vurdert,
da dette krever spisskompetanse på de ulike fagområdene. Årsak til
For å redusere unødvendige konflikter på grunn av urealistiske ulike skadesymptomer og skader kan være svært komplekse og er
TG 2 Terrasser/inntrukket Over deler av underetasjen utgjør overliggende

---

[d001_2310692408845 | Side [1]]
indelse med at det var tilgang fra stillasser på IN (Individuell nedbetaling): Renhold:
blokkene. Fyringskostnadene (gass) blir en god del Det er mulig, når prosjektet er ferdig, for borettslaget om Fra og med 2. januar 2024 er det Trappevask Service AS
Av andre større saker kan nevnes: høyere enn budsjett. Dette mest p.g.a. forsinkelsen i å gå til avtale om IN‑ordning. Individuell nedbetaling av som vasker felles‑arealene.
· Utført ekstraordinært vedlikehold. forbindelse med oppstarten på prosjektet.

---

[d001_2310692408845 | Side [1]]
 til dette var at balkongdørene i Elgtråkket jobbes med videre i 2025, isamarbeid med Bjørnefaret måtte byttes p.g.a. råteskader, år 2021. av budsjett for år: 2025 og årsregnskap for år: 2024.
5 og Bjørnefaret 2 og 4 fra første til fjerde etasje måtte borettslag, for å evt. å lage en felles løsning for begge ‑Gravd og lagt ny drenering i skråningen ved Bjørnefaret Dette kan interessenter få oversendt.
byttes p.g.a. for liten avstand fra balkong‑ gulvet til borettslagene. Egne avfallsbeholdere for matavfall

---

[d001_2310692408845 | Side [1]]
osjekt for rehabilitering av balkongene, år det skal signeres en dyrekontrakt. Henvendelse styret.
samarbeidsprosjekt med Bjørnefaret Borettslag. Rørfornying (Avløpsrør): 2023.
· Ferdigstille balkongrehabiliteringen. I noen leiligheter har det vært vannskader i forbindelse ‑Renset og lagt nytt epoxybelegg på noen kjellergulv i Forkjøpsrett: Dersom andel skifter eier, har andelseierne i
· Grundig taksjekk. med avløpsrørene. P.g.a. alder på avløpsrørene (de Elgtråkket 1 og 5, år 2023 borettslaget og dernest

---

[d001_2310692408845 | Side [1]]
til Åmotdammen, er fellesareal innebærer at borettslaget eier og disponerer Det gjøres oppmerksom på at rom som er innredet som
Restgjeld: 78 158 930 en av Rælingens mest populære badeplasser, og det over de aktuelle områdene i fellesskap. Dette gir ikke hver kontor ikke er godkjent for varig oppholdsrom.
Andel restgjeld: 271 698 finnes også flere vann innover marka. Videre er det turvei enkelt andel en eksklusiv rett til bruk eller å disponere
26.05.25 ‑ 31.12.58 over til Marikollen idrettspark med

---

[d001_2310692408845 | Side [1]]
rte et felles Elgtråkket 1 D, år 2022. § 4‑4.
I årsrapporten til generalforsamlingen 2024 informerte prosjekt for å se på hva slags løsninger som kan være ‑Vedlikehold/ maling fasader og vinduer mot øst. Ca 45
styret om at det ble en ekstrakostnad på ca kr. 5 000 aktuelt for begge borettslagene. Dette er noe som må vinduer ble skiftet grunnet råte og noe panel på fasaden Regnskap/ budsjett/ kostnadsøkninger: Megler har kopi
000,‑. Grunnen til dette var at balkongdørene i Elgtråkket jobbes med videre i

---

[d001_2310692408845 | Side [1]]
ktober 2023, ca 3 mnd. forsinket p.g.a. ekstra sjaktløsningen vi har i blokkene må erstattes med et forb. med oppussingen av fasadene mot øst fra, år borettslagets styre. Styret kan kun nekte godkjenning
generalforsamlinger. utvendig avfallshåndteringssystem. Styret har hatt møter 2021‑2022. ‑Pilotprosjekt. Etterisolering av karnapper dersom det foreligger saklig grunnlag, jf. borettslagsloven
med ROAF og Bjørnefaret borettslag for å starte et felles Elgtråkket 1 D, år 2022. § 4‑4.
I årsrapporten til

---

[d001_2310692408845 | Side [1]]
ne saken etter at Borettslaget har avtale med Automatikk‑service AS om
balkongene og karnappene. (Satt i gang, oktober 2023). totale lånekostnadene for dette prosjektet blir på ca kr. 78 balkong‑ prosjektet er ferdig. kamera‑overvåking.
Planlagt å være ferdig i løpet av våren 2025. 550 000,‑. Dette utgjør i gjennomsnitt ca kr. 293 000,‑ pr.
· Kondensproblemer i leilighet. (Utbedret). leilighet. Litt mindre på de minste leilighetene og litt mer Vedlikeholdshistorikk: Forretningsfører: Bori Bbl
·

---

[d001_2310692408845 | Side [1]]
aordinært vedlikehold. forbindelse med oppstarten på prosjektet. lånene borettslaget har. Dette er noe en
· Større planlagte vedlikeholdsarbeider for årene Som varslet på beboermøte som ble avholdt 29. oktober generalforsamling må vedta. Styret vil innkalle til en Vektertjeneste/ Kameraovervåking:
fremover: Fjerning av balkongkasser og oppussing av 2024 må lånet økes med totalt ca 10 000 000,‑ slik at de ekstraordinær generalforsamling for denne saken etter at Borettslaget har avtale med Automatikk‑service

---

[d001_2310692408845 | Side [1]]
 tilbake til opprinnelig godkjent
Andre kostnader:
sykkelveier i flotte omgivelser langs elva. stand.
Type eiendom
TV/ Internett/ Bredbånd: Leveres av Telenor.
Servicetilbud Eieform: Borettslag Ferdigattest/ brukstillatelse datert: 01.06.1979.
Dagligvarehandelen kan gjøres ved blant annet Kiwi
Formue:
Blystadlia og Coop Extra Løvenstad. Ønsker du ytterligere Objektstype: Andelsleilighet
Innhold
Andel fellesformue: Kr 36 160 pr. 31.12.2024 servicetilbud er det kort vei til Strømmen Storsenter med
22 23

##

---

[d001_2310692408845 | Side [1]]
øpsrørene (de Elgtråkket 1 og 5, år 2023 borettslaget og dernest de øvrige andelseierne i
· Vedlikehold av overbygg inngangspartier. begynner å nærme seg 50 år) blir ikke årsaken til Spyling/ rensing av avløps‑rør, år 2022. boligbyggelaget forkjøpsrett.
· Utskifting av lamper i oppgangene. skadene dekket av byggforsikringen vi har. Styret har ‑Gravd og lagt ny drenering og malt kjellernedgangene i
· Lage vedlikeholdsplaner for årene framover. derfor planlagt for at det må startes et prosjekt for å

---

[d001_2310692408845 | Side [1]]
 og litt mer Vedlikeholdshistorikk: Forretningsfører: Bori Bbl
· Serviceavtaler. på de større leilighetene. ‑Tømt og rengjort sandfang, år 2024.
· Utlevering av røykvarslere. ‑Installert strømstyringspanel for varme/ avtrekk på vifte Borettslagets forsikringsselskap: Protector Forsikring
Markiser: til Elgstua, år 2024.
Planer for årene fremover: Styret har invitert beboerne i hver blokk til demomøter for ‑Rehab. av balkonger og karnapper. Elgtråkket 5, 3 og 1 og Polisenummer fellesforsikring: 3051111/

---

[d001_2310692408845 | Side [1]]
pplysninger om omsatte boliger. I Øvrig parkering etter områdets gjeldende bestemmelser. ‑Beslag på taket ‑ gesimsbeslag.
sameiet og fellesutgiftene kan variere over tid, også at beregningen tas det hensyn til din boligs beliggenhet, ‑Ventilrist v/ inngang.
den kan øke som følge av beslutninger i sameiets styre areal, byggeår og type bolig. Formuesverdien er en ‑Utvendig trapp til underetasje.
Adkomst
eller generalforsamlinger. prosentandel av denne boligverdien.For mer informasjon ‑Utvendig planering.
om

---

[d001_2310692408845 | Side [1]]
et kan ikke utelukkes · Regulering av felleskostnader
Adresse
en alder som tilsier at restlevetiden er usikker. Rommets behov for reparasjon/ utskiftning. Jevnlig ettersyn · Internkontroll og oppdatering av HMS‑plan
lekkasjesikkerhet kan derfor ikke verifiseres, eventuelt bør anbefales slik at eventuelle tiltak kan iverksettes ved Elgtråkket 5A, 2014 BLYSTADLIA (Helse, Miljø og Sikkerhet)
nytt tettesjikt etableres. behov. · Løpende vedlikehold
‑Avløpsrør (ink. sluk): Skjulte avløpsrør er av ukjent type,

---

[d001_2310692408845 | Side [1]]
nomføring i
skjøter. Utskifting av våtromsplater bør påregnes. ‑ Skjevhetsmåling: Største målte avvik er målt til 8mm og er ikke lokalisert samarbeid med entreprenør og prosjektledelse fra BORI.
Våtromsplater bærer preg av slitasje/ skader. 22 mm i stue. Årsaken til skjevhetene er ikke vurdert.
Våtromsplater bør skiftes ut. Siden forrige ordinære generalforsamling har styret
Øvrig
‑Overflater gulv: Gulvbelegg er benyttet som fuktsikring. TEKNISKE ANLEGG VVS‑ANLEGG: avholdt 18 møter og behandlet saker, så

---

[d001_2310692408845 | Side [1]]
ramover. derfor planlagt for at det må startes et prosjekt for å Bjørnefaret 2 og 4 og Elgtråkket 5, år 2022. Forkjøpsretten avklares etter salg.
kartlegge tilstanden på alle avløpsrørene med sikte på ‑En del kjellergulv på garasjeplan er utbedret med ny Fristen for å gjøre forkjøpsretten gjeldende er 20 dager
Borettslaget har egen hjemmeside: www.elgtrakket.no. rørfornying. overflatebehandling, år 2022. fra borettslaget mottok melding om at andelen har skiftet
‑Oppgradering av styringssystemene på

---

[d001_2310692408845 | Side [1]]
mur og liggende ‑Overflater vegger: Veggoverflater bærer preg av slitasje BALKONGER, TERRASSER, VERANDA, ETC. Elgtråkket Borettslag ble stiftet 30.09.1976. Org. Nr.: 953
trekledning. Tilnærmet flat takkonstruksjon utvendig arbeid. Tiltak kan iverksettes ved behov. ‑Terrasser/ inntrukket balkong over innvendige rom: Over 417 766.
tekket med takpapp (ikke besiktiget). Leiligheten har ‑Innredning: Det er observert avflassing/ slitte flater. Tiltak deler av underetasjen utgjør overliggende terrasse en del

---

[d001_2310692408845 | Side [1]]
ttslaget opplyser at de har mottatt Bestemmelse om trafostasjon/ kiosk
ansvarlig for at opplysningene er korrekte. Navn: Kapasitetsøkning Rælingsåsen nabovarsel vedrørende planlagt bygging nedenfor Korrekt dagboksnr. er 103529 iht gammel grunnbok og
Status: Planlegging igangsatt. Blystadringen, dette vil i følge styret ikke berøre pantebokskopi
Dersom eier ikke har lagt frem energiattest, og eier etter Plantype: Detaljegulering. andelseierne i Bjørnefaret borettslag direkte utenom Forklaring: Elgtråkket

---

[d001_2310692408845 | Side [1]]
estemmelse om generende virksomhet gir samtidig stedsevarig rett til gjennomkjøring med
Planens formål: Hensikten med planen er å legge til rette Med flere bestemmelser kjøretøy fra Elgtråkket 5 til Elgtråkket 7.
Hvis et rom på visningen mangler fast installert for utviklingen av eiendommene i Blystadlia Vest til Forklaring: Overdragelse av gnr. 103, bnr. 303 fra Rælingen
oppvarmingskilde, vil ikke dette bli inkludert i handelen. boligformål i form av blokkbebyggelse. Området har en tomteselskap til

---

[d001_2310692408845 | Side [1]]
odt skog (Blystadlia)", ikrafttredelse 23.10.1973. boligformål i form av blokkbebyggelse. Området har en stolpefeste og legging av kabler og/ eller ledninger, samt
størrelse på ca. 46,7 daa. Det planlegges videre for plassering av transformatorstasjon på tomten. Det er en
Energifarge: Rød Eiendommen inngår i detaljreguleringsplan: "Elgtråkket i opparbeiding av felles leke‑ og rekreasjonsarealer, samt forutsetning at evt. stolper, ledninger og stolpetester
Blystadlia, gnr. 103, bnr. 415, m.fl.",

---

[d001_2310692408845 | Side [1]]
ormål i form av blokkbebyggelse. Området har en tomteselskap til Elgtråkket borettslag. Elgtråkket 18.12.2015 ‑ Dokumentnr: 1188363 ‑ Erklæring/ avtale
størrelse på ca. 46,7 daa. Det planlegges videre for borettslag er berettiget til å legge stikkledninger for vann, Rettighetshaver: Elvia AS
opparbeiding av felles leke‑ og rekreasjonsarealer, samt kloakk og overvann over tilstøtende tomter fram til Org.nr: 980 489 698
Regulering
trafikale løsninger i området. Nye gang‑ og hovedledninger etter godkjent plan

---

[d001_2310692408845 | Side [1]]
e i Bjørnefaret borettslag direkte utenom Forklaring: Elgtråkket borettslag som eier "Elgtråkket" gnr.
skriftlig anmodning fra kjøper ikke har fremlagt Formål: Hensikten med planen er å sikre at trafikken. 103, bnr. 303 gir herved Rælingen El‑verk rett til å bygge
energiattest før avtale om salg er inngått, kan kjøper få drikkevannsforsyningen er i henhold til krav som og for fremtida ha stående en koblingskiosk K3 på denne
laget en energiattest ved hjelp av ekspert for selgers Mattilsynet har stilt til

---

[d001_2310692408845 | Side [1]]
edninger og stolpetester
Blystadlia, gnr. 103, bnr. 415, m.fl.", ikrafttredelse 12.12.2018. trafikale løsninger i området. Nye gang‑ og plasseres slik at de blir minst mulig ulempe for
Delarealer: 54 kvm. sykkelforbindelser etableres. Det tas til sikte på å grunneieren. Videre kan tomten kun benyttes til
Info energiklasse
Formål: Annen veigrunn grønareal. planlegge for ca. 16 500 kvm BRA boligbebyggelse, noe boligbygg og ikke næringsvirksomhet uten
Alle eiendommer som selges eller leies ut skal ha en Felt:

---

[d001_2310692408845 | Side [1]]
å nevnes at det har vært brann i et av Vedtekter og ordensregler ligger vedlagt salgsoppgaven.
vedlikehold som også måtte utbedres. Bl.a. mye råte i søppelrommene, med full brannutrykning, samt et Vaktmestertjeneste: Øvrige dokumenter for borettslaget kan fås ved
28 29

## Side 16

OM EIENDOMMEN OM EIENDOMMEN
henvendelse til megler. nåværende i kommuneplanens arealdel 2022‑2033, som utgjør omtrent 143 leiligheter fordelt på to Mot erstatning for skade som oppstår har kommunen rett
ikrafttredelse

---

[d001_2310692408845 | Side [1]]
tale kartbaser for området og inneholder viktige opplysninger om eiendommen og området omkring.
Presentasjonen av informasjon er i samsvar med nasjonal standard.
Kartet kan inneholde feil, mangler eller avvik i forhold til kravene i oppgitt standard.
Kartet kan ikke benyttes til andre formål enn det formålet det er utlevert til uten samtykke fra kommunen jf. lov om åndsverk.

74 75

## Side 39

Reguleringsplankart Reguleringsplanforslag
Eiendom: 103/303

---

[d001_2310692408845 | Side [1]]
skiltet ved utstedt for ufullførte byggesaker/ bygningsmeldinger som
Beliggenhet
fellesvisninger for enkel orientering. er fra før 1998.
BOLIGBANKEN ASA ‑ 5,35% Leiligheten ligger i et populært og barnevennlig
Annuitetslån, Info pr 31.12.25 boligområde på Blystadlia i Rælingen kommune. Området Godkjente byggetegninger som er mottatt fra kommunen
Tomt
Term: 12 byr på stort sett alt man ønsker seg innen kort avstand. viser underetasje med en annen boligtype der denne
Restgjeld: 39 815 534 Det er bl.a. kort

---

[d001_2310692408845 | Side [1]]
 39

Reguleringsplankart Reguleringsplanforslag
Eiendom: 103/303 Eiendom: 103/303
Adresse: Elgtråkket 5A Adresse: Elgtråkket 5A
Utskriftsdato: 05.08.2025 Utskriftsdato: 05.08.2025
UTM-32 UTM-32
Rælingen kommune Målestokk: 1:2000 Rælingen kommune Målestokk: 1:2000
©Norkart 2025 ©Norkart 2025
Kartet er produsert fra kommunens beste digitale kartbaser for området og inneholder viktige opplysninger om eiendommen og området omkring. Kartet er produsert fra kommunens beste digitale kartbaser for området og

---

[d001_2310692408845 | Side [1]]
 uten
Alle eiendommer som selges eller leies ut skal ha en Felt: o_SVG5 som utgjør omtrent 143 leiligheter fordelt på to bygningsrådets skriftlige tillatelse.
energiattest. Unntak gjelder blant annet for frittstående byggområder
bygninger med et bruksareal mindre enn 50 m². Det er Reguleringsplaner under arbeid: 14.06.1978 ‑ Dokumentnr: 103529 ‑ Elektriske kraftlinjer
eier som har plikt til å fremlegge energiattest og er ID: 255 Styret i borettslaget opplyser at de har mottatt Bestemmelse om trafostasjon/

---

[d001_2310692408845 | Side [1]]
fellesdeler i
funksjonstesting av detektor og annet brannteknisk utstyr. Undersøkelsene er derfor begrenset til visuelle vurderinger og eiers informasjon. utbedringsbehov er påregnelig og normalt. sameier-borettslag og lignende, vurdering av energiforbruk,
Eksempler energimerking, støy, vibrasjoner, lydforhold, radonmålinger, inneklima,
Er det fremlagt et brannkonsept eller annen dokumentasjon av branntekniske forhold: Nei. miljø, elektromagnetisme, funksjonskrav (universell utforming,
Har boligen godkjent

---

[d001_2310692408845 | Side [1]]
iosken.
familiemedlemmer, ønsket innetemperatur, egne avtaler Se også: https:/ / www.ralingen.kommune.no/ eiendommens matrikkel ved overskjøting til ny
om energiforsyning med mer. Megler påtar seg ikke kapasitetsoekning‑raelingsaasen hjemmelshaver: 12.02.1980 ‑ Dokumentnr: 100778 ‑ Bestemmelse om veg
ansvar for informasjonen som fremgår av energiattesten. Med flere bestemmelser
Området mellom Blystadringen og Blystadvegen er 3224/ 103/ 303: Forklaring: Elgtråkket borettslag gir stedsevarig rett til

---

[d001_2310692408845 | Side [1]]
an ved skriftlig samtykke akseptere tegning av forsikring også i ovennevnte tilfeller.
Dersom forsikringsselskapet ikke har gitt skriftlig samtykke, kan erstatningen bortfalle.
Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter, begrenset til siste 12 måneder før overtakelse.
Forøvrig oppfordrer selger potensielle kjøpere til å undersøke eiendommen grundig, jf avhendigsloven § 3-10 og kjøpsloven § 20
(aksjeboliger).
Gyldig forsikring forutsetter at det for helårs- og

---

[d001_2310692408845 | Side [1]]
orsikring punkt 7.1 og forsikringsavtaleloven kapittel 4.
Jeg er orientert om mitt mulige ansvar som selger etter avhendingsloven, eventuelt etter kjøpsloven (aksjeboliger), og om forsikringsgiver sitt
boligselgerforsikringstilbud.
Jeg er klar over at avtale om forsikring er bindende. Jeg er også klar over at premietilbudet først kan påberopes når boligen er solgt
(budaksept). Premietilbudet som er gitt av megler er bindende for forsikringsgiver i 6 – seks – måneder fra oppdragsinngåelse med megler.
Etter

---

[d001_2310692408845 | Side [1]]
fellesareal eller i andre boliger)?
Nei Ja
Initialer selger: JAA 3
30006240
:ecnerefer
tnemucoD
Tilleggskommentar
Jeg bekrefter at opplysningene er gitt etter beste skjønn. Jeg er kjent med at dersom jeg har gitt ufullstendige, uriktige eller misvisende
opplysninger om eiendommen, vil forsikringsselskapet kunne søke hel eller delvis regress for sine utbetalinger eller redusere sitt ansvar helt
eller delvis, jfr. vilkår for boligselgerforsikring punkt 7.1 og forsikringsavtaleloven kapittel 4.
Jeg er

---

[d001_2310692408845 | Side [1]]
ringen når du kjøper en brukt
bolig. Da gjelder avhendingsloven. 6.
− Hvor: Hos eiendomsmegler senest ved medfølger. Innredning i garderobeskap, for eksempel løse eller fastmonterte trådkurver, hyller,
kontraktsmøte. stenger og lignende, medfølger.
− Hvordan: Krysses av i kjøpekontrakten.
Forsikringsbevis og vilkår sendes per e-post.
Forsikringen er meglet frem av Söderberg & Partners og soderbergpartners.no/eiendom
er

---

[d001_2310692408845 | Side [1]]
geiendommen. Gyldig forsikring forutsetter at det for helårs- og fritidsbolig
foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere bolighandel). Forsikringen er ugyldig dersom
den tegnes i strid med forsikringsvilkårene. Jeg er innforstått med at eiendomsmegleren ikke har fullmakt til å gjøre unntak fra
ovennevnte begrensninger. Jeg er oppmerksom på at 8% av total forsikringspremie er honorar til Söderberg & Partners.
Jeg ønsker ikke boligselgerforsikring, men megler har

---

[d001_2310692408845 | Side [1]]
port og selgers
egenerklæring. Kjøper anses for å være kjent med forhold Alle budgivere må ved inngivelse av bud opplyse om de
Radonmåling Forsikring
som er tydelig beskrevet i salgsdokumentene, slike opptrer som forbruker eller som næringsdrivende/ person
Selger har ikke utført radonmåling. Det er ikke krav om Boligselgerforsikring: Selger har ikke tegnet forhold kan ikke senere gjøres gjeldende som en mangel som handler hovedsakelig som ledd i næringsvirksomhet.
dette med mindre boligen er helt eller

---

[d001_2310692408845 | Side [1]]
:
Det gjøres oppmerksom på at vedlagte plantegninger informasjon om Boligkjøperforsikring fra Söderberg & rom og det som er godkjent av myndighetene. Alle Et forbrukerkjøp foreligger når en fysisk person kjøper
ikke stemmer hva gjelder faktisk innredning og møblering Partners. Boligkjøperforsikring er en rettshjelpsforsikring interessenter anbefales derfor å undersøke eiendommen eiendom uten at formålet hovedsakelig er knyttet til
etc. Den er ikke målbar, avvik og feil kan forekomme. som gir trygghet og

---

[d001_2310692408845 | Side [1]]
sjeboliger).
Gyldig forsikring forutsetter at det for helårs- og fritidsbolig foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere
bolighandel).
Jeg ønsker boligselgerforsikring, og bekrefter å ha mottatt og lest forsikringsvilkårene og informasjonsbrosjyre til selger i
forbindelse med kjøp av boligselgerforsikring. Forsikringen trer i kraft på det tidspunkt det foreligger en budaksept mellom partene,
begrenset til tolv måneder før overtagelse. Ved oppgjørsoppdrag trer

---

[d001_2310692408845 | Side [1]]
enset til tolv måneder før overtagelse. Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter,
begrenset til siste 12 måneder før overtakelse. Jeg bekrefter med dette at eiendommen ikke er en næringseiendom, at den ikke
selges som ledd i næringsvirksomhet eller mellom ektefeller eller slektninger i rett oppstigende eller nedstigende linje, søsken, eller
mellom personer som bor eller har bodd på boligeiendommen. Gyldig forsikring forutsetter at det for helårs- og

---

[d001_2310692408845 | Side [1]]

Med vår boligkjøperforsikring er du i trygge hender 
hvis du oppdager feil eller mangler ved boligen du har 
kjøpt. Forsikringen gir deg tilgang på hjelp fra advokater, Hva koster forsikringen?
saksbehandlere og jurister som er spesialiserte på Forsikringspremien trekkes i oppgjøret.

---

[d001_2310692408845 | Side [1]]
ledd i næringsvirksomhet.
dette med mindre boligen er helt eller delvis utleid. boligselgerforsikring. ved boligen. Dette gjelder uavhengig av om dokumentene Det vil opplyses hvis konkurrerende bud kommer fra en
er lest. ikke‑forbruker.
Boligkjøperforsikring: Kjøper har anledning til å tegne
Diverse
boligkjøperforsikring. Vedlagt i salgsoppgaven følger Det kan være forskjell mellom boligens faktiske bruk av Forbrukerkjøp – definisjon og vilkår:
Det gjøres oppmerksom på at vedlagte plantegninger informasjon

---

[d001_2310692408845 | Side [1]]
ver i 6 – seks – måneder fra oppdragsinngåelse med megler.
Etter dette vil premien og forsikringsvilkårene kunne justeres. Når premietilbudet ikke lenger er bindende for forsikringsselskapet må
egenerklæringsskjemaet signeres på nytt og eventuelle endringer påføres. Det vil da være forsikringspremien og forsikringsvilkårene på ny
signeringsdato som legges til grunn.
Det kan ikke tegnes boligselgerforsikring ved følgende salg:
mellom ektefeller eller slektninger i rett oppstigende eller nedstigenede linje,

---

[d001_2310692408845 | Side [1]]
r eller slektninger i rett oppstigende eller nedstigenede linje, søsken, eller
mellom personer som bor eller har bodd på boligeiendommen og/eller
når salget skjer som ledd i sikredes næringsvirksomhet/er en næringseiendom
etter at boligeiendommen er lagt ut for salg.
ved salg av helårs- og fritidsbolig er det krav til at det foreligger tilstandsrapport i henhold til Forskrift til avhendingslova (tryggere
bolighandel).
Forsikringsselskapet kan ved skriftlig samtykke akseptere tegning av forsikring også i

---

[d001_2310692408845 | Side [1]]
, har megler krav på rimelig vederlag for
oppfordres til å inngi bud via eiendomsmegler. gjennomføres eller blir forsinket, er dette et mislighold fra medgått tid og for utført arbeid. Dette omfatter blant
Ved slike kjøp selges eiendommen «som den er», og kjøpers side. Et vesentlig mislighold kan gi selger rett til å annet vederlag knyttet til tilrettelegging, markedsføring
selgers ansvar er begrenset til det som følger direkte av Megler skal legge til rette for en forsvarlig avvikling av heve avtalen og

---

[d001_2310692408845 | Side [1]]

− Spar verdifull tid
− Få advokatkostnadene dekket 
1.
2.
3.
Med vår boligkjøperforsikring er du i trygge hender

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "Borettslagets lån er avdragsfrie frem til desember 2025, og det er søkt om ytterligere avdragsfrihet. Lånet planlegges økt med ca. 10 000 000 kr, noe som vil øke felleskostnadene betydelig for andelseierne.",
      "evidence": [
        "Borettslagets lån er avdragsfrie frem til og med desember 2025. Det er søkt om avdragsfrihet også i...",
        "Som varslet på beboermøte som ble avholdt 29. oktober 2024 må lånet økes med totalt ca 10 000 000,‑ slik at de totale lånekostnadene for dette prosjektet blir på ca kr. 78 550 000,‑. Dette utgjør i gjennomsnitt ca kr. 293 000,‑ pr. leilighet.",
        "På grunn av prisstigning og renteøkning er det påregnelig at felleskostnadene økes etter utarbeidelse av denne salgsoppgaven."
      ],
      "source_documents": [
        "d001_2310692408845"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.98
    },
    {
      "risk_id": "R2",
      "description": "Høy fellesgjeld og usikker fremtidig kostnadsutvikling. Andel fellesgjeld er kr 410 105 pr. 31.12.2025, og felleskostnadene inkluderer stipulerte renter og avdrag som kan øke vesentlig når avdragsfriheten opphører.",
      "evidence": [
        "Fellesgjeld Kr 410 105 pr. 31.12.2025",
        "Felleskostnader kr. 4295,‑ Stipulerte avdrag kr. 739,‑ Stipulerte renter kr. 1590,‑ Total: kr. 6 624,‑",
        "Kjøperen må være inneforstått med at fellesgjelden i sameiet og fellesutgiftene kan variere over tid, også at den kan øke som følge av beslutninger i sameiets styre eller generalforsamlinger.",
        "Restgjeld: 78 158 930 / Andel restgjeld: 271 698"
      ],
      "source_documents": [
        "d001_2310692408845"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R3",
      "description": "Pågående og kostbart balkong- og karnapp-rehabiliteringsprosjekt. Det oppstod en ekstrakostnad på ca. 5 000 000 kr, og prosjektet er ikke ferdigstilt. Balkongdørene måtte byttes grunnet råteskader.",
      "evidence": [
        "I årsrapporten til generalforsamlingen 2024 informerte styret om at det ble en ekstrakostnad på ca kr. 5 000 000,‑. Grunnen til dette var at balkongdørene i Elgtråkket og Bjørnefaret måtte byttes p.g.a. råteskader, år 2021.",
        "Rehab. av balkonger og karnapper. Elgtråkket 5, 3 og 1 og Bjørnefaret 2 og 4 og Elgtråkket 5, år 2022.",
        "Planlagt å være ferdig i løpet av våren 2025."
      ],
      "source_documents": [
        "d001_2310692408845"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R4",
      "description": "Planlagt rørfornyingsprosjekt for avløpsrør. Avløpsrørene nærmer seg 50 år og vannskader har allerede oppstått i noen leiligheter. Kostnadene for dette prosjektet er ikke avklart, men vil sannsynligvis øke fellesgjelden ytterligere.",
      "evidence": [
        "I noen leiligheter har det vært vannskader i forbindelse med avløpsrørene. P.g.a. alder på avløpsrørene (de begynner å nærme seg 50 år) blir ikke årsaken til skadene dekket av byggforsikringen vi har.",
        "Styret har derfor planlagt for at det må startes et prosjekt for å kartlegge tilstanden på alle avløpsrørene med sikte på rørfornying.",
        "Avløpsrør (ink. sluk): Skjulte avløpsrør er av ukjent type, alder og tilstand. Bygningsdelen er ikke tilgjengelig for undersøkelser. Restlevetiden er ukjent."
      ],
      "source_documents": [
        "d001_2310692408845"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R5",
      "description": "Elektrisk anlegg har vesentlige avvik (TG2). Det mangler samsvarserklæring, ingen dokumentasjon på deler montert før 1999, og varmtvannsberederen er koblet til stikkontakt med fare for varmgang. Utvidet el-kontroll anbefales.",
      "evidence": [
        "Det er ikke fremlagt samsvarserklæring på det elektriske anlegget.",
        "Det er ikke fremlagt dokumentasjon på de deler av det elektriske anlegget som er montert før 1999.",
        "Varmtvannsbereder har ikke fast tilkobling, men er koblet med stikkontakt (konsekvens er fare for varmgang).",
        "På bakgrunn av ovennevnte avvik bør det gjennomføres en utvidet el-kontroll av en kvalifisert elektrofaglig person."
      ],
      "source_documents": [
        "d001_2310692408845"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R6",
      "description": "Vannrør av kobber har passert anbefalt brukstid, og det er risiko for skjulte avvik og svekket funksjon. Varmtvannsberederen (fra 2004) har usikker restlevetid.",
      "evidence": [
        "Vannrør: Vannrør av kobber er vurdert til å ha en alder som tilsier at anbefalt brukstid er passert. På bakgrunn av alderen er det grunn til å varsle om risiko for skjulte avvik, svekket funksjon, usikker restlevetid eller lignende forhold som utvikles over tid.",
        "Varmtvannsbereder på 194L (fra 2004) plassert på bad.",
        "Varmtvannsbereder: På bakgrunn av berederens alder er det grunn til å varsle om usikker restlevetid eller andre forhold som utvikles over tid. Det kan ikke utelukkes behov for reparasjon/utskiftning."
      ],
      "source_documents": [
        "d001_2310692408845"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.93
    },
    {
      "risk_id": "R7",
      "description": "Tettesjikt på bad er skjult og ikke tilgjengelig for inspeksjon. Alder og tilstand er ukjent, og lekkasjesikkerhet kan ikke verifiseres. Nytt tettesjikt kan bli nødvendig.",
      "evidence": [
        "Tettesjiktet er skjult og ikke tilgjengelig for inspeksjon og alder/tilstand er ikke kjent.",
        "Bygningsdelen er fuktutsatt. Ytterligere undersøkelser anbefales slik at tiltak kan iverksettes ved behov.",
        "Membran, tettesjikt og overgang til sluk: Tettesjiktet har en alder som tilsier at restlevetiden er usikker. Rommets lekkasjesikkerhet kan derfor ikke verifiseres, eventuelt bør nytt tettesjikt etableres."
      ],
      "source_documents": [
        "d001_2310692408845"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.93
    },
    {
      "risk_id": "R8",
      "description": "Våtromsplater bærer preg av slitasje og skader, og utskifting bør påregnes. Badet er fra ukjent årstall, noe som øker usikkerheten rundt tilstand og restlevetid.",
      "evidence": [
        "Utskifting av våtromsplater bør påregnes. Våtromsplater bærer preg av slitasje/skader. Våtromsplater bør skiftes ut.",
        "Bad fra ukjent årstall."
      ],
      "source_documents": [
        "d001_2310692408845"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R9",
      "description": "Skjevhetsmålinger viser avvik på opptil 22 mm i stue. Årsaken til skjevhetene er ikke vurdert, noe som kan indikere setningsskader eller konstruksjonsproblemer.",
      "evidence": [
        "Skjevhetsmåling: Største målte avvik er målt til 8mm og 22 mm i stue. Årsaken til skjevhetene er ikke vurdert."
      ],
      "source_documents": [
        "d001_2310692408845"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R10",
      "description": "Eiendommen ligger i et aktsomhetsområde for radon (moderat/lav), og selger har ikke utført radonmåling. Dette kan utgjøre en helserisiko for beboerne.",
      "evidence": [
        "Det gjøres oppmerksom på at eiendommen ligger i et aktsomhetsområde for radon (moderat/lav).",
        "Selger har ikke utført radonmåling."
      ],
      "source_documents": [
        "d001_2310692408845"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R11",
      "description": "Energikarakter G (rød) indikerer svært dårlig energieffektivitet. Vinduer er av eldre dato med høyere varmetap. Dette kan medføre høye strøm- og oppvarmingskostnader for kjøper.",
      "evidence": [
        "Energikarakter: G",
        "Energifarge: Rød",
        "Vinduer er av eldre dato, og det må forventes høyere varmetap fra disse vinduene."
      ],
      "source_documents": [
        "d001_2310692408845"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R12",
      "description": "Planlagt ny blokkbebyggelse i nærområdet (Kapasitetsøkning Rælingsåsen) med tre tunnelportaler og ca. 16 500 kvm BRA boligbebyggelse. Dette kan medføre støy, anleggsarbeid og endrede omgivelser i en lengre periode.",
      "evidence": [
        "Det planlegges for å etablere byggefelt A‑L slik vedlagte situasjonskart viser. Forbruket tre tunnelportaler, henholdsvis ved Nedre Rælingsveg, Sandbekken og Blystadringen.",
        "Det tas til sikte på å planlegge for ca. 16 500 kvm BRA boligbebyggelse.",
        "Status: Planlegging igangsatt. Plantype: Detaljregulering.",
        "Styret i borettslaget opplyser at de har mottatt nabovarsel vedrørende planlagt bygging nedenfor Blystadringen, dette vil i følge styret ikke berøre andelseierne i Bjørnefaret borettslag direkte."
      ],
      "source_documents": [
        "d001_2310692408845"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R13",
      "description": "Borettslaget har legalpant på inntil 2G i andelen. Dersom andre andelshavere misligholder sine felleskostnader, kan dette påvirke borettslagets økonomi og potensielt øke kostnadene for øvrige andelseiere.",
      "evidence": [
        "Borettslaget har legalpant på inntil 2G som sikkerhet for betaling av felleskostnader.",
        "Manglende innbetaling av fellesutgiftene som følge av andre andelshaveres mislighold, eller dersom borettslaget sitter på fraflyttede og/eller usolgte andeler, må dekkes av de øvrige andelseierne.",
        "Borettslaget har prioritet over tinglyste lån når det gjelder betaling av felleskostnader, og kan kreve inn pengene før andre kreditorer."
      ],
      "source_documents": [
        "d001_2310692408845"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R14",
      "description": "Ferdigattest er datert 01.06.1979, og godkjente byggetegninger viser en annen boligtype i underetasjen enn det som faktisk finnes. Kontor i underetasje er ikke godkjent for varig oppholdsrom – det kan foreligge ulovlige eller ikke-godkjente endringer.",
      "evidence": [
        "Ferdigattest/brukstillatelse datert: 01.06.1979.",
        "Godkjente byggetegninger som er mottatt fra kommunen viser underetasje med en annen boligtype der denne...",
        "Det gjøres oppmerksom på at rom som er innredet som kontor ikke er godkjent for varig oppholdsrom.",
        "Det er utstedt for ufullførte byggesaker/bygningsmeldinger som er fra før 1998."
      ],
      "source_documents": [
        "d001_2310692408845"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R15",
      "description": "Brann i søppelrom i borettslaget. Dette indikerer en sikkerhetsrisiko og kan ha medført skader på fellesarealer.",
      "evidence": [
        "Det kan nevnes at det har vært brann i et av søppelrommene, med full brannutrykning."
      ],
      "source_documents": [
        "d001_2310692408845"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.72
    },
    {
      "risk_id": "R16",
      "description": "Kullfilter på kjøkken uten eget utkast kan medføre redusert ventilasjon og dårligere inneklima i boligen.",
      "evidence": [
        "kullfilter (ikke eget utkast) noe som kan medføre lavere... (ventilasjon)",
        "kan føre til redusert ventilasjon."
      ],
      "source_documents": [
        "d001_2310692408845"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.78
    },
    {
      "risk_id": "R17",
      "description": "Stoppekran er av eldre type og anbefalt brukstid er passert. Dette øker risikoen for svikt ved behov for stenging av vann, noe som kan forverre eventuelle vannskader.",
      "evidence": [
        "Hovedstoppekran: Stoppekran er av eldre type. Anbefalt brukstid er passert. Oppfølging med jevnlig ettersyn anbefales slik at tiltak kan iverksettes ved behov."
      ],
      "source_documents": [
        "d001_2310692408845"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R18",
      "description": "Ventilasjonsmotoren for mekanisk avtrekk er felles for bygningen og er ikke undersøkt (TGIU). Tilstanden er ukjent, noe som medfører usikkerhet rundt inneklimaet i boligen.",
      "evidence": [
        "Ventilasjon: Motor for mekanisk avtrekksventilasjon er felles for bygningen. Bygningsdelen er ikke undersøkt.",
        "Ventilasjon: Motor for mekanisk avtrekksventilasjon er felles for bygningen og er ikke undersøkt (TGIU)."
      ],
      "source_documents": [
        "d001_2310692408845"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R19",
      "description": "Fyringskostnadene (gass) i borettslaget er blitt vesentlig høyere enn budsjettert, primært på grunn av forsinkelser i oppstarten av prosjektet. Dette kan indikere fremtidige budsjettavvik og økte felleskostnader.",
      "evidence": [
        "Fyringskostnadene (gass) blir en god del høyere enn budsjett. Dette mest p.g.a. forsinkelsen i forbindelse med oppstarten på prosjektet."
      ],
      "source_documents": [
        "d001_2310692408845"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.75
    },
    {
      "risk_id": "R20",
      "description": "Eiendommen er uregulert, men avsatt til boligbebyggelse. Fremtidig regulering kan medføre endringer i utnyttelse og omgivelser som er vanskelig å forutse på kjøpstidspunktet.",
      "evidence": [
        "Eiendommen ligger i et uregulert område, men er avsatt til boligbebyggelse."
      ],
      "source_documents": [
        "d001_2310692408845"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.68
    },
    {
      "risk_id": "R21",
      "description": "NY RISIKO: Terrasse over innvendig rom i underetasjen fungerer som takkonstruksjon og er fuktutsatt. Tettesjikt/membran er ikke besiktiget, og tilstanden er ukjent. Dette kan medføre fuktinntrenging og skjulte skader.",
      "evidence": [
        "Terrasser/inntrukket balkong over innvendige rom: Over deler av underetasjen utgjør overliggende terrasse en del av takkonstruksjonen.",
        "Bygningsdelen er fuktutsatt. Ytterligere undersøkelser anbefales slik at tiltak kan iverksettes ved behov."
      ],
      "source_documents": [
        "d001_2310692408845"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R22",
      "description": "NY RISIKO: Selger har ikke tegnet boligselgerforsikring. Dette kan svekke kjøpers mulighet til å få dekket eventuelle krav mot selger etter overtakelse.",
      "evidence": [
        "Boligselgerforsikring: Selger har ikke tegnet boligselgerforsikring."
      ],
      "source_documents": [
        "d001_2310692408845"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R23",
      "description": "NY RISIKO: Begrenset adgang til utleie i borettslaget. Kjøper som ønsker å leie ut boligen kan møte juridiske og praktiske hindringer, noe som begrenser fleksibiliteten.",
      "evidence": [
        "Adgang til utleie: Det er begrenset adgang til å leie ut."
      ],
      "source_documents": [
        "d001_2310692408845"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.75
    }
  ],
  "re_retrieval_queries": [
    "Hva er status for balkongrehabiliteringen per 2025 – er prosjektet ferdigstilt?",
    "Hva er de konkrete planene og estimerte kostnadene for rørfornyingsprosjektet?",
    "Hvilke spesifikke rom i underetasjen er ikke godkjent, og hva er konsekvensene for kjøper?",
    "Er det søkt om og innvilget ytterligere avdragsfrihet etter desember 2025?",
    "Hva er tilstanden på yttertaket og drenering rundt bygget?",
    "Er det dokumentert sopp, råte eller insektskader i fellesarealer eller andre leiligheter?",
    "Hva er de faktiske månedlige kostnadene etter at avdragsfriheten opphører?"
  ],
  "reasoning": "\nGjennomgangen av alle 20 identifiserte risikoer mot dokumentevidensen viser at samtlige er støttet av konkrete sitater fra salgsoppgaven. Følgende justeringer og vurderinger er gjort:\n\n**Oppjusterte risikoer:**\n- R1 (avdragsfrihet/låneøkning): Oppjustert til 0.98 – svært godt dokumentert med eksakte tall (10 MNOK økning, totalt 78,55 MNOK, 293 000 kr pr. leilighet i gjennomsnitt).\n- R2 (fellesgjeld): Oppjustert til 0.97 – dokumentet viser også total restgjeld på 78 158 930 kr og andel restgjeld på 271 698 kr, som forsterker risikoen ytterligere.\n- R14 (ulovlige endringer): Oppjustert til 0.90 – dokumentet bekrefter eksplisitt at kontor ikke er godkjent for varig oppholdsrom, og at byggetegninger avviker fra faktisk innredning.\n\n**Nedjusterte risikoer:**\n- R9 (skjevheter): Nedjustert til 0.82 – kun ett målepunkt er dokumentert, og årsaken er ikke vurdert. Evidensen er reell men begrenset.\n- R15 (brann i søppelrom): Nedjustert til 0.72 – hendelsen er nevnt, men det er ingen informasjon om omfang, tidspunkt eller etterfølgende utbedringer. Risikoen er historisk og ikke nødvendigvis pågående.\n- R19 (fyringskostnader): Nedjustert til 0.75 – dette er en historisk budsjettavvik knyttet til et spesifikt prosjekt, og det er usikkert om dette er en vedvarende risiko.\n- R20 (uregulert område): Nedjustert til 0.68 – eiendommen er allerede avsatt til boligbebyggelse, og det finnes eksisterende reguleringsplaner. Risikoen er reell men relativt lav.\n\n**Nye risikoer identifisert:**\n- R21: Terrasse over innvendig rom i underetasjen fungerer som takkonstruksjon og er fuktutsatt – dette er en konkret teknisk risiko som fremgår av tilstandsrapporten men ikke var eksplisitt identifisert.\n- R22: Selger har ikke tegnet boligselgerforsikring – dette er direkte dokumentert og er en relevant risiko for kjøper.\n- R23: Begrenset adgang til utleie i borettslaget – dette er nevnt i salgsoppgaven og er en praktisk risiko for kjøpere som ønsker utleiefleksibilitet.\n\n**Manglende informasjon som bør undersøkes nærmere:**\n- Konkret status for balkongrehabiliteringen (er den faktisk ferdig per salgsdag?)\n- Estimerte kostnader for rørfornyingsprosjektet\n- Detaljer om hvilke rom som ikke er godkjent og konsekvenser\n- Tilstand på yttertak og drenering\n- Eventuelle sopp/råteskader i fellesarealer\n"
}

## Raw Response
```json
{
  "id": "msg_015MjSsac7Ut3FziDQ2jBxub",
  "container": null,
  "content": [
    {
      "id": "toolu_01CuqpD7Uqbew2GyZ42h1s3A",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "Borettslagets lån er avdragsfrie frem til desember 2025, og det er søkt om ytterligere avdragsfrihet. Lånet planlegges økt med ca. 10 000 000 kr, noe som vil øke felleskostnadene betydelig for andelseierne.",
            "evidence": [
              "Borettslagets lån er avdragsfrie frem til og med desember 2025. Det er søkt om avdragsfrihet også i...",
              "Som varslet på beboermøte som ble avholdt 29. oktober 2024 må lånet økes med totalt ca 10 000 000,‑ slik at de totale lånekostnadene for dette prosjektet blir på ca kr. 78 550 000,‑. Dette utgjør i gjennomsnitt ca kr. 293 000,‑ pr. leilighet.",
              "På grunn av prisstigning og renteøkning er det påregnelig at felleskostnadene økes etter utarbeidelse av denne salgsoppgaven."
            ],
            "source_documents": [
              "d001_2310692408845"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.98
          },
          {
            "risk_id": "R2",
            "description": "Høy fellesgjeld og usikker fremtidig kostnadsutvikling. Andel fellesgjeld er kr 410 105 pr. 31.12.2025, og felleskostnadene inkluderer stipulerte renter og avdrag som kan øke vesentlig når avdragsfriheten opphører.",
            "evidence": [
              "Fellesgjeld Kr 410 105 pr. 31.12.2025",
              "Felleskostnader kr. 4295,‑ Stipulerte avdrag kr. 739,‑ Stipulerte renter kr. 1590,‑ Total: kr. 6 624,‑",
              "Kjøperen må være inneforstått med at fellesgjelden i sameiet og fellesutgiftene kan variere over tid, også at den kan øke som følge av beslutninger i sameiets styre eller generalforsamlinger.",
              "Restgjeld: 78 158 930 / Andel restgjeld: 271 698"
            ],
            "source_documents": [
              "d001_2310692408845"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R3",
            "description": "Pågående og kostbart balkong- og karnapp-rehabiliteringsprosjekt. Det oppstod en ekstrakostnad på ca. 5 000 000 kr, og prosjektet er ikke ferdigstilt. Balkongdørene måtte byttes grunnet råteskader.",
            "evidence": [
              "I årsrapporten til generalforsamlingen 2024 informerte styret om at det ble en ekstrakostnad på ca kr. 5 000 000,‑. Grunnen til dette var at balkongdørene i Elgtråkket og Bjørnefaret måtte byttes p.g.a. råteskader, år 2021.",
              "Rehab. av balkonger og karnapper. Elgtråkket 5, 3 og 1 og Bjørnefaret 2 og 4 og Elgtråkket 5, år 2022.",
              "Planlagt å være ferdig i løpet av våren 2025."
            ],
            "source_documents": [
              "d001_2310692408845"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R4",
            "description": "Planlagt rørfornyingsprosjekt for avløpsrør. Avløpsrørene nærmer seg 50 år og vannskader har allerede oppstått i noen leiligheter. Kostnadene for dette prosjektet er ikke avklart, men vil sannsynligvis øke fellesgjelden ytterligere.",
            "evidence": [
              "I noen leiligheter har det vært vannskader i forbindelse med avløpsrørene. P.g.a. alder på avløpsrørene (de begynner å nærme seg 50 år) blir ikke årsaken til skadene dekket av byggforsikringen vi har.",
              "Styret har derfor planlagt for at det må startes et prosjekt for å kartlegge tilstanden på alle avløpsrørene med sikte på rørfornying.",
              "Avløpsrør (ink. sluk): Skjulte avløpsrør er av ukjent type, alder og tilstand. Bygningsdelen er ikke tilgjengelig for undersøkelser. Restlevetiden er ukjent."
            ],
            "source_documents": [
              "d001_2310692408845"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R5",
            "description": "Elektrisk anlegg har vesentlige avvik (TG2). Det mangler samsvarserklæring, ingen dokumentasjon på deler montert før 1999, og varmtvannsberederen er koblet til stikkontakt med fare for varmgang. Utvidet el-kontroll anbefales.",
            "evidence": [
              "Det er ikke fremlagt samsvarserklæring på det elektriske anlegget.",
              "Det er ikke fremlagt dokumentasjon på de deler av det elektriske anlegget som er montert før 1999.",
              "Varmtvannsbereder har ikke fast tilkobling, men er koblet med stikkontakt (konsekvens er fare for varmgang).",
              "På bakgrunn av ovennevnte avvik bør det gjennomføres en utvidet el-kontroll av en kvalifisert elektrofaglig person."
            ],
            "source_documents": [
              "d001_2310692408845"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R6",
            "description": "Vannrør av kobber har passert anbefalt brukstid, og det er risiko for skjulte avvik og svekket funksjon. Varmtvannsberederen (fra 2004) har usikker restlevetid.",
            "evidence": [
              "Vannrør: Vannrør av kobber er vurdert til å ha en alder som tilsier at anbefalt brukstid er passert. På bakgrunn av alderen er det grunn til å varsle om risiko for skjulte avvik, svekket funksjon, usikker restlevetid eller lignende forhold som utvikles over tid.",
              "Varmtvannsbereder på 194L (fra 2004) plassert på bad.",
              "Varmtvannsbereder: På bakgrunn av berederens alder er det grunn til å varsle om usikker restlevetid eller andre forhold som utvikles over tid. Det kan ikke utelukkes behov for reparasjon/utskiftning."
            ],
            "source_documents": [
              "d001_2310692408845"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.93
          },
          {
            "risk_id": "R7",
            "description": "Tettesjikt på bad er skjult og ikke tilgjengelig for inspeksjon. Alder og tilstand er ukjent, og lekkasjesikkerhet kan ikke verifiseres. Nytt tettesjikt kan bli nødvendig.",
            "evidence": [
              "Tettesjiktet er skjult og ikke tilgjengelig for inspeksjon og alder/tilstand er ikke kjent.",
              "Bygningsdelen er fuktutsatt. Ytterligere undersøkelser anbefales slik at tiltak kan iverksettes ved behov.",
              "Membran, tettesjikt og overgang til sluk: Tettesjiktet har en alder som tilsier at restlevetiden er usikker. Rommets lekkasjesikkerhet kan derfor ikke verifiseres, eventuelt bør nytt tettesjikt etableres."
            ],
            "source_documents": [
              "d001_2310692408845"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.93
          },
          {
            "risk_id": "R8",
            "description": "Våtromsplater bærer preg av slitasje og skader, og utskifting bør påregnes. Badet er fra ukjent årstall, noe som øker usikkerheten rundt tilstand og restlevetid.",
            "evidence": [
              "Utskifting av våtromsplater bør påregnes. Våtromsplater bærer preg av slitasje/skader. Våtromsplater bør skiftes ut.",
              "Bad fra ukjent årstall."
            ],
            "source_documents": [
              "d001_2310692408845"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R9",
            "description": "Skjevhetsmålinger viser avvik på opptil 22 mm i stue. Årsaken til skjevhetene er ikke vurdert, noe som kan indikere setningsskader eller konstruksjonsproblemer.",
            "evidence": [
              "Skjevhetsmåling: Største målte avvik er målt til 8mm og 22 mm i stue. Årsaken til skjevhetene er ikke vurdert."
            ],
            "source_documents": [
              "d001_2310692408845"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R10",
            "description": "Eiendommen ligger i et aktsomhetsområde for radon (moderat/lav), og selger har ikke utført radonmåling. Dette kan utgjøre en helserisiko for beboerne.",
            "evidence": [
              "Det gjøres oppmerksom på at eiendommen ligger i et aktsomhetsområde for radon (moderat/lav).",
              "Selger har ikke utført radonmåling."
            ],
            "source_documents": [
              "d001_2310692408845"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R11",
            "description": "Energikarakter G (rød) indikerer svært dårlig energieffektivitet. Vinduer er av eldre dato med høyere varmetap. Dette kan medføre høye strøm- og oppvarmingskostnader for kjøper.",
            "evidence": [
              "Energikarakter: G",
              "Energifarge: Rød",
              "Vinduer er av eldre dato, og det må forventes høyere varmetap fra disse vinduene."
            ],
            "source_documents": [
              "d001_2310692408845"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R12",
            "description": "Planlagt ny blokkbebyggelse i nærområdet (Kapasitetsøkning Rælingsåsen) med tre tunnelportaler og ca. 16 500 kvm BRA boligbebyggelse. Dette kan medføre støy, anleggsarbeid og endrede omgivelser i en lengre periode.",
            "evidence": [
              "Det planlegges for å etablere byggefelt A‑L slik vedlagte situasjonskart viser. Forbruket tre tunnelportaler, henholdsvis ved Nedre Rælingsveg, Sandbekken og Blystadringen.",
              "Det tas til sikte på å planlegge for ca. 16 500 kvm BRA boligbebyggelse.",
              "Status: Planlegging igangsatt. Plantype: Detaljregulering.",
              "Styret i borettslaget opplyser at de har mottatt nabovarsel vedrørende planlagt bygging nedenfor Blystadringen, dette vil i følge styret ikke berøre andelseierne i Bjørnefaret borettslag direkte."
            ],
            "source_documents": [
              "d001_2310692408845"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R13",
            "description": "Borettslaget har legalpant på inntil 2G i andelen. Dersom andre andelshavere misligholder sine felleskostnader, kan dette påvirke borettslagets økonomi og potensielt øke kostnadene for øvrige andelseiere.",
            "evidence": [
              "Borettslaget har legalpant på inntil 2G som sikkerhet for betaling av felleskostnader.",
              "Manglende innbetaling av fellesutgiftene som følge av andre andelshaveres mislighold, eller dersom borettslaget sitter på fraflyttede og/eller usolgte andeler, må dekkes av de øvrige andelseierne.",
              "Borettslaget har prioritet over tinglyste lån når det gjelder betaling av felleskostnader, og kan kreve inn pengene før andre kreditorer."
            ],
            "source_documents": [
              "d001_2310692408845"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R14",
            "description": "Ferdigattest er datert 01.06.1979, og godkjente byggetegninger viser en annen boligtype i underetasjen enn det som faktisk finnes. Kontor i underetasje er ikke godkjent for varig oppholdsrom – det kan foreligge ulovlige eller ikke-godkjente endringer.",
            "evidence": [
              "Ferdigattest/brukstillatelse datert: 01.06.1979.",
              "Godkjente byggetegninger som er mottatt fra kommunen viser underetasje med en annen boligtype der denne...",
              "Det gjøres oppmerksom på at rom som er innredet som kontor ikke er godkjent for varig oppholdsrom.",
              "Det er utstedt for ufullførte byggesaker/bygningsmeldinger som er fra før 1998."
            ],
            "source_documents": [
              "d001_2310692408845"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R15",
            "description": "Brann i søppelrom i borettslaget. Dette indikerer en sikkerhetsrisiko og kan ha medført skader på fellesarealer.",
            "evidence": [
              "Det kan nevnes at det har vært brann i et av søppelrommene, med full brannutrykning."
            ],
            "source_documents": [
              "d001_2310692408845"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.72
          },
          {
            "risk_id": "R16",
            "description": "Kullfilter på kjøkken uten eget utkast kan medføre redusert ventilasjon og dårligere inneklima i boligen.",
            "evidence": [
              "kullfilter (ikke eget utkast) noe som kan medføre lavere... (ventilasjon)",
              "kan føre til redusert ventilasjon."
            ],
            "source_documents": [
              "d001_2310692408845"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.78
          },
          {
            "risk_id": "R17",
            "description": "Stoppekran er av eldre type og anbefalt brukstid er passert. Dette øker risikoen for svikt ved behov for stenging av vann, noe som kan forverre eventuelle vannskader.",
            "evidence": [
              "Hovedstoppekran: Stoppekran er av eldre type. Anbefalt brukstid er passert. Oppfølging med jevnlig ettersyn anbefales slik at tiltak kan iverksettes ved behov."
            ],
            "source_documents": [
              "d001_2310692408845"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R18",
            "description": "Ventilasjonsmotoren for mekanisk avtrekk er felles for bygningen og er ikke undersøkt (TGIU). Tilstanden er ukjent, noe som medfører usikkerhet rundt inneklimaet i boligen.",
            "evidence": [
              "Ventilasjon: Motor for mekanisk avtrekksventilasjon er felles for bygningen. Bygningsdelen er ikke undersøkt.",
              "Ventilasjon: Motor for mekanisk avtrekksventilasjon er felles for bygningen og er ikke undersøkt (TGIU)."
            ],
            "source_documents": [
              "d001_2310692408845"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R19",
            "description": "Fyringskostnadene (gass) i borettslaget er blitt vesentlig høyere enn budsjettert, primært på grunn av forsinkelser i oppstarten av prosjektet. Dette kan indikere fremtidige budsjettavvik og økte felleskostnader.",
            "evidence": [
              "Fyringskostnadene (gass) blir en god del høyere enn budsjett. Dette mest p.g.a. forsinkelsen i forbindelse med oppstarten på prosjektet."
            ],
            "source_documents": [
              "d001_2310692408845"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.75
          },
          {
            "risk_id": "R20",
            "description": "Eiendommen er uregulert, men avsatt til boligbebyggelse. Fremtidig regulering kan medføre endringer i utnyttelse og omgivelser som er vanskelig å forutse på kjøpstidspunktet.",
            "evidence": [
              "Eiendommen ligger i et uregulert område, men er avsatt til boligbebyggelse."
            ],
            "source_documents": [
              "d001_2310692408845"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.68
          },
          {
            "risk_id": "R21",
            "description": "NY RISIKO: Terrasse over innvendig rom i underetasjen fungerer som takkonstruksjon og er fuktutsatt. Tettesjikt/membran er ikke besiktiget, og tilstanden er ukjent. Dette kan medføre fuktinntrenging og skjulte skader.",
            "evidence": [
              "Terrasser/inntrukket balkong over innvendige rom: Over deler av underetasjen utgjør overliggende terrasse en del av takkonstruksjonen.",
              "Bygningsdelen er fuktutsatt. Ytterligere undersøkelser anbefales slik at tiltak kan iverksettes ved behov."
            ],
            "source_documents": [
              "d001_2310692408845"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R22",
            "description": "NY RISIKO: Selger har ikke tegnet boligselgerforsikring. Dette kan svekke kjøpers mulighet til å få dekket eventuelle krav mot selger etter overtakelse.",
            "evidence": [
              "Boligselgerforsikring: Selger har ikke tegnet boligselgerforsikring."
            ],
            "source_documents": [
              "d001_2310692408845"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R23",
            "description": "NY RISIKO: Begrenset adgang til utleie i borettslaget. Kjøper som ønsker å leie ut boligen kan møte juridiske og praktiske hindringer, noe som begrenser fleksibiliteten.",
            "evidence": [
              "Adgang til utleie: Det er begrenset adgang til å leie ut."
            ],
            "source_documents": [
              "d001_2310692408845"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.75
          }
        ],
        "re_retrieval_queries": [
          "Hva er status for balkongrehabiliteringen per 2025 – er prosjektet ferdigstilt?",
          "Hva er de konkrete planene og estimerte kostnadene for rørfornyingsprosjektet?",
          "Hvilke spesifikke rom i underetasjen er ikke godkjent, og hva er konsekvensene for kjøper?",
          "Er det søkt om og innvilget ytterligere avdragsfrihet etter desember 2025?",
          "Hva er tilstanden på yttertaket og drenering rundt bygget?",
          "Er det dokumentert sopp, råte eller insektskader i fellesarealer eller andre leiligheter?",
          "Hva er de faktiske månedlige kostnadene etter at avdragsfriheten opphører?"
        ],
        "reasoning": "\nGjennomgangen av alle 20 identifiserte risikoer mot dokumentevidensen viser at samtlige er støttet av konkrete sitater fra salgsoppgaven. Følgende justeringer og vurderinger er gjort:\n\n**Oppjusterte risikoer:**\n- R1 (avdragsfrihet/låneøkning): Oppjustert til 0.98 – svært godt dokumentert med eksakte tall (10 MNOK økning, totalt 78,55 MNOK, 293 000 kr pr. leilighet i gjennomsnitt).\n- R2 (fellesgjeld): Oppjustert til 0.97 – dokumentet viser også total restgjeld på 78 158 930 kr og andel restgjeld på 271 698 kr, som forsterker risikoen ytterligere.\n- R14 (ulovlige endringer): Oppjustert til 0.90 – dokumentet bekrefter eksplisitt at kontor ikke er godkjent for varig oppholdsrom, og at byggetegninger avviker fra faktisk innredning.\n\n**Nedjusterte risikoer:**\n- R9 (skjevheter): Nedjustert til 0.82 – kun ett målepunkt er dokumentert, og årsaken er ikke vurdert. Evidensen er reell men begrenset.\n- R15 (brann i søppelrom): Nedjustert til 0.72 – hendelsen er nevnt, men det er ingen informasjon om omfang, tidspunkt eller etterfølgende utbedringer. Risikoen er historisk og ikke nødvendigvis pågående.\n- R19 (fyringskostnader): Nedjustert til 0.75 – dette er en historisk budsjettavvik knyttet til et spesifikt prosjekt, og det er usikkert om dette er en vedvarende risiko.\n- R20 (uregulert område): Nedjustert til 0.68 – eiendommen er allerede avsatt til boligbebyggelse, og det finnes eksisterende reguleringsplaner. Risikoen er reell men relativt lav.\n\n**Nye risikoer identifisert:**\n- R21: Terrasse over innvendig rom i underetasjen fungerer som takkonstruksjon og er fuktutsatt – dette er en konkret teknisk risiko som fremgår av tilstandsrapporten men ikke var eksplisitt identifisert.\n- R22: Selger har ikke tegnet boligselgerforsikring – dette er direkte dokumentert og er en relevant risiko for kjøper.\n- R23: Begrenset adgang til utleie i borettslaget – dette er nevnt i salgsoppgaven og er en praktisk risiko for kjøpere som ønsker utleiefleksibilitet.\n\n**Manglende informasjon som bør undersøkes nærmere:**\n- Konkret status for balkongrehabiliteringen (er den faktisk ferdig per salgsdag?)\n- Estimerte kostnader for rørfornyingsprosjektet\n- Detaljer om hvilke rom som ikke er godkjent og konsekvenser\n- Tilstand på yttertak og drenering\n- Eventuelle sopp/råteskader i fellesarealer\n"
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
    "input_tokens": 21916,
    "output_tokens": 6535,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
