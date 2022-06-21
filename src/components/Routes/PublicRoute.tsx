import React from "react";
import {  Navigate, Outlet } from "react-router"
import { useAppSelector } from "../../store/hooks/redux";

interface PublicRouteProps {
    children: JSX.Element;
    restricted: boolean;

}
const PublicRoute = ({ children, restricted = false }: PublicRouteProps) => {
    const { token } = useAppSelector(state => state.AuthSlice);

    const shouldRedirect = token && restricted
   
    return (
        <>
            {shouldRedirect ? 
                <Navigate to='/' />
            :
                <>
                    {children}
                    <Outlet/>
                </>
            }
        </>
    )
}
export default PublicRoute