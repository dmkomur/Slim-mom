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
import { useEffect } from 'react';
import { getUser, refreshUser } from 'redux/auth/auth-operations';
import CalculatorСalorieForm from './DiaryAddProductForm/DiaryAddProductForm';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser())
      .unwrap()
      .then(() => dispatch(getUser()));
  }, [dispatch]);

  return (
    <>
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
    </>
  );
};
