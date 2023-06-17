import { useEffect } from 'react';
import { light, dark } from './Theme.styled';
import { ThemeProvider } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getTheme } from 'redux/theme/theme-selectors.js';
import { changeCheck, changeTheme } from 'redux/theme/theme-reducer.js';
import PropTypes from 'prop-types';

export const ThemeSwitching = ({ children }) => {
  const selectedTheme = useSelector(getTheme);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      dispatch(changeTheme(savedTheme));
    }
    const savedChecked = localStorage.getItem('checked');
    if (savedChecked) {
      dispatch(changeCheck(savedChecked === 'true'));
    }
  }, [dispatch]);



  const HandleThemeChoose = () => {
    return selectedTheme === 'dark' ? dark : light;
  };
  return (
    <ThemeProvider theme={HandleThemeChoose}>
      {children}
    </ThemeProvider>
  );
};

ThemeSwitching.propTypes = {
  children: PropTypes.array.isRequired,
};
