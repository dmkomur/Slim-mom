import { Formik, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { register, logIn } from 'redux/auth/auth-operations';
import 'react-toastify/dist/ReactToastify.css';

import * as yup from 'yup';
import {
  StyledInputAuth,
  StyledFormAuth,
  StyledBtnAuthAccent,
  StyledHeaderAuth,
} from '../Login/Login.styled';
import { toast, ToastContainer } from 'react-toastify';

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
  const dispatch = useDispatch();
  const startValue = {
    email: '',
    password: '',
    username: '',
  };
  const notify = msg => {
    toast.error(msg);
  };

  const handleSubmit = (values, { resetForm }) => {
    const { email, password } = values;
    dispatch(register(values))
      .unwrap()
      .then(() => dispatch(logIn({ email, password })))
      .then(() => resetForm());
  };
  return (
    <>
      <StyledHeaderAuth>Register</StyledHeaderAuth>
      <Formik
        onSubmit={handleSubmit}
        validationSchema={schema}
        initialValues={startValue}
      >
        <StyledFormAuth>
          <StyledInputAuth type="text" name="username" placeholder="Name *" />
          <ErrorMessage name="username">{m => notify(m)}</ErrorMessage>

          <StyledInputAuth type="email" name="email" placeholder="Email *" />
          <ErrorMessage name="email">{m => notify(m)}</ErrorMessage>
          <StyledInputAuth
            type="password"
            name="password"
            placeholder="Password *"
          />
          <ErrorMessage name="password">{m => notify(m)}</ErrorMessage>
          <StyledBtnAuthAccent type="submit">Register</StyledBtnAuthAccent>
        </StyledFormAuth>
      </Formik>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default Register;
