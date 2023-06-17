import { ThemeContainer } from './ThemeSwitching.styled';
import { Checkbox } from './ThemeSwitching.styled';
import { Ball } from './ThemeSwitching.styled';
import { getCheck, getTheme } from 'redux/theme/theme-selectors';
import { changeCheck, changeTheme } from 'redux/theme/theme-reducer.js';
import { useDispatch, useSelector } from 'react-redux';

export function ThemeSwitcher() {
  const checked = useSelector(getCheck);
  const selectedTheme = useSelector(getTheme);
  const dispatch = useDispatch();

  const HandleThemeChange = () => {
    const newChecked = !checked;
    dispatch(changeCheck(newChecked));
    localStorage.setItem('checked', String(newChecked));

    const newTheme = selectedTheme === 'dark' ? 'light' : 'dark';
    dispatch(changeTheme(newTheme));
    localStorage.setItem('theme', newTheme);
  };
  return (
    <ThemeContainer>
      <Checkbox
        type="checkbox"
        checked={checked}
        value={checked}
        onChange={HandleThemeChange}
      />
      <Ball></Ball>
    </ThemeContainer>
  );
}
