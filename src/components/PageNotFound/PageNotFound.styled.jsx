import styled from 'styled-components';

export const PageNotFd = styled.div`
  text-align: center;
  color: red;
  height: 700px;
  padding-top: 200px;
  font-weight: 700;
  text-shadow: 0 -0.4px 0.4px #ffffff, 0.4px 0.4px 0.4px #00000031;

  h1 {
    margin-bottom: 8px;
    text-align: center;
    color: #fc842d;

    font-family: 'Verdana';
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    line-height: 140%;

    @media screen and (min-width: 480px) {
      font-size: 150px;
    }
  }
  p {
    color: #fc842d;
    font-family: 'Verdana';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 140%;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      text-transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

    @media screen and (min-width: 480px) {
      font-size: 54px;
      font-family: 'system-ui, sans-serif';
      letter-spacing: 1.5px;
    }
  }
`;

export const Wrap = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

// .test {
//     text-emphasis: none;
// }

export const Divider = styled.div`
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 137px;
  overflow-x: clip;
`;

export const DividerBanana = styled.img`
  font-weight: 600;
  font-size: 21px;
  line-height: 22px;
  border-radius: 25px;
  padding: 14px 24px;
  transform: rotate(35deg);
  background-image: src('../../imgs/Banana.jpg');
  position: absolute;
`;

export const DividerLeaves = styled.img`
  src: '../../imgs/Fon.jpg';
  transform: rotate(115deg);
`;

export const DivaderStrawberry = styled.img`
  background-image: src('../../imgs/Strawberry-Big.jpg');
  transform: rotate(115deg);
`;
