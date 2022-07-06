import * as Yup from "yup";
import { Formik } from "formik";
import { Form } from "components/auth/form";
import FieldInput from "Shared/Input";
import ButtonInfo from "Shared/ButtonInfo";
import { useRef } from "react";
import useNewPost from "services/posts/newPost";
import toast from "react-hot-toast";
import { useQueryClient } from "react-query";

function Create({ id }: { id: string | undefined }) {
  const queryClient = useQueryClient();
  const { mutate } = useNewPost();
  const closModal = useRef<any>();
  const validationSchema = Yup.object().shape({
    word: Yup.string().required("word is required"),
    body: Yup.string().required("word body is required"),
    meaning: Yup.string().required("word meaning is required"),
  });

  return (
    <Formik
      validationSchema={validationSchema}
      onSubmit={async ({ body, word, meaning }, actions) => {
        console.log(body, word, meaning);
        mutate(
          { body, category_id: id, meaning, word },
          {
            onSuccess() {
              closModal.current.click();
              toast.success("create is success");
              actions.resetForm();
              queryClient.invalidateQueries([`posts_${id}`]);
            },
            onError(e: any) {
              console.log(actions.setErrors(e.response.data.errors));
            },
          }
        );

        actions.resetForm();
      }}
      initialValues={{
        word: "",
        meaning: "",
        body: "",
      }}
    >
      {() => (
        <div className="flex w-full justify-center">
          <Form>
            <label className="hidden" ref={closModal} htmlFor="Post" />
            <FieldInput
              name="word"
              className="input-text"
              type="string"
              value="word en"
            />
            <FieldInput
              name="meaning"
              className="input-text"
              type="string"
              value="word fa"
            />
            <FieldInput
              as="textarea"
              name="body"
              type="textarea"
              value="body"
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
