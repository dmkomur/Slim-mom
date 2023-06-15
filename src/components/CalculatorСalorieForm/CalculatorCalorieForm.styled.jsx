import styled from 'styled-components';

import {
  StyledHeaderAuth,
  StyledFormAuth,
  StyledLabelAuth,
  StyledWrapInputAuth,
  StyledInputAuth,
  StyledBtnAuthAccent,
  StyledErrorAuth,
} from '../Login/Login.styled';

export const StyledWrapCaloriesCalc = styled.div`
  padding-bottom: 100px;
`;

export const StyledHeaderCaloriesCalc = styled(StyledHeaderAuth)`
  width: 280px;
  padding: 32px 0px;
  margin-bottom: 0px;

  font-size: 18px;
  line-height: 1.4;
  letter-spacing: 0m;
  text-transform: none;

  color: #212121;
`

export const StyledFormCaloriesCalc = styled(StyledFormAuth)`
  gap: 16px;
`

export const StyledLabelCaloriesCalc = styled(StyledLabelAuth)`
  top: 20px;
`

export const StyledWrapInputCaloriesCalc = styled(StyledWrapInputAuth)`
`

export const StyledInputCaloriesCalc = styled(StyledInputAuth)`
width: 240px;
padding: 16px 0px 8px 0px;
`

export const StyledErrorCaloriesCalc = styled(StyledErrorAuth)`
top: 40px;
font-size: 10px;
`

export const BtnWrapCaloriesCalc = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledBtnCaloriesCalc = styled(StyledBtnAuthAccent)`
  margin-top: 8px;
`

export const StyledLabelBTCaloriesCalc = styled.span`
  display: block;
  width: 240px;
  padding: 16px 0px 0px 0px;
  /* border-bottom: 1px solid #e0e0e0; */

  font-weight: 700;
  font-size: 14px;
  line-height: 1.21;
  letter-spacing: 0.04em;

  color: #9b9faa;
`;

export const StyledRadioBtnsBTCaloriesCalc = styled.div`
  display: flex;
  width: 240px;
  margin-top: 8px;
`

export const StyledRadioBtnBTCaloriesCalc = styled.input`
  /* appearance: none;
  margin-right: 4px;
  width: 20px;
  height: 20px;
  border: 1px solid #E0E0E0;;
  border-radius: 50%;

  background-color: #FFFFFF;

  transform: translateY(-0.075em);

  display: grid;
  place-content: center;
  
  &::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em #FC842D;
  }

  &:checked {
    transform: scale(1);
  } */
`

export const StyledRadioLabelBTCaloriesCalc = styled.label`
  
`