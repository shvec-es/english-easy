import React from 'react';
import { useGetCurrentUserQuery } from "../../../services/ReduxService";


const CurrentUser = () => {
    const {data, isLoading, error} = useGetCurrentUserQuery('')
    return data ? <span>{data.name}</span> : <span> </span>
};

export default CurrentUser;
