import { Field, Form } from 'formik';
import styled from 'styled-components';

export const StyledInputAuth = styled(Field)`
  border: none;
  width: 280px;
  border-bottom: 1px solid #e0e0e0;
  padding: 20px 0px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  &:focus {
    outline: none;
    border-bottom: 1px solid #fc842d;
  }
  &:not(:placeholder-shown) + span,
  &:focus + span {
    top: 0;
    color: #fc842d;
  }
`;

export const StyledFormAuth = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

export const StyledBtnAuthAccent = styled.button`
  width: 182px;
  height: 44px;
  border: none;
  font-family: inherit;
  border-radius: 30px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.21;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.04em;
  color: #ffffff;
  background: #fc842d;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  border-radius: 30px;
`;
export const StyledWrapInputAuth = styled.div`
  position: relative;
`;
export const StyledLabelAuth = styled.span`
  position: absolute;
  top: 20px;
  left: 0;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.21;
  letter-spacing: 0.04em;
  color: #9b9faa;
  transition: top 250ms linear;
`;
export const StyledHeaderAuth = styled.h3`
  font-weight: 700;
  margin-bottom: 40px;
  font-size: 14px;
  line-height: 1.21;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #fc842d;
`;

export const StyledErrorAuth = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  display: flex;
  gap: 4px;
  align-items: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #fc842d;
`;
