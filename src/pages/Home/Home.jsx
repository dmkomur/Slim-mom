import { Box } from './Home.styled';
import { useWidth } from 'hooks/useWidth';
import { getIsModalOpen } from 'redux/modal/modal-selectors';
import { useSelector } from 'react-redux';
import { Suspense, lazy } from 'react';

const Loader = lazy(() => import('components/Loader/Loader'));
const CalculatorCalorieForm = lazy(() =>
  import('components/CalculatorСalorieForm/CalculatorСalorieForm')
);
const Recommendations = lazy(() =>
  import('components/Modal/Recommendations/Recommendations')
);

function Home() {
  const isModalOpen = useSelector(getIsModalOpen);
  const width = useWidth();

  return (
    <Suspense fallback={<Loader />}>
      <Box>
        {isModalOpen && width <= 768 ? (
          <Recommendations />
        ) : (
          <CalculatorCalorieForm />
        )}
      </Box>
    </Suspense>
  );
}

export default Home;
