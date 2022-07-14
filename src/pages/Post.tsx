import Modal from 'components/Modal';
import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import usePrivatePots from 'services/posts/privatePost';

import ModalCreate from 'components/ModalCreate';
import CreatePost from 'components/post/Create';
import CardPost from 'components/post/card';
import UseInfiniteScroll from 'hooks/UseInfiniteScroll';

function Post() {
  const { data, isLoading, hasNextPage, fetchNextPage } = usePrivatePots();
  UseInfiniteScroll(hasNextPage, fetchNextPage);
  const { idCategories: id } = useParams();


  const result = isLoading ? (
    <div>Loading...</div>
  ) : (
    data?.pages.map((page, i) => (
      <Fragment key={i}>
        {page.data.map(({ id, body, category_id, meaning, word }) => (
          <CardPost
            key={id}
            body={body}
            categoryId={category_id}
            id={id}
            meaning={meaning}
            word={word}
          />
        ))}
      </Fragment>
    ))
  );

  return (
    <>
      <Modal name="Post">
        <ModalCreate>
          <CreatePost id={id} />
        </ModalCreate>
      </Modal>
      {result}
    </>
  );
}

export default Post;
