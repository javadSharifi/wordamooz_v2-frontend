import { authContext } from 'context/AuthContext';
import { IData, ICategory } from 'interfaces';
import axios from 'libs/axios';
import { useContext } from 'react';
import { useQuery } from 'react-query';

async function PrivateCategory(id: any) {
  const result = await axios.get<IData<ICategory[]>>(
    `api/users/${id}/categories`
  );
  return result;
}

function usePrivateCategories() {
  const [auth] = useContext(authContext);

  return useQuery(`privateCategories_${auth.id}`, () =>
    PrivateCategory(auth.id)
  );
}

export default usePrivateCategories;
