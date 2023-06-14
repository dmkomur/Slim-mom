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
import { useState } from 'react';

export const App = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Header></Header>
      <Navigation></Navigation>
      <UserInfo></UserInfo>
      <Login></Login>
      <Register></Register>
      <button type="button" onClick={handleToggleModal}>
        Open Modal
      </button>
      {isOpen && <Modal onClose={handleToggleModal}></Modal>}
      <DiaryDateCalendar></DiaryDateCalendar>
      <DiaryAddProductForm></DiaryAddProductForm>
      <DiaryProductList></DiaryProductList>
      <DiaryProductListItem></DiaryProductListItem>
    </>
  );
};
