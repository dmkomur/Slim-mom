import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { breakpoints } from 'components/styles/breakpoints';

const {mobile, tablet, desktop} = breakpoints;

export const NavigationList = styled.ul`
  display: flex;
  column-gap: 24px;
`;

export const NavigationListDiary  = styled.div`
display:none; */
@media screen and (min-width: ${desktop}) {
    display: block;
}
`
export const NavigationItem = styled.li``;

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

`;

export const NavigationLogin = styled.div``;

export const NavigationDiary = styled.div`

`;

// @media screen and (min-width: 320px) {}

// @media screen and (min-width: 768px) {}

// @media screen and (min-width: 1200px) {}
