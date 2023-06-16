import React from 'react';
import {
  PageNotFd,
  StyledHeader,
  StyledImg,
  StyledLine,
  StyledSpan,
  StyledText,
} from './PageNotFound.styled';
import { createRoot } from 'react-dom/client';
import strawberry from 'img/Strawberry-desktop@2x-min.png';
import strawberry_png_d from 'img/Strawberry-desktop@2x-min.png';
import strawberry_webp_d from 'img/Strawberry-desktop@2x-min.webp';
import strawberry_avif_d from 'img/Strawberry-desktop@2x-min.avif';
import strawberry_png_t from 'img/main-strawberry-tablet@2x-min.png';
import strawberry_webp_t from 'img/main-strawberry-tablet@2x-min.webp';
import strawberry_avif_t from 'img/main-strawberry-tablet_2x-min.avif';

const root = createRoot(document.getElementById('root'));
function PageNotFound() {
  return (
    <PageNotFd>
      <StyledHeader>
        <li>4</li>
        <li>
          <StyledSpan>
            <picture>
              <source
                type="image/avif"
                srcset={`${strawberry_avif_d} 1x, ${strawberry_avif_d} 2x`}
                media="(min-width: 1200px)"
              />
              <source
                type="image/webp"
                media="(min-width: 1200px)"
                srcset={`${strawberry_webp_d} 1x, ${strawberry_webp_d} 2x`}
              />
              <source
                type="image/png"
                media="(min-width: 1200px)"
                srcset={`${strawberry_png_d} 1x, ${strawberry_png_d} 2x`}
              />
              <source
                type="image/avif"
                width="100"
                height="100"
                srcset={`${strawberry_avif_t} 1x, ${strawberry_avif_t} 2x`}
                media="(min-width: 768px)"
              />
              <source
                type="image/webp"
                width="100"
                height="100"
                media="(min-width: 768px)"
                srcset={`${strawberry_webp_t} 1x, ${strawberry_webp_t} 2x`}
              />
              <source
                type="image/png"
                width="100"
                height="100"
                media="(min-width: 768px)"
                srcset={`${strawberry_png_t} 1x, ${strawberry_png_t} 2x`}
              />
              <source
                type="image/avif"
                width="75"
                height="75"
                srcset={`${strawberry_png_t} 1x, ${strawberry_png_t} 2x`}
                media="(min-width: 320px)"
              />
              <source
                type="image/webp"
                width="75"
                height="75"
                media="(min-width: 320px)"
                srcset={`${strawberry_png_t} 1x, ${strawberry_png_t} 2x`}
              />
              <source
                type="image/png"
                width="75"
                height="75"
                media="(min-width: 320px)"
                srcset={`${strawberry_png_t} 1x, ${strawberry_png_t} 2x`}
              />
              <StyledImg
                src={strawberry}
                alt="strawberry"
                width="150"
                height="150"
              ></StyledImg>
            </picture>
          </StyledSpan>
        </li>
        <li>4</li>
      </StyledHeader>
      <StyledLine>Page not found...</StyledLine>
      <div className="container">
        <p className="text">
          <StyledText>
            Sorry, the page you're looking for cannot be accessed
          </StyledText>
        </p>
      </div>
    </PageNotFd>
  );
}

root.render(<PageNotFound />);

export default PageNotFound;
