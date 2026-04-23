# Trace: agentic_reflecting_iter1
- **Run ID:** 2211bc1c-07b3-47e3-b25c-e35eb9dff757
- **Tidspunkt:** 2026-03-23T18:37:27.809759+00:00
- **Varighet:** 133.16s
- **Input tokens:** 24838
- **Output tokens:** 6965

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
Risiko 1: Støysoner (rød og gul sone T-1442): Eiendommen berøres av hensynssone H210 (Rød sone) og H220 (Gul sone) etter støyretningslinjen T-1442. Dette kan medføre støyplager fra omgivelsene og begrensninger på fremtidig utbygging.
  Confidence: 0.92
  Evidens: Hensynssone H210 (Rød sone T‑1442) og H220 (Gul sone T‑1442): Støysoner. Før det gis igangsettingstillatelse for boliger innenfor sonene, skal det dokumenteres at grenseverdier for lydklasse C i NS 8175 tabell 5 er ivaretatt.; 210 - Rød sone T-1442 og 220 - Gul sone T-1442 er registrert som hensynssoner på eiendommen.

Risiko 2: Flomfare (hensynssone H320): Eiendommen er berørt av hensynssone for flomfare i kommuneplanen. Spesifikke bestemmelser for sonen er ikke angitt i de vedlagte dokumentene, noe som skaper usikkerhet om konsekvensene.
  Confidence: 0.88
  Evidens: Hensynssone H320 (Flomfare): Sonen er fastsatt i kommuneplanen. Spesifikke bestemmelser for sonen er ikke angitt i de vedlagte dokumentene.; 320 - Flomfare er registrert som hensynssone i Kommuneplan Fredrikstad 2023–2035.

Risiko 3: Frisiktsone H140: Innenfor frisiktsonen tillates ikke sikthindrende gjenstander høyere enn 0,5 meter over tilstøtende vegers plan. Dette begrenser bruken av deler av eiendommen og kan påvirke beplantning og innredning av utearealer.
  Confidence: 0.85
  Evidens: Hensynssone H140 (Frisiktsone): Innenfor sonen tillates ikke sikthindrende gjenstander høyere enn 0,5 meter over tilstøtende vegers plan.

Risiko 4: Stedsevarig rett til Elvia AS: Det er tinglyst en erklæring/avtale som gir Elvia AS (strømleverandør) stedsevarig rett til bygging, drift, vedlikehold og fornyelse av installasjoner på eiendommen, samt bestemmelse om transport, ferdsel, byggeforbud og beplantning. Dette kan begrense eiers rådighet over eiendommen.
  Confidence: 0.9
  Evidens: 07.07.2016 ‑ Dokumentnr: 622063 ‑ Erklæring/avtale. Rettighetshaver: Elvia AS. Org.nr: 980 489 698. Bestemmelse om stedsevarig rett til bygging, drift, vedlikehold og fornyelse. Bestemmelse om transport og ferdsel. Bestemmelse om byggeforbud og beplantning.

Risiko 5: Manglende radonmåling: Det er ikke foretatt radonmålinger i forbindelse med tilstandsrapporten. Radon kan utgjøre en helserisiko, og manglende dokumentasjon gir kjøper usikkerhet om radonforholdene i boligen.
  Confidence: 0.85
  Evidens: Det ikke foretatt radonmålinger i forbindelsen med tilstandsrapporten. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid.

Risiko 6: Manglende samsvarserklæring for elektrisk anlegg: Det foreligger ikke samsvarserklæring for elektrisk arbeid utført etter 1.1.1999, og installasjonsdato er ukjent. Dette kan indikere at elektriske arbeider ikke er utført av godkjent virksomhet eller ikke er dokumentert i henhold til krav.
  Confidence: 0.92
  Evidens: Er det elektriske anlegget utført eller er det foretatt tilleggsarbeider på det elektriske anlegget etter 1.1.1999? ‑ Ja. Eksisterer det samsvarserklæring? ‑ Nei.; Når ble det elektriske anlegget installert eller sist gang totalt rehabilitert (årstall)? ‑ Ukjent.; det kan være utført andre arbeider på det elektriske anlegget som ikke har samsvarserklæring.

Risiko 7: Manglende dokumentasjon på service av varmepumpe (luft-til-luft): Dokumentasjon på utført service av luft-til-luft varmepumpen ble ikke fremlagt ved befaring. Dette gir TG2 og innebærer usikkerhet om anleggets tilstand og levetid.
  Confidence: 0.88
  Evidens: Tekniske installasjoner ‑ Andre VVS‑installasjoner | Luft‑til‑luft varmepumpe. Dokumentasjon på utført service ble ikke fremlagt ved befaring.

Risiko 8: Værslitt balkongdør (TG2): Balkongdøren er påvist å være noe værslitt, noe som kan kreve tiltak ved forverring. Dette er vurdert med TG2 i tilstandsrapporten.
  Confidence: 0.85
  Evidens: Utvendig ‑ Balkongdør | Det ble påvist noe værslitt balkongdør. Overvåk døren jevnlig, ved forverring bør det utføres tiltak.

Risiko 9: Avvik på baderomsgulv (TG2): Overflater på gulv i bad i 2. etasje er vurdert med TG2, noe som indikerer vesentlige avvik og potensielt behov for utbedring.
  Confidence: 0.85
  Evidens: Våtrom > 2. etasje > Bad > Overflater Gulv – listet under 'AVVIK SOM KAN KREVE TILTAK' i tilstandsrapporten.

Risiko 10: Konstruksjoner ikke undersøkt (TGIU): Taktekking, pipe/ildsted og terrengforhold er ikke undersøkt av takstmann. Dette innebærer usikkerhet om tilstanden til disse bygningsdelene.
  Confidence: 0.9
  Evidens: KONSTRUKSJONER SOM IKKE ER UNDERSØKT: Utvendig > Taktekking, Innvendig > Pipe og ildsted, Tomteforhold > Terrengforhold.

Risiko 11: Drenering fra byggeår uten mulighet for kontroll: Drenering og utvendig fuktsikring er fra byggeår, og materialvalg kan ikke konstateres da det er skjult i byggegrunn. Dette innebærer risiko for fuktproblemer over tid.
  Confidence: 0.8
  Evidens: Drenering/utv. fuktsikring fra byggeår. Grunnet skjult i byggegrunn er materialvalg ikke mulig å konstantere.

Risiko 12: Underskudd i sameiet i 2024: Sameiet hadde et driftsunderskudd på kr 19 163 i 2024, som skyldes høyere kostnader til drift og vedlikehold. Selv om budsjettet for 2025 er positivt, kan dette indikere en trend med økte kostnader som kan påvirke fremtidige felleskostnader.
  Confidence: 0.82
  Evidens: I 2024 ble det registrert et underskudd på kr 19 163, som i hovedsak ser ut til å skyldes noe høyere kostnader til drift og vedlikehold sammenlignet med tidligere år.; DRIFTSRESULTAT -19 163 (2024) mot 50 851 (2023).; SUM DRIFTSKOSTNADER -628 203 (2024) mot -541 253 (2023).

Risiko 13: Høye kostnader til ventilasjonsanlegg og manglende felles service i 2024: Sameiet hadde kostnader på kr 129 600 til drift/vedlikehold av ventilasjonsanlegg, og styret gjennomførte ikke felles service på ventilasjonsanlegget i alle seksjoner i 2024. Dette kan medføre fremtidige vedlikeholdsbehov og kostnadsøkninger.
  Confidence: 0.8
  Evidens: Drift/vedlikehold ventilasjonsanlegg -129 600.; Styret har i 2024 ikke gjennomført felles service på ventilasjonsanlegget i alle seksjoner.

Risiko 14: Legalpant og prioritet: Kommunen har legalpant med høyere prioritet enn sameiets legalpant, og sameiet har legalpant på inntil 2G i seksjonen. Dette innebærer at kjøper kan bli ansvarlig for tidligere seksjonseiers misligholdte forpliktelser.
  Confidence: 0.88
  Evidens: Kommunen har legalpant som sikkerhet for betaling av kommunale avgifter og eventuell eiendomsskatt.; De øvrige seksjonseierne i sameiet har legalpant på inntil 2G som sikkerhet for krav knyttet til sameieforholdet, som felleskostnader.; Legalpant er pant som ikke vises i grunnboksutskriften, og har prioritet foran tinglyste lån, for eksempel banklån på seksjonen.; Legalpant til kommunen har høyere prioritet enn legalpant til sameiet.

Risiko 15: Privat stikkledning og vedlikeholdsansvar: Stikkledningene fra eiendommen til det kommunale nettet er private, og vedlikeholdsansvaret påhviler sameiet. Dette kan medføre uforutsette kostnader ved fremtidige reparasjoner.
  Confidence: 0.82
  Evidens: Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler sameiet.

Risiko 16: Veilag med vedtekter og forpliktelser: Det er etablert et veilag mellom Rødsberget Boligsameie og naboeiendommer. Sameiet er forpliktet til å bidra til vedlikehold, brøyting, strøing og skadeutbedring av felles vei, noe som kan medføre løpende kostnader og forpliktelser.
  Confidence: 0.78
  Evidens: Det er etablert et veilag med vedtekter pr 25.05.2020 mellom Rødsberget Boligsameie gnr 52 bnr 16 (52/16) og gnr 53 og bnr 2.; Laget skal sørge for at Veien holdes i forsvarlig og brukelig stand, og skal herunder besørge vedlikehold, brøyting, evt. strøing og nødvendig skadeutbedring på Veien.

Risiko 17: Egenandel på kr 10 000 ved prisavslag/erstatningskrav: Kjøper må selv dekke kostnader med inntil kr 10 000 som egenandel ved krav om prisavslag eller erstatning. Dette kan redusere kjøpers reelle kompensasjon ved eventuelle mangler.
  Confidence: 0.85
  Evidens: Ved beregning av krav om prisavslag eller erstatning må kjøper selv dekke kostnader med inntil kr 10 000 (som en egenandel).

Risiko 18: Sameiet mangler sikringsordning: Sameiet har ingen sikringsordning for felleskostnader. Dette innebærer at dersom en seksjonseier ikke betaler sine felleskostnader, kan de øvrige seksjonseierne bli belastet for dette.
  Confidence: 0.8
  Evidens: Sameiet har ikke sikringsordning. De andre seksjonseierne har lovbestemt panterett i seksjonen for krav mot seksjonseieren som følger av sameieforholdet.

Risiko 19: Oppgitt areal er 0 m² i matrikkelen: Matrikkelen viser oppgitt areal som 0 m², mens beregnet areal er 141,5 m². Dette kan indikere manglende eller feil registrering i offentlige registre, og kan skape usikkerhet om eiendommens faktiske areal.
  Confidence: 0.75
  Evidens: Bruksnr 16 Oppgitt areal 0 m2 Kulturminne Nei. Festenr 0 Beregnet areal 141,5 m2.; Historisk oppgitt areal 0.0. Historisk arealkilde 0 - Ikke oppgitt.

Risiko 20: Kjøper forpliktet til å signere standard kjøpekontrakt utarbeidet av Emera: Kjøper og selger er forpliktet til å benytte en standardkontrakt utarbeidet av eiendomsmegleren (Emera). Dette kan begrense kjøpers mulighet til å forhandle om kontraktsvilkårene.
  Confidence: 0.72
  Evidens: Kjøper og selger er forpliktet til å signere den standard kjøpekontrakten utarbeidet av Emera som en del av eiendomshandleren.

Dokumentkontekst:
[d011_d011 | Side [1]]
et kan variere fra husstand til husstand.
Tinglyste heftelser og rettigheter: På eiendommen er det
tinglyst følgende heftelser og rettigheter som følger
Regulerings og arealplaner
eiendommens matrikkel ved overskjøting til ny
Eiendommen er regulert til konsentrert hjemmelshaver:
småhusbebyggelse innenfor felt BK6, i henhold til
Detaljreguleringsplan for Gamle Rødsvei 1 (plan‑ID 1058), 3107/ 52/ 16/ 20:
vedtatt 11.09.2014. 07.07.2016 ‑ Dokumentnr: 622063 ‑ Erklæring/ avtale
Rettighetshaver: Elvia

---

[d011_d011 | Side [1]]
kkelrapport
Seksjon 3107-52/16/0/20
Matrikkelrapport for Seksjon 3107-52/16/0/20
Bruksnavn Beregnet areal 141.5
Etablert dato 14.06.2017 Historisk oppgitt areal 0.0
Oppdatert dato 22.09.2025 Historisk arealkilde 0 - Ikke oppgitt
Skyld 0 Antall teiger 2
Kommunenummer 3107 Kommunenavn FREDRIKSTAD
Tinglyst Avklarte eiere Har festegrunn
Bestående Har grunnforurensning Mangel matrikkelføring
Seksjonert Har kulturminner Har anmerket klage
Tinglyste eierforhold
Navn Pers.nr/org.nr. Rolle Status Adresse Andel
NORA

---

[d011_d011 | Side [1]]
 inntil 2G som sikkerhet for krav knyttet til ansvarlige overfor sameiets kreditorer i forhold til sin
sameieforholdet, som felleskostnader. Legalpant er pant sameiebrøk. Ved manglende betaling av fellesutgifter har
som ikke vises i grunnboksutskriften, og har prioritet sameiet legal panterett i den enkelte eierseksjon,
foran tinglyste lån, for eksempel banklån på seksjonen. begrenset til inntil 2 ganger folketrygdens grunnbeløp.
Legalpant til kommunen har høyere prioritet enn
legalpant til sameiet. Kjøper

---

[d011_d011 | Side [1]]
endring Det informeres om at ingen kan eie mer enn to
Tidligere: Knr:3004 Gnr:52 Bnr:16 Snr:20 boligseksjoner i sameiet, i henhold til eierseksjonsloven §
23. Seksjoner som eies av nærstående eller gjennom et
Legalpant: Kommunen har legalpant som sikkerhet for firma regnes også med.
betaling av kommunale avgifter og eventuell
eiendomsskatt. De øvrige seksjonseierne i sameiet har I henhold til eierseksjonsloven § 31 er sameierne
legalpant på inntil 2G som sikkerhet for krav knyttet til ansvarlige overfor

---

[d011_d011 | Side [1]]
vedtak som kan medføre endringer i bruken av
eiendommen eller av dens omgivelser?
Nei Ja
Initialer selger: NGL 2
60006210
:ecnerefer
tnemucoD
72

## Side 73

20 Kjenner du til om det foreligger påbud/heftelser/krav/manglende tillatelser vedrørende eiendommen?
Nei Ja
21 Er det foretatt radonmåling?
Nei Ja
22 Kjenner du til manglende brukstillatelse eller ferdigattest?
Nei Ja
23 Kjenner du til om det foreligger skaderapporter/ tilstandsvurderinger eller utførte målinger?
Nei Ja
24 Er det andre forhold av

---

[d011_d011 | Side [1]]
mange matrikkelenheter og bygg hefter usikkerhet ved arealet som oppgis.
Avdeling Geomatikk, Fredrikstad kommune 27.01.2026
163

## Side 164

EIENDOMSINFORMASJON FRA KOMTEK
3107 Fredrikstad - 52/16/0/20
Eierrepresentant: Larsen Nora Gondrosen
Regningsmottaker: Larsen Nora Gondrosen
OPPLYSNINGER FRA MATRIKKELEN
Type Seksjon Bruksnavn Grunnforurensing Nei
Kommune 3107 Fredrikstad Tinglyst Ja Har festegrunner Nei
Gårdsnr 52 Seksjonert Nei Punktfeste Nei
Bruksnr 16 Oppgitt areal 0 m2 Kulturminne Nei
Festenr 0

---

[d011_d011 | Side [1]]
 kommunen har høyere prioritet enn
legalpant til sameiet. Kjøper og selger er forpliktet til å signere den standard
kjøpekontrakten utarbeidet av Emera som en del av
eiendomshandleren. Kjøpekontrakten kan gjennomgås
Vei, vann og avløp
hos eiendomsmegler før budet legges inn. Kontakt
Eiendommen er tilknyttet offentlig vann‑ og eiendomsmegler for eventuelle spørsmål.
avløpssystem. Stikkledningene fra eiendommen og ut til
det kommunale nettet er private, og Selger leverer eiendommen i ryddig og rengjort

---

[d011_d011 | Side [1]]
et er private, og Selger leverer eiendommen i ryddig og rengjort stand.
vedlikeholdsansvaret for disse påhviler sameiet.
65

## Side 66

OM EIENDOMMEN
Selger har opplyst at egen gårdsplass må måkes. avhendingsloven § 3‑5.
Foto: Stig Heltorp. En standard tilbehørsliste utarbeidet av Norges
Eiendomsmeglerforbund (NEF) følger salgsoppgaven, og
gjelder som utgangspunkt for hva som inkluderes i salget
Kontrakts‑
– med mindre avvik er tydelig avtalt mellom kjøper og
selger.
grunnlag
Om

---

[d011_d011 | Side [1]]
ensynssone H140 (Frisiktsone): Innenfor sonen tillates Med flere bestemmelser
ikke sikthindrende gjenstander høyere enn 0,5 meter Overført fra: Knr:3107 Gnr:52 Bnr:16
over tilstøtende vegers plan. Gjelder denne registerenheten med flere
‑ Hensynssone H210 (Rød sone T‑1442) og H220 (Gul
sone T‑1442): Støysoner. Før det gis
igangsettingstillatelse for boliger innenfor sonene, skal 15.06.2022 ‑ Dokumentnr: 643358 ‑ Bestemmelse om
64

## Side 65

OM EIENDOMMEN
vann/k loakk Adkomst til eiendommen skjer via

---

[d011_d011 | Side [1]]
 ‑ Dokumentnr: 622063 ‑ Erklæring/ avtale
Rettighetshaver: Elvia AS
Eiendommen omfattes av Kommuneplan Fredrikstad Org.nr: 980 489 698
2023 – 2035 (plan‑ID 913), vedtatt 15.06.2023. Bestemmelse om stedsevarig rett til bygging, drift,
Arealbruken er i planen avsatt til bebyggelse og anlegg. vedlikehold og fornyelse
Bestemmelse om transport og ferdsel
Eiendommen berøres av følgende hensynssoner: Bestemmelse om byggeforbud og beplantning
‑ Hensynssone H140 (Frisiktsone): Innenfor sonen tillates Med flere

---

[d011_d011 | Side [1]]
 reklameres
vedlagte materiell eller på https:/ / på forhold som burde ha vært oppdaget ved en ordinær
www.soderbergpartners.no/ eiendom/ boligkjoper/ gjennomgang.
Dersom det oppstår behov for ytterligere avklaringer,
Lovanvendelse
oppfordres interessenter til å kontakte eiendomsmegler
Regelverk og generelle opplysninger eller egne rådgivere før de gir bud.
Boligen selges med det inventar og utstyr som i henhold
til gjeldende lover, forskrifter eller offentlige pålegg skal Slitasje og bruk
følge med

---

[d011_d011 | Side [1]]
nglysingsgebyr ‑ hjemmel)
Eiendomsskatt
545 (Tinglysningsgebyr ‑ pantedokument)
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ Kr 6 803,‑ (2026)
133 590 (Omkostninger totalt (uten
Boligkjøperforsikring)) Årsprognose for 2026 er kr. 6 803‑, gitt 27.01.2026.
147 090 (Omkostninger totalt (med
Boligkjøperforsikring))
Kommunale avgifter
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ Kr 18 552 (2026)
5 433 590 (Totalpris inkl. omkostninger (uten
Boligkjøperforsikring)) Informasjon: Kommunale

---

[d011_d011 | Side [1]]
ringer eller utførte målinger?
Nei Ja
24 Er det andre forhold av betydning ved eiendommen som kan være relevant for kjøper å vite om (f.eks. rasfare, tinglyste forhold eller private
avtaler)?
Nei Ja
Spørsmål for bolig i sameie/borettslag/boligaksjeselskap:
25 Kjenner du til om sameiet/laget/selskapet er involvert i tvister av noe slag?
Nei Ja
26 Kjenner du til vedtak/forslag til vedtak om forhold vedr. eiendommen som kan medføre økte felleskostnader/økt fellesgjeld?
Nei Ja
27 Kjenner du til om det er/har

---

[d011_d011 | Side [1]]
ca. 5,7 m².
Lovlighet
Byggetegninger
Det foreligger godkjente og byggemeldte tegninger, som stemmer med dagens bruk
Nyere håndverkstjenester
Er det ifølge eier u琀昀ørt håndverkstjenester på boligen siste 5 år? Ja Nei
Kommentar: Se selger egenerklæring.
Oppdragsnr.: 22541-1118 Befaringsdato: 28.01.2026 Side: 16 av 19
94

## Side 95

Rødsberget 6, 1622 GRESSVIK NIELSEN TAKST OG ENERGIRÅDGIVER AS
Gnr 52 - Bnr 16 Hagastuveien 21B
3107 FREDRIKSTAD 1734 HAFSLUNDSØY
Befarings - og

---

[d011_d011 | Side [1]]
kelføringsdato
Kulturminner
Kategori Art Vernetype Matrikkelført Lokalitetsnummer
Krav om jordskifte
Jordskiftereferanse Ført dato
27.01.2026 side 1 av 3 Rapporten er levert av Geodata AS
175

## Side 176

Matrikkelrapport
Seksjon 3107-52/16/0/20
Grunnerverv
Grunnervervreferanse Ført dato
Klage
Klagereferanse Gjelder Ført dato
Teiger
Avklart Flere mat. Ureg.
Hovedteig Tvist Datafangstdato Ber.areal Arealmerknad
eiere enheter jordsameie
75.7
65.8
Bygninger
Bygningsnr Lnr Type Status
300572498 0 131 -

---

[d011_d011 | Side [1]]
ått en avtale med staten, en
fylkeskommune eller en kommune om å skaffe boliger til vanskeligstilte
(4) Sameiets styre skal underrettes skriftlig om alle overdragelser og leieforhold. Det samme
gjelder ny seksjonseiers/leietakers navn og kontaktinformasjon. Ved eierskifte betales et
eierskiftegebyr.
(5) Nye begrensninger i rettslig disposisjonsrett krever samtykke fra de som berøres.
3. Seksjonseierens rett til å bruke bruksenheten og fellesarealene
3-1 Rett til bruk
(1) Seksjonseieren har enerett til å

---

[d011_d011 | Side [1]]
kke angitt noen krav til
Tilleggsdel: Grunn botid eller ventetid før utleie kan finne sted.
Sameiebrøk: 102/ 2991
Radonmåling
01.01.2020 ‑ Dokumentnr: 1756156 ‑ Omnummerering ved Det ikke foretatt radonmålinger i forbindelsen med
kommuneendring tilstandsrapporten. Det er ikke krav om dette med mindre
Tidligere: Knr:0106 Gnr:52 Bnr:16 Snr:20 boligen er helt eller delvis utleid.
Diverse
01.01.2024 ‑ Dokumentnr: 698477 ‑ Omnummerering ved
kommuneendring Det informeres om at ingen kan eie mer enn to
Tidligere:

---

[d011_d011 | Side [1]]
ostnader/økt fellesgjeld?
Nei Ja
27 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr i sameiet/laget/selskapet (fellesareal eller i andre boliger) som rotter, mus,
maur eller lignende?
Nei Ja
28 Kjenner du til om det er/har vært skjeggkre i sameiet/laget/selskapet (fellesareal eller i andre boliger)?
Nei Ja
Initialer selger: NGL 3
60006210
:ecnerefer
tnemucoD
73

## Side 74

Tilleggskommentar
Jeg bekrefter at opplysningene er gitt etter beste skjønn. Jeg er kjent med at dersom jeg har

---

[d011_d011 | Side [1]]
tat.
ligger på vibbo.
Vedtekter/ husordensregler
Det er etablert et veilag med vedtekter pr 25.05.2020
mellom Rødsberget Boligsameie gnr 52 bnr 16 (52/ 16) og Vedtekter og husordensregler ligger vedlagt
gnr 53 og bnr 2. Avtalen og tilhørende vedtekter ligger salgsoppgaven.
vedlagt salgsoppgaven.
‑ Laget skal sørge for at Veien holdes i forsvarlig og
Beboernes forpliktelser og
brukelig stand, og skal herunder besørge vedlikehold,
brøyting, evt. strøing og nødvendig skadeutbedring på
dugnader
Veien.
‑ Laget

---

[d011_d011 | Side [1]]
este Nei
Bruksnr 16 Oppgitt areal 0 m2 Kulturminne Nei
Festenr 0 Beregnet areal 141,5 m2
Seksjonsnr 20
BYGNINGER (Antall: 1)
Bygningsnr. Type Status Næringsgruppe Bygningsendring Bruksareal
300572498 Rekkehus Ferdigattest Bolig 101,9
TINGLYSTE EIERE (Antall: 1)
Eier Adresse Postnr/Sted Eierandel Rolle
LARSEN NORA GONDROSEN Rødsberget 6 1622 GRESSVIK 1/1 Hjemmelshaver
KOMMUNALE AVGIFTER I KOMTEK
Vare Grunnlag Enhetspris Fra Andel Korr% Årsbeløp inkl. mva
153 BRANNTILSYN 1 LØP 1,001 løp kr 488,00 01.03.2026

---

[d011_d011 | Side [1]]
TG1: MINDRE AVVIK
Bygningsdelen skal bare ha normal slitasje, og straks琀椀ltak skal ikke anses som nødvendig. Graden kan også
brukes når delen er ny, men der dokumentasjon på faglig god u琀昀ørelse mangler.
TILSTANDSGRAD 2, TG2: VESENTLIGE AVVIK OG MINDRE AVVIK SOM ETTER NS 3600 GIR TG 2
Bygningsdelen skal enten ha feil u琀昀ørelse, en skade eller symptomer på skade, sterk slitasje eller nedsa琀琀
funksjon. Graden gis når bygningsdelen trenger vedlikehold eller 琀椀ltak i nær frem琀椀d. Graden skal også brukes
når

---

[d011_d011 | Side [1]]
 utført funksjonsprøving av bygningsdeler, som
isolasjon, piper, ventilasjon, elektrisk anlegg, osv.
PRESISERINGER
•det gis ikke en vurdering av boligens tilbehør, hvite- og
brunevarer og annet inventar. Dette gjelder også integrert
Tilstandsrapporten gjelder hovedbygget. Tilleggsbygninger, som tilbehør.
for eksempel garasje, gis kun en enkel beskrivelse.
•inspisering av yttertak er basert på det som er synlig, normalt på
Avvik er vurdert ut fra tekniske forskrifter på innsiden fra loftet og utvendig fra

---

[d011_d011 | Side [1]]
et
De琀琀e punktet inneholder tydelige og le琀琀 synlige forhold ved boligen som åpenbart kan påvirke helse, miljø og sikkerhet, og som bygningssakkyndige har
oppdaget. Terskelen for hva som anses som åpenbart er høy, og det u琀昀øres ikke undersøkelser med sikte på å avdekke slike forhold. Punktet omfa琀琀er ikke
skjulte eller ikke-synlige forhold, tekniske vurderinger eller forhold som krever spesialundersøkelser. Forhold vurderes e琀琀er byggteknisk forskri昀琀 på
befarings琀椀dpunktet.
Vurdering av avvik:
• Det er

---

[d011_d011 | Side [1]]
en bygningssakkyndig?
Den bygningssakkyndige vurderer boligen ut fra hva man kan forvente av en bygning av samme alder
og type. Vurderingen gjøres som regel mot hvordan det var vanlig å bygge og regler som gjaldt da
boligen ble oppført (søknads琀椀dspunktet). Forhold som er vanlige for bygningens alder, slik som slitasje
e琀琀er normal bruk regnes ikke som avvik.
Hva inneholder 琀椀lstandsrapporten?
Den bygningssakkyndige undersøker rom og bygningsdeler slik det kommer frem av Forskri昀琀 琀椀l
avhendingsloven.

---

[d011_d011 | Side [1]]
bruk reduserer boligens funksjon og verdi, og som kommer frem av Forskri昀琀 琀椀l
og vær og vind. Mange boliger fornyes helt eller delvis, noen i 昀氀ere avhendingslova.
omganger, eller det oppføres 琀椀lbygg. Særlig for boliger som er
pusset opp eller endret, er det vik琀椀g å merke seg at fornyelse av
over昀氀ater ikke nødvendigvis betyr at bygningsdeler under er
forbedret.
Tilstandsrapporten beskriver ikke hele boligen
BYGNINGSSAKKYNDIGE SER FOR EKSEMPEL IKKE PÅ
• vanlig slitasje og normal vedlikeholds琀椀lstand •

---

[d011_d011 | Side [1]]
og forhold som tilgjengelige flater uten fysiske inngrep (f.eks. riving).
gjelder sikkerhet mot brann, rekkverk og trapper osv., vil den
bygningssakkyndige vurdere mot dagens regelverk. Etter dagens
•flater som er skjult av snø eller på annen måte ikke er tilgjengelig
regelverk vil disse kunne få en tilstandsgrad 2 eller 3 uten at det
eller skjult, blir ikke kontrollert.
nødvendigvis er krav om at avviket må utbedres.
•det blir ikke utført funksjonsprøving av bygningsdeler, som
isolasjon, piper,

---

[d011_d011 | Side [1]]
椀ltak
TG3: Store eller alvorlige avvik
TG IU: Konstruksjoner som ikke er undersøkt
Enebolig i rekke
KONSTRUKSJONER SOM IKKE ER UNDERSØKT
Utvendig > Taktekking Gå til side
Innvendig > Pipe og ildsted Gå til side
Tomteforhold > Terrengforhold Gå til side
AVVIK SOM KAN KREVE TILTAK
Utvendig > Balkongdør Gå til side
Tekniske installasjoner > Andre VVS-installasjoner Gå til side
Våtrom > 2. etasje > Bad > Over昀氀ater Gulv Gå til side
HELSE, MILJØ OG SIKKERHET
Oppdragsnr.: 22541-1118 Befaringsdato: 28.01.2026

---

[d011_d011 | Side [1]]
anløsning • bygningens innredning • løsøre slik som hvitevarer • utendørs svømmebasseng og pumpeanlegg • bygningens este琀椀kk og
arkitektur • bygningens lovlighet (bortse琀琀 fra bruksendringer, brannceller og forhold som åpenbart kan påvirke helse, miljø og sikkerhet) •
fellesarealer (med mindre boligeier har vedlikeholdsplikt for fellesarealer og de琀琀e er kjent for bygningssakkyndig, eller fellesarealet har en særlig
琀椀lknytning 琀椀l boligen).
© iVerdi 2023
Malen 琀椀l denne rapporten, inkludert

---

[d011_d011 | Side [1]]

•Fastmonterte installasjoner, for eksempel innfelt belysning og •Tilstand: byggverkets eller bygningsdelens tekniske, funksjonelle
høyttalere, skal ikke demonteres for å sjekke dampsperren bak. eller estetiske status på et gitt tidspunkt.
Dette er av hensyn til bygningssakkyndiges kompetanse og
risikoen for skade.
•Symptom: forhold som gir indikasjon på hvilken tilstand et
byggverk eller en bygningsdel befinner seg i. Benyttes ved
•Kontroll av fukt i konstruksjonen ved hulltaking i bad og beskrivelse av

---

[d011_d011 | Side [1]]
er ved boligen ut over det som fremgår av tilstandsgradene.
•For anbefalte tiltak ved TG2 og TG3 må du vurdere om tiltakene Rapporten gir en vurdering av byggverk og bygningsdeler som
er nødvendige og lønnsomme. Hva det vil koste å utbedre rom bygningssakkyndig har observert, og som fremkommer av
eller bygningsdeler vil avhenge av registrerte avvik og tiltak som forskrift til avhendingslova. Rapporten er likevel ingen garanti for
kommer frem i rapporten. Anslaget er gitt på generelt grunnlag at det ikke

---

[d011_d011 | Side [1]]
DGIVER AS
Gnr 52 - Bnr 16 Hagastuveien 21B
3107 FREDRIKSTAD 1734 HAFSLUNDSØY
Forutsetninger
Tilstandsrapportens avgrensninger foreligger godkjente og byggemeldte tegninger, eller når tegninger
ikke stemmer med dagens bruk.
STRUKTUR OG REFERANSENIVÅ
•Bygningssakkyndig gir en forenklet vurdering av branntekniske
forhold og elektriske installasjoner i boligen hvis det er mer enn
•Rapporten baserer seg på krav i forskrift til avhendingslova fem år siden siste el-tilsyn. Ved behov for grundigere
(tryggere

---

[d011_d011 | Side [1]]
e og lønnsomme.
Når den bygningssakkyndige velger 琀椀lstandsgrad, baseres vurderingen på faste kriterier som følger av gjeldende bransjestandard for Teknisk
琀椀lstandsanalyse ved omsetning av bolig og Forskri昀琀 琀椀l avhendingslova.
TILSTANDSGRAD 0, TG0: INGEN AVVIK
Bygningsdelen skal være 琀椀lnærmet ny, ikke vise tegn på slitasje og det skal være lagt frem dokumentasjon på
faglig god u琀昀ørelse. Det er ingen merknader 琀椀l delen.
TILSTANDSGRAD 1, TG1: MINDRE AVVIK
Bygningsdelen skal bare ha normal slitasje, og

---

[d011_d011 | Side [1]]
 avvik)? dets alder, allmenne tilstand og fare for liv og helse. Bør
‑ Nei det elektriske anlegget ha en utvidet el‑kontroll?
Når ble det elektriske anlegget installert eller sist gang ‑ Nei
totalt rehabilitert (årstall)? Med totalt rehabilitert menes
fullstendig utskiftet anlegg fra inntakssikring og videre.
‑ Ukjent Bygningsdeler vurdert med TG2:
Er alle elektriske arbeider/ anlegg i boligen utført av en
registrert elektroinstallasjonsvirksomhet? ‑ Utvendig ‑ Balkongdør | Det ble påvist noe værslitt
‑ Ja

---

[d011_d011 | Side [1]]
 P-areal og S-areal. TILLEGGSUNDERSØKELSER
•Bygningssakkyndig er ikke ansvarlig for tilbakeholdt eller uriktig Etter avtale med eier kan tilstandsanalysen utvides til også å
informasjon, som har betydning for tilstandsvurderingen. omfatte tilleggsundersøkelser utover minimumskravet i forskriften.
Rapporten beskriver avvik, det vil si en tilstand som er dårligere
enn referansenivået. Rapporten vil normalt ikke fremheve positive BEFARINGEN
sider ved boligen ut over det som fremgår av tilstandsgradene.
•For

---

[d011_d011 | Side [1]]
t annet vurdert ut fra alder og normal bruk. Ved Tilstandsgrad 0 (TG0) og Tilstandsgrad 1
(TG1) gir den bygningssakkyndige normalt ingen begrunnelse for valg av 琀椀lstandsgrad. Grunnen er at bygningen eller bygningsdelen da bare har
normal slitasje. Ved skjulte konstruksjoner kan alder alene avgjøre 琀椀lstandsgrad. Når bygningssakkyndige anbefaler 琀椀ltak, for eksempel
utbedringer, må brukeren av rapporten vurdere om 琀椀ltakene er nødvendige og lønnsomme.
Når den bygningssakkyndige velger 琀椀lstandsgrad,

---

[d011_d011 | Side [1]]
mhet? ‑ Utvendig ‑ Balkongdør | Det ble påvist noe værslitt
‑ Ja balkongdør. Overvåk døren jevnlig, ved forverring bør det
Er det elektriske anlegget utført eller er det foretatt utføres tiltak.
tilleggsarbeider på det elektriske anlegget etter 1.1.1999?
‑ Ja ‑ Tekniske installasjoner ‑ Andre VVS‑installasjoner |
Eksisterer det samsvarserklæring? Luft‑til‑luft varmepumpe. Dokumentasjon på utført
‑ Nei service ble ikke fremlagt ved befaring. Dokumentasjon
Foreligger det kontrollrapport fra offentlig

---

[d011_d011 | Side [1]]
EMPEL IKKE PÅ
• vanlig slitasje og normal vedlikeholds琀椀lstand • bagatellmessige forhold som ikke påvirker bygningens bruk eller verdi vesentlig • etasjeskillere •
琀椀lleggsbygg slik som garasje, bod, anneks, naust også videre • utvendige trapper • stø琀琀emurer • skjulte installasjoner • installasjoner utenfor
bygningen • full funksjonstes琀椀ng av el- og VVS-installasjoner • geologiske forhold og bygningens plassering på grunnen • bygningens
planløsning • bygningens innredning • løsøre slik som hvitevarer •

---

[d011_d011 | Side [1]]
 fra tekniske forskrifter på innsiden fra loftet og utvendig fra stige/bakkenivå. I en del
godkjenningstidspunktet for bygget. Noen bygningsdeler er situasjoner er det ikke sikkerhetsmessig forsvarlig å undersøke
vurdert etter gjeldende teknisk forskrift på befaringstidspunktet. taket fra utsiden, og da vil vurderingen være basert på alder og
Dette gjelder blant annet: materialer.).
i. våtrom (bad, vaskerom) og andre fuktutsatte rom •stikkprøvetakninger er tilfeldig valgt og kan innebære kontroll
under

---

[d011_d011 | Side [1]]
reta en helhetsvurdering av det elektriske anlegget, dets alder, allmenne 琀椀lstand og fare for liv og helse. Bør det elektriske anlegget ha en utvidet
el-kontroll?
Nei
TOMTEFORHOLD
Byggegrunn
Byggegrunn av 昀樀ell. Grunnforhold kan som regel ikke fastslås med 100% sikkerhet med visuell kontroll.
Fuktsikring og drenering
Drenering/utv. fuktsikring fra byggeår. Grunnet skjult i byggegrunn er materialvalg ikke mulig å konstantere.
Grunnmur og fundamenter
Støpt plate av betongkonstruksjoner. Antas fundamenter

---

[d011_d011 | Side [1]]
endig trapp utført i trekonstruksjon, med lakkert
som er nevnt i rapporten. Spesielt forhold som er vurdert overflate og rekkverk i trevirke.
med TG2 og TG3 bør vurderes nøye, da de indikerer
avvik fra normal slitasje og/ eller høy alder, noe som kan Balkong/ terrasse:
innebære behov for utbedringer. Bygningsdeler som er Sydvendt balkong i trekonstruksjon på 39 m². Rekkverk i
merket med TGIU er ikke blitt vurdert av takstmannen. trekonstruksjon. Bjelkelag med forankring til
bygningskroppen og forstøtning

---

[d011_d011 | Side [1]]
. strøing og nødvendig skadeutbedring på
dugnader
Veien.
‑ Laget formål er også drift og vedlikehold av felles Sameiet praktiserer felles dugnader. Selger har opplyst
lekeplasser, søppelskur ol. som er felles for boligene i om at dette skjer 2 ganger i året, vår/ høst.
Rødsstien 1‑8 og Rødsberget 1‑19.
‑ Laget skal også kreve inn kontingent og evt. også
Energimerke
ekstraordinære kontantinnskudd til dekning av Lagets
utgifter. Energikarakter: C
‑ Lagets øverste myndighet er Årsmøtet.
Energifarge: Lys

---

[d011_d011 | Side [1]]
rtid underrettes skriftlig om
fellesgjeld? alle overdragelser og leieforhold.
‑ Ingen planer om og juster felleskost akkurat nå ikke
lenge siden den ble justert for 2026. Regnskap/ budsjett/ kostnadsøkninger: Regnskapet for
Ser sameie har felles grunnpakke for tv/ internett, som er 2023 viser et driftsoverskudd på kr 50 851. I 2024 ble det
inkludert i fellesutgiftene. Hvilken leverandør? registrert et underskudd på kr 19 163, som i hovedsak ser
‑ Telia er leverandør på internett/ tv ut til å skyldes noe

---

[d011_d011 | Side [1]]
. for de øvrige brukerne av eiendommen.
Har du/ dere en oversikt over tidligere vedlikehold/
oppgraderinger i sameiet som vi kan få tilsendt? Forkjøpsrett: Det er ikke forkjøpsrett i sameiet.
‑ Det har ikke blitt gjort store oppgraderinger i sameiet
viser da til styrets arbeid som ligger på vibbo. Styregodkjennelse: Styregodkjenning er ikke påkrevd.
Er det noen planer om å justere fellesutgifter og/ eller Sameiets styre skal imidlertid underrettes skriftlig om
fellesgjeld? alle overdragelser og

---

[d011_d011 | Side [1]]
 ser
‑ Telia er leverandør på internett/ tv ut til å skyldes noe høyere kostnader til drift og
Er det ellers noe som styret ønsker at vi informerer nye vedlikehold sammenlignet med tidligere år. For 2025 er
eiere om? det budsjettert med et driftsresultat på kr 54 000, og
‑ Ingen ting styre ønsker og formidle nye kjøpere annet dette beløpet er også lagt til grunn som budsjettert
enn de vedtektene og reglene vi allerede har i sameiet de årsresultat.
ligger på vibbo.
Vedtekter/ husordensregler
Det er etablert

---

[d011_d011 | Side [1]]
Kristin Arvesen
Statsautorisert revisor
2 / 2
Vedlegg 2 12 av 15 Revisjonsberetning for Rødsberget Boligsameie - 2024.pdf
132

## Side 133

RØDSBERGET BOLIGSAMEIE
ORG.NR. 919 221 488, KUNDENR. 4177
RESULTATREGNSKAP
Regnskap Regnskap Budsjett Budsjett
Note 2 024 2 023 2024 2025
DRIFTSINNTEKTER:
Innkrevde felleskostnader 2 592 104 592 104 592 000 592 000
Andre inntekter 3 16 936 0 0 60 000
SUM DRIFTSINNTEKTER 609 040 592 104 592 000 652 000
DRIFTSKOSTNADER:
Personalkostnader 4 -1 410 -1 410 -1 410 -1

---

[d011_d011 | Side [1]]
nflyttede beboeres bruk, drift og vedlikehold, til siste bolig i sameiet er
solgt.
Felleskostnader for solgte boliger belastes seksjonseier fra overtakelse.
Felleskostnader for ferdigstilte usolgte boliger belastes Block Watne AS frem til ny
eier overtar boligen.
I et sameie med flere byggetrinn, der ett eller flere byggetrinn er ferdigstilt mens
andre er under oppføring, har sameiet ansvar for driftskostnader for det/de ferdigstilte
trinnene. Block Watne AS besørger og bekoster drift av byggetrinn som er

---

[d011_d011 | Side [1]]
mkostninger (uten
Boligkjøperforsikring)) Informasjon: Kommunale avgifter inkluderer renovasjon,
5 447 090 (Totalpris inkl. omkostninger (med vann‑ og avløpsavgifter og feiing.
Boligkjøperforsikring))
Årsprognose for 2026 er kr. 18 552,‑, gitt 27.01.2026.
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑
Fellesgjeld
Sameiet har ingen fellesgjeld.
Lånebetingelser fellesgjeld: Sameiet har ingen lån
Estimert totalpris ink. omk
registrert.
Kr 5 447 090
Sikringsordning
Felleskostnader
Sameiet har ikke

---

[d011_d011 | Side [1]]
for etablering og forbruk dekkes av den
dokumentasjon, om mulig. enkelte seksjonseier. Selger har informert om at dette er
installert i 2022.
Opplistingen over er ikke uttømmende og du oppfordres
til å lese og sette deg grundig inn i alt salgsmateriell. Sameiet har fellesavtaler for snørydding og feiing, samt
felles service på ventilasjonsanlegg. Styret har i 2024
Det presiseres at TGIU står for tilstandsgrad ikke gjennomført felles service på ventilasjonsanlegget i alle
undersøkt, f.eks. fordi en del av

---

[d011_d011 | Side [1]]
IKEHOLD
Drift/vedlikehold bygninger -5 115
Drift/vedlikehold VVS -10 230
Drift/vedlikehold utvendig anlegg -55 736
Drift/vedlikehold ventilasjonsanlegg -129 600
SUM DRIFT OG VEDLIKEHOLD -200 681
NOTE: 9
ENERGI/FYRING
Elektrisk energi -6 873
SUM ENERGI / FYRING -6 873
NOTE: 10
ANDRE DRIFTSKOSTNADER
Lokalleie -500
Annet driftsmateriale -11 795
Snørydding -39 875
Andre fremmede tjenester -631
Bank- og kortgebyr -2 346
SUM ANDRE DRIFTSKOSTNADER -55 147
NOTE: 11
FINANSINNTEKTER
Renter bank 21 209
SUM

---

[d011_d011 | Side [1]]
. Block Watne AS besørger og bekoster drift av byggetrinn som er under
oppføring. Sameiets felleskostnader fordeles derfor etter innbyrdes brøk på
seksjonene i de til enhver tid ferdigstilte byggetrinnene.
Nærværende punkt 3-2 bortfaller, uten vedtak på sameiermøte, når siste bolig i
prosjektet er solgt.
3.3 Ordensregler og dyrehold
(1) Årsmøtet kan fastsette vanlige ordensregler for eiendommen.
(2) Dyrehold er tillatt så lenge dette ikke på en urimelig eller unødvendig måte er til skade
eller ulempe for

---

[d011_d011 | Side [1]]
v plattinger og endringer i beplantning på
uteområdene. Sameiets forsikringsselskap: If Skadeforsikring Nuf
Svar fra styre 06.02.2026: Polisenummer fellesforsikring: 1512075
Foreligger det noen planer om vedlikehold/ prosjekter
eller lignende i sameiet i nær fremtid? Husdyr: Dyrehold er tillatt så lenge dette ikke på en
‑ Det foreligger ingen store planer i nær fremtid, kun urimelig eller unødvendig måte er til skade eller ulempe
vedlikehold. for de øvrige brukerne av eiendommen.
Har du/ dere en oversikt

---

[d011_d011 | Side [1]]
 er oppført i balansen til pålydende etter fradrag for
avsetning til forventet tap. Avsetning til tap gjøres på grunnlag av individuelle vurderinger
av de enkelte fordringene.
SKATTETREKKSKONTO
Selskapet har egen separat skattetrekkskonto i OBOS-banken. Innskuddet tilhører
myndighetene og kan ikke disponeres fritt.
NOTE: 2
INNKREVDE FELLESKOSTNADER
Felleskostnader 476 616
TV/Internett 115 488
SUM INNKREVDE FELLESKOSTNADER 592 104
NOTE: 3
ANDRE INNTEKTER
Egenandel 2023 10 000
Viderefakturert kostnader

---

[d011_d011 | Side [1]]
t.
Kr 5 447 090
Sikringsordning
Felleskostnader
Sameiet har ikke sikringsordning. De andre
Felleskostnader kr 2 006,‑ pr. mnd seksjonseierne har lovbestemt panterett i seksjonen for
krav mot seksjonseieren som følger av sameieforholdet.
Felleskostnader inkulderer: Totale felleskostnader per Pantekravet kan ikke overstige et beløp som for hver
55

## Side 56

OM EIENDOMMEN
bruksenhet svarer til to ganger folketrygdens med et variert servicetilbud, ligger kun få minutters
grunnbeløp. kjøretur unna.
Området

---

[d011_d011 | Side [1]]
ap 2024.pdf
133

## Side 134

RØDSBERGET BOLIGSAMEIE
ORG.NR. 919 221 488, KUNDENR. 4177
BALANSE
Note 2024 2023
EIENDELER
OMLØPSMIDLER
Restanser felleskostnader/kundefordringer 2 056 47
Forskuddsbetalte kostnader 57 514 168 623
Driftskonto OBOS-banken 202 403 424 192
Sparekonto OBOS-banken 785 959 467 134
SUM OMLØPSMIDLER 1 047 932 1 059 996
SUM EIENDELER 1 047 932 1 059 996
EGENKAPITAL OG GJELD
EGENKAPITAL
Opptjent egenkapital 1 028 445 1 026 399
SUM EGENKAPITAL 1 028 445 1 026 399
GJELD
KORTSIKTIG

---

[d011_d011 | Side [1]]
er. Sameiet har rett til
å føre nye slike installasjoner gjennom bruksenhetene hvis det ikke skaper vesentlig ulempe
for den aktuelle seksjonseieren. Sameiets vedlikeholdsplikt omfatter også utvendig
vedlikehold av vinduer, veranda- og ytterdører til boligene.
(3) Sameiets vedlikeholdsplikt omfatter også slikt som utskifting av sluk, vinduer, veranda- og
ytterdører til boligene eller reparasjon og utskifting av tak, bjelkelag, bærende
veggkonstruksjoner, samt rør eller ledninger som er bygd inn i bærende

---

[d011_d011 | Side [1]]
apslovens regler og god regnskapsskikk i Norge. Ledelsen er også ansvarlig for slik intern kontroll
som den finner nødvendig for å kunne utarbeide et årsregnskap som ikke inneholder vesentlig
feilinformasjon, verken som følge av misligheter eller utilsiktede feil.
Ved utarbeidelsen av årsregnskapet må ledelsen ta standpunkt til sameiets evne til fortsatt drift og opplyse
om forhold av betydning for fortsatt drift. Forutsetningen om fortsatt drift skal legges til grunn for
årsregnskapet så lenge det ikke er

---

[d011_d011 | Side [1]]
rdinære
Omkostning kjøper
driftskostnader som personalkostnader, styrehonorar,
5 300 000,00 (Prisantydning) revisjonshonorar, forretningsfører, konsulenthonorar, drift
og vedlikehold, forsikringer, energi/ fyring og andre
Omkostninger driftskostnader. Sameiet har en kollektiv avtale for TV og
bredbånd, og kostnaden for dette er inkludert i
13 500 (Boligkjøperforsikring* (valgfritt)) totalbeløpet.
132 500 (Dokumentavgift)
545 (Tinglysingsgebyr ‑ hjemmel)
Eiendomsskatt
545 (Tinglysningsgebyr ‑

---

[d011_d011 | Side [1]]
 -137 746 -144 633 -150 000
Andre driftskostnader 10 -55 147 -37 559 -48 000 -50 000
SUM DRIFTSKOSTNADER -628 203 -541 253 -497 865 -598 000
DRIFTSRESULTAT -19 163 50 851 94 135 54 000
FINANSINNTEKTER/-KOSTNADER:
Finansinntekter 11 21 209 14 931 0 0
Finanskostnader 0 -4 0 0
RES. FINANSINNT./-KOSTNADER 21 209 14 927 0 0
ÅRSRESULTAT 2 046 65 778 94 135 54 000
Overføringer:
Til opptjent egenkapital 2 046 65 778
Vedlegg 1 6 av 15 4177 Årsregnskap 2024.pdf
133

## Side 134

RØDSBERGET BOLIGSAMEIE
ORG.NR. 919

---

[d011_d011 | Side [1]]
for Gamle RÃ¸dsvei 1 11.09.2014 1111 - Boligbeb. - frittliggende smÃ¥husbebyggelse
1112 - Boligbeb. - konsentrert smÃ¥husbebyggelse
1550 - Renovasjonsanlegg
1610 - Lekeplass
2010 - Veg
3001 - GrÃ¸nnstruktur (UTGÃ…TT)
Hensynssoner:
140 - Frisiktsone
210 - RÃ¸d sone T-1442
220 - Gul sone T-1442
Plandokumenter reguleringsplan:
Reg.best._-_1058_130.pdf
Om fullstendighet og nÃ¸yaktighet i matrikkelrapporten
Matrikkelen ble etablert ved konvertering av data fra tidligere registre. Det kan variere hvor gode disse

---

[d011_d011 | Side [1]]
nens digitale planregister.
Disse kan inneholde smÃ¥feil og bÃ¸r oppfattes som veiledende.
Det er det stemplede analoge kartet / dokumentet som er det juridiske plandokument.
Planopplysninger:
Kommuneplan: Vedtatt: FormÃ¥l/hensynssone:
Kommuneplan Fredrikstad 2023 â€“ 2035 15.06.2023 1001 - Bebyggelse og anlegg
Plandokumenter pÃ¥ kommunens nettsider Hensynssoner:
320 - Flomfare
Reguleringsplaner: Vedtatt: FormÃ¥l:
1058 Detaljreguleringsplan for Gamle RÃ¸dsvei 1 11.09.2014 1111 - Boligbeb. - frittliggende

---

[d011_d011 | Side [1]]
gsprofilen er hentet fra ulike datakilder, og feil eller mangler kan forekomme. Vurderinger og sitater er innhentet på web og gir uttrykk for
hvordan naboene vurderer nabolaget. FINN.no AS kan ikke holdes ansvarlig for feil/mangler i profilen. Copyright © Finn.no AS 2026
76

## Side 77

Primære transportmidler Varer/Tjenester
Værstetorvet 12 min
1. Egen bil
Apotek 1 Gressvik 4 min
2. Buss
Aldersfordeling barn (0-18 år)
Støynivået
Lite støynivå 94/100
30% i barnehagealder
41% 6-12 år
Turmulighetene
17%

---

[d011_d011 | Side [1]]
en=55 dB.
bygninger med bruksareal mindre enn 50 m². Det er eier ‑ Hensynssone H320 (Flomfare): Sonen er fastsatt i
som plikter å fremlegge energiattest og er selv ansvarlig kommuneplanen. Spesifikke bestemmelser for sonen er
for at opplysningene er korrekte. ikke angitt i de vedlagte dokumentene.
Selger har fylt ut fullstendig energiattest, som er lagt ved
salgsoppgaven. Megler påtar seg ikke ansvar for Området er stadig under endring/ utvikling, bygg settes
informasjonen som fremgår av energiattesten.

---

[d011_d011 | Side [1]]

 
   
 


202

## Side 203

203

## Side 204

Nasjonal produktspesifikasjon for arealplan og digitalt planregister
Reguleringsplan
Spesifikasjon for tegneregler
Mars 2010
AREALFORMÅL
ANDRE JURIDISKE FLATER, LINJER OG PUNKTER I REGULERINGSPLAN
               

---

[d011_d011 | Side [1]]
kter: C
‑ Lagets øverste myndighet er Årsmøtet.
Energifarge: Lys grønn
Forretningsfører: Obos Eiendomsforvaltning AS
63

## Side 64

OM EIENDOMMEN
det dokumenteres at grenseverdier for lydklasse C i NS
Info energiklasse
8175 tabell 5 er ivaretatt. Alle boligenheter skal ha privat
Alle eiendommer som selges eller leies ut, skal ha uteplass med minst 15 m² oppholdsareal med støy under
energiattest. Unntak gjelder blant annet for frittstående Lden=55 dB.
bygninger med bruksareal mindre enn 50 m². Det er eier

---

[d011_d011 | Side [1]]
# Side 51

Boligen ligger høyt og fritt i terrenget,
noe som gir en usjenert beliggenhet
med mindre innsyn.
Beliggenhet i et populært og
familievennlig boområde med rolige
omgivelser og godt naboskap.

## Side 52

Beliggenhet i et populært og
familievennlig boområde med rolige
omgivelser og godt naboskap.
Herfra er det kort vei til flotte
rekreasjonsmuligheter, inkludert
Onsøystien og nærhet til sjøen.

## Side 53

Enkel hverdag med gangavstand til
barnehage, skoler og dagligvarebutikker
som Kiwi og Rema

---

[d011_d011 | Side [1]]
ynivå 94/100
30% i barnehagealder
41% 6-12 år
Turmulighetene
17% 13-15 år
Nærhet til skog og mark 93/100 12% 16-18 år
Kvalitet på barnehagene
Veldig bra 87/100
Familiesammensetning
Sport
Par m. barn
Krossnes ballplass 7 min
Ballspill 0.6 km
Par u. barn
Rød skole 9 min
Aktivitetshall, ballspill 0.7 km
Pluss Onsøy Squash & Treningssenter 4 min Enslig m. barn
Trimeriet Fredrikstad 7 min
Enslig u. barn
Boligmasse
Flerfamilier
79% enebolig
13% rekkehus 0% 43%
2% blokk
6% annet

---

[d011_d011 | Side [1]]

Flerfamilier
79% enebolig
13% rekkehus 0% 43%
2% blokk
6% annet Okseviken
Fredrikstad/Sarpsborg
Norge
Sivilstand
Norge
«Utrolig fint nabolag for familier. Kort
vei til Fredrikstad sentrum, kort vei til Gift 38% 33%
barnehage, skoler og butikker. Skogen,
Ikke gift 52% 54%
sjøen og bergene gir et utrolig fint
turområde.» Separert 9% 9%
Sitat fra en lokalkjent
Enke/Enkemann 2% 4%
Innholdet i nabolagsprofilen er hentet fra ulike datakilder, og feil eller mangler kan forekomme. Vurderinger og sitater er

---

[d011_d011 | Side [1]]
ikling, bygg settes
informasjonen som fremgår av energiattesten. opp, rehabiliteres og rives ned. Vi anbefaler derfor alle
budgivere å sette seg inn i gjeldende
reguleringsbestemmelser. Kopi av situasjonskart,
Oppvarming
målebrev, reguleringsplaner m/ bestemmelser etc. ligger
Boligen varmes opp av elektrisk oppvarming, vedlagt i salgsoppgaven eller kan fås ved henvendelse til
varmepumpe og vedovn. Det er elektrisk gulvvarme på megler. Vi oppfordrer interessenter til å gjøre seg kjent
bad og en

---

[d011_d011 | Side [1]]
het
Familier med barn Veldig trygt 93/100
Etablerere
Kvalitet på skolene
Husdyreiere
Veldig bra 80/100
Naboskapet
Offentlig transport Godt vennskap 73/100
Martins plass 3 min
Linje 10 0.3 km
Aldersfordeling
Ålekilen fergeleie 12 min
Linje 805 1.1 km
Fredrikstad bussterminal 11 min Totalt 29 ulike linjer 6.8 km
Fredrikstad stasjon 13 min
Linje RE20, RX20 7.6 km
Oslo Gardermoen 1 t 40 min
Skoler
Rød skole Onsøy (1-7 kl.) 9 min
399 elever, 21 klasser 0.8 km
Gressvik ungdomsskole (8-10 kl.) 4 min
378 elever,

---

[d011_d011 | Side [1]]
de solforhold, startpunkt og helt frem til boligen. Det vil være skiltet ved
flott utsikt og minimalt med innsyn. Her bor du med kort fellesvisninger for enkel orientering.
vei til det meste i hverdagen. Barnehage nås på få
minutters gange, og det er gang‑ og sykkelavstand til
Tomt
barneskole, ungdomsskole og dagligvarebutikker som
Kiwi Vestkilen og Rema 1000 Gressvik. Gressvik torg, Tomtetype: Eiet
56

## Side 57

OM EIENDOMMEN
Tomtestørrelse: 141.5 m² Byggetegninger:
Det foreligger godkjente og

---

[d011_d011 | Side [1]]
ER I REGULERINGSPLAN
                                                                                                                                                           B                                                                        

---

[d011_d011 | Side [1]]
lasser 0.8 km
Gressvik ungdomsskole (8-10 kl.) 4 min
378 elever, 23 klasser 2.5 km
Frederik II videregående skole 11 min
1277 elever 6 km
WANG Toppidrett Fredrikstad 12 min
180 elever, 6 klasser 6.6 km
«Beste boområde i Fredrikstad iht
levekårsundersøkelsen»
Sitat fra en lokalkjent
% 3.91 % 9.31 % 5.41 %
6.7
%
3.7
%
2.7
% 6.02 % 02 % 2.12
%
9.83
%
1.93
%
9.83
% 7.31 % 7.91 % 3.81
Barn Ungdom Unge voksne Voksne Eldre
(0-12 år) (13-18 år) (19-34 år) (35-64 år) (over 65 år)
Område Personer

---

[d011_d011 | Side [1]]
eierforhold
Navn Pers.nr/org.nr. Rolle Status Adresse Andel
NORA GONDROSEN H -
B - Bosatt 1/1
LARSEN Hjemmelshaver
Forretninger
Forretningstype Forretningsdato Matrikkelført Saksreferanse Involverte
ON - Omnummerering 01.01.2024 01.01.2024
ON - Omnummerering 01.01.2020 01.01.2020
SE - Seksjonering 12.06.2017 12.06.2017 Sak 2017/6427
Grunnforurensing registrert på eiendommen
Lokalitetsnr Lokalitetsnavn Påvirkningsgrad Myndighet Matrikkelføringsdato
Kulturminner
Kategori Art Vernetype Matrikkelført

---

[d011_d011 | Side [1]]
et for flere biler på
barnevennlig og veletablert boligområde på Gressvik. gårdsplassen.
Området består hovedsakelig av nyere eneboliger i rekke,
ferdigstilt i 2018, og er pent opparbeidet med gang‑ og
Adkomst
sykkelstier samt hyggelige fellesarealer og lekeplass for
de minste. På høyre side i annonsen finner du et kartutsnitt. Ved å
klikke på kartet kan du enkelt planlegge din rute fra valgt
Boligen ligger høyt i terrenget og byr på gode solforhold, startpunkt og helt frem til boligen. Det vil være

---

[d011_d011 | Side [1]]
e er gitt etter beste skjønn. Jeg er kjent med at dersom jeg har gitt ufullstendige, uriktige eller misvisende
opplysninger om eiendommen, vil forsikringsselskapet kunne søke hel eller delvis regress for sine utbetalinger eller redusere sitt ansvar helt
eller delvis, jfr. vilkår for boligselgerforsikring punkt 7.1 og forsikringsavtaleloven kapittel 4.
Jeg er orientert om mitt mulige ansvar som selger etter avhendingsloven, eventuelt etter kjøpsloven (aksjeboliger), og om forsikringsgiver

---

[d011_d011 | Side [1]]
ge
Forsikring
registre som kommunen og Kartverket. Det er viktig at
Boligselgerforsikring: Selger har tegnet kjøper setter seg grundig inn i alle salgsdokumentene,
boligselgerforsikring som dekker selgers ansvar etter herunder salgsoppgave, tilstandsrapport og selgers
avhendingsloven begrenset oppad kr. 20 000 000,‑. egenerklæring. Kjøper anses for å være kjent med
Egenerklæringsskjema er vedlagt salgsoppgaven og forhold som er tydelig beskrevet i salgsdokumentene,
interessenter oppfordres til å gjennomgå

---

[d011_d011 | Side [1]]
kke har gitt skriftlig samtykke, kan erstatningen bortfalle.
Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter, begrenset til siste 12 måneder før overtakelse.
Forøvrig oppfordrer selger potensielle kjøpere til å undersøke eiendommen grundig, jf avhendigsloven § 3-10 og kjøpsloven § 20
(aksjeboliger).
Gyldig forsikring forutsetter at det for helårs- og fritidsbolig foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere
bolighandel).
Jeg

---

[d011_d011 | Side [1]]
r godkjent av myndighetene. Alle
Partners. Boligkjøperforsikring er en rettshjelpsforsikring interessenter anbefales derfor å undersøke eiendommen
som gir trygghet og profesjonell juridisk hjelp dersom det nøye, gjerne sammen med fagperson, før bud gis.
oppdages uventede feil eller mangler ved boligen de Dersom kjøper velger å kjøpe uten å ha sett
neste fem årene. Les mer om Boligkjøperforsikring i eiendommen, kan det ikke etter overtakelse reklameres
vedlagte materiell eller på https:/ / på forhold som

---

[d011_d011 | Side [1]]
på boligeiendommen og/eller
når salget skjer som ledd i sikredes næringsvirksomhet/er en næringseiendom
etter at boligeiendommen er lagt ut for salg.
ved salg av helårs- og fritidsbolig er det krav til at det foreligger tilstandsrapport i henhold til Forskrift til avhendingslova (tryggere
bolighandel).
Forsikringsselskapet kan ved skriftlig samtykke akseptere tegning av forsikring også i ovennevnte tilfeller.
Dersom forsikringsselskapet ikke har gitt skriftlig samtykke, kan erstatningen bortfalle.
Ved

---

[d011_d011 | Side [1]]
egge parter,
begrenset til siste 12 måneder før overtakelse. Jeg bekrefter med dette at eiendommen ikke er en næringseiendom, at den ikke
selges som ledd i næringsvirksomhet eller mellom ektefeller eller slektninger i rett oppstigende eller nedstigende linje, søsken, eller
mellom personer som bor eller har bodd på boligeiendommen. Gyldig forsikring forutsetter at det for helårs- og fritidsbolig
foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere bolighandel).

---

[d011_d011 | Side [1]]
øperforsikring er du i trygge hender
hvis du oppdager feil eller mangler ved boligen du har
kjøpt. Forsikringen gir deg tilgang på hjelp fra advokater, Hva koster forsikringen?
saksbehandlere og jurister som er spesialiserte på Forsikringspremien trekkes i oppgjøret.
eiendomskjøp. De står klare til å hjelpe deg i fem år etter
overtagelse – uten at du trenger å bekymre deg for egne Borettslagseiendom: kr 9 300
og eventuelle idømte saksomkostninger.
Seksjonert eiendom/
kr 13 500
aksjebolig:
Få hjelpen du

---

[d011_d011 | Side [1]]
ventuelt etter kjøpsloven (aksjeboliger), og om forsikringsgiver sitt
boligselgerforsikringstilbud.
Jeg er klar over at avtale om forsikring er bindende. Jeg er også klar over at premietilbudet først kan påberopes når boligen er solgt
(budaksept). Premietilbudet som er gitt av megler er bindende for forsikringsgiver i 6 – seks – måneder fra oppdragsinngåelse med megler.
Etter dette vil premien og forsikringsvilkårene kunne justeres. Når premietilbudet ikke lenger er bindende for forsikringsselskapet

---

[d011_d011 | Side [1]]
vet i salgsdokumentene,
interessenter oppfordres til å gjennomgå denne før bud slike forhold kan ikke senere gjøres gjeldende som en
inngis. mangel ved boligen. Dette gjelder uavhengig av om
dokumentene er lest.
Boligkjøperforsikring: Kjøper har anledning til å tegne
boligkjøperforsikring. Vedlagt i salgsoppgaven følger Det kan være forskjell mellom boligens faktiske bruk av
informasjon om Boligkjøperforsikring fra Söderberg & rom og det som er godkjent av myndighetene. Alle
Partners. Boligkjøperforsikring

---

[d011_d011 | Side [1]]
regne, og dette vil normalt ikke gi grunnlag for
særskilt avtale mellom partene om noe annet, jf. reklamasjon eller prisavslag.
66

## Side 67

OM EIENDOMMEN
Avtalerettslig Ved beregning av krav om prisavslag eller erstatning må
Partenes rettigheter og plikter reguleres av avtalen kjøper selv dekke kostnader med inntil kr 10 000 (som en
mellom partene, og all tilgjengelig dokumentasjon som egenandel).
forelå for kjøper før handelen ble inngått. I tillegg gjelder
avhendingsloven. Det gjelder ulike

---

[d011_d011 | Side [1]]
dre avvik er tydelig avtalt mellom kjøper og
selger.
grunnlag
Om informasjonsgrunnlaget
Overtakelse
Opplysninger om boligens størrelse og utforming, både
Tidspunkt for overtakelse avtales mellom kjøper og innvendig og utvendig, bygger på informasjon hentet fra
selger. vedlagte tilstands‑ og boligsalgsrapport. Innholdet i
salgsoppgaven er basert på selgers informasjon,
fagkyndig vurdering, samt opplysninger fra offentlige
Forsikring
registre som kommunen og Kartverket. Det er viktig

---

[d011_d011 | Side [1]]
old til Forskrift til avhendingslova (tryggere
bolighandel).
Jeg ønsker boligselgerforsikring, og bekrefter å ha mottatt og lest forsikringsvilkårene og informasjonsbrosjyre til selger i
forbindelse med kjøp av boligselgerforsikring. Forsikringen trer i kraft på det tidspunkt det foreligger en budaksept mellom partene,
begrenset til tolv måneder før overtagelse. Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter,
begrenset til siste 12 måneder før overtakelse. Jeg

---

[d011_d011 | Side [1]]
henhold til Forskrift til avhendingslova (tryggere bolighandel). Forsikringen er ugyldig dersom
den tegnes i strid med forsikringsvilkårene. Jeg er innforstått med at eiendomsmegleren ikke har fullmakt til å gjøre unntak fra
ovennevnte begrensninger. Jeg er oppmerksom på at 8% av total forsikringspremie er honorar til Söderberg & Partners.
Jeg ønsker ikke boligselgerforsikring, men megler har tilbudt meg å kjøpe slik forsikring.
Jeg kan ikke kjøpe boligselgerforsikring ihht vilkår.
Initialer selger: NGL

---

[d011_d011 | Side [1]]
 premietilbudet ikke lenger er bindende for forsikringsselskapet må
egenerklæringsskjemaet signeres på nytt og eventuelle endringer påføres. Det vil da være forsikringspremien og forsikringsvilkårene på ny
signeringsdato som legges til grunn.
Det kan ikke tegnes boligselgerforsikring ved følgende salg:
mellom ektefeller eller slektninger i rett oppstigende eller nedstigenede linje, søsken, eller
mellom personer som bor eller har bodd på boligeiendommen og/eller
når salget skjer som ledd i sikredes

---

[d011_d011 | Side [1]]
tninger.
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

##

---

[d011_d011 | Side [1]]
enstander som er nevnt i standardlisten, men som ikke at det kan være utført andre arbeider på det elektriske
59

## Side 60

OM EIENDOMMEN
anlegget som ikke har samsvarserklæring.
Pipe/ Ildsted:
Stålpipe med vedovn.
Byggemåte
I forbindelse med salget er det blitt utført en Vinduer:
tilstandsrapport av en bygningssakkyndig, som gir en Vinduer med 3‑lags pressglass, produsert 2017.
teknisk gjennomgang av boligen og påpeker eventuelle
avvik. Rapporten, sammen med selgers egenerklæring, Dører:
er vedlagt

---

[d011_d011 | Side [1]]
R: POSTSTED:
MOB TLF: MOB TLF:
E-POST: E-POST:
DATO: STED: DATO: STED:
SIGNATUR: SIGNATUR:
Jeg ønsker boligkjøperforsikring Hvis mitt bud blir akseptert, ønsker jeg at megler forbereder en
kjøpekontrakt med boligkjøperforsikring. Avtale om forsikring inngås ikke
før jeg undertegner kjøpekontrakten.
Minnene fra da du eide huset lever videre. Derfor har vi i Emera Trykt i Norge, sertifi sert med miljømerket
Svanen og medlem av Grønt Punkt Norge.
samarbeidet med de beste i Norge for å skape et prospekt som

---

[d011_d011 | Side [1]]
e kjøpe boligselgerforsikring ihht vilkår.
Initialer selger: NGL 4
60006210
:ecnerefer
tnemucoD
74

## Side 75

E-Signing validated secured by
NAME OF SIGNER IDENTIFIER TIME ELECTRONIC ID
Nora Gondrosen Larsen eeff1f128b034c78c606ed 31.01.2026 Signer authenticated by
281215277d33214af6 17:17:23 UTC One time code
→ This is a PDF document digitally signed by IN Groupe's E-Signing service.
→ The document's integrity is protected by signing and sealing the contents with a certificate issued to IN Groupe by
a

---

[d011_d011 | Side [1]]
. Rapporten, sammen med selgers egenerklæring, Dører:
er vedlagt salgsoppgaven. Det er viktig at interessenter Malt hovedytterdør. Balkongdør med 3‑lags pressglass,
grundig gjennomgår disse dokumentene før bud legges produsert 2017. Innvendige dører er glatte innerdører og
inn. skyvedører med omramming.
All informasjon i tilstandsrapporten anses som kjent for Trapper/ adkomst:
kjøper, og det vil ikke være mulig å reklamere på forhold Innvendig trapp utført i trekonstruksjon, med lakkert
som er nevnt i

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R01",
      "description": "Støysoner (rød og gul sone T-1442): Eiendommen berøres av hensynssone H210 (Rød sone) og H220 (Gul sone) etter støyretningslinjen T-1442. Dette kan medføre støyplager fra omgivelsene og begrensninger på fremtidig utbygging.",
      "evidence": [
        "Hensynssone H210 (Rød sone T‑1442) og H220 (Gul sone T‑1442): Støysoner. Før det gis igangsettingstillatelse for boliger innenfor sonene, skal det dokumenteres at grenseverdier for lydklasse C i NS 8175 tabell 5 er ivaretatt.",
        "210 - Rød sone T-1442 og 220 - Gul sone T-1442 er registrert som hensynssoner på eiendommen.",
        "Alle boligenheter skal ha privat uteplass med minst 15 m² oppholdsareal med støy under Lden=55 dB."
      ],
      "source_documents": [
        "d011_d011"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R02",
      "description": "Flomfare (hensynssone H320): Eiendommen er berørt av hensynssone for flomfare i kommuneplanen. Spesifikke bestemmelser for sonen er ikke angitt i de vedlagte dokumentene, noe som skaper usikkerhet om konsekvensene.",
      "evidence": [
        "Hensynssone H320 (Flomfare): Sonen er fastsatt i kommuneplanen. Spesifikke bestemmelser for sonen er ikke angitt i de vedlagte dokumentene.",
        "320 - Flomfare er registrert som hensynssone i Kommuneplan Fredrikstad 2023–2035."
      ],
      "source_documents": [
        "d011_d011"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R03",
      "description": "Frisiktsone H140: Innenfor frisiktsonen tillates ikke sikthindrende gjenstander høyere enn 0,5 meter over tilstøtende vegers plan. Dette begrenser bruken av deler av eiendommen og kan påvirke beplantning og innredning av utearealer.",
      "evidence": [
        "Hensynssone H140 (Frisiktsone): Innenfor sonen tillates ikke sikthindrende gjenstander høyere enn 0,5 meter over tilstøtende vegers plan.",
        "140 - Frisiktsone er registrert som hensynssone i reguleringsplan for Gamle Rødsvei 1."
      ],
      "source_documents": [
        "d011_d011"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R04",
      "description": "Stedsevarig rett til Elvia AS: Det er tinglyst en erklæring/avtale som gir Elvia AS stedsevarig rett til bygging, drift, vedlikehold og fornyelse av installasjoner på eiendommen, samt bestemmelse om transport, ferdsel, byggeforbud og beplantning. Dette kan begrense eiers rådighet over eiendommen.",
      "evidence": [
        "07.07.2016 ‑ Dokumentnr: 622063 ‑ Erklæring/avtale. Rettighetshaver: Elvia AS. Org.nr: 980 489 698. Bestemmelse om stedsevarig rett til bygging, drift, vedlikehold og fornyelse. Bestemmelse om transport og ferdsel. Bestemmelse om byggeforbud og beplantning."
      ],
      "source_documents": [
        "d011_d011"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R05",
      "description": "Manglende radonmåling: Det er ikke foretatt radonmålinger i forbindelse med tilstandsrapporten. Radon kan utgjøre en helserisiko, og manglende dokumentasjon gir kjøper usikkerhet om radonforholdene i boligen.",
      "evidence": [
        "Det ikke foretatt radonmålinger i forbindelsen med tilstandsrapporten. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid."
      ],
      "source_documents": [
        "d011_d011"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R06",
      "description": "Manglende samsvarserklæring for elektrisk anlegg: Det foreligger ikke samsvarserklæring for elektrisk arbeid utført etter 1.1.1999, og installasjonsdato er ukjent. Dette kan indikere at elektriske arbeider ikke er utført av godkjent virksomhet eller ikke er dokumentert i henhold til krav.",
      "evidence": [
        "Er det elektriske anlegget utført eller er det foretatt tilleggsarbeider på det elektriske anlegget etter 1.1.1999? ‑ Ja. Eksisterer det samsvarserklæring? ‑ Nei.",
        "Når ble det elektriske anlegget installert eller sist gang totalt rehabilitert (årstall)? ‑ Ukjent.",
        "det kan være utført andre arbeider på det elektriske anlegget som ikke har samsvarserklæring."
      ],
      "source_documents": [
        "d011_d011"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.93
    },
    {
      "risk_id": "R07",
      "description": "Manglende dokumentasjon på service av varmepumpe (luft-til-luft): Dokumentasjon på utført service av luft-til-luft varmepumpen ble ikke fremlagt ved befaring. Dette gir TG2 og innebærer usikkerhet om anleggets tilstand og levetid.",
      "evidence": [
        "Tekniske installasjoner ‑ Andre VVS‑installasjoner | Luft‑til‑luft varmepumpe. Dokumentasjon på utført service ble ikke fremlagt ved befaring.",
        "Luft-til-luft varmepumpe er listet under AVVIK SOM KAN KREVE TILTAK i tilstandsrapporten."
      ],
      "source_documents": [
        "d011_d011"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R08",
      "description": "Værslitt balkongdør (TG2): Balkongdøren er påvist å være noe værslitt, noe som kan kreve tiltak ved forverring. Dette er vurdert med TG2 i tilstandsrapporten.",
      "evidence": [
        "Utvendig ‑ Balkongdør | Det ble påvist noe værslitt balkongdør. Overvåk døren jevnlig, ved forverring bør det utføres tiltak.",
        "Balkongdør er listet under AVVIK SOM KAN KREVE TILTAK i tilstandsrapporten."
      ],
      "source_documents": [
        "d011_d011"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.87
    },
    {
      "risk_id": "R09",
      "description": "Avvik på baderomsgulv (TG2): Overflater på gulv i bad i 2. etasje er vurdert med TG2, noe som indikerer vesentlige avvik og potensielt behov for utbedring.",
      "evidence": [
        "Våtrom > 2. etasje > Bad > Overflater Gulv – listet under AVVIK SOM KAN KREVE TILTAK i tilstandsrapporten."
      ],
      "source_documents": [
        "d011_d011"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.83
    },
    {
      "risk_id": "R10",
      "description": "Konstruksjoner ikke undersøkt (TGIU): Taktekking, pipe/ildsted og terrengforhold er ikke undersøkt av takstmann. Dette innebærer usikkerhet om tilstanden til disse bygningsdelene.",
      "evidence": [
        "KONSTRUKSJONER SOM IKKE ER UNDERSØKT: Utvendig > Taktekking, Innvendig > Pipe og ildsted, Tomteforhold > Terrengforhold.",
        "Bygningsdeler som er merket med TGIU er ikke blitt vurdert av takstmannen."
      ],
      "source_documents": [
        "d011_d011"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R11",
      "description": "Drenering fra byggeår uten mulighet for kontroll: Drenering og utvendig fuktsikring er fra byggeår, og materialvalg kan ikke konstateres da det er skjult i byggegrunn. Dette innebærer risiko for fuktproblemer over tid.",
      "evidence": [
        "Drenering/utv. fuktsikring fra byggeår. Grunnet skjult i byggegrunn er materialvalg ikke mulig å konstantere."
      ],
      "source_documents": [
        "d011_d011"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R12",
      "description": "Underskudd i sameiet i 2024: Sameiet hadde et driftsunderskudd på kr 19 163 i 2024, som skyldes høyere kostnader til drift og vedlikehold. Selv om budsjettet for 2025 er positivt, kan dette indikere en trend med økte kostnader som kan påvirke fremtidige felleskostnader.",
      "evidence": [
        "I 2024 ble det registrert et underskudd på kr 19 163, som i hovedsak ser ut til å skyldes noe høyere kostnader til drift og vedlikehold sammenlignet med tidligere år.",
        "DRIFTSRESULTAT -19 163 (2024) mot 50 851 (2023).",
        "SUM DRIFTSKOSTNADER -628 203 (2024) mot -541 253 (2023).",
        "For 2025 er det budsjettert med et driftsresultat på kr 54 000."
      ],
      "source_documents": [
        "d011_d011"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R13",
      "description": "Høye kostnader til ventilasjonsanlegg og manglende felles service i 2024: Sameiet hadde kostnader på kr 129 600 til drift/vedlikehold av ventilasjonsanlegg, og styret gjennomførte ikke felles service på ventilasjonsanlegget i alle seksjoner i 2024. Dette kan medføre fremtidige vedlikeholdsbehov og kostnadsøkninger.",
      "evidence": [
        "Drift/vedlikehold ventilasjonsanlegg -129 600.",
        "Styret har i 2024 ikke gjennomført felles service på ventilasjonsanlegget i alle seksjoner."
      ],
      "source_documents": [
        "d011_d011"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R14",
      "description": "Legalpant og prioritet: Kommunen har legalpant med høyere prioritet enn sameiets legalpant, og sameiet har legalpant på inntil 2G i seksjonen. Dette innebærer at kjøper kan bli ansvarlig for tidligere seksjonseiers misligholdte forpliktelser.",
      "evidence": [
        "Kommunen har legalpant som sikkerhet for betaling av kommunale avgifter og eventuell eiendomsskatt.",
        "De øvrige seksjonseierne i sameiet har legalpant på inntil 2G som sikkerhet for krav knyttet til sameieforholdet, som felleskostnader.",
        "Legalpant er pant som ikke vises i grunnboksutskriften, og har prioritet foran tinglyste lån, for eksempel banklån på seksjonen.",
        "Legalpant til kommunen har høyere prioritet enn legalpant til sameiet."
      ],
      "source_documents": [
        "d011_d011"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R15",
      "description": "Privat stikkledning og vedlikeholdsansvar: Stikkledningene fra eiendommen til det kommunale nettet er private, og vedlikeholdsansvaret påhviler sameiet. Dette kan medføre uforutsette kostnader ved fremtidige reparasjoner.",
      "evidence": [
        "Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler sameiet."
      ],
      "source_documents": [
        "d011_d011"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.83
    },
    {
      "risk_id": "R16",
      "description": "Veilag med vedtekter og forpliktelser: Det er etablert et veilag mellom Rødsberget Boligsameie og naboeiendommer. Sameiet er forpliktet til å bidra til vedlikehold, brøyting, strøing og skadeutbedring av felles vei, noe som kan medføre løpende kostnader og forpliktelser.",
      "evidence": [
        "Det er etablert et veilag med vedtekter pr 25.05.2020 mellom Rødsberget Boligsameie gnr 52 bnr 16 (52/16) og gnr 53 og bnr 2.",
        "Laget skal sørge for at Veien holdes i forsvarlig og brukelig stand, og skal herunder besørge vedlikehold, brøyting, evt. strøing og nødvendig skadeutbedring på Veien."
      ],
      "source_documents": [
        "d011_d011"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.78
    },
    {
      "risk_id": "R17",
      "description": "Egenandel på kr 10 000 ved prisavslag/erstatningskrav: Kjøper må selv dekke kostnader med inntil kr 10 000 som egenandel ved krav om prisavslag eller erstatning. Dette kan redusere kjøpers reelle kompensasjon ved eventuelle mangler.",
      "evidence": [
        "Ved beregning av krav om prisavslag eller erstatning må kjøper selv dekke kostnader med inntil kr 10 000 (som en egenandel)."
      ],
      "source_documents": [
        "d011_d011"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R18",
      "description": "Sameiet mangler sikringsordning: Sameiet har ingen sikringsordning for felleskostnader. Dette innebærer at dersom en seksjonseier ikke betaler sine felleskostnader, kan de øvrige seksjonseierne bli belastet for dette.",
      "evidence": [
        "Sameiet har ikke sikringsordning. De andre seksjonseierne har lovbestemt panterett i seksjonen for krav mot seksjonseieren som følger av sameieforholdet."
      ],
      "source_documents": [
        "d011_d011"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R19",
      "description": "Oppgitt areal er 0 m² i matrikkelen: Matrikkelen viser oppgitt areal som 0 m², mens beregnet areal er 141,5 m². Dette kan indikere manglende eller feil registrering i offentlige registre, og kan skape usikkerhet om eiendommens faktiske areal.",
      "evidence": [
        "Bruksnr 16 Oppgitt areal 0 m2 Kulturminne Nei. Festenr 0 Beregnet areal 141,5 m2.",
        "Historisk oppgitt areal 0.0. Historisk arealkilde 0 - Ikke oppgitt.",
        "Det kan variere fra husstand til husstand – mange matrikkelenheter og bygg hefter usikkerhet ved arealet som oppgis."
      ],
      "source_documents": [
        "d011_d011"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.72
    },
    {
      "risk_id": "R20",
      "description": "Kjøper forpliktet til å signere standard kjøpekontrakt utarbeidet av Emera: Kjøper og selger er forpliktet til å benytte en standardkontrakt utarbeidet av eiendomsmegleren (Emera). Dette kan begrense kjøpers mulighet til å forhandle om kontraktsvilkårene.",
      "evidence": [
        "Kjøper og selger er forpliktet til å signere den standard kjøpekontrakten utarbeidet av Emera som en del av eiendomshandleren. Kjøpekontrakten kan gjennomgås hos eiendomsmegler før budet legges inn."
      ],
      "source_documents": [
        "d011_d011"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.7
    }
  ],
  "re_retrieval_queries": [
    "Hva er de spesifikke bestemmelsene for hensynssone H320 flomfare i Fredrikstad kommuneplan 2023-2035?",
    "Hvilke avvik ble funnet på baderomsgulv 2. etasje - hva er årsaken til TG2?",
    "Er det utført el-tilsyn på eiendommen, og når ble siste kontroll gjennomført?",
    "Hva er tilstanden på taktekking - er det noen indikasjoner på alder eller skader?",
    "Hva er sameiets vedlikeholdsplan og reservefond for fremtidige kostnader?",
    "Er det registrert grunnforurensning på eiendommen eller i nærområdet?",
    "Hva er betingelsene for Elvia AS sin stedsevarige rett - hvilke konkrete arealer berøres?",
    "Finnes det informasjon om pipe og ildsted - alder, type og tilstand?"
  ],
  "reasoning": "\nGjennomgang av alle 20 identifiserte risikoer mot dokumentevidensen:\n\n**R01 – Støysoner (0.92 → 0.95):** Meget godt dokumentert. Evidensen er klar og spesifikk med både H210 og H220 bekreftet i to separate dokumentkilder, samt konkrete krav til lydklasse C i NS 8175 og krav om privat uteplass med støy under Lden=55 dB. Confidence økes til 0.95.\n\n**R02 – Flomfare H320 (0.88 → 0.85):** Bekreftet i kommuneplan, men salgsoppgaven eksplisitt angir at spesifikke bestemmelser ikke er vedlagt. Risikoen er reell men noe usikker i konsekvens. Confidence justeres ned til 0.85 pga. manglende bestemmelsesdokumentasjon.\n\n**R03 – Frisiktsone H140 (0.85 → 0.88):** Godt dokumentert med klar bestemmelse om 0,5 meter-grense. Bekreftet i både reguleringsplan og kommuneplan-dokumenter. Confidence økes marginalt til 0.88.\n\n**R04 – Elvia AS stedsevarig rett (0.90 → 0.92):** Meget godt dokumentert med tinglyst erklæring, dokumentnummer, dato og alle bestemmelsene listet. Confidence økes til 0.92.\n\n**R05 – Manglende radonmåling (0.85 → 0.82):** Bekreftet i dokumentene, men det presiseres at det ikke er krav om radonmåling med mindre boligen er utleid. Risikoen er reell men noe begrenset av at dette er en vanlig situasjon. Confidence justeres ned til 0.82.\n\n**R06 – Manglende samsvarserklæring elektrisk (0.92 → 0.93):** Meget godt dokumentert med tre separate evidenspunkter. Installasjonsdato ukjent og ingen samsvarserklæring er alvorlig. Confidence økes marginalt til 0.93.\n\n**R07 – Manglende service varmepumpe (0.88):** Godt dokumentert. Bekreftet i tilstandsrapportens avviksliste. Confidence beholdes på 0.88.\n\n**R08 – Værslitt balkongdør (0.85 → 0.87):** Godt dokumentert med TG2 og konkret anbefaling om overvåking. Balkongdøren er produsert 2017 (3-lags pressglass), noe som gir kontekst. Confidence økes til 0.87.\n\n**R09 – Avvik baderomsgulv (0.85 → 0.83):** Bekreftet i avvikslisten, men ingen detaljert beskrivelse av årsak til TG2 fremkommer av de tilgjengelige dokumentchunkene. Confidence justeres ned til 0.83 pga. manglende detaljer.\n\n**R10 – TGIU konstruksjoner (0.90 → 0.92):** Meget godt dokumentert med eksplisitt liste over ikke-undersøkte konstruksjoner. Confidence økes til 0.92.\n\n**R11 – Drenering fra byggeår (0.80):** Godt dokumentert. Confidence beholdes på 0.80.\n\n**R12 – Underskudd 2024 (0.82 → 0.80):** Godt dokumentert med regnskapstall. Positivt budsjett for 2025 (kr 54 000) og god egenkapital (kr 1 028 445) demper risikoen noe. Confidence justeres ned til 0.80.\n\n**R13 – Ventilasjonsanlegg (0.80 → 0.82):** Godt dokumentert med konkrete tall og bekreftelse på manglende service. Confidence økes til 0.82.\n\n**R14 – Legalpant (0.88 → 0.90):** Meget godt dokumentert med klar beskrivelse av prioritetsrekkefølge. Confidence økes til 0.90.\n\n**R15 – Privat stikkledning (0.82 → 0.83):** Godt dokumentert. Confidence økes marginalt til 0.83.\n\n**R16 – Veilag (0.78):** Godt dokumentert. Confidence beholdes på 0.78.\n\n**R17 – Egenandel kr 10 000 (0.85 → 0.88):** Meget godt dokumentert med eksakt beløp. Confidence økes til 0.88.\n\n**R18 – Manglende sikringsordning (0.80):** Godt dokumentert. Confidence beholdes på 0.80.\n\n**R19 – Areal 0 m² i matrikkelen (0.75 → 0.72):** Bekreftet i dokumentene, men kommunen selv kommenterer at det hefter usikkerhet ved arealer i matrikkelen generelt. Dette er trolig en registreringsteknisk feil snarere enn en reell risiko. Confidence justeres ned til 0.72.\n\n**R20 – Standard kjøpekontrakt Emera (0.72 → 0.70):** Bekreftet i dokumentene, men det presiseres at kontrakten kan gjennomgås hos megler før bud. Dette er standard praksis i norsk eiendomshandel og representerer begrenset risiko. Confidence justeres ned til 0.70.\n\n**Mulige manglende risikoer identifisert:**\n1. **Eiendomsskatt:** Kr 6 803 for 2026 er oppgitt – dette er en løpende kostnad kjøper bør være klar over.\n2. **Grunnforurensning:** Matrikkelen viser \"Har grunnforurensning\" som et felt – det er uklart om dette er bekreftet eller ikke for denne eiendommen.\n3. **Byggeår og alder på konstruksjoner:** Boligen er fra 2017/2018, relativt ny, men drenering og andre skjulte konstruksjoner er fra byggeår uten mulighet for kontroll.\n4. **Restanser felleskostnader:** Balansen viser kr 2 056 i restanser – marginalt men bør sjekkes.\n5. **Pipe/ildsted ikke undersøkt:** Stålpipe med vedovn er nevnt, men pipe er TGIU – dette er en brann- og sikkerhetsrisiko som fortjener egen risiko.\n\nNye spørsmål for re-retrieval fokuserer på: flomfare-bestemmelser, baderomsgulv-detaljer, el-tilsyn, taktekking, vedlikeholdsplan/reservefond, grunnforurensning, Elvia-rettens omfang, og pipe/ildsted-informasjon.\n"
}

## Raw Response
```json
{
  "id": "msg_01PZSE3pnAXL3ANLrWR6MCyd",
  "container": null,
  "content": [
    {
      "id": "toolu_01Y8baKTZobm6PUpBZSKXWyH",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R01",
            "description": "Støysoner (rød og gul sone T-1442): Eiendommen berøres av hensynssone H210 (Rød sone) og H220 (Gul sone) etter støyretningslinjen T-1442. Dette kan medføre støyplager fra omgivelsene og begrensninger på fremtidig utbygging.",
            "evidence": [
              "Hensynssone H210 (Rød sone T‑1442) og H220 (Gul sone T‑1442): Støysoner. Før det gis igangsettingstillatelse for boliger innenfor sonene, skal det dokumenteres at grenseverdier for lydklasse C i NS 8175 tabell 5 er ivaretatt.",
              "210 - Rød sone T-1442 og 220 - Gul sone T-1442 er registrert som hensynssoner på eiendommen.",
              "Alle boligenheter skal ha privat uteplass med minst 15 m² oppholdsareal med støy under Lden=55 dB."
            ],
            "source_documents": [
              "d011_d011"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R02",
            "description": "Flomfare (hensynssone H320): Eiendommen er berørt av hensynssone for flomfare i kommuneplanen. Spesifikke bestemmelser for sonen er ikke angitt i de vedlagte dokumentene, noe som skaper usikkerhet om konsekvensene.",
            "evidence": [
              "Hensynssone H320 (Flomfare): Sonen er fastsatt i kommuneplanen. Spesifikke bestemmelser for sonen er ikke angitt i de vedlagte dokumentene.",
              "320 - Flomfare er registrert som hensynssone i Kommuneplan Fredrikstad 2023–2035."
            ],
            "source_documents": [
              "d011_d011"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R03",
            "description": "Frisiktsone H140: Innenfor frisiktsonen tillates ikke sikthindrende gjenstander høyere enn 0,5 meter over tilstøtende vegers plan. Dette begrenser bruken av deler av eiendommen og kan påvirke beplantning og innredning av utearealer.",
            "evidence": [
              "Hensynssone H140 (Frisiktsone): Innenfor sonen tillates ikke sikthindrende gjenstander høyere enn 0,5 meter over tilstøtende vegers plan.",
              "140 - Frisiktsone er registrert som hensynssone i reguleringsplan for Gamle Rødsvei 1."
            ],
            "source_documents": [
              "d011_d011"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R04",
            "description": "Stedsevarig rett til Elvia AS: Det er tinglyst en erklæring/avtale som gir Elvia AS stedsevarig rett til bygging, drift, vedlikehold og fornyelse av installasjoner på eiendommen, samt bestemmelse om transport, ferdsel, byggeforbud og beplantning. Dette kan begrense eiers rådighet over eiendommen.",
            "evidence": [
              "07.07.2016 ‑ Dokumentnr: 622063 ‑ Erklæring/avtale. Rettighetshaver: Elvia AS. Org.nr: 980 489 698. Bestemmelse om stedsevarig rett til bygging, drift, vedlikehold og fornyelse. Bestemmelse om transport og ferdsel. Bestemmelse om byggeforbud og beplantning."
            ],
            "source_documents": [
              "d011_d011"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R05",
            "description": "Manglende radonmåling: Det er ikke foretatt radonmålinger i forbindelse med tilstandsrapporten. Radon kan utgjøre en helserisiko, og manglende dokumentasjon gir kjøper usikkerhet om radonforholdene i boligen.",
            "evidence": [
              "Det ikke foretatt radonmålinger i forbindelsen med tilstandsrapporten. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid."
            ],
            "source_documents": [
              "d011_d011"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R06",
            "description": "Manglende samsvarserklæring for elektrisk anlegg: Det foreligger ikke samsvarserklæring for elektrisk arbeid utført etter 1.1.1999, og installasjonsdato er ukjent. Dette kan indikere at elektriske arbeider ikke er utført av godkjent virksomhet eller ikke er dokumentert i henhold til krav.",
            "evidence": [
              "Er det elektriske anlegget utført eller er det foretatt tilleggsarbeider på det elektriske anlegget etter 1.1.1999? ‑ Ja. Eksisterer det samsvarserklæring? ‑ Nei.",
              "Når ble det elektriske anlegget installert eller sist gang totalt rehabilitert (årstall)? ‑ Ukjent.",
              "det kan være utført andre arbeider på det elektriske anlegget som ikke har samsvarserklæring."
            ],
            "source_documents": [
              "d011_d011"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.93
          },
          {
            "risk_id": "R07",
            "description": "Manglende dokumentasjon på service av varmepumpe (luft-til-luft): Dokumentasjon på utført service av luft-til-luft varmepumpen ble ikke fremlagt ved befaring. Dette gir TG2 og innebærer usikkerhet om anleggets tilstand og levetid.",
            "evidence": [
              "Tekniske installasjoner ‑ Andre VVS‑installasjoner | Luft‑til‑luft varmepumpe. Dokumentasjon på utført service ble ikke fremlagt ved befaring.",
              "Luft-til-luft varmepumpe er listet under AVVIK SOM KAN KREVE TILTAK i tilstandsrapporten."
            ],
            "source_documents": [
              "d011_d011"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R08",
            "description": "Værslitt balkongdør (TG2): Balkongdøren er påvist å være noe værslitt, noe som kan kreve tiltak ved forverring. Dette er vurdert med TG2 i tilstandsrapporten.",
            "evidence": [
              "Utvendig ‑ Balkongdør | Det ble påvist noe værslitt balkongdør. Overvåk døren jevnlig, ved forverring bør det utføres tiltak.",
              "Balkongdør er listet under AVVIK SOM KAN KREVE TILTAK i tilstandsrapporten."
            ],
            "source_documents": [
              "d011_d011"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.87
          },
          {
            "risk_id": "R09",
            "description": "Avvik på baderomsgulv (TG2): Overflater på gulv i bad i 2. etasje er vurdert med TG2, noe som indikerer vesentlige avvik og potensielt behov for utbedring.",
            "evidence": [
              "Våtrom > 2. etasje > Bad > Overflater Gulv – listet under AVVIK SOM KAN KREVE TILTAK i tilstandsrapporten."
            ],
            "source_documents": [
              "d011_d011"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.83
          },
          {
            "risk_id": "R10",
            "description": "Konstruksjoner ikke undersøkt (TGIU): Taktekking, pipe/ildsted og terrengforhold er ikke undersøkt av takstmann. Dette innebærer usikkerhet om tilstanden til disse bygningsdelene.",
            "evidence": [
              "KONSTRUKSJONER SOM IKKE ER UNDERSØKT: Utvendig > Taktekking, Innvendig > Pipe og ildsted, Tomteforhold > Terrengforhold.",
              "Bygningsdeler som er merket med TGIU er ikke blitt vurdert av takstmannen."
            ],
            "source_documents": [
              "d011_d011"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R11",
            "description": "Drenering fra byggeår uten mulighet for kontroll: Drenering og utvendig fuktsikring er fra byggeår, og materialvalg kan ikke konstateres da det er skjult i byggegrunn. Dette innebærer risiko for fuktproblemer over tid.",
            "evidence": [
              "Drenering/utv. fuktsikring fra byggeår. Grunnet skjult i byggegrunn er materialvalg ikke mulig å konstantere."
            ],
            "source_documents": [
              "d011_d011"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R12",
            "description": "Underskudd i sameiet i 2024: Sameiet hadde et driftsunderskudd på kr 19 163 i 2024, som skyldes høyere kostnader til drift og vedlikehold. Selv om budsjettet for 2025 er positivt, kan dette indikere en trend med økte kostnader som kan påvirke fremtidige felleskostnader.",
            "evidence": [
              "I 2024 ble det registrert et underskudd på kr 19 163, som i hovedsak ser ut til å skyldes noe høyere kostnader til drift og vedlikehold sammenlignet med tidligere år.",
              "DRIFTSRESULTAT -19 163 (2024) mot 50 851 (2023).",
              "SUM DRIFTSKOSTNADER -628 203 (2024) mot -541 253 (2023).",
              "For 2025 er det budsjettert med et driftsresultat på kr 54 000."
            ],
            "source_documents": [
              "d011_d011"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R13",
            "description": "Høye kostnader til ventilasjonsanlegg og manglende felles service i 2024: Sameiet hadde kostnader på kr 129 600 til drift/vedlikehold av ventilasjonsanlegg, og styret gjennomførte ikke felles service på ventilasjonsanlegget i alle seksjoner i 2024. Dette kan medføre fremtidige vedlikeholdsbehov og kostnadsøkninger.",
            "evidence": [
              "Drift/vedlikehold ventilasjonsanlegg -129 600.",
              "Styret har i 2024 ikke gjennomført felles service på ventilasjonsanlegget i alle seksjoner."
            ],
            "source_documents": [
              "d011_d011"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R14",
            "description": "Legalpant og prioritet: Kommunen har legalpant med høyere prioritet enn sameiets legalpant, og sameiet har legalpant på inntil 2G i seksjonen. Dette innebærer at kjøper kan bli ansvarlig for tidligere seksjonseiers misligholdte forpliktelser.",
            "evidence": [
              "Kommunen har legalpant som sikkerhet for betaling av kommunale avgifter og eventuell eiendomsskatt.",
              "De øvrige seksjonseierne i sameiet har legalpant på inntil 2G som sikkerhet for krav knyttet til sameieforholdet, som felleskostnader.",
              "Legalpant er pant som ikke vises i grunnboksutskriften, og har prioritet foran tinglyste lån, for eksempel banklån på seksjonen.",
              "Legalpant til kommunen har høyere prioritet enn legalpant til sameiet."
            ],
            "source_documents": [
              "d011_d011"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R15",
            "description": "Privat stikkledning og vedlikeholdsansvar: Stikkledningene fra eiendommen til det kommunale nettet er private, og vedlikeholdsansvaret påhviler sameiet. Dette kan medføre uforutsette kostnader ved fremtidige reparasjoner.",
            "evidence": [
              "Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler sameiet."
            ],
            "source_documents": [
              "d011_d011"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.83
          },
          {
            "risk_id": "R16",
            "description": "Veilag med vedtekter og forpliktelser: Det er etablert et veilag mellom Rødsberget Boligsameie og naboeiendommer. Sameiet er forpliktet til å bidra til vedlikehold, brøyting, strøing og skadeutbedring av felles vei, noe som kan medføre løpende kostnader og forpliktelser.",
            "evidence": [
              "Det er etablert et veilag med vedtekter pr 25.05.2020 mellom Rødsberget Boligsameie gnr 52 bnr 16 (52/16) og gnr 53 og bnr 2.",
              "Laget skal sørge for at Veien holdes i forsvarlig og brukelig stand, og skal herunder besørge vedlikehold, brøyting, evt. strøing og nødvendig skadeutbedring på Veien."
            ],
            "source_documents": [
              "d011_d011"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.78
          },
          {
            "risk_id": "R17",
            "description": "Egenandel på kr 10 000 ved prisavslag/erstatningskrav: Kjøper må selv dekke kostnader med inntil kr 10 000 som egenandel ved krav om prisavslag eller erstatning. Dette kan redusere kjøpers reelle kompensasjon ved eventuelle mangler.",
            "evidence": [
              "Ved beregning av krav om prisavslag eller erstatning må kjøper selv dekke kostnader med inntil kr 10 000 (som en egenandel)."
            ],
            "source_documents": [
              "d011_d011"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R18",
            "description": "Sameiet mangler sikringsordning: Sameiet har ingen sikringsordning for felleskostnader. Dette innebærer at dersom en seksjonseier ikke betaler sine felleskostnader, kan de øvrige seksjonseierne bli belastet for dette.",
            "evidence": [
              "Sameiet har ikke sikringsordning. De andre seksjonseierne har lovbestemt panterett i seksjonen for krav mot seksjonseieren som følger av sameieforholdet."
            ],
            "source_documents": [
              "d011_d011"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R19",
            "description": "Oppgitt areal er 0 m² i matrikkelen: Matrikkelen viser oppgitt areal som 0 m², mens beregnet areal er 141,5 m². Dette kan indikere manglende eller feil registrering i offentlige registre, og kan skape usikkerhet om eiendommens faktiske areal.",
            "evidence": [
              "Bruksnr 16 Oppgitt areal 0 m2 Kulturminne Nei. Festenr 0 Beregnet areal 141,5 m2.",
              "Historisk oppgitt areal 0.0. Historisk arealkilde 0 - Ikke oppgitt.",
              "Det kan variere fra husstand til husstand – mange matrikkelenheter og bygg hefter usikkerhet ved arealet som oppgis."
            ],
            "source_documents": [
              "d011_d011"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.72
          },
          {
            "risk_id": "R20",
            "description": "Kjøper forpliktet til å signere standard kjøpekontrakt utarbeidet av Emera: Kjøper og selger er forpliktet til å benytte en standardkontrakt utarbeidet av eiendomsmegleren (Emera). Dette kan begrense kjøpers mulighet til å forhandle om kontraktsvilkårene.",
            "evidence": [
              "Kjøper og selger er forpliktet til å signere den standard kjøpekontrakten utarbeidet av Emera som en del av eiendomshandleren. Kjøpekontrakten kan gjennomgås hos eiendomsmegler før budet legges inn."
            ],
            "source_documents": [
              "d011_d011"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.7
          }
        ],
        "re_retrieval_queries": [
          "Hva er de spesifikke bestemmelsene for hensynssone H320 flomfare i Fredrikstad kommuneplan 2023-2035?",
          "Hvilke avvik ble funnet på baderomsgulv 2. etasje - hva er årsaken til TG2?",
          "Er det utført el-tilsyn på eiendommen, og når ble siste kontroll gjennomført?",
          "Hva er tilstanden på taktekking - er det noen indikasjoner på alder eller skader?",
          "Hva er sameiets vedlikeholdsplan og reservefond for fremtidige kostnader?",
          "Er det registrert grunnforurensning på eiendommen eller i nærområdet?",
          "Hva er betingelsene for Elvia AS sin stedsevarige rett - hvilke konkrete arealer berøres?",
          "Finnes det informasjon om pipe og ildsted - alder, type og tilstand?"
        ],
        "reasoning": "\nGjennomgang av alle 20 identifiserte risikoer mot dokumentevidensen:\n\n**R01 – Støysoner (0.92 → 0.95):** Meget godt dokumentert. Evidensen er klar og spesifikk med både H210 og H220 bekreftet i to separate dokumentkilder, samt konkrete krav til lydklasse C i NS 8175 og krav om privat uteplass med støy under Lden=55 dB. Confidence økes til 0.95.\n\n**R02 – Flomfare H320 (0.88 → 0.85):** Bekreftet i kommuneplan, men salgsoppgaven eksplisitt angir at spesifikke bestemmelser ikke er vedlagt. Risikoen er reell men noe usikker i konsekvens. Confidence justeres ned til 0.85 pga. manglende bestemmelsesdokumentasjon.\n\n**R03 – Frisiktsone H140 (0.85 → 0.88):** Godt dokumentert med klar bestemmelse om 0,5 meter-grense. Bekreftet i både reguleringsplan og kommuneplan-dokumenter. Confidence økes marginalt til 0.88.\n\n**R04 – Elvia AS stedsevarig rett (0.90 → 0.92):** Meget godt dokumentert med tinglyst erklæring, dokumentnummer, dato og alle bestemmelsene listet. Confidence økes til 0.92.\n\n**R05 – Manglende radonmåling (0.85 → 0.82):** Bekreftet i dokumentene, men det presiseres at det ikke er krav om radonmåling med mindre boligen er utleid. Risikoen er reell men noe begrenset av at dette er en vanlig situasjon. Confidence justeres ned til 0.82.\n\n**R06 – Manglende samsvarserklæring elektrisk (0.92 → 0.93):** Meget godt dokumentert med tre separate evidenspunkter. Installasjonsdato ukjent og ingen samsvarserklæring er alvorlig. Confidence økes marginalt til 0.93.\n\n**R07 – Manglende service varmepumpe (0.88):** Godt dokumentert. Bekreftet i tilstandsrapportens avviksliste. Confidence beholdes på 0.88.\n\n**R08 – Værslitt balkongdør (0.85 → 0.87):** Godt dokumentert med TG2 og konkret anbefaling om overvåking. Balkongdøren er produsert 2017 (3-lags pressglass), noe som gir kontekst. Confidence økes til 0.87.\n\n**R09 – Avvik baderomsgulv (0.85 → 0.83):** Bekreftet i avvikslisten, men ingen detaljert beskrivelse av årsak til TG2 fremkommer av de tilgjengelige dokumentchunkene. Confidence justeres ned til 0.83 pga. manglende detaljer.\n\n**R10 – TGIU konstruksjoner (0.90 → 0.92):** Meget godt dokumentert med eksplisitt liste over ikke-undersøkte konstruksjoner. Confidence økes til 0.92.\n\n**R11 – Drenering fra byggeår (0.80):** Godt dokumentert. Confidence beholdes på 0.80.\n\n**R12 – Underskudd 2024 (0.82 → 0.80):** Godt dokumentert med regnskapstall. Positivt budsjett for 2025 (kr 54 000) og god egenkapital (kr 1 028 445) demper risikoen noe. Confidence justeres ned til 0.80.\n\n**R13 – Ventilasjonsanlegg (0.80 → 0.82):** Godt dokumentert med konkrete tall og bekreftelse på manglende service. Confidence økes til 0.82.\n\n**R14 – Legalpant (0.88 → 0.90):** Meget godt dokumentert med klar beskrivelse av prioritetsrekkefølge. Confidence økes til 0.90.\n\n**R15 – Privat stikkledning (0.82 → 0.83):** Godt dokumentert. Confidence økes marginalt til 0.83.\n\n**R16 – Veilag (0.78):** Godt dokumentert. Confidence beholdes på 0.78.\n\n**R17 – Egenandel kr 10 000 (0.85 → 0.88):** Meget godt dokumentert med eksakt beløp. Confidence økes til 0.88.\n\n**R18 – Manglende sikringsordning (0.80):** Godt dokumentert. Confidence beholdes på 0.80.\n\n**R19 – Areal 0 m² i matrikkelen (0.75 → 0.72):** Bekreftet i dokumentene, men kommunen selv kommenterer at det hefter usikkerhet ved arealer i matrikkelen generelt. Dette er trolig en registreringsteknisk feil snarere enn en reell risiko. Confidence justeres ned til 0.72.\n\n**R20 – Standard kjøpekontrakt Emera (0.72 → 0.70):** Bekreftet i dokumentene, men det presiseres at kontrakten kan gjennomgås hos megler før bud. Dette er standard praksis i norsk eiendomshandel og representerer begrenset risiko. Confidence justeres ned til 0.70.\n\n**Mulige manglende risikoer identifisert:**\n1. **Eiendomsskatt:** Kr 6 803 for 2026 er oppgitt – dette er en løpende kostnad kjøper bør være klar over.\n2. **Grunnforurensning:** Matrikkelen viser \"Har grunnforurensning\" som et felt – det er uklart om dette er bekreftet eller ikke for denne eiendommen.\n3. **Byggeår og alder på konstruksjoner:** Boligen er fra 2017/2018, relativt ny, men drenering og andre skjulte konstruksjoner er fra byggeår uten mulighet for kontroll.\n4. **Restanser felleskostnader:** Balansen viser kr 2 056 i restanser – marginalt men bør sjekkes.\n5. **Pipe/ildsted ikke undersøkt:** Stålpipe med vedovn er nevnt, men pipe er TGIU – dette er en brann- og sikkerhetsrisiko som fortjener egen risiko.\n\nNye spørsmål for re-retrieval fokuserer på: flomfare-bestemmelser, baderomsgulv-detaljer, el-tilsyn, taktekking, vedlikeholdsplan/reservefond, grunnforurensning, Elvia-rettens omfang, og pipe/ildsted-informasjon.\n"
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
    "input_tokens": 24838,
    "output_tokens": 6965,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
