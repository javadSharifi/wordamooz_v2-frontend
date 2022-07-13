import { Formik } from 'formik';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import * as Yup from 'yup';
import { Button, Form, Input } from '../../components/auth/form';
import Title from 'components/auth/Title';
import useLogin from 'services/auth/login';
import { authContext } from 'context/AuthContext';
import { Link } from 'react-router-dom';

type TData = {
  email: string;
  password: string;
};

function Login() {
  const { mutate } = useLogin();
  const [auth, setAuth] = useContext(authContext);
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('email is required'),
    password: Yup.string()
      .required('password is required')
      .min(6, 'password must be at least 6 characters')
      .max(20, 'password must be less than 20 characters'),
  });

  return (
    <Formik
      validationSchema={validationSchema}
      onSubmit={async (values, { setErrors }) => {
        mutate(values, {
          onSuccess: ({ data }) => {
            toast.success('Login Success');
            setAuth({ ...auth, loading: true, id: data.data.id });
          },
          onError: (e: any) => {
            setErrors(e.response.data.errors);
          },
        });
      }}
      initialValues={
        {
          email: '',
          password: '',
        } as TData
      }
    >
      {() => (
        <Form className="flex flex-col items-center justify-center">
          <Title />
          <Input name="email" type="email" value="email" className="w-80" />
          <Input
            name="password"
            className=" w-80"
            type="password"
            value="password"
          />
          <Button className="px-24 lg:mt-10">Login</Button>
          <Link to={'./register'} className="mt-3 text-xl  text-cyan-600">
            Create an account
          </Link>
        </Form>
      )}
    </Formik>
  );
}

export default Login;
