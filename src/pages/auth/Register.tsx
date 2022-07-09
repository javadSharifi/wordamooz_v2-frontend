import { authContext } from "context/AuthContext";
import { Formik } from "formik";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import * as Yup from "yup";
import { Button, Form, Input } from "../../components/auth/form";
import Title from "../../components/auth/Title";
import useRegister from "../../services/auth/register";

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
      .email("Invalid email address")
      .required("email is required"),
    name: Yup.string().required("name is required"),
    password: Yup.string()
      .required("password is required")
      .min(6, "password must be at least 6 characters")
      .max(20, "password must be less than 20 characters"),
  });

  return (
    <Formik
      validationSchema={validationSchema}
      onSubmit={async ({ email, name, password }, { setErrors }) => {
        mutate(
          { email, name, password, password_confirmation: password },
          {
            onSuccess() {
              toast.success("register is success");
              setAuth({ ...auth, loading: false });
            },
            onError(e: any) {
              console.log(setErrors(e.response.data.errors));
            },
          }
        );
      }}
      initialValues={
        {
          email: "",
          name: "",
          password: "",
        } as TData
      }
    >
      {() => (
        <Form>
          <Title />
          <Input name="name" className=" input-text" type="name" value="name" />
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
          <Button>Register</Button>
        </Form>
      )}
    </Formik>
  );
}

export default Register;
