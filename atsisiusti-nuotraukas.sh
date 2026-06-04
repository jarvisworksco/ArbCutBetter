#!/usr/bin/env bash
#
# Atsisiunčia visas Mantas Gerulis (paslaugos.lt) nuotraukas į folderius.
# Paleidimas:
#   chmod +x atsisiusti-nuotraukas.sh
#   ./atsisiusti-nuotraukas.sh
#
# Reikalavimai: curl (yra macOS/Linux pagal nutylėjimą).
# Sukuria katalogą "nuotraukos/" su poaplankiais:
#   nuotraukos/paslaugos/<paslauga>/   — po 1 reprezentacinę nuotrauką kiekvienai paslaugai
#   nuotraukos/galerija/               — visa darbų galerija (86 nuotraukos)
#
# Pastaba: bendra galerija (86 nuotr.) portale NĖRA suskirstyta pagal paslaugą,
# todėl jos visos eina į "galerija/". Pagal paslaugą surūšiuotos tik tos 11,
# kurias portalas pats priskiria paslaugoms.

set -e
UA="Mozilla/5.0 (compatible; photo-archive/1.0)"
ROOT="nuotraukos"
SVC="$ROOT/paslaugos"
GAL="$ROOT/galerija"
mkdir -p "$GAL"

dl () {  # dl <url> <iseities_failas>
  if curl -fsSL -A "$UA" "$1" -o "$2"; then
    echo "  OK  $2"
  else
    echo "  KLAIDA  $1"
  fi
  sleep 0.3
}

echo "== Paslaugų nuotraukos =="

declare -a SERVICES=(
"avariniu-medziu-pjovimas|https://paslaugos-img.dgn.lt/gallery_7_1793219/img.jpg"
"kelmu-naikinimas-frezavimas|https://paslaugos-img.dgn.lt/gallery_7_3141581/pavojingu-medziu-pjovimas-ir-aukstuminiai-darbai.jpg"
"saku-isvezimas|https://paslaugos-img.dgn.lt/gallery_7_4443681/pavojingu-avariniu-medziu-pjovimas-ir-aukstuminiai-darbai.jpg"
"medziu-genejimas|https://paslaugos-img.dgn.lt/gallery_7_17908323/arboristo-paslaugos-medziu-pjovimas-kelmu-naikinimas.jpg"
"gyvatvoriu-karpymas|https://paslaugos-img.dgn.lt/gallery_7_2225865/img.jpg"
"medziu-lajos-stabilizavimas|https://paslaugos-img.dgn.lt/gallery_7_2075791/pavojingu-medziu-pjovimas-ir-aukstuminiai-darbai.jpg"
"dazymo-darbai-aukstyje|https://paslaugos-img.dgn.lt/gallery_7_2100891/pavojingu-medziu-pjovimas-ir-aukstuminiai-darbai.jpg"
"reklaminiu-iskabu-montavimas|https://paslaugos-img.dgn.lt/gallery_7_1793237/img.jpg"
"lietvamzdziu-stogo-valymas|https://paslaugos-img.dgn.lt/gallery_7_2225851/pavojingu-medziu-pjovimas-ir-aukstuminiai-darbai.jpg"
"audros-isverstu-medziu-salinimas|https://paslaugos-img.dgn.lt/gallery_7_3236171/pavojingu-medziu-pjovimas-ir-aukstuminiai-darbai.jpg"
"kiti-aukstuminiai-darbai|https://paslaugos-img.dgn.lt/gallery_7_1793231/img.jpg"
)

for entry in "${SERVICES[@]}"; do
  name="${entry%%|*}"
  url="${entry#*|}"
  mkdir -p "$SVC/$name"
  echo "[$name]"
  dl "$url" "$SVC/$name/01.jpg"
done

echo
echo "== Bendra galerija (86 nuotraukos) =="

GALLERY_IDS=(
17908323 17713583 17773237 11512552 1793219 12137936 12137938 6210131 2382661 2382663
2758961 2758963 2758965 2127367 2127373 2127375 6209931 6209947 6209939 6209943
2273687 2273689 1793221 2163725 2163727 2127359 2127363 2127371 2127387 2127389
2127383 2127381 2127379 2127365 2127377 2127361 2048689 2048691 2048693 2048695
1793225 1793233 1793235 2048697 1793227 2075791 1793231 1793237 1793239 1793241
1793243 1793245 1793249 1793247 1793251 1793253 1793255 1793229 1793259 1793257
1793261 2100891 2225773 2225767 2225851 2225853 2225845 2225841 2225843 2225847
2225855 2225839 4443681 2225865 2225873 2225835 2225833 2225885 2225879 2225849
3236171 3236175 3236177 3141581 3795705 3795725
)

i=1
for id in "${GALLERY_IDS[@]}"; do
  num=$(printf "%02d" "$i")
  dl "https://paslaugos-img.dgn.lt/gallery_12_${id}/arboristo-paslaugos-medziu-pjovimas-kelmu-naikinimas-aa777-galerija.jpg" "$GAL/galerija-${num}.jpg"
  i=$((i+1))
done

echo
echo "Baigta. Nuotraukos kataloge: $ROOT/"
