import styled from 'styled-components';

export const List = styled.ul`
  height: 280px;
  overflow-y: auto;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;

  &::-webkit-scrollbar {
    width: 6px;
    background-color: #f0f1f3;
  }

  &::-webkit-scrollbar-thumb {
    background: #264061;
  }
`;


export const DivStyle = styled.div`
  height: 280px;
  overflow: hidden;
  position: relative;
  width: 624px;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 20%;
    background: linear-gradient(to top, rgba(255, 255, 255, 0.8), transparent);
    pointer-events: none;
  }
`;