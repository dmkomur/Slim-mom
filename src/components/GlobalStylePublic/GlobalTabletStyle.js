import { createGlobalStyle } from 'styled-components';
import LeafTablet1x from 'img/leaf-tablet@1x-min.png';
import LeafTablet2x from 'img/leaf-tablet@2x-min.png';
import LeafTabletAvif1x from 'img/leaf-tablet@1x-min.avif';
import LeafTabletAvif2x from 'img/leaf-tablet@2x-min.avif';
import LeafTabletWebp1x from 'img/leaf-tablet@1x-min.webp';
import LeafTabletWebp2x from 'img/leaf-tablet@2x-min.webp';
import MainStrawberryTablet1x from 'img/main-strawberry-tablet@1x-min.png';
import MainStrawberryTablet2x from 'img/main-strawberry-tablet@2x-min.png';
import MainStrawberryTabletpAvif1x from 'img/main-strawberry-tablet@1x-min.avif';
import MainStrawberryTabletpAvif2x from 'img/main-strawberry-tablet@2x-min.avif';
import MainStrawberryTabletpWebp1x from 'img/main-strawberry-tablet@1x-min.webp';
import MainStrawberryTabletpWebp2x from 'img/main-strawberry-tablet@2x-min.webp';
import MainBananTablet1x from 'img/banana-tablet.png';
import MainBananTablet2x from 'img/banana-tablet@2x.png';
import MainBananTabletAvif1x from 'img/banana-tablet.avif';
import MainBananTabletAvif2x from 'img/banana-tablet@2x.avif';
import MainBananTabletWebp1x from 'img/banana-tablet.webp';
import MainBananTabletWebp2x from 'img/banana-tablet@2x.webp';
import LiniaTablet1x from 'img/linia-tablet.png';
import LiniaTablet2x from 'img/linia-tablet@2x.png';
import LiniaTabletAvif1x from 'img/linia-tablet.avif';
import LiniaTabletAvif2x from 'img/linia-tablet@2x.avif';
import LiniaTabletWebp1x from 'img/linia.webp';
import LiniaTabletWebp2x from 'img/linia-tablet@2x.webp';

export const GlobalTabletStyle = createGlobalStyle`
body{
   height: 100vh;
    width: 100vw;   
  @media screen and (min-width: 768px) {
    background-image: 
    image-set(url(${LeafTabletAvif1x}) type("image/avif") 1x,
     url(${LeafTabletAvif2x}) type("image/avif") 2x,
     url(${LeafTabletWebp1x}) type("image/webp") 1x, 
     url(${LeafTabletWebp2x}) type("image/webp") 2x,
     url(${LeafTablet1x}) type("image/png") 1x, 
     url(${LeafTablet2x}) type("image/png") 2x), 
    image-set(url(${MainStrawberryTabletpAvif1x}) type("image/avif") 1x,
      url(${MainStrawberryTabletpAvif2x}) type("image/avif") 2x,
      url(${MainStrawberryTabletpWebp1x}) type("image/webp") 1x,
      url(${MainStrawberryTabletpWebp2x}) type("image/webp") 2x,
      url(${MainStrawberryTablet1x}) type("image/png") 1x, 
      url(${MainStrawberryTablet2x}) type("image/png") 2x), 
    image-set(url(${MainBananTabletAvif1x}) type("image/avif") 1x,
      url(${MainBananTabletAvif2x}) type("image/avif") 2x,
      url(${MainBananTabletWebp1x}) type("image/webp") 1x,
      url(${MainBananTabletWebp2x}) type("image/webp") 2x,
      url(${MainBananTablet1x}) type("image/png") 1x,
      url(${MainBananTablet2x}) type("image/png") 2x),
    image-set(url(${LiniaTabletAvif1x}) type("image/avif") 1x,
      url(${LiniaTabletAvif2x}) type("image/avif") 2x,
      url(${LiniaTabletWebp1x}) type("image/webp") 1x,
      url(${LiniaTabletWebp2x}) type("image/webp") 2x,
      url(${LiniaTablet1x}) type("image/png") 1x, 
      url(${LiniaTablet2x}) type("image/png") 2x);

    background-repeat: no-repeat;
        background-size: 740px 842px, 450px 450px, 740px 527px, 553px 750px;
        background-position: bottom -20em left 0em, bottom -24em right -8em, bottom -44em right -20em, bottom -50em right -2em;
   } 
}
`;
