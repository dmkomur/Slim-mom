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
    margin-top: 4px;
    cursor: pointer;
  }

  @media (min-width: ${breakpoints.tablet}) {
    margin-top: 19px;
  }
  &:hover {
    color: #656cff;
  }
`;

export const viewDate = styled.div`
  @media (min-width: ${breakpoints.mobile}) {
    font-family: 'Verdana';
    font-weight: 700;
    font-size: 18px;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.firstText};
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
