import Navigation from 'components/Navigation';
// import UserInfo from 'components/UserInfo';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import {
  StyledHeader,
  Nav,
  LogoImg,
  LogoSlim,
  LogoMom,
  NavigationList,
  NavigationItem,
  NavItem,
  ButtonClose,
  ButtonBurger,
  Wrapper,
  StyledSvgBurger,
  StyledSvgClose,
  StyledLogo,
  StyledSlimMom,
  // StyledNavigation,
  // StyledUserInfo,
  StyledLogoMob,
  NavElemnt,
  StyledNavLinkSupport,
  // StyledUse,
} from './Header.styled';
import logoImgLight from 'images/header/logo-img-light.png';
import logoImgDark from 'images/header/logo-img-dark.png';
import sprite from 'images/header/symbol-defs.svg';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ThemeSwitcher } from 'components/styles/ThemeSwitcher';
import LanguageBar from 'components/LanguageBar/LanguageBar';
import { getTheme } from 'redux/theme/theme-selectors';
// import { BsDisplay } from 'react-icons/bs';

function Header() {
  const [isOpen, setOpen] = useState(false);
  const isUserLogin = useSelector(getIsLoggedIn);
  const selectedTheme = useSelector(getTheme);

  const openHandler = () => {
    setOpen(!isOpen);
  };

  function chooseImg() {
    if (selectedTheme === 'dark') {
      return logoImgLight;
    } else {
      return logoImgDark;
    }
  }

  return (
    <>
      <StyledHeader>
        <Nav />
        <StyledLogo>
          <StyledNavLinkSupport to="/calculator">
            <LogoImg src={chooseImg()} alt="logo" />
            <StyledSlimMom>
              <LogoSlim>
                <use href={sprite + '#icon-slim'}></use>
              </LogoSlim>
              <LogoMom>
                <use href={sprite + '#icon-mom'}></use>
              </LogoMom>
            </StyledSlimMom>
          </StyledNavLinkSupport>
        </StyledLogo>
        <StyledLogoMob>
          <StyledNavLinkSupport to="/calculator">
            {' '}
            <LogoImg src={chooseImg()} alt="logo" />
            {isUserLogin && (
              <StyledSlimMom>
                <LogoSlim>
                  <use href={sprite + '#icon-slim'}></use>
                </LogoSlim>
                <LogoMom>
                  <use href={sprite + '#icon-mom'}></use>
                </LogoMom>
              </StyledSlimMom>
            )}
          </StyledNavLinkSupport>
        </StyledLogoMob>
        <NavElemnt />
        {/* <StyledNavigation> */}
        <Navigation />
        {/* </StyledNavigation> */}

        {isUserLogin && (
          <div>
            {isOpen ? (
              <ButtonClose onClick={openHandler}>
                <StyledSvgClose>
                  <use href={sprite + '#icon-close'}></use>
                </StyledSvgClose>
              </ButtonClose>
            ) : (
              <ButtonBurger onClick={openHandler}>
                <StyledSvgBurger>
                  <use href={sprite + '#icon-burger'}></use>
                </StyledSvgBurger>
              </ButtonBurger>
            )}
          </div>
        )}
        {isOpen && (
          <Wrapper>
            <NavigationList>
              <NavigationItem>
                <ThemeSwitcher />
              </NavigationItem>
              <NavigationItem>
                <LanguageBar />
              </NavigationItem>
              <NavigationItem>
                <NavItem to="diary">Diary</NavItem>
              </NavigationItem>
              <NavigationItem>
                <NavItem to="calculator">Calculator</NavItem>
              </NavigationItem>
            </NavigationList>
          </Wrapper>
        )}
      </StyledHeader>
      {/* {isOpen && (
        <StyledUserInfo>
          <UserInfo />
        </StyledUserInfo>
      )} */}
    </>
  );
}

export default Header;
