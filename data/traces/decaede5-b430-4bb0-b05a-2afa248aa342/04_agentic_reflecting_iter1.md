# Trace: agentic_reflecting_iter1
- **Run ID:** decaede5-b430-4bb0-b05a-2afa248aa342
- **Tidspunkt:** 2026-03-25T22:38:57.737729+00:00
- **Varighet:** 96.07s
- **Input tokens:** 20902
- **Output tokens:** 5101

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
Risiko 1: Salg av dødsbo med begrenset kunnskap om eiendommen: Selger (arvingene) har ikke bebodd eiendommen og mangler spesifikk kunnskap om feil og mangler. Dette øker risikoen for skjulte feil som ikke er avdekket eller opplyst om.
  Confidence: 0.95
  Evidens: Eiendommen selges som et dødsbo og det er ukjent om det foreligger samsvarserklæring.; Selger har ikke bebodd eiendommen og har derfor ikke spesifikk kunnskap om den. Det kan derfor være skader og andre forhold ved eiendommen som ikke er spesifikt opplyst.; Arvingene har begrenset kjennskap til eiendommen, og de er derfor ikke kjent med feil eller mangler utover det som fremkommer av salgsmaterialet.; Hjemmelshavere: Marianne Åsaune (død). Tilstede ved inspeksjon: Nei; Er selgers egenerklæring fremlagt og gjennomgått av bygningssakkyndig? Nei

Risiko 2: Manglende samsvarserklæring for elektriske arbeider: Det er ukjent om det foreligger samsvarserklæring for elektriske arbeider utført etter 01.01.1999, noe som kan indikere ulovlig eller ufaglært elektrisk arbeid.
  Confidence: 0.88
  Evidens: Er det manglende samsvarserklæring på arbeider utført etter 01.01.1999? Ukjent; Eiendommen selges som et dødsbo og det er ukjent om det forefinnes samsvarserklæring.; Har eier opplyst om arbeider utført etter opprinnelig byggeår? Ukjent

Risiko 3: TG2 på etasjeskille og gulv på grunn: Det er registrert stedvis slitasje på parkettgulvet, blant annet ved vindu på soverom. Dette kan medføre behov for overflatebehandling eller utskiftning.
  Confidence: 0.85
  Evidens: Bygningsdeler med TG2 – Etasjeskille og gulv på grunn: Tilstandsgrad 2 settes med bakgrunn i at det er registrert stedvis slitasje på parkettgulvet.; Dette gjelder blant annet ved vindu på soverom som trolig stammer fra at vinduet har stått i lufteposisjon.; Eventuelle tiltak vil være avhengig av personlig preferanse, men overflatebehandling og/eller utskiftninger er påregnelig.

Risiko 4: Bygningsdeler underlagt sameiets ansvarsområde er ikke vurdert i tilstandsrapporten: Sentrale konstruksjoner som yttervegger, tak, drenering, grunnmur og fundamenter er ikke inspisert, noe som gir et ufullstendig bilde av boligens tekniske tilstand.
  Confidence: 0.9
  Evidens: Det er ikke foretatt tilstandsvurdering av bygningsdeler som er underlagt sameiets ansvarsområde. Det gjelder blant annet yttervegger, takkonstruksjon, taktekking, drenering, grunnmur, grunn/fundamenter, felles trapper, felles kjeller, og felles loft.

Risiko 5: Pågående og fremtidige reguleringsplaner i nærområdet: Det er igangsatt planleggingsarbeid som berører eiendommen, herunder planer for Lade og Leangen samt Leangenområdet. Dette kan medføre endringer i nærområdet som påvirker boligens verdi og bomiljø.
  Confidence: 0.82
  Evidens: Er det igangsatt planleggingsarbeid på et område som inkluderer/berører eiendommen? Ja; 5001 k20110088 Lade og Leangen; 5001 r20180055 Planprogram Leangenområdet med Tungavegen 1, Leangen idrettsområde og deler av Travbanevegen og Gildheimsvegen; Hensikten med planarbeidet er å fastsette nye rammer for detaljplanlegging innenfor utbyggingsområdene på Lade og Leangen.

Risiko 6: Eiendommen er regulert til flere formål inkludert restriksjonsområde flyplass og midlertidig trafikkområde: Deler av eiendommens reguleringsplan inkluderer restriksjonsområde flyplass og midlertidig trafikkområde, noe som kan medføre begrensninger på bruk og fremtidig utvikling.
  Confidence: 0.78
  Evidens: Eiendommen er regulert til bolig/forretning/kontor, felles gårdsplass, forretning/kontor, midlertidig trafikkområde og restriksjonsområde flyplass.; 5001 r1170h Thoning Owesens gate 29A og 31, KBS kjøpesenter (18.2.2010) Restriksjonsområde flyplass 4135.53m2; 5001 r1170h Thoning Owesens gate 29A og 31, KBS kjøpesenter (18.2.2010) Midlertidig trafikkområde 1262.76m2

Risiko 7: Eiendommen er i kommuneplanens arealdel avsatt til fremtidig sentrumsformål og turvegtrasé: Denne arealstatusen kan innebære fremtidige endringer i nærområdet som påvirker bomiljø, støynivå og tilgjengelighet.
  Confidence: 0.75
  Evidens: Eiendommen er i kommuneplanens arealdel avsatt til byggesone 1, sentrumsformål (framtidig) og turvegtrase (nåværende).; Sentrumsformål - Framtidig Kommuneplanens arealdel 2022-2034 (27.3.2025); Turvegtrasè - Nåværende Kommuneplanens arealdel 2022-2034 (27.3.2025)

Risiko 8: Ingen radonmåling er utført: Selger har ikke utført radonmåling, noe som innebærer at kjøper ikke har informasjon om eventuell radoneksponering i boligen.
  Confidence: 0.72
  Evidens: Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid.

Risiko 9: Sameiet mangler sikringsordning: Sameiet har ingen sikringsordning, noe som innebærer at kjøper ikke er beskyttet mot tap dersom andre seksjonseiere misligholder sine fellesforpliktelser.
  Confidence: 0.8
  Evidens: Sameiet har ikke sikringsordning.

Risiko 10: Risiko for økning i felleskostnader: Det tas eksplisitt forbehold om at felleskostnader kan øke som følge av prisstigning og renteøkning. Felleskostnadene er allerede på kr 4 624 per måned.
  Confidence: 0.78
  Evidens: På grunn av prisstigning og renteøkning tas det forbehold om at felleskostnader kan øke.; Felleskostnader kr 4 624,‑ pr. mnd; vesentlig større enn forutsatt i a-kontobeløp.

Risiko 11: Endring av boligens planløsning uten søknad: Tidligere innglasset stue er åpnet mot stuen ved fjerning av glasskyvedør. Selv om tiltaket er vurdert som ikke søknadspliktig, er dette en endring fra godkjente tegninger som kan skape usikkerhet.
  Confidence: 0.6
  Evidens: Megler har mottatt tegninger fra kommunen datert 2011. Disse samsvarer med dagens bruk av boligen, med unntak av at tidligere innglasset stue er åpnet mot stuen ved fjerning av glasskyvedør. Tiltaket er ikke søknadspliktig.

Risiko 12: Tinglyste heftelser og eldre bestemmelser på eiendommen: Det er tinglyst flere eldre heftelser og bestemmelser på eiendommen, herunder bestemmelser om bebyggelse fra 1981 og 1982, som kan påvirke bruken av eiendommen.
  Confidence: 0.65
  Evidens: 14.12.1982 – Dokumentnr: 20157 – Bestemmelse om bebyggelse; 06.12.1982 – Dokumentnr: 19645 – Bestemmelse om bebyggelse; 12.08.1981 – Dokumentnr: 12002 – Bestemmelse om gjerde; 26.06.1984 – Dokumentnr: 11798 – Erklæring/avtale Midlertidig

Dokumentkontekst:
[d185_d185 | Side [1]]
4 Trondheim 2 av 14
51

## Side 52

2. Om rapporten
Om rapporten Tilstandsrapporten er utarbeidet i henhold til forskrift til avhendingslova (Tryggere bolighandel) av 8. juni
2021 nr. 1850, slik forskriften er endret ved forskrift av 16. desember 2025 nr. 2614. Tilstandsgrader i
rapporten er fastsatt i tråd med kriteriene i NS 3600:2018
Formålet med rapporten er å kartlegge boligens tekniske tilstand med tanke på behov for tiltak, samt å
vise resultatene av en utført tilstandsanalyse for å bidra til økt

---

[d185_d185 | Side [1]]
 ikke bygningssakkyndig sitt ansvar. Rapporten gir normalt ingen vurdering av
boligens tilbehør, som hvitevarer, brunevarer og annet inventar. Dette gjelder også om tilbehøret er
integrert.
Struktur og referansenivå
Normalt vil referansenivået være byggeskikken og tilstanden ved byggeåret for boligen eller
bygningsdelen. Rapporten beskriver avvik, altså en tilstand som er dårligere enn referansenivået.
Rapporten framhever normalt ikke positive sider ved boligen ut over det som kommer frem

---

[d185_d185 | Side [1]]
malt ikke positive sider ved boligen ut over det som kommer frem av
tilstandsgraden på rom og bygningsdeler.
Ved tilstandsgrad 0 og 1 gis det normalt ingen begrunnelse for valg av tilstandsgrad, fordi bygningen eller
bygningsdelen da bare har normal slitasje.
Hvis et rom eller en bygningsdel gis tilstandsgrad 2 eller 3 skal den bygningssakkyndige redegjøre for
årsaken til og konsekvensen av dette. Den bygningssakkyndige skal også gi et sjablongmessig anslag på
hva det vil koste å utbedre rom eller

---

[d185_d185 | Side [1]]
Det er med bruk av nivelleringslaser registrert lokalt avvik som er mindre enn 10mm og totalt avvik
mindre enn 15mm. Kontrollen gjennomføres på relevante rom.
Tilstandsgrad 2 settes med bakgrunn i at det er registrert stedvis slitasje på parkettgulvet. Dette
gjelder blant annet ved vindu på soverom som trolig stammer fra at vinduet har stått i lufteposisjon.
Anbefalte tiltak / ytterligere undersøkelser anbefales
Eventuelle tiltak vil være avhengig av personlig preferanse, men overflatebehandling

---

[d185_d185 | Side [1]]
likehold eller
tiltak i nær fremtid. Graden skal også brukes når delen er gammel og det er grunn til å
varsle om faren for skader på grunn av alderen, eller når det er grunn til å overvåke delen
spesielt på grunn av fare for større skader eller følgeskader
Tilstandsgrad 3: Store eller alvorlige avvik
Bygningsdelen har kraftige symptomer på forhold som man må regne med trenger
TG-3
utbedring straks eller innen kort tid. Graden skal også brukes ved påvist funksjonssvikt
eller sammenbrudd
Tilstandsgrad ikke

---

[d185_d185 | Side [1]]
tandsgrad 1: Mindre eller moderate avvik
Bygningsdelen skal bare ha normal slitasje, og strakstiltak skal ikke anses som nødvendig.
TG-1
Graden kan også brukes når delen er ny, men der dokumentasjon på faglig god utførelse
mangler.
Tilstandsgrad 2: Bygningsdelen har vesentlige avvik
Bygningsdelen skal enten ha feil utførelse, en skade eller symptomer på skade, sterk
TG-2
slitasje eller nedsatt funksjon. Graden gis når bygningsdelen trenger vedlikehold eller
tiltak i nær fremtid. Graden skal også brukes når

---

[d185_d185 | Side [1]]
n 3, 7044 TRONDHEIM
grundig gjennomgår disse dokumentene før bud legges
inn. Gnr. 6, bnr. 10, snr. 26, ideell andel 1/ 1
i Trondheim kommune.
All informasjon i tilstandsrapporten anses som kjent for
kjøper, og det vil ikke være mulig å reklamere på forhold
Selger
som er nevnt i rapporten. Spesielt forhold som er vurdert
med TG2 og TG3 bør vurderes nøye, da de indikerer Lise Megård
avvik fra normal slitasje og/ eller høy alder, noe som kan
Sameie
innebære behov for utbedringer. Bygningsdeler som er
merket

---

[d185_d185 | Side [1]]
en.
Bygningsdeler med TG2
Bygningsdel Oppsummert begrunnelse for tilstandsgrad
Etasjeskille og gulv på grunn Tilstandsgrad 2 settes med bakgrunn i at det er registrert stedvis slitasje på
parkettgulvet.
Falkenborgvegen 3, 7044 Trondheim 4 av 14
53

## Side 54

4. Informasjon om oppdraget
Befaringsdato Rapportdato
2.2.2026 3.2.2026
Hjemmelshavere
Navn: Marianne Åsaune (død). Tilstede ved inspeksjon: Nei
Er selgers egenerklæring fremlagt og gjennomgått av bygningssakkyndig? Nei
Informasjon om

---

[d185_d185 | Side [1]]
s ved påvist funksjonssvikt
eller sammenbrudd
Tilstandsgrad ikke undersøkt (TGIU) skal kun brukes unntaksvis. Eksempler kan være
snødekket tak eller krypkjeller uten inspeksjonsmulighet på undersøkelsestidspunktet;
TG-IU
eller bygningsdelen eller arealet eller rommet er ikke tilgjengelig for inspeksjon på
tidspunktet for analysen. Dersom TGIU omfatter særlig fuktutsatte konstruksjoner, skal
dette angis særlig.
Falkenborgvegen 3, 7044 Trondheim 2 av 14
51

## Side 52

2. Om rapporten
Om rapporten

---

[d185_d185 | Side [1]]
bebodd eiendommen og har derfor ikke spesifikk Bygningsdeler med TG2:
kunnskap om den. Det kan derfor være skader og andre
forhold ved eiendommen som ikke er spesifikt opplyst. ‑ Etasjeskille og gulv på grunn: Det er med bruk av
Kjøper oppfordres derfor til å foreta en særlig grundig nivelleringslaser registrert lokalt avvik som er mindre enn
undersøkelse av eiendommen, gjerne med bistand av 10mm og totalt avvik mindre enn 15mm. Kontrollen
teknisk sakkyndig. gjennomføres på relevante rom. Tilstandsgrad 2

---

[d185_d185 | Side [1]]
tdato: 3.2.2026 (Gyldig til 3.2.2027)
Samlet vurdering
TG-0 TG-1 TG-2 TG-3 TG-IU
2 15 1 0 0
Gjermund Ekren ge@tft.no Falkenborgvegen 3
GNR: 6 BNR: 10 SNR: 26
Takst-forum Trøndelag AS 47294356 7044 Trondheim
50

## Side 51

1. Tilstandsgradene
Tilstandsgrad 0: Ingen avvik
Bygningsdelen skal være tilnærmet ny, ikke vise tegn på slitasje og det skal være lagt
TG-0
frem dokumentasjon på faglig god utførelse. Det er ingen merknader til delen.
Tilstandsgrad 1: Mindre eller moderate avvik
Bygningsdelen skal bare

---

[d185_d185 | Side [1]]
eknisk sakkyndig. gjennomføres på relevante rom. Tilstandsgrad 2 settes
med bakgrunn i at det er registrert stedvis slitasje på
Selger har ingen anmerkninger om eiendommen. Se for parkettgulvet. Dette gjelder blant annet ved vindu på
øvrig komplett beskrivelse i vedlagt soverom som trolig stammer fra at vinduet har stått i
egenerklæringsskjema. lufteposisjon. Eventuelle tiltak vil være avhengig av
personlig preferanse, men overflatebehandling og/ eller
Eiendommen selges som et dødsbo og det er ukjent om

---

[d185_d185 | Side [1]]
eller ikke er andre grunner til å mistenke at flytting vil kunne avdekke vesentlige forhold.
Falkenborgvegen 3, 7044 Trondheim 3 av 14
52

## Side 53

3. Rapportsammendrag
Alle bygningsdeler med tilstandsgrad TG2, TG3 eller TGIU (ikke undersøkt) er oppsummert nedenfor. Feltet Begrunnelse gir en kort forklaring på hvorfor tilstandsgraden er
satt, og er ment som et forenklet sammendrag. Utfyllende vurderinger finnes i hovedrapporten.
Bygningsdeler med TG2
Bygningsdel Oppsummert begrunnelse for

---

[d185_d185 | Side [1]]
se resultatene av en utført tilstandsanalyse for å bidra til økt trygghet og redusert konfliktnivå ved
eierskifte.
Rapporten erstatter ikke selgers opplysningsplikt eller kjøpers undersøkelsesplikt ved eierskifte.
Tilstandsrapporten gir en beskrivelse og vurdering av byggverk og bygningsdeler som bygningssakkyndig
har observert, og som har betydning ved eierskifte. Tilbakeholdt eller uriktig informasjon som har
betydning for vurderingen, er ikke bygningssakkyndig sitt ansvar. Rapporten gir normalt ingen

---

[d185_d185 | Side [1]]
ng og/ eller
Eiendommen selges som et dødsbo og det er ukjent om utskiftninger er påregnelig.
det foreligger samsvarserklæring.
Øvrig
Byggemåte
I forbindelse med salget er det blitt utført en
informasjon
tilstandsrapport av en bygningssakkyndig, som gir en
teknisk gjennomgang av boligen og påpeker eventuelle
Adresse
avvik. Rapporten, sammen med selgers egenerklæring,
er vedlagt salgsoppgaven. Det er viktig at interessenter Falkenborgvegen 3, 7044 TRONDHEIM
grundig gjennomgår disse dokumentene før bud

---

[d185_d185 | Side [1]]
g the contents with a certificate issued to IN Groupe by
a third party. Validating the signature confirms that the contents have not been modified since the time of signing.
→ For more information about document formats, see https://doc.ingroupe.com/developer
11006250
:ecnerefer
tnemucoD
49

## Side 50

Falkenborgvegen 3
7044 TRONDHEIM
Tilstandsrapport
Eierskifte
Boligtype: Leilighet i lavblokk.
Byggeår: 2013
BRA: 108 m2
BRA-i: 102 m2
Rapportdato: 3.2.2026 (Gyldig til 3.2.2027)
Samlet vurdering
TG-0 TG-1

---

[d185_d185 | Side [1]]
t sjablongmessig anslag på
hva det vil koste å utbedre rom eller bygningsdeler som gis tilstandsgrad 3.
Takstrapporten Kunden/rekvirenten skal lese gjennom dokumentet før bruk og gi tilbakemelding til den
bygningssakkyndige hvis det finnes feil/mangler som bør rettes opp. Rapporten kan ikke være eldre enn 1
år på det tidspunkt kjøperen binder seg til å kjøpe boligen. Ved utgått rapport bør bygningssakkyndig
kontaktes for ny befaring og oppdatering.
Supertakst AS samarbeider med Vendu AS, som utvikler

---

[d185_d185 | Side [1]]
r det ved stikkprøver registrert avvik ved åpne/lukkemekanismen? Nei
Er det påvist avvik ved utvendig tetting som beslag, vannbord, og omramming? Nei
Oppsummering av vinduer og dører TG-1
Vinduer og dører fremstår uten vesentlige behov for tiltak utover normalt vedlikehold.
6.2 Etasjeskille og gulv på grunn
Type Betongdekke
Er det påvist nedbøy, skjevheter eller svikt i etasjeskille/gulv? Nei
Oppsummering av etasjeskille og gulv på grunn TG-2
Det er med bruk av nivelleringslaser registrert lokalt avvik som

---

[d185_d185 | Side [1]]
 feilaktige opplysninger, og dette har
Slitasje og bruk påvirket avtalen.
Det må også forventes at eiendommer som har vært i
bruk, vil kunne ha tegn til slitasje og eventuelle skader. Dersom det er avvik mellom oppgitt og faktisk innvendig
Slik normal bruksslitasje og behov for vedlikehold må areal på minst 2 % og samtidig minst 1 kvadratmeter, kan
kjøper påregne, og dette vil normalt ikke gi grunnlag for dette utløse rett til kompensasjon etter § 3‑3 i
reklamasjon eller prisavslag.

---

[d185_d185 | Side [1]]
dlertidig brukstillatelse? Nei
Er det avvik på krav til rømning, dagslysforhold eller takhøyde? Nei
Er det avvik ved rekkverk, håndløper eller åpninger mellom trinn på Ikke relevant/finnes ikke
innvendig trapp i forhold til dagens forskriftskrav?
Er det avvik fra dagens forskrift på høyde og åpninger i rekkverk til Ikke relevant/finnes ikke
balkong/terrasse/utvendig trapp?
Er det manglende brannslukkingsutstyr og røykvarsler i boligen iht forskrift? Nei
Er det skader på brannslukkingsutstyr, røykvarsler,

---

[d185_d185 | Side [1]]
else til megler. Vi oppfordrer Gjelder denne registerenheten med flere
interessenter til å gjøre seg kjent med disse.
14.12.1982 ‑ Dokumentnr: 20157 ‑ Bestemmelse om
bebyggelse
Tinglyste heftelser
Overført fra: Knr:5001 Gnr:6 Bnr:10
Tinglyste heftelser og rettigheter: På eiendommen er det Gjelder denne registerenheten med flere
tinglyst følgende heftelser og rettigheter som følger
eiendommens matrikkel ved overskjøting til ny 26.06.1984 ‑ Dokumentnr: 11798 ‑ Erklæring/ avtale
hjemmelshaver: Midlertidig

---

[d185_d185 | Side [1]]
 gjennomgås
vedlikeholdsansvaret for disse påhviler sameiet. hos eiendomsmegler før budet legges inn. Kontakt
Adkomst til eiendommen skjer via offentlig vei. eiendomsmegler for eventuelle spørsmål.
40

## Side 41

OM EIENDOMMEN
Lovanvendelse
Selger leverer eiendommen i ryddig og rengjort stand.
Regelverk og generelle opplysninger
Dødsbo: Det gjøres spesielt oppmerksom på at dette er Boligen selges med det inventar og utstyr som i henhold
salg av eiendom for et dødsbo. Arvingene har begrenset til gjeldende

---

[d185_d185 | Side [1]]
 av eiendom for et dødsbo. Arvingene har begrenset til gjeldende lover, forskrifter eller offentlige pålegg skal
kjennskap til eiendommen, og de er derfor ikke kjent med følge med eiendommen, jf. avhendingsloven § 3‑4.
feil eller mangler utover det som fremkommer av Fastmonterte eller spesialtilpassede installasjoner og
salgsmaterialet. Interessenter oppfordres til å foreta innredning som anses som varig tilknyttet boligen, følger
grundige undersøkelser, gjerne sammen med takstmann normalt med i handelen,

---

[d185_d185 | Side [1]]
nglende betaling av fellesutgifter har
sameiet legal panterett i den enkelte eierseksjon,
begrenset til inntil 2 ganger folketrygdens grunnbeløp.
Vei, vann og avløp
Eiendommen er tilknyttet offentlig vann‑ og Kjøper og selger er forpliktet til å signere den standard
avløpssystem. Stikkledningene fra eiendommen og ut til kjøpekontrakten utarbeidet av Emera som en del av
det kommunale nettet er private, og eiendomshandleren. Kjøpekontrakten kan gjennomgås
vedlikeholdsansvaret for disse påhviler sameiet. hos

---

[d185_d185 | Side [1]]
arianne Åsaune
Har du kjennskap til eiendommen?
Nei Ja
Initialer selger: LM 1
11006250
:ecnerefer
tnemucoD
47

## Side 48

Tilleggskommentar
Selger har ikke bebodd eiendommen og har derfor ikke spesifikk kunnskap om den. Det kan derfor være skader og andre forhold ved
eiendommen som ikke er spesifikt opplyst. Kjøper oppfordres derfor til å foreta en særlig grundig undersøkelse av eiendommen, gjerne med
bistand av teknisk sakkyndig.
Jeg bekrefter at opplysningene er gitt etter beste skjønn. Jeg er kjent med

---

[d185_d185 | Side [1]]
e godt med eierseksjon.
34

## Side 35

OM EIENDOMMEN
Megler har mottatt tegninger fra kommunen datert 2011.
Adkomst
Disse samsvarer med dagens bruk av boligen, med
På høyre side i annonsen finner du et kartutsnitt. Ved å unntak av at tidligere innglasset stue er åpnet mot stuen
klikke på kartet kan du enkelt planlegge din rute fra valgt ved fjerning av glasskyvedør. Tiltaket er ikke
startpunkt og helt frem til boligen. Det vil være skiltet ved søknadspliktig.
fellesvisninger for enkel

---

[d185_d185 | Side [1]]
ardlisten, men som ikke
planløsningen skaper en luftig og sosial atmosfære med finnes på eiendommen, vil heller ikke følge med i salget.
god plass til både sofagruppe og spisebord. Stuen har Alt utstyr og installasjoner som medfølger overtas slik de
store vindusflater som slipper inn rikelig med naturlig lys, er, uten garanti, med mindre det foreligger en gjeldende
herfra er det en fantastisk utsikt mot Trondheimsfjorden garanti fra produsent eller leverandør.
og Munkholmen. Utsikten gir boligen et særpreg

---

[d185_d185 | Side [1]]
g som beskrevet i eierseksjonslovens § 23.
visse fellesarealer i eierseksjonssameiet gnr. 6, bnr. 10,
samt bestemmelser om fordeling av omkostninger
Radonmåling
knyttet til gjensidige bruksretter.
Selger har ikke utført radonmåling. Det er ikke krav om
08.02.2013 ‑ Dokumentnr: 115239 ‑ Seksjonering dette med mindre boligen er helt eller delvis utleid.
Opprettet seksjoner:
Snr: 26
Diverse
Formål: Bolig
Sameiebrøk: 100/ 7321 Det informeres om at ingen kan eie mer enn to
boligseksjoner i sameiet, i henhold

---

[d185_d185 | Side [1]]
ig å merke seg at selv om ferdigattest foreligger, gir
det ingen garanti for at bygget er oppført i henhold til Bruksareal BRA:
tillatelsen og gjeldende regelverk, eller at det senere er BRA‑i ‑ Internt bruksareal. Arealet innenfor boenheten.
utført arbeid på bygget som ikke er byggemeldt eller BRA‑e ‑ Eksternt bruksareal. Areal av alle rom utenfor
godkjent. boenheten og som tilhører denne, for eksempel eksterne
boder.
BRA‑b ‑ Innglasset balkong, altan, terrasser.
35

## Side 36

OM EIENDOMMEN
Andre

---

[d185_d185 | Side [1]]
egge parter,
begrenset til siste 12 måneder før overtakelse. Jeg bekrefter med dette at eiendommen ikke er en næringseiendom, at den ikke
selges som ledd i næringsvirksomhet eller mellom ektefeller eller slektninger i rett oppstigende eller nedstigende linje, søsken, eller
mellom personer som bor eller har bodd på boligeiendommen. Gyldig forsikring forutsetter at det for helårs- og fritidsbolig
foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere bolighandel).

---

[d185_d185 | Side [1]]
e kommuneplan Eiendomsgrense god Eiendomsgrense dårlig
gjeldende nøyaktighet nøyaktighet
Eiendomsgrense fiktiv Veg Bestemmelsesområde #6
Offentlig tjenesteyting
Bestemmelsesområde #7 Hensyn annen fare Hensyn bevaring kulturmiljø
Randsone deponi (avfallsdeponi)
Krav om felles planleggeing Turveg / turdrag Framtidig turveg / turdrag
Jernbane - på bakken Kollektivtrase Fjernveg tunnel
Fjernveg Hovedveg Hovedvegnett sykkel
Byggesone 1 Byggesone 2 Byggesone 3
Offentlig eller privat Framtidig offentlig eller

---

[d185_d185 | Side [1]]
ilsyn eller utført utvidet el-kontroll i løpet av de siste Nei
5 år?
Type sikringer Automatsikringer
Har eier opplyst om arbeider utført etter opprinnelig byggeår? Ukjent
Falkenborgvegen 3, 7044 Trondheim 9 av 14
58

## Side 59

Er det manglende samsvarserklæring på arbeider utført etter 01.01.1999? Ukjent
Eiendommen selges som et dødsbo og det er ukjent om det forefinnes samsvarserklæring.
Er det manglende kursfortegnelse? Nei
Er det manglende samsvar mellom kursfortegnelse og antall sikringer? Nei
Er det

---

[d185_d185 | Side [1]]
eller leverandør.
og Munkholmen. Utsikten gir boligen et særpreg og
skaper en unik ramme rundt hverdagen, enten du nyter Kjøper aksepterer at det kan forekomme hull og merker
morgenkaffen eller slapper av på kvelden. Kjøkkenet har etter montering av inventar og utstyr som ikke er en del
en tidløs innredning med gode arbeidsflater og rikelig av overdragelsen.
36

## Side 37

OM EIENDOMMEN
Beskrivelsen av boligen nedenfor er hentet direkte fra
Eiendommens
tilstandsrapporten:
tilstand
Leilighet på ett plan

---

[d185_d185 | Side [1]]
e
Tungavegen 1, Leangen idrettsområde og deler av Bestemmelse om gjerde
Travbanevegen og Gildheimsvegen Overført fra: Knr:5001 Gnr:6 Bnr:10
Gjelder denne registerenheten med flere
Ta kontakt med megler for mer informasjon.
06.12.1982 ‑ Dokumentnr: 19645 ‑ Bestemmelse om
Kopi av situasjonskart, målebrev, reguleringsplaner m/ bebyggelse
bestemmelser etc. ligger vedlagt i salgsoppgaven eller Overført fra: Knr:5001 Gnr:6 Bnr:10
kan fås ved henvendelse til megler. Vi oppfordrer Gjelder denne registerenheten med

---

[d185_d185 | Side [1]]
n 32, 33, 35, 37 og 39, Leangen sentrum øst (1.2.2024)
r20200021 Gildheimskrysset - Leangen stasjon, hovedsykkelveg (18.11.2021)
r1170a E6-øst, delplan 3, Strindheim / Gildheimsområdet. (23.11.2006)
BEBYGGELSESPLAN
Omfattes eiendommen eller en del av eiendommen av en bebyggelsesplan etter eldre PBL?
PLANID Plannavn
Nei
REGULERING UNDER ARBEID
27.01.2026 16:35:35 Side 2 av 3
105

## Side 106

Er det igangsatt planleggingsarbeid på et område som inkluderer/berører eiendommen?
PLANID Plannavn
Ja
5001

---

[d185_d185 | Side [1]]
0

## Side 111

Innholdet i nabolagsprofilen er hentet fra ulike datakilder, og feil eller mangler kan forekomme. Vurderinger og sitater er innhentet på web og gir uttrykk for
hvordan naboene vurderer nabolaget. FINN.no AS kan ikke holdes ansvarlig for feil/mangler i profilen. Copyright © Finn.no AS 2026
111

## Side 112

Boligkjøperforsikring
Hvis din nye bolig har skjulte feil kan dette koste
deg både tid og penger.
Dine fordeler
− Unngå bekymring og stress
− Spar verdifull tid
− Få advokatkostnadene

---

[d185_d185 | Side [1]]
dsøkninger: Sameiet hadde i
2024 samlede driftsinntekter på kr 2 947 374 og samlede
Det er viktig å merke seg at alle bygningsmessige driftskostnader på kr 2 690 071. Dette ga et positivt
endringer på fasaden, som oppsetting av markiser, årsresultat på kr 351 917.
utskifting av vinduer eller andre endringer, krever
forhåndsgodkjenning fra styret og må følge en felles
Vedtekter/ husordensregler
plan. Svalganger er fellesareal og skal ikke benyttes til
eksklusiv lagring eller opphold. Arbeid på bad og

---

[d185_d185 | Side [1]]
Fakturering skjer månedlig eller kvartalsvis.
Estimert totalpris ink. omk
Kr 6 666 100,‑
Fellesgjeld
Lånebetingelser fellesgjeld: Sameiet har ingen lån
Felleskostnader
registrert.
Felleskostnader kr 4 624,‑ pr. mnd
Sikringsordning
Felleskostnader inkulderer: Totale felleskostnader per
måned: kr 4 624,11,‑ Sameiet har ikke sikringsordning.
Felleskostnadene er fordelt slik:
Andre kostnader:
‑ Felleskostnader: kr 2 739,‑
‑ A‑konto vann og avløp: kr 650,‑ TV/ Internett/ Bredbånd: Sameiet har en kollektiv

---

[d185_d185 | Side [1]]
meie
innebære behov for utbedringer. Bygningsdeler som er
merket med TGIU er ikke blitt vurdert av takstmannen. Falkenborg Sameie
Organisasjonsnummer: 911626055
37

## Side 38

OM EIENDOMMEN
Falkenborg Sameie er et eierseksjonssameie som består sjenerer noen eller etterlater ekskrementer på sameiets
av 81 boligseksjoner. Sameiets formål er å ivareta område.
seksjonseiernes fellesinteresser og administrere
eiendommen. Regnskap/ budsjett/ kostnadsøkninger: Sameiet hadde i
2024 samlede driftsinntekter på kr 2

---

[d185_d185 | Side [1]]
0 861
GJELD
KORTSIKTIG GJELD
Forskuddsbetalte felleskostnader 25 253 35 817
Leverandørgjeld 332 706 367 759
Energiavregning 13 61 944 0
SUM KORTSIKTIG GJELD 419 903 403 576
SUM EGENKAPITAL OG GJELD 3 412 680 3 044 437
Pantstillelse 0 0
Garantiansvar 0 0
Trondheim, 10.04.2025
Styret i Falkenborg Sameie
Eivind Johnsen /s/ Sondre Sandvik /s/ Nina Christin Berg /s/
Jan Helge Johansen /s/ Lillian Wenche Smevik /s/
Vedlegg 2 12 av 18 Årsregnskap 2024.pdf
91

## Side 92

NOTE: 1
REGNSKAPSPRINSIPPER
Årsregnskapet

---

[d185_d185 | Side [1]]
fremlagt og gjennomgått av bygningssakkyndig? Nei
Informasjon om bygningssakkyndig
Navn: Gjermund Ekren Telefon: 47294356
Firma: Takst-forum Trøndelag AS Epost: ge@tft.no
Tittel: Adresse: Vestre Rosten 69, 7072 Heimdal
Egne premisser:
Det er ikke foretatt tilstandsvurdering av bygningsdeler som er underlagt sameiets ansvarsområde. Det gjelder blant annet yttervegger, takkonstruksjon,
taktekking, drenering, grunnmur, grunn/fundamenter, felles trapper, felles kjeller, og felles loft.
Informasjon om

---

[d185_d185 | Side [1]]
e benyttes til
eksklusiv lagring eller opphold. Arbeid på bad og kjøkken Vedtekter og husordensregler ligger vedlagt
som involverer røropplegg, må utføres av autoriserte salgsoppgave. Sameiet het opprinnelig Sameiet Toppen
firmaer. av Sirkus. Husordensreglene har ikke blitt revidert etter
navnebytte. Det står derfor Sameiet Toppen av Sirkus på
Vi gjør oppmerksom på følgende saker fra styrets disse.
årsrapport 2025:
2024 var det første hele driftsår etter at
Energimerke
reklamasjonsperioden var over. Styret

---

[d185_d185 | Side [1]]
Harald 2025-05-01
Identification
Halvorsen, Harald
This document contains electronic signatures using EU-compliant PAdES - PDF
Advanced Electronic Signatures (Regulation (EU) No 910/2014 (eIDAS))
Vedlegg 1 10 av 18 Uavhengig revisors beretning.pdf
89

## Side 90

FALKENBORG SAMEIE
ORG.NR. 911 626 055, KUNDENR. 7265
RESULTATREGNSKAP
Note Regnskap Regnskap Budsjett Budsjett
2024 2023 2024 2025
DRIFTSINNTEKTER:
Innkrevde felleskostnader 2 2 791 608 2 650 440 2 779 600 2 855 000
Ladeinntekter EL-bil 55 766 49

---

[d185_d185 | Side [1]]
ER
Kundefordringer og andre fordringer er oppført i balansen til pålydende etter fradrag for
avsetning til forventet tap. Avsetning til tap gjøres på grunnlag av individuelle vurderinger
av de enkelte fordringene.
SKATTETREKKSKONTO
Selskapet har egen separat skattetrekkskonto i OBOS-banken. Innskuddet tilhører
myndighetene og kan ikke disponeres fritt.
NOTE: 2
INNKREVDE FELLESKOSTNADER
Felleskostnader 2 231 316
Bredbånd 252 720
Kabel-tv 193 428
Parkering 102 000
Sparing 12 144
SUM INNKREVDE FELLESKOSTNADER

---

[d185_d185 | Side [1]]
vløp: kr 650,‑ TV/ Internett/ Bredbånd: Sameiet har en kollektiv avtale
‑ A‑konto fjernvarme: kr 500,‑ med Altibox (NTE) for TV og internett. Kostnadene for
‑ Bredbånd: kr 260,‑ kabel‑TV (kr 199 per måned) og bredbånd (kr 260 per
‑ Kabel‑tv: kr 199,‑ måned) er inkludert som egne poster i de månedlige
‑ Sparing: kr 166,‑ felleskostnadene.
‑ Parkering: kr 110,‑
33

## Side 34

OM EIENDOMMEN
Andre utgifter: Andre utgifter: I tillegg til felleskostnader for familier med barn som for studenter og etablerte

---

[d185_d185 | Side [1]]
ER 2 2
OMLØPSMIDLER
Restanser felleskostnader/kundefordringer 20 176 161
Forskuddsbetalte kostnader 0 17 640
Energiavregning 0 45 907
Driftskonto OBOS-banken 1 029 820 1 688 555
Sparekonto OBOS-banken 1 338 873 1 292 171
Sparekonto OBOS-banken II (NIBOR90) 1 023 809 0
SUM OMLØPSMIDLER 3 412 678 3 044 435
SUM EIENDELER 3 412 680 3 044 437
EGENKAPITAL OG GJELD
EGENKAPITAL
Opptjent egenkapital 2 992 777 2 640 861
SUM EGENKAPITAL 2 992 777 2 640 861
GJELD
KORTSIKTIG GJELD
Forskuddsbetalte felleskostnader 25

---

[d185_d185 | Side [1]]
est mulig repareres. Uvedkommende gjenstander
skal ikke kastes i vask og WC slik at avløpsrør tilstoppes.
12. Felles radio, TV m.m.
Sameiets kabel-TV anlegg eies av sameiet. Styret disponerer over anlegget.
13. Energisparing
For å holde eierseksjonssameiet energikostnader på et minimum skal lyset slås av når
du forlater bodrommene.
14. Brannforebyggende sikkerhet
Hver enkelt seksjonseier plikter å påse at det finnes minst ett brannslukningsapparat og
en eller flere røykvarslere i andelen han eller hun rår

---

[d185_d185 | Side [1]]
sjoner er
basert på revisjonsbevis innhentet frem til datoen for revisjonsberetningen. Etterfølgende
hendelser eller forhold kan imidlertid medføre at sameiet ikke kan fortsette driften.
 evaluerer vi den samlede presentasjonen, strukturen og innholdet i årsregnskapet, inkludert
tilleggsopplysningene, og hvorvidt årsregnskapet gir uttrykk for de underliggende transaksjonene
og hendelsene på en måte som gir et rettvisende bilde.
Vi kommuniserer med styret blant annet om det planlagte innholdet i og

---

[d185_d185 | Side [1]]
 denne datoen og noter til årsregnskapet, herunder et
sammendrag av viktige regnskapsprinsipper.
Etter vår mening
 oppfyller årsregnskapet gjeldende lovkrav, og
 gir årsregnskapet et rettvisende bilde av sameiets finansielle stilling per 31. desember 2024 og av
dets resultater for regnskapsåret avsluttet per denne datoen i samsvar med regnskapslovens
regler og god regnskapsskikk i Norge.
Andre forhold
Budsjettallene som fremkommer i årsregnskapet er ikke revidert.
Grunnlag for konklusjonen
Vi har

---

[d185_d185 | Side [1]]
eskostnader for familier med barn som for studenter og etablerte uten
påløper kostnader til for eksempel strøm, innboforsikring, barn. Med gangavstand til handel, servicetilbud,
diverse abonnementer og lignende. kollektivtransport, ligger alt til rette for en enkel og
effektiv hverdag. Nærområdet byr også på parker og
grøntområder som gir fine muligheter for både aktivitet
Formue:
og avkobling rett utenfor hjemmet.
Andel fellesformue: Kr 45 078 pr. 31.12.2025
Offentlig kommunikasjon
Formuesverdi
Boligen

---

[d185_d185 | Side [1]]
8
Parkering 102 000
Sparing 12 144
SUM INNKREVDE FELLESKOSTNADER 2 791 608
NOTE: 3
ANDRE INNTEKTER
Utfakturering for installasjon av Zaptec ladeboks til P-plass 100 000
SUM ANDRE INNTEKTER 100 000
NOTE: 4
PERSONALKOSTNADER
Arbeidsgiveravgift -20 445
SUM PERSONALKOSTNADER -20 445
Det har verken vært ansatte eller lønnsutbetalinger i selskapet gjennom året. Selskapet er
derav ikke pliktig til å ha tjenestepensjonsordning etter lov om obligatorisk tjenestepensjon.
Arbeidsgiveravgiften knytter seg til

---

[d185_d185 | Side [1]]
mråde som inkluderer/berører eiendommen?
PLANID Plannavn
Ja
5001 k20110088 Lade og Leangen
5001 r20180055 Planprogram Leangenområdet med Tungavegen 1, Leangen idrettsområde og deler av Travbanevegen og Gildheimsvegen
PLANFORSLAG
Eksisterer det planforslag som berører eiendommen?
PLANID Plannavn
Nei
KOMMENTARFELT:
Det tas forbehold om feil og mangler.
27.01.2026 16:35:35 Side 3 av 3
106

## Side 107

107

## Side 108

108

## Side 109

Nabolagsprofil
Falkenborgvegen 3 - Nabolaget Lademoen østre/Dalen hageby

---

[d185_d185 | Side [1]]
risantydning
vesentlig større enn forutsatt i a‑kontobeløp.
Kr 6 490 000
På grunn av prisstigning og renteøkning tas det
forbehold om at felleskostnader kan øke.
Omkostning kjøper
6 490 000,‑ (Prisantydning)
Eiendomsskatt
0,‑ (Andel av fellesgjeld)
Kr 8 831,‑ (2023)
Omkostninger: Eiendomsskatten ble i 2023 beregnet til kr. 8 831,‑
12 500,‑ (Boligkjøperforsikring (valgfritt))
260,‑ (Pantattest kjøper ‑ lagt ut av megler)
Kommunale avgifter
545,‑ (Tingl.gebyr pantedokument)
545,‑ (Tingl.gebyr skjøte) Kr 19

---

[d185_d185 | Side [1]]
likehold garasjeanlegg -195 753
Egenandel forsikring -12 000
SUM DRIFT OG VEDLIKEHOLD -1 112 111
NOTE: 9
ANDRE DRIFTSKOSTNADER
Annet driftsmateriale -2 436
Lyspærer og sikringer -2 027
Vaktmestertjenester -95 236
Vakthold -3 875
Renhold ved firmaer -159 188
Snørydding -14 971
Gressklipping -56 891
Andre fremmede tjenester -17 986
Kontor- og datarekvisita -2 148
Trykksaker -3 834
Møter, kurs, oppdateringer mv. -5 500
Andre kostnader tillitsvalgte -1 755
Andre kontorkostnader -624
Porto -2 025
Bank- og

---

[d185_d185 | Side [1]]
er at opplysningene er gitt etter beste skjønn. Jeg er kjent med at dersom jeg har gitt ufullstendige, uriktige eller misvisende
opplysninger om eiendommen, vil forsikringsselskapet kunne søke hel eller delvis regress for sine utbetalinger eller redusere sitt ansvar helt
eller delvis, jfr. vilkår for boligselgerforsikring punkt 7.1 og forsikringsavtaleloven kapittel 4.
Jeg er orientert om mitt mulige ansvar som selger etter avhendingsloven, eventuelt etter kjøpsloven (aksjeboliger), og om forsikringsgiver

---

[d185_d185 | Side [1]]
 viktig at
boligselgerforsikring som dekker selgers ansvar etter kjøper setter seg grundig inn i alle salgsdokumentene,
avhendingsloven begrenset oppad kr. 20 000 000,‑. herunder salgsoppgave, tilstandsrapport og selgers
Egenerklæringsskjema er vedlagt salgsoppgaven og egenerklæring. Kjøper anses for å være kjent med
interessenter oppfordres til å gjennomgå denne før bud forhold som er tydelig beskrevet i salgsdokumentene,
inngis. slike forhold kan ikke senere gjøres gjeldende som en
mangel ved boligen.

---

[d185_d185 | Side [1]]
kke har gitt skriftlig samtykke, kan erstatningen bortfalle.
Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter, begrenset til siste 12 måneder før overtakelse.
Forøvrig oppfordrer selger potensielle kjøpere til å undersøke eiendommen grundig, jf avhendigsloven § 3-10 og kjøpsloven § 20
(aksjeboliger).
Gyldig forsikring forutsetter at det for helårs- og fritidsbolig foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere
bolighandel).
Jeg

---

[d185_d185 | Side [1]]
 informasjonsgrunnlaget
Tidspunkt for overtakelse avtales mellom kjøper og Opplysninger om boligens størrelse og utforming, både
selger. innvendig og utvendig, bygger på informasjon hentet fra
vedlagte tilstands‑ og boligsalgsrapport. Innholdet i
salgsoppgaven er basert på selgers informasjon,
Forsikring
fagkyndig vurdering, samt opplysninger fra offentlige
Boligselgerforsikring: Selger har tegnet registre som kommunen og Kartverket. Det er viktig at
boligselgerforsikring som dekker selgers ansvar etter

---

[d185_d185 | Side [1]]
endom/ boligkjoper/ på forhold som burde ha vært oppdaget ved en ordinær
gjennomgang.
41

## Side 42

OM EIENDOMMEN
Dersom det oppstår behov for ytterligere avklaringer, samme gjelder hvis eiendommen ikke samsvarer med
oppfordres interessenter til å kontakte eiendomsmegler det som med rimelighet kunne forventes ut fra blant
eller egne rådgivere før de gir bud. annet alder, type og synlig tilstand – eller hvis det er
tilbakeholdt, eller gitt feilaktige opplysninger, og dette har
Slitasje og bruk påvirket

---

[d185_d185 | Side [1]]
 Alle
som gir trygghet og profesjonell juridisk hjelp dersom det interessenter anbefales derfor å undersøke eiendommen
oppdages uventede feil eller mangler ved boligen de nøye, gjerne sammen med fagperson, før bud gis.
neste fem årene. Les mer om Boligkjøperforsikring i Dersom kjøper velger å kjøpe uten å ha sett
vedlagte materiell eller på https:/ / eiendommen, kan det ikke etter overtakelse reklameres
www.soderbergpartners.no/ eiendom/ boligkjoper/ på forhold som burde ha vært oppdaget ved en

---

[d185_d185 | Side [1]]
ng.
Era eiendomsmegling AS
Organisasjonsnummer 936749259
Meglers vederlag
Kjøpmannsgata 40, Trondheim 7011,
Provisjon ved salg til prisantydning: kr 48 750,00 Tlf: 970 54 433
Tilrettelegging: kr 20.000
Visninger/ overtagelser: kr 2.500 pr. stk.
Salgsoppgavedato
Markedspakke: kr 20.000
Oppgjørshonorar inkl. factoring: kr 9.900 11.02.2026
Grunnpakke bolig Info: kr 9.000
Eierskiftegebyr: kr 6.725
Samarbeidspartnere og
Utlegg:
tilknyttede foretak
Selger dekker utlegg i henhold til oppdragsavtalen. Disse
er

---

[d185_d185 | Side [1]]
hold kan ikke senere gjøres gjeldende som en
mangel ved boligen. Dette gjelder uavhengig av om
Boligkjøperforsikring: Kjøper har anledning til å tegne dokumentene er lest.
boligkjøperforsikring. Vedlagt i salgsoppgaven følger
informasjon om Boligkjøperforsikring fra Söderberg & Det kan være forskjell mellom boligens faktiske bruk av
Partners. Boligkjøperforsikring er en rettshjelpsforsikring rom og det som er godkjent av myndighetene. Alle
som gir trygghet og profesjonell juridisk hjelp dersom det

---

[d185_d185 | Side [1]]
dersøkelser, gjerne sammen med takstmann normalt med i handelen, med mindre det foreligger en
eller annen fagkyndig. særskilt avtale mellom partene om noe annet, jf.
avhendingsloven § 3‑5.
En standard tilbehørsliste utarbeidet av Norges
Eiendomsmeglerforbund (NEF) følger salgsoppgaven, og
Kontrakts‑
gjelder som utgangspunkt for hva som inkluderes i salget
– med mindre avvik er tydelig avtalt mellom kjøper og
grunnlag
selger.
Overtakelse
Om informasjonsgrunnlaget
Tidspunkt for overtakelse avtales mellom

---

[d185_d185 | Side [1]]
ventuelt etter kjøpsloven (aksjeboliger), og om forsikringsgiver sitt
boligselgerforsikringstilbud.
Jeg er klar over at avtale om forsikring er bindende. Jeg er også klar over at premietilbudet først kan påberopes når boligen er solgt
(budaksept). Premietilbudet som er gitt av megler er bindende for forsikringsgiver i 6 – seks – måneder fra oppdragsinngåelse med megler.
Etter dette vil premien og forsikringsvilkårene kunne justeres. Når premietilbudet ikke lenger er bindende for forsikringsselskapet

---

[d185_d185 | Side [1]]
u trenger å bekymre deg for egne Borettslagseiendom: kr 9 300
og eventuelle idømte saksomkostninger.
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
Forsikringen er meglet frem av Söderberg & Partners og

---

[d185_d185 | Side [1]]
 bekymring og stress
− Spar verdifull tid
− Få advokatkostnadene dekket
Med vår boligkjøperforsikring er du i trygge hender
hvis du oppdager feil eller mangler ved boligen du har
kjøpt. Forsikringen gir deg tilgang på hjelp fra advokater, Hva koster forsikringen?
saksbehandlere og jurister som er spesialiserte på Forsikringspremien trekkes i oppgjøret.
eiendomskjøp. De står klare til å hjelpe deg i fem år etter
overtagelse – uten at du trenger å bekymre deg for egne Borettslagseiendom: kr 9 300
og

---

[d185_d185 | Side [1]]
g gatenavn .
Privatveg gatenavn . Plan dispensasjon punkt Avslag dispensasjon
Plan mindre endring RpFormålGrense RpAngittHensynGrense
RpFareGrense RpGrense RpSikringGrense
Avkjørsel - både inn og Avkjørsel - kun utkjøring Eksisterende tre som skal
utkjøring bevares
Bygg, kulturminner, mm som Byggegrense Byggelinje
skal bevares
Planlagt bebyggelse Bebyggelse som inngår i Bebyggelse som forutsettes
planen fjernet
Regulert senterlinje Frisiktlinje Regulert kant kjørebane
Regulert kjørefelt Regulert

---

[d185_d185 | Side [1]]
orgvegen 3, 7044 TRONDHEIM
KOMMUNEPLAN/KOMMUNEDELPLAN
Eiendommen ligger i område som i kommuneplanen/kommunedelplanen er avsatt til Plan (vedtaksdato) Areal
Sentrumsformål - Framtidig Kommuneplanens arealdel 2022-2034 (27.3.2025) 19200.11m2
Turvegtrasè - Nåværende Kommuneplanens arealdel 2022-2034 (27.3.2025)
GJELDENDE REGULERING
Ligger eiendommen i et regulert område?
PLANID Plannavn (vedtaksdato) Reguleringsformål Areal
Ja
5001 r1170a E6-Øst Nidelv bru-Grillstad. Delplan 3 (23.11.2006)
5001 r1170h

---

[d185_d185 | Side [1]]
rsel Felles gårdsplass
Bolig/Forretning/Kontor Forretning/Kontor RpBestemmelseOmråde
Midlertidig
Hensyn grønnstruktur Bevaring naturmiljø Bevaring kulturmiljø
Frisikt Andre sikringssoner Boligbebyggelse
Kontor Kombinert bebyggelse og Bolig/Forretning/Kontor
anleggsformål
Forretning/Kontor/Tjenesteytin Veg Kjøreveg
g
Fortau Gatetun Gang-/sykkelveg
Sykkelveg/-felt Annen veggrunn - grøntareal Kollektivholdeplass
Parkering Grønnstruktur Park
RpFormålGrense RpGrense Regulert senterlinje
Restriksjonsområde

---

[d185_d185 | Side [1]]
fikkområde 1262.76m2
5001 r1170h Thoning Owesens gate 29A og 31, KBS kjøpesenter (18.2.2010) Restriksjonsområde flyplass 4135.53m2
RELATERTE PLANER
PLANID Plannavn (vedtaksdato)
r0001 Del av Rydningsmarken og Rydningen til Persaunveien (12.5.1949)
r0001a Persaunvegen syd for Rønningsbakken. (15.1.1955)
r0119 Innherredsveien og Nordlandsbanen fra Dalen blindeskole til Rotvold (12.4.1960)
r0119d Innherredsveien og Th. Owesens gt for eiendommene Bekkenga, gnr.12/43, Bekkenga II, gnr.12/117 m.fl.

---

[d185_d185 | Side [1]]

Polisenummer fellesforsikring: 91656012 reguleringsplan r1170a, "E6‑Øst Nidelv bru‑Grillstad.
Delplan 3".
Husdyr: Hovedregelen er at husdyrhold er tillatt så lenge
dyreholdet ikke er til ulempe for øvrige brukere av Eiendommen er i kommuneplanens arealdel avsatt til
leilighetene. Beboere som har husdyr, må sørge for å ha byggesone 1, sentrumsformål (framtidig) og turvegtrase
full kontroll over dyret til enhver tid og påse at dyret ikke (nåværende).
38

## Side 39

OM EIENDOMMEN
Pågående plansaker i

---

[d185_d185 | Side [1]]
g 17.
Regulerings og arealplaner
Reparasjoner av dette dekkes av garantien.
Eiendommen er regulert til bolig/ forretning/ kontor, felles
Forretningsfører: Obos Eiendomsforvaltning AS gårdsplass, forretning/ kontor, midlertidig trafikkområde
og restriksjonsområde flyplass. Dette følger av
Sameiets forsikringsselskap: Gjensidige Forsikring Asa reguleringsplan r1170h, "Thoning Owesens gate 29A og
31, KBS kjøpesenter". Eiendommen omfattes også av
Polisenummer fellesforsikring: 91656012 reguleringsplan r1170a,

---

[d185_d185 | Side [1]]
e 2 Byggesone 3
Offentlig eller privat Framtidig offentlig eller privat Næringsbebyggelse
tjenesteyting tjenesteyting
Bane Blå/grønnstruktur Framtidig blå/grønnstruktur
27.01.2026 16:35:41 Det kan forekomme feil eller manglende opplysninger i informasjonen. Side 2 av 2
99

## Side 100

100

## Side 101

Reguleringsplaner
Eiendom: Gnr: 6 Bnr: 10 Fnr: 0 Snr: 26
Adresse: Falkenborgvegen 3
Målestokk
7044 TRONDHEIM
Trondheim 1:1500
Annen info:
27.01.2026 16:35:59 Det kan forekomme feil eller manglende

---

[d185_d185 | Side [1]]

RpFormålGrense RpGrense Regulert senterlinje
Restriksjonsområde flyplass Parkering Parkeringshus/-anlegg
27.01.2026 16:35:59 Det kan forekomme feil eller manglende opplysninger i informasjonen. Side 2 av 3
102

## Side 103

27.01.2026 16:35:59 Det kan forekomme feil eller manglende opplysninger i informasjonen. Side 3 av 3
103

## Side 104

Planstatus
Trondheim
MATRIKKELENHET
Kommune Gnr Bnr Fnr Snr Adresse
5001 - Trondheim 6 10 0 26 Falkenborgvegen 3, 7044 TRONDHEIM
KOMMUNEPLAN/KOMMUNEDELPLAN
Eiendommen

---

[d185_d185 | Side [1]]
r som går forbi som gjør
Ikke gift 61% 54%
det veldig enkelt med kollektiv
transport.» Separert 6% 9%
Sitat fra en lokalkjent
Enke/Enkemann 4% 4%
Innholdet i nabolagsprofilen er hentet fra ulike datakilder, og feil eller mangler kan forekomme. Vurderinger og sitater er innhentet på web og gir uttrykk for
hvordan naboene vurderer nabolaget. FINN.no AS kan ikke holdes ansvarlig for feil/mangler i profilen. Copyright © Finn.no AS 2026
110

## Side 111

Innholdet i nabolagsprofilen er hentet fra ulike

---

[d185_d185 | Side [1]]
 (nåværende).
38

## Side 39

OM EIENDOMMEN
Pågående plansaker i nærområdet: Bestemmelse om bebyggelse
‑ k20110088: Lade og Leangen Overført fra: Knr:5001 Gnr:6 Bnr:10
Hensikten med planarbeidet er å fastsette nye rammer Gjelder denne registerenheten med flere
for detaljplanlegging innenfor utbyggingsområdene på
Lade og Leangen. 12.08.1981 ‑ Dokumentnr: 12002 ‑ Bestemmelse om
‑ r20180055: Planprogram Leangenområdet med gjerde
Tungavegen 1, Leangen idrettsområde og deler av Bestemmelse om

---

[d185_d185 | Side [1]]
Frisiktlinje Regulert kant kjørebane
Regulert kjørefelt Regulert fotgjengerfelt Regulert støyskjerm
Regulert støttemur Sikringsgjerde Tunnel
Måle- og avstandslinje RpRegulertHøyde Midlertidig trafikkområde
Bevaring av bygninger Frisiktsone ved veg Restriksjonsområde flyplass
Høyspenningsanlegg Bolig Industri
Offentlig bygg - undervisning Kjøreveg Annen veggrunn
Gang-/sykkelveg Sykkelvei Gangveg
Kollektivanlegg Felles avkjørsel Felles gårdsplass
Bolig/Forretning/Kontor Forretning/Kontor

---

[d185_d185 | Side [1]]
info:
27.01.2026 16:35:59 Det kan forekomme feil eller manglende opplysninger i informasjonen. Side 1 av 3
101

## Side 102

Tegnforklaring
RpOmråde igangsatt RpOmråde vedtatt linje - på RpOmråde vedtatt - under
bakkenivå bakkenivå
RpOmråde vedtatt - på RpOmråde vedtatt - under Eiendomsgrense god
bakkenivå bakkenivå nøyaktighet
Eiendomsgrense dårlig Eiendomsgrense fiktiv Veg
nøyaktighet
Riksveg gatenavn . Fylkesveg gatenavn . Kommunalveg gatenavn .
Privatveg gatenavn . Plan dispensasjon punkt Avslag

---

[d185_d185 | Side [1]]
 12/17. (25.3.2004)
r0248 Ladeforbindelsen mellom Amalienlyst og jernbanen med tilstøtende områder, med bestemmelser (18.12.1986)
r0248c Haakon VII`s gate (Ladeforbindelsen) til E6 med tilliggende områder. Nye ramper. (29.8.2002)
r0306 Reguleringsplan for de østlige og sydlige bydeler (12.6.1914)
r0336 E6, Falkenborg - St. Hanshaugen m/tilknytninger til Haakon VII`gate og Innherredsveien (31.5.1990)
r1122a Rønningsbakken - Innherredsveien og eiendommen Rønningsbakken 36 (9.7.1974)
r1122b Rønningsbakken -

---

[d185_d185 | Side [1]]
eg fram til Rønningsbakken (9.3.1976)
r0161c Pinebergsvingen 12, regulering til almennyttig formål (21.10.1980)
r0161d Rønningsbakken 51 (26.4.1995)
r0161g Strindheim Skole, Bromstadvegen 1, gnr. 12/3 m.fl. Erstatter r0161e. (27.9.2001)
r0206g Endret regulering for nedre del av Brøsetvegen (13.12.1988)
r0206l Brøsetvegen 12, gnr 12 bnr 100 og 166 (4.2.1991)
r0206m Bromstadvegen 2, gnr.12/39, Nidar Bergene A/S (25.6.1991)
r0206r Brøsetvegen 2, 12/17. (25.3.2004)
r0248 Ladeforbindelsen mellom Amalienlyst og

---

[d185_d185 | Side [1]]
 E6-Øst Nidelv bru-Grillstad. Delplan 3 (23.11.2006)
5001 r1170h Thoning Owesens gate 29A og 31, KBS kjøpesenter (18.2.2010) Bolig/Forretning/Kontor 11565.15m2
5001 r1170h Thoning Owesens gate 29A og 31, KBS kjøpesenter (18.2.2010) Felles gårdsplass 3571.08m2
5001 r1170h Thoning Owesens gate 29A og 31, KBS kjøpesenter (18.2.2010) Forretning/Kontor 2958.13m2
5001 r1170h Thoning Owesens gate 29A og 31, KBS kjøpesenter (18.2.2010) Midlertidig trafikkområde 1262.76m2
5001 r1170h Thoning Owesens gate 29A og 31,

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "Salg av dødsbo med begrenset kunnskap om eiendommen: Selger (arvingene) har ikke bebodd eiendommen og mangler spesifikk kunnskap om feil og mangler. Dette øker risikoen for skjulte feil som ikke er avdekket eller opplyst om.",
      "evidence": [
        "Eiendommen selges som et dødsbo og det er ukjent om det foreligger samsvarserklæring.",
        "Selger har ikke bebodd eiendommen og har derfor ikke spesifikk kunnskap om den. Det kan derfor være skader og andre forhold ved eiendommen som ikke er spesifikt opplyst.",
        "Arvingene har begrenset kjennskap til eiendommen, og de er derfor ikke kjent med feil eller mangler utover det som fremkommer av salgsmaterialet.",
        "Hjemmelshavere: Marianne Åsaune (død). Tilstede ved inspeksjon: Nei",
        "Er selgers egenerklæring fremlagt og gjennomgått av bygningssakkyndig? Nei"
      ],
      "source_documents": [
        "d185_d185"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R2",
      "description": "Manglende samsvarserklæring for elektriske arbeider: Det er ukjent om det foreligger samsvarserklæring for elektriske arbeider utført etter 01.01.1999, noe som kan indikere ulovlig eller ufaglært elektrisk arbeid.",
      "evidence": [
        "Er det manglende samsvarserklæring på arbeider utført etter 01.01.1999? Ukjent",
        "Eiendommen selges som et dødsbo og det er ukjent om det forefinnes samsvarserklæring.",
        "Har eier opplyst om arbeider utført etter opprinnelig byggeår? Ukjent"
      ],
      "source_documents": [
        "d185_d185"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R3",
      "description": "TG2 på etasjeskille og gulv på grunn: Det er registrert stedvis slitasje på parkettgulvet, blant annet ved vindu på soverom. Dette kan medføre behov for overflatebehandling eller utskiftning.",
      "evidence": [
        "Bygningsdeler med TG2 – Etasjeskille og gulv på grunn: Tilstandsgrad 2 settes med bakgrunn i at det er registrert stedvis slitasje på parkettgulvet.",
        "Dette gjelder blant annet ved vindu på soverom som trolig stammer fra at vinduet har stått i lufteposisjon.",
        "Eventuelle tiltak vil være avhengig av personlig preferanse, men overflatebehandling og/eller utskiftninger er påregnelig.",
        "Det er med bruk av nivelleringslaser registrert lokalt avvik som er mindre enn 10mm og totalt avvik mindre enn 15mm."
      ],
      "source_documents": [
        "d185_d185"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R4",
      "description": "Bygningsdeler underlagt sameiets ansvarsområde er ikke vurdert i tilstandsrapporten: Sentrale konstruksjoner som yttervegger, tak, drenering, grunnmur og fundamenter er ikke inspisert, noe som gir et ufullstendig bilde av boligens tekniske tilstand.",
      "evidence": [
        "Det er ikke foretatt tilstandsvurdering av bygningsdeler som er underlagt sameiets ansvarsområde. Det gjelder blant annet yttervegger, takkonstruksjon, taktekking, drenering, grunnmur, grunn/fundamenter, felles trapper, felles kjeller, og felles loft."
      ],
      "source_documents": [
        "d185_d185"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R5",
      "description": "Pågående og fremtidige reguleringsplaner i nærområdet: Det er igangsatt planleggingsarbeid som berører eiendommen, herunder planer for Lade og Leangen samt Leangenområdet. Dette kan medføre endringer i nærområdet som påvirker boligens verdi og bomiljø.",
      "evidence": [
        "Er det igangsatt planleggingsarbeid på et område som inkluderer/berører eiendommen? Ja",
        "5001 k20110088 Lade og Leangen",
        "5001 r20180055 Planprogram Leangenområdet med Tungavegen 1, Leangen idrettsområde og deler av Travbanevegen og Gildheimsvegen",
        "Hensikten med planarbeidet er å fastsette nye rammer for detaljplanlegging innenfor utbyggingsområdene på Lade og Leangen."
      ],
      "source_documents": [
        "d185_d185"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R6",
      "description": "Eiendommen er regulert til flere formål inkludert restriksjonsområde flyplass og midlertidig trafikkområde: Deler av eiendommens reguleringsplan inkluderer restriksjonsområde flyplass og midlertidig trafikkområde, noe som kan medføre begrensninger på bruk og fremtidig utvikling.",
      "evidence": [
        "Eiendommen er regulert til bolig/forretning/kontor, felles gårdsplass, forretning/kontor, midlertidig trafikkområde og restriksjonsområde flyplass.",
        "5001 r1170h Thoning Owesens gate 29A og 31, KBS kjøpesenter (18.2.2010) Restriksjonsområde flyplass 4135.53m2",
        "5001 r1170h Thoning Owesens gate 29A og 31, KBS kjøpesenter (18.2.2010) Midlertidig trafikkområde 1262.76m2"
      ],
      "source_documents": [
        "d185_d185"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R7",
      "description": "Eiendommen er i kommuneplanens arealdel avsatt til fremtidig sentrumsformål og turvegtrasé: Denne arealstatusen kan innebære fremtidige endringer i nærområdet som påvirker bomiljø, støynivå og tilgjengelighet.",
      "evidence": [
        "Eiendommen er i kommuneplanens arealdel avsatt til byggesone 1, sentrumsformål (framtidig) og turvegtrase (nåværende).",
        "Sentrumsformål - Framtidig Kommuneplanens arealdel 2022-2034 (27.3.2025)",
        "Turvegtrasè - Nåværende Kommuneplanens arealdel 2022-2034 (27.3.2025)"
      ],
      "source_documents": [
        "d185_d185"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.75
    },
    {
      "risk_id": "R8",
      "description": "Ingen radonmåling er utført: Selger har ikke utført radonmåling, noe som innebærer at kjøper ikke har informasjon om eventuell radoneksponering i boligen.",
      "evidence": [
        "Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid."
      ],
      "source_documents": [
        "d185_d185"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.72
    },
    {
      "risk_id": "R9",
      "description": "Sameiet mangler sikringsordning: Sameiet har ingen sikringsordning, noe som innebærer at kjøper ikke er beskyttet mot tap dersom andre seksjonseiere misligholder sine fellesforpliktelser.",
      "evidence": [
        "Sameiet har ikke sikringsordning.",
        "Sameiet har ingen lån registrert.",
        "Ved manglende betaling av fellesutgifter har sameiet legal panterett i den enkelte eierseksjon, begrenset til inntil 2 ganger folketrygdens grunnbeløp."
      ],
      "source_documents": [
        "d185_d185"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.78
    },
    {
      "risk_id": "R10",
      "description": "Risiko for økning i felleskostnader: Det tas eksplisitt forbehold om at felleskostnader kan øke som følge av prisstigning og renteøkning. Felleskostnadene er allerede på kr 4 624 per måned.",
      "evidence": [
        "På grunn av prisstigning og renteøkning tas det forbehold om at felleskostnader kan øke.",
        "Felleskostnader kr 4 624,‑ pr. mnd",
        "Sameiet hadde i 2024 samlede driftsinntekter på kr 2 947 374 og samlede driftskostnader på kr 2 690 071. Dette ga et positivt årsresultat på kr 351 917."
      ],
      "source_documents": [
        "d185_d185"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R11",
      "description": "Endring av boligens planløsning uten søknad: Tidligere innglasset stue er åpnet mot stuen ved fjerning av glasskyvedør. Selv om tiltaket er vurdert som ikke søknadspliktig, er dette en endring fra godkjente tegninger som kan skape usikkerhet.",
      "evidence": [
        "Megler har mottatt tegninger fra kommunen datert 2011. Disse samsvarer med dagens bruk av boligen, med unntak av at tidligere innglasset stue er åpnet mot stuen ved fjerning av glasskyvedør. Tiltaket er ikke søknadspliktig."
      ],
      "source_documents": [
        "d185_d185"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.5
    },
    {
      "risk_id": "R12",
      "description": "Tinglyste heftelser og eldre bestemmelser på eiendommen: Det er tinglyst flere eldre heftelser og bestemmelser på eiendommen, herunder bestemmelser om bebyggelse fra 1981 og 1982, som kan påvirke bruken av eiendommen.",
      "evidence": [
        "14.12.1982 – Dokumentnr: 20157 – Bestemmelse om bebyggelse",
        "06.12.1982 – Dokumentnr: 19645 – Bestemmelse om bebyggelse",
        "12.08.1981 – Dokumentnr: 12002 – Bestemmelse om gjerde",
        "26.06.1984 – Dokumentnr: 11798 – Erklæring/avtale Midlertidig"
      ],
      "source_documents": [
        "d185_d185"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.6
    },
    {
      "risk_id": "R13",
      "description": "Eiendomsskatt: Eiendommen er ilagt eiendomsskatt på kr 8 831 (2023), noe som er en løpende kostnad kjøper må påregne i tillegg til felleskostnader.",
      "evidence": [
        "Eiendomsskatt Kr 8 831,‑ (2023). Eiendomsskatten ble i 2023 beregnet til kr. 8 831,‑"
      ],
      "source_documents": [
        "d185_d185"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R14",
      "description": "Reklamasjonsperioden for sameiet er nylig utløpt: 2024 var det første hele driftsår etter at reklamasjonsperioden var over, noe som betyr at eventuelle skjulte byggefeil nå faller på sameiet og seksjonseierne.",
      "evidence": [
        "2024 var det første hele driftsår etter at reklamasjonsperioden var over. Styret..."
      ],
      "source_documents": [
        "d185_d185"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.78
    }
  ],
  "re_retrieval_queries": [
    "Hva inneholder styrets årsrapport 2025 om vedlikeholdsbehov og fremtidige kostnader i Falkenborg Sameie?",
    "Er det vedtatt eller planlagt rehabilitering av fasade, tak eller andre fellesarealer i sameiet?",
    "Hva er innholdet i de tinglyste bestemmelsene om bebyggelse fra 1981 og 1982, og hvilke konkrete begrensninger medfører disse?",
    "Hva er konsekvensene av restriksjonsområde flyplass for beboere – støy, høydebegrensninger eller andre restriksjoner?",
    "Foreligger det ferdigattest for eiendommen, og er det avvik mellom godkjente tegninger og faktisk bruk utover glasskyvedøren?",
    "Hva er sameiets vedlikeholdsplan og fremtidige budsjett for 2025 og fremover?"
  ],
  "reasoning": "\n**Gjennomgang av identifiserte risikoer:**\n\n**R1 – Dødsbo / begrenset kunnskap (0.95 → 0.97):** Meget godt dokumentert i flere uavhengige kilder i salgsmaterialet. Hjemmelshaver er bekreftet død, selgers egenerklæring er ikke gjennomgått av bygningssakkyndig, og arvingene bekrefter begrenset kjennskap. Confidence justeres marginalt opp til 0.97 da evidensen er svært sterk og konsistent.\n\n**R2 – Manglende samsvarserklæring elektro (0.88 → 0.88):** Godt dokumentert. Tre separate evidenspunkter bekrefter at situasjonen er ukjent. Confidence opprettholdes.\n\n**R3 – TG2 etasjeskille/gulv (0.85 → 0.90):** Evidensen er solid og direkte fra tilstandsrapporten. Nivelleringslaser er brukt og avvik er kvantifisert. Årsak er identifisert (lufteposisjon vindu). Confidence justeres opp til 0.90 da dokumentasjonen er presis.\n\n**R4 – Sameiets bygningsdeler ikke vurdert (0.90 → 0.92):** Direkte og eksplisitt bekreftet i tilstandsrapporten under \"Egne premisser\". Lister opp konkrete bygningsdeler. Confidence justeres marginalt opp.\n\n**R5 – Reguleringsplaner i nærområdet (0.82 → 0.82):** Godt dokumentert i planstatus. Confidence opprettholdes.\n\n**R6 – Restriksjonsområde flyplass og midlertidig trafikkområde (0.78 → 0.80):** Godt dokumentert med konkrete arealtall. Confidence justeres marginalt opp. Det mangler imidlertid informasjon om de praktiske konsekvensene av disse reguleringene for beboere.\n\n**R7 – Kommuneplanens arealdel (0.75 → 0.75):** Godt dokumentert. Confidence opprettholdes.\n\n**R8 – Ingen radonmåling (0.72 → 0.72):** Dokumentert, men risikoen er moderat da det ikke er lovpålagt for denne boligtypen. Confidence opprettholdes.\n\n**R9 – Manglende sikringsordning (0.80 → 0.78):** Bekreftet i dokumentene. Tilleggsinfo om legal panterett (2G) er funnet, som delvis kompenserer for manglende sikringsordning. Confidence justeres marginalt ned.\n\n**R10 – Økning i felleskostnader (0.78 → 0.80):** Godt dokumentert med eksplisitt forbehold i salgsoppgaven. Regnskapet viser positivt resultat i 2024, men dette gir ikke garanti for fremtiden. Confidence justeres marginalt opp.\n\n**R11 – Planløsningsendring uten søknad (0.60 → 0.50):** Tiltaket er eksplisitt vurdert som ikke søknadspliktig av megler. Risikoen er reell men begrenset. Confidence justeres ned til 0.50 da dette er en lav risiko.\n\n**R12 – Tinglyste heftelser (0.65 → 0.60):** Heftelsene er dokumentert, men det fremgår ikke av tilgjengelig materiale hva de konkret innebærer for kjøper. Confidence justeres marginalt ned da innholdet i bestemmelsene er ukjent.\n\n**Nye risikoer identifisert:**\n\n**R13 – Eiendomsskatt:** Eiendommen er ilagt eiendomsskatt på kr 8 831 (2023). Dette er en løpende kostnad som ikke er inkludert i felleskostnadene og som kjøper må påregne. Confidence: 0.85.\n\n**R14 – Reklamasjonsperioden utløpt:** Dokumentet nevner at 2024 var første hele driftsår etter at reklamasjonsperioden var over. Dette er en vesentlig risiko da eventuelle skjulte byggefeil fra 2013 nå ikke lenger kan rettes av utbygger, men må dekkes av sameiet/seksjonseierne selv. Confidence: 0.78.\n\n**Manglende informasjon:**\n- Innholdet i styrets årsrapport 2025 er delvis referert men ikke fullstendig gjengitt – det er uklart om det er identifisert vedlikeholdsbehov.\n- Konsekvensene av restriksjonsområde flyplass er ikke nærmere beskrevet.\n- Innholdet i de tinglyste bestemmelsene fra 1981-1984 er ikke tilgjengelig.\n- Det er uklart om ferdigattest foreligger.\n- Sameiets vedlikeholdsplan og fremtidige budsjett mangler.\n"
}

## Raw Response
```json
{
  "id": "msg_01AZYmGZbsSEu9rK7SFSn81c",
  "container": null,
  "content": [
    {
      "id": "toolu_019MHBv7f53Kcw12GHmnBLK3",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "Salg av dødsbo med begrenset kunnskap om eiendommen: Selger (arvingene) har ikke bebodd eiendommen og mangler spesifikk kunnskap om feil og mangler. Dette øker risikoen for skjulte feil som ikke er avdekket eller opplyst om.",
            "evidence": [
              "Eiendommen selges som et dødsbo og det er ukjent om det foreligger samsvarserklæring.",
              "Selger har ikke bebodd eiendommen og har derfor ikke spesifikk kunnskap om den. Det kan derfor være skader og andre forhold ved eiendommen som ikke er spesifikt opplyst.",
              "Arvingene har begrenset kjennskap til eiendommen, og de er derfor ikke kjent med feil eller mangler utover det som fremkommer av salgsmaterialet.",
              "Hjemmelshavere: Marianne Åsaune (død). Tilstede ved inspeksjon: Nei",
              "Er selgers egenerklæring fremlagt og gjennomgått av bygningssakkyndig? Nei"
            ],
            "source_documents": [
              "d185_d185"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R2",
            "description": "Manglende samsvarserklæring for elektriske arbeider: Det er ukjent om det foreligger samsvarserklæring for elektriske arbeider utført etter 01.01.1999, noe som kan indikere ulovlig eller ufaglært elektrisk arbeid.",
            "evidence": [
              "Er det manglende samsvarserklæring på arbeider utført etter 01.01.1999? Ukjent",
              "Eiendommen selges som et dødsbo og det er ukjent om det forefinnes samsvarserklæring.",
              "Har eier opplyst om arbeider utført etter opprinnelig byggeår? Ukjent"
            ],
            "source_documents": [
              "d185_d185"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R3",
            "description": "TG2 på etasjeskille og gulv på grunn: Det er registrert stedvis slitasje på parkettgulvet, blant annet ved vindu på soverom. Dette kan medføre behov for overflatebehandling eller utskiftning.",
            "evidence": [
              "Bygningsdeler med TG2 – Etasjeskille og gulv på grunn: Tilstandsgrad 2 settes med bakgrunn i at det er registrert stedvis slitasje på parkettgulvet.",
              "Dette gjelder blant annet ved vindu på soverom som trolig stammer fra at vinduet har stått i lufteposisjon.",
              "Eventuelle tiltak vil være avhengig av personlig preferanse, men overflatebehandling og/eller utskiftninger er påregnelig.",
              "Det er med bruk av nivelleringslaser registrert lokalt avvik som er mindre enn 10mm og totalt avvik mindre enn 15mm."
            ],
            "source_documents": [
              "d185_d185"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R4",
            "description": "Bygningsdeler underlagt sameiets ansvarsområde er ikke vurdert i tilstandsrapporten: Sentrale konstruksjoner som yttervegger, tak, drenering, grunnmur og fundamenter er ikke inspisert, noe som gir et ufullstendig bilde av boligens tekniske tilstand.",
            "evidence": [
              "Det er ikke foretatt tilstandsvurdering av bygningsdeler som er underlagt sameiets ansvarsområde. Det gjelder blant annet yttervegger, takkonstruksjon, taktekking, drenering, grunnmur, grunn/fundamenter, felles trapper, felles kjeller, og felles loft."
            ],
            "source_documents": [
              "d185_d185"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R5",
            "description": "Pågående og fremtidige reguleringsplaner i nærområdet: Det er igangsatt planleggingsarbeid som berører eiendommen, herunder planer for Lade og Leangen samt Leangenområdet. Dette kan medføre endringer i nærområdet som påvirker boligens verdi og bomiljø.",
            "evidence": [
              "Er det igangsatt planleggingsarbeid på et område som inkluderer/berører eiendommen? Ja",
              "5001 k20110088 Lade og Leangen",
              "5001 r20180055 Planprogram Leangenområdet med Tungavegen 1, Leangen idrettsområde og deler av Travbanevegen og Gildheimsvegen",
              "Hensikten med planarbeidet er å fastsette nye rammer for detaljplanlegging innenfor utbyggingsområdene på Lade og Leangen."
            ],
            "source_documents": [
              "d185_d185"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R6",
            "description": "Eiendommen er regulert til flere formål inkludert restriksjonsområde flyplass og midlertidig trafikkområde: Deler av eiendommens reguleringsplan inkluderer restriksjonsområde flyplass og midlertidig trafikkområde, noe som kan medføre begrensninger på bruk og fremtidig utvikling.",
            "evidence": [
              "Eiendommen er regulert til bolig/forretning/kontor, felles gårdsplass, forretning/kontor, midlertidig trafikkområde og restriksjonsområde flyplass.",
              "5001 r1170h Thoning Owesens gate 29A og 31, KBS kjøpesenter (18.2.2010) Restriksjonsområde flyplass 4135.53m2",
              "5001 r1170h Thoning Owesens gate 29A og 31, KBS kjøpesenter (18.2.2010) Midlertidig trafikkområde 1262.76m2"
            ],
            "source_documents": [
              "d185_d185"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R7",
            "description": "Eiendommen er i kommuneplanens arealdel avsatt til fremtidig sentrumsformål og turvegtrasé: Denne arealstatusen kan innebære fremtidige endringer i nærområdet som påvirker bomiljø, støynivå og tilgjengelighet.",
            "evidence": [
              "Eiendommen er i kommuneplanens arealdel avsatt til byggesone 1, sentrumsformål (framtidig) og turvegtrase (nåværende).",
              "Sentrumsformål - Framtidig Kommuneplanens arealdel 2022-2034 (27.3.2025)",
              "Turvegtrasè - Nåværende Kommuneplanens arealdel 2022-2034 (27.3.2025)"
            ],
            "source_documents": [
              "d185_d185"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.75
          },
          {
            "risk_id": "R8",
            "description": "Ingen radonmåling er utført: Selger har ikke utført radonmåling, noe som innebærer at kjøper ikke har informasjon om eventuell radoneksponering i boligen.",
            "evidence": [
              "Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid."
            ],
            "source_documents": [
              "d185_d185"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.72
          },
          {
            "risk_id": "R9",
            "description": "Sameiet mangler sikringsordning: Sameiet har ingen sikringsordning, noe som innebærer at kjøper ikke er beskyttet mot tap dersom andre seksjonseiere misligholder sine fellesforpliktelser.",
            "evidence": [
              "Sameiet har ikke sikringsordning.",
              "Sameiet har ingen lån registrert.",
              "Ved manglende betaling av fellesutgifter har sameiet legal panterett i den enkelte eierseksjon, begrenset til inntil 2 ganger folketrygdens grunnbeløp."
            ],
            "source_documents": [
              "d185_d185"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.78
          },
          {
            "risk_id": "R10",
            "description": "Risiko for økning i felleskostnader: Det tas eksplisitt forbehold om at felleskostnader kan øke som følge av prisstigning og renteøkning. Felleskostnadene er allerede på kr 4 624 per måned.",
            "evidence": [
              "På grunn av prisstigning og renteøkning tas det forbehold om at felleskostnader kan øke.",
              "Felleskostnader kr 4 624,‑ pr. mnd",
              "Sameiet hadde i 2024 samlede driftsinntekter på kr 2 947 374 og samlede driftskostnader på kr 2 690 071. Dette ga et positivt årsresultat på kr 351 917."
            ],
            "source_documents": [
              "d185_d185"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R11",
            "description": "Endring av boligens planløsning uten søknad: Tidligere innglasset stue er åpnet mot stuen ved fjerning av glasskyvedør. Selv om tiltaket er vurdert som ikke søknadspliktig, er dette en endring fra godkjente tegninger som kan skape usikkerhet.",
            "evidence": [
              "Megler har mottatt tegninger fra kommunen datert 2011. Disse samsvarer med dagens bruk av boligen, med unntak av at tidligere innglasset stue er åpnet mot stuen ved fjerning av glasskyvedør. Tiltaket er ikke søknadspliktig."
            ],
            "source_documents": [
              "d185_d185"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.5
          },
          {
            "risk_id": "R12",
            "description": "Tinglyste heftelser og eldre bestemmelser på eiendommen: Det er tinglyst flere eldre heftelser og bestemmelser på eiendommen, herunder bestemmelser om bebyggelse fra 1981 og 1982, som kan påvirke bruken av eiendommen.",
            "evidence": [
              "14.12.1982 – Dokumentnr: 20157 – Bestemmelse om bebyggelse",
              "06.12.1982 – Dokumentnr: 19645 – Bestemmelse om bebyggelse",
              "12.08.1981 – Dokumentnr: 12002 – Bestemmelse om gjerde",
              "26.06.1984 – Dokumentnr: 11798 – Erklæring/avtale Midlertidig"
            ],
            "source_documents": [
              "d185_d185"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.6
          },
          {
            "risk_id": "R13",
            "description": "Eiendomsskatt: Eiendommen er ilagt eiendomsskatt på kr 8 831 (2023), noe som er en løpende kostnad kjøper må påregne i tillegg til felleskostnader.",
            "evidence": [
              "Eiendomsskatt Kr 8 831,‑ (2023). Eiendomsskatten ble i 2023 beregnet til kr. 8 831,‑"
            ],
            "source_documents": [
              "d185_d185"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R14",
            "description": "Reklamasjonsperioden for sameiet er nylig utløpt: 2024 var det første hele driftsår etter at reklamasjonsperioden var over, noe som betyr at eventuelle skjulte byggefeil nå faller på sameiet og seksjonseierne.",
            "evidence": [
              "2024 var det første hele driftsår etter at reklamasjonsperioden var over. Styret..."
            ],
            "source_documents": [
              "d185_d185"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.78
          }
        ],
        "re_retrieval_queries": [
          "Hva inneholder styrets årsrapport 2025 om vedlikeholdsbehov og fremtidige kostnader i Falkenborg Sameie?",
          "Er det vedtatt eller planlagt rehabilitering av fasade, tak eller andre fellesarealer i sameiet?",
          "Hva er innholdet i de tinglyste bestemmelsene om bebyggelse fra 1981 og 1982, og hvilke konkrete begrensninger medfører disse?",
          "Hva er konsekvensene av restriksjonsområde flyplass for beboere – støy, høydebegrensninger eller andre restriksjoner?",
          "Foreligger det ferdigattest for eiendommen, og er det avvik mellom godkjente tegninger og faktisk bruk utover glasskyvedøren?",
          "Hva er sameiets vedlikeholdsplan og fremtidige budsjett for 2025 og fremover?"
        ],
        "reasoning": "\n**Gjennomgang av identifiserte risikoer:**\n\n**R1 – Dødsbo / begrenset kunnskap (0.95 → 0.97):** Meget godt dokumentert i flere uavhengige kilder i salgsmaterialet. Hjemmelshaver er bekreftet død, selgers egenerklæring er ikke gjennomgått av bygningssakkyndig, og arvingene bekrefter begrenset kjennskap. Confidence justeres marginalt opp til 0.97 da evidensen er svært sterk og konsistent.\n\n**R2 – Manglende samsvarserklæring elektro (0.88 → 0.88):** Godt dokumentert. Tre separate evidenspunkter bekrefter at situasjonen er ukjent. Confidence opprettholdes.\n\n**R3 – TG2 etasjeskille/gulv (0.85 → 0.90):** Evidensen er solid og direkte fra tilstandsrapporten. Nivelleringslaser er brukt og avvik er kvantifisert. Årsak er identifisert (lufteposisjon vindu). Confidence justeres opp til 0.90 da dokumentasjonen er presis.\n\n**R4 – Sameiets bygningsdeler ikke vurdert (0.90 → 0.92):** Direkte og eksplisitt bekreftet i tilstandsrapporten under \"Egne premisser\". Lister opp konkrete bygningsdeler. Confidence justeres marginalt opp.\n\n**R5 – Reguleringsplaner i nærområdet (0.82 → 0.82):** Godt dokumentert i planstatus. Confidence opprettholdes.\n\n**R6 – Restriksjonsområde flyplass og midlertidig trafikkområde (0.78 → 0.80):** Godt dokumentert med konkrete arealtall. Confidence justeres marginalt opp. Det mangler imidlertid informasjon om de praktiske konsekvensene av disse reguleringene for beboere.\n\n**R7 – Kommuneplanens arealdel (0.75 → 0.75):** Godt dokumentert. Confidence opprettholdes.\n\n**R8 – Ingen radonmåling (0.72 → 0.72):** Dokumentert, men risikoen er moderat da det ikke er lovpålagt for denne boligtypen. Confidence opprettholdes.\n\n**R9 – Manglende sikringsordning (0.80 → 0.78):** Bekreftet i dokumentene. Tilleggsinfo om legal panterett (2G) er funnet, som delvis kompenserer for manglende sikringsordning. Confidence justeres marginalt ned.\n\n**R10 – Økning i felleskostnader (0.78 → 0.80):** Godt dokumentert med eksplisitt forbehold i salgsoppgaven. Regnskapet viser positivt resultat i 2024, men dette gir ikke garanti for fremtiden. Confidence justeres marginalt opp.\n\n**R11 – Planløsningsendring uten søknad (0.60 → 0.50):** Tiltaket er eksplisitt vurdert som ikke søknadspliktig av megler. Risikoen er reell men begrenset. Confidence justeres ned til 0.50 da dette er en lav risiko.\n\n**R12 – Tinglyste heftelser (0.65 → 0.60):** Heftelsene er dokumentert, men det fremgår ikke av tilgjengelig materiale hva de konkret innebærer for kjøper. Confidence justeres marginalt ned da innholdet i bestemmelsene er ukjent.\n\n**Nye risikoer identifisert:**\n\n**R13 – Eiendomsskatt:** Eiendommen er ilagt eiendomsskatt på kr 8 831 (2023). Dette er en løpende kostnad som ikke er inkludert i felleskostnadene og som kjøper må påregne. Confidence: 0.85.\n\n**R14 – Reklamasjonsperioden utløpt:** Dokumentet nevner at 2024 var første hele driftsår etter at reklamasjonsperioden var over. Dette er en vesentlig risiko da eventuelle skjulte byggefeil fra 2013 nå ikke lenger kan rettes av utbygger, men må dekkes av sameiet/seksjonseierne selv. Confidence: 0.78.\n\n**Manglende informasjon:**\n- Innholdet i styrets årsrapport 2025 er delvis referert men ikke fullstendig gjengitt – det er uklart om det er identifisert vedlikeholdsbehov.\n- Konsekvensene av restriksjonsområde flyplass er ikke nærmere beskrevet.\n- Innholdet i de tinglyste bestemmelsene fra 1981-1984 er ikke tilgjengelig.\n- Det er uklart om ferdigattest foreligger.\n- Sameiets vedlikeholdsplan og fremtidige budsjett mangler.\n"
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
    "input_tokens": 20902,
    "output_tokens": 5101,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
