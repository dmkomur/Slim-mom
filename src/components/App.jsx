import DiaryDateCalendar from './DiaryDateCalendar/DiaryDateCalendar';
// import Navigation from './Navigation/Navigation';
import Login from './Login/Login';
import Register from './Register/Register';
// import UserInfo from './UserInfo/UserInfo';
// import Modal from './Modal/Modal';
// import Header from './Header/Header';
// import DiaryAddProductForm from './DiaryAddProductForm/DiaryAddProductForm';
import DiaryProductList from './DiaryProductList/DiaryProductList';
// import DiaryProductListItem from './DiaryProductListItem/DiaryProductListItem';
// import { Loader } from './components/Loader/Loader';
// import CalculatorСalorieForm from './DiaryAddProductForm/DiaryAddProductForm';
// import DiaryProductListItem from './DiaryProductListItem/DiaryProductListItem';
// import { Loader } from './components/Loader/Loader';
import CalculatorCalorieForm from './CalculatorСalorieForm/CalculatorСalorieForm';

import { useDispatch } from 'react-redux';

import { ThemeProvider } from 'styled-components';
import { light, dark } from './styles/Theme.styled';
import { GlobalStyles } from './styles/Global';
import { Suspense, useEffect, useState } from 'react';
import { getUser, refreshUser } from 'redux/auth/auth-operations';
import { Route, Routes } from 'react-router-dom';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { Layout } from './Layout/Layout';
import PageNotFound from './PageNotFound/PageNotFound';
import {
  ThemeContainer,
  Checkbox,
  Ball,
} from './styles/ThemeSwitching.styled.js';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { getIsRefreshing } from 'redux/auth/auth-selectors';

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
  const isRefreshing = useSelector(getIsRefreshing);
  const HandleThemeChange = theme => {
    if (theme === dark) {
      setSelectedTheme(light);
      localStorage.setItem('current-theme', JSON.stringify(light));
    } else {
      setSelectedTheme(dark);
      localStorage.setItem('current-theme', JSON.stringify(dark));
    }
  };

  return isRefreshing ? (
    <b>Refresing user...</b>
  ) : (
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
        <Suspense>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<CalculatorCalorieForm />} />
              <Route
                path="registration"
                element={
                  <PublicRoute>
                    <Register />
                  </PublicRoute>
                }
              />
              <Route
                path="login"
                element={
                  <PublicRoute restricted>
                    <Login />
                  </PublicRoute>
                }
              />
              <Route
                path="calculator"
                element={
                  <PrivateRoute>
                    <CalculatorCalorieForm />
                  </PrivateRoute>
                }
              />
              <Route
                path="diary"
                element={
                  <PrivateRoute>
                    <DiaryDateCalendar />
                    <DiaryProductList />
                  </PrivateRoute>
                }
              />
              <Route
                path="menu"
                element={
                  <PrivateRoute>
                    <DiaryProductList />
                  </PrivateRoute>
                }
              />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </ThemeProvider>
      {/* <Header></Header>
      <Navigation></Navigation>
      <UserInfo></UserInfo>
      <Login></Login>
      <Register></Register>
      <Modal></Modal>
      <CalculatorСalorieForm></CalculatorСalorieForm>
      <DiaryDateCalendar></DiaryDateCalendar>
      <DiaryAddProductForm></DiaryAddProductForm>
      <DiaryProductList></DiaryProductList>
      <DiaryProductListItem></DiaryProductListItem> */}
    </>
  );
};
