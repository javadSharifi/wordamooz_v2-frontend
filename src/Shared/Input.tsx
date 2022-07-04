import React from "react";
import { ErrorMessage, Field } from "formik";

function FieldInput({
  value,
  type,
  className,
  name,
  as
}: {
  value: string;
  type: string;
  className: string;
    name: string;
  as?:string
}) {
  return (
    <>
      <Field
        as={as}
        type={type}
        placeholder={value}
        name={name}
        className={` input border-2  border-gray-400/20 ${className} `}
      />
      <ErrorMessage name={name} component="p" className="text-red-600" />
    </>
  );
}

export default FieldInput;
