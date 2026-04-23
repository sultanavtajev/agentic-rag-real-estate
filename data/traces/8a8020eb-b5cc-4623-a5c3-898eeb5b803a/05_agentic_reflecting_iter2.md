# Trace: agentic_reflecting_iter2
- **Run ID:** 8a8020eb-b5cc-4623-a5c3-898eeb5b803a
- **Tidspunkt:** 2026-03-18T10:36:49.165532+00:00
- **Varighet:** 78.73s
- **Input tokens:** 20109
- **Output tokens:** 3842

## System Prompt
Du er en kvalitetskontrollor for risikoanalyse. Valider identifiserte risikoer mot evidensen i dokumentchunkene.

For hver risiko:
- Vurder om evidensen stotter risikoen
- Juster confidence opp eller ned basert pa evidens
- Fjern risikoer uten tilstrekkelig evidens
- Foreslaa nye sporsmal hvis viktig informasjon mangler

Vurder ogsa om det er risikoer som burde vart identifisert men som mangler.

## User Prompt
Sporsmal: Hva bør jeg passe på ved kjøp av denne eiendommen?

Identifiserte risikoer:
Risiko 1: Carport er bygget om til garasje uten kjent søknad om bruksendring. Det er montert elektrisk garasjeport og carporten er dermed omgjort til garasje, men det er ikke kjent om det ble søkt om bruksendring fra carport til garasje.
  Kategori: contractual_issue
  Alvorlighet: warning
  Confidence: 0.9
  Evidens: Tidligere eier opplyser at selgeren de kjøpte av hadde satt inn en motorisert garasjeport, og at carporten dermed ble bygget om til garasje.; De ikke kjenner til om det ble søkt om bruksendring fra carport til garasje.

Risiko 2: Selger har ikke bodd i boligen de siste 12 månedene. Boligen ble kjøpt i 2024 og selger har ikke bebodd den. Dette betyr at selger har begrenset kunnskap om boligens faktiske tilstand, noe som øker risikoen for skjulte feil og mangler.
  Kategori: contractual_issue
  Alvorlighet: warning
  Confidence: 0.95
  Evidens: Boligen ble kjøpt 2024; Selger har ikke bodd i boligen de 12 siste månedene

Risiko 3: Ingen radonmåling er utført på eiendommen. Verken nåværende eller tidligere eiere kjenner til at det er gjort radonmåling. Radon kan utgjøre en helserisiko og bør måles.
  Kategori: contractual_issue
  Alvorlighet: warning
  Confidence: 0.95
  Evidens: Vet du om det er gjort radonmåling på eiendommen, enten av deg eller tidligere eiere? Nei, ikke som jeg kjenner til

Risiko 4: Tettesjikt, membran eller sluk på vaskerom er ikke fornyet eller oppgradert, og det finnes ingen dokumentasjon på hvordan bad/våtrom er bygget opp. Dette gir økt risiko for skjulte fuktskader.
  Kategori: contractual_issue
  Alvorlighet: warning
  Confidence: 0.85
  Evidens: Vet du om tettesjikt, membran eller sluk ble fornyet eller oppgradert? Nei, ikke som jeg kjenner til; Vet du om det finnes dokumentasjon på hvordan bad/våtrom er bygget opp? Nei, ikke som jeg kjenner til

Risiko 5: Kollektivavtale med Viken Fiber/Altibox med tre års bindingstid følger seksjonen. Kjøper overtar denne bindingen og må betale kr 609,- per måned for TV og internett frem til bindingstiden utløper (desember 2027).
  Kategori: contractual_issue
  Alvorlighet: info
  Confidence: 0.95
  Evidens: Hollstedt er del av en kollektivavtale som er inngått med Viken Fiber om TV og internett gjeldende fra 1. desember 2024 med tre års bindingstid. Denne avtalen med bindingstid følger seksjonen.; Avtalen har fra og med 1. februar 2026 en månedspris på 609 kroner per boenhet.

Risiko 6: Pergola på ca. 9 m² og vedbod under utvendig trapp er oppført av tidligere eier. Det er ikke opplyst om disse er omsøkt eller godkjent av kommunen.
  Kategori: contractual_issue
  Alvorlighet: info
  Confidence: 0.7
  Evidens: Tidligere eier opplyser at selgeren de kjøpte av hadde satt inn en motorisert garasjeport; en tidligere eier har oppført en pergola i hagen på ca. 9 m², samt bygget en vedbod under den utvendige trappen mot hagen

Risiko 7: Eiendommen har privat pumpekum/pumpeanlegg som sameiet drifter og forsikrer. Felleskostnadene dekker drift og vedlikehold av dette anlegget, men det kan medføre uforutsette kostnader ved fremtidige reparasjoner.
  Kategori: contractual_issue
  Alvorlighet: info
  Confidence: 0.8
  Evidens: kostnader til drift og vedlikehold av sameiets pumpekum og annen eiendom (for eksempel lekeplass) og forsikringer knyttet til pumpeanlegget og styreansvar

Risiko 8: Kommunale gebyrer utgjorde totalt kr 21 318,- i 2025 (avløp, eiendomsskatt, feiing, renovasjon og vann). Dette er en løpende kostnad kjøper må påregne i tillegg til felleskostnader.
  Kategori: contractual_issue
  Alvorlighet: info
  Confidence: 0.99
  Evidens: Gebyr Fakturert beløp i 2025: Avløp 5 815,60 kr, Eiendomsskatt 5 075,20 kr, Feiing 526,40 kr, Renovasjon 5 441,00 kr, Vann 4 460,00 kr, Sum 21 318,20 kr

Dokumentkontekst:
[d004_Salgsoppgave (1) | Side [137]]
Ambita er ikke ansvarlig for tap som oppstår som følge av feil i Eiendomsutskriften.
Ikke tinglyst eierforhold:
Ingen ikke tinglyste eierforhold registrert på matrikkelenheten.
Kulturminner:
Ingen kulturminner registrert på matrikkelenheten.
I Matrikkelen fremgår kun informasjon om fredet kulturminne der det er registrert i Riksantikvarens arkiv på eiendom og bygning.
Kulturminner som ikke er registrert i Matrikkelen kan dermed allikevel forekomme på eiendommen. Merk at disse opplysningene
ikke omfatter

---

[d004_Salgsoppgave (1) | Side [137]]
gkrets: 3 Eidsvoll Verk
Oppdatert: 01.01.2024 Kirkesogn: 2070304 Råholt
Tettsted: 675 Råholt
Eiendomsopplysninger
Matrikkel:
Type: Best. eierseksjon Tinglyst: Ja Reg.landbruksreg.: Nei
Bruksnavn: Matrikkelført: Ja Antall teiger: 1
Etableringsdato: 30.06.2015 Har festegrunn: Nei Formål: Bolig
Areal: 439,8 kvm Skyld: Sameiebrøk: 126/2 152
Arealkilde: Beregnet Areal Areal felles tomt: 1 062,6 kvm
Arealmerknad:
Om fullstendighet og nøyaktighet i matrikkelutskriften:
Ambita tar forbehold om at informasjon som

---

[d004_Salgsoppgave (1) | Side [122, 123]]
 e v v . . A B 2 0 4 2 . . 0 0 2 3 . . 1 1 5 5 E E n n d d r r e e t t h ca ø r y p d o e r t p . å U b tv o id lig e d i t m er o r t e s n y g d + 3 7 ,2 0 m cm opp Revisjon:B
Plusshus ref.: NArokitreskkto nBisykg Pgrossejerkvteirceend Ae:S
I 636423 Tegningsfase: Format: Utskriftsdato:
J 636424 Byggemeldingstegninger A3 17.01.2013
Produktet er Norsk byggservice AS sin eiendom inntil varen er betalt til fulle FTeagsnaidneg:r Tegningsnr.:E-04
122Vest

---

[d004_Salgsoppgave (1) | Side [123, 124]]
 e v v . . A B 2 0 4 2 . . 0 0 2 3 . . 1 1 5 5 E E n n d d r r e e t t h ca ø r y p d o e r t p . å U b tv o id lig e d i t m er o r t e s n y g d + 3 7 ,2 0 m cm opp Revisjon:B
Plusshus ref.: NArokitreskkto nBisykg Pgrossejerkvteirceend Ae:S
I 636423 Tegningsfase: Format: Utskriftsdato:
J 636424 Byggemeldingstegninger A3 17.01.2013
Produktet er Norsk byggservice AS sin eiendom inntil varen er betalt til fulle FTeagsnaidneg:r Tegningsnr.:E-05
123Utskriftsdato: 22.01.2026
Eidsvoll kommune
Adresse:

---

[d004_Salgsoppgave (1) | Side [121, 122]]
t g e g 3 service.no
i Eidsvoll kommune. Kontroll:
R R e e v v . . A B 2 0 4 2 . . 0 0 2 3 . . 1 1 5 5 E E n n d d r r e e t t h ca ø r y p d o e r t p . å U b tv o id lig e d i t m er o r t e s n y g d + 3 7 ,2 0 m cm opp Revisjon:B
Plusshus ref.: NArokitreskkto nBisykg Pgrossejerkvteirceend Ae:S
I 636423 Tegningsfase: Format: Utskriftsdato:
J 636424 Byggemeldingstegninger A3 17.01.2013
Produktet er Norsk byggservice AS sin eiendom inntil varen er betalt til fulle FTeagsnaidneg:r Tegningsnr.:E-03
121Øst

---

[d004_Salgsoppgave (1) | Side [141, 142, 143]]
58
Utskriften er levert av: Ambita as, Postboks 2923 Solli, 0230 Oslo. (Org.nr. 945 811 714) Side 5 av 11
141Gårdsnummer 96, Bruksnummer 615, Seksjonsnummer 10 i 3240 EIDSVOLL kommune
Oversiktskart
Utskrift fra eiendomsregisteret foretatt 22.01.2026 09:58 – Sist oppdatert 22.01.2026 09:58
Utskriften er levert av: Ambita as, Postboks 2923 Solli, 0230 Oslo. (Org.nr. 945 811 714) Side 6 av 11
142Gårdsnummer 96, Bruksnummer 615, Seksjonsnummer 10 i 3240 EIDSVOLL kommune
Teig 1 (Hovedteig)
Utskrift fra

---

[d004_Salgsoppgave (1) | Side [144, 145]]
ling 9 Ikke spesifisert Nei Asfaltspiker
(Real time kinematic)
8 6 684 345,26 619 581,65 5,95m GNSS: Fasemåling 9 8,00 Ikke spesifisert Nei Offentlig godkjent
(Real time kinematic) grensemerke
(¹) Lengden fra punktet til neste punkt i rekken.
Utskrift fra eiendomsregisteret foretatt 22.01.2026 09:58 – Sist oppdatert 22.01.2026 09:58
Utskriften er levert av: Ambita as, Postboks 2923 Solli, 0230 Oslo. (Org.nr. 945 811 714) Side 8 av 11
144Gårdsnummer 96, Bruksnummer 615, Seksjonsnummer 10 i 3240 EIDSVOLL

---

[d004_Salgsoppgave (1) | Side [146, 147]]
 GNSS: Fasemåling 9 Ikke spesifisert Nei Asfaltspiker
(Real time kinematic)
Utskrift fra eiendomsregisteret foretatt 22.01.2026 09:58 – Sist oppdatert 22.01.2026 09:58
Utskriften er levert av: Ambita as, Postboks 2923 Solli, 0230 Oslo. (Org.nr. 945 811 714) Side 10 av 11
146Gårdsnummer 96, Bruksnummer 615, Seksjonsnummer 10 i 3240 EIDSVOLL kommune
34 6 684 357,12 619 613,20 1,78m GNSS: Fasemåling 9 Ikke spesifisert Nei Offentlig godkjent
(Real time kinematic) grensemerke
35 6 684 357,89 619 614,80 1,64m

---

[d004_Salgsoppgave (1) | Side [140, 141]]
 3240/96/615/0/13 439,3
Mottaker 3240/96/615/0/14 459,0
Mottaker 3240/96/615/0/15 438,5
Mottaker 3240/96/615/0/16 520,4
Utskrift fra eiendomsregisteret foretatt 22.01.2026 09:58 – Sist oppdatert 22.01.2026 09:58
Utskriften er levert av: Ambita as, Postboks 2923 Solli, 0230 Oslo. (Org.nr. 945 811 714) Side 4 av 11
140Gårdsnummer 96, Bruksnummer 615, Seksjonsnummer 10 i 3240 EIDSVOLL kommune
Bebyggelsens arealer mv., antall boenheter
Tomannsbolig, vertikaldelt
Opplysninger om boliger/bruksenheter:
Adresse

---

[d004_Salgsoppgave (1) | Side [98, 99]]
eksjonseier. Dette dekker vedlikehold av
fellesarealer og øvrige fellesutgifter.
Ved feietilsyn må eier stille stige til disposisjon. Da enten ved å låne av nabo eller kjøpe inn selv.
8
98Bolig selges med boligselgerforsikring
Selger har kjøpt Fremtind boligselgerforsikring.
Boligselgerforsikringen dekker mangler som selger er ansvarlig for etter avhendingsloven,
med de unntakene som følger av forsikringsvilkårene.
Hvis du oppdager noe du mener kan være en mangel, må du reklamere til Fremtind innen
to

---

[d004_Salgsoppgave (1) | Side [100]]
talen skal
faktureres seksjonseierne to ganger i året (januar og juni) med forskuddsbetaling
for de påfølgende seks månedene. Avtalen har fra og med 1. februar 2026 en
månedspris på 609 kroner per boenhet. Hollstedt har betalt for januar til juni
2026 og er for øvrig a jour med kontingenter/felleskostnader.

Har sameie felles lån?
Sameiet har per dags dato ikke felles lån.

Foreligger det husordensregler?
Det foreligger per dags dato ikke ordensregler, men se vedtekter om parkering
langs veg

---

[d004_Salgsoppgave (1) | Side [97, 98]]
 ut bindingstiden. Les mer på Regjeringens
nettsider.
41. Har du andre opplysninger om boligen eller eiendommen, utover det du har svart?
◆ Ja
7
97Sameiet Bekkedalshøgda har en felles avtale med Viken Fiber/Altibox (frivillig tilvalg) til en månedlig kostnad på kr
609,- per 01.01.26. Sameiet fakturerer hver seksjonseier halvårlig for denne tjenesten.
I tillegg faktureres det felleskostnader på kr 1 000,- per halvår til hver seksjonseier. Dette dekker vedlikehold av
fellesarealer og øvrige

---

[d004_Salgsoppgave (1) | Side [97]]
◆ Nei, ikke som jeg kjenner til
36. Vet du om det finnes planer, vedtak eller forslag som kan føre til økte utgifter, som festeavgift, fellesutgifter,
fellesgjeld eller kommunale avgifter?
◆ Nei, ikke som jeg kjenner til
Generelt
37. Har boligen garasje eller øvrige tilleggsbygninger?
◆ Ja
Vet du om det feil eller skader ved garasje eller øvrige tilleggsbygninger?
◆ Nei, ikke som jeg kjenner til
38. Vet du om det er gjort arbeid på eiendommen som ikke er nevnt i de andre spørsmålene?
◆ Ja
Faglært

---

[d004_Salgsoppgave (1) | Side [99, 100]]
g sørge for at lekkasjen stopper.
9
99Megleropplysninger Sameiet Bekkedalgshøgda

Beløp felleskostnader:
Kontingent/felleskostnader for denne seksjonen er per dags dato 1000 kroner per
halvår.
Kontingent/felleskostnader faktureres per halvår (januar og juni).

Hva er inkludert i felleskostnadene?
Kontingent/felleskostnader dekker snørydding og strøing av sameiets private veg,
strøm til lys på sameiets private veg, kostnader til drift og vedlikehold av sameiets
pumpekum og annen eiendom (for

---

[d004_Salgsoppgave (1) | Side [100]]
 drift og vedlikehold av sameiets
pumpekum og annen eiendom (for eksempel lekeplass) og forsikringer knyttet til
pumpeanlegget og styreansvar. Varmtvann, fyring og parkering er ikke inkludert i
kontingent/felleskostnader.

Hollstedt er del av en kollektivavtale som er inngått med Viken Fiber om TV og
internett gjeldende fra 1. desember 2024 med tre års bindingstid. Denne avtalen
med bindingstid følger seksjonen. Årsmøtet har bestemt at avtalen skal
faktureres seksjonseierne to ganger i året (januar og

---

[d004_Salgsoppgave (1) | Side [124]]
ent og enkeltgebyrer fakturert etter levert tjeneste. Vi kjenner ikke
samlet gebyr for en eiendom for et år før året er omme. Denne rapporten sammenstiller dette for fjoråret, med summer fordelt per
fagområde. Tjenestene vil normalt ha en prisøkning hvert år, samt at forbruk på ulike tjenester kan variere fra år til år.
Gebyr Fakturert beløp i 2025
Avløp 5 815,60 kr
Eiendomsskatt 5 075,20 kr
Feiing 526,40 kr
Renovasjon 5 441,00 kr
Vann 4 460,00 kr
Sum 21 318,20 kr
Prognose kommunale gebyrer på eiendommen

---

[d004_Salgsoppgave (1) | Side [161, 162]]
)(cid:359)(cid:398)(cid:359)(cid:432)(cid:351)(cid:442)(cid:430)(cid:1005) 

161Budskjema
Bindende bud på eiendommen
Gustav Granhaugs veg 85A, 2070 RÅHOLT
Gnr 96, bnr 615, snr 10, , i Sameiet Bekkedalshøgda med orgnr.: 925258296 i Eidsvoll kommune.
Oppdragsnr. 6032261899
Bud stort kr.:
(I tillegg kommer omkostninger iht. salgsoppgaven. Evt. andel fellesgjeld kommer i tillegg til budet).
Eventuelle

---

[d004_Salgsoppgave (1) | Side [124]]
,00 kr
Sum 21 318,20 kr
Prognose kommunale gebyrer på eiendommen inneværende år
Fakt. hittil i
Vare Mva Grunnlag Enhetspris Andel Korreksjon Årsprognose år
Grunngebyr avløp 15% 1 Boenhet 2400.00 1/1 0 % 2 400,00 kr 0,00 kr
Avløp etter måler 25% mva 25% 2 m³ 47.00 1/1 0 % 94,00 kr 0,00 kr
Avløp etter måler 15% mva 15% 2 m3 43.24 1/1 0 % 86,48 kr 0,00 kr
Forskudd avløpsgebyr 15% 4 m3 38.00 1/1 0 % 151,98 kr 0,00 kr
Innbetalt forskrudd avløpsgebyr 25% -56.5 m³ 47.00 1/1 0 % -2 655,50 kr 0,00 kr
25%

---

[d004_Salgsoppgave (1) | Side [127, 128]]
avkjørsel
Feltnavn FV4
Reguleringsplaner under arbeid i nærheten (100 meter)
Besøk kommunens hjemmeside for mer informasjon
Ingen reguleringsplaner under arbeid innenfor 100 meter fra eiendommen.
Side 2 av 2
127








   
  
 

---

[d004_Salgsoppgave (1) | Side [95]]
ngsplaner, nabovarsel, offentlige vedtak eller lignende?
◆ Ja
Er kjent med at det foreligger detaljregulering for området, som omhandler boligbebyggelse.
25. Vet du om det finnes kommunale pålegg, heftelser eller krav knyttet til eiendommen eller boligen?
◆ Nei, ikke som jeg kjenner til
26. Vet du om boligen eller eiendommen har blitt endret eller bygget ut etter opprinnelig byggeår, enten av deg
eller tidligere eiere?
◆ Ja
Opplysninger fra tidligere eier
Tidligere eier opplyser at selgeren de kjøpte av

---

[d004_Salgsoppgave (1) | Side [96, 97]]
 eiere?
◆ Nei, ikke som jeg kjenner til
33. Vet du om det finnes skaderapporter, tilstandsvurderinger, boligsalgsrapporter eller om det er utført målinger
for boligen?
◆ Nei, ikke som jeg kjenner til
34. Vet du om noe i nabolaget som kan være plagsomt eller ubehagelig for kjøperen?
◆ Nei, ikke som jeg kjenner til
6
9635. Vet du om du selv eller sameiet/borettslaget/laget/selskapet er innblandet i uenigheter eller konflikter rundt
eiendommen?
◆ Nei, ikke som jeg kjenner til
36. Vet du om det finnes planer,

---

[d004_Salgsoppgave (1) | Side [95]]
t er gjort arbeid på det elektriske anlegget, enten av deg eller tidligere eiere?
◆ Ja
Faglært arbeid:
1.
Hvilket år ble jobben fullført?: 2017
Firmanavn: Næss Instalasjon AS
Beskrivelse av arbeidet: Tidligere eier opplyste i sin egenerklæring at den de kjøpte boligen av fikk satt opp
utvendige lykter på tomten.
Eiendommen og omgivelsene
24. Vet du om bruken av eiendommen eller området rundt kan endres av foreslåtte eller vedtatte
reguleringsplaner, nabovarsel, offentlige vedtak eller lignende?
◆ Ja
Er

---

[d004_Salgsoppgave (1) | Side [126]]
der arbeid i nærheten
Bebyggelsesplaner Bebyggelsesplaner over bakken
Bebyggelsesplaner under bakken Midlertidige forbud
Kommuneplaner
Besøk kommunens hjemmeside for mer informasjon.
Id 0237202001
Navn Kommuneplanens arealdel for 2021-2031
Plantype Kommuneplanens arealdel
Status Endelig vedtatt arealplan
Ikrafttredelse 13.04.2021
Bestemmelser - https://www.arealplaner.no/3240/dokumenter/2549/Bestemmelser%20og%20retningslinjer.pdf
Delarealer Delareal 8 487 m2
Arealbruk

---

[d004_Salgsoppgave (1) | Side [137]]
rekomme på eiendommen. Merk at disse opplysningene
ikke omfatter informasjon om eventuell verning / verneklasse for eiendom eller bygningsmasse.
Grunnforurensing:
Ingen grunnforurensing registrert på matrikkelenheten.
I Matrikkelen fremgår kun informasjon om grunnforurensning som eventuelt er registrert på eiendommen i
forurensningsmyndighetenes arkiver. Grunnforurensning som ikke er registrert kan dermed allikevel forekomme på eiendommen.
Klage på vedtak i Matrikkelen:
Ingen klage registrert på

---

[d004_Salgsoppgave (1) | Side [126]]
llstendigheten av opplysningene i dette dokumentet. Det kan ikke rettes krav som følge av
at disse opplysningene benyttes som grunnlag for beslutninger.
Plantyper med treff
Kommuneplaner Reguleringsplaner
Plantyper uten treff
Kommuneplaner under arbeid Kommunedelplaner
Kommunedelplaner under arbeid Reguleringsplaner under bakken
Reguleringsplaner over bakken Reguleringsplaner under arbeid
Reguleringsplaner bunn Reguleringsplaner under arbeid i nærheten
Bebyggelsesplaner Bebyggelsesplaner over

---

[d004_Salgsoppgave (1) | Side [96]]
eg kjenner til
29. Vet du om det har vært flom, ras, skred eller lignende på eiendommen, eller om den ligger i et fareområde?
◆ Nei, ikke som jeg kjenner til
30. Har eiendommen utleiedel, for eksempel en leilighet, hybel eller lignende?
◆ Nei, ikke som jeg kjenner til
31. Består boligen av flere, selvstendige boenheter?
◆ Nei, ikke som jeg kjenner til
32. Vet du om det er gjort radonmåling på eiendommen, enten av deg eller tidligere eiere?
◆ Nei, ikke som jeg kjenner til
33. Vet du om det finnes

---

[d004_Salgsoppgave (1) | Side [92, 93]]
leggsbygninger, av enten deg eller tidligere eiere?
◆ Ja
Faglært arbeid:
2
921.
Hvilket år ble jobben fullført?: 2017
Firmanavn: Monter AS,
Beskrivelse av arbeidet: Opplysning om tidligere utførte tiltak (til orientering) Tidligere eier har opplyst at selger
ved deres kjøp informerte om at det var montert elektrisk port i carporten for å gjøre den om til garasje, og at
dette arbeidet ble utført av snekker fra Monter AS. Det ble samtidig opplyst at de ikke kjenner til om det ble søkt
om bruksendring fra

---

[d004_Salgsoppgave (1) | Side [95]]
 tidligere eier
Tidligere eier opplyser at selgeren de kjøpte av hadde satt inn en motorisert garasjeport, og at carporten dermed
ble bygget om til garasje. Det er også opplyst at en tidligere eier har oppført en pergola i hagen på ca. 9 m², samt
bygget en vedbod under den utvendige trappen mot hagen.
Stor asfaltert parkeringsplass på egen tomt med kantstein og hekk.
Det er gjennomført betydelig oppgradering /oppussing i 2025.
Utvendig (2025)
Terrasse / rekkverk over garasje og ellers beiset i 2

---

[d004_Salgsoppgave (1) | Side [95]]
ngsplaner, nabovarsel, offentlige vedtak eller lignende?
◆ Ja
Er kjent med at det foreligger detaljregulering for området, som omhandler boligbebyggelse.
25. Vet du om det finnes kommunale pålegg, heftelser eller krav knyttet til eiendommen eller boligen?
◆ Nei, ikke som jeg kjenner til
26. Vet du om boligen eller eiendommen har blitt endret eller bygget ut etter opprinnelig byggeår, enten av deg
eller tidligere eiere?
◆ Ja
Opplysninger fra tidligere eier
Tidligere eier opplyser at selgeren de kjøpte av

---

[d004_Salgsoppgave (1) | Side [93]]
plyst at de ikke kjenner til om det ble søkt
om bruksendring fra carport til garasje.
Ufaglært arbeid:
1.
Hvilket år ble jobben fullført?: 2025
Beskrivelse av arbeidet: Det er montert "spile"- gjerde i tre materialer med port i hagen på baksiden av huset.
All eksisterende platting, terrasser, rekkverk, bjelker/ spilevegg pergola og trapp er "vasket/renset" og beiset to
ganger med Tyrilin sommer 2025.
2.
Hvilket år ble jobben fullført?: 2017
Beskrivelse av arbeidet: Opplysninger fra tidligere eier (til

---

[d004_Salgsoppgave (1) | Side [93]]
17
Beskrivelse av arbeidet: Opplysninger fra tidligere eier (til orientering) Tidligere eier opplyste at de som solgte
de boligen satt opp en pergola i hagen på ca. 9 m², samt bygget en vedbod under den eksisterende utvendige
trappen mot hagen.
8. Vet du om det er, eller har vært, skjevheter eller setningsskader i boligen, støttemur, terrasse eller lignende?
◆ Nei, ikke som jeg kjenner til
Drenering, fukt og lekkasje
9. Vet du om det er, eller har vært, feil eller skader med dreneringen?
◆ Nei, ikke som

---

[d004_Salgsoppgave (1) | Side [95]]
t er gjort arbeid på det elektriske anlegget, enten av deg eller tidligere eiere?
◆ Ja
Faglært arbeid:
1.
Hvilket år ble jobben fullført?: 2017
Firmanavn: Næss Instalasjon AS
Beskrivelse av arbeidet: Tidligere eier opplyste i sin egenerklæring at den de kjøpte boligen av fikk satt opp
utvendige lykter på tomten.
Eiendommen og omgivelsene
24. Vet du om bruken av eiendommen eller området rundt kan endres av foreslåtte eller vedtatte
reguleringsplaner, nabovarsel, offentlige vedtak eller lignende?
◆ Ja
Er

---

[d004_Salgsoppgave (1) | Side [96]]
liser som er fra byggeår).
Vegger malt / kalkmalt og tapetsert i alle rom.
Stikkontakter spraymalt i matchende farge tilpasset de ulike rommene.
Nye sorte dørhåndtak på hvitmalte innerdører.
Gerikter rundt dører sparklet og malt.
Ny skyvedørsgarderobe med speil er installert.
Nye lameller og plissegardiner montert, hvorav én lystett plissegardin på soverom i 1. etasje.
Trapp og rekkverk malt i 2 strøk, samt nye teppefliser lagt.
Montert ny ringeklokke.
Kjøkken (2025)
Herdet glass med steinmotiv montert

---

[d004_Salgsoppgave (1) | Side [97]]
iendommen som ikke er nevnt i de andre spørsmålene?
◆ Ja
Faglært arbeid:
1. Hvilket år ble jobben fullført?: 2025
Firmanavn: Bygg & Malerexpert AS, Glass Service AS, Norges Markiser ASEidsvoll Rør AS
Beskrivelse av arbeidet: Se oversikt pkt. 26.
Ufaglært arbeid:
1. Hvilket år ble jobben fullført?: 2025
Beskrivelse av arbeidet: Se oversikt pkt.
26.
39. Vet du om det er, eller har vært, feil på tilbehør som følger med eiendommen?
◆ Ja
Opplysning om koketopp (til orientering).
Tidligere eier opplyste i sin

---

[d004_Salgsoppgave (1) | Side [97]]
◆ Nei, ikke som jeg kjenner til
36. Vet du om det finnes planer, vedtak eller forslag som kan føre til økte utgifter, som festeavgift, fellesutgifter,
fellesgjeld eller kommunale avgifter?
◆ Nei, ikke som jeg kjenner til
Generelt
37. Har boligen garasje eller øvrige tilleggsbygninger?
◆ Ja
Vet du om det feil eller skader ved garasje eller øvrige tilleggsbygninger?
◆ Nei, ikke som jeg kjenner til
38. Vet du om det er gjort arbeid på eiendommen som ikke er nevnt i de andre spørsmålene?
◆ Ja
Faglært

---

[d004_Salgsoppgave (1) | Side [92]]
ke som jeg kjenner til
5. Vet du om det er utført arbeid på tak, yttervegg, vindu, dører eller annen fasade, enten av deg eller tidligere
eiere?
◆ Nei, ikke som jeg kjenner til
6. Vet du om det er, eller har vært, feil eller skader på vinduene, som for eksempel kondens, fuktskader eller
vanninntrengning? Eller er noen av vinduene i boligen punktert?
◆ Nei, ikke som jeg kjenner til
7. Vet du om det er utført arbeid på garasje eller øvrige tilleggsbygninger, av enten deg eller tidligere eiere?
◆ Ja
Faglært

---

[d004_Salgsoppgave (1) | Side [96, 97]]
 eiere?
◆ Nei, ikke som jeg kjenner til
33. Vet du om det finnes skaderapporter, tilstandsvurderinger, boligsalgsrapporter eller om det er utført målinger
for boligen?
◆ Nei, ikke som jeg kjenner til
34. Vet du om noe i nabolaget som kan være plagsomt eller ubehagelig for kjøperen?
◆ Nei, ikke som jeg kjenner til
6
9635. Vet du om du selv eller sameiet/borettslaget/laget/selskapet er innblandet i uenigheter eller konflikter rundt
eiendommen?
◆ Nei, ikke som jeg kjenner til
36. Vet du om det finnes planer,

---

[d004_Salgsoppgave (1) | Side [96]]
eg kjenner til
29. Vet du om det har vært flom, ras, skred eller lignende på eiendommen, eller om den ligger i et fareområde?
◆ Nei, ikke som jeg kjenner til
30. Har eiendommen utleiedel, for eksempel en leilighet, hybel eller lignende?
◆ Nei, ikke som jeg kjenner til
31. Består boligen av flere, selvstendige boenheter?
◆ Nei, ikke som jeg kjenner til
32. Vet du om det er gjort radonmåling på eiendommen, enten av deg eller tidligere eiere?
◆ Nei, ikke som jeg kjenner til
33. Vet du om det finnes

---

[d004_Salgsoppgave (1) | Side [91, 92]]
av tilstanden til
boligen. Her kan du finne viktige opplysninger som du som kjøper bør
vite om før du bestemmer deg for et eventuelt kjøp. Har du spørsmål
til egenerklæringen kan du snakke med megleren som står for salget.
Selgere
Laila Irene Hollstedt
Boligen
Boligen ble kjøpt 2024
Selger har ikke bodd i boligen de 12 siste månedene
Gustav Granhaugs Veg85A Boligselger har kjøpt boligselgerforsikring
2070Råholt
3240-96/615/0/10
Meglers oppdragsnummer: 6032261899 1
91Våtrom, tak og fasade
1. Vet du om det

---

[d004_Salgsoppgave (1) | Side [88]]
ei
Oppsummering av fukt TG-1
Det er ikke foretatt hulltaking fra tilstøtende rom da det ikke er belastning av fritt vann på overflater.
Det er søkt etter fukt på gulvoverflater- det registreres ikke tegn til fukt via dette søket.
Dokumentasjon
Fremlagt dokumentasjon Nei
6.20 Garasje/Bod
Beskrivelse
Det er garasje med elektrisk portåpner tilknyttet boligen, med terrasse over.
Innerst i garasjen er det en lukket bod med egen utgang til hagen på baksiden. Det er også utekran
i garasjen.
Garasje: Ca 6,6m x

---

[d004_Salgsoppgave (1) | Side [137]]
rekomme på eiendommen. Merk at disse opplysningene
ikke omfatter informasjon om eventuell verning / verneklasse for eiendom eller bygningsmasse.
Grunnforurensing:
Ingen grunnforurensing registrert på matrikkelenheten.
I Matrikkelen fremgår kun informasjon om grunnforurensning som eventuelt er registrert på eiendommen i
forurensningsmyndighetenes arkiver. Grunnforurensning som ikke er registrert kan dermed allikevel forekomme på eiendommen.
Klage på vedtak i Matrikkelen:
Ingen klage registrert på

---

[d004_Salgsoppgave (1) | Side [88, 89, 90]]
 på baksiden. Det er også utekran
i garasjen.
Garasje: Ca 6,6m x 3,1m
Bod: 3,0m x 1,9m
Oppsummering TG-1
Det registreres ikke tegn til avvik på befaringstidspunktet.
6.21 Ikke relevante bygningsdeler
Gustav Granhaugs veg 85 A, 2070 Råholt 29 av 30
88g
Oljetank
Vannbåren varme
Gustav Granhaugs veg 85 A, 2070 Råholt 30 av 30
89Boligselgerforsikring fra Fremtind
Når du kjøper eller selger eiendom, er trygghet og forutsigbarhet viktig for både
kjøper og selger. Med boligselgerforsikring fra Fremtind er både

---

[d004_Salgsoppgave (1) | Side [98, 99]]
eksjonseier. Dette dekker vedlikehold av
fellesarealer og øvrige fellesutgifter.
Ved feietilsyn må eier stille stige til disposisjon. Da enten ved å låne av nabo eller kjøpe inn selv.
8
98Bolig selges med boligselgerforsikring
Selger har kjøpt Fremtind boligselgerforsikring.
Boligselgerforsikringen dekker mangler som selger er ansvarlig for etter avhendingsloven,
med de unntakene som følger av forsikringsvilkårene.
Hvis du oppdager noe du mener kan være en mangel, må du reklamere til Fremtind innen
to

---

[d004_Salgsoppgave (1) | Side [86]]
nnomført arbeider etter opprinnelig byggeår? Ja
Eier opplyser om at det er etablert vask og ny innredning på rommet i 2025.
Er det påvist avvik i krav om høydeforskjell på tettesjikt/fall til sluk? Nei
Er det fare for at lekkasjevann fra installasjoner i rommet ikke når sluket? Nei
Er vindu eller dør plassert i våtsone (utsatt for vannsprut)? Nei
Nullpunkt laser: 18,5
Er det gjennomføringer i vegg/tak mot kald sone? Nei
Er det registrert riss, sprekker i fuger, bom (hulrom) under flis? Nei
Er det påvist

---

[d004_Salgsoppgave (1) | Side [100]]
talen skal
faktureres seksjonseierne to ganger i året (januar og juni) med forskuddsbetaling
for de påfølgende seks månedene. Avtalen har fra og med 1. februar 2026 en
månedspris på 609 kroner per boenhet. Hollstedt har betalt for januar til juni
2026 og er for øvrig a jour med kontingenter/felleskostnader.

Har sameie felles lån?
Sameiet har per dags dato ikke felles lån.

Foreligger det husordensregler?
Det foreligger per dags dato ikke ordensregler, men se vedtekter om parkering
langs veg

---

[d004_Salgsoppgave (1) | Side [100]]
 drift og vedlikehold av sameiets
pumpekum og annen eiendom (for eksempel lekeplass) og forsikringer knyttet til
pumpeanlegget og styreansvar. Varmtvann, fyring og parkering er ikke inkludert i
kontingent/felleskostnader.

Hollstedt er del av en kollektivavtale som er inngått med Viken Fiber om TV og
internett gjeldende fra 1. desember 2024 med tre års bindingstid. Denne avtalen
med bindingstid følger seksjonen. Årsmøtet har bestemt at avtalen skal
faktureres seksjonseierne to ganger i året (januar og

---

[d004_Salgsoppgave (1) | Side [99, 100]]
g sørge for at lekkasjen stopper.
9
99Megleropplysninger Sameiet Bekkedalgshøgda

Beløp felleskostnader:
Kontingent/felleskostnader for denne seksjonen er per dags dato 1000 kroner per
halvår.
Kontingent/felleskostnader faktureres per halvår (januar og juni).

Hva er inkludert i felleskostnadene?
Kontingent/felleskostnader dekker snørydding og strøing av sameiets private veg,
strøm til lys på sameiets private veg, kostnader til drift og vedlikehold av sameiets
pumpekum og annen eiendom (for

---

[d004_Salgsoppgave (1) | Side [100]]
 dato ikke ordensregler, men se vedtekter om parkering
langs veg mv.

Kreves det styregodkjennelse av ny eier?
Det kreves ikke styregodkjennelse av ny eier, men navn, telefonnummer og e-
postadresse til kjøper må meldes til styret inne 14 dager etter overtakelse, jf
vedtektene paragraf 9. I tillegg ber vi som nevnt om fødsels- og personnummer til
rapportering av tredjepartsopplysninger til Skatteetaten.

Vennlig hilsen
Christer Holtet

---

[d004_Salgsoppgave (1) | Side [97, 98]]
 ut bindingstiden. Les mer på Regjeringens
nettsider.
41. Har du andre opplysninger om boligen eller eiendommen, utover det du har svart?
◆ Ja
7
97Sameiet Bekkedalshøgda har en felles avtale med Viken Fiber/Altibox (frivillig tilvalg) til en månedlig kostnad på kr
609,- per 01.01.26. Sameiet fakturerer hver seksjonseier halvårlig for denne tjenesten.
I tillegg faktureres det felleskostnader på kr 1 000,- per halvår til hver seksjonseier. Dette dekker vedlikehold av
fellesarealer og øvrige

---

[d004_Salgsoppgave (1) | Side [127]]
 m2
Formål Lekeplass
Feltnavn f_F3
Delareal 245 m2
Formål Felles avkjørsel
Feltnavn FV4
Id 023709000
Navn Eiendommene 96/264 og 36 m.fl., med adkomstveger, Bekkedalshøgda
Plantype Eldre reguleringsplan
Status Endelig vedtatt arealplan
Ikrafttredelse 15.02.1993
Bestemmelser - https://www.arealplaner.no/3240/dokumenter/195/023709000.pdf
Delarealer Delareal 5 552 m2
Formål Frittliggende småhusbebyggelse
Feltnavn B4
Delareal 167 m2
Formål Felles avkjørsel
Feltnavn FV4
Reguleringsplaner under arbeid i nærheten

---

[d004_Salgsoppgave (1) | Side [120]]
YA parkering 15,0m2
BYA totalt 219,7m2
BRA 1. etg. 65,8m2
BRA 2. etg. 60,0m2
BRA per bygg 125,8m2
BRA totalt 251,6m2
BYA og BRA er utregnet ihht norsk standard
P-rom per bolig 116,3m2
Situasjonskartet er hentet fra kommunens kart base, men kan inneholde feil.
Prosjekt:
Bekkedalshøgda boligområde
Klient:
Jessheim Bygg og Eiendom AS
B B B G e y y n k g g r. k g g e 9 e e d 6 a s a d t l B e s r d n h e : r ø s . s g 4 e d 3 : a S E i - g p n o a st t : u f r i : J r o m h Fa T a E ap n l3 . kf o .2 S S ss ::

---

[d004_Salgsoppgave (1) | Side [137]]
Ambita er ikke ansvarlig for tap som oppstår som følge av feil i Eiendomsutskriften.
Ikke tinglyst eierforhold:
Ingen ikke tinglyste eierforhold registrert på matrikkelenheten.
Kulturminner:
Ingen kulturminner registrert på matrikkelenheten.
I Matrikkelen fremgår kun informasjon om fredet kulturminne der det er registrert i Riksantikvarens arkiv på eiendom og bygning.
Kulturminner som ikke er registrert i Matrikkelen kan dermed allikevel forekomme på eiendommen. Merk at disse opplysningene
ikke omfatter

---

[d004_Salgsoppgave (1) | Side [141, 142, 143]]
58
Utskriften er levert av: Ambita as, Postboks 2923 Solli, 0230 Oslo. (Org.nr. 945 811 714) Side 5 av 11
141Gårdsnummer 96, Bruksnummer 615, Seksjonsnummer 10 i 3240 EIDSVOLL kommune
Oversiktskart
Utskrift fra eiendomsregisteret foretatt 22.01.2026 09:58 – Sist oppdatert 22.01.2026 09:58
Utskriften er levert av: Ambita as, Postboks 2923 Solli, 0230 Oslo. (Org.nr. 945 811 714) Side 6 av 11
142Gårdsnummer 96, Bruksnummer 615, Seksjonsnummer 10 i 3240 EIDSVOLL kommune
Teig 1 (Hovedteig)
Utskrift fra

---

[d004_Salgsoppgave (1) | Side [137]]
gkrets: 3 Eidsvoll Verk
Oppdatert: 01.01.2024 Kirkesogn: 2070304 Råholt
Tettsted: 675 Råholt
Eiendomsopplysninger
Matrikkel:
Type: Best. eierseksjon Tinglyst: Ja Reg.landbruksreg.: Nei
Bruksnavn: Matrikkelført: Ja Antall teiger: 1
Etableringsdato: 30.06.2015 Har festegrunn: Nei Formål: Bolig
Areal: 439,8 kvm Skyld: Sameiebrøk: 126/2 152
Arealkilde: Beregnet Areal Areal felles tomt: 1 062,6 kvm
Arealmerknad:
Om fullstendighet og nøyaktighet i matrikkelutskriften:
Ambita tar forbehold om at informasjon som

---

[d004_Salgsoppgave (1) | Side [138]]
Berørt 3240/96/581 0,0
Berørt 3240/96/583 0,0
Berørt 3240/96/584 0,0
Berørt 3240/96/615/0/1 0,0
Berørt 3240/96/615/0/2 0,0
Berørt 3240/96/615/0/3 0,0
Berørt 3240/96/615/0/9 0,0
Berørt 3240/96/615/0/10 0,0
Berørt 3240/96/621 0,0
Berørt 3240/96/629 0,0
Berørt 3240/96/630 0,0
Berørt 3240/96/631 0,0
Mottaker 3240/96/632 1 331,8
Utskrift fra eiendomsregisteret foretatt 22.01.2026 09:58 – Sist oppdatert 22.01.2026 09:58
Utskriften er levert av: Ambita as, Postboks 2923 Solli, 0230 Oslo. (Org.nr. 945 811 714)

---

[d004_Salgsoppgave (1) | Side [146, 147]]
 GNSS: Fasemåling 9 Ikke spesifisert Nei Asfaltspiker
(Real time kinematic)
Utskrift fra eiendomsregisteret foretatt 22.01.2026 09:58 – Sist oppdatert 22.01.2026 09:58
Utskriften er levert av: Ambita as, Postboks 2923 Solli, 0230 Oslo. (Org.nr. 945 811 714) Side 10 av 11
146Gårdsnummer 96, Bruksnummer 615, Seksjonsnummer 10 i 3240 EIDSVOLL kommune
34 6 684 357,12 619 613,20 1,78m GNSS: Fasemåling 9 Ikke spesifisert Nei Offentlig godkjent
(Real time kinematic) grensemerke
35 6 684 357,89 619 614,80 1,64m

---

[d004_Salgsoppgave (1) | Side [144, 145]]
ling 9 Ikke spesifisert Nei Asfaltspiker
(Real time kinematic)
8 6 684 345,26 619 581,65 5,95m GNSS: Fasemåling 9 8,00 Ikke spesifisert Nei Offentlig godkjent
(Real time kinematic) grensemerke
(¹) Lengden fra punktet til neste punkt i rekken.
Utskrift fra eiendomsregisteret foretatt 22.01.2026 09:58 – Sist oppdatert 22.01.2026 09:58
Utskriften er levert av: Ambita as, Postboks 2923 Solli, 0230 Oslo. (Org.nr. 945 811 714) Side 8 av 11
144Gårdsnummer 96, Bruksnummer 615, Seksjonsnummer 10 i 3240 EIDSVOLL

---

[d004_Salgsoppgave (1) | Side [161, 162]]
)(cid:359)(cid:398)(cid:359)(cid:432)(cid:351)(cid:442)(cid:430)(cid:1005) 

161Budskjema
Bindende bud på eiendommen
Gustav Granhaugs veg 85A, 2070 RÅHOLT
Gnr 96, bnr 615, snr 10, , i Sameiet Bekkedalshøgda med orgnr.: 925258296 i Eidsvoll kommune.
Oppdragsnr. 6032261899
Bud stort kr.:
(I tillegg kommer omkostninger iht. salgsoppgaven. Evt. andel fellesgjeld kommer i tillegg til budet).
Eventuelle

---

[d004_Salgsoppgave (1) | Side [159]]
nansiering. bolig/fritid/tomt) samt fakturagebyr, er medregnet
i premie tabellen ovenfor, slik at du kun betaler den
Både distribusjonskostnad til EiendomsMegler 1 oppgitte premien.
Østlandet (kr 4 873 for Borettslags eiendom, kr 6
856 for seksjonert eiendom/aksjebolig og kr 7 709 Det tas forbehold om pris- og vilkårsendringer.
for enebolig/fritid/tomt) og honorar til Söderberg &
Produkt og leverandørinformasjon
Forsikringen er plassert hos Gar-Bo Försäkring AB og Klage
er formidlet gjennom Söderberg &

---

[d004_Salgsoppgave (1) | Side [157, 158]]
 mer
energieffektiv bolig
Les mer på
sb1ostlandet.no,
eller ring oss på
915 070 40.
Eff.rente ,3 %,
5 8
2 mill., o/25 år,
kostnad kr 1.593.715,
totalt kr 3.593.715.
157Boligkjøperforsikring
Boligkjøperforsikring
Med vår boligkjøperforsikring får du en rettshjelpsforsikring
som dekker juridisk bistand i eventuelle reklamasjonssaker mot
selger. Med boligkjøperforsikring er du i trygge hender dersom du
oppdager feil eller mangler ved boligen du har kjøpt.
Hvis boligen du har kjøpt har feil eller mangler

---

[d004_Salgsoppgave (1) | Side [158]]
olig kr 12 500
tak på rundt kr 100 000 og en egenandel på ca. 20 %,
Enebolig/fritid/tomt: kr 17 900
så trenger du med boligkjøperforsikring ikke å bekymre
deg for beløpet på saksomkostningene. Dette dekkes
av forsikringsselskapet uansett hvor høyt det blir.
Den gir deg en ekstra trygghet
Er du bekymret for at du kanskje kan komme i konflikt
med boligselger og at du ikke har råd eller lyst til å
dekke sakskostnader, kan det være betryggende å
kjøpe en boligkjøperforsikring. Selger har i de

---

[d004_Salgsoppgave (1) | Side [124]]
,00 kr
Sum 21 318,20 kr
Prognose kommunale gebyrer på eiendommen inneværende år
Fakt. hittil i
Vare Mva Grunnlag Enhetspris Andel Korreksjon Årsprognose år
Grunngebyr avløp 15% 1 Boenhet 2400.00 1/1 0 % 2 400,00 kr 0,00 kr
Avløp etter måler 25% mva 25% 2 m³ 47.00 1/1 0 % 94,00 kr 0,00 kr
Avløp etter måler 15% mva 15% 2 m3 43.24 1/1 0 % 86,48 kr 0,00 kr
Forskudd avløpsgebyr 15% 4 m3 38.00 1/1 0 % 151,98 kr 0,00 kr
Innbetalt forskrudd avløpsgebyr 25% -56.5 m³ 47.00 1/1 0 % -2 655,50 kr 0,00 kr
25%

---

[d004_Salgsoppgave (1) | Side [119]]
eend Ae:S
I 636423 Tegningsfase: Format: Utskriftsdato:
J 636424 Byggemeldingstegninger A3 17.01.2013
Produktet er Norsk byggservice AS sin eiendom inntil varen er betalt til fulle PTelagnneinrg: Tegningsnr.:E-01
119
41 31 21 11 01 9 8 7 6 5 4 3 2 1 15 x 190 = 2 850
16 x 169 = 2 700
V/T
058
8
058
6
000
2
41 31 21 11 01 9 8 7 6 5 4 3 2 1
1etg 1:100
13 950 10 750
3 650 530 3 650
3 730 900 3 225 1 200 2 370 1 600 925 900 3 225 1 200 2 370 1 600 925
2 100 1 300 1 300 1 300 1 300
Bod Bod
5,3 m2 Sov. 5,6 m2

---

[d004_Salgsoppgave (1) | Side [125]]
 0,00 kr
prom
Sum 1 474,15 kr 0,00 kr
Løpende gebyr brukes for å fordele en årlig kostnad på flere innbetalinger.
Mva-feltet gir informasjon om varens merverdiavgiftsats, og beløp er inkludert merverdiavgift. De som har 0% er unntatt
merverdiavgift.
Prognosene for inneværende år kan avvike, spesielt ved årsskifte. Dette kan skyldes at enhetspriser ikke er oppdatert for nytt år
eller at noen gebyr foreløpig ikke er opprettet for nytt år.
FORBEHOLD VED UTLEVERING AV INFORMASJON I FORBINDELSE MED

---

[d004_Salgsoppgave (1) | Side [158, 159]]
re betryggende å
kjøpe en boligkjøperforsikring. Selger har i de fleste
soderbergpartners.no/eiendom
tilfeller tilgang til prosfesjonell hjelp, da bør du som
kjøper av bolig også ha det.
158Boligkjøperforsikring
Dersom du ønsker å tegne boligkjøperforsikring, vil Partners (kr 688 for borettslagseiendom, kr 1 000 for
dette være en omkostning ved kjøpet og premien seksjonert eiendom/aksjebolig og kr 1 432 for ene-
finansieres gjennom din boligfinansiering. bolig/fritid/tomt) samt fakturagebyr, er medregnet
i

---

[d004_Salgsoppgave (1) | Side [162]]
. Evt. andel fellesgjeld kommer i tillegg til budet).
Eventuelle forbehold:
Ønsket overtagelsesdato: / Akseptfrist: / kl.:
Finansieringsplan
Lån i v/ tlf. kr
Lån i v/ tlf. kr
Egenkapital i v/ tlf. kr
Hvor kommer egenkapitalen fra?:
(salg av bolig, BSU, bankinnskudd, oppsparte midler)
Jeg/vi ønsker 昀椀nansieringstilbud fra SpareBank 1: Ja Nei
Jeg/vi ønsker verdivurdering fra EiendomsMegler 1 Ja Nei
Jeg gir bud som: Forbruker Ledd i næringsvirksomhet/juridisk person (selskap)
Forbruker: Med forbruker menes en

---

[d004_Salgsoppgave (1) | Side [124, 125]]
 avløpsgebyr 25% -56.5 m³ 47.00 1/1 0 % -2 655,50 kr 0,00 kr
25% mva
Innbetalt forskudd avløpsgebyr 15% -56.5 m3 43.24 1/1 0 % -2 443,06 kr 0,00 kr
15% mva
Grunngebyr vann 15% 1 Boenhet 1652.00 1/1 0 % 1 652,00 kr 0,00 kr
124Fakt. hittil i
Vare Mva Grunnlag Enhetspris Andel Korreksjon Årsprognose år
Vannmålerleie 3/4" 15% 1 stk 304.00 1/1 0 % 304,00 kr 0,00 kr
Vann etter måler 25% mva 25% 2 m³ 34.00 1/1 0 % 68,00 kr 0,00 kr
Vann etter måler 15% mva 15% 2 m3 31.28 1/1 0 % 62,56 kr 0,00 kr
Forskudd vanngebyr

---

[d004_Salgsoppgave (1) | Side [92]]
ask med tilhørende avløpsrør, nytt
opplegg for vaskemaskin, samt montert tilbakeslagsventil og ekspansjonskar i henhold til gjeldende forskrifter.
Kommunen installerte ny vannmåler i 2025.
Ufaglært arbeid:
1.
Hvilket år ble jobben fullført?: 2025
Beskrivelse av arbeidet: Bad i 1. etasje Det er byttet baderomsinnredning, inkludert tre høyskap med 2 dører
og speil innvendig , servantskap med to skuffer, vask og blandebatteri. Det er også montert speilskap med lys.
1. etg. Vaskeromsinnredning
Vet du om

---

[d004_Salgsoppgave (1) | Side [85, 86]]
e rom mot dusjsone fra tidligere takstmann.
Det registreres ikke tegn til fukt via hulltaking eller på overflater.
Dokumentasjon
Fremlagt dokumentasjon Nei
Gustav Granhaugs veg 85 A, 2070 Råholt 26 av 30
856.19 Våtrom: Vaskerom
Overflate
Beskrivelse av overflate
Badet har flislagte overflater på gulv og overflatebehandlet gips på vegger.
Mørke 20x20 fliser på gulv og hvite overflater på vegger.
Vaskerommet har varmekabler på gulv.
Er det gjennomført arbeider etter opprinnelig byggeår? Ja
Eier opplyser om

---

[d004_Salgsoppgave (1) | Side [91, 92]]
agsnummer: 6032261899 1
91Våtrom, tak og fasade
1. Vet du om det er, eller har vært, feil eller skader på bad/våtrom?
◆ Nei, ikke som jeg kjenner til
2. Vet du om det er gjort arbeid på bad eller våtrom, enten av deg eller tidligere eiere?
◆ Ja
Faglært arbeid:
1.
Hvilket år ble jobben fullført?: 2025
Firmanavn: Org. nr. 970011455 Knut A. Stubergh og Eidsvoll Rør As
Beskrivelse av arbeidet: Vaskerom i 1. etasje Det er installert utslagsvask med tilhørende avløpsrør, nytt
opplegg for vaskemaskin, samt

---

[d004_Salgsoppgave (1) | Side [92]]
montert speilskap med lys.
1. etg. Vaskeromsinnredning
Vet du om tettesjikt, membran eller sluk ble fornyet eller oppgradert?
◆ Nei, ikke som jeg kjenner til
3. Vet du om det finnes dokumentasjon på hvordan bad/våtrom er bygget opp?
◆ Nei, ikke som jeg kjenner til
4. Vet du om det er, eller har vært, vannlekkasje eller andre typer feil eller skader på tak, yttervegg, vinduer, dører,
garasje, tilleggsbygninger eller lignende?
◆ Nei, ikke som jeg kjenner til
5. Vet du om det er utført arbeid på tak,

---

[d004_Salgsoppgave (1) | Side [87]]
lvalg, eller skader i tettesjikt med fare for fuktskade? Nei
Har membran/tettesjikt nådd en alder som gir økt risiko for skader eller følgeskader? Nei
Oppsummering av membran, tettesjikt og sluk TG-1
Det registreres riktig utførelse av membran, tettesjikt og sluk på rommet.
Sanitærutstyr
Beskrivelse
Vaskerommet har plassering av ventilasjonsanlegg, sentralstøvsuger, sikringsskap, fordelerskap,
varmtvannsbereder, opplegg for vaskemaskin/tørketrommel og innredning/servantskap med
utslagsvask.
Innredning med

---

[d004_Salgsoppgave (1) | Side [94]]

Firmanavn: Waterstop AS
Beskrivelse av arbeidet: Tidligere eier opplyser at ventil er byttet til
Waterstop.
2.
Hvilket år ble jobben fullført?: 2025
Firmanavn: Org. nr. 970011455 Knut A. Stubergh og Eidsvoll Rør As
Beskrivelse av arbeidet: Byttet til ett greps blandebatteri på kjøkken- rør i rør system. Se pkt. Våtrom, tak og
fasade vedr. vaskerom
16. Vet du om eiendommen har privat vannforsyning, vannbrønn, septiktank, pumpekum, avløpskvern eller
lignende?
◆ Ja
Har du opplevd at dette har vært

---

[d004_Salgsoppgave (1) | Side [96]]
 ringeklokke.
Kjøkken (2025)
Herdet glass med steinmotiv montert mellom benkeplate og overskap.
Tre overskap med farget, herdet glass montert.
Nytt ettgreps blandebatteri.
Bad (2025)
Nytt servantskap/innredning med vask og speilskap med lys.
Tre nye høyskap (160 × 40 cm) med to dører og innvendig speil.
Nytt blandebatteri til vask/innredning.
Ny "dorullholder".
Vaskerom ( 2025 )
Ny innredning
Ny utslagsvask med ett greps blandebatteri
Nytt opplegg for vaskemaskin
Innstallert tilbakeslagsventil og

---

[d004_Salgsoppgave (1) | Side [93, 94]]
, ikke som jeg kjenner til
13. Vet du om det er, eller har vært, skadedyr eller sjenerende insekter på eiendommen eller i boligen?
◆ Nei, ikke som jeg kjenner til
Tekniske installasjoner
14. Vet du om det er, eller har vært, feil på vann- eller avløpsanlegg?
◆ Nei, ikke som jeg kjenner til
15. Vet du om det er gjort arbeid på vann og avløp, enten av deg eller tidligere eiere?
3
93◆ Ja
Faglært arbeid:
1. Hvilket år ble jobben fullført?: 2022
Firmanavn: Waterstop AS
Beskrivelse av arbeidet: Tidligere eier

---

[d004_Salgsoppgave (1) | Side [87]]
rommel og innredning/servantskap med
utslagsvask.
Innredning med hvite/profilerte fronter.
Er det skader på utstyr og innredning? Nei
Er det innebygd sisterne til klosett? Nei
Oppsummering av sanitærutstyr TG-1
Det registreres ikke tegn til avvik eller skader på befaringstidspunktet.


## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "category": "contractual_issue",
      "severity": "warning",
      "description": "Carport er bygget om til garasje uten kjent søknad om bruksendring. Det er montert elektrisk garasjeport og carporten er dermed omgjort til garasje, men det er ikke kjent om det ble søkt om bruksendring fra carport til garasje.",
      "evidence": [
        "Tidligere eier opplyser at selgeren de kjøpte av hadde satt inn en motorisert garasjeport, og at carporten dermed ble bygget om til garasje.",
        "Det ble samtidig opplyst at de ikke kjenner til om det ble søkt om bruksendring fra carport til garasje.",
        "Arbeidet ble utført av snekker fra Monter AS i 2017.",
        "Takstrapport bekrefter: 'Det er garasje med elektrisk portåpner tilknyttet boligen, med terrasse over.' (TG-1, ingen avvik registrert på befaringstidspunktet)"
      ],
      "source_documents": [
        "d004_Salgsoppgave (1)"
      ],
      "source_pages": [
        92,
        93,
        88,
        95
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R2",
      "category": "contractual_issue",
      "severity": "warning",
      "description": "Selger har ikke bodd i boligen de siste 12 månedene. Boligen ble kjøpt i 2024 og selger har ikke bebodd den. Dette betyr at selger har begrenset kunnskap om boligens faktiske tilstand, noe som øker risikoen for skjulte feil og mangler.",
      "evidence": [
        "Boligen ble kjøpt 2024.",
        "Selger har ikke bodd i boligen de 12 siste månedene.",
        "Selger (Laila Irene Hollstedt) bekrefter dette i egenerklæringen.",
        "Selger svarer 'Nei, ikke som jeg kjenner til' på en rekke spørsmål om boligens tilstand, noe som underbygger begrenset kunnskap."
      ],
      "source_documents": [
        "d004_Salgsoppgave (1)"
      ],
      "source_pages": [
        91
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R3",
      "category": "contractual_issue",
      "severity": "warning",
      "description": "Ingen radonmåling er utført på eiendommen. Verken nåværende eller tidligere eiere kjenner til at det er gjort radonmåling. Radon kan utgjøre en helserisiko og bør måles.",
      "evidence": [
        "Spørsmål 32: 'Vet du om det er gjort radonmåling på eiendommen, enten av deg eller tidligere eiere?' – Svar: 'Nei, ikke som jeg kjenner til'.",
        "Ingen dokumentasjon på radonmåling er fremlagt i salgsoppgaven."
      ],
      "source_documents": [
        "d004_Salgsoppgave (1)"
      ],
      "source_pages": [
        96
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R4",
      "category": "contractual_issue",
      "severity": "warning",
      "description": "Tettesjikt, membran eller sluk på vaskerom er ikke fornyet eller oppgradert, og det finnes ingen dokumentasjon på hvordan bad/våtrom er bygget opp. Dette gir økt risiko for skjulte fuktskader.",
      "evidence": [
        "Spørsmål: 'Vet du om tettesjikt, membran eller sluk ble fornyet eller oppgradert?' – Svar: 'Nei, ikke som jeg kjenner til'.",
        "Spørsmål: 'Vet du om det finnes dokumentasjon på hvordan bad/våtrom er bygget opp?' – Svar: 'Nei, ikke som jeg kjenner til'.",
        "Takstrapport (side 87) angir TG-1 for membran/tettesjikt og sluk på vaskerom: 'Det registreres riktig utførelse av membran, tettesjikt og sluk på rommet.' Dette modererer risikoen noe, men dokumentasjon mangler fortsatt.",
        "Det er gjort oppgraderinger på vaskerom i 2025 (ny innredning, utslagsvask, opplegg for vaskemaskin), men ikke på tettesjikt/membran."
      ],
      "source_documents": [
        "d004_Salgsoppgave (1)"
      ],
      "source_pages": [
        92,
        87,
        86
      ],
      "confidence": 0.72
    },
    {
      "risk_id": "R5",
      "category": "contractual_issue",
      "severity": "info",
      "description": "Kollektivavtale med Viken Fiber/Altibox med tre års bindingstid følger seksjonen. Kjøper overtar denne bindingen og må betale kr 609,- per måned for TV og internett frem til bindingstiden utløper (desember 2027).",
      "evidence": [
        "Hollstedt er del av en kollektivavtale som er inngått med Viken Fiber om TV og internett gjeldende fra 1. desember 2024 med tre års bindingstid. Denne avtalen med bindingstid følger seksjonen.",
        "Avtalen har fra og med 1. februar 2026 en månedspris på 609 kroner per boenhet.",
        "Sameiet fakturerer halvårlig (januar og juni).",
        "Hollstedt har betalt for januar til juni 2026 og er a jour med kontingenter/felleskostnader."
      ],
      "source_documents": [
        "d004_Salgsoppgave (1)"
      ],
      "source_pages": [
        100,
        97
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R6",
      "category": "contractual_issue",
      "severity": "info",
      "description": "Pergola på ca. 9 m² og vedbod under utvendig trapp er oppført av tidligere eier. Det er ikke opplyst om disse er omsøkt eller godkjent av kommunen.",
      "evidence": [
        "Tidligere eier opplyser at selgeren de kjøpte av hadde oppført en pergola i hagen på ca. 9 m², samt bygget en vedbod under den utvendige trappen mot hagen.",
        "Egenerklæringen bekrefter dette under spørsmål om endringer/utbygging etter opprinnelig byggeår.",
        "Det er ikke opplyst om søknad eller godkjenning fra kommunen for disse tiltakene."
      ],
      "source_documents": [
        "d004_Salgsoppgave (1)"
      ],
      "source_pages": [
        95,
        93
      ],
      "confidence": 0.72
    },
    {
      "risk_id": "R7",
      "category": "contractual_issue",
      "severity": "info",
      "description": "Eiendommen har privat pumpekum/pumpeanlegg som sameiet drifter og forsikrer. Felleskostnadene dekker drift og vedlikehold av dette anlegget, men det kan medføre uforutsette kostnader ved fremtidige reparasjoner.",
      "evidence": [
        "Felleskostnader dekker bl.a. 'kostnader til drift og vedlikehold av sameiets pumpekum og annen eiendom (for eksempel lekeplass) og forsikringer knyttet til pumpeanlegget og styreansvar'.",
        "Egenerklæringen bekrefter at eiendommen har privat pumpekum (spørsmål 16).",
        "Sameiet har per dags dato ikke felles lån, noe som betyr at eventuelle større reparasjoner må finansieres løpende."
      ],
      "source_documents": [
        "d004_Salgsoppgave (1)"
      ],
      "source_pages": [
        99,
        100,
        94
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R8",
      "category": "contractual_issue",
      "severity": "info",
      "description": "Kommunale gebyrer utgjorde totalt kr 21 318,- i 2025 (avløp, eiendomsskatt, feiing, renovasjon og vann). Dette er en løpende kostnad kjøper må påregne i tillegg til felleskostnader.",
      "evidence": [
        "Gebyr fakturert beløp i 2025: Avløp 5 815,60 kr, Eiendomsskatt 5 075,20 kr, Feiing 526,40 kr, Renovasjon 5 441,00 kr, Vann 4 460,00 kr, Sum 21 318,20 kr.",
        "Dokumentet presiserer at tjenestene normalt har en prisøkning hvert år, og at forbruk kan variere."
      ],
      "source_documents": [
        "d004_Salgsoppgave (1)"
      ],
      "source_pages": [
        124
      ],
      "confidence": 0.99
    }
  ],
  "re_retrieval_queries": [
    "bruksendring carport garasje søknad kommunen godkjenning",
    "pergola vedbod byggetillatelse søknad kommunen",
    "tilstandsrapport bad våtrom membran tettesjikt alder dokumentasjon",
    "pumpekum pumpeanlegg tilstand alder vedlikeholdshistorikk",
    "selger ikke bebodd avhendingsloven as is forbehold",
    "radon måling anbefaling Råholt Eidsvoll",
    "boligselgerforsikring Fremtind dekning unntak"
  ],
  "reasoning": "\nGjennomgang av alle 8 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Carport omgjort til garasje uten kjent bruksendringssøknad (confidence 0.9 → 0.92):**\nEvidensen er solid og bekreftet i to separate deler av egenerklæringen (side 92-93 og 95). Takstrapporten (side 88) bekrefter at garasjen med elektrisk portåpner eksisterer og gir TG-1, men dette betyr kun at det ikke er fysiske avvik – ikke at forholdet er lovlig. Confidence justeres marginalt opp til 0.92 da evidensen er konsistent og tydelig.\n\n**R2 – Selger ikke bebodd siste 12 måneder (confidence 0.95 → 0.97):**\nDirekte bekreftet i egenerklæringens innledning (side 91). Selger svarer \"Nei, ikke som jeg kjenner til\" på svært mange spørsmål, noe som underbygger begrenset kunnskap. Confidence justeres opp til 0.97.\n\n**R3 – Ingen radonmåling (confidence 0.95):**\nDirekte bekreftet i egenerklæringen spørsmål 32 (side 96). Confidence beholdes på 0.95.\n\n**R4 – Tettesjikt/membran ikke fornyet, ingen dokumentasjon (confidence 0.85 → 0.72):**\nEgenerklæringen bekrefter manglende kunnskap om tettesjikt og dokumentasjon (side 92). Imidlertid viser takstrapporten (side 87) TG-1 for membran/tettesjikt og sluk på vaskerom med kommentaren \"Det registreres riktig utførelse av membran, tettesjikt og sluk på rommet.\" Dette modererer risikoen betydelig. Confidence justeres ned til 0.72 da takstmannens befaring ikke avdekket avvik, selv om dokumentasjon fortsatt mangler.\n\n**R5 – Bindingsavtale Viken Fiber/Altibox (confidence 0.95 → 0.97):**\nSvært godt dokumentert i megleropplysningene (side 100) og egenerklæringen (side 97). Beløp, bindingstid og faktureringsordning er klart spesifisert. Confidence justeres opp til 0.97.\n\n**R6 – Pergola og vedbod uten kjent godkjenning (confidence 0.7 → 0.72):**\nBekreftet i egenerklæringen (side 95 og 93). Risikoen er reell men alvorlighetsgraden er begrenset – pergola under 15 m² kan i mange tilfeller være unntatt søknadsplikt. Confidence beholdes på 0.72.\n\n**R7 – Privat pumpekum (confidence 0.8):**\nBekreftet i megleropplysningene (side 99-100) og egenerklæringen (side 94). Risikoen er reell men begrenset da sameiet allerede forsikrer anlegget. Confidence beholdes på 0.80.\n\n**R8 – Kommunale gebyrer (confidence 0.99):**\nDirekte dokumentert med eksakte tall (side 124). Confidence beholdes på 0.99.\n\n**Manglende risikoer vurdert:**\n- Boligselgerforsikring er tegnet (Fremtind), noe som er positivt for kjøper men bør nevnes som kontekst.\n- Ingen skaderapporter eller tilstandsvurderinger er kjent (side 96-97) – dette er allerede delvis dekket av R2 og R4.\n- Koketopp med kjent feil nevnes i egenerklæringen (side 97) – dette er en potensiell risiko som ikke er identifisert.\n- Detaljregulering for området er kjent (side 95) – dette er informasjon men ikke nødvendigvis en risiko.\n- Byggeår 2013 (basert på byggemeldingstegninger fra 17.01.2013) – boligen er relativt ny, noe som reduserer risiko for alvorlige strukturelle feil.\n\nForeslår tilleggsretrieval for å avklare: bruksendringssøknad for garasje, status for pergola/vedbod, og detaljer om koketoppen med kjent feil.\n"
}

## Raw Response
```json
{
  "id": "msg_019bB7PkUqtjejLgwwpX7VCe",
  "container": null,
  "content": [
    {
      "id": "toolu_015XLuDi22bbLPXf3DT1YPSK",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "category": "contractual_issue",
            "severity": "warning",
            "description": "Carport er bygget om til garasje uten kjent søknad om bruksendring. Det er montert elektrisk garasjeport og carporten er dermed omgjort til garasje, men det er ikke kjent om det ble søkt om bruksendring fra carport til garasje.",
            "evidence": [
              "Tidligere eier opplyser at selgeren de kjøpte av hadde satt inn en motorisert garasjeport, og at carporten dermed ble bygget om til garasje.",
              "Det ble samtidig opplyst at de ikke kjenner til om det ble søkt om bruksendring fra carport til garasje.",
              "Arbeidet ble utført av snekker fra Monter AS i 2017.",
              "Takstrapport bekrefter: 'Det er garasje med elektrisk portåpner tilknyttet boligen, med terrasse over.' (TG-1, ingen avvik registrert på befaringstidspunktet)"
            ],
            "source_documents": [
              "d004_Salgsoppgave (1)"
            ],
            "source_pages": [
              92,
              93,
              88,
              95
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R2",
            "category": "contractual_issue",
            "severity": "warning",
            "description": "Selger har ikke bodd i boligen de siste 12 månedene. Boligen ble kjøpt i 2024 og selger har ikke bebodd den. Dette betyr at selger har begrenset kunnskap om boligens faktiske tilstand, noe som øker risikoen for skjulte feil og mangler.",
            "evidence": [
              "Boligen ble kjøpt 2024.",
              "Selger har ikke bodd i boligen de 12 siste månedene.",
              "Selger (Laila Irene Hollstedt) bekrefter dette i egenerklæringen.",
              "Selger svarer 'Nei, ikke som jeg kjenner til' på en rekke spørsmål om boligens tilstand, noe som underbygger begrenset kunnskap."
            ],
            "source_documents": [
              "d004_Salgsoppgave (1)"
            ],
            "source_pages": [
              91
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R3",
            "category": "contractual_issue",
            "severity": "warning",
            "description": "Ingen radonmåling er utført på eiendommen. Verken nåværende eller tidligere eiere kjenner til at det er gjort radonmåling. Radon kan utgjøre en helserisiko og bør måles.",
            "evidence": [
              "Spørsmål 32: 'Vet du om det er gjort radonmåling på eiendommen, enten av deg eller tidligere eiere?' – Svar: 'Nei, ikke som jeg kjenner til'.",
              "Ingen dokumentasjon på radonmåling er fremlagt i salgsoppgaven."
            ],
            "source_documents": [
              "d004_Salgsoppgave (1)"
            ],
            "source_pages": [
              96
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R4",
            "category": "contractual_issue",
            "severity": "warning",
            "description": "Tettesjikt, membran eller sluk på vaskerom er ikke fornyet eller oppgradert, og det finnes ingen dokumentasjon på hvordan bad/våtrom er bygget opp. Dette gir økt risiko for skjulte fuktskader.",
            "evidence": [
              "Spørsmål: 'Vet du om tettesjikt, membran eller sluk ble fornyet eller oppgradert?' – Svar: 'Nei, ikke som jeg kjenner til'.",
              "Spørsmål: 'Vet du om det finnes dokumentasjon på hvordan bad/våtrom er bygget opp?' – Svar: 'Nei, ikke som jeg kjenner til'.",
              "Takstrapport (side 87) angir TG-1 for membran/tettesjikt og sluk på vaskerom: 'Det registreres riktig utførelse av membran, tettesjikt og sluk på rommet.' Dette modererer risikoen noe, men dokumentasjon mangler fortsatt.",
              "Det er gjort oppgraderinger på vaskerom i 2025 (ny innredning, utslagsvask, opplegg for vaskemaskin), men ikke på tettesjikt/membran."
            ],
            "source_documents": [
              "d004_Salgsoppgave (1)"
            ],
            "source_pages": [
              92,
              87,
              86
            ],
            "confidence": 0.72
          },
          {
            "risk_id": "R5",
            "category": "contractual_issue",
            "severity": "info",
            "description": "Kollektivavtale med Viken Fiber/Altibox med tre års bindingstid følger seksjonen. Kjøper overtar denne bindingen og må betale kr 609,- per måned for TV og internett frem til bindingstiden utløper (desember 2027).",
            "evidence": [
              "Hollstedt er del av en kollektivavtale som er inngått med Viken Fiber om TV og internett gjeldende fra 1. desember 2024 med tre års bindingstid. Denne avtalen med bindingstid følger seksjonen.",
              "Avtalen har fra og med 1. februar 2026 en månedspris på 609 kroner per boenhet.",
              "Sameiet fakturerer halvårlig (januar og juni).",
              "Hollstedt har betalt for januar til juni 2026 og er a jour med kontingenter/felleskostnader."
            ],
            "source_documents": [
              "d004_Salgsoppgave (1)"
            ],
            "source_pages": [
              100,
              97
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R6",
            "category": "contractual_issue",
            "severity": "info",
            "description": "Pergola på ca. 9 m² og vedbod under utvendig trapp er oppført av tidligere eier. Det er ikke opplyst om disse er omsøkt eller godkjent av kommunen.",
            "evidence": [
              "Tidligere eier opplyser at selgeren de kjøpte av hadde oppført en pergola i hagen på ca. 9 m², samt bygget en vedbod under den utvendige trappen mot hagen.",
              "Egenerklæringen bekrefter dette under spørsmål om endringer/utbygging etter opprinnelig byggeår.",
              "Det er ikke opplyst om søknad eller godkjenning fra kommunen for disse tiltakene."
            ],
            "source_documents": [
              "d004_Salgsoppgave (1)"
            ],
            "source_pages": [
              95,
              93
            ],
            "confidence": 0.72
          },
          {
            "risk_id": "R7",
            "category": "contractual_issue",
            "severity": "info",
            "description": "Eiendommen har privat pumpekum/pumpeanlegg som sameiet drifter og forsikrer. Felleskostnadene dekker drift og vedlikehold av dette anlegget, men det kan medføre uforutsette kostnader ved fremtidige reparasjoner.",
            "evidence": [
              "Felleskostnader dekker bl.a. 'kostnader til drift og vedlikehold av sameiets pumpekum og annen eiendom (for eksempel lekeplass) og forsikringer knyttet til pumpeanlegget og styreansvar'.",
              "Egenerklæringen bekrefter at eiendommen har privat pumpekum (spørsmål 16).",
              "Sameiet har per dags dato ikke felles lån, noe som betyr at eventuelle større reparasjoner må finansieres løpende."
            ],
            "source_documents": [
              "d004_Salgsoppgave (1)"
            ],
            "source_pages": [
              99,
              100,
              94
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R8",
            "category": "contractual_issue",
            "severity": "info",
            "description": "Kommunale gebyrer utgjorde totalt kr 21 318,- i 2025 (avløp, eiendomsskatt, feiing, renovasjon og vann). Dette er en løpende kostnad kjøper må påregne i tillegg til felleskostnader.",
            "evidence": [
              "Gebyr fakturert beløp i 2025: Avløp 5 815,60 kr, Eiendomsskatt 5 075,20 kr, Feiing 526,40 kr, Renovasjon 5 441,00 kr, Vann 4 460,00 kr, Sum 21 318,20 kr.",
              "Dokumentet presiserer at tjenestene normalt har en prisøkning hvert år, og at forbruk kan variere."
            ],
            "source_documents": [
              "d004_Salgsoppgave (1)"
            ],
            "source_pages": [
              124
            ],
            "confidence": 0.99
          }
        ],
        "re_retrieval_queries": [
          "bruksendring carport garasje søknad kommunen godkjenning",
          "pergola vedbod byggetillatelse søknad kommunen",
          "tilstandsrapport bad våtrom membran tettesjikt alder dokumentasjon",
          "pumpekum pumpeanlegg tilstand alder vedlikeholdshistorikk",
          "selger ikke bebodd avhendingsloven as is forbehold",
          "radon måling anbefaling Råholt Eidsvoll",
          "boligselgerforsikring Fremtind dekning unntak"
        ],
        "reasoning": "\nGjennomgang av alle 8 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Carport omgjort til garasje uten kjent bruksendringssøknad (confidence 0.9 → 0.92):**\nEvidensen er solid og bekreftet i to separate deler av egenerklæringen (side 92-93 og 95). Takstrapporten (side 88) bekrefter at garasjen med elektrisk portåpner eksisterer og gir TG-1, men dette betyr kun at det ikke er fysiske avvik – ikke at forholdet er lovlig. Confidence justeres marginalt opp til 0.92 da evidensen er konsistent og tydelig.\n\n**R2 – Selger ikke bebodd siste 12 måneder (confidence 0.95 → 0.97):**\nDirekte bekreftet i egenerklæringens innledning (side 91). Selger svarer \"Nei, ikke som jeg kjenner til\" på svært mange spørsmål, noe som underbygger begrenset kunnskap. Confidence justeres opp til 0.97.\n\n**R3 – Ingen radonmåling (confidence 0.95):**\nDirekte bekreftet i egenerklæringen spørsmål 32 (side 96). Confidence beholdes på 0.95.\n\n**R4 – Tettesjikt/membran ikke fornyet, ingen dokumentasjon (confidence 0.85 → 0.72):**\nEgenerklæringen bekrefter manglende kunnskap om tettesjikt og dokumentasjon (side 92). Imidlertid viser takstrapporten (side 87) TG-1 for membran/tettesjikt og sluk på vaskerom med kommentaren \"Det registreres riktig utførelse av membran, tettesjikt og sluk på rommet.\" Dette modererer risikoen betydelig. Confidence justeres ned til 0.72 da takstmannens befaring ikke avdekket avvik, selv om dokumentasjon fortsatt mangler.\n\n**R5 – Bindingsavtale Viken Fiber/Altibox (confidence 0.95 → 0.97):**\nSvært godt dokumentert i megleropplysningene (side 100) og egenerklæringen (side 97). Beløp, bindingstid og faktureringsordning er klart spesifisert. Confidence justeres opp til 0.97.\n\n**R6 – Pergola og vedbod uten kjent godkjenning (confidence 0.7 → 0.72):**\nBekreftet i egenerklæringen (side 95 og 93). Risikoen er reell men alvorlighetsgraden er begrenset – pergola under 15 m² kan i mange tilfeller være unntatt søknadsplikt. Confidence beholdes på 0.72.\n\n**R7 – Privat pumpekum (confidence 0.8):**\nBekreftet i megleropplysningene (side 99-100) og egenerklæringen (side 94). Risikoen er reell men begrenset da sameiet allerede forsikrer anlegget. Confidence beholdes på 0.80.\n\n**R8 – Kommunale gebyrer (confidence 0.99):**\nDirekte dokumentert med eksakte tall (side 124). Confidence beholdes på 0.99.\n\n**Manglende risikoer vurdert:**\n- Boligselgerforsikring er tegnet (Fremtind), noe som er positivt for kjøper men bør nevnes som kontekst.\n- Ingen skaderapporter eller tilstandsvurderinger er kjent (side 96-97) – dette er allerede delvis dekket av R2 og R4.\n- Koketopp med kjent feil nevnes i egenerklæringen (side 97) – dette er en potensiell risiko som ikke er identifisert.\n- Detaljregulering for området er kjent (side 95) – dette er informasjon men ikke nødvendigvis en risiko.\n- Byggeår 2013 (basert på byggemeldingstegninger fra 17.01.2013) – boligen er relativt ny, noe som reduserer risiko for alvorlige strukturelle feil.\n\nForeslår tilleggsretrieval for å avklare: bruksendringssøknad for garasje, status for pergola/vedbod, og detaljer om koketoppen med kjent feil.\n"
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
    "input_tokens": 20109,
    "output_tokens": 3842,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
