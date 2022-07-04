import Modal from "components/Modal";
import React from "react";
import { Link } from "react-router-dom";
import CartCategory from "../../../Shared/CartCategory";
import ModalCreate from "../ModalCreate";
import Create from "./Create";

function Category() {
  return (
    <>
      <Modal name="Category">
        <ModalCreate>
          <Create />
        </ModalCreate>
      </Modal>
      <Link to={"/post/s"}>
        <CartCategory img="6" text="hi" />
      </Link>
    </>
  );
}

export default Category;
