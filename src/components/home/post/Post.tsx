import Modal from 'components/Modal';
import React from 'react'
import { useParams } from 'react-router-dom';
import CartPost from 'Shared/post/Cart';
import ModalCreate from '../ModalCreate';
import Create from './Create';

function Post() {
  let params = useParams();   
  
  return (
    <div>
      <Modal name="Post">
        <ModalCreate>
          <Create />
        </ModalCreate>
      </Modal>
      <CartPost
        body="hi i am mohamamd"
        categoryId="1"
        id={1}
        meaning="سلام"
        word="hi"
      />
    </div>
  );
}

export default Post