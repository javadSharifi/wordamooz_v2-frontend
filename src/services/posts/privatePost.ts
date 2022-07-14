import { IData, IPosts } from 'interfaces';
import axios from 'libs/axios';
import { useInfiniteQuery } from 'react-query';
import { useParams } from 'react-router-dom';

async function privatePots(id: string ,params? : object) {
  const resp = await axios.get<IData<IPosts[]>>(`api/categories/${id}/posts`, {
    params
  });
  return resp.data;
}

function usePrivatePots() {
  const { idCategories: id } = useParams();
  return useInfiniteQuery(`posts_${id}`, (query) => privatePots(id!, {
    cursor : query.pageParam
  }), {
    getNextPageParam : (lastPage) => lastPage.meta.next_cursor
  });
}

export default usePrivatePots;
