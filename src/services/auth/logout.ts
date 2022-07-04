
import { authContext } from "context/authContext";
import axios from "libs/axios";
import { useContext } from "react";
import { useMutation } from "react-query";

const logout = async () => {
  const result = await axios.post("/auth/logout");
  return result;
};

const useLogout = () => {
    const [, setLoading] = useContext(authContext);

    return useMutation(logout, {
        onSuccess: () => {
            setLoading(false);
        }
    });
};
export default useLogout;
