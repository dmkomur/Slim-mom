import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import LanguageBar from 'components/LanguageBar/LanguageBar';

function Header() {
  const dispatch = useDispatch();
  return (
    <div>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/registration">Register</NavLink>
      <NavLink to="/calculator">Calculator</NavLink>
      <NavLink to="/diary">Diary</NavLink>
      <button onClick={() => dispatch(logOut())} type="button">
        Sign out
      </button>
      <LanguageBar />
    </div>
  );
}

export default Header;
