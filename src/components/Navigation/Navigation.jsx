import { NavLink } from 'react-router-dom';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import UserInfo from '../UserInfo';
import { useSelector } from 'react-redux';
import { NavigationList, NavigationItem, NavItem, NavigationLogin, NavigationDiary, StyledUserInfo,NavigationListDiary } from './Navigation.styled';

function Navigation() {
  const isUserLogin = useSelector(getIsLoggedIn);

  return (
    <div>
      <nav>
        {!isUserLogin ? (
          <NavigationLogin>
          <NavigationList>
            <NavigationItem>
              <NavItem to="login">Login</NavItem>
            </NavigationItem>
            <NavigationItem>
              <NavItem to="registration">Registration</NavItem>
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
          </NavigationListDiary>
        {<StyledUserInfo><UserInfo /></StyledUserInfo>}
        </NavigationDiary>
        )}
      </nav>
    </div>
  );
}
export default Navigation;


