import styled from 'styled-components';
import { breakpoints } from 'components/styles/breakpoints';
export const Calendarep = styled.div`
  @media (min-width: ${breakpoints.mobile}) {
    position: absolute;
    z-index: 1;
    top: 20px;
   width: 320px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    top: 35px;
    left: 265px;
  }
`;

export const buttoncc = styled.a`
  @media (min-width: ${breakpoints.mobile}) {
    margin-left: 20px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    margin-top: 14px;
  }
`;

export const viewDate = styled.div`
  @media (min-width: ${breakpoints.mobile}) {
    font-family: 'Verdana';
    font-weight: 700;
    font-size: 18px;
    line-height: 1.2;
    color: #212121;
  }

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 34px;
  }
`;
export const wrapCalendar = styled.div`
  @media (min-width: ${breakpoints.mobile}) {
    margin: 32px 0 40px 0;
    display: flex;
    position: relative;
  }

  @media (min-width: ${breakpoints.tablet}) {
    margin: 147px 0 60px 0;
  }
`;
