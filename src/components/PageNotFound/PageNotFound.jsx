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

const root = createRoot(document.getElementById('root'));
function PageNotFound() {
  return (
    <PageNotFd>
      <StyledHeader>
        <li>4</li>
        <li>
          <StyledSpan>
            <StyledImg
              src={strawberry}
              alt="strawberry"
              width="150"
              height="150"
            ></StyledImg>
          </StyledSpan>
        </li>
        <li>4</li>
      </StyledHeader>
      <StyledLine>Page not found...</StyledLine>
      <div class="container">
        <p class="text">
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
