import Modal from "components/Modal";
import React from "react";
import { Link } from "react-router-dom";
import usePrivateCategories from "services/categories/privateCategories";
import CartCategory from "./Cart";
import ModalCreate from "../ModalCreate";
import Create from "./Create";

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
