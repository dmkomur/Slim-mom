import { Outlet } from 'react-router-dom';
import { CommonContainer } from './Layout.styled';
import { Suspense } from 'react';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import { getTheme } from 'redux/theme/theme-selectors';

export const Layout = () => {
  const currentTheme = useSelector(getTheme);
  return (
    <>
      <CommonContainer>
        <Header />
        <main>
          <ToastContainer
            position="top-right"
            autoClose={1700}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme={currentTheme}
          />
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </main>
      </CommonContainer>
    </>
  );
};
