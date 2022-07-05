
import { IData, ICategory } from "interfaces";
import axios from "libs/axios";
import { useQuery } from "react-query";

type TPrivateCategories = {
  id: number;
};


async function PrivateCategory() {
  const result = await axios.get<IData<ICategory[]>>(
    `api/users/20/categories`
  );
  return result;
}

function usePrivateCategories() {
  return useQuery("privateCategories", PrivateCategory);
}

export default usePrivateCategories;
