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
import { Field } from 'formik';

export const StyledWrapCaloriesCalc = styled.div`
  @media screen and (min-width: ${breakpoints.desktop}) {
    width: 600px;
  }
`;

export const StyledHeaderCaloriesCalc = styled(StyledHeaderAuth)`
  width: 280px;
  margin-top: 32px;
  margin-bottom: 32px;

  font-size: 18px;
  line-height: 1.4;
  letter-spacing: 0em;
  text-transform: none;

  color: #212121;

  @media screen and (min-width: ${breakpoints.tablet}) {
    margin-top: 100px;
    width: 520px;
    margin-bottom: 68px;

    font-size: 34px;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    margin-top: 147px;
  }
`;

export const StyledFormCaloriesCalc = styled(StyledFormAuth)`
  gap: 16px;

  @media screen and (min-width: ${breakpoints.tablet}) {
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 32px;
    row-gap: 20px;

    & :nth-child(1) {
      order: 1;
    }

    & :nth-child(2) {
      order: 3;
    }

    & :nth-child(3) {
      order: 5;
    }

    & :nth-child(4) {
      order: 2;
    }

    & :nth-child(5) {
      order: 4;
    }

    & :nth-child(6) {
      order: 6;
    }
  }
`;

export const StyledLabelCaloriesCalc = styled(StyledLabelAuth)``;

export const StyledWrapInputCaloriesCalc = styled(StyledWrapInputAuth)``;

export const StyledInputCaloriesCalc = styled(StyledInputAuth)`
  width: 240px;
  padding: 16px 0px 8px 0px;

  @media screen and (min-width: ${breakpoints.tablet}) {
    padding: 20px 0px 20px 0px;
  }
`;

export const StyledErrorCaloriesCalc = styled(StyledErrorAuth)`
  top: 42px;
  font-size: 9px;

  @media screen and (min-width: ${breakpoints.tablet}) {
    top: 60px;
  }
`;

export const BtnWrapCaloriesCalc = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${breakpoints.tablet}) {
    position: absolute;
    top: 125%;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    top: 115%;
    right: 10%;
  }
`;

export const StyledBtnCaloriesCalc = styled(StyledBtnAuthAccent)`
  margin-top: 24px;

  @media screen and (min-width: ${breakpoints.tablet}) {
    margin-top: 0px;
  }
`;

export const StyledLabelBTCaloriesCalc = styled.span`
  position: relative;
  display: block;
  width: 240px;
  padding: 16px 0px 0px 0px;

  font-weight: 700;
  font-size: 14px;
  line-height: 1.21;
  letter-spacing: 0.04em;

  color: #9b9faa;

  @media screen and (min-width: ${breakpoints.tablet}) {
    padding-bottom: 20px;
    border-bottom: 1px solid #e0e0e0;
  }
`;

export const StyledRadioBtnsBTCaloriesCalc = styled(Field)`
  position: absolute;
  display: flex;
  column-gap: 28px;
  width: 240px;
  margin-top: 8px;

  & :nth-child(1) {
    order: 1;
  }

  & :nth-child(2) {
    order: 2;
  }

  & :nth-child(3) {
    order: 3;
  }

  & :nth-child(4) {
    order: 4;
  }

  & :nth-child(5) {
    order: 5;
  }

  & :nth-child(6) {
    order: 6;
  }
`;

export const StyledRadioBtnBTCaloriesCalc = styled.input`
  -webkit-appearance: none;
  appearance: none;

  display: grid;
  place-content: center;
  margin: 0;
  width: 20px;
  height: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 50%;

  background-color: #ffffff;

  font: inherit;

  cursor: pointer;

  &::before {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    box-shadow: inset 14px 14px #fc842d;

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
`;

export const StyledRadioLabelBTCaloriesCalc = styled.label`
  display: flex;
  align-items: center;
  column-gap: 4px;

  font-weight: 400;
  line-height: 1.21;

  color: #9b9faa;
`;
