import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Home from 'pages/Home/Home';

import { useDispatch } from 'react-redux';

import { lazy, Suspense, useEffect } from 'react';
import { getUser, refreshUser } from 'redux/auth/auth-operations';
import { Route, Routes } from 'react-router-dom';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { Layout } from './Layout/Layout';
import PageNotFound from './PageNotFound/PageNotFound';

import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { getIsRefreshing } from 'redux/auth/auth-selectors';
import { ThemeSwitching } from './styles/ThemeSwitching';
import { useAuth } from 'hooks';
import { GlobalStylesPrivate } from './styles/GlobalStylePrivate.styled';
import { GlobalStylePublic } from './GlobalStylePublic/GlobalStylePublic.styled';
import Calculator from 'pages/Calculator/Calculator';
import Diary from 'pages/Diary/Diary';
import Loader from './Loader/Loader';

// const Login = lazy(() => import('../pages/Login/Login'));
// const Register = lazy(() => import('../pages/Register/Register'));
// const Home = lazy(() => import('pages/Home/Home'));
// const Calculator = lazy(() => import('pages/Calculator/Calculator'));
// const Diary = lazy(() => import('pages/Diary/Diary'));
// const PageNotFoundL = lazy(() => import('./PageNotFound/PageNotFound'));

export const App = () => {
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser())
      .unwrap()
      .then(() => dispatch(getUser()));
  }, [dispatch]);

  const isRefreshing = useSelector(getIsRefreshing);

  return isRefreshing ? (
  <Loader/>
  ) : (
    <>
      <ThemeSwitching>
        {isLoggedIn ? <GlobalStylesPrivate /> : <GlobalStylePublic />}
        <Suspense>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route
                path="registration"
                element={
                  <PublicRoute restricted>
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
                    <Calculator />
                  </PrivateRoute>
                }
              />
              <Route
                path="diary"
                element={
                  <PrivateRoute>
                    <Diary />
                  </PrivateRoute>
                }
              />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </ThemeSwitching>
    </>
  );
};
