import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import { dailyRate, dailyRateId } from '../../redux/auth/auth-operations';
import { toggleModal } from '../../redux/modal/modal-reducer.js';
import { getIsModalOpen } from '../../redux/modal/modal-selectors';
import { createPortal } from 'react-dom';
import Modal from 'components/Modal/Modal';
import {
  StyledInputCaloriesCalc,
  StyledFormCaloriesCalc,
  StyledBtnCaloriesCalc,
  StyledHeaderCaloriesCalc,
  StyledWrapCaloriesCalc,
  BtnWrapCaloriesCalc,
  BloodTypeGroup
} from './CalculatorСalorieForm.styled.js';

let schema = yup.object({
  weight: yup.number().min(20).max(500),
  height: yup.number().min(100).max(250),
  age: yup.number().min(18).max(110),
  desiredWeight: yup.number().min(100).max(500),
  bloodType: yup.number(),
});

function CalculatorCalorieForm() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isModalOpen = useSelector(getIsModalOpen);

  const startValue = {
    weight: undefined,
    height: undefined,
    age: undefined,
    desiredWeight: undefined,
    bloodType: undefined,
  };

  const handleSubmit = (values, { resetForm }) => {
    !isLoggedIn
      ? dispatch(dailyRate(values))
          .unwrap()
          .then(() => dispatch(toggleModal(!isModalOpen)))
      : dispatch(dailyRateId(values))
          .unwrap()
          .then(() => dispatch(toggleModal(!isModalOpen)));

    resetForm();
  };

  return (
    <StyledWrapCaloriesCalc>
      <StyledHeaderCaloriesCalc>Calculate your daily calorie intake right now</StyledHeaderCaloriesCalc>
      <Formik
        onSubmit={handleSubmit}
        validationSchema={schema}
        initialValues={startValue}
      >
        {({ values }) => (
          <StyledFormCaloriesCalc>
            <StyledInputCaloriesCalc type="number" name="height" placeholder="Height *" />
            <ErrorMessage name="height" component="div" />

            <StyledInputCaloriesCalc type="number" name="age" placeholder="Age *" />
            <ErrorMessage name="age" component="div" />

            <StyledInputCaloriesCalc type="number" name="weight" placeholder="Current weight *" />
            <ErrorMessage name="weight" component="div" />

            <StyledInputCaloriesCalc
              type="number"
              name="desiredWeight"
              placeholder="Desired weight *"
            />
            <ErrorMessage name="desiredWeight" component="div" />

            <Field component="div" name="bloodType">
              
              <BloodTypeGroup>Blood type *</BloodTypeGroup>

              <input
                type="radio"
                id="bloodType1"
                defaultChecked={values.bloodType === 1}
                name="bloodType"
                value="1"
              />
              <label htmlFor="bloodType1">1</label>

              <input
                type="radio"
                id="bloodType2"
                defaultChecked={values.bloodType === 2}
                name="bloodType"
                value="2"
              />
              <label htmlFor="bloodType2">2</label>

              <input
                type="radio"
                id="bloodType3"
                defaultChecked={values.bloodType === 3}
                name="bloodType"
                value="3"
              />
              <label htmlFor="bloodType3">3</label>

              <input
                type="radio"
                id="bloodType4"
                defaultChecked={values.bloodType === 4}
                name="bloodType"
                value="4"
              />
              <label htmlFor="bloodType4">4</label>
            </Field>
            <ErrorMessage name="bloodType" component="div" />

            <BtnWrapCaloriesCalc>
              <StyledBtnCaloriesCalc type="submit">
                Start losing weight
              </StyledBtnCaloriesCalc>
            </BtnWrapCaloriesCalc>
          </StyledFormCaloriesCalc>
        )}
      </Formik>
      {isModalOpen && createPortal(<Modal />, document.body)}
    </StyledWrapCaloriesCalc>
  );
}

export default CalculatorCalorieForm;
