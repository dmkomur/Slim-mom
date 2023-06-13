import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

let schema = yup.object({
  password: yup
    .string()
    .required('Please enter a password')
    .min(8)
    .max(32)
    .matches(/^(?=.*[a-zA-Z])(?=.*[0-9])/, 'a-z and 0-9'),

  email: yup
    .string()
    .required('Please enter a password')
    .email()
    .min(8)
    .max(32),
});

function Login() {
  const dispatch = useDispatch();
  const startValue = {
    email: '',
    password: '',
  };
  const handleSubmit = (values, { resetForm }) => {
    resetForm();
    dispatch(logIn(values));
  };
  return (
    <>
      <Formik
        onSubmit={handleSubmit}
        validationSchema={schema}
        initialValues={startValue}
      >
        <Form>
          <lable htmlFor="email">Email</lable>
          <Field type="email" name="email" />
          <ErrorMessage name="tremail" component="div" />

          <lable htmlFor="password">Password</lable>
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />

          <button type="submit">Log in</button>
        </Form>
      </Formik>
    </>
  );
}

export default Login;
