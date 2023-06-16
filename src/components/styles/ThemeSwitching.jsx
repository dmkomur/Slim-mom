import { useEffect } from 'react';
import { ThemeContainer, Checkbox, Ball } from './ThemeSwitching.styled.js';
import { light, dark } from './Theme.styled';
import { ThemeProvider } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getCheck, getTheme } from 'redux/theme/theme-selectors.js';
import { changeCheck, changeTheme } from 'redux/theme/theme-reducer.js';
import PropTypes from 'prop-types';

export const ThemeSwitching = ({ children }) => {
  const selectedTheme = useSelector(getTheme);
  const checked = useSelector(getCheck);
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

  const HandleThemeChange = () => {
    const newChecked = !checked;
    dispatch(changeCheck(newChecked));
    localStorage.setItem('checked', String(newChecked));

    const newTheme = selectedTheme === 'dark' ? 'light' : 'dark';
    dispatch(changeTheme(newTheme));
    localStorage.setItem('theme', newTheme);
  };

  const HandleThemeChoose = () => {
    return selectedTheme === 'dark' ? dark : light;
  };
  return (
    <ThemeProvider theme={HandleThemeChoose}>
      <ThemeContainer>
        <Checkbox
          type="checkbox"
          checked={checked}
          value={checked}
          onChange={HandleThemeChange}
        />
        <Ball></Ball>
      </ThemeContainer>
      {children}
    </ThemeProvider>
  );
};

ThemeSwitching.propTypes = {
  children: PropTypes.array.isRequired,
};
