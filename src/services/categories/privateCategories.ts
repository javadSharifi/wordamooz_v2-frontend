import { authContext } from "context/AuthContext";
import { IData, ICategory, IUser } from "interfaces";
import axios from "libs/axios";
import { useContext } from "react";
import { useQuery } from "react-query";
import useMe from "services/auth/user";

async function PrivateCategory(id: any) {
  const result = await axios.get<IData<ICategory[]>>(
    `api/users/${id}/categories`
  );
  return result;
}

function usePrivateCategories() {
  const [auth] = useContext(authContext); 

  return useQuery(`privateCategories_${auth.id}`, () => PrivateCategory(auth.id));
}

export default usePrivateCategories;
