import React, {useEffect} from 'react';
import {useGetCurrentUserQuery, useLogoutMutation} from "../../../services/ReduxService";
import Typography from "@mui/material/Typography";
import {changeStateCurrentUser} from "../../../store/reducers/ActionCreators";
import {useAppDispatch} from "../../../store/hooks/redux";
import style from '../AppBar.module.scss'

const CurrentUser = () => {
    const dispatch = useAppDispatch();
    const {data, isLoading, error} = useGetCurrentUserQuery('')
    const [logout] = useLogoutMutation()

    const handleLogout = async () => {
        dispatch(changeStateCurrentUser(false))
        await logout('')
    }

    useEffect(() => {
            // console.log(error)
        if(error){
            handleLogout().then(r => r);
        }
    }, [error]);

    return data && <h3 className={style.user}>User: {data.name}</h3>
};

export default CurrentUser;
