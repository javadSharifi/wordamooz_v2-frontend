import Modal from 'components/Modal';
import React from 'react'
import { useParams } from 'react-router-dom';
import usePrivatePots from 'services/posts/privatePost';
import CartPost from 'Shared/post/Cart';
import ModalCreate from '../ModalCreate';
import Create from './Create';

function Post() {
  const { data, isLoading } = usePrivatePots();
    const { idCategories: id } = useParams();

  const result = isLoading ? (<div>Loading...</div>) : (data?.data.data.map(({ id, body, meaning, word, category_id  }) => (
    <CartPost
          body={body}
          categoryId={category_id}
          id={id}
          meaning={meaning}
          word={word}
    />
  )));

  
  return (
    <>
      <Modal name="Post">
        <ModalCreate>
          <Create id={id} />
        </ModalCreate>
      </Modal>
      {result}
    </>
  );
}

export default Post