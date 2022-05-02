import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const Logout = () => {
  // Logout component, just log user out and take him to `/` homepage

  // suggestion: if you are storing anyting in redux it's a good idea to
  // empty it before loggin out. eg: order
  const { toggleAuth } = useContext(AuthContext);
  return <>
    <button onClick={() => {
      toggleAuth();
    }}>Logout</button>
  </>;
};
