import CalculatorCalorieForm from 'components/CalculatorСalorieForm/CalculatorСalorieForm';
import { Box } from './Home.styled';
import { useWidth } from 'hooks/useWidth';
import { getIsModalOpen } from 'redux/modal/modal-selectors';
import { useSelector } from 'react-redux';
import Recommendations from 'components/Modal/Recommendations/Recommendations';

function Home() {
  const isModalOpen = useSelector(getIsModalOpen);
  const width = useWidth();

  return (
    <Box>
      {isModalOpen && width <= 768 ? (
        <Recommendations />
      ) : (
        <CalculatorCalorieForm />
      )}
    </Box>
  );
}

export default Home;
