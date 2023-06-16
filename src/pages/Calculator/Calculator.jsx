import { Suspense, useEffect } from 'react';
import CalculatorCalorieForm from 'components/CalculatorСalorieForm/CalculatorСalorieForm';
import { RightSideBar } from 'components/RightSideBar/RightSideBar';
import { Box } from './Calculator.styled';
import { useDispatch } from 'react-redux';

function Calculator() {
  const dispatch = useDispatch();

  // useEffect(() => {dispatch() },[])

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
