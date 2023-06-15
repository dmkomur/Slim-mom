import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';
import {
  StyledInputAuth,
  StyledFormAuth,
  StyledBtnAuthAccent,
  StyledHeaderAuth,
} from './Login.styled';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

let schema = yup.object({
  password: yup
    .string()
    .required('Please enter a password')
    .min(8)
    .max(32)
    .matches(/^(?=.*[a-zA-Z])(?=.*[0-9])/, 'a-z and 0-9'),

  email: yup.string().required('Please enter a email').email().min(8).max(32),
});

function Login() {
  const dispatch = useDispatch();
  const startValue = {
    email: '',
    password: '',
  };
  const notify = msg => {
    toast.error(msg);
  };
  const handleSubmit = (values, { resetForm }) => {
    resetForm();
    dispatch(logIn(values));
  };
  return (
    <>
      <StyledHeaderAuth>Log in</StyledHeaderAuth>
      <Formik
        onSubmit={handleSubmit}
        validationSchema={schema}
        initialValues={startValue}
      >
        <StyledFormAuth>
          <StyledInputAuth type="email" name="email" placeholder="Email *" />
          <ErrorMessage name="email">{m => notify(m)}</ErrorMessage>

          <StyledInputAuth
            type="password"
            name="password"
            placeholder="Password *"
          />
          <ErrorMessage name="password">{m => notify(m)}</ErrorMessage>
          <StyledBtnAuthAccent type="submit">Log in</StyledBtnAuthAccent>
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

export default Login;
