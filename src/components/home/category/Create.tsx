import * as Yup from "yup";
import { Formik } from "formik";
import { Form } from "components/auth/form";
import FieldInput from "Shared/Input";
import ButtonInfo from "Shared/ButtonInfo";
import { useRef } from "react";

function Create() {
  const closModal = useRef<any>();

  const validationSchema = Yup.object().shape({
    category: Yup.string().required("category is required"),
  });

  return (
    <Formik
      validationSchema={validationSchema}
      onSubmit={async (values, actions) => {
        closModal.current.click();
        actions.resetForm();
      }}
      initialValues={{
        category: "",
      }}
    >
      {() => (
        <div className="flex w-full justify-center">
          <Form>
            <label className="hidden" ref={closModal} htmlFor="Category" />
            <FieldInput
              name="category"
              className="input-text"
              type="input"
              value="category"
            />
            <ButtonInfo className="px-16"> send</ButtonInfo>
          </Form>
        </div>
      )}
    </Formik>
  );
}

export default Create;
