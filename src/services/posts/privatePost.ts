import { IData, IPosts } from 'interfaces';
import axios from 'libs/axios';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

async function privatePots(id: string | undefined) {
  const data = await axios.get<IData<IPosts[]>>(`api/categories/${id}/posts`);
  return data;
}

function usePrivatePots() {
  const { idCategories: id } = useParams();
  return useQuery(`posts_${id}`, () => privatePots(id));
}

export default usePrivatePots;
