import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export default function PrivateView() {
    const { isAuthenticated } = useContext(AuthContext);
    return (
        isAuthenticated?
         <Outlet/>:
         <Navigate to="/login"/>
    
    )
}