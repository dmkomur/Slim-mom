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

export const App = () => {
  return (
    <>
      <Header></Header>
      <Navigation></Navigation>
      <UserInfo></UserInfo>
      <Login></Login>
      <Register></Register>
      <Modal></Modal>
      <DiaryDateCalendar></DiaryDateCalendar>
      <DiaryAddProductForm></DiaryAddProductForm>
      <DiaryProductList></DiaryProductList>
      <DiaryProductListItem></DiaryProductListItem>
    </>
  );
};
