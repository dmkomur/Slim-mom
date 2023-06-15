
import { createGlobalStyle } from 'styled-components';


import MainLeafdDesktop1x from 'img/main-leaf-desktop@1x-min.png';
import MainLeafDesktop2x from 'img/main-leaf-desktop@2x-min.png';
import MainLeafDesktopAvif1x from 'img/main-leaf-desktop@1x-min.avif';
import MainLeafDesktopAvif2x from 'img/main-leaf-desktop@2x-min.avif';
import MainLeafDesktopWebp1x from 'img/main-leaf-desktop@1x-min.webp';
import MainLeafDesktopWebp2x from 'img/main-leaf-desktop@2x-min.webp';
import StrawberryDesktop1x from 'img/Strawberry-desktop@1x-min.png';
import StrawberryDesktop2x from 'img/Strawberry-desktop@2x-min.png';
import StrawberryDesktopAvif1x from 'img/Strawberry-desktop@1x-min.avif';
import StrawberryDesktopAvif2x from 'img/Strawberry-desktop@2x-min.avif';
import StrawberryDesktopWebp1x from 'img/Strawberry-desktop@1x-min.webp';
import StrawberryDesktopWebp2x from 'img/Strawberry-desktop@2x-min.webp';
import LiniaDesktop1x from 'img/linia-desktop@1x-min.png';
import LiniaDesktop2x from 'img/linia-desktop@2x-min.png';
import LiniaDesktopAvif1x from 'img/linia-desktop@1x-min.avif';
import LiniaDesktopAvif2x from 'img/linia-desktop@2x-min.avif';
import LiniaDesktopWebp1x from 'img/linia-desktop@1x-min.webp';
import LiniaDesktopWebp2x from 'img/linia-desktop@2x-min.webp';

import MainLeafTablet1x from 'img/main-leaf-tablet@1x-min.png';
import MainLeafTablet2x from 'img/main-leaf-tablet@2x-min.png';
import MainLeafTabletAvif1x from 'img/main-leaf-tablet@1x-min.avif';
import MainLeafTabletAvif2x from 'img/main-leaf-tablet@2x-min.avif';
import MainLeafTabletWebp1x from 'img/main-leaf-tablet@1x-min.webp';
import MainLeafTabletWebp2x from 'img/main-leaf-tablet@2x-min.webp';
import MainStrawberryTablet1x from 'img/main-strawberry-tablet@1x-min.png';
import MainStrawberryTablet2x from 'img/main-strawberry-tablet@2x-min.png';
import MainStrawberryTabletpAvif1x from 'img/main-strawberry-tablet_1x-min.avif';
import MainStrawberryTabletpAvif2x from 'img/main-strawberry-tablet_2x-min.avif';
import MainStrawberryTabletpWebpf1x from 'img/main-strawberry-tablet@1x-min.webp';
import MainStrawberryTabletpWebpf2x from 'img/main-strawberry-tablet@2x-min.webp';
import MainBananTablet1x from 'img/main-banan-tablet@1x-min.png';
import MainBananTablet2x from 'img/main-banan-tablet@2x-min.png';
import MainBananTabletAvif1x from 'img/main-banan-tablet_1x-min.avif';
import MainBananTabletAvif2x from 'img/main-banan-tablet_2x-min.avif';
import MainBananTabletWebp1x from 'img/main-banan-tablet@1x-min.webp';
import MainBananTabletWebp2x from 'img/main-banan-tablet@2x-min.webp';
import LiniaTablet1x from 'img/linia-tablet@1x-min.png';
import LiniaTablet2x from 'img/linia-tablet@2x-min.png';
import LiniaTabletAvif1x from 'img/linia-tablet@1x-min.avif';
import LiniaTabletAvif2x from 'img/linia-tablet@2x-min.avif';
import LiniaTabletWebp1x from 'img/linia-tablet@1x-min.webp';
import LiniaTabletWebp2x from 'img/linia-tablet@2x-min.webp';


export const GlobalStylePublic = createGlobalStyle`
body{
  @media screen and (max-width: 320px) {
    background-image: none;
    background-color: #FFFFFF;
  }

  @media screen and (min-width: 768px) {
    background-image: url(${MainLeafTablet1x}), url(${MainStrawberryTablet1x}), url(${MainBananTablet1x}), url(${LiniaTablet1x});
    background-repeat: no-repeat;
    background-size: 531px 602px, 350px 350px, 740px 527px, 553px 750px;
    background-position: 20px 400px, 410px 460px, 250px 520px, 220px 300px;
   } 
 
   @media screen and (min-device-pixel-ratio: 2) and (min-width: 768px),
  screen and (min-resolution: 192dpi) and (min-width: 768px),
  screen and (min-resolution: 2dppx) and (min-width: 768px)
  {
    background-image: url(${MainLeafTablet2x}), url(${MainStrawberryTablet2x}), url(${MainBananTablet2x}), url(${LiniaTablet2x});
    background-repeat: no-repeat;
    background-size: 531px 602px, 350px 350px, 740px 527px, 553px 750px;
    background-position: 20px 400px, 410px 460px, 250px 520px, 220px 300px;
  }


  @media screen and (min-width: 1280px) {
    background-image: url(${MainLeafdDesktop1x }), url(${StrawberryDesktop1x}), url(${MainBananTablet1x}), url(${LiniaDesktop1x});
    background-repeat: no-repeat;
    background-size: 746px 846px, 370px 370px, 773px 552px, 602px 816px;
    background-position: 300px 20px, 900px 506px , 640px -180px, 678px 34px ;
  }

   @media screen and (min-device-pixel-ratio: 2) and (min-width: 1280px),
  screen and (min-resolution: 192dpi) and (min-width: 1280px),
  screen and (min-resolution: 2dppx) and (min-width: 1280px)
  {
    background-image: url(${MainLeafDesktop2x}), url(${StrawberryDesktop2x}), url(${MainBananTablet2x}), url(${LiniaDesktop2x});
    background-repeat: no-repeat;
    background-size: 746px 846px, 370px 370px, 773px 552px, 602px 816px;
    background-position: 300px 20px, 900px 506px , 640px -180px, 678px 34px;
  } 

  /* AVIF formats */

  @supports (image-set: url(${MainLeafTabletAvif1x }) format('avif')) {

    @media screen and (min-width: 768px) {
      background-image: image-set(
        url(${MainLeafTabletAvif1x }) 1x,
        url(${MainLeafTabletAvif2x }) 2x
      ),
      image-set(
        url(${MainStrawberryTabletpAvif1x}) 1x,
        url(${MainStrawberryTabletpAvif2x}) 2x
      ),
      image-set(
        url(${MainBananTabletAvif1x}) 1x,
        url(${MainBananTabletAvif2x}) 2x
      ),
      image-set(
        url(${LiniaTabletAvif1x}) 1x,
        url(${LiniaTabletAvif2x}) 2x
      );
      background-repeat: no-repeat;
      background-size: 740px 842px, 350px 350px, 740px 527px, 553px 750px;
      background-position: 20px 400px, 410px 460px, 250px 520px, 220px 300px;
    }

    @media screen and (min-width: 1280px) {
      background-image: image-set(
        url(${MainLeafDesktopAvif1x}) 1x,
        url(${MainLeafDesktopAvif2x}) 2x
      ),
      image-set(
        url(${StrawberryDesktopAvif1x}) 1x,
        url(${StrawberryDesktopAvif2x}) 2x
      ),
      image-set(
        url(${MainBananTabletAvif1x}) 1x,
        url(${MainBananTabletAvif2x}) 2x
      ),
      image-set(
        url(${LiniaDesktopAvif1x }) 1x,
        url(${LiniaDesktopAvif2x }) 2x
      );
      background-repeat: no-repeat;
      background-size: 746px 846px, 370px 370px, 773px 552px, 602px 816px;
      background-position: 300px 20px, 900px 506px , 640px -180px, 678px 34px;
    }
  }

  /* WebP formats */

  @supports (image-set: url(${MainLeafTabletWebp1x }) format('webp')) {
  
    @media screen and (min-width: 768px) {
      background-image: image-set(
        url(${MainLeafTabletWebp1x }) 1x,
        url(${MainLeafTabletWebp2x }) 2x
      ),
      image-set(
        url(${MainStrawberryTabletpWebpf1x}) 1x,
        url(${MainStrawberryTabletpWebpf2x}) 2x
      ),
      image-set(
        url(${MainBananTabletWebp1x}) 1x,
        url(${MainBananTabletWebp2x}) 2x
      ),
      image-set(
        url(${LiniaTabletWebp1x}) 1x,
        url(${LiniaTabletWebp2x}) 2x
      );
      background-repeat: no-repeat;
      background-size: 740px 842px, 350px 350px, 740px 527px, 553px 750px;
      background-position: 20px 400px, 410px 460px, 250px 520px 220px 300px;
    }

    @media screen and (min-width: 1280px) {
      background-image: image-set(
        url(${MainLeafDesktopWebp1x }) 1x,
        url(${MainLeafDesktopWebp2x }) 2x
      ),
      image-set(
        url(${StrawberryDesktopWebp1x}) 1x,
        url(${StrawberryDesktopWebp2x}) 2x
      ),
      image-set(
        url(${MainBananTabletWebp1x}) 1x,
        url(${MainBananTabletWebp2x}) 2x
      ),
      image-set(
        url(${LiniaDesktopWebp1x}) 1x,
        url(${LiniaDesktopWebp2x}) 2x
      );
      background-repeat: no-repeat;
      background-size: 746px 846px, 370px 370px, 773px 552px, 602px 816px;
      background-position: 300px 20px, 900px 506px, 640px -180px, 678px 34px;
    }
   }
}`