// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import { dailyRate, dailyRateId } from '../../redux/auth/auth-operations';
// import { Modal } from '../Modal';

let schema = yup.object({
  weight: yup
    .number()
    .min(20)
    .max(200),
  height: yup
    .number()
    .min(100)
    .max(210),
  age: yup
    .number()
    .min(18)
    .max(110),
  desiredWeight: yup
    .number()
    .min(100)
    .max(210),
  bloodType: yup
    .number()
});

function CalculatorCalorieForm() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);

  // const [isModalOpen, setIsModalOpen] = useState(false);
  const startValue = {
    weight: 0,
    height: 0,
    age: 0,
    desiredWeight: 0,
    bloodType: 1,
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();

    !isLoggedIn ? dispatch(dailyRate(values)) : dispatch(dailyRateId(values))

    // openModal();
  };

  // const openModal = () => {
  //   setIsModalOpen(true);
  // };

  return (
    <>
      <h1>Calculate your daily calorie intake right now</h1>
      <Formik
        onSubmit={handleSubmit}
        validationSchema={schema}
        initialValues={startValue}
      >
        {({ values }) => (
          <Form>
            <Field
              type="number"
              name="height"
              placeholder="Height *" />
            <ErrorMessage name="height" component="div" />

            <Field
              type="number"
              name="age"
              placeholder="Age *" />
            <ErrorMessage name="age" component="div" />

            <Field
              type="number"
              name="weight"
              placeholder="Current weight *"
            />
            <ErrorMessage name="weight" component="div" />

            <Field
              type="number"
              name="desiredWeight"
              placeholder="Desired weight *"
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

            {/* {{isModalOpen && <Modal />}} */}
          </Form>)}
      </Formik>
    </>
  );
}

export default CalculatorCalorieForm;
