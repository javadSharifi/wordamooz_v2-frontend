import React from "react";
import { Form as FormikForm } from "formik";
import { IChildren } from "interfaces";



const Form = ({ children }: IChildren) => {
  return (
    <FormikForm className=" flex h-full w-full   flex-col items-center  gap-4">
      {children}
    </FormikForm>
  );
};

export default Form;
