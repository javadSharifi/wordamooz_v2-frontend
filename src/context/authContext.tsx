import { createContext, useState } from "react";

export const authContext = createContext<any>(null);

function AuthContext({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState<null|boolean>(null);

  return (
    <authContext.Provider value={[loading, setLoading]}>
      {children}
    </authContext.Provider>
  );
}

export default AuthContext;
