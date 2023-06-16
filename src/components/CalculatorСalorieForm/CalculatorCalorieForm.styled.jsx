import styled from 'styled-components';
import { breakpoints } from '../styles/breakpoints';

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
  /* @media screen and (min-width: ${breakpoints.mobile}) and (max-width: 767px) {
    padding: 32px 20px 100px 20px;
  }

  @media screen and (min-width: ${breakpoints.tablet}) and (max-width: 1279px) {
    padding: 100px 32px 398px 32px;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    padding: 147px 16px 111px 16px; 
  } */
`;

export const StyledHeaderCaloriesCalc = styled(StyledHeaderAuth)`
  width: 280px;
  margin-bottom: 32px;

  font-size: 18px;
  line-height: 1.4;
  letter-spacing: 0em;
  text-transform: none;

  color: #212121;

  /* @media screen and (min-width: ${breakpoints.tablet}) {
    width: 520px;
    margin-bottom: 68px;

    font-size: 34px;
  } */
`

export const StyledFormCaloriesCalc = styled(StyledFormAuth)`
  gap: 16px;

  /* @media screen and (min-width: ${breakpoints.tablet}) and (max-width: 1279px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  } */
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
  margin-top: 24px;
`

export const StyledLabelBTCaloriesCalc = styled.span`
  display: block;
  width: 240px;
  padding: 16px 0px 0px 0px;

  font-weight: 700;
  font-size: 14px;
  line-height: 1.21;
  letter-spacing: 0.04em;

  color: #9b9faa;

  /* @media screen and (min-width: ${breakpoints.tablet}) and (max-width: 1279px) {
    border-bottom: 1px solid #e0e0e0;
  } */
`

export const StyledRadioBtnsBTCaloriesCalc = styled.div`
  display: flex;
  column-gap: 28px;
  width: 240px;
  margin-top: 8px;
`

export const StyledRadioBtnBTCaloriesCalc = styled.input`
  -webkit-appearance: none;
  appearance: none;

  display: grid;
  place-content: center;
  margin: 0;
  width: 20px;
  height: 20px;
  border: 1px solid #E0E0E0;
  border-radius: 50%;
  
  background-color: #FFFFFF;
  
  font: inherit;
  
  cursor: pointer;

  &::before {
  content: "";
  width: 10px;
  height: 10px;
  border-radius: 50%;
  box-shadow: inset 14px 14px #FC842D;
  
  background-color: CanvasText;

  transform: scale(0);
  transition: 120ms transform ease-in-out;
  }

  &:checked::before {
    transform: scale(1);
  }

  &:hover {
    box-shadow: 0 0 20px rgba(252, 132, 45, 0.5);
  }
`

export const StyledRadioLabelBTCaloriesCalc = styled.label`
  display: flex;
  align-items: center;
  column-gap: 4px;

  font-weight: 400;
  line-height: 1.21;

color: #9B9FAA;
`