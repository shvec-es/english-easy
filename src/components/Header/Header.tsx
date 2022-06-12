import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import s from './Header.module.css';
import {useAppDispatch, useAppSelector} from "../../store/hooks/redux";
import { useLogoutMutation } from '../../services/ReduxService'
import CurrentUser from "./CurrentUser/CurrentUser";
import {changeStateCurrentUser} from "../../store/reducers/ActionCreators";


const Header = () => {
    const dispatch = useAppDispatch();
    const { isCurrentUser } = useAppSelector(state => state.AuthSlice);
    const { token } = useAppSelector(state => state.AuthSlice);
    const [logout] = useLogoutMutation()

    const handleClick = async () => {
        dispatch(changeStateCurrentUser(false))
        await logout('')
    }

    return (
      <section className={s.header}>
        <a className={s.logo} href="/">Learn English easy</a>
        <div className={s.user}>
            {token ?
              <>
                  {isCurrentUser && <CurrentUser />}
                  <button onClick={handleClick} type='button'>Logout</button>
              </>
              :
              <>
                  <NavLink to='login'>Login</NavLink>
                  <NavLink to='register'>Register</NavLink>
              </>
            }
        </div>
    </section>)
}

export default Header;