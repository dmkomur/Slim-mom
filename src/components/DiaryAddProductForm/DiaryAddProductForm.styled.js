import styled from 'styled-components';


export const Form = styled.form`
  display: flex;
  align-items: flex-end;
  margin-bottom: 60px;
`;

export const InputProdName = styled.input`
  border: 0;
  outline: 0;
  border-bottom: 1px solid #e0e0e0;
  width: 240px;
  margin-right: 48px;
  padding-bottom: 20px;
  height: 38px;

  font-family: 'Verdana';
  font-weight: 700;
  line-height: 120%;
  letter-spacing: 0.04em;
  color: #000;

  ::placeholder {
    color: #9b9faa;
  }
`;

export const InputGrams = styled.input`
  border: 0;
  outline: 0;
  border-bottom: 1px solid #e0e0e0;
  width: 107px;
  margin-right: 60px;
  padding-bottom: 20px;
  height: 38px;

  font-family: 'Verdana';
  font-weight: 700;
  line-height: 120%;
  text-align: right;
  letter-spacing: 0.04em;
  color: #000;

  ::placeholder {
    color: #9b9faa;
  }
`;

export const Button = styled.button`
  width: 48px;
  height: 48px;
  background: #fc842d;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  color: #fff;
  border: 0;
  border-radius: 50%;
`;
