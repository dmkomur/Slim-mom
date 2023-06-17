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
} from './Navigation.styled';
import { ThemeSwitcher } from 'components/styles/ThemeSwitcher';

function Navigation() {
  const isUserLogin = useSelector(getIsLoggedIn);

  return (
    <div>
      <nav>
        {!isUserLogin ? (
          <NavigationLogin>
            <NavigationList>
              <NavigationItem>
                <NavItem to="login">Sign In</NavItem>
              </NavigationItem>
              <NavigationItem>
                <NavItem to="registration">Sign Up</NavItem>
              </NavigationItem>
              <NavigationItem>
                <ThemeSwitcher />
              </NavigationItem>
            </NavigationList>
          </NavigationLogin>
        ) : (
          <NavigationDiary>
            <NavigationListDiary>
              <NavigationItem>
                <NavItem to="diary">Diary</NavItem>
              </NavigationItem>
              <NavigationItem>
                <NavItem to="calculator">Calculator</NavItem>
              </NavigationItem>
              <NavigationItem>
                <ThemeSwitcher />
              </NavigationItem>
            </NavigationListDiary>
            {
              <StyledUserInfo>
                <UserInfo />
              </StyledUserInfo>
            }
          </NavigationDiary>
        )}
      </nav>
    </div>
  );
}
export default Navigation;
