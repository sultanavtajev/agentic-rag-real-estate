# Trace: agentic_reflecting_iter1
- **Run ID:** b9306bef-eafb-4051-8d88-23bad88d4985
- **Tidspunkt:** 2026-03-25T22:54:54.706392+00:00
- **Varighet:** 83.75s
- **Input tokens:** 21287
- **Output tokens:** 4191

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
Risiko 1: Ukjent tilstand på membran og skjulte konstruksjoner på bad – potensielle skjulte fuktskader
  Confidence: 0.92
  Evidens: Tilstanden på membran og skjulte konstruksjoner er ukjent. Eventuelle feil eller mangler kan ikke utelukkes.; Tilstanden på skjulte konstruksjoner, herunder membran og sluktilkobling, er ukjent.; Vurderingen er basert på tilgjengelige visuelle flater. Det er utført fuktsøk med egnet fuktindikator uten å påvise unormale utslag. Skjulte forhold kan ikke verifiseres.

Risiko 2: Ingen radonmåling er utført – kjøper eksponeres for ukjent radonrisiko
  Confidence: 0.88
  Evidens: Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid.

Risiko 3: Bod (BRA-e) mangler dokumentasjon på tilhørighet til boenheten – kan omdisponeres av sameiet
  Confidence: 0.9
  Evidens: Det er ikke fremvist dokumentasjon på at rommet tilhører boenheten. Rom utenfor boenheten kan omdisponeres av borettslaget/sameiet og dette kan påvirke boligens BRA.

Risiko 4: Legalpant – sameiet og kommunen har panterett med prioritet foran tinglyste lån, noe som kan påvirke kjøpers finansiering og risiko
  Confidence: 0.85
  Evidens: Legalpant er pant som ikke vises i grunnboksutskriften, og har prioritet foran tinglyste lån, for eksempel banklån på seksjonen.; Kommunen har legalpant som sikkerhet for betaling av kommunale avgifter og eventuell eiendomsskatt.; Sameiet legal panterett i den enkelte eierseksjon, begrenset til inntil 2 ganger folketrygdens grunnbeløp.; Legalpant til kommunen har høyere prioritet enn legalpant til sameiet.

Risiko 5: Bruksrett for Jessheim Panorama AS til boder – ekstern aktør har tinglyst bruksrett over deler av eiendommen
  Confidence: 0.82
  Evidens: 24.05.2017 – Dokumentnr: 549869 – Bruksrett. Rettighetshaver: Jessheim Panorama AS, Org.nr: 913 180 844. Bestemmelse om bruks- og adkomstrett til boder. Gjelder denne registerenheten med flere.

Risiko 6: Ansvar for overvann fra fylkesvei – eiendommen er bundet av erklæring som ikke kan slettes uten samtykke fra Akershus fylkeskommune
  Confidence: 0.78
  Evidens: 12.10.2016 – Dokumentnr: 934974 – Erklæring/avtale. Bestemmelse om ansvar for overvann fra fv.454.01. Kan ikke slettes uten samtykke fra Akershus fylkeskommune.

Risiko 7: Elektriske kraftlinjer på eiendommen – tinglyst heftelse som kan begrense bruk og utbygging
  Confidence: 0.75
  Evidens: 18.02.1982 – Dokumentnr: 1467 – Skjønn. Elektriske kraftlinjer. Sak 13/81 B.

Risiko 8: Eierskap begrenset til maks to seksjoner per eier – kan begrense investorers kjøpsmuligheter
  Confidence: 0.8
  Evidens: Det informeres om at ingen kan eie mer enn to boligseksjoner i sameiet, i henhold til eierseksjonsloven § 23. Seksjoner som eies av nærstående eller gjennom et firma regnes også med.

Risiko 9: Felleskostnader budsjettert med 4 % økning fra 2025 – kjøper må påregne økte løpende kostnader
  Confidence: 0.8
  Evidens: Budsjettet er basert på 4 % økning av felleskostnadene fra 01.01.2025.

Risiko 10: Solidarisk ansvar overfor sameiets kreditorer – kjøper kan bli holdt ansvarlig for andre sameieres mislighold
  Confidence: 0.78
  Evidens: Overfor sameiets kreditorer er sameierne solidarisk ansvarlig. Den enkelte sameier hefter imidlertid i regressomgangen ikke for en annen sameiers andel av sameiets forpliktelser.; I henhold til eierseksjonsloven § 31 er sameierne ansvarlige overfor sameiets kreditorer i forhold til sin sameiebrøk.

Risiko 11: Eiendommen selges 'som den er' ved ikke-forbrukerkjøp – selgers ansvar er vesentlig begrenset
  Confidence: 0.85
  Evidens: Ved slike kjøp selges eiendommen «som den er», og selgers ansvar er begrenset til det som følger direkte av avtalen, jf. avhendingsloven § 3-9.; På grunn av ulike ansvarsforhold kan selger velge å prioritere bud fra ikke-forbrukere, selv om budet er lavere enn et forbrukerbud.

Risiko 12: Reguleringsplan åpner for sentrumsformål (bolig, forretning og kontor) – fremtidig næringsutvikling i nabolaget kan påvirke bomiljøet
  Confidence: 0.72
  Evidens: Eiendommen ligger i et område regulert til sentrumsformål, dvs. bolig, forretning og kontor.; Eiendommen er regulert til bolig/kontor/forr. i reguleringsplan for «Jessheim Panorama» m/best. vedtatt 06.10.2014.; Avsatt i kommunedelplan for: Jessheim til: sentrumsformål – nåværende vedtatt 17.06.2025.

Risiko 13: Restanser på felleskostnader i sameiet – indikerer at enkelte sameiere ikke betaler sine forpliktelser
  Confidence: 0.7
  Evidens: Restanser felleskostnader/kundefordringer 36 754 (2024) mot 31 659 (2023)

Risiko 14: Skjulte konstruksjoner (vann og avløp) uten dokumentasjon – kvalitet og alder er kun vurdert, ikke verifisert
  Confidence: 0.75
  Evidens: For skjulte konstruksjoner, som vann og avløp uten dokumentasjon, er kvalitet og alder vurdert.; Kjenner du til feil eller om har vært utført arbeid/kontroll på vann/avløp? Svar Nei

Risiko 15: Ingen angrerett ved kjøp av fast eiendom – kjøper er bundet fra aksept av bud
  Confidence: 0.95
  Evidens: Det eksisterer ingen angrerett ved salg/kjøp av fast eiendom.

Dokumentkontekst:
[d182_d182 | Side [1]]
eiendommen eller av dens omgivelser?
Nei Ja
20 Kjenner du til om det foreligger påbud/heftelser/krav/manglende tillatelser vedrørende eiendommen?
Nei Ja
Initialer selger: TL 2
76006240
:ecnerefer
tnemucoD
34

## Side 35

21 Er det foretatt radonmåling?
Nei Ja
22 Kjenner du til manglende brukstillatelse eller ferdigattest?
Nei Ja
23 Kjenner du til om det foreligger skaderapporter/ tilstandsvurderinger eller utførte målinger?
Nei Ja
24 Er det andre forhold av betydning ved eiendommen som kan være relevant

---

[d182_d182 | Side [1]]
ddelbart, likeså spor etter sølete hundepoter m.v. i
oppgangene. Hunde‑ og katteeierne oppfordres til å
sørge for at sine dyr ikke gjør sine fornødne på sameiets Tinglyste heftelser
område. Tinglyste heftelser og rettigheter: På eiendommen er det
‑ Lekeplasser skal skjermes spesielt av hensyn til tinglyst følgende heftelser og rettigheter som følger
hygiene og barnas miljø. eiendommens matrikkel ved overskjøting til ny
hjemmelshaver:
Styregodkjennelse: Det informeres om at ingen kan eie
mer enn to

---

[d182_d182 | Side [1]]
ommen?
Nei Ja
16 Kjenner du til om det har vært utført arbeid på terrasse/garasje/tak/fasade?
Svar Nei
17 Selges eiendommen med utleiedel, leilighet, hybel eller tilsvarende?
Nei Ja
18 Kjenner du til om det er innredet/bruksendret/bygget ut i kjeller eller loft eller andre deler av boligen?
Nei Ja
19 Kjenner du til forslag eller vedtatte reguleringsplaner, andre planer, nabovarsel eller offentlige vedtak som kan medføre endringer i bruken av
eiendommen eller av dens omgivelser?
Nei Ja
20 Kjenner du til om

---

[d182_d182 | Side [1]]
empel banklån på seksjonen. Kjøper og selger er forpliktet til å signere den standard
Legalpant til kommunen har høyere prioritet enn kjøpekontrakten utarbeidet av Emera som en del av
legalpant til sameiet. eiendomshandleren. Kjøpekontrakten kan gjennomgås
hos eiendomsmegler før budet legges inn. Kontakt
eiendomsmegler for eventuelle spørsmål.
Vei, vann og avløp
Eiendommen er tilknyttet offentlig vann‑ og Selger leverer eiendommen i ryddig og rengjort stand.
avløpssystem. Stikkledningene fra eiendommen og

---

[d182_d182 | Side [1]]
 kreditorer i forhold til sin Rett for kommunen til å anlegge og vedlikeholde
sameiebrøk. Ved manglende betaling av fellesutgifter har ledninger m.m.
sameiet legal panterett i den enkelte eierseksjon, Overført fra: Knr:3209 Gnr:135 Bnr:206
begrenset til inntil 2 ganger folketrygdens grunnbeløp. Gjelder denne registerenheten med flere
20.01.1940 ‑ Dokumentnr: 80 ‑ Rettigheter iflg. skjøte
Energimerke Best. om bebyggelse. Forbud mot fabrikk/ industri.
Energikarakter: B Forbud mot
generende virksomhet. Best.

---

[d182_d182 | Side [1]]
itorer i forhold til sin
eiendomsskatt. De øvrige seksjonseierne i sameiet har sameiebrøk. Ved manglende betaling av fellesutgifter har
legalpant på inntil 2G som sikkerhet for krav knyttet til sameiet legal panterett i den enkelte eierseksjon,
sameieforholdet, som felleskostnader. Legalpant er pant begrenset til inntil 2 ganger folketrygdens grunnbeløp.
som ikke vises i grunnboksutskriften, og har prioritet
foran tinglyste lån, for eksempel banklån på seksjonen. Kjøper og selger er forpliktet til å

---

[d182_d182 | Side [1]]
.01.2024 ‑ Dokumentnr: 232909 ‑ Omnummerering
ved kommuneendring Radonmåling
Tidligere: Knr:3033 Gnr:135 Bnr:206 Snr:33 Selger har ikke utført radonmåling. Det er ikke krav om
dette med mindre boligen er helt eller delvis utleid.
27.01.2017 ‑ Dokumentnr: 85728 ‑ Erklæring/ avtale
Rettighet hefter i: Knr:3209 Gnr:135 Bnr:850 Snr:1 ‑ 19
Bestemmelse om overvannskum og infiltrasjonsanlegg. Diverse
Bestemmelse om anlegg og vedlikehold av ledninger Det informeres om at ingen kan eie mer enn to
m.m.

---

[d182_d182 | Side [1]]
 andre forhold av betydning ved eiendommen som kan være relevant for kjøper å vite om (f.eks. rasfare, tinglyste forhold eller private
avtaler)?
Nei Ja
Spørsmål for bolig i sameie/borettslag/boligaksjeselskap:
25 Kjenner du til om sameiet/laget/selskapet er involvert i tvister av noe slag?
Nei Ja
26 Kjenner du til vedtak/forslag til vedtak om forhold vedr. eiendommen som kan medføre økte felleskostnader/økt fellesgjeld?
Nei Ja
27 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr i

---

[d182_d182 | Side [1]]
elger dersom ikke 
annet er opplyst i salgsoppgaven, kjøper har tatt forbehold i bud eller avtale på annen måte er 
inngått. Der intet annet er avtalt, vil løsøre og tilbehør medfølge slik dette fremkommer av avhl. § 3-4 
og § 3-5 og denne oversikt. 

Produkter og installasjoner som medfølger overdras uten noen form for garantier, utover eventuell 
gjenværende leverandørgaranti.

Dersom det er noe i nedenstående liste som ikke 昀椀nnes på eiendommen, vil det heller ikke medfølge.
1. HVITEVARER

---

[d182_d182 | Side [1]]
edninger
Rett for kommunen til å anlegge og vedlikeholde Gjelder denne registerenheten med flere
ledninger m.m.
Bestemmelse om bebyggelse 24.05.2017 ‑ Dokumentnr: 549869 ‑ Bruksrett
Overført fra: Knr:3209 Gnr:135 Bnr:206 Rettighetshaver: Jessheim Panorama AS
Gjelder denne registerenheten med flere Org.nr: 913 180 844
Bestemmelse om bruks‑ og adkomstrett til boder
08.01.2016 ‑ Dokumentnr: 18710 ‑ Erklæring/ avtale Gjelder denne registerenheten med flere
Rettighetshaver: Knr:3209 Gnr:135 Bnr:41

---

[d182_d182 | Side [1]]
e det foreligger en gjeldende
boder. garanti fra produsent eller leverandør.
BRA‑b ‑ Innglasset balkong, altan, terrasser.
Kjøper aksepterer at det kan forekomme hull og merker
Andre arealer: etter montering av inventar og utstyr som ikke er en del
TBA ‑Terrasser og åpen altan som er tilknyttet boligen. av overdragelsen.
ALH ‑ Areal med lav himlingshøyde måles på samme
måte som BRA, men man ser bort fra krav til
Eiendommens
himlingshøyde. Arealet inngår ikke i BRA, men opplyses
om sammen med BRA som et

---

[d182_d182 | Side [1]]
ten med flere
10.09.1952 ‑ Dokumentnr: 2494 ‑ Bestemmelse om veg 12.10.2016 ‑ Dokumentnr: 934974 ‑ Erklæring/ avtale
Vegvesenets betingelser vedtatt Bestemmelse om ansvar for overvann fra fv.454.01
Overført fra: Knr:3209 Gnr:135 Bnr:206 Kan ikke slettes uten samtykke fra Akershus
Gjelder denne registerenheten med flere fylkeskommune
Overført fra: Knr:3209 Gnr:135 Bnr:206
18.02.1982 ‑ Dokumentnr: 1467 ‑ Skjønn Gjelder denne registerenheten med flere
Elektriske kraftlinjer
Sak 13/ 81 B. 25.04.2017 ‑

---

[d182_d182 | Side [1]]
leveres kjøper på 
overtakelsen, herunder nøkler til eventuelle boder, uthus, garasjeportåpner e.l. Låses boder, uthus 
Ærlighet varer lengst Erfaring som gir resultater
e.l. med hengelås, skal lås og nøkler til disse medfølge. 
22. GARASJEHYLLER, bodhyller, lagringshyller og oppheng til bildekk medfølger såfremt de er 
Vi tror sterkt på åpenhet og ærlighet og gir ingen Vi sier det som det er – enkelt og greit – fordi vi
fastmontert.
urealistiske løfter eller forskjønnede beskrivelser. vet at det gir

---

[d182_d182 | Side [1]]
gisterenheten med flere
Rettighetshaver: Knr:3209 Gnr:135 Bnr:41 Snr:1
Rettighetshaver: Knr:3209 Gnr:135 Bnr:41 Snr:2 19.01.2017 ‑ Dokumentnr: 60321 ‑ Seksjonering
Rettighetshaver: Knr:3209 Gnr:135 Bnr:41 Snr:3 Opprettet seksjoner:
Rettighetshaver: Knr:3209 Gnr:135 Bnr:50 Snr:1 ‑ 11 Snr: 33
Formål: Bolig
Rett til å ha vann‑ , spillvanns‑ og overvannsledning over Sameiebrøk: 46/ 10358
eiendommen
Bestemmelse om adkomstrett 06.06.2017 ‑ Dokumentnr: 587804 ‑ Reseksjonering
Overført fra: Knr:3209 Gnr:135

---

[d182_d182 | Side [1]]
å dette heftet, du kan få
bruk for det senere, f.eks ved salg
av boligen.
82

## Side 83





 

 



---

[d182_d182 | Side [1]]
ldende fra 1. januar 2020.

Generelt
Lov om avhending av fast eigedom (avhendingslova/avhl.) av 3. juli 1992 regulerer kjøper og selgers 
rettigheter og plikter ved overdragelse av fast eiendom og andeler i borettslag.

I henhold til avhl. § 3-4 skal eiendommen, når annet ikke er avtalt, overdras med innredninger og 
utstyr som etter lov, forskrift eller annet o昀昀entlig vedtak skal følge med. Det samme gjelder varig 
innredning og utstyr som enten er fastmontert eller er særskilt tilpasset

---

[d182_d182 | Side [1]]
 av ledninger Det informeres om at ingen kan eie mer enn to
m.m. boligseksjoner i sameiet, i henhold til eierseksjonsloven §
Bestemmelse om adkomstrett 23. Seksjoner som eies av nærstående eller gjennom et
Gjelder denne registerenheten med flere firma regnes også med.
Legalpant: Kommunen har legalpant som sikkerhet for I henhold til eierseksjonsloven § 31 er sameierne
betaling av kommunale avgifter og eventuell ansvarlige overfor sameiets kreditorer i forhold til sin
eiendomsskatt. De øvrige seksjonseierne

---

[d182_d182 | Side [1]]
 vurdering i forbindelse med befaringen.
Oppdragsnr.: 22461-1118 Befaringsdato: 12.03.2026 Side: 5 av 19
42

## Side 43

Trondheimsvegen - Jessheim 98 D, 2050 JESSHEIM Rambøll Norge AS
Gnr 135 - Bnr 206 Vestvollveien 34 D
3209 ULLENSAKER 2019 SKEDSMOKORSET
Beskrivelse av eiendommen
Ingen forhold ved befaringen ga indikasjoner på avvik kny琀琀et 琀椀l
disse konstruksjonene.
Arealer
Gå 琀椀l side
Forutsetninger og vedlegg Gå 琀椀l side
Lovlighet Gå 琀椀l side
Boligbygg med 昀氀ere boenheter
• Det foreligger godkjente og

---

[d182_d182 | Side [1]]
r fra offentlige selges ansvar begrenses ettersom boligen selges «som
registre som kommunen og Kartverket. Det er viktig at den er», noe som kan være av verdi for selger. Det
kjøper setter seg grundig inn i alle salgsdokumentene, understrekes at selger står fritt til å velge hvilket bud som
herunder salgsoppgave, tilstandsrapport og selgers aksepteres, og er ikke forpliktet til å velge det høyeste.
egenerklæring. Kjøper anses for å være kjent med
forhold som er tydelig beskrevet i salgsdokumentene, Alle

---

[d182_d182 | Side [1]]
gg, fyringsforbud eller lignende?
Nei Ja
8 Kjenner du til om det er/har vært f.eks. sprekker i mur, skjeve gulv eller lignende?
Nei Ja
9 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr på eiendommen som rotter, mus, maur eller lignende?
Nei Ja
10 Kjenner du til om det er/har vært skjeggkre i boligen?
Nei Ja
11 Kjenner du til om det er/har vært utført arbeid på el-anlegget eller andre installasjoner (f.eks. oljetank, sentralfyr, ventilasjon)?
Svar Nei
12 Kjenner du til om det er utført

---

[d182_d182 | Side [1]]
en bak. eller estetiske status på et gitt tidspunkt.
Dette er av hensyn til bygningssakkyndiges kompetanse og
risikoen for skade.
•Symptom: forhold som gir indikasjon på hvilken tilstand et
byggverk eller en bygningsdel befinner seg i. Benyttes ved
•Kontroll av fukt i konstruksjonen ved hulltaking i bad og beskrivelse av avvik og alder.
vaskerom (våtrom), rom under terreng (kjelleretasje, underetasje
og sokkeletasje) eller andre bygningsdeler, skal skje etter eiers
•Skadegjørere: i hovedsak råte, sopp og

---

[d182_d182 | Side [1]]
høyder/åpninger, ulovlige bruksendringer, brannceller UTTRYKK OG DEFINISJONER
osv.
•For skjulte konstruksjoner, som vann og avløp uten •Referansenivå: kravet til bygningsdelen eller rommet på
dokumentasjon, er kvalitet og alder vurdert. byggetidspunktet.
•Fastmonterte installasjoner, for eksempel innfelt belysning og •Tilstand: byggverkets eller bygningsdelens tekniske, funksjonelle
høyttalere, skal ikke demonteres for å sjekke dampsperren bak. eller estetiske status på et gitt tidspunkt.
Dette er av

---

[d182_d182 | Side [1]]
Ingen umiddelbare tiltak anses nødvendig ut fra alder og
tydelig frem i tilstandsrapporten, og det vil ikke være observasjoner, men videre undersøkelser kan være
mulig å gjøre slike forhold gjeldende som en mangel. aktuelt ved mistanke om avvik.
Spesielt forhold som er vurdert med TG2 og TG3 bør
vurderes nøye, da de indikerer avvik fra normal slitasje
Øvrig informasjon
og/ eller høy alder, noe som kan innebære behov for
utbedringer. Bygningsdeler som er merket med TGIU er
ikke blitt vurdert av takstmannen.

---

[d182_d182 | Side [1]]
rs egenerklæring Vurderingen er basert på tilgjengelige visuelle flater. Det
er vedlagt salgsoppgaven, og det er viktig at er utført fuktsøk med egnet fuktindikator uten å påvise
interessenter setter seg grundig inn i disse dokumentene unormale utslag. Skjulte forhold kan ikke verifiseres.
før bud legges inn. Tilstanden på skjulte konstruksjoner, herunder membran
og sluktilkobling, er ukjent.
Kjøper anses kjent med opplysninger som kommer Ingen umiddelbare tiltak anses nødvendig ut fra alder og
tydelig

---

[d182_d182 | Side [1]]
or og som
svekkes over 琀椀d, og utse琀琀es for slitasje blant annet på grunn av bruk reduserer boligens funksjon og verdi, og som kommer frem av Forskri昀琀 琀椀l
og vær og vind. Mange boliger fornyes helt eller delvis, noen i 昀氀ere avhendingslova.
omganger, eller det oppføres 琀椀lbygg. Særlig for boliger som er
pusset opp eller endret, er det vik琀椀g å merke seg at fornyelse av
over昀氀ater ikke nødvendigvis betyr at bygningsdeler under er
forbedret.
Tilstandsrapporten beskriver ikke hele boligen
BYGNINGSSAKKYNDIGE

---

[d182_d182 | Side [1]]
etsmessig forsvarlig å undersøke
vurdert etter gjeldende teknisk forskrift på befaringstidspunktet. taket fra utsiden, og da vil vurderingen være basert på alder og
Dette gjelder blant annet: materialer.).
i. våtrom (bad, vaskerom) og andre fuktutsatte rom •stikkprøvetakninger er tilfeldig valgt og kan innebære kontroll
under overflaten med spiss redskap eller lignende.
ii. forhold knyttet til brann, rømming, sikkerhet, for eksempel
rekkverkshøyder/åpninger, ulovlige bruksendringer, brannceller UTTRYKK OG

---

[d182_d182 | Side [1]]
 annet inventar. Dette gjelder også integrert
Tilstandsrapporten gjelder hovedbygget. Tilleggsbygninger, som tilbehør.
for eksempel garasje, gis kun en enkel beskrivelse.
•inspisering av yttertak er basert på det som er synlig, normalt på
Avvik er vurdert ut fra tekniske forskrifter på innsiden fra loftet og utvendig fra stige/bakkenivå. I en del
godkjenningstidspunktet for bygget. Noen bygningsdeler er situasjoner er det ikke sikkerhetsmessig forsvarlig å undersøke
vurdert etter gjeldende teknisk

---

[d182_d182 | Side [1]]
Bad > Tilliggende konstruksjoner Gå til side
våtrom
Oppdragsnr.: 22461-1118 Befaringsdato: 12.03.2026 Side: 7 av 19
44

## Side 45

Trondheimsvegen - Jessheim 98 D, 2050 JESSHEIM Rambøll Norge AS
Gnr 135 - Bnr 206 Vestvollveien 34 D
3209 ULLENSAKER 2019 SKEDSMOKORSET
Tilstandsrapport
BOLIGBYGG MED FLERE BOENHETER
Byggeår
2017
Anvendelse
Boligformål.
Standard
Normal standard på bygget ut ifra alder/konstruksjon - jamfør beskrivelse under konstruksjoner.
Vedlikehold
Bygget er jevnlig

---

[d182_d182 | Side [1]]
: 22461-1118 Befaringsdato: 12.03.2026 Side: 9 av 19
46

## Side 47

Trondheimsvegen - Jessheim 98 D, 2050 JESSHEIM Rambøll Norge AS
Gnr 135 - Bnr 206 Vestvollveien 34 D
3209 ULLENSAKER 2019 SKEDSMOKORSET
Tilstandsrapport
Tilstanden på membran og skjulte konstruksjoner er ukjent. Eventuelle feil eller mangler kan ikke utelukkes. Ingen umiddelbare 琀椀ltak anses nødvendig ut
fra alder og 琀椀lgjengelige opplysninger. Ved mistanke om avvik anbefales nærmere undersøkelser.
Sluk i dusjsone.
ETASJE >

---

[d182_d182 | Side [1]]
ler som er merket med TGIU er
ikke blitt vurdert av takstmannen. Adresse
Trondheimsvegen ‑ Jessheim 98D, 2050 JESSHEIM
Beskrivelsen av boligen nedenfor er hentet direkte fra
tilstandsrapporten: Gnr. 135, bnr. 206, snr. 33, ideell andel 1/ 1
i Ullensaker kommune.
LIM INN BYGGEMÅTE FRA TILSTANDSRAPPORT
Bygningsdeler vurdert med TG2:
‑ Ingen Selger
Bygningsdeler vurdert med TG3: Tore Leknesund
‑ Ingen
Bygningsdeler som ikke har blitt undersøkt (TGIU): Sameie
‑ Våtrom > Etasje > Bad > Sluk, membran og

---

[d182_d182 | Side [1]]
okumentasjon på
faglig god u琀昀ørelse. Det er ingen merknader 琀椀l delen.
TILSTANDSGRAD 1, TG1: MINDRE AVVIK
Bygningsdelen skal bare ha normal slitasje, og straks琀椀ltak skal ikke anses som nødvendig. Graden kan også
brukes når delen er ny, men der dokumentasjon på faglig god u琀昀ørelse mangler.
TILSTANDSGRAD 2, TG2: VESENTLIGE AVVIK OG MINDRE AVVIK SOM ETTER NS 3600 GIR TG 2
Bygningsdelen skal enten ha feil u琀昀ørelse, en skade eller symptomer på skade, sterk slitasje eller nedsa琀琀
funksjon. Graden gis når

---

[d182_d182 | Side [1]]
joner • geologiske forhold og bygningens plassering på grunnen • bygningens
planløsning • bygningens innredning • løsøre slik som hvitevarer • utendørs svømmebasseng og pumpeanlegg • bygningens este琀椀kk og
arkitektur • bygningens lovlighet (bortse琀琀 fra bruksendringer, brannceller og forhold som åpenbart kan påvirke helse, miljø og sikkerhet) •
fellesarealer (med mindre boligeier har vedlikeholdsplikt for fellesarealer og de琀琀e er kjent for bygningssakkyndig, eller fellesarealet har en særlig
琀椀lknytning

---

[d182_d182 | Side [1]]
 på skade, sterk slitasje eller nedsa琀琀
funksjon. Graden gis når bygningsdelen trenger vedlikehold eller 琀椀ltak i nær frem琀椀d. Graden skal også brukes
når delen er gammel og det er grunn 琀椀l å varsle om faren for skader på grunn av alderen, eller når det er grunn
琀椀l å overvåke delen spesielt på grunn av fare for større skader eller følgeskader.
TILSTANDSGRAD 3, TG3: STORE ELLER ALVORLIGE AVVIK
Denne 琀椀lstandsgraden brukes ved kra昀琀ige tegn på forhold som man må regne med trenger utbedring straks
eller

---

[d182_d182 | Side [1]]
informasjon, som har betydning for tilstandsvurderingen. omfatte tilleggsundersøkelser utover minimumskravet i forskriften.
Rapporten beskriver avvik, det vil si en tilstand som er dårligere
enn referansenivået. Rapporten vil normalt ikke fremheve positive BEFARINGEN
sider ved boligen ut over det som fremgår av tilstandsgradene.
•For anbefalte tiltak ved TG2 og TG3 må du vurdere om tiltakene Rapporten gir en vurdering av byggverk og bygningsdeler som
er nødvendige og lønnsomme. Hva det vil koste å utbedre

---

[d182_d182 | Side [1]]
jon og fuktmåling i utarbeide rapporten. Personvernerklæring med informasjon om
risikoutsatte konstruksjoner, primært i tilstøtende vegger til bad, bruk av personopplysninger og dine rettigheter finner du her
utforede kjellervegger og eventuelt i oppforede kjellergulv. Personvernerklæring - iVerdi
•Normal slitasjegrad: forventet slitasje av materiale i overflaten Tilstandsanalysen følger Forskrift til avhendingslova (tryggere
som er basert på enkle visuelle observasjoner. Kan vurderes bolighandel) og det

---

[d182_d182 | Side [1]]
ninger i undersøkelsesmetode e琀琀er forskri昀琀
琀椀l avhendingsloven § 2-2.
Vurderingen er basert på 琀椀lgjengelige visuelle 昀氀ater. Det er u琀昀ørt fuktsøk med egnet fuk琀椀ndikator uten å påvise unormale utslag. Skjulte forhold kan ikke
veri昀椀seres.
Tilstanden på skjulte konstruksjoner, herunder membran og sluk琀椀lkobling, er ukjent.
Ingen umiddelbare 琀椀ltak anses nødvendig ut fra alder og observasjoner, men videre undersøkelser kan være aktuelt ved mistanke om avvik.
Henvisning 琀椀l baderomskabin under fremlagt

---

[d182_d182 | Side [1]]
elverk. Etter dagens
•flater som er skjult av snø eller på annen måte ikke er tilgjengelig
regelverk vil disse kunne få en tilstandsgrad 2 eller 3 uten at det
eller skjult, blir ikke kontrollert.
nødvendigvis er krav om at avviket må utbedres.
•det blir ikke utført funksjonsprøving av bygningsdeler, som
isolasjon, piper, ventilasjon, elektrisk anlegg, osv.
PRESISERINGER
•det gis ikke en vurdering av boligens tilbehør, hvite- og
brunevarer og annet inventar. Dette gjelder også integrert
Tilstandsrapporten

---

[d182_d182 | Side [1]]
ike 琀椀lstandsgrader
Tilstanden gir u琀琀rykk for en gi琀琀 forventet 琀椀lstand, blant annet vurdert ut fra alder og normal bruk. Ved Tilstandsgrad 0 (TG0) og Tilstandsgrad 1
(TG1) gir den bygningssakkyndige normalt ingen begrunnelse for valg av 琀椀lstandsgrad. Grunnen er at bygningen eller bygningsdelen da bare har
normal slitasje. Ved skjulte konstruksjoner kan alder alene avgjøre 琀椀lstandsgrad. Når bygningssakkyndige anbefaler 琀椀ltak, for eksempel
utbedringer, må brukeren av rapporten vurdere om 琀椀ltakene er

---

[d182_d182 | Side [1]]
el
utbedringer, må brukeren av rapporten vurdere om 琀椀ltakene er nødvendige og lønnsomme.
Når den bygningssakkyndige velger 琀椀lstandsgrad, baseres vurderingen på faste kriterier som følger av gjeldende bransjestandard for Teknisk
琀椀lstandsanalyse ved omsetning av bolig og Forskri昀琀 琀椀l avhendingslova.
TILSTANDSGRAD 0, TG0: INGEN AVVIK
Bygningsdelen skal være 琀椀lnærmet ny, ikke vise tegn på slitasje og det skal være lagt frem dokumentasjon på
faglig god u琀昀ørelse. Det er ingen merknader 琀椀l

---

[d182_d182 | Side [1]]
 vanligvis ikke posi琀椀ve egenskaper ved boligen.
Hva vurderer en bygningssakkyndig?
Den bygningssakkyndige vurderer boligen ut fra hva man kan forvente av en bygning av samme alder
og type. Vurderingen gjøres som regel mot hvordan det var vanlig å bygge og regler som gjaldt da
boligen ble oppført (søknads琀椀dspunktet). Forhold som er vanlige for bygningens alder, slik som slitasje
e琀琀er normal bruk regnes ikke som avvik.
Hva inneholder 琀椀lstandsrapporten?
Den bygningssakkyndige undersøker rom og

---

[d182_d182 | Side [1]]
stnader forbundet med innvendig drift og
vedlikehold av bodareal sarealet,forholdsmessig andel av sameiets strøm, fjernvarme,
forsikringskostnader og øvrige driftskostnader som kan tilknyttes næringsseksjon nr 117 , jfr §
21. .
Den enkelte sameier betaler akontobeløp fastsatt av sameiermøtet eller styret til dekning av
sin andel av felleskostnadene. Akontobeløpet skal også dekke avsetning til fremtidig
vedlikehold, påkostninger eller andre fellestiltak på eiendommen.
§ 9
Den enkelte sameiers

---

[d182_d182 | Side [1]]
 regnskapsførsel dersom dette
ikke ivaretas av Jessheim Panorama sameie. Se også vedtektene for Jessheim Panorama
Sameie.
§ 15
Betaling av felleskostnader
Den enkelte sameier skal månedlig innbetale et akontobeløp til dekning av sin andel av de
årlige felleskostnadene. Beløpets størrelse fastsettes av sameiermøtet eller styret slik at de
samlede akontobeløp med rimelig margin dekker de felleskostnader som antas å ville påløpe
i løpet av ett år.
§ 16
Ansvar utad
Overfor sameiets kreditorer er sameierne

---

[d182_d182 | Side [1]]
ig drift, vedlikehold og
administrasjon av næringsseksjon nr 117 (bod), med mindre de ideelle eierne i næringsseksjon nr
117 velger sitt eget styre og ivaretar dette selv.
Så lenge styret i Jessheim Panorama Sameie sørger for forsvarlig drift, vedlikehold og
administrasjon av bodarealet i seksjon 117, skal de ideelle eierne av næringsseksjon nr 117
(boderr) betale felleskostnader for bod, iht sin eierbrøk i seksjonen, til Jessheim Panorama
Sameie. Inntekter og kostnader vedr. næringsseksjon nr 117

---

[d182_d182 | Side [1]]
orvaltning og vedlikehold,
c) andre rettslige disposisjoner over fast eiendom som går ut over vanlig forvaltning,
d) tiltak som har sammenheng med sameiernes bruksinteresser og som går ut over
vanlig forvaltning og vedlikehold, når tiltaket fører med seg økonomisk ansvar
eller utlegg for sameierne på mer enn fem prosent av de årlige fellesutgiftene.
e) samtykke til at avtale om forretningsførsel gjøres uoppsigelig for et lengre tidsrom
enn 6 måneder
Følgende beslutninger krever tilslutning fra de sameiere

---

[d182_d182 | Side [1]]
oldes forsvarlig ved like.
Styret kan gjennomføre pålegg gitt av offentlige myndigheter vedrørende eiendommen.
.
101

## Side 102

§ 14
Felleskostnader og regnskap
Kostnader med eiendommen som ikke særskilt knytter seg til en sameieandel, jf. pkt 2 under,
skal fordeles mellom sameierne etter sameiebrøken.
Dette gjelder utgifter til blant annet:
a. eiendomsforsikring, jf § 17
b. kostnader til indre vedlikehold av sameiets eiendom
c. strøm til lys/oppvarming/ventilasjon
d. drift og vedlikehold mv av

---

[d182_d182 | Side [1]]

Vedlegg 2 13 av 20 7520 Jessheim Panorama Sameie Revisjonsberetning.pdf
76

## Side 77

JESSHEIM PANORAMA SAMEIE
ORG.NR. 918 902 848, KUNDENR. 7520
RESULTATREGNSKAP
Note Regnskap Regnskap Budsjett Budsjett
2024 2023 2024 2025
DRIFTSINNTEKTER:
Innkrevde felleskostnader 2 4 180 256 3 992 996 4 198 000 4 315 000
Andre inntekter 3 7 927 57 243 0 0
SUM DRIFTSINNTEKTER 4 188 183 4 050 239 4 198 000 4 315 000
DRIFTSKOSTNADER:
Personalkostnader 4 -38 606 -42 481 -43 606 -45 200
Styrehonorar 5 -273

---

[d182_d182 | Side [1]]
r med eiendommen som ikke knytter seg til den enkelte bruksenhet (felleskostnader)
fordeles på sameierne etter sameiebrøken med mindre annet fremgår av denne bestemmelse
eller særlige grunner taler for å fordele kostnadene etter nytten for den enkelte bruksenhet eller
etter forbruk.
Kostnader forbundet med fellesarealer hvor det er gitt rett til eksklusiv bruk, jf §§ 4.2.1, 4.2.2,
4.3 skal fordeles på de sameierne som har bruksretten.
Kostnader forbundet med kollektiv kabel-tv og evt. internett fordeles

---

[d182_d182 | Side [1]]
stallasjoner kan føres gjennom bruksenheten hvis det ikke
er til vesentlig ulempe for sameieren. Sameieren skal gi adgang til bruksenheten for nødvendig
ettersyn og vedlikehold av installasjonene.
En sameier kan med styrets godkjenning gjennomføre tiltak på fellesarealene som er nødvendige
på grunn av sameierens eller husstandsmedlemmenes funksjonshemming. Godkjenning kan ikke
nektes uten saklig grunn.
§ 7
Felleskostnader
Kostnader med eiendommen som ikke knytter seg til den enkelte bruksenhet

---

[d182_d182 | Side [1]]
tt år.
§ 16
Ansvar utad
Overfor sameiets kreditorer er sameierne solidarisk ansvarlig. Den enkelte sameier hefter
imidlertid i regressomgangen ikke for en annen sameiers andel av sameiets forpliktelser.
Dersom en sameier således har måttet bære en større andel av felleskostnader enn han
etter sameieforholdet er forpliktet til, kan det overskytende kreves dekket av de som har
betalt for lite.
102

## Side 103

§ 17
Forsikring
Eiendommen skal til enhver tid holdes betryggende forsikret forsikringsselskap som

---

[d182_d182 | Side [1]]
n bestemt i § 7.
3. Det kreves tilslutning fra samtlige sameiere for vedtak om salg eller bortfeste av
hele eller deler av eiendommen.
Sameiermøtet kan ikke treffe beslutning som er egnet til å gi visse sameiere eller andre
en urimelig fordel på andre sameieres bekostning.
§ 16
Forretningsfører
Sameiet skal ha forretningsfører. Styret ansetter forretningsfører og andre funksjonærer i
samsvar med lov om eierseksjoner § 41.
§ 17
Forsikring
Sameiet er ansvarlig for at eiendommen til enhver tid holdes

---

[d182_d182 | Side [1]]
rer
myndighetene og kan ikke disponeres fritt.
NOTE: 2
INNKREVDE FELLESKOSTNADER
Felleskostnader - avdeling bolig 3 250 200
TV/Internett 579 264
Garasje 263 160
Felleskostnader -avdeling næring 74 376
MC-plass 13 256
SUM INNKREVDE FELLESKOSTNADER 4 180 256
NOTE: 3
ANDRE INNTEKTER
Nøkler 1 300
Skilt 127
Utleie 6 500
SUM ANDRE INNTEKTER 7 927
NOTE: 4
PERSONALKOSTNADER
Arbeidsgiveravgift -38 606
SUM PERSONALKOSTNADER -38 606
Det har verken vært ansatte eller lønnsutbetalinger i selskapet gjennom året.

---

[d182_d182 | Side [1]]
ert seksjon i sameiet som tilhører
sameierne i felleskap
• Andre rettslige disposisjoner over fast eiendom som går over vanlig forvaltning
• Samtykke til endring av formål for en eller flere bruksenheter fra boligformål til et annet
formål.
• Tiltak som har sammenheng med sameiernes bo- eller bruksinteresser og som går
utover vanlig forvaltning og vedlikehold, når tiltaket fører med seg økonomisk ansvar eller
utlegg for sameierne på mer enn fem prosent av de årlige fellesutgiftene.
2. Følgende beslutninger

---

[d182_d182 | Side [1]]

§ 10
Sameiets vedlikeholdsplikt
Sameiet skal holde bygninger og eiendommen for øvrig i forsvarlig stand så langt plikten ikke
ligger på sameierne.
Vedlikeholdsplikten for fellesarealer hvor det er gitt rett til eksklusiv bruk, og øvrige bestemmelser
hvor dette er angitt, ligger på de sameierne som har bruksretten.
Felles rør, ledninger, kanaler og andre felles installasjoner som går gjennom seksjonene, skal
sameiet holde ved like.
92

## Side 93

Sameiets vedlikeholdsplikt omfatter også utskifting av

---

[d182_d182 | Side [1]]
t på estimerte tall, det er tatt høyde for prisøkninger på drift og
vedlikehold i den grad det foreligger estimater.
Felleskostnader
Budsjettet danner grunnlaget for fastsettelsen av felleskostnader.
Budsjettet er basert på 4 % økning av felleskostnadene fra 01.01.2025.
For øvrig vises til de enkelte tallene i budsjettet.
Ved legg 1 11 av 20 Kommentarer til årsregnskap og budsjett - 7520.pdf
74

## Side 75

Bygdøy Allé 2
0257 Oslo
Postboks 1704 Vika
0121 Oslo
Uavhengig revisors beretning
Til årsmøtet i

---

[d182_d182 | Side [1]]
 dekke kostnader forbundet med innvendig drift og
vedlikehold av parkeringsarealet, samt kjøre- og adkomstarealer, porter, dører og tekniske
anlegg m.v , forholdsmessig andel av sameiets strøm, fjernvarme, forsikringskostnader og øvrige
driftskostnader som kan tilknyttes næringsseksjon nr 116 (parkering) og kjøre- og adkomstarealer
i garasjeanlegget, jfr § 21.
91

## Side 92

Næringsseksjon nr 117 (parkering) skal bla. dekke kostnader forbundet med innvendig drift og
vedlikehold av bodareal

---

[d182_d182 | Side [1]]
47 555 926
Vedlegg 3 14 av 20 Årsregnskap 2024 - 7520.pdf
77

## Side 78

JESSHEIM PANORAMA SAMEIE
ORG.NR. 918 902 848, KUNDENR. 7520
BALANSE
Note 2024 2023
EIENDELER
OMLØPSMIDLER
Restanser felleskostnader/kundefordringer 36 754 31 659
Forskuddsbetalte kostnader 628 465 5 945
Energiavregning 12 404 113 637 771
Driftskonto OBOS-banken 1 163 707 1 082 384
Sparekonto OBOS-banken 2 157 197 2 081 951
SUM OMLØPSMIDLER 4 390 236 3 839 710
SUM EIENDELER 4 390 236 3 839 710
EGENKAPITAL OG GJELD
EGENKAPITAL
Opptjent

---

[d182_d182 | Side [1]]
ie sørger for forsvarlig drift, vedlikehold og
administrasjon av garasjeanlegget med kjøre- adkomstarealer, skal de ideelle eierne av
næringsseksjon nr 116 (p-plasser) betale felleskostnader for p-plass, iht sin eierbrøk i seksjonen,
til Jessheim Panorama Sameie. Inntekter og kostnader vedr. næringsseksjon nr 116 (p-plasser)
og kjøre- og adkomstarealer i garasjeanlegget kan føres i et eget underregnskap under Jessheim
Panorama Sameies regnskap.
95

## Side 96

De ideelle eierne av næringsseksjon 116

---

[d182_d182 | Side [1]]
ER 4 390 236 3 839 710
EGENKAPITAL OG GJELD
EGENKAPITAL
Opptjent egenkapital 13 3 905 692 3 288 045
SUM EGENKAPITAL 3 905 692 3 288 045
GJELD
KORTSIKTIG GJELD
Forskuddsbetalte felleskostnader 131 009 47 962
Leverandørgjeld 334 461 486 792
Annen kortsiktig gjeld 14 19 074 16 912
SUM KORTSIKTIG GJELD 484 544 551 666
SUM EGENKAPITAL OG GJELD 4 390 236 3 839 710
Pantstillelse 0 0
Garantiansvar 0 0
Ullensaker, 19.03.2025
Styret i Jessheim Panorama Sameie
Anette Elstad/s/ Semming Bråthen/s/ Yvonne C. D.

---

[d182_d182 | Side [1]]
dustri.
Energikarakter: B Forbud mot
generende virksomhet. Best. om ledninger. Best. om
Energifarge: Grønn gjerder.
Flere bestemmelser.
Overført fra: Knr:3209 Gnr:135 Bnr:206
Oppvarming Gjelder denne registerenheten med flere
Boligen er oppvarmet med vannbåren gulvarme tilknyttet
fjernvarmeanlegg. Fordelerskap for vannbåren varme 14.11.1940 ‑ Dokumentnr: 1236 ‑ Rettigheter iflg. skjøte
25

## Side 26

OM EIENDOMMEN
Best. om bebyggelse. Forbud mot fabrikk/ industri. Org.nr: 980 489 698
Forbud mot

---

[d182_d182 | Side [1]]
Eiendommen har adkomst via o昀昀entlig veg eller gate.
Tilknytning vann
Eiendommen er 琀椀lkny琀琀et o昀昀entlig vannforsyning via private s琀椀kkledninger.
Tilknytning avløp
Eiendommen er 琀椀lkny琀琀et o昀昀entlig avløpsne琀琀 via private s琀椀kkledninger.
Regulering
Eiendommen ligger i et område regulert 琀椀l sentrumsformål, dvs. bolig, forretning og kontor.
Om tomten
Felles tomt for sameiet. Tomt opparbeidet med busker, diverse beplantning, plenområder, si琀琀egrupper, belysning og asfalterte internveier.
Selger opplyser om

---

[d182_d182 | Side [1]]
anse for naboer. Eiendommen er regulert til bolig/ kontor/ forr. i
reguleringsplan for «Jessheim Panorama» m/ best.
‑ Det er ikke tillatt å lufte dyr på sameiets eiendom. La vedtatt 06.10.2014.
ikke våre firbente venner gjøre fra seg på balkongene/ Avsatt i kommunedelplan for: Jessheim til:
terrassene. Dyret skal for øvrig ikke være til ulempe for sentrumsformål ‑ nåværende vedtatt 17.06.2025.
andre sameiere. Grenser inntil reguleringsplan for: «Manesjen, del av gnr.
‑ Det er ikke tillatt å legge ut mat

---

[d182_d182 | Side [1]]
 Det er derfor
begrensede undersøkelsesmuligheter utover det som Sameiets forsikringsselskap: If Skadeforsikring Nuf
følger av normal befaring. Tilstanden på skjulte løsninger
24

## Side 25

OM EIENDOMMEN
Polisenummer fellesforsikring: 1469796 plassert bak luke på vegg i bad.
Husdyr: Dyrehold kan tillates etter godkjennelse fra
styret. Søknader blir godkjent såfremt dyreholdet ikke Regulerings og arealplaner
medfører urimelig sjenanse for naboer. Eiendommen er regulert til bolig/ kontor/ forr.

---

[d182_d182 | Side [1]]
inger, se
oppgitte opplysninger, som boligeier er ansvarlig for. www.energimerking.no/beregninger
Registrering: Attest utstedt med enkel registrering.
Bygningskategori: Boligblokker
Bygningstype: Leilighet
Byggeår: 2017
Bygningsmateriale: Betong
BRA: 45
Ant. etg. med oppv. BRA: 1
Detaljert vegger: Nei
Detaljert vindu: Nei
Teknisk installasjon
Oppvarming: Fjernvarme
Ventilasjon: Balansert
58

## Side 59

Nabolagsprofil
Trondheimsvegen - Jessheim 98D - vurdert av 69 lokalkjente
Nabolaget spesielt anbefalt

---

[d182_d182 | Side [1]]
bruksareal Eksternt bruksareal Innglasset balkong
Etasje
(BRA-i) (BRA-e) (BRA-b)
Etasje Entré, bad, bod, soverom, stue/kjøkken
Underetasje Bod
Kommentar
Rom som ligger utenfor boenheten, men som eier har påvist og/eller opplyst at 琀椀lhører boenheten, er oppmålt og inkludert i BRA-e. Det er
ikke fremvist dokumentasjon på at rommet 琀椀lhører boenheten. Rom utenfor boenheten kan omdisponeres av bore琀琀slaget/sameiet og de琀琀e
kan påvirke boligens BRA.
Lovlighet
Byggetegninger
Det foreligger godkjente og

---

[d182_d182 | Side [1]]
se. Forbud mot fabrikk/ industri. Org.nr: 980 489 698
Forbud mot Rettigheter og plikter ved bygging, drift og vedlikehold av
generende virksomhet. Best. om ledninger. Best. om nettstasjon i bygg, 1.etg.
gjerder. Bestemmelse om adkomstrett
Flere bestemmelser. Bestemmelse om bebyggelse og beplantning
Overført fra: Knr:3209 Gnr:135 Bnr:206 Overført fra: Knr:3209 Gnr:135 Bnr:206
Gjelder denne registerenheten med flere Gjelder denne registerenheten med flere
10.09.1952 ‑ Dokumentnr: 2494 ‑ Bestemmelse om veg

---

[d182_d182 | Side [1]]
ann i sluk eller lignende?
Nei Ja
4 Kjenner du til feil eller om har vært utført arbeid/kontroll på vann/avløp?
Svar Nei
5 Kjenner du til om det er/har vært problemer med drenering, fuktinnsig, øvrig fukt eller fuktmerker i underetasje/kjeller?
Nei Ja
6 Kjenner du til om det er/har vært utettheter i terrasse/garasje/tak/fasade?
Nei Ja
7 Kjenner du til om det er/har vært problemer med ildsted/skorstein/pipe f.eks. dårlig trekk, sprekker, pålegg, fyringsforbud eller lignende?
Nei Ja
8 Kjenner du til om det

---

[d182_d182 | Side [1]]
for kravene, men kan ikke regne med å få unntak for krav som går på
bygningssakkyndig avdekker at en bolig ikke ser ut 琀椀l å være delt opp i brannceller helse og sikkerhet, for eksempel krav 琀椀l rømningsvei.
e琀琀er kravene i byggteknisk forskri昀琀 på befarings琀椀dspunktet, skal det opplyses om
de琀琀e. Bruksendring som krever godkjenning, og som ikke er søkt bruksendret,
er ulovlig. Kommunen kan e琀琀er plan- og bygningsloven kapi琀琀el 32
Reglene om bruksendring og brannceller kan være kompliserte. Søk videre

---

[d182_d182 | Side [1]]
side
Boligbygg med 昀氀ere boenheter
• Det foreligger godkjente og byggemeldte tegninger, som
stemmer med dagens bruk
Oppdragsnr.: 22461-1118 Befaringsdato: 12.03.2026 Side: 6 av 19
43

## Side 44

20
15
10
5
0
Vil du vite mer om 琀椀lstandsgrader? Se side 4.
Oppsummering av avvik
Vil du vite mer? Se på rommet eller bygningsdelen senere i
rapporten.
llatnA
Trondheimsvegen - Jessheim 98 D, 2050 JESSHEIM Rambøll Norge AS
Gnr 135 - Bnr 206 Vestvollveien 34 D
3209 ULLENSAKER 2019 SKEDSMOKORSET
SSaammmmeennddrraagg

---

[d182_d182 | Side [1]]
,eller hvis du endrer en bolig 琀椀l to
Den bygningssakkyndige kan avdekke eventuelle separate boliger.
bruksendringer og avvik i branncelleinndeling Rom for varig opphold har krav 琀椀l takhøyde, romstørrelse,rømningsvei
Den bygningssakkyndige ser på byggetegninger hvis de er 琀椀lgjengelige og de琀琀e er og lysforhold som må være oppfylt. Du kan søke kommunen om unntak
en del av oppdraget,og vurderer bruken av boligen opp mot tegningene. Hvis den for kravene, men kan ikke regne med å få unntak for krav som går

---

[d182_d182 | Side [1]]
heim 98D - vurdert av 69 lokalkjente
Nabolaget spesielt anbefalt for
Opplevd trygghet
Godt voksne Veldig trygt 76/100
Enslige
Kvalitet på skolene
Etablerere
Bra 65/100
Naboskapet
Offentlig transport Høflige 52/100
Jessheimkrysset 3 min
Linje 426, 438, 439 0.3 km
Aldersfordeling
Jessheim stasjon 7 min
Linje R13, R13x 0.6 km
Jessheim stasjon 7 min Buss, tog 0.6 km
Oslo Gardermoen 11 min
Skoler
Jessheim skole og ressurssenter (1-7 kl.) 8 min
490 elever, 21 klasser 0.6 km
Døli skole (1-7 kl.) 14 min
401

---

[d182_d182 | Side [1]]
r kjent med at dersom jeg har gitt ufullstendige, uriktige eller misvisende
opplysninger om eiendommen, vil forsikringsselskapet kunne søke hel eller delvis regress for sine utbetalinger eller redusere sitt ansvar helt
eller delvis, jfr. vilkår for boligselgerforsikring punkt 7.1 og forsikringsavtaleloven kapittel 4.
Jeg er orientert om mitt mulige ansvar som selger etter avhendingsloven, eventuelt etter kjøpsloven (aksjeboliger), og om forsikringsgiver sitt
boligselgerforsikringstilbud.
Jeg er klar over

---

[d182_d182 | Side [1]]
s som varig tilknyttet boligen, følger Slik normal bruksslitasje og behov for vedlikehold må
normalt med i handelen, med mindre det foreligger en kjøper påregne, og dette vil normalt ikke gi grunnlag for
særskilt avtale mellom partene om noe annet, jf. reklamasjon eller prisavslag.
avhendingsloven § 3‑5.
Avtalerettslig
En standard tilbehørsliste utarbeidet av Norges Partenes rettigheter og plikter reguleres av avtalen
Eiendomsmeglerforbund (NEF) følger salgsoppgaven, og mellom partene, og all tilgjengelig

---

[d182_d182 | Side [1]]
EF) følger salgsoppgaven, og mellom partene, og all tilgjengelig dokumentasjon som
gjelder som utgangspunkt for hva som inkluderes i salget forelå for kjøper før handelen ble inngått. I tillegg gjelder
– med mindre avvik er tydelig avtalt mellom kjøper og avhendingsloven. Det gjelder ulike avtalevilkår avhengig
selger. av om kjøper er forbrukerkjøper eller ikke, og dette er
nærmere forklart nedenfor.
Om informasjonsgrunnlaget
Opplysninger om boligens størrelse og utforming, både Budgivning og selgers

---

[d182_d182 | Side [1]]

som et forbrukerkjøp. Bud som har forbehold om konfidensialitet ("hemmelige
bud") vil ikke bli formidlet til selger. Alle interessenter
Ved slike kjøp selges eiendommen «som den er», og oppfordres til å inngi bud via eiendomsmegler.
selgers ansvar er begrenset til det som følger direkte av
avtalen, jf. avhendingsloven § 3‑9. I disse tilfellene Megler skal legge til rette for en forsvarlig avvikling av
fravikes § 3‑3 andre ledd, og eventuelle arealavvik budrunden. I forbrukerforhold (dvs. der selger

---

[d182_d182 | Side [1]]
onsteste
tidspunkt oppmålingen fant sted. eller etterprøve om de opplysninger som er gitt faktisk stemmer.
•Bruksareal (BRA) er det måleverdige arealet som er innenfor Det er selgers plikt at opplysninger om utført
omsluttede vegger målt i gulvhøyde (bruttoareal minus arealet arbeide/oppgradering som selger skulle ha vist eller må kjenne til
som opptas av yttervegger). I tillegg til gulvhøyde gjelder regler fremkommer. Selger har også lest igjennom utkast til rapporten å
om fri bredde for at arealet skal

---

[d182_d182 | Side [1]]
r om boligens størrelse og utforming, både Budgivning og selgers vurdering
innvendig og utvendig, bygger på informasjon hentet fra På grunn av ulike ansvarsforhold kan selger velge å
vedlagte tilstands‑ og boligsalgsrapport. Innholdet i prioritere bud fra ikke‑forbrukere, selv om budet er lavere
salgsoppgaven er basert på selgers informasjon, enn et forbrukerbud. Når kjøper ikke er forbruker, kan
fagkyndig vurdering, samt opplysninger fra offentlige selges ansvar begrenses ettersom boligen selges

---

[d182_d182 | Side [1]]
ler
Regelverk og generelle opplysninger eller egne rådgivere før de gir bud.
Boligen selges med det inventar og utstyr som i henhold
til gjeldende lover, forskrifter eller offentlige pålegg skal Slitasje og bruk
følge med eiendommen, jf. avhendingsloven § 3‑4. Det må også forventes at eiendommer som har vært i
Fastmonterte eller spesialtilpassede installasjoner og bruk, vil kunne ha tegn til slitasje og eventuelle skader.
innredning som anses som varig tilknyttet boligen, følger Slik normal bruksslitasje

---

[d182_d182 | Side [1]]
mmet i stand, kan
så langt det er nødvendig, å orientere selger, budgivere og
en budgiver kreve kopi av budjournalen i anonymisert
øvrige interessenter om bud og forbehold. Dersom bud
form.
inngis med en frist som åpenbart er for kort til at
megleren kan avvikle budrunden på en forsvarlig måte
som sikrer selger og interessenter et tilstrekkelig grunnlag
VIKTIGE AVTALERETTSLIGE FORHOLD:
1.Det eksisterer ingen angrerett ved salg/kjøp av fast 3.Selger står fritt til å forkaste eller akseptere ethvert
eiendom.

---

[d182_d182 | Side [1]]
er du til om det er/har vært sopp/råteskader/insekter/skadedyr i sameiet/laget/selskapet (fellesareal eller i andre boliger) som rotter, mus,
maur eller lignende?
Nei Ja
28 Kjenner du til om det er/har vært skjeggkre i sameiet/laget/selskapet (fellesareal eller i andre boliger)?
Nei Ja
Initialer selger: TL 3
76006240
:ecnerefer
tnemucoD
35

## Side 36

Tilleggskommentar
Jeg bekrefter at opplysningene er gitt etter beste skjønn. Jeg er kjent med at dersom jeg har gitt ufullstendige, uriktige eller

---

[d182_d182 | Side [1]]
luderer både vederlag og stipulerte utlegg.
kundetiltak og dette fører til at avtalen ikke kan
gjennomføres eller blir forsinket, er dette et mislighold fra Ved avbrutt oppdrag:
kjøpers side. Et vesentlig mislighold kan gi selger rett til å Dersom oppdraget sies opp eller utløper uten at salget
heve avtalen og til å gjennomføre dekningssalg for gjennomføres, har megler krav på rimelig vederlag for
30

## Side 31

OM EIENDOMMEN
medgått tid og for utført arbeid. Dette omfatter blant Overo AS ‑ leverandør av

---

[d182_d182 | Side [1]]
er mangler ved boligen de Dersom kjøper velger å kjøpe uten å ha sett
neste fem årene. Les mer om Boligkjøperforsikring i eiendommen, kan det ikke etter overtakelse reklameres
vedlagte materiell eller på https:/ / på forhold som burde ha vært oppdaget ved en ordinær
www.soderbergpartners.no/ eiendom/ boligkjoper/ gjennomgang.
Dersom det oppstår behov for ytterligere avklaringer,
Lovanvendelse oppfordres interessenter til å kontakte eiendomsmegler
Regelverk og generelle opplysninger eller egne rådgivere før

---

[d182_d182 | Side [1]]
tuelle arealavvik budrunden. I forbrukerforhold (dvs. der selger er
vurderes etter § 3‑8. forbruker) skal megleren ikke formidle bud med kortere
akseptfrist enn til kl. 12.00 første virkedag etter siste
Kjøperens plikt til å foreta grundige undersøkelser gjelder annonserte visning. Senere bud må ha en akseptfrist
også fullt ut for kjøpere som ikke omfattes av som er lang nok til at budet og eventuelle forbehold kan
forbrukerdefinisjonen. videreformidles til alle involverte parter slik at disse får tid
til

---

[d182_d182 | Side [1]]
ig måte, vil megler fraråde budet. løpende kundetiltak underveis i oppdraget, må
eiendomsmegler stanse gjennomføringen av
Eiendomsmegler skal så snart som mulig bekrefte transaksjonen. Selger vil i et slikt tilfelle ha misligholdt
skriftlig overfor budgivere at budene deres er mottatt, og sine forpliktelser, og kjøper vil kunne ha et krav mot
vil uoppfordret gi sin vurdering av det enkelte bud overfor selger etter avhendingsloven.
selgeren.
Hvis kundetiltak ikke lar seg gjennomføre, vil Emera
Etter at

---

[d182_d182 | Side [1]]
å ha en mangel dersom den ikke Alle bud skal inngi skriftlig til eiendomsmegler. Kravet til
oppfyller kravene som følger av avtalen, eller ved brudd skriftlighet gjelder også ved forhøyelse av bud, motbud
på bestemmelser i avhendingsloven §§ 3‑2 til 3‑8. Det og selgers aksept eller avslag. Før et bud kan formidles til
samme gjelder hvis eiendommen ikke samsvarer med selger må megler innhente gyldig legitimasjon og
det som med rimelighet kunne forventes ut fra blant signatur fra budgiver. Kravet til

---

[d182_d182 | Side [1]]
tt. For øvrig vil megler,
et bud med forbehold bli akseptert før forbeholdet er på forespørsel fra andre, opplyse om aktuelle bud på
avklart. Konferer gjerne med megler før bud inngis. eiendommen, herunder relevante forbehold.
7.Kopi av budjournal skal gis til kjøper og selger uten
3.Megler skal legge til rette for en forsvarlig avvikling av
ugrunnet opphold etter at handel er kommet i stand.
budrunden. I forbrukerforhold (dvs. der selger er
Dersom det er viktig for budgiver å bevare sin

---

[d182_d182 | Side [1]]
gjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter, begrenset til siste 12 måneder før overtakelse.
Forøvrig oppfordrer selger potensielle kjøpere til å undersøke eiendommen grundig, jf avhendigsloven § 3-10 og kjøpsloven § 20
(aksjeboliger).
Gyldig forsikring forutsetter at det for helårs- og fritidsbolig foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere
bolighandel).
Jeg ønsker boligselgerforsikring, og bekrefter å ha mottatt og lest

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "Ukjent tilstand på membran og skjulte konstruksjoner på bad – potensielle skjulte fuktskader",
      "evidence": [
        "Tilstanden på membran og skjulte konstruksjoner er ukjent. Eventuelle feil eller mangler kan ikke utelukkes.",
        "Tilstanden på skjulte konstruksjoner, herunder membran og sluktilkobling, er ukjent.",
        "Vurderingen er basert på tilgjengelige visuelle flater. Det er utført fuktsøk med egnet fuktindikator uten å påvise unormale utslag. Skjulte forhold kan ikke verifiseres.",
        "Bygningsdeler som ikke har blitt undersøkt (TGIU): Våtrom > Etasje > Bad > Sluk, membran og tilliggende konstruksjoner"
      ],
      "source_documents": [
        "d182_d182"
      ],
      "source_pages": [
        46,
        47
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R2",
      "description": "Ingen radonmåling er utført – kjøper eksponeres for ukjent radonrisiko",
      "evidence": [
        "Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid."
      ],
      "source_documents": [
        "d182_d182"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R3",
      "description": "Bod (BRA-e) mangler dokumentasjon på tilhørighet til boenheten – kan omdisponeres av sameiet",
      "evidence": [
        "Det er ikke fremvist dokumentasjon på at rommet tilhører boenheten. Rom utenfor boenheten kan omdisponeres av borettslaget/sameiet og dette kan påvirke boligens BRA."
      ],
      "source_documents": [
        "d182_d182"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R4",
      "description": "Legalpant – sameiet og kommunen har panterett med prioritet foran tinglyste lån, noe som kan påvirke kjøpers finansiering og risiko",
      "evidence": [
        "Legalpant er pant som ikke vises i grunnboksutskriften, og har prioritet foran tinglyste lån, for eksempel banklån på seksjonen.",
        "Kommunen har legalpant som sikkerhet for betaling av kommunale avgifter og eventuell eiendomsskatt.",
        "Sameiet legal panterett i den enkelte eierseksjon, begrenset til inntil 2 ganger folketrygdens grunnbeløp.",
        "Legalpant til kommunen har høyere prioritet enn legalpant til sameiet."
      ],
      "source_documents": [
        "d182_d182"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R5",
      "description": "Bruksrett for Jessheim Panorama AS til boder – ekstern aktør har tinglyst bruksrett over deler av eiendommen",
      "evidence": [
        "24.05.2017 – Dokumentnr: 549869 – Bruksrett. Rettighetshaver: Jessheim Panorama AS, Org.nr: 913 180 844. Bestemmelse om bruks- og adkomstrett til boder. Gjelder denne registerenheten med flere."
      ],
      "source_documents": [
        "d182_d182"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.78
    },
    {
      "risk_id": "R6",
      "description": "Ansvar for overvann fra fylkesvei – eiendommen er bundet av erklæring som ikke kan slettes uten samtykke fra Akershus fylkeskommune",
      "evidence": [
        "12.10.2016 – Dokumentnr: 934974 – Erklæring/avtale. Bestemmelse om ansvar for overvann fra fv.454.01. Kan ikke slettes uten samtykke fra Akershus fylkeskommune."
      ],
      "source_documents": [
        "d182_d182"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.75
    },
    {
      "risk_id": "R7",
      "description": "Elektriske kraftlinjer på eiendommen – tinglyst heftelse som kan begrense bruk og utbygging",
      "evidence": [
        "18.02.1982 – Dokumentnr: 1467 – Skjønn. Elektriske kraftlinjer. Sak 13/81 B."
      ],
      "source_documents": [
        "d182_d182"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.7
    },
    {
      "risk_id": "R8",
      "description": "Eierskap begrenset til maks to seksjoner per eier – kan begrense investorers kjøpsmuligheter",
      "evidence": [
        "Det informeres om at ingen kan eie mer enn to boligseksjoner i sameiet, i henhold til eierseksjonsloven § 23. Seksjoner som eies av nærstående eller gjennom et firma regnes også med."
      ],
      "source_documents": [
        "d182_d182"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R9",
      "description": "Felleskostnader budsjettert med 4 % økning fra 2025 – kjøper må påregne økte løpende kostnader",
      "evidence": [
        "Budsjettet er basert på 4 % økning av felleskostnadene fra 01.01.2025.",
        "Innkrevde felleskostnader 2024: 4 180 256, Budsjett 2025: 4 315 000"
      ],
      "source_documents": [
        "d182_d182"
      ],
      "source_pages": [
        74,
        77
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R10",
      "description": "Solidarisk ansvar overfor sameiets kreditorer – kjøper kan bli holdt ansvarlig for andre sameieres mislighold",
      "evidence": [
        "Overfor sameiets kreditorer er sameierne solidarisk ansvarlig. Den enkelte sameier hefter imidlertid i regressomgangen ikke for en annen sameiers andel av sameiets forpliktelser.",
        "I henhold til eierseksjonsloven § 31 er sameierne ansvarlige overfor sameiets kreditorer i forhold til sin sameiebrøk."
      ],
      "source_documents": [
        "d182_d182"
      ],
      "source_pages": [
        102
      ],
      "confidence": 0.78
    },
    {
      "risk_id": "R11",
      "description": "Eiendommen selges 'som den er' ved ikke-forbrukerkjøp – selgers ansvar er vesentlig begrenset",
      "evidence": [
        "Ved slike kjøp selges eiendommen «som den er», og selgers ansvar er begrenset til det som følger direkte av avtalen, jf. avhendingsloven § 3-9.",
        "På grunn av ulike ansvarsforhold kan selger velge å prioritere bud fra ikke-forbrukere, selv om budet er lavere enn et forbrukerbud."
      ],
      "source_documents": [
        "d182_d182"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R12",
      "description": "Reguleringsplan åpner for sentrumsformål (bolig, forretning og kontor) – fremtidig næringsutvikling i nabolaget kan påvirke bomiljøet",
      "evidence": [
        "Eiendommen ligger i et område regulert til sentrumsformål, dvs. bolig, forretning og kontor.",
        "Eiendommen er regulert til bolig/kontor/forr. i reguleringsplan for «Jessheim Panorama» m/best. vedtatt 06.10.2014.",
        "Avsatt i kommunedelplan for: Jessheim til: sentrumsformål – nåværende vedtatt 17.06.2025."
      ],
      "source_documents": [
        "d182_d182"
      ],
      "source_pages": [
        1,
        25
      ],
      "confidence": 0.72
    },
    {
      "risk_id": "R13",
      "description": "Restanser på felleskostnader i sameiet – indikerer at enkelte sameiere ikke betaler sine forpliktelser",
      "evidence": [
        "Restanser felleskostnader/kundefordringer 36 754 (2024) mot 31 659 (2023) – økning på ca. 16 % år over år."
      ],
      "source_documents": [
        "d182_d182"
      ],
      "source_pages": [
        78
      ],
      "confidence": 0.65
    },
    {
      "risk_id": "R14",
      "description": "Skjulte konstruksjoner (vann og avløp) uten dokumentasjon – kvalitet og alder er kun vurdert, ikke verifisert",
      "evidence": [
        "For skjulte konstruksjoner, som vann og avløp uten dokumentasjon, er kvalitet og alder vurdert.",
        "Kjenner du til feil eller om har vært utført arbeid/kontroll på vann/avløp? Svar Nei"
      ],
      "source_documents": [
        "d182_d182"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.72
    },
    {
      "risk_id": "R15",
      "description": "Ingen angrerett ved kjøp av fast eiendom – kjøper er bundet fra aksept av bud",
      "evidence": [
        "Det eksisterer ingen angrerett ved salg/kjøp av fast eiendom."
      ],
      "source_documents": [
        "d182_d182"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R16",
      "description": "Nettstasjon i bygg (1. etg.) – tinglyst rettighet for ekstern aktør med rettigheter og plikter ved bygging, drift og vedlikehold",
      "evidence": [
        "Rettigheter og plikter ved bygging, drift og vedlikehold av nettstasjon i bygg, 1.etg. Bestemmelse om adkomstrett. Bestemmelse om bebyggelse og beplantning. Org.nr: 980 489 698"
      ],
      "source_documents": [
        "d182_d182"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.7
    },
    {
      "risk_id": "R17",
      "description": "Leverandørgjeld i sameiet redusert men fortsatt betydelig – 334 461 kr i 2024 mot 486 792 kr i 2023",
      "evidence": [
        "Leverandørgjeld 334 461 (2024) mot 486 792 (2023). SUM KORTSIKTIG GJELD 484 544 (2024) mot 551 666 (2023)."
      ],
      "source_documents": [
        "d182_d182"
      ],
      "source_pages": [
        78
      ],
      "confidence": 0.6
    }
  ],
  "re_retrieval_queries": [
    "Hva er omfanget og konsekvensene av bruksretten til Jessheim Panorama AS for boder?",
    "Er det dokumentert hvilke kraftlinjer som er tinglyst og hvilke begrensninger dette medfører for seksjonen?",
    "Hva er sameiets totale fellesgjeld og eventuelle planlagte større vedlikeholdsprosjekter?",
    "Er det utstedt ferdigattest eller midlertidig brukstillatelse for bygget fra 2017?",
    "Hva er størrelsen på legalpantet i kroner (2G) og hvilken risiko utgjør dette konkret for kjøper?",
    "Er det vedtak eller forslag om økte felleskostnader utover 4% budsjettet for 2025?"
  ],
  "reasoning": "\nGjennomgangen av dokumentchunkene bekrefter i stor grad de identifiserte risikoene, men med noen justeringer:\n\n**Oppjusterte risikoer:**\n- R1 (membran/bad): Oppjustert til 0.95 da TGIU-merking av bad eksplisitt bekreftes i tilstandsrapporten, noe som er en sterkere indikasjon enn opprinnelig vurdert.\n- R3 (bod BRA-e): Oppjustert til 0.92 da dokumentasjonsmangler er eksplisitt beskrevet i arealoppstillingen.\n- R9 (felleskostnader): Lett oppjustert til 0.82 da regnskapstall bekrefter budsjettveksten.\n\n**Nedjusterte risikoer:**\n- R5 (bruksrett Jessheim Panorama AS): Nedjustert til 0.78 – bruksretten gjelder boder og er sannsynligvis knyttet til sameiets egen forvaltning, men omfanget er uklart.\n- R6 (overvann): Nedjustert til 0.75 – heftelsen er reell men den praktiske konsekvensen for en boligeier i et sameie er begrenset.\n- R7 (kraftlinjer): Nedjustert til 0.70 – heftelsen er fra 1982 og det er uklart om den faktisk berører den aktuelle seksjonen direkte eller kun fellesarealer.\n- R13 (restanser): Nedjustert til 0.65 – restansebeløpet (36 754 kr) er relativt beskjedent sett opp mot sameiets totale inntekter (4,2 mill kr), og utgjør under 1% av felleskostnadene.\n- R17 (leverandørgjeld): Ny risiko identifisert med lav confidence 0.60 da gjelden er synkende og ikke nødvendigvis problematisk.\n\n**Ny risiko identifisert:**\n- R16 (nettstasjon i bygg): Tinglyst rettighet for ekstern aktør (org.nr 980 489 698) med adkomstrett og rettigheter knyttet til nettstasjon i 1. etg. Dette er en reell heftelse som ikke var med i den opprinnelige listen.\n\n**Risikoer som mangler tilstrekkelig evidens for å fjerne:**\n- Ingen risikoer fjernes, men R7 og R13 har svakest evidensgrunnlag for praktisk konsekvens.\n\n**Manglende risikoer som burde vurderes:**\n- Ferdigattest/brukstillatelse: Bygget er fra 2017, men det er ikke eksplisitt bekreftet at ferdigattest foreligger – kun at godkjente byggetegninger stemmer med bruk.\n- Sameiets totale økonomi og eventuelle planlagte rehabiliteringsprosjekter er ikke tilstrekkelig belyst.\n- Størrelsen på 2G (legalpant) i konkrete kroner bør avklares for kjøper.\n"
}

## Raw Response
```json
{
  "id": "msg_015sSgpLD3eDr5Cmaradae4r",
  "container": null,
  "content": [
    {
      "id": "toolu_01UdSgRZkgJozwN3DVi2UNTS",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "Ukjent tilstand på membran og skjulte konstruksjoner på bad – potensielle skjulte fuktskader",
            "evidence": [
              "Tilstanden på membran og skjulte konstruksjoner er ukjent. Eventuelle feil eller mangler kan ikke utelukkes.",
              "Tilstanden på skjulte konstruksjoner, herunder membran og sluktilkobling, er ukjent.",
              "Vurderingen er basert på tilgjengelige visuelle flater. Det er utført fuktsøk med egnet fuktindikator uten å påvise unormale utslag. Skjulte forhold kan ikke verifiseres.",
              "Bygningsdeler som ikke har blitt undersøkt (TGIU): Våtrom > Etasje > Bad > Sluk, membran og tilliggende konstruksjoner"
            ],
            "source_documents": [
              "d182_d182"
            ],
            "source_pages": [
              46,
              47
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R2",
            "description": "Ingen radonmåling er utført – kjøper eksponeres for ukjent radonrisiko",
            "evidence": [
              "Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid."
            ],
            "source_documents": [
              "d182_d182"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R3",
            "description": "Bod (BRA-e) mangler dokumentasjon på tilhørighet til boenheten – kan omdisponeres av sameiet",
            "evidence": [
              "Det er ikke fremvist dokumentasjon på at rommet tilhører boenheten. Rom utenfor boenheten kan omdisponeres av borettslaget/sameiet og dette kan påvirke boligens BRA."
            ],
            "source_documents": [
              "d182_d182"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R4",
            "description": "Legalpant – sameiet og kommunen har panterett med prioritet foran tinglyste lån, noe som kan påvirke kjøpers finansiering og risiko",
            "evidence": [
              "Legalpant er pant som ikke vises i grunnboksutskriften, og har prioritet foran tinglyste lån, for eksempel banklån på seksjonen.",
              "Kommunen har legalpant som sikkerhet for betaling av kommunale avgifter og eventuell eiendomsskatt.",
              "Sameiet legal panterett i den enkelte eierseksjon, begrenset til inntil 2 ganger folketrygdens grunnbeløp.",
              "Legalpant til kommunen har høyere prioritet enn legalpant til sameiet."
            ],
            "source_documents": [
              "d182_d182"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R5",
            "description": "Bruksrett for Jessheim Panorama AS til boder – ekstern aktør har tinglyst bruksrett over deler av eiendommen",
            "evidence": [
              "24.05.2017 – Dokumentnr: 549869 – Bruksrett. Rettighetshaver: Jessheim Panorama AS, Org.nr: 913 180 844. Bestemmelse om bruks- og adkomstrett til boder. Gjelder denne registerenheten med flere."
            ],
            "source_documents": [
              "d182_d182"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.78
          },
          {
            "risk_id": "R6",
            "description": "Ansvar for overvann fra fylkesvei – eiendommen er bundet av erklæring som ikke kan slettes uten samtykke fra Akershus fylkeskommune",
            "evidence": [
              "12.10.2016 – Dokumentnr: 934974 – Erklæring/avtale. Bestemmelse om ansvar for overvann fra fv.454.01. Kan ikke slettes uten samtykke fra Akershus fylkeskommune."
            ],
            "source_documents": [
              "d182_d182"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.75
          },
          {
            "risk_id": "R7",
            "description": "Elektriske kraftlinjer på eiendommen – tinglyst heftelse som kan begrense bruk og utbygging",
            "evidence": [
              "18.02.1982 – Dokumentnr: 1467 – Skjønn. Elektriske kraftlinjer. Sak 13/81 B."
            ],
            "source_documents": [
              "d182_d182"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.7
          },
          {
            "risk_id": "R8",
            "description": "Eierskap begrenset til maks to seksjoner per eier – kan begrense investorers kjøpsmuligheter",
            "evidence": [
              "Det informeres om at ingen kan eie mer enn to boligseksjoner i sameiet, i henhold til eierseksjonsloven § 23. Seksjoner som eies av nærstående eller gjennom et firma regnes også med."
            ],
            "source_documents": [
              "d182_d182"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R9",
            "description": "Felleskostnader budsjettert med 4 % økning fra 2025 – kjøper må påregne økte løpende kostnader",
            "evidence": [
              "Budsjettet er basert på 4 % økning av felleskostnadene fra 01.01.2025.",
              "Innkrevde felleskostnader 2024: 4 180 256, Budsjett 2025: 4 315 000"
            ],
            "source_documents": [
              "d182_d182"
            ],
            "source_pages": [
              74,
              77
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R10",
            "description": "Solidarisk ansvar overfor sameiets kreditorer – kjøper kan bli holdt ansvarlig for andre sameieres mislighold",
            "evidence": [
              "Overfor sameiets kreditorer er sameierne solidarisk ansvarlig. Den enkelte sameier hefter imidlertid i regressomgangen ikke for en annen sameiers andel av sameiets forpliktelser.",
              "I henhold til eierseksjonsloven § 31 er sameierne ansvarlige overfor sameiets kreditorer i forhold til sin sameiebrøk."
            ],
            "source_documents": [
              "d182_d182"
            ],
            "source_pages": [
              102
            ],
            "confidence": 0.78
          },
          {
            "risk_id": "R11",
            "description": "Eiendommen selges 'som den er' ved ikke-forbrukerkjøp – selgers ansvar er vesentlig begrenset",
            "evidence": [
              "Ved slike kjøp selges eiendommen «som den er», og selgers ansvar er begrenset til det som følger direkte av avtalen, jf. avhendingsloven § 3-9.",
              "På grunn av ulike ansvarsforhold kan selger velge å prioritere bud fra ikke-forbrukere, selv om budet er lavere enn et forbrukerbud."
            ],
            "source_documents": [
              "d182_d182"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R12",
            "description": "Reguleringsplan åpner for sentrumsformål (bolig, forretning og kontor) – fremtidig næringsutvikling i nabolaget kan påvirke bomiljøet",
            "evidence": [
              "Eiendommen ligger i et område regulert til sentrumsformål, dvs. bolig, forretning og kontor.",
              "Eiendommen er regulert til bolig/kontor/forr. i reguleringsplan for «Jessheim Panorama» m/best. vedtatt 06.10.2014.",
              "Avsatt i kommunedelplan for: Jessheim til: sentrumsformål – nåværende vedtatt 17.06.2025."
            ],
            "source_documents": [
              "d182_d182"
            ],
            "source_pages": [
              1,
              25
            ],
            "confidence": 0.72
          },
          {
            "risk_id": "R13",
            "description": "Restanser på felleskostnader i sameiet – indikerer at enkelte sameiere ikke betaler sine forpliktelser",
            "evidence": [
              "Restanser felleskostnader/kundefordringer 36 754 (2024) mot 31 659 (2023) – økning på ca. 16 % år over år."
            ],
            "source_documents": [
              "d182_d182"
            ],
            "source_pages": [
              78
            ],
            "confidence": 0.65
          },
          {
            "risk_id": "R14",
            "description": "Skjulte konstruksjoner (vann og avløp) uten dokumentasjon – kvalitet og alder er kun vurdert, ikke verifisert",
            "evidence": [
              "For skjulte konstruksjoner, som vann og avløp uten dokumentasjon, er kvalitet og alder vurdert.",
              "Kjenner du til feil eller om har vært utført arbeid/kontroll på vann/avløp? Svar Nei"
            ],
            "source_documents": [
              "d182_d182"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.72
          },
          {
            "risk_id": "R15",
            "description": "Ingen angrerett ved kjøp av fast eiendom – kjøper er bundet fra aksept av bud",
            "evidence": [
              "Det eksisterer ingen angrerett ved salg/kjøp av fast eiendom."
            ],
            "source_documents": [
              "d182_d182"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R16",
            "description": "Nettstasjon i bygg (1. etg.) – tinglyst rettighet for ekstern aktør med rettigheter og plikter ved bygging, drift og vedlikehold",
            "evidence": [
              "Rettigheter og plikter ved bygging, drift og vedlikehold av nettstasjon i bygg, 1.etg. Bestemmelse om adkomstrett. Bestemmelse om bebyggelse og beplantning. Org.nr: 980 489 698"
            ],
            "source_documents": [
              "d182_d182"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.7
          },
          {
            "risk_id": "R17",
            "description": "Leverandørgjeld i sameiet redusert men fortsatt betydelig – 334 461 kr i 2024 mot 486 792 kr i 2023",
            "evidence": [
              "Leverandørgjeld 334 461 (2024) mot 486 792 (2023). SUM KORTSIKTIG GJELD 484 544 (2024) mot 551 666 (2023)."
            ],
            "source_documents": [
              "d182_d182"
            ],
            "source_pages": [
              78
            ],
            "confidence": 0.6
          }
        ],
        "re_retrieval_queries": [
          "Hva er omfanget og konsekvensene av bruksretten til Jessheim Panorama AS for boder?",
          "Er det dokumentert hvilke kraftlinjer som er tinglyst og hvilke begrensninger dette medfører for seksjonen?",
          "Hva er sameiets totale fellesgjeld og eventuelle planlagte større vedlikeholdsprosjekter?",
          "Er det utstedt ferdigattest eller midlertidig brukstillatelse for bygget fra 2017?",
          "Hva er størrelsen på legalpantet i kroner (2G) og hvilken risiko utgjør dette konkret for kjøper?",
          "Er det vedtak eller forslag om økte felleskostnader utover 4% budsjettet for 2025?"
        ],
        "reasoning": "\nGjennomgangen av dokumentchunkene bekrefter i stor grad de identifiserte risikoene, men med noen justeringer:\n\n**Oppjusterte risikoer:**\n- R1 (membran/bad): Oppjustert til 0.95 da TGIU-merking av bad eksplisitt bekreftes i tilstandsrapporten, noe som er en sterkere indikasjon enn opprinnelig vurdert.\n- R3 (bod BRA-e): Oppjustert til 0.92 da dokumentasjonsmangler er eksplisitt beskrevet i arealoppstillingen.\n- R9 (felleskostnader): Lett oppjustert til 0.82 da regnskapstall bekrefter budsjettveksten.\n\n**Nedjusterte risikoer:**\n- R5 (bruksrett Jessheim Panorama AS): Nedjustert til 0.78 – bruksretten gjelder boder og er sannsynligvis knyttet til sameiets egen forvaltning, men omfanget er uklart.\n- R6 (overvann): Nedjustert til 0.75 – heftelsen er reell men den praktiske konsekvensen for en boligeier i et sameie er begrenset.\n- R7 (kraftlinjer): Nedjustert til 0.70 – heftelsen er fra 1982 og det er uklart om den faktisk berører den aktuelle seksjonen direkte eller kun fellesarealer.\n- R13 (restanser): Nedjustert til 0.65 – restansebeløpet (36 754 kr) er relativt beskjedent sett opp mot sameiets totale inntekter (4,2 mill kr), og utgjør under 1% av felleskostnadene.\n- R17 (leverandørgjeld): Ny risiko identifisert med lav confidence 0.60 da gjelden er synkende og ikke nødvendigvis problematisk.\n\n**Ny risiko identifisert:**\n- R16 (nettstasjon i bygg): Tinglyst rettighet for ekstern aktør (org.nr 980 489 698) med adkomstrett og rettigheter knyttet til nettstasjon i 1. etg. Dette er en reell heftelse som ikke var med i den opprinnelige listen.\n\n**Risikoer som mangler tilstrekkelig evidens for å fjerne:**\n- Ingen risikoer fjernes, men R7 og R13 har svakest evidensgrunnlag for praktisk konsekvens.\n\n**Manglende risikoer som burde vurderes:**\n- Ferdigattest/brukstillatelse: Bygget er fra 2017, men det er ikke eksplisitt bekreftet at ferdigattest foreligger – kun at godkjente byggetegninger stemmer med bruk.\n- Sameiets totale økonomi og eventuelle planlagte rehabiliteringsprosjekter er ikke tilstrekkelig belyst.\n- Størrelsen på 2G (legalpant) i konkrete kroner bør avklares for kjøper.\n"
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
    "input_tokens": 21287,
    "output_tokens": 4191,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
