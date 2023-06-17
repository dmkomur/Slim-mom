import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { breakpoints } from 'components/styles/breakpoints';

const { tablet, desktop } = breakpoints;

export const NavigationList = styled.ul`
  display: flex;
  gap: 15px;
  align-items: center;
`;

export const NavigationListDiary = styled.div`
  display: none;
  @media screen and (min-width: ${desktop}) {
    display: block;
    list-style: none;
    display: flex;
    column-gap: 24px;
    align-items: center;
    /* flex-grow: 1; */
  }
`;
export const NavigationItem = styled.li`
  /* margin-bottom: 20px; */
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #9b9faa;
  /* &:hover,
  &:focus {
    color: #ffffff;
  }
  &:active {
    color: #ffffff;
  } */
`;

export const NavItem = styled(NavLink)`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  text-transform: uppercase;

  color: #9b9faa;
  &:hover,
  &:focus {
    color: #212121;
  }
  &:active {
    color: #212121;
  }
`;

export const StyledUserInfo = styled.div`
  @media screen and (min-width: ${desktop}) {
    flex-grow: 1;
  }
`;

export const NavigationLogin = styled.div``;

export const NavigationDiary = styled.div`
  display: flex;
`;

export const StyledDiv = styled.div`
  @media screen and (min-width: ${tablet}) {
    flex-grow: 0;
  }
  @media screen and (min-width: ${desktop}) {
    flex-grow: 1;
  }
`;

// @media screen and (min-width: 320px) {}

// @media screen and (min-width: 768px) {}

// @media screen and (min-width: 1200px) {}
