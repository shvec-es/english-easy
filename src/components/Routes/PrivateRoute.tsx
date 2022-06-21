import React from "react";
import { Navigate, Outlet } from "react-router"
import { useAppSelector } from "../../store/hooks/redux";

const PrivateRoute = () => {
    const { token } = useAppSelector(state => state.AuthSlice);

    return token ? <Outlet />: <Navigate to='/login' />
}

export default PrivateRoute