import styled from 'styled-components';

// export const TogleSwitch = styled.div`
//   position: relative;
//   width: 200px;
// `;
// export const StyledTogleLable = styled.label`
//   position: absolute;
//   width: 100%;
//   height: 100px;
//   background-color: ${({ theme }) => theme.colors.borderActive};
//   border-radius: 50px;
//   cursor: pointer;
// `;

// export const StyledInput = styled.input`
//   position: absolute;
//   display: none;
//   &:checked ~ span {
//     background-color: ${({ theme }) => theme.colors.button};
//   }
//   &:checked ~ span::before {
//     transform: translateX(95px);
//     background-color: ${({ theme }) => theme.colors.borderActive};
//     box-shadow: none;
//   }
// `;

// export const StyledThemeSpan = styled.span`
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   border-radius: 50px;
//   transition: 0.3s;
//   &::before {
//     content: '';
//     position: absolute;
//     top: 13px;
//     left: 16px;
//     width: 75px;
//     height: 75px;
//     border-radius: 50%;
//     box-shadow: inset 28px -4px 0px 0px ${({ theme }) => theme.colors.button};
//     background-color: ${({ theme }) => theme.colors.borderActive};
//     transition: 0.3s;
//   }
// `;

export const TogleSwitch = styled.div`
  position: relative;
  width: 40px;
`;
export const StyledTogleLable = styled.label`
  position: absolute;
  width: 100%;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.borderActive};
  border-radius: 50px;
  cursor: pointer;
`;

export const StyledInput = styled.input`
  position: absolute;
  display: none;
  &:checked ~ span {
    background-color: ${({ theme }) => theme.colors.button};
  }
  &:checked ~ span::before {
    transform: translateX(20px);
    background-color: ${({ theme }) => theme.colors.borderActive};
    box-shadow: none;
  }
`;

export const StyledThemeSpan = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50px;
  transition: 0.3s;
  &::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    box-shadow: inset 5px -2px 0px 0px ${({ theme }) => theme.colors.button};
    background-color: ${({ theme }) => theme.colors.borderActive};
    transition: 0.3s;
  }
`;
