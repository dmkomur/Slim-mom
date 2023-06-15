import {
  Title,
  ProductsList,
  Calories,
  Caption,
  Kkal,
  ProductItem,
  Product,
  CaloriesWrapper,
  Recommend,
} from './recommendations.styled';
import { nanoid } from 'nanoid';
import { getDaily, getIsLoggedIn } from '../../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { StyledBtnAuthAccent } from 'components/Login/Login.styled';

function Recommendations() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const products = useSelector(getDaily);
  const navigate = useNavigate();

  console.log(products);

  const handleStartLoseWeight = () => {
    return isLoggedIn ? navigate('/diary') : navigate('/login');
  };
  console.log(isLoggedIn);

  return (
    <div>
      <Title>
        Your recommended daily <br />
        calorie intake is
      </Title>
      <CaloriesWrapper>
        <Calories>
          {Math.trunc(products.dailyRate)}
          <Kkal> kkal</Kkal>
        </Calories>
      </CaloriesWrapper>
      <Recommend>
        <Caption>Foods you should not eat</Caption>
        <ProductsList>
          {products.notAllowedProducts.map((product, idx) => (
            <ProductItem key={nanoid()}>
              <Product>
                {idx + 1}. {product}
              </Product>
            </ProductItem>
          ))}
        </ProductsList>
      </Recommend>

      <StyledBtnAuthAccent
        style={{ margin: '0 auto' }}
        type="button"
        onClick={handleStartLoseWeight}
      >
        Start losing weight
      </StyledBtnAuthAccent>
    </div>
  );
}

export default Recommendations;
