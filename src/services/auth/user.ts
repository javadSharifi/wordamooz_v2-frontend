
import { authContext } from 'context/authContext';
import axios from 'libs/axios';
import { useContext } from 'react';
import { useQuery } from 'react-query';


const user = async () => {
  const result = await axios.get('auth/user');
  return result;
};

const useMe = () => {
     const [, setLoading] = useContext(authContext);

  return useQuery('user', user, {
    onSuccess: (res) => {
      setLoading(true);
    },
    onError: () => {
      setLoading(false);
    },
  });
};

export default useMe;
