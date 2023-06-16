import { Suspense, useEffect } from 'react';
import CalculatorCalorieForm from 'components/CalculatorСalorieForm/CalculatorСalorieForm';
import { RightSideBar } from 'components/RightSideBar/RightSideBar';
import { Box } from './Calculator.styled';
import { useDispatch } from 'react-redux';
import { dayInfo } from 'redux/day/day-operations';

function Calculator() {
  const dispatch = useDispatch();

  const exportDate = () => {
    let date = new Date();
    let dateString = date.toISOString().split('T')[0];
    return { date: dateString };
  };
  console.log(exportDate());
  useEffect(() => {
    dispatch(dayInfo(exportDate()));
  }, [dispatch]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Box>
        <CalculatorCalorieForm />
        <RightSideBar />
      </Box>
    </Suspense>
  );
}
export default Calculator;
