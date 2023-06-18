import { Box } from './Home.styled';
import { useWidth } from 'hooks/useWidth';
import { getIsModalOpen } from 'redux/modal/modal-selectors';
import { useSelector } from 'react-redux';
// import { lazy } from 'react';

import CalculatorCalorieForm from 'components/CalculatorСalorieForm/CalculatorСalorieForm';
import Recommendations from 'components/Modal/Recommendations/Recommendations';
// const Loader = lazy(() => import('components/Loader/Loader'));
// const CalculatorCalorieForm = lazy(() =>
//   import('components/CalculatorСalorieForm/CalculatorСalorieForm')
// );
// const Recommendations = lazy(() =>
//   import('components/Modal/Recommendations/Recommendations')
// );

function Home() {
  const isModalOpen = useSelector(getIsModalOpen);
  const width = useWidth();

  return (
    // <Suspense fallback={<Loader />}>
    <Box>
      {isModalOpen && width <= 768 ? (
        <Recommendations />
      ) : (
        <CalculatorCalorieForm />
      )}
    </Box>
    // </Suspense>
  );
}

export default Home;
