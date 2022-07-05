import { Formik } from "formik";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import * as Yup from "yup";
import { Button, Form, Input } from "../../components/auth/form";
import Title from "components/auth/Title";
import useLogin from "services/auth/login";
import { authContext } from "context/authContext";

type TData = {
  email: string;
  password: string;
};

function Login() {
  const { mutate } = useLogin();
    const [auth, setAuth] = useContext(authContext);
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("email is required"),
    password: Yup.string()
      .required("password is required")
      .min(6, "password must be at least 6 characters")
      .max(20, "password must be less than 20 characters"),
  });

  return (
    <Formik
      validationSchema={validationSchema}
      onSubmit={async (values, { setErrors }) => {
        mutate(values, {
          onSuccess: (res) => {
            toast.success("Login Success");
            setAuth({ ...auth, loading: true });
          },
          onError: (e: any) => {
            setErrors(e.response.data.errors);
          },
        });
      }}
      initialValues={
        {
          email: "",
          password: "",
        } as TData
      }
    >
      {() => (
        <Form>
          <Title />
          <Input
            name="email"
            className=" input-text"
            type="email"
            value="email"
          />
          <Input
            name="password"
            className=" input-text"
            type="password"
            value="password"
          />
          <Button>Login</Button>
        </Form>
      )}
    </Formik>
  );
}

export default Login;
