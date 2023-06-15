import styled from 'styled-components';

import {
  StyledInputAuth,
  StyledFormAuth,
  StyledBtnAuthAccent,
  StyledHeaderAuth,
} from '../Login/Login.styled';

export const StyledInputCaloriesCalc = styled(StyledInputAuth)`
  padding: 0px 0px 8px 0px;
  width: 240px;
`;

export const StyledFormCaloriesCalc = styled(StyledFormAuth)`
  gap: 32px;
`;
export const StyledBtnCaloriesCalc = styled(StyledBtnAuthAccent)`
  margin-top: 8px;
`;

export const StyledHeaderCaloriesCalc = styled(StyledHeaderAuth)`
  margin-bottom: 34px;
  font-size: 18px;
  line-height: 1.4;
  text-transform: none;
  color: #212121;
`;

export const StyledWrapCaloriesCalc = styled.div`
  padding: 32px 20px 100px 20px;
`;

export const BtnWrapCaloriesCalc = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BloodTypeGroup = styled.legend`
  width: 240px;
  padding: 0px 0px 8px 0px;
  margin-bottom: 8px;
  border-bottom: 1px solid #e0e0e0;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.21;
  letter-spacing: 0.04em;
  color: #9b9faa;
`;
