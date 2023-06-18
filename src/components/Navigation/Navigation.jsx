// import { NavLink } from 'react-router-dom';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import UserInfo from '../UserInfo';
import { useSelector } from 'react-redux';
import {
  NavigationList,
  NavigationItem,
  NavItem,
  NavigationLogin,
  NavigationDiary,
  StyledUserInfo,
  NavigationListDiary,
  StyledDiv,
} from './Navigation.styled';
import { ThemeSwitcher } from 'components/styles/ThemeSwitcher';
import { getIsModalOpen } from 'redux/modal/modal-selectors';
import LanguageBar from 'components/LanguageBar/LanguageBar';

function Navigation() {
  const isUserLogin = useSelector(getIsLoggedIn);
  const isModalOpen = useSelector(getIsModalOpen);

  return (
    <StyledDiv>
      <nav>
        {!isUserLogin ? (
          <>
            {' '}
            <NavigationLogin>
              <NavigationList>
                <NavigationItem>
                  <NavItem to="/login">Sign In</NavItem>
                </NavigationItem>
                <NavigationItem>
                  <NavItem to="/registration">Sign Up</NavItem>
                </NavigationItem>
                <NavigationItem>
                  <ThemeSwitcher />
                </NavigationItem>
                <NavigationItem>
                  <LanguageBar />
                </NavigationItem>
              </NavigationList>
            </NavigationLogin>
            {isModalOpen ? <UserInfo /> : <></>}
          </>
        ) : (
          <NavigationDiary>
            <NavigationListDiary>
              <NavigationList>
                <NavigationItem>
                  <NavItem to="/diary">Diary</NavItem>
                </NavigationItem>
                <NavigationItem>
                  <NavItem to="/calculator">Calculator</NavItem>
                </NavigationItem>
                <NavigationItem>
                  <ThemeSwitcher />
                </NavigationItem>
                <NavigationItem>
                  <LanguageBar />
                </NavigationItem>
              </NavigationList>
            </NavigationListDiary>
            {
              <StyledUserInfo>
                <UserInfo />
              </StyledUserInfo>
            }
          </NavigationDiary>
        )}
      </nav>
    </StyledDiv>
  );
}
export default Navigation;
