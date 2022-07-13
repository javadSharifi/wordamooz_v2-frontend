import { authContext } from 'context/AuthContext';
import { Formik } from 'formik';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Button, Form, Input } from '../../components/auth/form';
import Title from '../../components/auth/Title';
import useRegister from '../../services/auth/register';

type TData = {
  email: string;
  name: string;
  password: string;
};

function Register() {
  const [auth, setAuth] = useContext(authContext);
  const { mutate } = useRegister();
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('email is required'),
    name: Yup.string().required('name is required'),
    password: Yup.string()
      .required('password is required')
      .min(6, 'password must be at least 6 characters')
      .max(20, 'password must be less than 20 characters'),
  });

  return (
    <Formik
      validationSchema={validationSchema}
      onSubmit={async ({ email, name, password }, { setErrors }) => {
        mutate(
          { email, name, password, password_confirmation: password },
          {
            onSuccess({ data }) {
              toast.success('register is success');
              setAuth({ ...auth, loading: true, id: data.data.id });
            },
            onError(e: any) {
              console.log(setErrors(e.response.data.errors));
            },
          }
        );
      }}
      initialValues={
        {
          email: '',
          name: '',
          password: '',
        } as TData
      }
    >
      {() => (
        <Form className="flex flex-col items-center justify-center">
          <Title />
          <Input name="name" className=" w-80" type="name" value="name" />
          <Input name="email" className=" w-80" type="email" value="email" />
          <Input
            name="password"
            className="w-80"
            type="password"
            value="password"
          />
          <Button className="px-24 lg:mt-10">Register</Button>
          <Link to={'/auth'} className="mt-3 text-xl  text-cyan-600">
            I have account
          </Link>
        </Form>
      )}
    </Formik>
  );
}

export default Register;
