import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 13px 25px;
  background: #fc842d;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  border-radius: 30px;
  font-family: 'Verdana';
  font-weight: 700;
  font-size: 14px;
  line-height: 1.2;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
`;

export const Title = styled.h2`
  font-family: 'Verdana';
  font-weight: 700;
  font-size: 18px;
  line-height: 1.4;
  color: #212121;
  padding: 0;
  margin: 44px 0 32px 0;
  @media screen and (min-width: 768px) {
    font-size: 26px;
  }
`;

export const CaloriesWrapper = styled.div`
 text-align: center;
  width: 279px;
  height: 62px;
  margin-bottom: 32px;
`;

export const Calories = styled.h1`
  margin: 0px;
  font-family: 'Verdana';
  font-weight: 700;
  font-size: 48px;
  line-height: 1.2;
  color: #264061;
`;

export const Kkal = styled.span`
  font-family: 'Verdana';
  font-weight: 700;
  font-size: 16px;
  line-height: 1.2;
  text-align: center;
  color: #264061;
`;

export const Recommend = styled.div`
  border-top: 1px solid #e0e0e0;
  margin-bottom: 40px;
  width: 280px;
  height: 263;
`;
export const Box = styled.div`
  &::-webkit-scrollbar {
    width: 6px;
    background-color: #f0f1f3;
  }

  &::-webkit-scrollbar-thumb {
    background: #264061;
  }
  overflow:hidden;
`;

export const Caption = styled.h3`
  margin: 20px 0;
  font-family: 'Verdana';
  font-weight: 700;
  font-size: 14px;
  line-height: 1.2;
  color: #212121;
`;

export const ProductsList = styled.ol`
  margin: 0;
  padding: 5px;
  width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  
`;

export const ProductItem = styled.li`
  margin-bottom:5px;
  overflow-wrap: normal;
`;

export const Product = styled.p`
  padding: 0;
  font-family: 'Verdana';
  font-weight: 400;
  font-size: 14px;
  line-height: 1.2;
  color: #9b9faa;
`;
