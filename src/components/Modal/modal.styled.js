import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
`;
export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(33, 33, 33, 0.12);
`;

export const ModalContainer = styled.div`
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  background: #ffffff;
  box-shadow: 0px 22px 40px rgba(0, 0, 0, 0.1);
  @media screen and (max-width: 767px) {
    max-width: 320px;
    height: 598px;
  }

  @media screen and (min-width: 768px) {
    padding: 20px;
    max-width: 672px;
    height: 572px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 672px;
    height: 574px;
  }
`;

export const CloseModal = styled.button`
  @media screen and (max-width: 767px) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    display:block;
    -webkit-box-align: center;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 20px;
    height: 20px;
    background: #ffffff;
  }
`;
export const CloseIcon=styled(AiOutlineClose)`

width: 20px;
height:20px;


`