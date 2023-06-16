import styled from 'styled-components';

export const ThemeContainer = styled.label`
  background-color: ${({ theme }) => !theme.colors.switcherOn};
  border: 2px solid ${({ theme }) => !theme.colors.switcherOn};
  display: flex;
  flex-direction: row;
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  margin: 10px auto;
  padding: 5px;
  position: relative;
  width: 40px;
  height: 21px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Checkbox = styled.input`
  opacity: 0;
  position: absolute;
  &:checked + span {
    transform: translateX(20px);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const Ball = styled.span`
  position: absolute;
  height: 16px;
  width: 16px;
  background-color: ${({ theme }) => theme.colors.switcherOn};
  top: 1px;
  left: 1px;
  border-radius: 50%;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
