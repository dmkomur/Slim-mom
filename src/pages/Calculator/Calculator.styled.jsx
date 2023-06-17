import styled from 'styled-components';
import { breakpoints } from 'components/styles/breakpoints';

const { desktop } = breakpoints;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 81px;
  @media screen and (min-width: ${desktop}) {
    flex-direction: row;
    padding-top: 145px;
  }
`;
