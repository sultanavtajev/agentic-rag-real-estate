# Trace: agentic_reflecting_iter2
- **Run ID:** 272f5740-7aa3-46a7-af48-697ce3dd9e07
- **Tidspunkt:** 2026-03-18T08:34:38.375461+00:00
- **Varighet:** 87.14s
- **Input tokens:** 21528
- **Output tokens:** 4096

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
Risiko 1: Carport er bygget om til garasje med motorisert port, men det er uklart om det ble søkt om bruksendring. Tidligere eier opplyste at de ikke kjenner til om det ble søkt om bruksendring fra carport til garasje.
  Kategori: contractual_issue
  Alvorlighet: warning
  Confidence: 0.85
  Evidens: Tidligere eier opplyste at de ikke kjenner til om det ble søkt om bruksendring fra carport til garasje.; Selgeren de kjøpte av hadde satt inn en motorisert garasjeport, og at carporten dermed ble bygget om til garasje.; Det er garasje med elektrisk portåpner tilknyttet boligen, med terrasse over.

Risiko 2: Kollektivavtale med Viken Fiber/Altibox med 3 års bindingstid (fra 1. desember 2024) følger seksjonen og er bindende for ny kjøper. Kjøper overtar denne forpliktelsen uten mulighet til å si opp avtalen i bindingstiden.
  Kategori: contractual_issue
  Alvorlighet: warning
  Confidence: 0.95
  Evidens: Hollstedt er del av en kollektivavtale som er inngått med Viken Fiber om TV og internett gjeldende fra 1. desember 2024 med tre års bindingstid.; Denne avtalen med bindingstid følger seksjonen.; Avtalen har fra og med 1. februar 2026 en månedspris på 609 kroner per boenhet.

Risiko 3: Pergola på ca. 9 m² og vedbod under utvendig trapp er oppført av tidligere eier. Det er ikke opplyst om disse er byggemeldt eller godkjent av kommunen.
  Kategori: contractual_issue
  Alvorlighet: info
  Confidence: 0.7
  Evidens: Tidligere eier opplyste at de som solgte de boligen satt opp en pergola i hagen på ca. 9 m², samt bygget en vedbod under den eksisterende utvendige trappen mot hagen.; En tidligere eier har oppført en pergola i hagen på ca. 9 m², samt bygget en vedbod under den utvendige trappen mot hagen.

Risiko 4: Norgespris på strøm (statlig fastprisordning til 50 øre/kWh) følger boligen ut bindingstiden (til 31. desember 2026). Ny kjøper er bundet av denne ordningen.
  Kategori: contractual_issue
  Alvorlighet: info
  Confidence: 0.9
  Evidens: Norgespris er en statlig ordning som gir husholdninger tilbud om strøm til fast pris på 50 øre pr. kilowattime (prisen gjelder frem til 31. Desember 2026).; Når en bolig med Norgespris bytter eier, vil ny eier fortsatt være bundet til Norgespris ut bindingstiden.

Risiko 5: Energiattesten fra 2018 angir at boligen er lite energieffektiv, og det anbefales service på ventilasjonsanlegget samt temperatur- og tidsstyring på elektriske anlegg. Filterbyttet på Flexit ventilasjonsanlegg ble gjort av ufaglært i 2024.
  Kategori: structural_defect
  Alvorlighet: info
  Confidence: 0.75
  Evidens: Energimerket angir boligens energistandard. boligen er lite energieffektiv.; Tiltak 1: Utføre service på ventilasjonsanlegg. Balanserte ventilasjonsanlegg bør kontrolleres jevnlig for å sikre at de fungerer som de skal.; Ufaglært arbeid: Byttet Flexit filter på ventilasjonsanlegg (2024).

Risiko 6: Koketopp har hatt feil ifølge tidligere eier. Selger bekrefter kjennskap til feil på tilbehør som følger med eiendommen, men det er ikke opplyst om feilen er utbedret.
  Kategori: structural_defect
  Alvorlighet: info
  Confidence: 0.7
  Evidens: Vet du om det er, eller har vært, feil på tilbehør som følger med eiendommen? Ja. Opplysning om koketopp (til orientering). Tidligere eier opplyste i sin...; Er det gjort tiltak, eller er feilen/skaden utbedret? Nei, ikke som jeg kjenner til.

Risiko 7: BRA per bolig er oppgitt til 125,8 m² i både matrikkelen og byggetegningene, mens P-ROM per bolig er oppgitt til 116,3 m² i tegningene. Differansen på 9,5 m² tilsvarer boder/sekundærrom og bør verifiseres mot takstdokumentasjon.
  Kategori: area_discrepancy
  Alvorlighet: info
  Confidence: 0.65
  Evidens: BRA per bygg 125,8m2 / P-rom per bolig 116,3m2 (fra byggetegninger).; Gustav Granhaugs veg 85 A Bolig 125,8 (BRA fra matrikkelen).; BRA bolig: 125,8 (bygningsopplysninger fra matrikkelen).

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

[d004_Salgsoppgave (1) | Side [97]]
 bruk i min eiertid.
Er det gjort tiltak, eller er feilen/skaden utbedret?
◆ Nei, ikke som jeg kjenner til
40. Er det bestilt Norgespris på strøm?
Ja. Norgespris er en statlig ordning som gir husholdninger tilbud om strøm til fast pris på 50 øre pr. kilowattime
(prisen gjelder frem til 31. Desember 2026). Ordningen gjelder både boliger og fritidsboliger. Når en bolig med
Norgespris bytter eier, vil ny eier fortsatt være bundet til Norgespris ut bindingstiden. Les mer på Regjeringens
nettsider.
41. Har du

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

[d004_Salgsoppgave (1) | Side [141]]
olig, vertikaldelt
Opplysninger om boliger/bruksenheter:
Adresse Type BRA Kjøkkenkode Antall rom Bad WC
Gustav Granhaugs veg 85 A Bolig 125,8 Kjøkken 4 1 1
Bygningsopplysninger:
Næringsgruppe: Bolig Bebygd areal: 88,7 Rammetillatelse: 26.05.2014
Bygningsstatus: Ferdigattest BRA bolig: 125,8 Igangset.till.: 12.02.2015
Energikilde: Elektrisitet BRA annet: Ferdigattest: 01.11.2016
Oppvarming: Elektrisk BRA totalt: 125,8 Midl. brukstil.: 23.10.2015
Avløp: Offentlig kloakk Har heis: Nei Tatt ibruk

---

[d004_Salgsoppgave (1) | Side [121, 122]]
aren er betalt til fulle FTeagsnaidneg:r Tegningsnr.:E-03
121Øst 1:100
c+236,0
c+235,0
c+234,0
c+233,0
c+232,0
Tomtegrense
c+231,0
Tomtegrense
c+230,0
c+229,0 +228,55
c+228,0
c+227,0
Bygg 5
BYA hele bygg 204,7m2
BYA parkering 15,0m2
BYA totalt 219,7m2
BRA 1. etg. 65,8m2
BRA 2. etg. 60,0m2
BRA per bygg 125,8m2
BRA totalt 251,6m2
BYA og BRA er utregnet ihht norsk standard
P-rom per bolig 116,3m2
Situasjonskartet er hentet fra kommunens kart base, men kan inneholde feil.
Prosjekt:
Bekkedalshøgda

---

[d004_Salgsoppgave (1) | Side [121]]
t +228,55
c+228,0
c+227,0
Sør 1:100
c+237,0
c+236,0
c+235,0
Bygg 5
c+234,0
c+233,0 B B Y Y A A h p e a l r e k e b r y in g g g 2 0 1 4 5 , , 7 0 m m 2 2
BYA totalt 219,7m2
Tomtegrense c+232,0 B B R R A A 2 1 . . e e t t g g . . 6 6 0 5 , , 0 8 m m2 2
c+231,0 Grense vei B B R R A A p to e ta r l b t y g g 2 1 5 2 1 5 , , 6 8 m m 2 2
BYA og BRA er utregnet ihht norsk standard
c+230,0 P-rom per bolig 116,3m2
c+229,0 +228,55 +228,59 Prosjekt: Situasjonskartet er hentet fra kommunens kart base, men kan

---

[d004_Salgsoppgave (1) | Side [119]]
otalt 219,7m2
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
B B B G e y y n k g g r. k g g e 9 e e d 6 a s a d t l B e s r d n h e : r ø s . s g 4 e d 3 : a S E i - g p n o a st t : u f r i : J r o m h Fa T a E ap n l3 . kf o .2 S S ss :: 5 t v t 3 @ o 6 3 e 3 k

---

[d004_Salgsoppgave (1) | Side [122, 123]]
ren er betalt til fulle FTeagsnaidneg:r Tegningsnr.:E-04
122Vest 1:100
c+236,0
c+235,0
c+234,0
c+233,0
c+232,0
Tomtegrense
c+231,0
c+230,0 Tomtegrense
c+229,0 +228,55
c+228,0
c+227,0
Bygg 5
BYA hele bygg 204,7m2
BYA parkering 15,0m2
BYA totalt 219,7m2
BRA 1. etg. 65,8m2
BRA 2. etg. 60,0m2
BRA per bygg 125,8m2
BRA totalt 251,6m2
BYA og BRA er utregnet ihht norsk standard
P-rom per bolig 116,3m2
Situasjonskartet er hentet fra kommunens kart base, men kan inneholde feil.
Prosjekt:
Bekkedalshøgda

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

[d004_Salgsoppgave (1) | Side [141]]
il.: 23.10.2015
Avløp: Offentlig kloakk Har heis: Nei Tatt ibruk (GAB):
Vannforsyning: Tilkn. off. vannverk Antall boliger: 1
Bygningsnr: 300457943 Antall etasjer: 2
Etasjeopplysninger:
Nr Ant. boliger BRA: Bolig Annet Totalt BTA: Bolig Annet Totalt
H01 1 65,8 65,8 65,8 65,8
H02 60,0 60,0 60,0 60,0
Kulturminner:
Ingen kulturminner registrert på bygningen.
Utskrift fra eiendomsregisteret foretatt 22.01.2026 09:58 – Sist oppdatert 22.01.2026 09:58
Utskriften er levert av: Ambita as, Postboks 2923 Solli, 0230

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

[d004_Salgsoppgave (1) | Side [119, 120]]
600 925
2 100 1 300 1 300 1 300 1 300
Bod Bod
5,3 m2 Sov. 5,6 m2 Sov.
ss 12,5 m2 Sov. ss 12,5 m2 Sov.
8,7 m2 8,7 m2
Carport Carport 15,4 m2 30,7 m2 Bad Bad
6,8 m2 6,8 m2 A-A A-A
Gang Gang
13,2 m2 13,2 m2
vv vv
Sov. Sov.
10,1 m2 10,1 m2
Bod/Vask Bod/Vask 6,0 m2 6,0 m2
570 418 570 3 970 900 1 530 1 600 1 535 1 000 1 226 1 200 770 900 1 530 1 600 1 535 1 000 1 226 1 200 418 2 100 1 300 2 100 1 300 1 300 2 100 1 300Bygg 5
BYA hele bygg 204,7m2
BYA parkering 15,0m2
BYA totalt 219,7m2
BRA 1. etg. 65,8m2
BRA 2.

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

[d004_Salgsoppgave (1) | Side [94]]
r til
18. Vet du om det er gjort arbeid på sentralfyr, radiator, ventilasjon, varmepumpe eller andre installasjoner, enten
av deg eller tidligere eiere?
◆ Ja
Faglært arbeid:
1. Hvilket år ble jobben fullført?: 2022
Firmanavn: RE Varmepumpe AS
Beskrivelse av arbeidet: Ordinær service på
varmepumpe
Ufaglært arbeid:
1. Hvilket år ble jobben fullført?: 2024
Beskrivelse av arbeidet: Byttet Flexit filter på
ventilasjonsanlegg.
19. Vet du om det er, eller har vært, feil eller skader knyttet til ildsted eller

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

[d004_Salgsoppgave (1) | Side [155]]
: 2070 Råholt Bnr: 615
Leilighetsnummer: Seksjonsnr: 10
Bolignr: Festenr:
Dato: 06.03.2018 14:07:58 Bygnnr:
Energimerkenummer: A2018-861322
Ansvarlig for energiattesten: Kjell Johnny Kristiansen
Energimerking er utført av: Ole-Magnus Kaksrud
Tiltak på luftbehandlingsanlegg
Tiltak 1: Utføre service på ventilasjonsanlegg
Balanserte ventilasjonsanlegg bør kontrolleres jevnlig for å sikre at de fungerer som de skal. Filtere bør skiftes jevnlig.
Tiltak på elektriske anlegg
Tiltak 2: Temperatur- og tidsstyring

---

[d004_Salgsoppgave (1) | Side [141]]
olig, vertikaldelt
Opplysninger om boliger/bruksenheter:
Adresse Type BRA Kjøkkenkode Antall rom Bad WC
Gustav Granhaugs veg 85 A Bolig 125,8 Kjøkken 4 1 1
Bygningsopplysninger:
Næringsgruppe: Bolig Bebygd areal: 88,7 Rammetillatelse: 26.05.2014
Bygningsstatus: Ferdigattest BRA bolig: 125,8 Igangset.till.: 12.02.2015
Energikilde: Elektrisitet BRA annet: Ferdigattest: 01.11.2016
Oppvarming: Elektrisk BRA totalt: 125,8 Midl. brukstil.: 23.10.2015
Avløp: Offentlig kloakk Har heis: Nei Tatt ibruk

---

[d004_Salgsoppgave (1) | Side [86, 87]]
ss, sprekker i fuger, bom (hulrom) under flis? Nei
Er det påvist tegn på sopp/råteskader/fuktskader på overflater eller skadedyr? Nei
Gustav Granhaugs veg 85 A, 2070 Råholt 27 av 30
86Er det registrert knirk i gulvet? Ikke aktuelt (gjelder ikke flislagt gulv)
Oppsummering av overflater TG-1
Fallforhold til sluk, og høydeforskjell mellom topp sluk og topp membran ved dør, er tilfredsstillende.
Det måles en høydeforskjell på ca 3,5cm.
Det registreres ikke tegn til skader eller avvik utover normal

---

[d004_Salgsoppgave (1) | Side [150, 151]]

150Adresse Gustav Granhaugs veg 85 A
Postnr 2070
Sted Råholt
Andels- /
/leilighetsnr.
Gnr. 96
Bnr. 615
Seksjonsnr. 10
Festenr.
Bygn. nr.
Bolignr.
Merkenr. A2018-861322
Dato 06.03.2018
Eier Kjell Johnny Kristiansen
Innmeldt av Ole-Magnus Kaksrud
Energiattesten er bekreftet og offisiell. Bygningens identitet og eierforhold er ikke bekreftet fra Matrikkelen
Energimerketangir boligens energistandard. boligen er lite energieffektiv. En bolig bygget etter
Energimerket består av en

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

[d004_Salgsoppgave (1) | Side [87, 88]]
Ventilasjon
Type ventilering Mekanisk avtrekk
Boligen er oppført med balansert ventilasjon.
Er ventilasjonen funksjonstestet? Ja
Gustav Granhaugs veg 85 A, 2070 Råholt 28 av 30
87Oppsummering av ventilasjon TG-1
Det registreres trekk i kanalen.
Det registreres ikke tegn til avvik på befaringstidspunktet.
Fuktmåling
Er det foretatt hulltaking fra tilstøtende rom? Nei
Er det påvist indikasjon på skader/fukt ved bruk av fuktsøk/fuktmåling? Nei
Oppsummering av fukt TG-1
Det er ikke foretatt hulltaking fra

---

[d004_Salgsoppgave (1) | Side [130, 131]]

 
130Reguleringsplankart
Eiendom: 96/615/0/10
Adresse: Gustav Granhaugs veg 85A
Utskriftsdato: 22.01.2026
UTM-32
Eidsvoll kommune Målestokk: 1:1000
©Norkart 2026
Kartet er produsert fra kommunens beste digitale kartbaser for området og inneholder viktige opplysninger om eiendommen og området omkring.
Presentasjonen av informasjon er i samsvar med nasjonal standard.
Kartet kan inneholde feil, mangler eller avvik i forhold til

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

[d004_Salgsoppgave (1) | Side [85]]
Ventilasjon
Type ventilering Mekanisk avtrekk
Boligen er oppført med balansert ventilasjon.
Er ventilasjonen funksjonstestet? Ja
Oppsummering av ventilasjon TG-1
Det registreres trekk i kanalen.
Det registreres ikke tegn til avvik på befaringstidspunktet.
Fuktmåling
Er det foretatt hulltaking fra tilstøtende rom? Ja
Er det registrert fukt eller andre skader ved hulltaking? Nei
Oppsummering av fukt TG-1
Det er foretatt hulltaking fra tilstøtende rom mot dusjsone fra tidligere takstmann.
Det registreres ikke

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

[d004_Salgsoppgave (1) | Side [122, 123]]
ren er betalt til fulle FTeagsnaidneg:r Tegningsnr.:E-04
122Vest 1:100
c+236,0
c+235,0
c+234,0
c+233,0
c+232,0
Tomtegrense
c+231,0
c+230,0 Tomtegrense
c+229,0 +228,55
c+228,0
c+227,0
Bygg 5
BYA hele bygg 204,7m2
BYA parkering 15,0m2
BYA totalt 219,7m2
BRA 1. etg. 65,8m2
BRA 2. etg. 60,0m2
BRA per bygg 125,8m2
BRA totalt 251,6m2
BYA og BRA er utregnet ihht norsk standard
P-rom per bolig 116,3m2
Situasjonskartet er hentet fra kommunens kart base, men kan inneholde feil.
Prosjekt:
Bekkedalshøgda

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

[d004_Salgsoppgave (1) | Side [121, 122]]
aren er betalt til fulle FTeagsnaidneg:r Tegningsnr.:E-03
121Øst 1:100
c+236,0
c+235,0
c+234,0
c+233,0
c+232,0
Tomtegrense
c+231,0
Tomtegrense
c+230,0
c+229,0 +228,55
c+228,0
c+227,0
Bygg 5
BYA hele bygg 204,7m2
BYA parkering 15,0m2
BYA totalt 219,7m2
BRA 1. etg. 65,8m2
BRA 2. etg. 60,0m2
BRA per bygg 125,8m2
BRA totalt 251,6m2
BYA og BRA er utregnet ihht norsk standard
P-rom per bolig 116,3m2
Situasjonskartet er hentet fra kommunens kart base, men kan inneholde feil.
Prosjekt:
Bekkedalshøgda

---

[d004_Salgsoppgave (1) | Side [116]]
løpene kontrolleres mot tall under temaet «Bolig og
eiendeler» i Skattemeldingen

Matrikkelnummer 3240
Gårdnummer 96
Bruksnummer 615
Seksjonsnummer 10
 
Eiertid i fjor fra og med 01.01
Eiertid i fjor til og med 31.12

Boligsameie Sameiet Bekkedalshøgda
Adresse c/o Christer Holtet Dahlin
 Gustav Granhaugs Veg 80B
 2070 Råholt
Organisasjonsnummer 925258 296

Informasjonen over er også sendt til Skatteetaten. 
Alle som mottar forhåndsutfylt skattemelding fra Skatteetaten skal

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

[d004_Salgsoppgave (1) | Side [121]]
ekt: Situasjonskartet er hentet fra kommunens kart base, men kan inneholde feil.
Bekkedalshøgda boligområde
c+228,0 K Je li s e s n h t e : im Bygg og Eiendom AS
c+227,0 B B B G e y y n k g g r. k g g e 9 e e d 6 a s a d t l B e s r d n h e : r ø s . s g 4 e d 3 : a S E i - g p n o a st t : u f r i : J r o m h Fa T a E ap n l3 . kf o .2 S S ss :: 5 t v t 3 @ o 6 3 e 3 k r 8 L n k d 1 1o e a5 r 5r r s u s 6 v k p 6k 9i o 9 sk - g g 0 b0 a 0 y1 t g e g 3 service.no
i Eidsvoll kommune. Kontroll:
R R e e v v .

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

[d004_Salgsoppgave (1) | Side [113, 114, 115, 116]]







113114115Laila Irene Hollstedt
Gustav Granhaugs Veg 85A
2070 Råholt
16. januar 2026
Årsoppgave for inntektsåret 2025 – Sameiet Bekkedalshøgda
Tredjepartsopplysninger rapportert til Skatteetaten 
Andel inntekter kr 0
Andel kostnader kr 0
Andel formue kr 4281
Andel gjeld kr 0

Beløpene kontrolleres mot tall under temaet «Bolig og
eiendeler» i

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

[d004_Salgsoppgave (1) | Side [140]]
15 0,0
Matrikkelført: 29.06.2015 Etablert/Endret 3240/96/615/0/1 0,0
Etablert/Endret 3240/96/615/0/2 0,0
Etablert/Endret 3240/96/615/0/3 0,0
Etablert/Endret 3240/96/615/0/4 0,0
Etablert/Endret 3240/96/615/0/5 0,0
Etablert/Endret 3240/96/615/0/6 0,0
Etablert/Endret 3240/96/615/0/7 0,0
Etablert/Endret 3240/96/615/0/8 0,0
Etablert/Endret 3240/96/615/0/9 0,0
Etablert/Endret 3240/96/615/0/10 0,0
Etablert/Endret 3240/96/615/0/11 0,0
Etablert/Endret 3240/96/615/0/12 0,0
Etablert/Endret 3240/96/615/0/13

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

[d004_Salgsoppgave (1) | Side [95, 96]]
dig (2025)
Terrasse / rekkverk over garasje og ellers beiset i 2 strøk.
Terrasse/platting/ utetrapp i 1. etasje beiset i 2 strøk.
Treverk på pergola beiset i 2 strøk.
Inngjerdet hage etablert med spilegjerde i treverk og port.
Rundstein i ulike størrelser i bed mot gjerde/hekk.
Satt opp rikelig med hyller og kroker i utebod tilknyttet garasje.
Innvendig (2025)
5
95Nye gulv: én#stavs laminat/parkett og eikelister i alle rom (unntatt rom med fliser som er fra byggeår).
Vegger malt / kalkmalt og tapetsert i

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

[d004_Salgsoppgave (1) | Side [90, 91]]
dig prosess for begge parter.
Fordeler med boligselgerforsikring fra Fremtind
Enkelt å reklamere på mangler for både kjøper og selger
Profesjonell håndtering av reklamasjon
Rask og rettferdig saksbehandling for begge parter
Hvis boligselger har kjøpt boligselgerforsikring fra Fremtind er dette informert om i selgers
egenerklæringsskjema
Forsikringen er levert av Fremtind
90Selgers egenerklæring
Egenerklæringen er boligselgers egen beskrivelse av tilstanden til
boligen. Her kan du finne viktige opplysninger

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

[d004_Salgsoppgave (1) | Side [99, 100]]
 mener kan være en mangel, må du reklamere til Fremtind innen
to måneder etter at du oppdaget, eller burde oppdaget, forholdet. Dette gjør du på fremtind.
no.
Husk at du som kjøper ikke må begynne å utbedre forholdet før du har fått svar på
reklamasjonen. Da kan du som kjøper miste retten til å reklamere over forholdet. Du har
likevel en plikt til å begrense en eventuell skade - for eksempel ved å tørke opp vannsøl etter
en vannlekkasje og sørge for at lekkasjen stopper.
9
99Megleropplysninger Sameiet

---

[d004_Salgsoppgave (1) | Side [159]]
st til klage@soderbergpartners.no eller per
brev til Söderberg & Partners, Postboks 324, 1326
Boligkjøperforsikringen gjelder for kjøp av eiendom LYSAKER v/klageansvarlig.
solgt etter avhendingsloven.
Söderberg & Partners vil bekrefte at klagen er mottatt
Forsikringen kan ikke tegnes dersom boligen kjøpes og registrert senest innen 5 virkedager, og klagen skal
som ledd i egen næringsvirksomhet, mellom personer være ferdig behandlet senest innen 8 uker. Dersom
som bor eller har bodd på boligeiendommen eller

---

[d004_Salgsoppgave (1) | Side [90]]
kjøper og selger. Med boligselgerforsikring fra Fremtind er både kjøper og selger
godt ivaretatt dersom det oppdages feil eller mangler i etterkant av salget.
Boligselgerforsikringen dekker selgers økonomiske ansvar etter avhendingsloven.
Hvis kjøper oppdager feil eller mangler etter overtakelsen, vil Fremtind behandle
reklamasjonen på vegne av selger. Dette betyr at kjøper kan forholde seg til en
profesjonell part, noe som bidrar til en ryddig prosess for begge parter.
Fordeler med boligselgerforsikring

---

[d004_Salgsoppgave (1) | Side [159]]
n 8 uker. Dersom
som bor eller har bodd på boligeiendommen eller du ikke er fornøyd med vurderingen av den fremsatte
kjøpes fra nærstående. Som nær stående regnes fami- klagen, er det anledning for å fremlegge saken til
lie i opp- og ned stigende linje, samt søsken. Forsikrin- vurdering hos en uavhengig nemnd:
gen kan ikke tegnes ved kjøp av næringseiendom, Klagenemnda for forsikrings- og gjenforsikrings-
eller obligasjons leilighet. meglingsvirksomhet, Sekretariatet v/Finanstilsynet,
Postboks

---

[d004_Salgsoppgave (1) | Side [159]]
s Gar-Bo Försäkring AB og Klage
er formidlet gjennom Söderberg & Partners. Söderberg & Partners har fremforhandlet den beste
løsningen for boligkjøperforsikring for våre kunder.
Söderberg & Partners er en uavhengig og objektiv Dersom du er misfornøyd med forsikringsmeglerens
forsikringsmegler med konsesjon fra Finanstilsynet og tjenester kan du sende inn en klage. Klagen sendes
er oppført i Finanstilsynets virksomhetsregister. per e-post til klage@soderbergpartners.no eller per
brev til Söderberg &

---

[d004_Salgsoppgave (1) | Side [158]]
n du har kjøpt.
Hvis boligen du har kjøpt har feil eller mangler du
ikke ble gjort kjent med av selger eller megler, kan
det være både frustrerende, tidkrevende og kostbart.
Gjennom vår boligkjøperforsikring får du tilgang på
hjelp fra advokater, saksbehandlere og jurister som
er spesialiserte på eiendomskjøp. Forsikringen løper i
5 år etter overtakelsen, og dekker egne og eventuelle
idømte saksomkostninger.
Kostnader for reparasjon av eventuelle feil eller
mangler dekkes ikke av boligkjøperforsikringen.

---

[d004_Salgsoppgave (1) | Side [158]]
uelle feil eller
mangler dekkes ikke av boligkjøperforsikringen. Slike
kostnader vil man kunne kreve dekket av selger dersom
eiendommen er mangelfull etter avhendingsloven.
Skjulte feil, tilbakeholdte opplysninger og/eller mangel-
fulle/uriktige opplysninger gir grunnlag for henven-
delse. Våre saksbehandlere vil da vurdere det rettslige
grunnlaget basert på informasjonen som er mottatt.
Fordeler
Du trenger ikke betale saksomkostninger
En boligkjøperforsikrings hovedfunksjon er å dekke
eventuelle

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

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "category": "contractual_issue",
      "severity": "warning",
      "description": "Carport er bygget om til garasje med motorisert port, men det er uklart om det ble søkt om bruksendring. Tidligere eier opplyste at de ikke kjenner til om det ble søkt om bruksendring fra carport til garasje.",
      "evidence": [
        "Tidligere eier har opplyst at selger ved deres kjøp informerte om at det var montert elektrisk port i carporten for å gjøre den om til garasje, og at dette arbeidet ble utført av snekker fra Monter AS. Det ble samtidig opplyst at de ikke kjenner til om det ble søkt om bruksendring fra carport til garasje. (Side 92-93)",
        "Tidligere eier opplyser at selgeren de kjøpte av hadde satt inn en motorisert garasjeport, og at carporten dermed ble bygget om til garasje. (Side 95)",
        "Det er garasje med elektrisk portåpner tilknyttet boligen, med terrasse over. (Side 88)",
        "Byggetegningene fra 2013 viser 'Carport 15,4 m2' i 1. etasje, ikke garasje. (Side 119-120)",
        "Selger svarer 'Nei, ikke som jeg kjenner til' på spørsmål om feil/skader ved garasje. (Side 97)"
      ],
      "source_documents": [
        "d004_Salgsoppgave (1)"
      ],
      "source_pages": [
        88,
        92,
        93,
        95,
        97,
        119
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R2",
      "category": "contractual_issue",
      "severity": "warning",
      "description": "Kollektivavtale med Viken Fiber/Altibox med 3 års bindingstid (fra 1. desember 2024) følger seksjonen og er bindende for ny kjøper. Kjøper overtar denne forpliktelsen uten mulighet til å si opp avtalen i bindingstiden.",
      "evidence": [
        "Hollstedt er del av en kollektivavtale som er inngått med Viken Fiber om TV og internett gjeldende fra 1. desember 2024 med tre års bindingstid. Denne avtalen med bindingstid følger seksjonen. (Side 100)",
        "Avtalen har fra og med 1. februar 2026 en månedspris på 609 kroner per boenhet. (Side 100)",
        "Sameiet Bekkedalshøgda har en felles avtale med Viken Fiber/Altibox (frivillig tilvalg) til en månedlig kostnad på kr 609,- per 01.01.26. Sameiet fakturerer hver seksjonseier halvårlig for denne tjenesten. (Side 97-98)"
      ],
      "source_documents": [
        "d004_Salgsoppgave (1)"
      ],
      "source_pages": [
        97,
        98,
        100
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R3",
      "category": "contractual_issue",
      "severity": "warning",
      "description": "Pergola på ca. 9 m² og vedbod under utvendig trapp er oppført av tidligere eier. Det er ikke opplyst om disse er byggemeldt eller godkjent av kommunen. Manglende byggetillatelse kan medføre pålegg om riving eller ettergodkjenning.",
      "evidence": [
        "Tidligere eier opplyste at de som solgte de boligen satt opp en pergola i hagen på ca. 9 m², samt bygget en vedbod under den eksisterende utvendige trappen mot hagen. (Side 93)",
        "En tidligere eier har oppført en pergola i hagen på ca. 9 m², samt bygget en vedbod under den utvendige trappen mot hagen. (Side 95)",
        "Treverk på pergola beiset i 2 strøk (2025) – bekrefter at pergola fortsatt er til stede. (Side 95-96)"
      ],
      "source_documents": [
        "d004_Salgsoppgave (1)"
      ],
      "source_pages": [
        93,
        95,
        96
      ],
      "confidence": 0.75
    },
    {
      "risk_id": "R4",
      "category": "contractual_issue",
      "severity": "info",
      "description": "Norgespris på strøm (statlig fastprisordning til 50 øre/kWh) følger boligen ut bindingstiden (til 31. desember 2026). Ny kjøper er bundet av denne ordningen og kan ikke fritt velge strømleverandør i perioden.",
      "evidence": [
        "Norgespris er en statlig ordning som gir husholdninger tilbud om strøm til fast pris på 50 øre pr. kilowattime (prisen gjelder frem til 31. Desember 2026). (Side 97)",
        "Når en bolig med Norgespris bytter eier, vil ny eier fortsatt være bundet til Norgespris ut bindingstiden. (Side 97)"
      ],
      "source_documents": [
        "d004_Salgsoppgave (1)"
      ],
      "source_pages": [
        97
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R5",
      "category": "structural_defect",
      "severity": "info",
      "description": "Energiattesten fra 2018 angir at boligen er lite energieffektiv, og det anbefales service på ventilasjonsanlegget samt temperatur- og tidsstyring på elektriske anlegg. Filterbyttet på Flexit ventilasjonsanlegg ble gjort av ufaglært i 2024.",
      "evidence": [
        "Energimerket angir boligens energistandard. Boligen er lite energieffektiv. (Side 150)",
        "Tiltak 1: Utføre service på ventilasjonsanlegg. Balanserte ventilasjonsanlegg bør kontrolleres jevnlig for å sikre at de fungerer som de skal. (Side 155)",
        "Tiltak 2: Temperatur- og tidsstyring (på elektriske anlegg). (Side 155)",
        "Ufaglært arbeid: Byttet Flexit filter på ventilasjonsanlegg (2024). (Side 94)",
        "Takstrapport: Boligen er oppført med balansert ventilasjon. Ventilasjonen er funksjonstestet. Det registreres trekk i kanalen. Det registreres ikke tegn til avvik på befaringstidspunktet. TG-1. (Side 87)"
      ],
      "source_documents": [
        "d004_Salgsoppgave (1)"
      ],
      "source_pages": [
        87,
        94,
        150,
        155
      ],
      "confidence": 0.72
    },
    {
      "risk_id": "R6",
      "category": "structural_defect",
      "severity": "info",
      "description": "Koketopp har hatt feil ifølge tidligere eier. Selger bekrefter kjennskap til feil på tilbehør som følger med eiendommen, men det er ikke opplyst om feilen er utbedret.",
      "evidence": [
        "Vet du om det er, eller har vært, feil på tilbehør som følger med eiendommen? Ja. Opplysning om koketopp (til orientering). Tidligere eier opplyste i sin... (Side 97)",
        "Er det gjort tiltak, eller er feilen/skaden utbedret? Nei, ikke som jeg kjenner til. (Side 97)"
      ],
      "source_documents": [
        "d004_Salgsoppgave (1)"
      ],
      "source_pages": [
        97
      ],
      "confidence": 0.65
    },
    {
      "risk_id": "R7",
      "category": "area_discrepancy",
      "severity": "info",
      "description": "BRA per bolig er oppgitt til 125,8 m² i både matrikkelen og byggetegningene, mens P-ROM per bolig er oppgitt til 116,3 m² i tegningene. Differansen på 9,5 m² tilsvarer boder/sekundærrom og bør verifiseres mot takstdokumentasjon.",
      "evidence": [
        "BRA per bygg 125,8m2 / P-rom per bolig 116,3m2 (fra byggetegninger, bekreftet i flere fasadetegninger). (Side 119, 120, 121, 122)",
        "Gustav Granhaugs veg 85 A Bolig 125,8 (BRA fra matrikkelen). (Side 141)",
        "BRA bolig: 125,8 / BRA totalt: 125,8 (bygningsopplysninger fra matrikkelen). (Side 141)",
        "Etasjeopplysninger: H01 BRA Bolig 65,8 / H02 BRA Bolig 60,0 – sum 125,8 m². (Side 141)",
        "Byggetegning 1. etg. viser bl.a. Bod 5,3 m2 og Bod/Vask 6,0 m2 som sekundærrom. (Side 119-120)"
      ],
      "source_documents": [
        "d004_Salgsoppgave (1)"
      ],
      "source_pages": [
        119,
        120,
        121,
        122,
        141
      ],
      "confidence": 0.7
    },
    {
      "risk_id": "R8",
      "category": "contractual_issue",
      "severity": "info",
      "description": "Kjøper må melde navn, telefonnummer, e-postadresse samt fødselsnummer og personnummer til styret innen 14 dager etter overtakelse, jf. vedtektenes § 9. Manglende melding kan utgjøre et kontraktsbrudd overfor sameiet.",
      "evidence": [
        "Det kreves ikke styregodkjennelse av ny eier, men navn, telefonnummer og e-postadresse til kjøper må meldes til styret inne 14 dager etter overtakelse, jf vedtektene paragraf 9. I tillegg ber vi som nevnt om fødsels- og personnummer til rapportering av tredjepartsopplysninger til Skatteetaten. (Side 100)"
      ],
      "source_documents": [
        "d004_Salgsoppgave (1)"
      ],
      "source_pages": [
        100
      ],
      "confidence": 0.88
    }
  ],
  "re_retrieval_queries": [
    "bruksendring carport garasje byggetillatelse kommunen godkjenning",
    "pergola vedbod byggemeldt søknad tillatelse kommunen",
    "koketopp feil beskrivelse type tidligere eier tilbehør",
    "energimerke karakter bokstav energieffektivitet bolig",
    "takstrapport tilstandsgrad TG2 TG3 avvik bolig",
    "felleskostnader sameiet Bekkedalshøgda fremtidige planer økte utgifter",
    "boligselgerforsikring Fremtind reklamasjon kjøper rettigheter"
  ]
}

## Raw Response
```json
{
  "id": "msg_01XkrcoHgUZL27tznz6mUCVf",
  "container": null,
  "content": [
    {
      "id": "toolu_01S5pzqkVfeSFhbZydGUG3oW",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "category": "contractual_issue",
            "severity": "warning",
            "description": "Carport er bygget om til garasje med motorisert port, men det er uklart om det ble søkt om bruksendring. Tidligere eier opplyste at de ikke kjenner til om det ble søkt om bruksendring fra carport til garasje.",
            "evidence": [
              "Tidligere eier har opplyst at selger ved deres kjøp informerte om at det var montert elektrisk port i carporten for å gjøre den om til garasje, og at dette arbeidet ble utført av snekker fra Monter AS. Det ble samtidig opplyst at de ikke kjenner til om det ble søkt om bruksendring fra carport til garasje. (Side 92-93)",
              "Tidligere eier opplyser at selgeren de kjøpte av hadde satt inn en motorisert garasjeport, og at carporten dermed ble bygget om til garasje. (Side 95)",
              "Det er garasje med elektrisk portåpner tilknyttet boligen, med terrasse over. (Side 88)",
              "Byggetegningene fra 2013 viser 'Carport 15,4 m2' i 1. etasje, ikke garasje. (Side 119-120)",
              "Selger svarer 'Nei, ikke som jeg kjenner til' på spørsmål om feil/skader ved garasje. (Side 97)"
            ],
            "source_documents": [
              "d004_Salgsoppgave (1)"
            ],
            "source_pages": [
              88,
              92,
              93,
              95,
              97,
              119
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R2",
            "category": "contractual_issue",
            "severity": "warning",
            "description": "Kollektivavtale med Viken Fiber/Altibox med 3 års bindingstid (fra 1. desember 2024) følger seksjonen og er bindende for ny kjøper. Kjøper overtar denne forpliktelsen uten mulighet til å si opp avtalen i bindingstiden.",
            "evidence": [
              "Hollstedt er del av en kollektivavtale som er inngått med Viken Fiber om TV og internett gjeldende fra 1. desember 2024 med tre års bindingstid. Denne avtalen med bindingstid følger seksjonen. (Side 100)",
              "Avtalen har fra og med 1. februar 2026 en månedspris på 609 kroner per boenhet. (Side 100)",
              "Sameiet Bekkedalshøgda har en felles avtale med Viken Fiber/Altibox (frivillig tilvalg) til en månedlig kostnad på kr 609,- per 01.01.26. Sameiet fakturerer hver seksjonseier halvårlig for denne tjenesten. (Side 97-98)"
            ],
            "source_documents": [
              "d004_Salgsoppgave (1)"
            ],
            "source_pages": [
              97,
              98,
              100
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R3",
            "category": "contractual_issue",
            "severity": "warning",
            "description": "Pergola på ca. 9 m² og vedbod under utvendig trapp er oppført av tidligere eier. Det er ikke opplyst om disse er byggemeldt eller godkjent av kommunen. Manglende byggetillatelse kan medføre pålegg om riving eller ettergodkjenning.",
            "evidence": [
              "Tidligere eier opplyste at de som solgte de boligen satt opp en pergola i hagen på ca. 9 m², samt bygget en vedbod under den eksisterende utvendige trappen mot hagen. (Side 93)",
              "En tidligere eier har oppført en pergola i hagen på ca. 9 m², samt bygget en vedbod under den utvendige trappen mot hagen. (Side 95)",
              "Treverk på pergola beiset i 2 strøk (2025) – bekrefter at pergola fortsatt er til stede. (Side 95-96)"
            ],
            "source_documents": [
              "d004_Salgsoppgave (1)"
            ],
            "source_pages": [
              93,
              95,
              96
            ],
            "confidence": 0.75
          },
          {
            "risk_id": "R4",
            "category": "contractual_issue",
            "severity": "info",
            "description": "Norgespris på strøm (statlig fastprisordning til 50 øre/kWh) følger boligen ut bindingstiden (til 31. desember 2026). Ny kjøper er bundet av denne ordningen og kan ikke fritt velge strømleverandør i perioden.",
            "evidence": [
              "Norgespris er en statlig ordning som gir husholdninger tilbud om strøm til fast pris på 50 øre pr. kilowattime (prisen gjelder frem til 31. Desember 2026). (Side 97)",
              "Når en bolig med Norgespris bytter eier, vil ny eier fortsatt være bundet til Norgespris ut bindingstiden. (Side 97)"
            ],
            "source_documents": [
              "d004_Salgsoppgave (1)"
            ],
            "source_pages": [
              97
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R5",
            "category": "structural_defect",
            "severity": "info",
            "description": "Energiattesten fra 2018 angir at boligen er lite energieffektiv, og det anbefales service på ventilasjonsanlegget samt temperatur- og tidsstyring på elektriske anlegg. Filterbyttet på Flexit ventilasjonsanlegg ble gjort av ufaglært i 2024.",
            "evidence": [
              "Energimerket angir boligens energistandard. Boligen er lite energieffektiv. (Side 150)",
              "Tiltak 1: Utføre service på ventilasjonsanlegg. Balanserte ventilasjonsanlegg bør kontrolleres jevnlig for å sikre at de fungerer som de skal. (Side 155)",
              "Tiltak 2: Temperatur- og tidsstyring (på elektriske anlegg). (Side 155)",
              "Ufaglært arbeid: Byttet Flexit filter på ventilasjonsanlegg (2024). (Side 94)",
              "Takstrapport: Boligen er oppført med balansert ventilasjon. Ventilasjonen er funksjonstestet. Det registreres trekk i kanalen. Det registreres ikke tegn til avvik på befaringstidspunktet. TG-1. (Side 87)"
            ],
            "source_documents": [
              "d004_Salgsoppgave (1)"
            ],
            "source_pages": [
              87,
              94,
              150,
              155
            ],
            "confidence": 0.72
          },
          {
            "risk_id": "R6",
            "category": "structural_defect",
            "severity": "info",
            "description": "Koketopp har hatt feil ifølge tidligere eier. Selger bekrefter kjennskap til feil på tilbehør som følger med eiendommen, men det er ikke opplyst om feilen er utbedret.",
            "evidence": [
              "Vet du om det er, eller har vært, feil på tilbehør som følger med eiendommen? Ja. Opplysning om koketopp (til orientering). Tidligere eier opplyste i sin... (Side 97)",
              "Er det gjort tiltak, eller er feilen/skaden utbedret? Nei, ikke som jeg kjenner til. (Side 97)"
            ],
            "source_documents": [
              "d004_Salgsoppgave (1)"
            ],
            "source_pages": [
              97
            ],
            "confidence": 0.65
          },
          {
            "risk_id": "R7",
            "category": "area_discrepancy",
            "severity": "info",
            "description": "BRA per bolig er oppgitt til 125,8 m² i både matrikkelen og byggetegningene, mens P-ROM per bolig er oppgitt til 116,3 m² i tegningene. Differansen på 9,5 m² tilsvarer boder/sekundærrom og bør verifiseres mot takstdokumentasjon.",
            "evidence": [
              "BRA per bygg 125,8m2 / P-rom per bolig 116,3m2 (fra byggetegninger, bekreftet i flere fasadetegninger). (Side 119, 120, 121, 122)",
              "Gustav Granhaugs veg 85 A Bolig 125,8 (BRA fra matrikkelen). (Side 141)",
              "BRA bolig: 125,8 / BRA totalt: 125,8 (bygningsopplysninger fra matrikkelen). (Side 141)",
              "Etasjeopplysninger: H01 BRA Bolig 65,8 / H02 BRA Bolig 60,0 – sum 125,8 m². (Side 141)",
              "Byggetegning 1. etg. viser bl.a. Bod 5,3 m2 og Bod/Vask 6,0 m2 som sekundærrom. (Side 119-120)"
            ],
            "source_documents": [
              "d004_Salgsoppgave (1)"
            ],
            "source_pages": [
              119,
              120,
              121,
              122,
              141
            ],
            "confidence": 0.7
          },
          {
            "risk_id": "R8",
            "category": "contractual_issue",
            "severity": "info",
            "description": "Kjøper må melde navn, telefonnummer, e-postadresse samt fødselsnummer og personnummer til styret innen 14 dager etter overtakelse, jf. vedtektenes § 9. Manglende melding kan utgjøre et kontraktsbrudd overfor sameiet.",
            "evidence": [
              "Det kreves ikke styregodkjennelse av ny eier, men navn, telefonnummer og e-postadresse til kjøper må meldes til styret inne 14 dager etter overtakelse, jf vedtektene paragraf 9. I tillegg ber vi som nevnt om fødsels- og personnummer til rapportering av tredjepartsopplysninger til Skatteetaten. (Side 100)"
            ],
            "source_documents": [
              "d004_Salgsoppgave (1)"
            ],
            "source_pages": [
              100
            ],
            "confidence": 0.88
          }
        ],
        "re_retrieval_queries": [
          "bruksendring carport garasje byggetillatelse kommunen godkjenning",
          "pergola vedbod byggemeldt søknad tillatelse kommunen",
          "koketopp feil beskrivelse type tidligere eier tilbehør",
          "energimerke karakter bokstav energieffektivitet bolig",
          "takstrapport tilstandsgrad TG2 TG3 avvik bolig",
          "felleskostnader sameiet Bekkedalshøgda fremtidige planer økte utgifter",
          "boligselgerforsikring Fremtind reklamasjon kjøper rettigheter"
        ]
      },
      "name": "validate_risks",
      "type": "tool_use"
    }
  ],
  "model": "claude-sonnet-4-6",
  "role": "assistant",
  "stop_reason": "max_tokens",
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
    "input_tokens": 21528,
    "output_tokens": 4096,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
