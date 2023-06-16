import { useDispatch, useSelector } from 'react-redux';
import { createPortal } from 'react-dom';
import { IoMdAlert } from 'react-icons/io';
import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { getIsLoggedIn, getUserData } from '../../redux/auth/auth-selectors';
import { dailyRate, dailyRateId, getUser } from '../../redux/auth/auth-operations';
import { calcData } from 'redux/calculator/calculator-reducer';
import { getCalcData } from 'redux/calculator/calculator-selectors';
import { toggleModal } from '../../redux/modal/modal-reducer.js';
import { getIsModalOpen } from '../../redux/modal/modal-selectors';
import Modal from 'components/Modal/Modal';
import {
  StyledWrapCaloriesCalc,
  StyledHeaderCaloriesCalc,
  StyledFormCaloriesCalc,
  StyledLabelCaloriesCalc,
  StyledWrapInputCaloriesCalc,
  StyledInputCaloriesCalc,
  StyledErrorCaloriesCalc,
  BtnWrapCaloriesCalc,
  StyledBtnCaloriesCalc,
  StyledLabelBTCaloriesCalc,
  StyledRadioBtnsBTCaloriesCalc,
  StyledRadioBtnBTCaloriesCalc,
  StyledRadioLabelBTCaloriesCalc,
} from './CalculatorCalorieForm.styled.jsx';

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
    weight: userData.weight || userCalcData.weight,
    height: userData.height || userCalcData.height,
    age: userData.age || userCalcData.age,
    desiredWeight: userData.desiredWeight || userCalcData.desiredWeight,
    bloodType: userData.bloodType || userCalcData.bloodType,
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
          <StyledFormCaloriesCalc>
            <StyledWrapInputCaloriesCalc>
              <StyledInputCaloriesCalc
                type="number"
                name="height"
                placeholder=" " />
              <StyledLabelCaloriesCalc>Height *</StyledLabelCaloriesCalc>
              <ErrorMessage
                name="height">
                {m => (
                  <StyledErrorCaloriesCalc>
                    <IoMdAlert />
                    {m}
                  </StyledErrorCaloriesCalc>
                )}
              </ErrorMessage>
            </StyledWrapInputCaloriesCalc>
            
            <StyledWrapInputCaloriesCalc>
              <StyledInputCaloriesCalc
                type="number"
                name="age"
                placeholder=" " />
              <StyledLabelCaloriesCalc>Age *</StyledLabelCaloriesCalc>
              <ErrorMessage
                name="age">
                {m => (
                  <StyledErrorCaloriesCalc>
                    <IoMdAlert />
                    {m}
                  </StyledErrorCaloriesCalc>
                )}
              </ErrorMessage>
            </StyledWrapInputCaloriesCalc>
            
            <StyledWrapInputCaloriesCalc>
              <StyledInputCaloriesCalc
                type="number"
                name="weight"
                placeholder=" " />
              <StyledLabelCaloriesCalc>Current weight *</StyledLabelCaloriesCalc>
              <ErrorMessage
                name="weight">
                {m => (
                  <StyledErrorCaloriesCalc>
                    <IoMdAlert />
                    {m}
                  </StyledErrorCaloriesCalc>
                )}
              </ErrorMessage>
            </StyledWrapInputCaloriesCalc>
            
            <StyledWrapInputCaloriesCalc>
              <StyledInputCaloriesCalc
                type="number"
                name="desiredWeight"
                placeholder=" "
              />
              <StyledLabelCaloriesCalc>Desired weight *</StyledLabelCaloriesCalc>
              <ErrorMessage
                name="desiredWeight">
                {m => (
                  <StyledErrorCaloriesCalc>
                    <IoMdAlert />
                    {m}
                  </StyledErrorCaloriesCalc>
                )}
              </ErrorMessage>
              </StyledWrapInputCaloriesCalc>

            <div>
              <StyledLabelBTCaloriesCalc>Blood type *</StyledLabelBTCaloriesCalc>

              <Field
                component={StyledRadioBtnsBTCaloriesCalc}
                name="bloodType">
              
                <StyledRadioLabelBTCaloriesCalc htmlFor="bloodType1">
                  <StyledRadioBtnBTCaloriesCalc
                    type="radio"
                    id="bloodType1"
                    defaultChecked={values.bloodType === 1}
                    name="bloodType"
                    value="1" />
                  1
                </StyledRadioLabelBTCaloriesCalc>
                
                <StyledRadioLabelBTCaloriesCalc
                  htmlFor="bloodType2">
                  <StyledRadioBtnBTCaloriesCalc
                    type="radio"
                    id="bloodType2"
                    defaultChecked={values.bloodType === 2}
                    name="bloodType"
                    value="2" />
                  2
                </StyledRadioLabelBTCaloriesCalc>
                
                <StyledRadioLabelBTCaloriesCalc
                  htmlFor="bloodType3">
                  <StyledRadioBtnBTCaloriesCalc
                    type="radio"
                    id="bloodType3"
                    defaultChecked={values.bloodType === 3}
                    name="bloodType"
                    value="3" />
                  3
                </StyledRadioLabelBTCaloriesCalc>
                
                <StyledRadioLabelBTCaloriesCalc
                  htmlFor="bloodType4">
                  <StyledRadioBtnBTCaloriesCalc
                    type="radio"
                    id="bloodType4"
                    defaultChecked={values.bloodType === 4}
                    name="bloodType"
                    value="4" />
                  4
                </StyledRadioLabelBTCaloriesCalc>
              </Field>
            </div>
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
