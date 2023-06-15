import styled from 'styled-components';


import MainLeafdDesktop1x from '../../img/main-leaf-desktop@1x-min.png';
import MainLeafDesktop2x from '../../img/main-leaf-desktop@2x-min.png';
import MainLeafDesktopAvif1x from '../../img/main-leaf-desktop@1x-min.avif';
import MainLeafDesktopAvif2x from '../../img/main-leaf-desktop@2x-min.avif';
import MainLeafDesktopWebp1x from '../../img/main-leaf-desktop@1x-min.webp';
import MainLeafDesktopWebp2x from '../../img/main-leaf-desktop@2x-min.webp';
import StrawberryDesktop1x from '../../img/Strawberry-desktop@1x-min.png';
import StrawberryDesktop2x from '../../img/Strawberry-desktop@2x-min.png';
import StrawberryDesktopAvif1x from '../../img/Strawberry-desktop@1x-min.avif';
import StrawberryDesktopAvif2x from '../../img/Strawberry-desktop@2x-min.avif';
import StrawberryDesktopWebp1x from '../../img/Strawberry-desktop@1x-min.webp';
import StrawberryDesktopWebp2x from '../../img/Strawberry-desktop@2x-min.webp';
import BananDesktop1x from '../../img/banan-desktop@1x-min.png';
import BananDesktop2x from '../../img/banan-desktop@2x-min.png';
import BananDesktopAvif1x from '../../img/banan-desktop@1x-min.avif';
import BananDesktopAvif2x from '../../img/banan-desktop@2x-min.avif';
import BananDesktopWebp1x from '../../img/banan-desktop@1x-min.webp';
import BananDesktopWebp2x from '../../img/banan-desktop@2x-min.webp';
import LiniaDesktop1x from '../../img/linia-desktop@1x-min.png';
import LiniaDesktop2x from '../../img/linia-desktop@2x-min.png';
import LiniaDesktopAvif1x from '../../img/linia-desktop@1x-min.avif';
import LiniaDesktopAvif2x from '../../img/linia-desktop@2x-min.avif';
import LiniaDesktopWebp1x from '../../img/linia-desktop@1x-min.webp';
import LiniaDesktopWebp2x from '../../img/linia-desktop@2x-min.webp';

import LeafTablet1x from '../../img/leaf-tablet@1x-min.png';
import LeafTablet2x from '../../img/leaf-tablet@2x-min.png';
import LeafTableAvift1x from '../../img/leaf-tablet@1x-min.avif';
import LeafTableAvift2x from '../../img/leaf-tablet@2x-min.avif';
import LeafTabletWebp1x from '../../img/leaf-tablet@1x-min.webp';
import LeafTabletWebp2x from '../../img/leaf-tablet@2x-min.webp';
import MainStrawberryTablet1x from '../../img/main-strawberry-tablet@1x-min.png';
import MainStrawberryTablet2x from '../../img/main-strawberry-tablet@2x-min.png';
import MainStrawberryTabletpAvif1x from '../../img/main-strawberry-tablet_1x-min.avif';
import MainStrawberryTabletpAvif2x from '../../img/main-strawberry-tablet_2x-min.avif';
import MainStrawberryTabletpWebpf1x from '../../img/main-strawberry-tablet@1x-min.webp';
import MainStrawberryTabletpWebpf2x from '../../img/main-strawberry-tablet@2x-min.webp';
import MainBananTablet1x from '../../img/main-banan-tablet@1x-min.png';
import MainBananTablet2x from '../../img/main-banan-tablet@2x-min.png';
import MainBananTabletAvif1x from '../../img/main-banan-tablet_1x-min.avif';
import MainBananTabletAvif2x from '../../img/main-banan-tablet_2x-min.avif';
import MainBananTabletWebp1x from '../../img/main-banan-tablet@1x-min.webp';
import MainBananTabletWebp2x from '../../img/main-banan-tablet@2x-min.webp';
import LiniaTablet1x from '../../img/linia-tablet@1x-min.png';
import LiniaTablet2x from '../../img/linia-tablet@2x-min.png';
import LiniaTabletAvif1x from '../../img/linia-tablet@1x-min.avif';
import LiniaTabletAvif2x from '../../img/linia-tablet@2x-min.avif';
import LiniaTabletWebp1x from '../../img/linia-tablet@1x-min.webp';
import LiniaTabletWebp2x from '../../img/linia-tablet@2x-min.webp';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 24px 14px;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 320px) {
    width: 320px;
    height: 648px;
    background-color: FFFFFF;
    position: relative;
    background-image: none;
  }

  @media screen and (min-width: 320px) and (max-width: 767px) {
    width: 768px;
    height: 1024px;
    position: absolute;
    background-image: url(${LeafTablet1x}), url(${MainStrawberryTablet1x}), url(${MainBananTablet1x}), url(${LiniaTablet1x});
    background-repeat: no-repeat;
    background-size: 740px 842px, 291px 284px, 740px 527px, 553px 750px;
    background-position: right, right, top right, top right;
  }

 @media screen and (min-device-pixel-ratio: 2) and (max-width: 767px),
  screen and (min-resolution: 192dpi) and (max-width: 767px),
  screen and (min-resolution: 2dppx) and (max-width: 767px)
  {
    background-image: url(${LeafTablet2x}), url(${MainStrawberryTablet2x}), url(${MainBananTablet2x}), url(${LiniaTablet2x});
    background-repeat: no-repeat;
    background-size: 740px 842px, 291px 284px, 740px 527px, 553px 750px;
    background-position: right, right, top right, top right;
  }

  @media screen and (min-width: 768px) {
     width: 768px;
    height: 1024px;
    background-image: url(${LeafTablet1x}), url(${MainStrawberryTablet1x}), url(${MainBananTablet1x}), url(${LiniaTablet1x});
    background-repeat: no-repeat;
    background-size: 740px 842px, 291px 284px, 740px 527px, 553px 750px;
    background-position: right, right, top right, top right;
  }
 
   @media screen and (min-device-pixel-ratio: 2) and (max-width: 768px),
  screen and (min-resolution: 192dpi) and (max-width: 768px),
  screen and (min-resolution: 2dppx) and (max-width: 768px)
  {
    background-image: url(${LeafTablet2x}), url(${MainStrawberryTablet2x}), url(${MainBananTablet2x}), url(${LiniaTablet2x});
    background-repeat: no-repeat;
    background-size: 740px 842px, 291px 284px, 740px 527px, 553px 750px;
    background-position: right, right, top right, top right;
  }


  @media screen and (min-width: 1280px) {
    width: 1280px;
    height: 850px;
    background-image: url(${MainLeafdDesktop1x }), url(${StrawberryDesktop1x}), url(${BananDesktop1x}), url(${LiniaDesktop1x});
    background-repeat: no-repeat;
    background-size: 746px 846px, 286px 279px, 773px 552px, 602px 816px;
    background-position: right, right, top right, top right;
  }

     @media screen and (min-device-pixel-ratio: 2) and (max-width: 1280px),
  screen and (min-resolution: 192dpi) and (max-width: 1280px),
  screen and (min-resolution: 2dppx) and (max-width: 1280px)
  {
    background-image: url(${MainLeafDesktop2x}), url(${StrawberryDesktop2x}), url(${BananDesktop2x}), url(${LiniaDesktop2x});
    background-repeat: no-repeat;
    background-size: 740px 842px, 291px 284px, 740px 527px, 553px 750px;
    background-position: right, right, top right, top right;
  }

  /* AVIF formats */

  @supports (image-set: url(${LeafTableAvift1x}) format('avif')) {
    @media screen and (min-width: 375px) and (max-width: 767px) {
      background-image: image-set(
        url(${LeafTableAvift1x}) 1x,
        url(${LeafTableAvift2x}) 2x
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
        url(${LiniaDesktopAvif1x}) 1x,
        url(${LiniaDesktopAvif2x}) 2x
      );
      background-size: 740px 842px, 291px 284px, 740px 527px, 553px 750px;
      background-position: right, right, top right, top right;
    }

    @media screen and (min-width: 768px) {
      background-image: image-set(
        url(${LeafTableAvift1x}) 1x,
        url(${LeafTableAvift2x}) 2x
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
      background-size: 740px 842px, 291px 284px, 740px 527px, 553px 750px;
      background-position: right, right, top right, top right;
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
        url(${BananDesktopAvif1x}) 1x,
        url(${BananDesktopAvif2x}) 2x
      ),
      image-set(
        url(${LiniaDesktopWebp1x }) 1x,
        url(${LiniaDesktopWebp2x }) 2x
      );
      background-repeat: no-repeat;
      background-size: 746px 846px, 286px 279px, 773px 552px, 602px 816px;
      background-position: right, right, top right, top right;
    }
  }

  /* WebP formats */

  @supports (image-set: url(${LeafTabletWebp1x}) format('webp')) {
    @media screen and (min-width: 375px) and (max-width: 767px) {
      background-image: image-set(
        url(${LeafTabletWebp1x}) 1x,
        url(${LeafTabletWebp2x}) 2x
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
      background-size: 740px 842px, 291px 284px, 740px 527px, 553px 750px;
      background-position: right, right, top right, top right;
    }

    @media screen and (min-width: 768px) {
      background-image: image-set(
        url(${LeafTabletWebp1x}) 1x,
        url(${LeafTabletWebp2x}) 2x
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
      background-size: 740px 842px, 291px 284px, 740px 527px, 553px 750px;
      background-position: right, right, top right, top right;
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
        url(${BananDesktopWebp1x}) 1x,
        url(${BananDesktopWebp2x}) 2x
      ),
      image-set(
        url(${LiniaTabletWebp1x}) 1x,
        url(${LiniaTabletWebp2x}) 2x
      );
      background-repeat: no-repeat;
      background-size: 746px 846px, 286px 279px, 773px 552px, 602px 816px;
      background-position: right, right, top right, top right;
    }
  }
`;



export const MainBlock = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
  padding: 8px;
  width: 100%;
`;
