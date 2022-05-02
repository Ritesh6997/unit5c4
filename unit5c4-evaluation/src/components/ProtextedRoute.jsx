import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import {Navigate}from "react-router-dom"
// /orders and /neworder are protected routes
export const ProtectedRoute = ({ children }) => {
    const { isAuth} = useContext(AuthContext);
    if (!isAuth)
    return (
        <Navigate to="/login" replace={true}/>
    )
    return children;
};
