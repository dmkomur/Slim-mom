import { Outlet } from 'react-router-dom';
import { CommonContainer } from './Layout.styled';
import { Suspense } from 'react';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';

export const Layout = () => {
  return (
    <>
      <CommonContainer>
        <Header />
        <main>
          {/* <Suspense fallback={<Loader />}> */}
            <Outlet />
          {/* </Suspense> */}
        </main>
      </CommonContainer>
    </>
  );
};
