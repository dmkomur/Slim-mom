
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
import MainStrawberryTabletpAvif1x from 'img/main-strawberry-tablet@1x-min.avif';
import MainStrawberryTabletpAvif2x from 'img/main-strawberry-tablet@2x-min.avif';
import MainStrawberryTabletpWebp1x from 'img/main-strawberry-tablet@1x-min.webp';
import MainStrawberryTabletpWebp2x from 'img/main-strawberry-tablet@2x-min.webp';
import MainBananTablet1x from 'img/main-banan-tablet@1x-min.png';
import MainBananTablet2x from 'img/main-banan-tablet@2x-min.png';
import MainBananTabletAvif1x from 'img/main-banan-tablet@1x-min.avif';
import MainBananTabletAvif2x from 'img/main-banan-tablet@2x-min.avif';
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
  ${'' /* color: ${({ theme }) => theme.colors.secondText};
  font-family: 'Verdana', -apple-system, sans-serif;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.04em;
  line-height: 1.21; */}

  @media screen and (max-width: 320px) {
    background-image: none;
    background-color: #FFFFFF;
  }
  @media screen and (min-width: 768px) {
    background-image: 
    image-set(url(${MainLeafTabletAvif1x}) type("image/avif") 1x,
     url(${MainLeafTabletAvif2x}) type("image/avif") 2x,
     url(${MainLeafTabletWebp1x}) type("image/webp") 1x, 
     url(${MainLeafTabletWebp2x}) type("image/webp") 2x,
     url(${MainLeafTablet1x}) type("image/png") 1x, 
     url(${MainLeafTablet2x}) type("image/png") 2x), 
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
    background-size: 531px 602px, 350px 350px, 740px 527px, 553px 750px;
    background-position: 20px 400px, 410px 460px, 250px 520px, 220px 300px;
   } 


  @media screen and (min-width: 1280px) {
    background-image: 
    image-set(url(${MainLeafDesktopAvif1x}) type("image/avif") 1x,
      url(${MainLeafDesktopAvif2x}) type("image/avif") 2x,
      url(${MainLeafDesktopWebp1x }) type("image/webp") 1x,
      url(${MainLeafDesktopWebp2x }) type("image/webp") 2x,
      url(${MainLeafdDesktop1x }) type("image/png") 1x,
      url(${MainLeafDesktop2x}) type("image/png") 2x),
    image-set(url(${StrawberryDesktopAvif1x}) type("image/avif") 1x,
      url(${StrawberryDesktopAvif2x}) type("image/avif") 2x,
      url(${StrawberryDesktopWebp1x}) type("image/webp") 1x,
      url(${StrawberryDesktopWebp2x}) type("image/webp") 2x,
      url(${StrawberryDesktop1x}) type("image/png") 1x,
      url(${StrawberryDesktop2x}) type("image/png") 2x),
    image-set(url(${MainBananTabletAvif1x}) type("image/avif") 1x,
      url(${MainBananTabletAvif2x}) type("image/avif") 2x,
      url(${MainBananTabletWebp1x}) type("image/webp") 1x,
      url(${MainBananTabletWebp2x}) type("image/webp") 2x,
      url(${MainBananTablet1x}) type("image/png") 1x, 
      url(${MainBananTablet2x}) type("image/png") 2x),
    image-set(url(${LiniaDesktopAvif1x }) type("image/avif") 1x,
      url(${LiniaDesktopAvif2x }) type("image/avif") 2x,
      url(${LiniaDesktopWebp1x}) type("image/webp") 1x,
      url(${LiniaDesktopWebp2x}) type("image/webp") 2x,
      url(${LiniaDesktop1x}) type("image/png") 1x,
      url(${LiniaDesktop2x}) type("image/png") 2x);

    background-repeat: no-repeat;
    background-size: 746px 846px, 370px 370px, 700px 500px, 602px 816px;
    background-position: 300px 20px, 900px 506px , top -110px right -120px, top 50px right 0px ;
  }

}`