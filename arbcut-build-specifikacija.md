# BUILD SPECIFIKACIJA: Arboristo (medžių priežiūra / avariniai pjovimai) svetainė

> **Niša:** medžių priežiūra, genėjimas, avariniai (24/7) medžių pjovimai, kelmų šalinimas.
> **Tikslas:** high-converting paslaugų verslo svetainė — kiekvienas ekranas veda į skambutį arba užklausą.
> **Modelis:** struktūra paremta glassexpertsfl.org (patikrintu konversijos šablonu), pritaikyta šitai nišai.
> **Kalba:** viskas lietuviškai, su taisyklingais diakritiniais ženklais (ąčęėįšųūž).

---

## 0. SVARBIAUSIA — IŠ KUR IMTI TURINĮ IR KUR DIRBTI

> Claude Code — perskaityk ŠITĄ skyrių pirmiausia.

### 0.1. Realus turinys
**VISĄ realų turinį, nuotraukas, paslaugų aprašymus, kontaktus, kainas, atsiliepimus ir įmonės informaciją imk iš esamo projekto folderio:**

```
codeprojects/arbcut/
```

Tai reali, jau egzistuojanti svetainė, kurią sukūriau šitam arboristui. Pirmiausia:
1. **Peržiūrėk visą `codeprojects/arbcut/` turinį** — visus puslapius, tekstus, nuotraukas (`/assets`, `/images`, `/public` ar pan.), kontaktinius duomenis, paslaugų sąrašą, atsiliepimus, įmonės pavadinimą, telefoną, el. paštą, aptarnaujamas vietoves, darbo laiką.
2. **Sudaryk turinio inventorių** — surašyk, ką radai (paslaugos, tekstai, nuotraukos, kontaktai), ir parodyk man PRIEŠ kurdamas. Jei kažko trūksta (pvz. nėra atsiliepimų ar tam tikros nuotraukos) — pažymėk placeholder'iu ir paklausk manęs.
3. **Naudok TIKRUS duomenis, ne išgalvotus.** Telefonas, pavadinimas, vietovės, paslaugos — viskas iš arbcut folderio. Jokių prasimanytų faktų.

### 0.2. Kur dirbti
**Visą naują svetainę kurk NAUJAME, atskirame folderyje** (pvz. `codeprojects/arbcut-v2/` arba kaip nurodysiu). **NEMODIFIKUOK originalaus `codeprojects/arbcut/`** — jis lieka kaip turinio šaltinis ir atsarginė kopija.

### 0.3. Dizaino skillas
**Naudok įdiegtą `UI UX Pro Max` skillą** — leisk jam surasti ir parinkti geriausią template/dizaino kryptį šitai nišai (medžių priežiūra: gamta, žalia/ruda paletė, patikimumas, jėga, saugumas). Skillo parinktą vizualinį pagrindą sujunk su žemiau aprašyta konversine struktūra.

---

## 1. KONVERSINĖS STRUKTŪROS ESMĖ (ką perimti iš glassexpertsfl.org)

Tai NE portfolio. Tai konversijos mašina. Principai:

1. **CTA visur** — „Gauti nemokamą pasiūlymą" / „Skambinti dabar" kartojasi header'yje, hero, kas antroje sekcijoje, footer'yje.
2. **Forma jau pirmame ekrane** (hero) — Vardas, Telefonas, Trumpa žinutė, „Siųsti". Trumpa = daugiau užpildymų.
3. **Telefonas matomas nuolat** (lipnus header), mobiliajame — `tel:` nuoroda + sticky „Skambinti" baras apačioje.
4. **Avarinė linija pabrėžta** — šitoj nišoj „24/7 avarinis medžių pjovimas" yra stiprus konversijos kabliukas. Atskiras ryškus CTA „Avarinė pagalba 24/7" su telefonu.
5. **Atskiri puslapiai kiekvienai paslaugai IR kiekvienai vietovei** — lokalus SEO.
6. **Pasitikėjimo signalai gausiai** — atsiliepimai, „apdrausta", „sertifikuoti arboristai", garantijos, prieš/po nuotraukos.

---

## 2. PUSLAPIŲ ŽEMĖLAPIS

```
/                              Pagrindinis
/apie-mus                      Apie įmonę / arboristą
/paslaugos/[slug]              Paslaugų puslapiai (vienas šablonas × N)
   pvz.: /paslaugos/medziu-genejimas
         /paslaugos/avarinis-medziu-pjovimas
         /paslaugos/medziu-salinimas
         /paslaugos/kelmu-frezavimas
         /paslaugos/krumu-tvarkymas
   (TIKSLŲ sąrašą imk iš arbcut folderio)
/[vietove]                     Vietovių puslapiai (vienas šablonas × N)
   pvz.: /medziu-pjovimas-kaunas
         /medziu-pjovimas-vilnius
   (vietoves imk iš arbcut)
/galerija                      Atlikti darbai (realios nuotraukos iš arbcut)
/tinklarastis                  Blog (SEO + GEO turiniui)
/tinklarastis/[slug]
/kontaktai
/privatumo-politika
/taisykles
```

---

## 3. PAGRINDINIO PUSLAPIO SEKCIJOS (iš eilės)

> Turinį visoms sekcijoms imk iš `codeprojects/arbcut/`.

1. **HERO** — fono nuotrauka (medžių darbai / arboristas su įranga), didelė antraštė `[ĮMONĖ] — medžių priežiūra ir avariniai pjovimai [mieste]`, paantraštė, dešinėje užklausos forma. Ryškus antrinis CTA: „Avarinė pagalba 24/7 — skambinkite".
2. **PASITIKĖJIMO JUOSTA** — `Sertifikuoti arboristai · Apdrausta veikla · 24/7 avarinė pagalba · [X]+ metų patirtis · Nemokamas įvertinimas`.
3. **APIE MUS** — arboristo istorija + reali nuotrauka, soc. ikonos.
4. **PASLAUGOS** — kortelės (nuotrauka + pavadinimas + rodyklė), veda į `/paslaugos/[slug]`.
5. **PROCESAS** — žingsniai: `Susisiekite → Nemokamas įvertinimas → Saugus darbo atlikimas → Sutvarkome teritoriją`.
6. **GALERIJA** — realios prieš/po nuotraukos iš arbcut, „Žiūrėti visas" mygtukas.
7. **ATSILIEPIMAI** — realūs (iš arbcut / Google), karuselė, „Palikti atsiliepimą" mygtukas.
8. **KODĖL MES / SAUGUMAS** — pabrėžk draudimą, sertifikatus, saugų darbą prie pastatų/elektros linijų (svarbu šitoj nišoj).
9. **DUK** — akordeonas: „Ar įvertinimas nemokamas?", „Ar dirbate avariniais atvejais naktį/savaitgalį?", „Ar esate apdrausti?", „Ar pasirūpinate šakų išvežimu?", „Kiek kainuoja medžio pašalinimas?".
10. **VIETOVĖS** — žemėlapis + aptarnaujamų vietovių sąrašas (iš arbcut), nuorodos į vietovių puslapius.
11. **GALUTINIS CTA** — „Reikia pašalinti pavojingą medį? Skambinkite dabar." + mygtukas + telefonas.
12. **FOOTER** — kontaktai, paslaugos, vietovės, darbo laikas, soc. tinklai, teisinės nuorodos.

---

## 4. PASLAUGOS PUSLAPIO ŠABLONAS (`/paslaugos/[slug]`)
Hero (paslaugos pavadinimas + CTA) → ilgas unikalus SEO tekstas (iš arbcut, papildyk jei reikia) → atsiliepimai → procesas → vietovės → CTA → footer. Generuok iš duomenų masyvo, ne ranka.

## 5. VIETOVĖS PUSLAPIO ŠABLONAS (`/[vietove]`)
Hero su miesto pavadinimu antraštėje → trumpas LOKALIZUOTAS tekstas (kiekvienam miestui ŠIEK TIEK skirtingas, ne kopija) → atsiliepimai → procesas → CTA → footer.

---

## 6. ⭐ DIZAINAS IR ANIMACIJOS

- **Skillas:** dizaino pagrindą parink per `UI UX Pro Max` skillą, pritaikytą medžių priežiūros nišai (natūrali paletė: gilus žalias, žemės ruda, akcentas — ryškus oranžinis/geltonas CTA; jėgos ir patikimumo jausmas).
- **Pasikartojantys elementai:** „eyebrow" ženkliukai virš antraščių, akcentinės linijos, banguoti/organiški sekcijų kraštai, kortelės su hover pakilimu.
- **Animacijos (subtilios, gerbia `prefers-reduced-motion`):**
  - scroll-reveal (fade + slide-up, stagger kortelėms),
  - hero Ken Burns zoom + antraštės laipsniškas atsiradimas,
  - count-up skaičiams pasitikėjimo juostoje,
  - paslaugų kortelių nuotraukų hover zoom,
  - proceso linijos „nusipiešimas" skrolinant,
  - sklandi atsiliepimų karuselė,
  - akordeono perėjimai,
  - protingas lipnus header (susitraukia skrolinant),
  - mobilus sticky „Skambinti 24/7" baras apačioje.
- **Stabdis:** jokio parallax perdozo, jokių lakstančių elementų. Subtilu ir profesionalu.

---

## 7. CHATBOTO INTEGRACIJA

> Klientas to nori — įdiek.

- Pokalbių valdiklis apatiniame dešiniajame kampe.
- Funkcija: surinkti užklausą (vardas, telefonas, problema) ir/arba atsakyti į DUK tipo klausimus apie paslaugas, kainas, avarinę pagalbą.
- **Įgyvendinimo variantai (pasiūlyk man, kurį naudoti):**
  - Paprastas: rule-based / scripted bot su DUK ir užklausos surinkimu (be API kaštų).
  - Pažangus: LLM-pagrįstas (pvz. per API) su žiniomis iš svetainės turinio — atsako natūraliai, eskaluoja į telefoną avariniais atvejais.
- **Svarbu:** botas VISADA turi vesti į konversiją — avariniu atveju iškart rodyti telefono numerį ir „Skambinti" mygtuką, ne laikyti pokalbyje.
- Pritaikyk vizualiai prie dizaino (ne default widget'as).

---

## 8. ⭐ SEO + GEO (vienas iš pagrindinių prioritetų)

### 8.1. Klasikinis SEO
- `lang="lt"`, unikalūs `<title>` ir `meta description` KIEKVIENAM puslapiui.
- Semantinis HTML, `<h1>`–`<h3>` hierarchija.
- `sitemap.xml`, `robots.txt`, Open Graph žymos.
- Optimizuotos nuotraukos (WebP, lazy-load, aprašomi alt tekstai su raktažodžiais).
- Greitas užkrovimas (Core Web Vitals).
- Lokalūs raktažodžiai: „medžių pjovimas [miestas]", „avarinis medžių šalinimas", „arboristas [miestas]", „medžių genėjimas".

### 8.2. GEO (Generative Engine Optimization) — kad LLM'ai (ChatGPT, Perplexity, Gemini, Claude) rekomenduotų šitą verslą
Kai žmonės klausia LLM'o „kas pašalintų pavojingą medį [mieste]?", verslas turi būti cituojamas. Tam:

- **Struktūruoti duomenys (JSON-LD), pilnai užpildyti:**
  - `LocalBusiness` (tiksli NAP — pavadinimas, adresas, telefonas, darbo laikas, geo koordinatės, aptarnaujamos vietovės `areaServed`).
  - `Service` kiekvienai paslaugai.
  - `FAQPage` DUK sekcijoms.
  - `AggregateRating` + `Review` (iš realių atsiliepimų).
- **`llms.txt` failas** svetainės šaknyje — santrauka LLM'ams: kas yra įmonė, ką daro, kokias vietoves aptarnauja, kontaktai, kuo išskirtinė. Aiškiai, faktiškai.
- **Q&A formato turinys** — DUK ir tinklaraščio straipsniai, parašyti taip, kaip žmonės KLAUSIA LLM'ų (pilnais sakiniais, natūralia šnekamąja kalba). Pvz. straipsnis „Kiek kainuoja medžio pašalinimas Lietuvoje?" su konkrečiu, struktūruotu atsakymu.
- **Aiški entiteto apibrėžtis** — kiekvienas puslapis vienareikšmiškai pasako KAS (įmonė), KĄ (paslauga), KUR (vietovė), KAIP SUSISIEKTI. Nuosekli NAP visur.
- **Cituojami, konkretūs faktai** — patirtis metais, sertifikatai, aptarnautų objektų skaičius, atsako laikas avariniu atveju. LLM'ai mėgsta konkretumą.
- **Autoritetingas, tikslus tekstas** — be tuščių marketingo frazių; faktai, kuriuos LLM gali saugiai cituoti.
- **Tinklaraščio GEO strategija:** straipsniai, atsakantys į realius klausimus („Ar reikia leidimo medžiui pjauti privačiame sklype?", „Kaip atpažinti pavojingą medį?", „Ką daryti, jei medis užvirto ant namo?") — tai pritraukia tiek Google, tiek LLM citatas.

---

## 9. KO NEDARYTI
- ❌ Nemodifikuoti originalaus `codeprojects/arbcut/`.
- ❌ Nenaudoti išgalvotų faktų — viskas iš realaus folderio.
- ❌ Vienodo teksto vietovių puslapiuose (Google baudžia už dubliavimą).
- ❌ Animacijų perdozo.
- ❌ Default neapdoroto chatboto widget'o — pritaikyk dizainui.

---

## 10. CLAUDE CODE DARBO EIGA
1. Perskaityk šią specifikaciją.
2. **Peržiūrėk `codeprojects/arbcut/`** ir sudaryk turinio inventorių — parodyk man.
3. Per `UI UX Pro Max` skillą parink dizaino kryptį nišai — parodyk man variantą.
4. Sukurk projekto struktūrą NAUJAME folderyje + dizaino sistemą + bendrus komponentus (header, footer, forma, CTA, sticky baras, chatbotas).
5. Sukurk pagrindinį puslapį su visomis sekcijomis ir animacijomis (realus turinys iš arbcut).
6. Sukurk paslaugų šabloną + duomenis → visi paslaugų puslapiai.
7. Sukurk vietovių šabloną + duomenis → visi vietovių puslapiai.
8. Sukurk galeriją, tinklaraštį (su GEO straipsniais), kontaktus, teisinius.
9. Įdiek pilną SEO + GEO (JSON-LD, llms.txt, meta, sitemap).
10. Įdiek ir pritaikyk chatbotą.
11. Patikrink mobiliąją versiją + `prefers-reduced-motion`.
12. **Po kiekvieno etapo trumpai parodyk rezultatą**, kad galėčiau koreguoti.

---

## 11. KONTEKSTAS (kas vyks už svetainės ribų — informacijai)
Klientui atskirai bus diegiama: missed-call text-back ant jo telefono ir Google atsiliepimų automatizacija. Tai NĖRA šios svetainės dalis, bet dizainuojant verta palikti vietos atsiliepimų rodymui (jų bus daugiau) ir aiškų „Palikti atsiliepimą" srautą (nuoroda į Google).
```
```
KINTAMIEJI (užpildyk iš arbcut folderio, jei neranda — paklausk):
ĮMONĖS_PAVADINIMAS:   [iš arbcut]
TELEFONAS:            [iš arbcut]
EL_PASTAS:            [iš arbcut]
PAGRINDINIS_MIESTAS:  [iš arbcut]
PASLAUGOS:            [iš arbcut]
VIETOVĖS:             [iš arbcut]
ATSILIEPIMAI:         [iš arbcut / Google]
GOOGLE_PLACE_ID:      [iš arbcut, jei yra]
```
