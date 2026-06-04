/* =====================================================================
   GALERIJA — realios ArbCut atliktų darbų nuotraukos.
   `galerijaVisos` (86) — parsisiųstos iš paslaugos.lt profilio → /galerija puslapis.
   `galerija` (preview) — kuruotas rinkinys pagrindiniam puslapiui.
   ===================================================================== */
const PRO = '/assets/images/galerija/';   // 86 parsisiųstos (galerija-01..86.jpg)
const CUR = '/assets/images/gallery/';    // kuruotos nuotraukos
const CAPTION = 'ArbCut atliktų darbų nuotrauka';

/* Pilna galerija — visos 86 nuotraukos. „tall" — kas kelinta plytelė akcentui. */
export const galerijaVisos = Array.from({ length: 86 }, (_, i) => {
  const n = String(i + 1).padStart(2, '0');
  return { src: `${PRO}galerija-${n}.jpg`, alt: CAPTION, caption: CAPTION, tall: i % 9 === 4 };
});

/* Pagrindinio puslapio peržiūra — 8 nuotraukos (be „tall"), kad užpildytų
   pilną 4×2 stačiakampį be tuščių vietų. */
export const galerija = [
  { src: `${CUR}hero.jpg` },
  { src: `${CUR}Geras namas.jpg` },
  { src: `${CUR}Laidai2.jpg` },
  { src: `${CUR}Geras namas2.jpg` },
  { src: `${CUR}wrok3.jpg` },
  { src: `${CUR}469310067_1019557870184363_5116671743805972945_n.jpg` },
  { src: `${CUR}485918178_1101636811976468_3805495665804527561_n.jpg` },
  { src: `${CUR}67232092_2558578524187237_1548003215314780160_n.jpg` },
].map((g) => ({ ...g, alt: CAPTION, caption: CAPTION }));
