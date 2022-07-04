import * as Yup from "yup";
import {  Formik } from "formik";
import { Form } from "components/auth/form";
import FieldInput from "Shared/Input";
import ButtonInfo from "Shared/ButtonInfo";
import { useRef } from "react";

function Create() {
  const closModal = useRef<any>();
  const validationSchema = Yup.object().shape({
    en: Yup.string().required("word en is required"),
  });

  return (
    <Formik
      validationSchema={validationSchema}
      onSubmit={async (values, actions) => {
        closModal.current.click();
        actions.resetForm();
      }}
      initialValues={{
        en: "",
        fa: "",
        description: "",
      }}
    >
      {() => (
        <div className="flex w-full justify-center">
          <Form>
            <label className="hidden" ref={closModal} htmlFor="Post" />
            <FieldInput
              name="en"
              className="input-text"
              type="string"
              value="word en"
            />
            <FieldInput
              name="fa"
              className="input-text"
              type="string"
              value="word fa"
            />
            <FieldInput
              as="textarea"
              name="description"
              type="textarea"
              value="description"
              className="  max-h-28  min-h-[4rem]    lg:my-2  lg:w-72  "
            />
            <ButtonInfo className="px-16"> send</ButtonInfo>
          </Form>
        </div>
      )}
    </Formik>
  );
}

export default Create;
