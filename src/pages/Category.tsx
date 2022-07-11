import Modal from "components/Modal";
import usePrivateCategories from "services/categories/privateCategories";
import CartCategory from "components/category/card";
import ModalCreate from "components/ModalCreate";
import Create from "components/category/Create";

function Category() {
  const { data, isLoading } = usePrivateCategories();

  const result = isLoading ? (
    <div>Loading...</div>
  ) : (
    data?.data.data.map(({ id, name }) => (
      <CartCategory key={id} id={id} text={name} />
    ))
  );

  return (
    <>
      <Modal name="Category">
        <ModalCreate>
          <Create />
        </ModalCreate>
      </Modal>

      {result}
    </>
  );
}

export default Category;
