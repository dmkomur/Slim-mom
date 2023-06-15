import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
  getDaily,
  getIsLoggedIn,
  getUserData,
} from '../../redux/auth/auth-selectors';
import {
  dailyRate,
  dailyRateId,
  getUser,
} from '../../redux/auth/auth-operations';
import { toggleModal } from '../../redux/modal/modal-reducer.js';
import { getIsModalOpen } from '../../redux/modal/modal-selectors';
import { createPortal } from 'react-dom';
import Modal from 'components/Modal/Modal';
<<<<<<< HEAD
import {
  StyledInputCaloriesCalc,
  StyledFormCaloriesCalc,
  StyledBtnCaloriesCalc,
  StyledHeaderCaloriesCalc,
  StyledWrapCaloriesCalc,
  BtnWrapCaloriesCalc,
  BloodTypeGroup
} from './CalculatorСalorieForm.styled.js';
=======
import { calcData } from 'redux/calculator/calculator-reducer';
import { getCalcData } from 'redux/calculator/calculator-selectors';
>>>>>>> main

let schema = yup.object({
  weight: yup.number().min(20).max(500),
  height: yup.number().min(100).max(250),
  age: yup.number().min(18).max(100),
  desiredWeight: yup.number().min(20).max(500),
  bloodType: yup.number(),
});

function CalculatorCalorieForm() {
  const userData = useSelector(getUserData);
  const userCalcData = useSelector(getCalcData);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isModalOpen = useSelector(getIsModalOpen);

  const startValue = {
<<<<<<< HEAD
    weight: undefined,
    height: undefined,
    age: undefined,
    desiredWeight: undefined,
    bloodType: undefined,
=======
    weight: userData.weight || userCalcData.weight,
    height: userData.height || userCalcData.height,
    age: userData.age || userCalcData.age,
    desiredWeight: userData.desiredWeight || userCalcData.desiredWeight,
    bloodType: userData.bloodType || userCalcData.bloodType,
>>>>>>> main
  };

  const handleSubmit = (values, { resetForm }) => {
    const body = {
      weight: values.weight,
      height: values.height,
      age: values.age,
      desiredWeight: values.desiredWeight,
      bloodType: Number(values.bloodType),
    };

    !isLoggedIn
      ? dispatch(dailyRate(body))
          .unwrap()
          .then(() => dispatch(getUser()))
          .then(() => dispatch(calcData(body)))
          .then(() => dispatch(toggleModal(!isModalOpen)))
      : dispatch(dailyRateId(body))
          .unwrap()
          .then(() => dispatch(getUser()))
          .then(() => dispatch(calcData(body)))
          .then(() => dispatch(toggleModal(!isModalOpen)));
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
<<<<<<< HEAD
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
=======
          console.log(values),
          (
            <Form>
              <Field type="number" name="height" placeholder="Height *" />
              <ErrorMessage name="height" component="div" />

              <Field type="number" name="age" placeholder="Age *" />
              <ErrorMessage name="age" component="div" />

              <Field type="number" name="weight" placeholder="Weight *" />
              <ErrorMessage name="weight" component="div" />

              <Field
                type="number"
                name="desiredWeight"
                placeholder="Desired weight *"
>>>>>>> main
              />
              <ErrorMessage name="desiredWeight" component="div" />

              <Field component="div" name="bloodType">
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

<<<<<<< HEAD
            <BtnWrapCaloriesCalc>
              <StyledBtnCaloriesCalc type="submit">
                Start losing weight
              </StyledBtnCaloriesCalc>
            </BtnWrapCaloriesCalc>
          </StyledFormCaloriesCalc>
=======
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

              <button type="submit">Start losing weight</button>
            </Form>
          )
>>>>>>> main
        )}
      </Formik>
      {isModalOpen && createPortal(<Modal />, document.body)}
    </StyledWrapCaloriesCalc>
  );
}

export default CalculatorCalorieForm;
