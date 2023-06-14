import React from 'react';
import {
  //   DivaderStrawberry,
  //   Divider,
  //   DividerBanana,
  //   DividerLeaves,
  PageNotFd,
} from './PageNotFound.styled';
import { Container } from 'components/Layout/Layout.styled';

const PageNotFound = () => {
  return (
    <PageNotFd>
      <Container>
        <h1>404</h1>
        {/* <div>{this.props.children}</div> */}
        {/* <Divider>
          <DividerBanana src="/src/imgs/Banana.jpg">banana</DividerBanana>
          <DivaderStrawberry src="/src/imgs/Strawberry-Big.jpg">
            strawberry
          </DivaderStrawberry>
          <DividerLeaves src="/src/imgs/Fon.jpg"></DividerLeaves>
        </Divider> */}
        <p>Page not found...</p>
      </Container>
    </PageNotFd>
  );
};

export default PageNotFound;
