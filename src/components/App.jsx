import DiaryDateCalendar from './DiaryDateCalendar/DiaryDateCalendar';
import Navigation from './Navigation/Navigation';
import Login from './Login/Login';
import Register from './Register/Register';
import UserInfo from './UserInfo/UserInfo';
import Modal from './Modal/Modal';
import Header from './Header/Header';
import DiaryAddProductForm from './DiaryAddProductForm/DiaryAddProductForm';
import DiaryProductList from './DiaryProductList/DiaryProductList';
import DiaryProductListItem from './DiaryProductListItem/DiaryProductListItem';

import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getUser } from 'redux/auth/auth-operations';
import CalculatorСalorieForm from './DiaryAddProductForm/DiaryAddProductForm';
import { refreshUser } from 'redux/auth/auth-operations';

import {
  ThemeContainer,
  Checkbox,
  Ball,
} from './styles/ThemeSwitching.styled.js';
import { ThemeProvider } from 'styled-components';
import { light, dark } from './styles/Theme.styled';
import { GlobalStyles } from './styles/Global';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const currentTheme = JSON.parse(localStorage.getItem('current-theme'));
    if (currentTheme) {
      return setSelectedTheme(currentTheme);
    }
    dispatch(refreshUser())
      .unwrap()
      .then(() => dispatch(getUser()));
  }, [dispatch]);

  const [selectedTheme, setSelectedTheme] = useState(light);

  const HandleThemeChange = theme => {
    if (theme === dark) {
      setSelectedTheme(light);
      localStorage.setItem('current-theme', JSON.stringify(light));
    } else {
      setSelectedTheme(dark);
      localStorage.setItem('current-theme', JSON.stringify(dark));
    }
  };

  return (
    <>
      <ThemeProvider theme={selectedTheme}>
        <GlobalStyles />
        <ThemeContainer>
          <Checkbox
            type="checkbox"
            onChange={() => {
              HandleThemeChange(selectedTheme);
            }}
          />
          <Ball></Ball>
        </ThemeContainer>
        <Header></Header>
        <Navigation></Navigation>
        <UserInfo></UserInfo>
        <Login></Login>
        <Register></Register>
        <Modal></Modal>
        <CalculatorСalorieForm></CalculatorСalorieForm>
        <DiaryDateCalendar></DiaryDateCalendar>
        <DiaryAddProductForm></DiaryAddProductForm>
        <DiaryProductList></DiaryProductList>
        <DiaryProductListItem></DiaryProductListItem>
      </ThemeProvider>
    </>
  );
};
