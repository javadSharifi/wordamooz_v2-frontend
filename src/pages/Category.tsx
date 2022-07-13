import Modal from 'components/Modal';
import usePrivateCategories from 'services/categories/privateCategories';
import ModalCreate from 'components/ModalCreate';
import Create from 'components/category/Create';
import CardCategory from 'components/category/Card';

function Category() {
  const { data, isLoading } = usePrivateCategories();

  const result = isLoading ? (
    <div>Loading...</div>
  ) : (
    data?.data.data.map(({ id, name }) => (
      <CardCategory key={id} id={id} text={name} />
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
