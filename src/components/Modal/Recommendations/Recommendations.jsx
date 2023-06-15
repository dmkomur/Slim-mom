import {
  Box,
  StyledButton,
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

function Recommendations() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const products = useSelector(getDaily);
  const navigate = useNavigate();

  console.log(products);

  const handleStartLoseWeight = () => {
    return isLoggedIn ? navigate('/diary') : navigate('/login');
  };
  console.log(isLoggedIn);

  // useEffect(() => {
  //   IsLoggedIn && dispatch(dailyRateId(userId));
  // }, [dispatch, IsLoggedIn]);

  // useEffect(() => {
  //   IsLoggedIn && dispatch(dailyRate(userId));
  // }, [dispatch, IsLoggedIn]);
  return (
    <Box>
      <Title>Your recommended daily calorie intake is</Title>
      <CaloriesWrapper>
        <Calories>
          {Math.trunc(products.dailyRate)}
          <Kkal> kkal</Kkal>
        </Calories>
      </CaloriesWrapper>
      <Recommend>
        <Caption>Foods you should not eat</Caption>
        <ProductsList>
          {products.notAllowedProducts.map(product => (
            <ProductItem key={nanoid()}>
              <Product>{product}</Product>
            </ProductItem>
          ))}
        </ProductsList>
      </Recommend>

      <StyledButton type="button" onClick={handleStartLoseWeight}>
        Start losing weight
      </StyledButton>
    </Box>
  );
}

export default Recommendations;
