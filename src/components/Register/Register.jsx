import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

let schema = yup.object({
  username: yup.string().required('Please enter a name').min(3).max(32),

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

function Register() {
  const startValue = {
    email: '',
    password: '',
    username: '',
  };
  const handleSubmit = (values, { resetForm }) => {
    resetForm();
  };
  return (
    <>
      <Formik
        onSubmit={handleSubmit}
        validationSchema={schema}
        initialValues={startValue}
      >
        <Form>
          <lable htmlFor="username">Name</lable>
          <Field type="text" name="username" />
          <ErrorMessage name="username" component="div" />

          <lable htmlFor="email">Email</lable>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />

          <lable htmlFor="password">Password</lable>
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </>
  );
}

export default Register;
