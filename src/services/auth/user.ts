
import { authContext } from 'context/authContext';
import { IAuthUser, IResource, IUser } from 'interfaces';
import axios from 'libs/axios';
import { useContext } from 'react';
import { useQuery } from 'react-query';


const user = async () => {
  const result = (await axios.get)<IResource<IAuthUser>>("auth/user");
  return result;
};

const useMe = () => {
     const [auth, setAuth] = useContext(authContext);

  return useQuery('user', user, {
    onSuccess: ({data}) => {
      setAuth({ loading:true, id:data.data.id, email:data.data.email, name:data.data.name, image:data.data.image });
    },
    onError: (res:any) => {
      setAuth({ ...auth, loading: false });
      console.log(res.code);
    },
  });
};

export default useMe;
