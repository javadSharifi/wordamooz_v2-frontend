import { useMutation } from 'react-query';
import axios from 'libs/axios';

interface IPostRemove {
  category_id: string;
  postId: string;
}

async function removePost(data: IPostRemove) {
  const Result = await axios.delete(
    `api/categories/${data.category_id}/posts/${data.postId}`
  );
  return Result;
}

const useRemovePost = () => useMutation(removePost);

export default useRemovePost;
