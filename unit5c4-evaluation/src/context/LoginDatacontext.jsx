import { createContext, useState } from "react";

export const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {
  const [islogin] = useState("");
  return (
    <LoginContext.Provider value={{ islogin}}>
      {children}
    </LoginContext.Provider>
  );
};
