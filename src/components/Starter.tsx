import { authContext } from "context/authContext";
import React, { useContext } from "react";
import useMe from "services/auth/user";
import Loading from "./Loading";

type StarterProps = {
  children: any;
};

function Starter({ children }: StarterProps) {
  useMe();
  const [loading] = useContext(authContext);

  return loading === null ? <Loading/> : children;
}

export default Starter;
