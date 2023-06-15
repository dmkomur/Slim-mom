import styled from 'styled-components';

export const PageNotFd = styled.div`
  text-align: center;
  align-items: center;
  justify-content: center;
  height: 700px;
  padding-top: 200px;
  font-weight: 700;
  text-shadow: 0 -0.4px 0.4px #ffffff, 0.4px 0.4px 0.4px #00000031;

  h1 {
    margin-bottom: 38px;
    text-align: center;
    color: ${({ theme }) => theme.colors.button};
    font-size: 34px;
    line-height: 140%;
    text-shadow: 2px 8px ${({ theme }) => theme.colors.borderInput};

    @media screen and (min-width: 768px) {
      font-size: 20px;
      max-width: 767px;
      width: 100%;
    }

    @media screen and (min-width: 320px) {
      font-size: 150px;
      max-width: 320px;
      width: 100%;
    }
  }
  p {
    color: ${({ theme }) => theme.colors.button};
    text-shadow: 2px 8px ${({ theme }) => theme.colors.borderInput};

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
