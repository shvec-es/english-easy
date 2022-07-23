import React, {useEffect} from 'react';
import {useGetCurrentUserQuery, useLogoutMutation} from "../../../services/ReduxService";
import Typography from "@mui/material/Typography";
import {changeStateCurrentUser} from "../../../store/reducers/ActionCreators";
import {useAppDispatch} from "../../../store/hooks/redux";

const CurrentUser = () => {
    const dispatch = useAppDispatch();
    const {data, isLoading, error} = useGetCurrentUserQuery('')
    const [logout] = useLogoutMutation()

    const handleLogout = async () => {
        dispatch(changeStateCurrentUser(false))
        await logout('')
    }

    useEffect(() => {
        if(error){
            handleLogout();
        }
    }, []);

    return data ? <Typography variant="h6" component="h4" sx={{ flexGrow: 0.1 }}>
        {data.name}
    </Typography>
     : <Typography variant="h6" component="h4" sx={{ flexGrow: 0.1 }}>
    </Typography>
};

export default CurrentUser;
