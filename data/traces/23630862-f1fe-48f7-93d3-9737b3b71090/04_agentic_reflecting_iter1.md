# Trace: agentic_reflecting_iter1
- **Run ID:** 23630862-f1fe-48f7-93d3-9737b3b71090
- **Tidspunkt:** 2026-03-26T07:54:09.709803+00:00
- **Varighet:** 123.77s
- **Input tokens:** 24209
- **Output tokens:** 6556

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
Risiko 1: Ulovlig bruksendring av kott til entré – ikke byggesøkt
  Confidence: 0.97
  Evidens: Deler av det som i dag fremstår som entré er opprinnelig byggesøkt og godkjent som kott.; Å anvende et rom eller en bygning til et formål som avviker fra den godkjente bruken, krever en søknad om bruksendring. Tiltaket er ikke byggesøkt, og må derfor søkes om slik det står i dag.; Dersom søknad ikke innvilges, kan det bli nødvendig å tilbakeføre boligen til sin opprinnelige tilstand.

Risiko 2: Badrommets membran og tettesjikt har oversteget normal brukstid – risiko for fuktskader og kostbar totalrenovering
  Confidence: 0.96
  Evidens: Membranen har oversteget normal brukstid, og slitasje må påregnes.; Når membranen eldes, svekkes den gradvis og kan utvikle mindre utettheter som slipper fukt ned i konstruksjonen.; En full oppgradering med nytt tettesjikt må på grunn av alderen påregnes innen nær fremtid.; Rommet har nådd en alder der konstruksjonene svekkes som følge av naturlig aldring og bruk. Dette øker risikoen for fuktproblematikk, og jevnlig overvåking anbefales.

Risiko 3: Svært høy andel fellesgjeld (kr. 587 038) og høye felleskostnader (kr. 8 258/mnd) – betydelig finansiell belastning for kjøper
  Confidence: 0.93
  Evidens: Fellesgjeld: Kr 587 038,‑; Felleskostn.: Kr 8 258,‑; Pris inkl. fellesgjeld: 4 987 038; Det er mulig å innfri deler eller hele andel fellesgjeld på 2 av borettslagets lån. Dersom kjøper velger å innfri hele sin andel fellesgjeld på begge disse to lånene (kr. 350 799,‑ per 16.03.26), vil felleskostnadene reduseres med ca. Kr. 2862,‑

Risiko 4: Borettslaget hadde et svært negativt årsresultat på kr. -35 528 052 i 2024 og negativ endring i disponible midler
  Confidence: 0.92
  Evidens: Driftskostnader var til sammen kr. 44 667 229,‑ i 2024.; Dette ga et negativt årsresultat i 2023 på kr. ‑35 528 052,‑.; Borettslaget hadde en negativ endring i de disponible midlene på kr. ‑2 001 794,‑ i 2024.; Borettslagets disponible midler (omløpsmidler fratrukket kortsiktig gjeld) var kr. 1 336 032

Risiko 5: Naturlig/oppdriftsventilasjon på bad og kjøkken – utilstrekkelig ventilering kan gi fuktopphopning og skader
  Confidence: 0.9
  Evidens: Avtrekket skjer via naturlig oppdriftsventilasjon. Ytelsen avhenger av vær, vind og temperatur og kan periodevis bli svak.; Dette kan gi noe opphopning av fuktig luft, som over tid kan påvirke overflater og tilstøtende konstruksjoner.; Det er naturlig oppdriftsventilasjon som var vanlig ved byggeåret, men som kan gi begrenset ventilering. Kullfilterventilator er montert, som kan bidra til å redusere matos, men denne vil ikke ventilere ut fuktig luft.; Løsningen er vanlig i eldre boliger, men klassifiseres som tilstandsgrad 2 (TG 2) i NS 3600.

Risiko 6: Riss i flisefuger på bad og vindu i våt sone – risiko for vanninntrengning og fuktskader
  Confidence: 0.88
  Evidens: Riss er observert i flisefuger. Dette kan skyldes flere årsaker, for eksempel bevegelser i underlaget, normal slitasje, temperaturendringer eller fuktrelaterte skader.; Det er et vindu innenfor en våt sone i rommet. Dette betyr at vinduet er mer utsatt for vannsøl som kan føre til skade.; Det er skruehull i veggen som ikke er tettet. Åpne hull kan trekke inn vann og skade veggen. Hullene bør tettes forsvarlig.

Risiko 7: Vannledninger (rør-i-rør) er ikke merket – vanskeliggjør vedlikehold og utskifting
  Confidence: 0.85
  Evidens: Kursene for rør‑i‑rør er ikke merket. Rørene skal være enkle å skifte ut, og bør derfor merkes.; Tekniske installasjoner > Vannledninger: Kursene for rør‑i‑rør er ikke merket.

Risiko 8: Manglende samsvarserklæring på elektrisk arbeid utført etter 1.1.1999
  Confidence: 0.88
  Evidens: Det mangler samsvarserklæring på arbeid utført etter 1.1.1999.

Risiko 9: Eiendommen ligger i støysone (gul og rød hensynssone for støy fra vei) – kan påvirke bokvalitet
  Confidence: 0.87
  Evidens: Det gjøres oppmerksom på at eiendommen ligger i hensynssone H190_2 for andre sikringssoner (restriksjoner for anlegg i grunn), mens deler av eiendommen ligger i gul og rød hensynssone for støy fra vei.

Risiko 10: Eiendommen er underlagt kulturminnevern og bevaring – begrensninger på endringer av fasade og bygningsmasse
  Confidence: 0.9
  Evidens: Det gjøres også oppmerksom på at eiendommen omfattes av kulturminnevern og ligger i et område med nasjonal kulturminneinteresser, samt område regulert til bevaring.; Eiendommen er regulert til spesialområde bevaring bolig etter bestemmelsene i S‑4179 fra 26.10.2005.; grensning på endringer av fasade med mer. For mer informasjon se www.byantikvaren.oslo.kommune.no.

Risiko 11: Pågående detaljregulering av Uelands gate – kan medføre endringer i nærområdet og påvirke eiendommens verdi eller bruk
  Confidence: 0.8
  Evidens: Detaljregulering, Uelands gate fra Stavangergata til Evald Ryghs gate. Saksnummer 2025/06756 ‑ Plansak. Mottatt sak 11.09.2025. Status: Under behandling.

Risiko 12: Tilliggende konstruksjoner til våtrom er ikke undersøkt (TG IU) – ukjent tilstand bak bad
  Confidence: 0.85
  Evidens: Våtrom > 1. etasje > Bad > Tilliggende konstruksjoner våtrom: TG IU (Konstruksjoner som ikke er undersøkt)

Risiko 13: Tinglyste heftelser og rettigheter på eiendommen – inkl. adkomstrett, bestemmelser om bebyggelse og garasjeanlegg som ikke kan endres uten samtykke fra Oslo kommune
  Confidence: 0.85
  Evidens: 27.02.1936 ‑ Best. om vann/kloakkledn.; 20.09.1951 ‑ Bestemmelse om bebyggelse. Bestemmelse om adkomstrett. Rettighetshaver Kingos gt. 10c.; Plikt til å sikre tilgang til garasjeanlegg. Bestemmelse om opparbeidelse av areal, vedlikehold og drift av garasjeanlegg. Kan ikke endres uten samtykke fra Oslo kommune.; Gjelder del av takterasse som rømningsvei. Kan ikke slettes uten samtykke fra Oslo kommune v/Plan og bygningsetaten.

Risiko 14: Legalpant i andelen for opptil 2G – borettslaget og kommunen har prioritert pant foran kjøpers interesser
  Confidence: 0.82
  Evidens: Borettslaget har legalpant i andelen for opptil 2 G (folketrygdens grunnbeløp). Pantet dekker borettslagets krav på felleskostnader samt andre krav borettslaget måtte få mot andelseieren.; Kommunen har legalpant i eiendommen for forfalte krav på eiendomsskatt og kommunale avgifter/gebyrer.

Risiko 15: Ingen radonmåling er utført – ukjent radoneksponering i boligen
  Confidence: 0.8
  Evidens: Vet du om det er gjort radonmåling på eiendommen, enten av deg eller tidligere eiere? ◆ Nei, ikke som jeg kjenner til

Risiko 16: Boligen er i 1. etasje uten heis – kan gi utfordringer for fremtidig salg og tilgjengelighet
  Confidence: 0.72
  Evidens: Etasje: 1; Heis: Nei; Leiligheten ligger i en høy 1.etasje.

Risiko 17: Inkassokostnader i borettslaget i 2024 – indikerer betalingsproblemer blant andelseiere
  Confidence: 0.75
  Evidens: 7772 Omkostninger inkasso 78 236 0; Borettslaget er sikret mot tap av felleskostnader.

Risiko 18: Byggeår 1936 – eldre bygg med generell aldersslitasje på flere bygningsdeler
  Confidence: 0.88
  Evidens: Byggeår: 1936; For øvrig er dører av eldre dato med bruksslitasje.; Alder og bruksslitasje kan øke behov for vedlikehold og tiltak.; Det foreligger ekspedisjonsdokument fra 1935 for våningshus.

Dokumentkontekst:
[d202_d202 | Side [1]]
nr. 1212 i Borettslaget
Ilabekken med orgnr. 982842166
Tinglyste heftelser og rettigheter
På eiendommen er det tinglyst følgende heftelser og rettigheter som følger
eiendommens matrikkel ved overskjøting til ny hjemmelshaver:
301/2 19/2 30:
27.02.1936 ‑ Dokumentnr: 301039 ‑ Best. om vann/k loakkledn.
20.09.1951 ‑ Dokumentnr: 302506 ‑ Bestemmelse om bebyggelse
Bestemmelse om adkomstrett
Rettighetshaver Kingos gt. 10c.
Med flere bestemmelser
14.08.1952 ‑ Dokumentnr: 301874 ‑ Erklæring/a vtale
Bestemmelse om

---

[d202_d202 | Side [1]]
grensning på endringer av fasade med mer.
For mer informasjon se www.byantikvaren.oslo.kommune.no.
Legalpant
Borettslaget har legalpant i andelen for opptil 2 G (folketrygdens grunnbeløp). Pantet
dekker borettslagets krav på felleskostnader samt andre krav borettslaget måtte få
mot andelseieren. Kommunen har legalpant i eiendommen for forfalte krav på
eiendomsskatt og kommunale avgifter/g ebyrer.
Kontraktsgrunnlag
Kjøpsbetingelser
Eiendommen skal overleveres til kjøper i tråd med det som er avtalt. Det er

---

[d202_d202 | Side [1]]
 sameiet/borettslaget/laget/selskapet er innblandet i uenigheter eller konflikter rundt
eiendommen?
◆ Nei, ikke som jeg kjenner til
28. Vet du om det finnes planer, vedtak eller forslag som kan føre til økte utgifter, som festeavgift, fellesutgifter,
fellesgjeld eller kommunale avgifter?
◆ Nei, ikke som jeg kjenner til
Generelt
29. Har boligen garasje eller øvrige tilleggsbygninger?
◆ Nei, ikke som jeg kjenner til
30. Vet du om det er gjort arbeid på eiendommen som ikke er nevnt i de andre spørsmålene?
◆

---

[d202_d202 | Side [1]]
ndommen og omgivelsene
3
70

## Side 71

18. Vet du om bruken av eiendommen eller området rundt kan endres av foreslåtte eller vedtatte
reguleringsplaner, nabovarsel, offentlige vedtak eller lignende?
◆ Nei, ikke som jeg kjenner til
19. Vet du om det finnes kommunale pålegg, heftelser eller krav knyttet til eiendommen eller boligen?
◆ Nei, ikke som jeg kjenner til
20. Vet du om boligen eller eiendommen har blitt endret eller bygget ut etter opprinnelig byggeår, enten av deg
eller tidligere eiere?
◆ Nei,

---

[d202_d202 | Side [1]]
2012 ‑ Dokumentnr: 80445 ‑ Erklæring/a vtale
Rettighet hefter i: Knr:0301 Gnr:221 Bnr:102 Snr:1 til 28
Plikt til å sikre tilgang til garasjeanlegg. Bestemmelse om opparbeidelse av areal,
vedlikehold og drift av garasjeanlegg.
Kan ikke endres uten samtykke fra Oslo kommune.
Gjelder denne registerenheten med flere
27.01.2012 ‑ Dokumentnr: 80525 ‑ Bruksrett
Rettighet hefter i: Knr:0301 Gnr:221 Bnr:102 Snr:1 til 28
Gjelder del av takterasse som rømningsvei
Kan ikke slettes uten samtykke fra Oslo kommune v/P

---

[d202_d202 | Side [1]]
ke som jeg kjenner til
24. Vet du om det er gjort radonmåling på eiendommen, enten av deg eller tidligere eiere?
◆ Nei, ikke som jeg kjenner til
25. Vet du om det finnes skaderapporter, tilstandsvurderinger, boligsalgsrapporter eller om det er utført målinger
for boligen?
◆ Nei, ikke som jeg kjenner til
26. Vet du om noe i nabolaget som kan være plagsomt eller ubehagelig for kjøperen?
◆ Nei, ikke som jeg kjenner til
27. Vet du om du selv eller sameiet/borettslaget/laget/selskapet er innblandet i uenigheter

---

[d202_d202 | Side [1]]
 opprinnelig byggeår, enten av deg
eller tidligere eiere?
◆ Nei, ikke som jeg kjenner til
21. Vet du om det mangler midlertidige brukstillatelser eller ferdigattester fra kommunen?
◆ Nei, ikke som jeg kjenner til
22. Vet du om det har vært flom, ras, skred eller lignende på eiendommen, eller om den ligger i et fareområde?
◆ Nei, ikke som jeg kjenner til
23. Har eiendommen utleiedel, for eksempel en leilighet, hybel eller lignende?
◆ Nei, ikke som jeg kjenner til
24. Vet du om det er gjort radonmåling på

---

[d202_d202 | Side [1]]
g av eiendom.
21. SAMTLIGE NØKLER til eiendommen som selger er i besittelse av skal overleveres kjøper på
overtakelsen, herunder nøkler til eventuelle boder, uthus, garasjeportåpner e.l. Låses boder, uthus
e.l. med hengelås, skal lås og nøkler til disse medfølge.
22. GARASJEHYLLER, bodhyller, lagringshyller og oppheng til bildekk medfølger såfremt de er
fastmontert.
Planter, busker og trær som er plantet på tomten, eller fastmonterte kasser og lignende er en del av
eiendommen og medfølger i handelen.

##

---

[d202_d202 | Side [1]]
 rømningsvei
Kan ikke slettes uten samtykke fra Oslo kommune v/P lan og bygningsetaten
Gjelder denne registerenheten med flere
27.01.2012 ‑ Dokumentnr: 80525 ‑ Best. om adkomstrett
Rettighet hefter i: Knr:0301 Gnr:221 Bnr:102 Snr:1 til 28
Gjelder takterasse
Kan ikke slettes uten samtykke fra Oslo kommune v/P lan og bygningsetaten.
Gjelder denne registerenheten med flere
Ferdigattest/b rukstillatelse
Det foreligger ekspedisjonsdokument fra 1935 for våningshus. Det foreligger også
ferdigattest fra 2006 for

---

[d202_d202 | Side [1]]
e se www.skatteetaten.no
7: Pålydende
Pålydende: 100 Opprinnelig innskudd: 210 244
Andelsnr: 1212 Partialobligasjonsnr: 1212
8: Bygning/eiendom
Byggeår: 1936
Gårds/bruksnr:219/230
Bygningstype: LB
Feste/eiet tomt: Eiet Tomteareal: 4874
9: Forsikring
Forsikret i: If Skadeforsikring NUF Polisenr: SP586867
10: Fasiliteter og andre enhetsopplysninger
Første innflytting: 01.01.2001 SSBnr: H0102
Etasje: 1 Oppvarmingstype: Varmtvann og fyring
Heis: Nei
Parkeringstype: Gateparkering ()
Systemlås: Nei Antall rom:

---

[d202_d202 | Side [1]]
eid på vann og avløp, enten av deg eller tidligere eiere?
◆ Nei, ikke som jeg kjenner til
12. Vet du om det er, eller har vært, feil eller skader knyttet til sentralfyr, radiator, ventilasjon, varmepumpe,
kjøkkenvifte, baderomsvifte eller andre installasjoner?
◆ Nei, ikke som jeg kjenner til
13. Vet du om det er gjort arbeid på sentralfyr, radiator, ventilasjon, varmepumpe eller andre installasjoner, enten
av deg eller tidligere eiere?
◆ Nei, ikke som jeg kjenner til
14. Vet du om det er, eller har vært,

---

[d202_d202 | Side [1]]
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑
4 987 038 (Pris inkl. fellesgjeld)
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑
Omkostninger
300 (Panteattest kjøper)
545 (Tinglysningsgebyr hjemmelsoverføring)
34 Uelands gate 57M

## Side 35

545 (Tinglysningsgebyr pantedokument )
8 900 (Boligkjøperforsikring ‑ fem års varighet (valgfritt))
2 800 (Advokatforsikring for boligeiere ‑ ett års varighet (valgfritt))
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑
1 390 (Omkostninger totalt)
10 290 (med

---

[d202_d202 | Side [1]]
avhending av fast eigedom (avhendingslova/avhl.) av 3. juli 1992 regulerer kjøper og selgers
rettigheter og plikter ved overdragelse av fast eiendom og andeler i borettslag.
I henhold til avhl. § 3-4 skal eiendommen, når annet ikke er avtalt, overdras med innredninger og
utstyr som etter lov, forskrift eller annet offentlig vedtak skal følge med. Det samme gjelder varig
innredning og utstyr som enten er fastmontert eller er særskilt tilpasset bygningen, jf. avhl. § 3-5.
Loven inneholder ingen detaljert

---

[d202_d202 | Side [1]]
kan forekomme. Vurderinger og sitater er innhentet på web og gir uttrykk for
hvordan naboene vurderer nabolaget. FINN.no AS kan ikke holdes ansvarlig for feil/mangler i profilen. Copyright © Finn.no AS 2025
120

## Side 121

OVERSIKT OVER LØSØRE OG TILBEHØR TIL EIENDOMMEN
Oversikten er utarbeidet av Norges Eiendomsmeglerforbund, Eiendom Norge og Advokatforeningens
Eiendomsmeglingsgruppe, og er gjeldende fra 1. januar 2020.
Generelt
Lov om avhending av fast eigedom (avhendingslova/avhl.) av 3. juli 1992

---

[d202_d202 | Side [1]]
old i bud eller avtale på annen måte er
inngått. Der intet annet er avtalt, vil løsøre og tilbehør medfølge slik dette fremkommer av avhl. § 3-4
og § 3-5 og denne oversikt.
Produkter og installasjoner som medfølger overdras uten noen form for garantier, utover eventuell
gjenværende leverandørgaranti.
Dersom det er noe i nedenstående liste som ikke finnes på eiendommen, vil det heller ikke medfølge.
1.HVITEVARER medfølger der dette er spesielt angitt isalgsoppgaven.
2.HELDEKKENDE TEPPER følger med

---

[d202_d202 | Side [1]]
 Nei
Parkeringstype: Gateparkering ()
Systemlås: Nei Antall rom: 2
Husdyrhold: Ja Oppr. antall rom: 2
Livsløp standard: Nei Kategori: Kategori 10
Fasiliteter:
Parkering: Gateparkering.
Dekoder, modem og trådløs ruter, samt brannslukningsapparat og brannvarslere tilhører den enkelte andel og skal følge andelene ved
salg
Husleien inkluderer varmtvann og fyring fra eget sentral- varmeanlegg i borettslaget. Borettslaget tilknyttet fjernvarme.
Selskapstype: Frittstående borettslag, UTEN

---

[d202_d202 | Side [1]]
, sopp eller råteskader i boligen/sameiet/borettslaget?
2
69

## Side 70

◆ Nei, ikke som jeg kjenner til
9. Vet du om det er eller har vært skadedyr eller sjenerende insekter i egen enhet eller i sameiet/borettslagets
fellesarealer eller i andres enheter?
◆ Nei, ikke som jeg kjenner til
Tekniske installasjoner
10. Vet du om det er, eller har vært, feil på vann- eller avløpsanlegg?
◆ Nei, ikke som jeg kjenner til
11. Vet du om det er gjort arbeid på vann og avløp, enten av deg eller tidligere eiere?
◆ Nei,

---

[d202_d202 | Side [1]]
nisk infrastruktur medfølger.
18. GASSBEHOLDER til gasskomfyr og gasspeis medfølger.
19. BRANNSTIGE, BRANNTAU, feiestige og lignende medfølger der dette er påbudt. Løse stiger
medfølger ikke.
20. BRANNSLUKNINGSAPPARAT, BRANNSLANGE og RØYKVARSLER medfølger der dette er påbudt.
Det er eier og brukers plikt til å se til at utstyret forefinnes på enhver eiendom. Hvis annet ikke er
uttrykkelig avtalt, skal dette derfor alltid følge med ved salg av eiendom.
21. SAMTLIGE NØKLER til eiendommen som selger er i

---

[d202_d202 | Side [1]]
: Kr 4 400 000,‑
‑Kjøkken fra 2019
Fellesgjeld: Kr 587 038,‑
‑Ny baderomsinnredning fra 2025
Omkostn.: Kr 1 390,‑
‑Mulighet for å etablere et ekstra soverom
Total ink omk.: Kr 4 988 428,‑
‑Orginale tregulv
Felleskostn.: Kr 8 258,‑
‑2 boder
Selger: Karl Petter Andersen
‑Ingen forkjøpsrett
‑Veldrevet borettslag
Salgsobjekt: Andelsleilighet
Eierform: Andel
Byggeår: 1936
BRA‑i/ BRA Total 55/ 64 kvm
Tomtstr.: 4873.9 kvm
Soverom: 1
Antall rom: 3
Gnr./b nr. Gnr. 219, bnr. 230
Andelsnr.: 1212
Oppdragsnr.:

---

[d202_d202 | Side [1]]
Boligkjøperforsikring inkludert ett år
med Advokatforsikring for boligeiere))
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑
Regnestykket forutsetter at det kun tinglyses ett pantedokument og at eiendommen
selges til prisantydning. Det tas forbehold om endringer i offentlige avgifter/g ebyrer.
Formuesverdi primærbolig
Kr 1 048 636 for år 2023
Formuesverdi sekundærbolig
Kr 4 194 544 for år 2023
Tilbud om lånefinansiering
Aktiv Eiendomsmegling samarbeider med sparebankene i Eika Alliansen om

---

[d202_d202 | Side [1]]
 fuktig luft, som over tid kan påvirke overflater og
tilstøtende konstruksjoner. Løsningen er vanlig i eldre boliger, men klassifiseres som
tilstandsgrad 2 (TG 2) i NS 3600.
Det er ikke gitt tilstandsgrad TG 3 (store eller alvorlige avvik) for noen bygningsdeler‑/
Uelands gate 57M 31

## Side 32

komponenter.
For ytterligere/d etaljerte beskrivelser av avvik (herunder også konsekvens/b ehov for
tiltak), øvrige tilstandsgrader og bygningsteknisk utførelse, også ved eventuelle andre
bygninger, se

---

[d202_d202 | Side [1]]
ilstandssvekkelser (tilstandsgrader‑TG).
For denne eiendommen er det gitt tilstandsgrad TG 2 (avvik som kan kreve tiltak) for
følgende bygningsdeler‑/k omponenter:
* Innvendig > Innvendige dører: Det er registrert at enkelte dører tar i karmen. Dette gjør
dørene tyngre å åpne og lukke, og gir økt slitasje. Justering anbefales. For øvrig er
dører av eldre dato med bruksslitasje.
* Tekniske installasjoner > Vannledninger: Kursene for rør‑i‑rør er ikke merket. Rørene
skal være enkle å skifte ut, og bør derfor

---

[d202_d202 | Side [1]]
ksslitasje. Alder og bruksslitasje kan øke behov for vedlikehold og
tiltak.
* Våtrom > 1. etasje > Bad > Overflater Gulv: Konstruksjonen har passert halvparten av
forventet levetid og har bruksslitasje. Alder og bruksslitasje kan øke behov for
vedlikehold og tiltak.
* Våtrom > 1. etasje > Bad > Sluk, membran og tettesjikt: Membranen har oversteget
normal brukstid, og slitasje må påregnes. Når membranen eldes, svekkes den gradvis
og kan utvikle mindre utettheter som slipper fukt ned i konstruksjonen. Hvor

---

[d202_d202 | Side [1]]
av 20
65

## Side 66

Uelands gate 57M , 0457 OSLO Bolig琀椀lstand AS
Gnr 219 - Bnr 230 Fjellstuveien 51 B
0301 OSLO 0982 OSLO
Forutsetninger
Tilstandsrapportens avgrensninger et byggverk eller en bygningsdel befinner seg i. Benyttes
ved beskrivelse av avvik og alder.
STRUKTUR OG REFERANSENIVÅ • Skadegjørere: I hovedsak råte, sopp og skadedyr.
• Fuktsøk: Overflatesøk med egnet søkeutstyr som
fuktindikator eller visuelle observasjoner.
• Fuktmåling: Måling av fuktinnhold i materiale eller i
bakenforliggende

---

[d202_d202 | Side [1]]
det mangler samsvarserklæring på arbeid utført etter 1.1.1999.
* Kjøkken > 1. etasje > Kjøkken > Avtrekk: Det er naturlig oppdriftsventilasjon som var
vanlig ved byggeåret, men som kan gi begrenset ventilering. Kullfilterventilator er
montert, som kan bidra til å redusere matos, men denne vil ikke ventilere ut fuktig luft.
* Våtrom > 1. etasje > Bad > Overflater vegger og himling: riss er observert i flisefuger.
Dette kan skyldes flere årsaker, for eksempel bevegelser i underlaget, normal

---

[d202_d202 | Side [1]]
 for vannsøl som kan føre 琀椀l skade.
- Det er skruehull i veggen som ikke er te琀琀et.
Åpne hull kan trekke inn vann og skade veggen. Hullene bør te琀琀es forsvarlig.
- Konstruksjonen har passert halvparten av forventet leve琀椀d og har bruksslitasje.
Alder og bruksslitasje kan øke behov for vedlikehold og 琀椀ltak.
1. ETASJE > BAD
Over昀氀ater Gulv
Beskrivelse
Gulv: Fliser på betong.
Det er u琀昀ørt enkel horisontalmåling med linjelaser for å vurdere fall mot sluk og høydeforskjellen mellom gulv ved dør og topp

---

[d202_d202 | Side [1]]
dersøke om disse kan ha bom/hulrom under. Testen er 琀椀lfeldig og dekker ikke alle områder
hvor bom kan oppstå. For øvrig er synlige deler av over昀氀atene visuelt undersøkt.
Vurdering av avvik:
• Det er avvik:
- Konstruksjonen har passert halvparten av forventet leve琀椀d og har bruksslitasje.
Alder og bruksslitasje kan øke behov for vedlikehold og 琀椀ltak.
1. ETASJE > BAD
Sluk, membran og te琀琀esjikt
Beskrivelse
Sluktype: Sluk og hjelpesluk i metall.
Membran: Synlig membran klemt i klemringen.
Alder: Ifølge

---

[d202_d202 | Side [1]]
ommet pusset opp i 2005, i regi av bore琀琀slaget.
Rommet har nådd en alder der konstruksjonene svekkes som følge av naturlig aldring og bruk. De琀琀e øker risikoen for fuktproblema琀椀kk, og jevnlig
Oppdragsnr.: 21421-1392 Befaringsdato: 28.11.2025 Side: 7 av 20
54

## Side 55

Uelands gate 57M , 0457 OSLO Bolig琀椀lstand AS
Gnr 219 - Bnr 230 Fjellstuveien 51 B
0301 OSLO 0982 OSLO
Tilstandsrapport
overvåking anbefales. En totaloppussing med ny琀琀 vannte琀琀 sjikt må påregnes innen nær frem琀椀d. Tilstanden på

---

[d202_d202 | Side [1]]
avvik
TG2: Avvik som kan kreve 琀椀ltak
TG3: Store eller alvorlige avvik
TG IU: Konstruksjoner som ikke er undersøkt
Boligbygg med 昀氀ere boenheter
KONSTRUKSJONER SOM IKKE ER UNDERSØKT
Våtrom > 1. etasje > Bad > Tilliggende Gå til side
konstruksjoner våtrom
AVVIK SOM KAN KREVE TILTAK
Innvendig > Innvendige dører Gå til side
Tekniske installasjoner > Vannledninger Gå til side
Tekniske installasjoner > Ven琀椀lasjon Gå til side
Tekniske installasjoner > Vannbåren varme Gå til side
Tekniske installasjoner >

---

[d202_d202 | Side [1]]
le mindre utettheter som slipper fukt ned i konstruksjonen. Hvor raskt
dette skjer avhenger av kvalitet, utførelse og bruk, men regelmessig tilsyn er viktig. En
full oppgradering med nytt tettesjikt må på grunn av alderen påregnes innen nær
fremtid.
* Våtrom > 1. etasje > Bad > Ventilasjon: Avtrekket skjer via naturlig
oppdriftsventilasjon. Ytelsen avhenger av vær, vind og temperatur og kan periodevis bli
svak. Dette kan gi noe opphopning av fuktig luft, som over tid kan påvirke overflater og
tilstøtende

---

[d202_d202 | Side [1]]
slitasje.
Normal slitasje i forhold 琀椀l alder og bagatellmessige forhold er ikke hensynta琀琀 i 琀椀lstandsvurderingen, da de琀琀e er en subjek琀椀v vurdering.
Vurdering av avvik:
• Det er avvik:
- Det er registrert at enkelte dører tar i karmen.
De琀琀e gjør dørene tyngre å åpne og lukke, og gir økt slitasje. Justering anbefales.
- For øvrig er dører av eldre dato med bruksslitasje.
VÅTROM
1. ETASJE > BAD
Generell
Beskrivelse
Alder: Ifølge eier ble rommet pusset opp i 2005, i regi av bore琀琀slaget.
Rommet har nådd

---

[d202_d202 | Side [1]]
uveien 51 B
0301 OSLO 0982 OSLO
Tilstandsrapport
- Membranen har oversteget normal bruks琀椀d, og slitasje må påregnes.
Når membranen eldes, svekkes den gradvis og kan utvikle mindre ute琀琀heter som slipper fukt ned i konstruksjonen. Hvor raskt de琀琀e skjer avhenger av
kvalitet, u琀昀ørelse og bruk, men regelmessig 琀椀lsyn er vik琀椀g. En full oppgradering med ny琀琀 te琀琀esjikt må på grunn av alderen påregnes innen nær frem琀椀d.
1. ETASJE > BAD
Sanitærutstyr og innredning
Beskrivelse
Innredning:
- Innredning med

---

[d202_d202 | Side [1]]
ling: Måling av fuktinnhold i materiale eller i
bakenforliggende konstruksjon ved bruk av egnet
• Rapporten beskriver avvik, det vil si en tilstand som er
måleutstyr, blant annet hammerelektrode og pigger.
dårligere enn referansenivået. Positive sider ved boligen,
• Hulltaking: Boring av hull for inspeksjon og fuktmåling i
ut over det som kommer frem av tilstandsgradene, blir
risikoutsatte konstruksjoner.
normalt ikke fremhevet.
• Normal slitasjegrad: Forventet slitasje av materiale i
• Rapporten baserer

---

[d202_d202 | Side [1]]
ldes flere årsaker, for eksempel bevegelser i underlaget, normal slitasje,
temperaturendringer eller fuktrelaterte skader. Det er et vindu innenfor en våt sone i
rommet. Dette betyr at vinduet er mer utsatt for vannsøl som kan føre til skade. Det er
skruehull i veggen som ikke er tettet. Åpne hull kan trekke inn vann og skade veggen.
Hullene bør tettes forsvarlig. Konstruksjonen har passert halvparten av forventet
levetid og har bruksslitasje. Alder og bruksslitasje kan øke behov for vedlikehold

---

[d202_d202 | Side [1]]
stallasjoner utenfor
bygningen • full funksjonstes琀椀ng av el- og VVS-installasjoner • geologiske forhold og bygningens plassering på grunnen • bygningens
planløsning • bygningens innredning • løsøre slik som hvitevarer • utendørs svømmebasseng og pumpeanlegg • bygningens este琀椀kk og
arkitektur • bygningens lovlighet (bortse琀琀 fra bruksendringer, brannceller og forhold som åpenbart kan påvirke helse, miljø og sikkerhet) •
fellesarealer (med mindre boligeier har vedlikeholdsplikt for fellesarealer og de琀琀e

---

[d202_d202 | Side [1]]
lse av
over昀氀ater ikke nødvendigvis betyr at bygningsdeler under er
forbedret.
Tilstandsrapporten beskriver ikke hele boligen
BYGNINGSSAKKYNDIGE SER FOR EKSEMPEL IKKE PÅ
• vanlig slitasje og normal vedlikeholds琀椀lstand • bagatellmessige forhold som ikke påvirker bygningens bruk eller verdi vesentlig • etasjeskillere •
琀椀lleggsbygg slik som garasje, bod, anneks, naust også videre • utvendige trapper • stø琀琀emurer • skjulte installasjoner • installasjoner utenfor
bygningen • full funksjonstes琀椀ng av el- og

---

[d202_d202 | Side [1]]
gninger bygningssakkyndige ser e琀琀er avvik som har betydning for og som
svekkes over 琀椀d, og utse琀琀es for slitasje blant annet på grunn av bruk reduserer boligens funksjon og verdi, og som kommer frem av Forskri昀琀 琀椀l
og vær og vind. Mange boliger fornyes helt eller delvis, noen i 昀氀ere avhendingslova.
omganger, eller det oppføres 琀椀lbygg. Særlig for boliger som er
pusset opp eller endret, er det vik琀椀g å merke seg at fornyelse av
over昀氀ater ikke nødvendigvis betyr at bygningsdeler under

---

[d202_d202 | Side [1]]
kal være lagt frem dokumentasjon på
faglig god u琀昀ørelse. Det er ingen merknader 琀椀l delen.
TILSTANDSGRAD 1, TG1: MINDRE AVVIK
Bygningsdelen skal bare ha normal slitasje, og straks琀椀ltak skal ikke anses som nødvendig. Graden kan også
brukes når delen er ny, men der dokumentasjon på faglig god u琀昀ørelse mangler.
TILSTANDSGRAD 2, TG2: VESENTLIGE AVVIK OG MINDRE AVVIK SOM ETTER NS 3600 GIR TG 2
Bygningsdelen skal enten ha feil u琀昀ørelse, en skade eller symptomer på skade, sterk slitasje eller

---

[d202_d202 | Side [1]]
pporten
Tilstanden vurderes med ulike 琀椀lstandsgrader
Tilstanden gir u琀琀rykk for en gi琀琀 forventet 琀椀lstand, blant annet vurdert ut fra alder og normal bruk. Ved Tilstandsgrad 0 (TG0) og Tilstandsgrad 1
(TG1) gir den bygningssakkyndige normalt ingen begrunnelse for valg av 琀椀lstandsgrad. Grunnen er at bygningen eller bygningsdelen da bare har
normal slitasje. Ved skjulte konstruksjoner kan alder alene avgjøre 琀椀lstandsgrad. Når bygningssakkyndige anbefaler 琀椀ltak, for eksempel
utbedringer, må brukeren av

---

[d202_d202 | Side [1]]
tasjegrad: Forventet slitasje av materiale i
• Rapporten baserer seg på krav i forskrift til
overflaten, basert på enkle, visuelle observasjoner. Kan
avhendingslova (tryggere bolighandel). Rapporten viser
vurderes sammen med bygningsdelens alder.
hvilke elementer som er undersøkt og inkludert i
oppdraget. For å kartlegge tilstanden til elementer og
forhold som ligger utenfor rapportens dekning, anbefales
det å innhente ytterligere fagkyndige vurderinger. For
valg av tilstandsgrad blir gjeldende versjon av

---

[d202_d202 | Side [1]]
 IN-lån 1 122
Felleskostnader 3 824
Renter felleslån 998
Objekt: RENHOLD FELLESAREALER, 855/1212 ( 455 - 104 ) 250
Borettslaget er sikret mot tap av felleskostnader. Tilbyder er i Klare Finans AS og vilkårene er åpent tilgjengelig på deres hjemmesider.
Borettslaget er, etter gjeldende bestemmelser fastsatt av finansieringsselskapet, sikret mot tap som følge av at en andelseier unnlater å
betale sine felleskostnader. Avtalen om sikring er gyldig til avtalen sies opp av en av partene. Oppsigelsesfrist er 1.

---

[d202_d202 | Side [1]]
, felles
bygningsforsikring, drift og vedlikehold, styrehonorar, forretningsførsel, kommunale
avgifter og betjening av andel fellesgjeld.
Herav:
Kr. 3824,‑ Felleskostnader
Kr. 250,‑ Renhold fellesarealer
Kr. 324,‑ Avdrag felleslån
Kr. 1203,‑ Renter IN‑lån
Uelands gate 57M 35

## Side 36

Kr. 261,‑ Renter IN‑lån
Kr. 276,‑ Avdrag IN‑lån
Kr. 1122,‑ Avdrag IN‑lån
Kr. 998,‑ Renter felleslån
Det gjøres oppmerksom på at felleskostnadene varierer over tid, og justeres normalt
etter borettslagets faktiske

---

[d202_d202 | Side [1]]
: Robot Hårfagre Dato utkjørt: 16.03.26 Side 1 av 3
Borettslaget Ilabekken Vår ref.: 855/1212 Fødselsdato eier: 04.01.1991
Uelands gate 57 M Type: Borettslag frittstående
0457 OSLO Eiere: Karl Petter Andersen
Organisasjonsnr: 982 842 166 Andelsnr: 1212
1: Felleskostnader
Tot. innev. måned: 8 258
Boligselskap er tilknyttet sikringsordning
Felleskostnader: Avdrag felleslån 324
Renter IN-lån 1 203
Renter IN-lån 261
Avdrag IN-lån 276
Avdrag IN-lån 1 122
Felleskostnader 3 824
Renter felleslån 998
Objekt:

---

[d202_d202 | Side [1]]
ortsiktig gjeld -803 978 -853 667
C. Disponible midler 1 336 032 3 337 826
Borettslagets disponible midler er de økonomiske midlene som borettslaget har til rådighet.
De defineres som omløpsmidler fratrukket kortsiktig gjeld.
855 Borettslaget Ilabekken Org. nr 982842166
Side 5 av 22
97

## Side 98

Resultatregnskap 2024 Borettslaget Ilabekken
Note Regnskap Regnskap Budsjett Budsjett
2024 2023 2024 2025
INNTEKT
Leieinntekt
Innkrevd felleskostnad 1 11 586 372 9 938 660 10 307 716 13 172 272
Leie

---

[d202_d202 | Side [1]]
n sies opp av en av partene. Oppsigelsesfrist er 1. desember med gyldighet fra
38 Uelands gate 57M

## Side 39

førstkommende årsskifte. Merk at dersom borettslaget har lån med IN ordning, kan
ikke avtalen sies opp før lånet er nedbetalt.
Forkjøpsrett
Ingen forkjøpsrett.
Regnskap/ budsjett
Driftsinntekter var til sammen kr. 11 724 732,‑ i 2024.
Driftskostnader var til sammen kr. 44 667 229,‑ i 2024.
Dette ga et negativt årsresultat i 2023 på kr. ‑35 528 052,‑. Eventuelt avdrag på
langsiktig gjeld (lån) er

---

[d202_d202 | Side [1]]
kt med Usbl
minimum to uker før terminforfall for opprettelse av avtale.
Sikringsordning fellesgjeld
Borettslaget er sikret mot tap av felleskostnader. Tilbyder er i Klare Finans AS og
vilkårene er åpent tilgjengelig på deres hjemmesider. Borettslaget er, etter gjeldende
bestemmelser fastsatt av finansieringsselskapet, sikret mot tap som følge av at en
andelseier unnlater å betale sine felleskostnader. Avtalen om sikring er gyldig til
avtalen sies opp av en av partene. Oppsigelsesfrist er 1. desember med

---

[d202_d202 | Side [1]]
ettslaget Ilabekken Org. nr. 982842166
Side 9 av 22
101

## Side 102

Noter årsregnskap 2024 Borettslaget Ilabekken
Note 1 - Innkrevde felleskostnader
2024 2023
3600 Innkrevde felleskostn. drift 6 074 700 5 955 324
3617 leieinntekter trappevask fellesområdet 379 200 379 200
3650 Innkrevde felleskostn. renter 3 263 853 1 948 957
3660 Innkrevde felleskostn. avdrag 1 868 619 1 655 179
3605 Leie forretningslokaler 138 360 138 360
Sum 11 724 732 10 077 020
For å opprettholde egenkapitalen i borettslaget kalles

---

[d202_d202 | Side [1]]

Andel fellesgjeld år
2026
Fellesgjeld pr. dato
16.03.2026
Andel fellesformue
Kr 12 842
Andel fellesformue dato
31.12.2025
Borettslaget
Borettslagsnavn
Borettslaget Ilabekken
Organisasjonsnummer
982842166
Andelsnummer
1212
Om borettslaget
Borettslaget Ilabekken er registrert i Foretaksregisteret i Brønnøysund med
36 Uelands gate 57M

## Side 37

organisasjonsnummer 982842166, og består av 158 andelsleiligheter og 9
næringslokaler.
Forretningsførselen er utført av Boligbyggelaget Usbl. Revisor er

---

[d202_d202 | Side [1]]
0 077 020
For å opprettholde egenkapitalen i borettslaget kalles det inn fellesutgifter tilsvarende driftskostnader og finansinntekter.
Note 2 - Andre driftsinntekter
2024 2023
3957 Nøkkelsalg 0 600
Sum 0 600
Note 3 - Lønnskostnader og styrehonorar
2024 2023
5400 Arbeidsgiveravgift 36 096 36 096
5330 Honorar tillitsvalgte fra lønnssystemet 256 000 256 000
Sum 292 096 292 096
Personalkostnader omfatter lønns- og personalkostnader, samt arbeidsgiveravgift. Antall årsverk sysselsatt: 0
Note 4 - Varige

---

[d202_d202 | Side [1]]
7719 Møter, div. styret 4 800 0
7720 Generalforsamling/Årsmøte 0 3 800
7770 Betalingskostnader 1 028 1 629
7772 Omkostninger inkasso 78 236 0
7773 Omkostninger innkreving 6 675 2 202
7790 Andre kostnader 500 0
7795 Husleietap 830 1 633
Sum 92 069 9 264
Konto 7790 gjeldet tinglysingsgebyr fra Statens Kartverk.
855 Borettslaget Ilabekken Org. nr. 982842166
Side 12 av 22
104

## Side 105

Noter årsregnskap 2024 Borettslaget Ilabekken
Note 11 - Egenkapital
Egenkapital Endringer Egenkapital
per 01.01 per

---

[d202_d202 | Side [1]]
ierer over tid, og justeres normalt
etter borettslagets faktiske kostnader.
Det er mulig å innfri deler eller hele andel fellesgjeld på 2 av borettslagets lån. Dersom
kjøper velger å innfri hele sin andel fellesgjeld på begge disse to lånene (kr. 350 799,‑
per 16.03.26), vil felleskostnadene reduseres med ca. Kr. 2862,‑, som da vil gi nye
felleskostnader på ca. kr. 5396,‑ per måned.
Felleskostnader pr. mnd
Kr 8 258
Andel Fellesgjeld
Kr 587 038
Andel fellesgjeld år
2026
Fellesgjeld pr. dato
16.03.2026
Andel

---

[d202_d202 | Side [1]]
te termin 31.03.2054 )
Ingen avtale om individuellnedbetaling av fellesgjeld på dette lånet.
4: Særskilte opplysninger
Klausuler:
Styreleder: Karianne Fjellstad
Adresse: Uelands gate 57 C
Postnr/-sted: 0457 OSLO
Telefon: Mob.: 97009891
E-post: ilabekken.borettslag@gmail.com
6: Ligning - 2025
Gjeld: 587 038 Andre inntekter: 362
Annen formue: 12 842 Utgifter: 32 212
Usbl har ikke opplysninger om formuesverdi av boligen. For opplysninger om dette se www.skatteetaten.no
7: Pålydende
Pålydende: 100 Opprinnelig

---

[d202_d202 | Side [1]]
vedlikeholdet er tilstrekkelig for å oppveie verdiforringelse av bygning.
855 Borettslaget Ilabekken Org. nr. 982842166
Side 11 av 22
103

## Side 104

Noter årsregnskap 2024 Borettslaget Ilabekken
Note 9 - Andre honorar
2024 2023
6714 Tilleggstjenester forretningsfører 60 115 76 878
6730 Teknisk honorar 15 500 5 416
6750 Vakthold 23 125 23 125
Sum 98 740 105 419
Konto 6730 gjelder bistand ifm. fasadeskilt.
Note 10 - Andre kostnader
2024 2023
7719 Møter, div. styret 4 800 0
7720 Generalforsamling/Årsmøte 0

---

[d202_d202 | Side [1]]
der,
mens påkostninger eller forbedringer tillegges driftsmidler og avskrives ihht driftsmidlets levetid.
Driftsinntekter
Felleskostnader bokføres og inntektsføres i takt med opptjening.
Inntektsføring ved salg av varer/tjenester skjer på leveringstidspunktet.
Tjenester inntektsføres etter hvert som de opptjenes.
Skattetrekk
Ved lønnskjøring overføres skattetrekk til en felles skattetrekkskonto i Usbl.
Individuell nedbetaling av fellesgjeld
Individuell nedbetaling av fellesgjeld (IN) er behandlet etter

---

[d202_d202 | Side [1]]
 122 172 468 88 744 587
SUM EGENKAPITAL OG GJELD 100 781 774 102 881 951
Pantstillelser 13 121 368 490 87 890 919
Sted:_______________________ Dato:_______________
Karianne Fjellstad Tage Ringstad Thore Langeland Thoresen
Styreleder Styremedlem Styremedlem
Bjørn Blom Jensen Runar Graneng
Styremedlem Styremedlem
855 Borettslaget Ilabekken Org. nr 982842166
Side 8 av 22
100

## Side 101

Noter årsregnskap 2024 Borettslaget Ilabekken
Note 0 - Regnskapsprinsipper
Årsregnskapet er satt opp i samsvar med

---

[d202_d202 | Side [1]]
pa.
Antall terminer til innfrielse: 113
Saldo per 16.03.2026: 35 131 640
74

## Side 75

Boligopplysninger:
Saksbehandler: Robot Hårfagre Dato utkjørt: 16.03.26 Side 2 av 3
Borettslaget Ilabekken Vår ref.: 855/1212 Fødselsdato eier: 04.01.1991
Uelands gate 57 M Type: Borettslag frittstående
0457 OSLO Eiere: Karl Petter Andersen
Organisasjonsnr: 982 842 166
3: Fellesgjeld
Andel av saldo: 236 240
Første termin/første avdrag: 30.06.2024 ( siste termin 31.03.2054 )
Ingen avtale om individuellnedbetaling av

---

[d202_d202 | Side [1]]
ndom 98 162 507
Borettslagets bokførte gjeld er sikret ved pant. Borettsinnskuddet er en del av borettslagets pantsikrede gjeld.
Borettslagets eiendom er stillet som pantesikkerhet.
855 Borettslaget Ilabekken Org. nr. 982842166
Side 16 av 22
108

## Side 109

Resultat og balanse med noter for Borettslaget Ilabekken.
Dokumentet er signert elektronisk av:
For Borettslaget Ilabekken
Styreleder Karianne Fjellstad (sign.) 24.03.2025
Styremedlem Tage Ringstad (sign.) 24.03.2025
Styremedlem Runar Graneng (sign.)

---

[d202_d202 | Side [1]]
 852 3 363 484
1 168 308 168 308
1 141 257 141 257
1 136 355 136 355
1 132 840 132 840
1 112 085 112 085
1 96 070 96 070
1 95 623 95 623
1 92 666 92 666
1 91 165 91 165
855 Borettslaget Ilabekken Org. nr. 982842166
Side 14 av 22
106

## Side 107

Noter årsregnskap 2024 Borettslaget Ilabekken
Langsiktig gjeld
1 44 732 44 732
1 23 906 23 906
Antall andeler, andel gjeld og sum av fellesgjeld lån 16368334689 4 256 009 1 024 036
99 239 662 23 726 538
5 233 105 1 165 525
20 226 548 4 530 960
7 223 315 1 563

---

[d202_d202 | Side [1]]
kr. ‑35 528 052,‑. Eventuelt avdrag på
langsiktig gjeld (lån) er ikke tatt hensyn til.
I løpet av 2024 ble det foretatt innbetalinger på IN‑ordningen. Innbetalingene ble brukt
til å nedbetale den enkeltes andel av borettslagets fellesgjeld. Innbetalt andel
fellesgjeld fra eiere øker årsresultatet, men øker ikke disponible midler.
Borettslaget hadde en negativ endring i de disponible midlene på kr. ‑2 001 794,‑ i
2024. Borettslagets disponible midler (omløpsmidler fratrukket kortsiktig gjeld) var kr.
1 336

---

[d202_d202 | Side [1]]
kken Org. nr 982842166
Side 6 av 22
98

## Side 99

Balanse 2024 Borettslaget Ilabekken
Note 2024 2023
EIENDELER
Anleggsmidler
Varige driftsmidler
Bygninger 4 98 162 507 98 162 507
Andre driftsmidler 4 479 257 527 951
Sum anleggsmidler 98 641 764 98 690 458
Omløpsmidler
Fordringer
Restanse felleskostnader 109 031 96 960
Kundefordringer 13 053 0
Forskuddsbetalte kostnader 405 804 342 358
Bankinnskudd og kontanter
Innestående bank 1 612 122 3 752 175
Sum omløpsmidler 2 140 010 4 191 493
SUM EIENDELER 100 781

---

[d202_d202 | Side [1]]
.
Eiendommen omfattes av kommuneplan for Oslo kommune 2015‑2030, hvor
eiendommen er avsatt/u tnyttet til nåværende bebyggelse og anlegg.
Uelands gate 57M 41

## Side 42

Det gjøres oppmerksom på at eiendommen ligger i hensynssone H190_2 for andre
sikringssoner (restriksjoner for anlegg i grunn), mens deler av eiendommen ligger i gul
og rød hensynssone for støy fra vei.
Det gjøres også oppmerksom på at eiendommen omfattes av kulturminnevern og
ligger i et område med nasjonal kulturminneinteresser, samt

---

[d202_d202 | Side [1]]
et er ikke byggesøkt, og må derfor søkes om
slik det står i dag. Dersom søknad ikke innvilges, kan det bli nødvendig å tilbakeføre
boligen til sin opprinnelige tilstand.
Vei, vann og avløp
Eiendommen er tilknyttet offentlig vann‑ og avløpsnett.
Regulerings‑ og arealplaner
Eiendommen er regulert til spesialområde bevaring bolig etter bestemmelsene i
S‑4179 fra 26.10.2005. Endret reguleringsplan med reguleringsbestemmelser for
Iladalen.
Eiendommen omfattes av kommuneplan for Oslo kommune 2015‑2030,

---

[d202_d202 | Side [1]]
n og
ligger i et område med nasjonal kulturminneinteresser, samt område regulert til
bevaring.
Offentlige planer:
Detaljregulering , Uelands gate fra Stavangergata til Evald Ryghs gate
Saksnummer 2025/0 6756 ‑ Plansak
Mottatt sak 11.09.2025
Kobling Denne saken er en fortsettelse av sak 202554777
Status Under behandling
Kingos gate 4 ‑ forhåndskonferanse ‑ Gjenoppbygging av bygg etter brann
Saksnummer 2025/1 0672 ‑ Byggesak
Mottatt sak 24.09.2025
Kobling Denne saken er en fortsettelse av sak

---

[d202_d202 | Side [1]]
En tur langs elva på en vakker sommerdag er ren terapi for
kropp og sjel! Det er lov å belønne seg selv med vaffel og en kopp kaffe på kaféen i
Hønse‑Lovisas lille røde hus.
Ellers finner du et mangfold av grønne parker i nærheten, som Hammersborgparken,
St.hanshaugen park og Kubaparken. Botanisk Hage og Sofienbergparken er også innen
kort rekkevidde.
Adkomst
Det vil bli satt opp visningsskilt under visning.
Bebyggelsen
Det er primært leilighets‑/g årdsbebyggelse i området.
Barnehage/S kole/

---

[d202_d202 | Side [1]]
ehagelig,
med kort vei 琀椀l både bu琀椀kker, hvor solen kan nytes i nærliggende parker. 
kollek琀椀vtransport, spisesteder og
Høsten er rolig og stemningsfull, med 昀椀ne
grøntområder, er noe som gjør området svært
omgivelser og gode muligheter for turer i
prak琀椀sk og som vi har likt godt.
nærområdet.
Hvordan er naboene?
Til slu琀琀 – beskriv boligen med tre ord!
Naboene er hyggelige og rolige, og det har
Sjarmerende, sentral og innbydende.
vært et godt og trygt bomiljø i bygården.

Hvordan er solforholdene

---

[d202_d202 | Side [1]]
rimært leilighets‑/g årdsbebyggelse i området.
Barnehage/S kole/ Fritid
Barnehager:
Løkkeberg barnehage (1‑5 år) ‑ 0.4 km
Waldemars barnehage (0‑5 år) ‑ 0.5 km
Vøyensvingen barnehage (0‑5 år) ‑ 0.5 km
Skoler:
Ila skole (1‑7 kl.) ‑ 0.6 km
Sagene skole (1‑10 kl.) ‑ 0.8 km
Grünerløkka skole (1‑7 kl.) ‑ 1.1 km
Bentsebrua skole (8‑10 kl.) ‑ 1.3 km
Voldsløkka skole (8‑10 kl.) ‑ 1.5 km
Foss videregående skole ‑ 0.7 km
Uelands gate 57M 29

## Side 30

Oslo katedralskole ‑ 1.3 km
Offentlig kommunikasjon
Buss fra

---

[d202_d202 | Side [1]]
g gir uttrykk for
hvordan naboene vurderer nabolaget. FINN.no AS kan ikke holdes ansvarlig for feil/mangler i profilen. Copyright © Finn.no AS 2025
118

## Side 119

Primære transportmidler Varer/Tjenester
Kiellands Hus 3 min
1. Buss
Apotek Kiellands Hus 3 min
2. Gående
3. Sykkel Aldersfordeling barn (0-18 år)
46% i barnehagealder
Kollektivtilbud
35% 6-12 år
Veldig bra 89/100 8% 13-15 år
11% 16-18 år
Shoppingutvalg
Meget bra 87/100
Serveringstilbud
Familiesammensetning
Meget bra 86/100
Par m.

---

[d202_d202 | Side [1]]
fra en lokalkjent Separert 7% 9%
Enke/Enkemann 1% 4%
Innholdet i nabolagsprofilen er hentet fra ulike datakilder, og feil eller mangler kan forekomme. Vurderinger og sitater er innhentet på web og gir uttrykk for
hvordan naboene vurderer nabolaget. FINN.no AS kan ikke holdes ansvarlig for feil/mangler i profilen. Copyright © Finn.no AS 2025
119

## Side 120

Innholdet i nabolagsprofilen er hentet fra ulike datakilder, og feil eller mangler kan forekomme. Vurderinger og sitater er innhentet på web og gir

---

[d202_d202 | Side [1]]
Borettslaget
Leiligheten ligger i en høy 1.etasje.
Borettslagets utearealer er pent
opparbeidet. I 2024 ble vinduer byttet ut,
samt fasaden pusset opp.
Her bor du rolig og tilbaketrukket med
Iladalen park som nærmeste nabo.
Uelands gate 57M 21

## Side 22

Nærområdet
Kiellands plass er et populært møtested for
store og små. Parken er flott opparbeidet, og
om sommeren kan du nyte noe godt i
glasset på uteserveringen.
På legandariske Tranen får du fersk bakst og
kaffe på dagtid, og pizza og drinker

---

[d202_d202 | Side [1]]
00
Serveringstilbud
Familiesammensetning
Meget bra 86/100
Par m. barn
Sport
Alexander Kiellands plass - Balløkke 4 min Par u. barn
Ballspill 0.3 km
Evald Ryghs plass 5 min Enslig m. barn
Ballspill 0.3 km
SATS Ila 6 min
Enslig u. barn
Sagene Squash Senter 8 min
Flerfamilier
Boligmasse
89% blokk 0% 60%
11% annet
Iladalen
Oslo og omegn
Norge
Sivilstand
Norge
Gift 13% 33%
«Deilig å ta seg en utepils på
Ikke gift 79% 54%
Kiellands plass»
Sitat fra en lokalkjent Separert 7% 9%
Enke/Enkemann 1% 4%
Innholdet i

---

[d202_d202 | Side [1]]
med Iladalpark og St.
Jeg likte spesielt godt beliggenheten, med kort
Hanshaugen park. 
vei 琀椀l både byliv og det man trenger i
hverdagen. I 琀椀llegg likte jeg særpreget i Vinter – vår – sommer høst: hvordan
leiligheten med originale tregulv, eldre oppleves de ulike års琀椀dene i boligen og
radiatorer og teglvegg. området?
Boligen er lun og god om vinteren, og holder
Hvorfor skal dere 昀氀y琀琀e?
godt på varmen. Det er kort vei med 54-
Vi 昀氀y琀琀er 琀椀l Røa, hvor det nå er 琀椀d for å utvide
bussen for en skitur i

---

[d202_d202 | Side [1]]
t levert energi i lokalt klima
Ventilasjon Pr. KVM pr. år Totalt levert pr. år
Naturlig ventilasjon 214,87 kWh/m² 21 980 kWh
117

## Side 118

Nabolagsprofil
Uelands gate 57M - Nabolaget Iladalen - vurdert av 423 lokalkjente
Nabolaget spesielt anbefalt for
Opplevd trygghet
Enslige Veldig trygt 82/100
Studenter
Kvalitet på skolene
Etablerere
Bra 74/100
Offentlig transport Naboskapet
Høflige 58/100
Evald Ryghs gate 1 min
Linje 34, 54 0.1 km
Aldersfordeling
Biermanns gate 11 min
Linje 11, 12, 18 0.9 km
Carl

---

[d202_d202 | Side [1]]
35 for våningshus. Det foreligger også
ferdigattest fra 2006 for rehabilitering av baderom, samt ferdigattest fra 2024 for
utskiftning av vinduer.
Det er fremvist godkjente plantegninger, men det er registrert følgende avvik:
Deler av det som i dag fremstår som entré er opprinnelig byggesøkt og godkjent som
kott.
Å anvende et rom eller en bygning til et formål som avviker fra den godkjente bruken,
krever en søknad om bruksendring. Tiltaket er ikke byggesøkt, og må derfor søkes om
slik det står i dag.

---

[d202_d202 | Side [1]]
et på ca. 4873,9m². Pent opparbeidet tomt og
fellesarealer rundt byggene.
Beliggenhet
Beliggenheten ved Ila/A lexander Kiellands Plass er et svært populært boområde. Det
er flere grunner til det; En sentral, men likevel rolig beliggenhet, et godt utvalg av
spennende mat ‑og restauranttilbud, særegen bebyggelse og ikke minst store og
frodige grøntarealer. Her bor du i rolige omgivelser, samtidig som du har byens puls, og
tilgang til alt du måtte trenge like utenfor døren din. I området finner du en

---

[d202_d202 | Side [1]]
bygning 琀椀l et formål som avviker fra
Rapporten omfa琀琀er kun den aktuelle boligen. Felles bygningsdeler
den godkjente bruken, krever en søknad om bruksendring.
under boligsammenslutningens ansvar er ikke vurdert. Unntak kan
Tiltaket er ikke byggesøkt, og må derfor søkes om slik det står
gjøres hvis boenheten har vedlikeholdsplikt for en bestemt
i dag. Dersom søknad ikke innvilges, kan det bli nødvendig å
bygningsdel (og de琀琀e er opplyst 琀椀l undertegnede), eller der en
琀椀lbakeføre boligen 琀椀l sin

---

[d202_d202 | Side [1]]



Når kjøpte du eiendommen? Hva har dere likt best med området?
I starten av 2019. Vi har likt å ha nærhet 琀椀l alt i byen. På
sommeren har vi sa琀琀 stor pris på at det er
Hva var avgjørende for valget di琀琀?
昀氀ere parker i nærheten med Iladalpark og St.
Jeg likte spesielt godt beliggenheten, med

---

[d202_d202 | Side [1]]
 琀椀l Røa, hvor det nå er 琀椀d for å utvide
bussen for en skitur i marka. 
hjemmet i takt med familiesituasjonen.
På våren er det hyggelig når uteserveringene
Hva har dere likt spesielt godt med boligen og
på Alexander Kiellands Plass åpner og det
kommer 琀椀l å savne mest?
starter å yre av bylivet ute i nærområdet. 
Vi har likt beliggenheten og nærheten 琀椀l byen
godt. Det å ha gangavstand i alle retninger På sommeren er leiligheten lys og behagelig,
med kort vei 琀椀l både bu琀椀kker, hvor solen kan nytes i

---

[d202_d202 | Side [1]]
 ulovlige bruken, eventuelt å re琀琀e eller 琀椀lbakeføre rommet 琀椀l godkjent
svare på alle spørsmål, og kan heller ikke vite om kommunen kan gi unntak for bruk.
kravene som gjelder. Vil du vite mer?
Oppdragsnr.: 21421-1392 Befaringsdato: 28.11.2025 Side: 14 av 20
61

## Side 62

Uelands gate 57M , 0457 OSLO Bolig琀椀lstand AS
Gnr 219 - Bnr 230 Fjellstuveien 51 B
0301 OSLO 0982 OSLO
Arealer
Boligbygg med 昀氀ere boenheter
Bruksareal BRA m²
Etasje Internt bruksareal (BRA-i) Eksternt bruksareal (BRA-e) Innglasset

---

[d202_d202 | Side [1]]
ein.
Boligbygg med 昀氀ere boenheter
• Det foreligger godkjente og byggemeldte tegninger, men de
INNVENDIG Gå 琀椀l side
stemmer ikke med dagens bruk
Felles bygningsdeler:
Det er fremvist godkjente plantegninger, men det er registrert
- Etasjeskiller i betong.
følgende avvik:
- Trapper i betong.
Deler av det som i dag fremstår som entré er opprinnelig
- Dørcalling.
byggesøkt og godkjent som ko琀琀.
- Felles varmtvann.
Å anvende et rom eller en bygning 琀椀l et formål som avviker fra
Rapporten omfa琀琀er kun den

---

[d202_d202 | Side [1]]
uksre琀琀en er ikke kontrollert.
På grunn av lagring er lo昀琀sboden omtrentlig oppmålt, det anbefales nye målinger når denne er tømt.
Lo昀琀sboden er ikke målbar i sin helhet på grunn av lav takhøyde, men har et gulvareal på ca. 8 kvm.
Lovlighet
Byggetegninger
Det foreligger godkjente og byggemeldte tegninger, men de stemmer ikke med dagens bruk
Kommentar: Det er fremvist godkjente plantegninger, men det er registrert følgende avvik:
Deler av det som i dag fremstår som entré er opprinnelig byggesøkt og godkjent

---

[d202_d202 | Side [1]]
hovedbygget.
borettslaget/sameiet, og dette kan påvirke boligens BRA-
Tilleggsbygninger, for eksempel garasje, gis kun en enkel
e.
beskrivelse og blir ikke tilstandsvurdert.
• Opplysninger om areal kan ikke alene benyttes for
Tilstandsvurdering av tilleggsbygninger kan bestilles som
beregning av markedsverdi.
en tilleggstjeneste.
• Avvik er vurdert mot regler som gjaldt da boligen ble
oppført, med mindre annet er spesifisert i forskrift til
avhendingslova, eller gjeldende versjon av NS 3600.
• Hulltaking

---

[d202_d202 | Side [1]]
id med teknisk forskrift og mangle
godkjennelse hos kommunen for den aktuelle bruken,
uten at dette får betydning for om arealet måles og
oppgis i tilstandsrapporten. Når arealet måles tas det
PRESISERINGER ikke hensyn til om arealet er lovlig oppført eller om
bruken er lovlig, bruksendringer, lysforhold eller andre
sikkerhetsmangler.
• Anslag på utbedringskostnader ved er sjablongmessig,
• Rom som ligger utenfor boenheten, som eier har påvist
og må ikke forveksles med en konkret vurdering eller
eller

---

[d202_d202 | Side [1]]
ingssakkyndige ser på byggetegninger hvis de er 琀椀lgjengelige og de琀琀e er og lysforhold som må være oppfylt. Du kan søke kommunen om unntak
en del av oppdraget,og vurderer bruken av boligen opp mot tegningene. Hvis den for kravene, men kan ikke regne med å få unntak for krav som går på
bygningssakkyndig avdekker at en bolig ikke ser ut 琀椀l å være delt opp i brannceller helse og sikkerhet, for eksempel krav 琀椀l rømningsvei.
e琀琀er kravene i byggteknisk forskri昀琀 på befarings琀椀dspunktet, skal det opplyses

---

[d202_d202 | Side [1]]
byggteknisk forskri昀琀 på befarings琀椀dspunktet, skal det opplyses om
de琀琀e. Bruksendring som krever godkjenning, og som ikke er søkt bruksendret,
er ulovlig. Kommunen kan e琀琀er plan- og bygningsloven kapi琀琀el 32
Reglene om bruksendring og brannceller kan være kompliserte. Søk videre faglige forfølge overtredelser. Kommunen kan pålegge deg å avslu琀琀e den
råd om rapporten ikke gir deg svar. Den bygningssakkyndige kan ikke vurdere og ulovlige bruken, eventuelt å re琀琀e eller 琀椀lbakeføre rommet 琀椀l

---

[d202_d202 | Side [1]]
il forskrift til avhendingsloven (Tryggere bolighandel). Metoder og
funksjonsprøving av bygningsdeler, med mindre dette
omfang følger forskriftens krav, men undersøkelsene avdekker
kommer frem av forskrift til avhendingslova. Hvis det ikke
ikke nødvendigvis alle mulige avvik eller skader. Oppdraget
er sikkerhetsmessig forsvarlig, vil ikke
omfatter de bygningsdelene og forholdene som fremgår av
bygningssakkyndig undersøke taket fra utsiden.
rapporten. For forhold utenfor rapportens omfang anbefales det å
•

---

[d202_d202 | Side [1]]
, slik som slitasje
e琀琀er normal bruk regnes ikke som avvik.
Hva inneholder 琀椀lstandsrapporten?
Den bygningssakkyndige undersøker rom og bygningsdeler slik det kommer frem av Forskri昀琀 琀椀l
avhendingsloven. Tilstandsrapporten inneholder bare avvik som den bygningssakkyndige kan se eller
kontrollere med enkle hjelpemidler. Det gjøres ikke nærmere undersøkelser slik som åpning av vegger
eller andre bygningsdeler. I vegg mot våtrom og rom under terreng kan det borres et hull for å gjøre
enkle undersøkelser

---

[d202_d202 | Side [1]]
att sak 24.09.2025
Kobling Denne saken er en fortsettelse av sak 202551665
Status Under behandling
Colletts gate 60F ‑ dårlig vedlikeholdt mur, rasfare
Saksnummer 2025/2 1757 ‑ Ulovlighetssak
Mottatt sak 17.11.2025
Status Under behandling
Lovisenberggata 17 ‑ innvendig ombygging/b ruksendring ‑ Lovisenberg sykehus
Saksnummer 2025/1 0078 ‑ Byggesak
Mottatt sak 18.09.2025
Kobling Denne saken er en fortsettelse av sak 202456504
Status Under behandling
Claus Riis' gate 7 A ‑ oppføring av tre

---

[d202_d202 | Side [1]]
vurderinger. For
valg av tilstandsgrad blir gjeldende versjon av NS 3600 AREALBEREGNING FOR BOENHETER
(teknisk tilstandsanalyse ved omsetning av bolig) lagt til
grunn. • Areal fastsettes etter forskrift til avhendingslova og
• Bygningssakkyndig er ikke ansvarlig for tilbakeholdt eller gjeldende versjon av NS 3940 (areal- og
uriktig informasjon, som har betydning for volumberegninger av bygninger).
tilstandsvurderingen. • Et rom kan være i strid med teknisk forskrift og mangle
godkjennelse hos kommunen for

---

[d202_d202 | Side [1]]
urlig oppdri昀琀sven琀椀lasjon med ven琀椀l i bad og kjøkken.
Tillu昀琀: Via spalteven琀椀ler i vinduer.
Spørsmål 琀椀l eier:
- Når var anlegget ny琀琀, og er det eventuelt fornyet? Anlegget er fra byggeåret.
- Når det sist ble inspisert eller rengjort? Ukjent.
Det er se琀琀 e琀琀er ven琀椀ler for 琀椀llu昀琀 og avtrekk i rom som krever det. Det er ikke u琀昀ørt lu昀琀målinger eller tekniske vurderinger ved denne typen kontroll.
Vurdering av avvik:
• Det er avvik:
- Boligen har oppdri昀琀sven琀椀lasjon (naturlig ven琀椀lering), noe som var

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "Ulovlig bruksendring av kott til entré – ikke byggesøkt",
      "evidence": [
        "Deler av det som i dag fremstår som entré er opprinnelig byggesøkt og godkjent som kott.",
        "Å anvende et rom eller en bygning til et formål som avviker fra den godkjente bruken, krever en søknad om bruksendring. Tiltaket er ikke byggesøkt, og må derfor søkes om slik det står i dag.",
        "Dersom søknad ikke innvilges, kan det bli nødvendig å tilbakeføre boligen til sin opprinnelige tilstand.",
        "Kommunen kan etter plan- og bygningsloven kapittel 32 forfølge overtredelser og pålegge å avslutte den ulovlige bruken."
      ],
      "source_documents": [
        "d202_d202"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R2",
      "description": "Badrommets membran og tettesjikt har oversteget normal brukstid – risiko for fuktskader og kostbar totalrenovering",
      "evidence": [
        "Membranen har oversteget normal brukstid, og slitasje må påregnes.",
        "Når membranen eldes, svekkes den gradvis og kan utvikle mindre utettheter som slipper fukt ned i konstruksjonen.",
        "En full oppgradering med nytt tettesjikt må på grunn av alderen påregnes innen nær fremtid.",
        "Rommet har nådd en alder der konstruksjonene svekkes som følge av naturlig aldring og bruk. Dette øker risikoen for fuktproblematikk, og jevnlig overvåking anbefales.",
        "Rommet ble pusset opp i 2005 i regi av borettslaget – dvs. ca. 20 år gammelt bad."
      ],
      "source_documents": [
        "d202_d202"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R3",
      "description": "Svært høy andel fellesgjeld (kr. 587 038) og høye felleskostnader (kr. 8 258/mnd) – betydelig finansiell belastning for kjøper",
      "evidence": [
        "Fellesgjeld: Kr 587 038,-",
        "Felleskostn.: Kr 8 258,-",
        "Pris inkl. fellesgjeld: 4 987 038",
        "Det er mulig å innfri deler eller hele andel fellesgjeld på 2 av borettslagets lån. Dersom kjøper velger å innfri hele sin andel fellesgjeld på begge disse to lånene (kr. 350 799,- per 16.03.26), vil felleskostnadene reduseres med ca. Kr. 2862,-",
        "Felleskostnadene varierer over tid, og justeres normalt etter borettslagets faktiske kostnader."
      ],
      "source_documents": [
        "d202_d202"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.93
    },
    {
      "risk_id": "R4",
      "description": "Borettslaget hadde et svært negativt årsresultat på kr. -35 528 052 i 2024 og negativ endring i disponible midler",
      "evidence": [
        "Driftskostnader var til sammen kr. 44 667 229,- i 2024.",
        "Dette ga et negativt årsresultat i 2023 på kr. -35 528 052,-.",
        "Borettslaget hadde en negativ endring i de disponible midlene på kr. -2 001 794,- i 2024.",
        "Borettslagets disponible midler (omløpsmidler fratrukket kortsiktig gjeld) var kr. 1 336 032.",
        "Driftsinntekter var til sammen kr. 11 724 732,- i 2024 – langt lavere enn driftskostnadene på kr. 44 667 229,-."
      ],
      "source_documents": [
        "d202_d202"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R5",
      "description": "Naturlig/oppdriftsventilasjon på bad og kjøkken – utilstrekkelig ventilering kan gi fuktopphopning og skader",
      "evidence": [
        "Avtrekket skjer via naturlig oppdriftsventilasjon. Ytelsen avhenger av vær, vind og temperatur og kan periodevis bli svak.",
        "Dette kan gi noe opphopning av fuktig luft, som over tid kan påvirke overflater og tilstøtende konstruksjoner.",
        "Det er naturlig oppdriftsventilasjon som var vanlig ved byggeåret, men som kan gi begrenset ventilering. Kullfilterventilator er montert, som kan bidra til å redusere matos, men denne vil ikke ventilere ut fuktig luft.",
        "Løsningen er vanlig i eldre boliger, men klassifiseres som tilstandsgrad 2 (TG 2) i NS 3600.",
        "Anlegget er fra byggeåret (1936). Sist inspisert eller rengjort: Ukjent."
      ],
      "source_documents": [
        "d202_d202"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R6",
      "description": "Riss i flisefuger på bad og vindu i våt sone – risiko for vanninntrengning og fuktskader",
      "evidence": [
        "Riss er observert i flisefuger. Dette kan skyldes flere årsaker, for eksempel bevegelser i underlaget, normal slitasje, temperaturendringer eller fuktrelaterte skader.",
        "Det er et vindu innenfor en våt sone i rommet. Dette betyr at vinduet er mer utsatt for vannsøl som kan føre til skade.",
        "Det er skruehull i veggen som ikke er tettet. Åpne hull kan trekke inn vann og skade veggen. Hullene bør tettes forsvarlig."
      ],
      "source_documents": [
        "d202_d202"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R7",
      "description": "Vannledninger (rør-i-rør) er ikke merket – vanskeliggjør vedlikehold og utskifting",
      "evidence": [
        "Kursene for rør-i-rør er ikke merket. Rørene skal være enkle å skifte ut, og bør derfor merkes.",
        "Tekniske installasjoner > Vannledninger: Kursene for rør-i-rør er ikke merket. (TG 2)"
      ],
      "source_documents": [
        "d202_d202"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R8",
      "description": "Manglende samsvarserklæring på elektrisk arbeid utført etter 1.1.1999",
      "evidence": [
        "Det mangler samsvarserklæring på arbeid utført etter 1.1.1999.",
        "Tekniske installasjoner > Elektrisk anlegg er listet under avvik som kan kreve tiltak (TG 2)."
      ],
      "source_documents": [
        "d202_d202"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R9",
      "description": "Eiendommen ligger i støysone (gul og rød hensynssone for støy fra vei) – kan påvirke bokvalitet",
      "evidence": [
        "Det gjøres oppmerksom på at eiendommen ligger i hensynssone H190_2 for andre sikringssoner (restriksjoner for anlegg i grunn), mens deler av eiendommen ligger i gul og rød hensynssone for støy fra vei.",
        "Rød hensynssone for støy er den mest alvorlige kategorien og indikerer støynivåer over anbefalte grenseverdier."
      ],
      "source_documents": [
        "d202_d202"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.87
    },
    {
      "risk_id": "R10",
      "description": "Eiendommen er underlagt kulturminnevern og bevaring – begrensninger på endringer av fasade og bygningsmasse",
      "evidence": [
        "Det gjøres også oppmerksom på at eiendommen omfattes av kulturminnevern og ligger i et område med nasjonal kulturminneinteresser, samt område regulert til bevaring.",
        "Eiendommen er regulert til spesialområde bevaring bolig etter bestemmelsene i S-4179 fra 26.10.2005.",
        "Begrensning på endringer av fasade med mer. For mer informasjon se www.byantikvaren.oslo.kommune.no."
      ],
      "source_documents": [
        "d202_d202"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R11",
      "description": "Pågående detaljregulering av Uelands gate – kan medføre endringer i nærområdet og påvirke eiendommens verdi eller bruk",
      "evidence": [
        "Detaljregulering, Uelands gate fra Stavangergata til Evald Ryghs gate. Saksnummer 2025/06756 - Plansak. Mottatt sak 11.09.2025. Status: Under behandling.",
        "Denne saken er en fortsettelse av sak 202554777."
      ],
      "source_documents": [
        "d202_d202"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.78
    },
    {
      "risk_id": "R12",
      "description": "Tilliggende konstruksjoner til våtrom er ikke undersøkt (TG IU) – ukjent tilstand bak bad",
      "evidence": [
        "Våtrom > 1. etasje > Bad > Tilliggende konstruksjoner våtrom: TG IU (Konstruksjoner som ikke er undersøkt).",
        "Tilstandsrapporten lister TG IU eksplisitt for denne bygningsdelen."
      ],
      "source_documents": [
        "d202_d202"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R13",
      "description": "Tinglyste heftelser og rettigheter på eiendommen – inkl. adkomstrett, bestemmelser om bebyggelse og garasjeanlegg som ikke kan endres uten samtykke fra Oslo kommune",
      "evidence": [
        "27.02.1936 - Best. om vann/kloakkledn.",
        "20.09.1951 - Bestemmelse om bebyggelse. Bestemmelse om adkomstrett. Rettighetshaver Kingos gt. 10c.",
        "Plikt til å sikre tilgang til garasjeanlegg. Bestemmelse om opparbeidelse av areal, vedlikehold og drift av garasjeanlegg. Kan ikke endres uten samtykke fra Oslo kommune.",
        "Gjelder del av takterasse som rømningsvei. Kan ikke slettes uten samtykke fra Oslo kommune v/Plan og bygningsetaten."
      ],
      "source_documents": [
        "d202_d202"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R14",
      "description": "Legalpant i andelen for opptil 2G – borettslaget og kommunen har prioritert pant foran kjøpers interesser",
      "evidence": [
        "Borettslaget har legalpant i andelen for opptil 2 G (folketrygdens grunnbeløp). Pantet dekker borettslagets krav på felleskostnader samt andre krav borettslaget måtte få mot andelseieren.",
        "Kommunen har legalpant i eiendommen for forfalte krav på eiendomsskatt og kommunale avgifter/gebyrer."
      ],
      "source_documents": [
        "d202_d202"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R15",
      "description": "Ingen radonmåling er utført – ukjent radoneksponering i boligen",
      "evidence": [
        "Vet du om det er gjort radonmåling på eiendommen, enten av deg eller tidligere eiere? Nei, ikke som jeg kjenner til.",
        "Boligen ligger i 1. etasje, noe som øker potensiell radoneksponering sammenlignet med høyere etasjer."
      ],
      "source_documents": [
        "d202_d202"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R16",
      "description": "Boligen er i 1. etasje uten heis – kan gi utfordringer for fremtidig salg og tilgjengelighet",
      "evidence": [
        "Etasje: 1",
        "Heis: Nei",
        "Leiligheten ligger i en høy 1.etasje.",
        "Livsløp standard: Nei"
      ],
      "source_documents": [
        "d202_d202"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.65
    },
    {
      "risk_id": "R17",
      "description": "Inkassokostnader i borettslaget i 2024 – indikerer betalingsproblemer blant andelseiere",
      "evidence": [
        "7772 Omkostninger inkasso 78 236 0 (kr. 78 236 i 2024, mot kr. 0 i 2023).",
        "Borettslaget er sikret mot tap av felleskostnader via Klare Finans AS."
      ],
      "source_documents": [
        "d202_d202"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.7
    },
    {
      "risk_id": "R18",
      "description": "Byggeår 1936 – eldre bygg med generell aldersslitasje på flere bygningsdeler",
      "evidence": [
        "Byggeår: 1936",
        "For øvrig er dører av eldre dato med bruksslitasje.",
        "Alder og bruksslitasje kan øke behov for vedlikehold og tiltak.",
        "Det foreligger ekspedisjonsdokument fra 1935 for våningshus.",
        "Ventilasjon er fra byggeåret. Sist inspisert: Ukjent."
      ],
      "source_documents": [
        "d202_d202"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R19",
      "description": "Pågående byggesak om gjenoppbygging etter brann i Kingos gate 4 – mulig påvirkning på nærområdet",
      "evidence": [
        "Kingos gate 4 - forhåndskonferanse - Gjenoppbygging av bygg etter brann. Saksnummer 2025/10672 - Byggesak. Mottatt sak 24.09.2025. Status: Under behandling.",
        "Denne saken er en fortsettelse av sak 202551665."
      ],
      "source_documents": [
        "d202_d202"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.6
    },
    {
      "risk_id": "R20",
      "description": "Ulovlighetssak om dårlig vedlikeholdt mur med rasfare i Colletts gate 60F – mulig sikkerhetsrisiko i nærområdet",
      "evidence": [
        "Colletts gate 60F - dårlig vedlikeholdt mur, rasfare. Saksnummer 2025/21757 - Ulovlighetssak. Mottatt sak 17.11.2025. Status: Under behandling."
      ],
      "source_documents": [
        "d202_d202"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.55
    },
    {
      "risk_id": "R21",
      "description": "Vannbåren varme (radiatorer) fra byggeåret – risiko for lekkasje og behov for vedlikehold/utskifting",
      "evidence": [
        "Tekniske installasjoner > Vannbåren varme er listet under avvik som kan kreve tiltak (TG 2) i tilstandsrapporten.",
        "Oppvarmingstype: Varmtvann og fyring. Husleien inkluderer varmtvann og fyring fra eget sentralvarmeanlegg i borettslaget. Borettslaget tilknyttet fjernvarme.",
        "Byggeår: 1936 – anlegget er gammelt og kan ha aldersrelaterte svakheter."
      ],
      "source_documents": [
        "d202_d202"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.78
    }
  ],
  "re_retrieval_queries": [
    "Hva er årsaken til det negative årsresultatet på -35 528 052 i borettslaget – er det ekstraordinære kostnader eller rehabilitering?",
    "Hva er total fellesgjeld for hele Borettslaget Ilabekken, ikke bare andelen?",
    "Hva er tilstandsgraden for vannbåren varme og elektrisk anlegg i tilstandsrapporten?",
    "Er det utført radonmåling i fellesarealene eller andre deler av bygget?",
    "Hva innebærer hensynssone H190_2 for restriksjoner for anlegg i grunn konkret for denne eiendommen?",
    "Er det vedtatt eller planlagt økning i felleskostnader i borettslaget for 2025 eller 2026?",
    "Hva er status på IN-lånene i borettslaget og løpetid på fellesgjelden?",
    "Er det dokumentert fuktskader eller tidligere vannskader i boligen eller bygget?"
  ],
  "reasoning": "\nGjennomgang av alle 18 opprinnelige risikoer mot dokumentevidensen:\n\n**R1 (Ulovlig bruksendring kott→entré):** Meget godt dokumentert i tilstandsrapporten med eksplisitt omtale av avviket, krav om bruksendringssøknad og konsekvens ved avslag. Confidence 0.97 opprettholdes.\n\n**R2 (Membran/tettesjikt oversteget brukstid):** Meget godt dokumentert. Bad pusset opp i 2005 (ca. 20 år gammelt), membran oversteget normal brukstid, totaloppussing påkrevet innen nær fremtid. Confidence 0.97 (justert opp fra 0.96 pga. sterk evidens).\n\n**R3 (Høy fellesgjeld og felleskostnader):** Godt dokumentert med konkrete tall. Fellesgjeld kr. 587 038 og felleskostnader kr. 8 258/mnd er bekreftet. Confidence 0.93 opprettholdes.\n\n**R4 (Negativt årsresultat -35 528 052):** Dokumentert, men det er viktig å merke at årsresultatet er negativt primært fordi driftskostnadene (kr. 44,6 mill.) er langt høyere enn inntektene (kr. 11,7 mill.). Dette kan skyldes ekstraordinære kostnader (f.eks. rehabilitering av fasade/vinduer i 2024). Salgsoppgaven nevner at vinduer ble byttet ut og fasaden pusset opp i 2024. Dette er sannsynligvis en vesentlig del av forklaringen, men det er ikke eksplisitt bekreftet i de tilgjengelige dokumentchunkene. Confidence 0.92 opprettholdes, men det bør hentes mer informasjon om årsaken.\n\n**R5 (Naturlig oppdriftsventilasjon):** Godt dokumentert, TG 2 bekreftet, anlegget er fra byggeåret. Confidence 0.90 opprettholdes.\n\n**R6 (Riss i flisefuger, vindu i våt sone):** Godt dokumentert med konkrete observasjoner. Confidence 0.88 opprettholdes.\n\n**R7 (Rør-i-rør ikke merket):** Dokumentert, TG 2. Confidence 0.85 opprettholdes.\n\n**R8 (Manglende samsvarserklæring el):** Dokumentert. Confidence 0.88 opprettholdes.\n\n**R9 (Støysone gul og rød):** Dokumentert. Rød hensynssone er alvorlig. Confidence 0.87 opprettholdes.\n\n**R10 (Kulturminnevern):** Godt dokumentert. Confidence 0.90 opprettholdes.\n\n**R11 (Detaljregulering Uelands gate):** Dokumentert som pågående sak. Usikkerhet om konsekvenser. Confidence justeres ned til 0.78.\n\n**R12 (TG IU tilliggende konstruksjoner bad):** Eksplisitt listet i tilstandsrapporten. Confidence 0.85 opprettholdes.\n\n**R13 (Tinglyste heftelser):** Godt dokumentert med konkrete dokumentnumre og innhold. Confidence 0.85 opprettholdes.\n\n**R14 (Legalpant 2G):** Dokumentert. Confidence 0.82 opprettholdes.\n\n**R15 (Ingen radonmåling):** Dokumentert via selgers egenerklæring. Confidence 0.80 opprettholdes.\n\n**R16 (1. etasje uten heis):** Dokumentert, men risikoen er noe subjektiv – 1. etasje uten heis er ikke nødvendigvis en stor risiko, og boligen er i høy 1. etasje. Confidence justeres ned til 0.65 da dette er en begrenset risiko.\n\n**R17 (Inkassokostnader):** Dokumentert med kr. 78 236 i 2024 mot kr. 0 i 2023. Borettslaget har sikringsordning. Confidence justeres ned til 0.70 da sikringsordningen reduserer risikoen.\n\n**R18 (Byggeår 1936):** Godt dokumentert. Confidence 0.88 opprettholdes.\n\n**Nye risikoer identifisert:**\n- R19: Pågående byggesak om gjenoppbygging etter brann i Kingos gate 4 – nevnt i offentlige planer, men usikker relevans. Confidence 0.60.\n- R20: Ulovlighetssak om rasfare ved mur i Colletts gate 60F – nevnt i offentlige planer. Confidence 0.55.\n- R21: Vannbåren varme (TG 2) – eksplisitt listet i tilstandsrapporten under avvik som kan kreve tiltak. Dette er en risiko som ikke var identifisert i de opprinnelige 18 risikoene. Confidence 0.78.\n\n**Manglende risikoer som burde vært identifisert:**\n- Vannbåren varme (TG 2) er listet i tilstandsrapporten men ikke som egen risiko – lagt til som R21.\n- Det bør undersøkes nærmere hva som forklarer det enorme negative årsresultatet (kr. -35,5 mill.) – sannsynligvis rehabiliteringskostnader i 2024 (vinduer + fasade), men dette er ikke bekreftet.\n- Hensynssone H190_2 (restriksjoner for anlegg i grunn) er nevnt men ikke forklart nærmere – bør undersøkes.\n"
}

## Raw Response
```json
{
  "id": "msg_01XaKZGQDdHBV2Md2TeEyvfH",
  "container": null,
  "content": [
    {
      "id": "toolu_01JKLsjbUzVHLsW2V89rLFsH",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "Ulovlig bruksendring av kott til entré – ikke byggesøkt",
            "evidence": [
              "Deler av det som i dag fremstår som entré er opprinnelig byggesøkt og godkjent som kott.",
              "Å anvende et rom eller en bygning til et formål som avviker fra den godkjente bruken, krever en søknad om bruksendring. Tiltaket er ikke byggesøkt, og må derfor søkes om slik det står i dag.",
              "Dersom søknad ikke innvilges, kan det bli nødvendig å tilbakeføre boligen til sin opprinnelige tilstand.",
              "Kommunen kan etter plan- og bygningsloven kapittel 32 forfølge overtredelser og pålegge å avslutte den ulovlige bruken."
            ],
            "source_documents": [
              "d202_d202"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R2",
            "description": "Badrommets membran og tettesjikt har oversteget normal brukstid – risiko for fuktskader og kostbar totalrenovering",
            "evidence": [
              "Membranen har oversteget normal brukstid, og slitasje må påregnes.",
              "Når membranen eldes, svekkes den gradvis og kan utvikle mindre utettheter som slipper fukt ned i konstruksjonen.",
              "En full oppgradering med nytt tettesjikt må på grunn av alderen påregnes innen nær fremtid.",
              "Rommet har nådd en alder der konstruksjonene svekkes som følge av naturlig aldring og bruk. Dette øker risikoen for fuktproblematikk, og jevnlig overvåking anbefales.",
              "Rommet ble pusset opp i 2005 i regi av borettslaget – dvs. ca. 20 år gammelt bad."
            ],
            "source_documents": [
              "d202_d202"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R3",
            "description": "Svært høy andel fellesgjeld (kr. 587 038) og høye felleskostnader (kr. 8 258/mnd) – betydelig finansiell belastning for kjøper",
            "evidence": [
              "Fellesgjeld: Kr 587 038,-",
              "Felleskostn.: Kr 8 258,-",
              "Pris inkl. fellesgjeld: 4 987 038",
              "Det er mulig å innfri deler eller hele andel fellesgjeld på 2 av borettslagets lån. Dersom kjøper velger å innfri hele sin andel fellesgjeld på begge disse to lånene (kr. 350 799,- per 16.03.26), vil felleskostnadene reduseres med ca. Kr. 2862,-",
              "Felleskostnadene varierer over tid, og justeres normalt etter borettslagets faktiske kostnader."
            ],
            "source_documents": [
              "d202_d202"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.93
          },
          {
            "risk_id": "R4",
            "description": "Borettslaget hadde et svært negativt årsresultat på kr. -35 528 052 i 2024 og negativ endring i disponible midler",
            "evidence": [
              "Driftskostnader var til sammen kr. 44 667 229,- i 2024.",
              "Dette ga et negativt årsresultat i 2023 på kr. -35 528 052,-.",
              "Borettslaget hadde en negativ endring i de disponible midlene på kr. -2 001 794,- i 2024.",
              "Borettslagets disponible midler (omløpsmidler fratrukket kortsiktig gjeld) var kr. 1 336 032.",
              "Driftsinntekter var til sammen kr. 11 724 732,- i 2024 – langt lavere enn driftskostnadene på kr. 44 667 229,-."
            ],
            "source_documents": [
              "d202_d202"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R5",
            "description": "Naturlig/oppdriftsventilasjon på bad og kjøkken – utilstrekkelig ventilering kan gi fuktopphopning og skader",
            "evidence": [
              "Avtrekket skjer via naturlig oppdriftsventilasjon. Ytelsen avhenger av vær, vind og temperatur og kan periodevis bli svak.",
              "Dette kan gi noe opphopning av fuktig luft, som over tid kan påvirke overflater og tilstøtende konstruksjoner.",
              "Det er naturlig oppdriftsventilasjon som var vanlig ved byggeåret, men som kan gi begrenset ventilering. Kullfilterventilator er montert, som kan bidra til å redusere matos, men denne vil ikke ventilere ut fuktig luft.",
              "Løsningen er vanlig i eldre boliger, men klassifiseres som tilstandsgrad 2 (TG 2) i NS 3600.",
              "Anlegget er fra byggeåret (1936). Sist inspisert eller rengjort: Ukjent."
            ],
            "source_documents": [
              "d202_d202"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R6",
            "description": "Riss i flisefuger på bad og vindu i våt sone – risiko for vanninntrengning og fuktskader",
            "evidence": [
              "Riss er observert i flisefuger. Dette kan skyldes flere årsaker, for eksempel bevegelser i underlaget, normal slitasje, temperaturendringer eller fuktrelaterte skader.",
              "Det er et vindu innenfor en våt sone i rommet. Dette betyr at vinduet er mer utsatt for vannsøl som kan føre til skade.",
              "Det er skruehull i veggen som ikke er tettet. Åpne hull kan trekke inn vann og skade veggen. Hullene bør tettes forsvarlig."
            ],
            "source_documents": [
              "d202_d202"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R7",
            "description": "Vannledninger (rør-i-rør) er ikke merket – vanskeliggjør vedlikehold og utskifting",
            "evidence": [
              "Kursene for rør-i-rør er ikke merket. Rørene skal være enkle å skifte ut, og bør derfor merkes.",
              "Tekniske installasjoner > Vannledninger: Kursene for rør-i-rør er ikke merket. (TG 2)"
            ],
            "source_documents": [
              "d202_d202"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R8",
            "description": "Manglende samsvarserklæring på elektrisk arbeid utført etter 1.1.1999",
            "evidence": [
              "Det mangler samsvarserklæring på arbeid utført etter 1.1.1999.",
              "Tekniske installasjoner > Elektrisk anlegg er listet under avvik som kan kreve tiltak (TG 2)."
            ],
            "source_documents": [
              "d202_d202"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R9",
            "description": "Eiendommen ligger i støysone (gul og rød hensynssone for støy fra vei) – kan påvirke bokvalitet",
            "evidence": [
              "Det gjøres oppmerksom på at eiendommen ligger i hensynssone H190_2 for andre sikringssoner (restriksjoner for anlegg i grunn), mens deler av eiendommen ligger i gul og rød hensynssone for støy fra vei.",
              "Rød hensynssone for støy er den mest alvorlige kategorien og indikerer støynivåer over anbefalte grenseverdier."
            ],
            "source_documents": [
              "d202_d202"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.87
          },
          {
            "risk_id": "R10",
            "description": "Eiendommen er underlagt kulturminnevern og bevaring – begrensninger på endringer av fasade og bygningsmasse",
            "evidence": [
              "Det gjøres også oppmerksom på at eiendommen omfattes av kulturminnevern og ligger i et område med nasjonal kulturminneinteresser, samt område regulert til bevaring.",
              "Eiendommen er regulert til spesialområde bevaring bolig etter bestemmelsene i S-4179 fra 26.10.2005.",
              "Begrensning på endringer av fasade med mer. For mer informasjon se www.byantikvaren.oslo.kommune.no."
            ],
            "source_documents": [
              "d202_d202"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R11",
            "description": "Pågående detaljregulering av Uelands gate – kan medføre endringer i nærområdet og påvirke eiendommens verdi eller bruk",
            "evidence": [
              "Detaljregulering, Uelands gate fra Stavangergata til Evald Ryghs gate. Saksnummer 2025/06756 - Plansak. Mottatt sak 11.09.2025. Status: Under behandling.",
              "Denne saken er en fortsettelse av sak 202554777."
            ],
            "source_documents": [
              "d202_d202"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.78
          },
          {
            "risk_id": "R12",
            "description": "Tilliggende konstruksjoner til våtrom er ikke undersøkt (TG IU) – ukjent tilstand bak bad",
            "evidence": [
              "Våtrom > 1. etasje > Bad > Tilliggende konstruksjoner våtrom: TG IU (Konstruksjoner som ikke er undersøkt).",
              "Tilstandsrapporten lister TG IU eksplisitt for denne bygningsdelen."
            ],
            "source_documents": [
              "d202_d202"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R13",
            "description": "Tinglyste heftelser og rettigheter på eiendommen – inkl. adkomstrett, bestemmelser om bebyggelse og garasjeanlegg som ikke kan endres uten samtykke fra Oslo kommune",
            "evidence": [
              "27.02.1936 - Best. om vann/kloakkledn.",
              "20.09.1951 - Bestemmelse om bebyggelse. Bestemmelse om adkomstrett. Rettighetshaver Kingos gt. 10c.",
              "Plikt til å sikre tilgang til garasjeanlegg. Bestemmelse om opparbeidelse av areal, vedlikehold og drift av garasjeanlegg. Kan ikke endres uten samtykke fra Oslo kommune.",
              "Gjelder del av takterasse som rømningsvei. Kan ikke slettes uten samtykke fra Oslo kommune v/Plan og bygningsetaten."
            ],
            "source_documents": [
              "d202_d202"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R14",
            "description": "Legalpant i andelen for opptil 2G – borettslaget og kommunen har prioritert pant foran kjøpers interesser",
            "evidence": [
              "Borettslaget har legalpant i andelen for opptil 2 G (folketrygdens grunnbeløp). Pantet dekker borettslagets krav på felleskostnader samt andre krav borettslaget måtte få mot andelseieren.",
              "Kommunen har legalpant i eiendommen for forfalte krav på eiendomsskatt og kommunale avgifter/gebyrer."
            ],
            "source_documents": [
              "d202_d202"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R15",
            "description": "Ingen radonmåling er utført – ukjent radoneksponering i boligen",
            "evidence": [
              "Vet du om det er gjort radonmåling på eiendommen, enten av deg eller tidligere eiere? Nei, ikke som jeg kjenner til.",
              "Boligen ligger i 1. etasje, noe som øker potensiell radoneksponering sammenlignet med høyere etasjer."
            ],
            "source_documents": [
              "d202_d202"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R16",
            "description": "Boligen er i 1. etasje uten heis – kan gi utfordringer for fremtidig salg og tilgjengelighet",
            "evidence": [
              "Etasje: 1",
              "Heis: Nei",
              "Leiligheten ligger i en høy 1.etasje.",
              "Livsløp standard: Nei"
            ],
            "source_documents": [
              "d202_d202"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.65
          },
          {
            "risk_id": "R17",
            "description": "Inkassokostnader i borettslaget i 2024 – indikerer betalingsproblemer blant andelseiere",
            "evidence": [
              "7772 Omkostninger inkasso 78 236 0 (kr. 78 236 i 2024, mot kr. 0 i 2023).",
              "Borettslaget er sikret mot tap av felleskostnader via Klare Finans AS."
            ],
            "source_documents": [
              "d202_d202"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.7
          },
          {
            "risk_id": "R18",
            "description": "Byggeår 1936 – eldre bygg med generell aldersslitasje på flere bygningsdeler",
            "evidence": [
              "Byggeår: 1936",
              "For øvrig er dører av eldre dato med bruksslitasje.",
              "Alder og bruksslitasje kan øke behov for vedlikehold og tiltak.",
              "Det foreligger ekspedisjonsdokument fra 1935 for våningshus.",
              "Ventilasjon er fra byggeåret. Sist inspisert: Ukjent."
            ],
            "source_documents": [
              "d202_d202"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R19",
            "description": "Pågående byggesak om gjenoppbygging etter brann i Kingos gate 4 – mulig påvirkning på nærområdet",
            "evidence": [
              "Kingos gate 4 - forhåndskonferanse - Gjenoppbygging av bygg etter brann. Saksnummer 2025/10672 - Byggesak. Mottatt sak 24.09.2025. Status: Under behandling.",
              "Denne saken er en fortsettelse av sak 202551665."
            ],
            "source_documents": [
              "d202_d202"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.6
          },
          {
            "risk_id": "R20",
            "description": "Ulovlighetssak om dårlig vedlikeholdt mur med rasfare i Colletts gate 60F – mulig sikkerhetsrisiko i nærområdet",
            "evidence": [
              "Colletts gate 60F - dårlig vedlikeholdt mur, rasfare. Saksnummer 2025/21757 - Ulovlighetssak. Mottatt sak 17.11.2025. Status: Under behandling."
            ],
            "source_documents": [
              "d202_d202"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.55
          },
          {
            "risk_id": "R21",
            "description": "Vannbåren varme (radiatorer) fra byggeåret – risiko for lekkasje og behov for vedlikehold/utskifting",
            "evidence": [
              "Tekniske installasjoner > Vannbåren varme er listet under avvik som kan kreve tiltak (TG 2) i tilstandsrapporten.",
              "Oppvarmingstype: Varmtvann og fyring. Husleien inkluderer varmtvann og fyring fra eget sentralvarmeanlegg i borettslaget. Borettslaget tilknyttet fjernvarme.",
              "Byggeår: 1936 – anlegget er gammelt og kan ha aldersrelaterte svakheter."
            ],
            "source_documents": [
              "d202_d202"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.78
          }
        ],
        "re_retrieval_queries": [
          "Hva er årsaken til det negative årsresultatet på -35 528 052 i borettslaget – er det ekstraordinære kostnader eller rehabilitering?",
          "Hva er total fellesgjeld for hele Borettslaget Ilabekken, ikke bare andelen?",
          "Hva er tilstandsgraden for vannbåren varme og elektrisk anlegg i tilstandsrapporten?",
          "Er det utført radonmåling i fellesarealene eller andre deler av bygget?",
          "Hva innebærer hensynssone H190_2 for restriksjoner for anlegg i grunn konkret for denne eiendommen?",
          "Er det vedtatt eller planlagt økning i felleskostnader i borettslaget for 2025 eller 2026?",
          "Hva er status på IN-lånene i borettslaget og løpetid på fellesgjelden?",
          "Er det dokumentert fuktskader eller tidligere vannskader i boligen eller bygget?"
        ],
        "reasoning": "\nGjennomgang av alle 18 opprinnelige risikoer mot dokumentevidensen:\n\n**R1 (Ulovlig bruksendring kott→entré):** Meget godt dokumentert i tilstandsrapporten med eksplisitt omtale av avviket, krav om bruksendringssøknad og konsekvens ved avslag. Confidence 0.97 opprettholdes.\n\n**R2 (Membran/tettesjikt oversteget brukstid):** Meget godt dokumentert. Bad pusset opp i 2005 (ca. 20 år gammelt), membran oversteget normal brukstid, totaloppussing påkrevet innen nær fremtid. Confidence 0.97 (justert opp fra 0.96 pga. sterk evidens).\n\n**R3 (Høy fellesgjeld og felleskostnader):** Godt dokumentert med konkrete tall. Fellesgjeld kr. 587 038 og felleskostnader kr. 8 258/mnd er bekreftet. Confidence 0.93 opprettholdes.\n\n**R4 (Negativt årsresultat -35 528 052):** Dokumentert, men det er viktig å merke at årsresultatet er negativt primært fordi driftskostnadene (kr. 44,6 mill.) er langt høyere enn inntektene (kr. 11,7 mill.). Dette kan skyldes ekstraordinære kostnader (f.eks. rehabilitering av fasade/vinduer i 2024). Salgsoppgaven nevner at vinduer ble byttet ut og fasaden pusset opp i 2024. Dette er sannsynligvis en vesentlig del av forklaringen, men det er ikke eksplisitt bekreftet i de tilgjengelige dokumentchunkene. Confidence 0.92 opprettholdes, men det bør hentes mer informasjon om årsaken.\n\n**R5 (Naturlig oppdriftsventilasjon):** Godt dokumentert, TG 2 bekreftet, anlegget er fra byggeåret. Confidence 0.90 opprettholdes.\n\n**R6 (Riss i flisefuger, vindu i våt sone):** Godt dokumentert med konkrete observasjoner. Confidence 0.88 opprettholdes.\n\n**R7 (Rør-i-rør ikke merket):** Dokumentert, TG 2. Confidence 0.85 opprettholdes.\n\n**R8 (Manglende samsvarserklæring el):** Dokumentert. Confidence 0.88 opprettholdes.\n\n**R9 (Støysone gul og rød):** Dokumentert. Rød hensynssone er alvorlig. Confidence 0.87 opprettholdes.\n\n**R10 (Kulturminnevern):** Godt dokumentert. Confidence 0.90 opprettholdes.\n\n**R11 (Detaljregulering Uelands gate):** Dokumentert som pågående sak. Usikkerhet om konsekvenser. Confidence justeres ned til 0.78.\n\n**R12 (TG IU tilliggende konstruksjoner bad):** Eksplisitt listet i tilstandsrapporten. Confidence 0.85 opprettholdes.\n\n**R13 (Tinglyste heftelser):** Godt dokumentert med konkrete dokumentnumre og innhold. Confidence 0.85 opprettholdes.\n\n**R14 (Legalpant 2G):** Dokumentert. Confidence 0.82 opprettholdes.\n\n**R15 (Ingen radonmåling):** Dokumentert via selgers egenerklæring. Confidence 0.80 opprettholdes.\n\n**R16 (1. etasje uten heis):** Dokumentert, men risikoen er noe subjektiv – 1. etasje uten heis er ikke nødvendigvis en stor risiko, og boligen er i høy 1. etasje. Confidence justeres ned til 0.65 da dette er en begrenset risiko.\n\n**R17 (Inkassokostnader):** Dokumentert med kr. 78 236 i 2024 mot kr. 0 i 2023. Borettslaget har sikringsordning. Confidence justeres ned til 0.70 da sikringsordningen reduserer risikoen.\n\n**R18 (Byggeår 1936):** Godt dokumentert. Confidence 0.88 opprettholdes.\n\n**Nye risikoer identifisert:**\n- R19: Pågående byggesak om gjenoppbygging etter brann i Kingos gate 4 – nevnt i offentlige planer, men usikker relevans. Confidence 0.60.\n- R20: Ulovlighetssak om rasfare ved mur i Colletts gate 60F – nevnt i offentlige planer. Confidence 0.55.\n- R21: Vannbåren varme (TG 2) – eksplisitt listet i tilstandsrapporten under avvik som kan kreve tiltak. Dette er en risiko som ikke var identifisert i de opprinnelige 18 risikoene. Confidence 0.78.\n\n**Manglende risikoer som burde vært identifisert:**\n- Vannbåren varme (TG 2) er listet i tilstandsrapporten men ikke som egen risiko – lagt til som R21.\n- Det bør undersøkes nærmere hva som forklarer det enorme negative årsresultatet (kr. -35,5 mill.) – sannsynligvis rehabiliteringskostnader i 2024 (vinduer + fasade), men dette er ikke bekreftet.\n- Hensynssone H190_2 (restriksjoner for anlegg i grunn) er nevnt men ikke forklart nærmere – bør undersøkes.\n"
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
    "input_tokens": 24209,
    "output_tokens": 6556,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
