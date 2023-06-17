import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../../redux/auth/auth-selectors';
import { logOut } from '../../redux/auth/auth-operations';
import sprite from 'images/header/symbol-defs.svg';
import {
  StyledUserInfo,
  Button,
  NavUserInfo,
  StyledTitle,
  StyledSvgBack,
  ButtonBack,
} from './UserInfo.styled';
// import {IoReturnDownBackSharp} from 'react-icons';


function UserInfo() {
  const { username } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logOut());
  };

  return (
    <StyledUserInfo>
      <ButtonBack>
        <StyledSvgBack>
          <use href={sprite + '#icon-back'}></use>
        </StyledSvgBack>
        </ButtonBack>
      {username && <StyledTitle>{username}</StyledTitle>}
      <NavUserInfo />
      <Button onClick={onLogout}>Exit</Button>
    </StyledUserInfo>
  );
}

export default UserInfo;

