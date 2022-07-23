import * as React from 'react';
import {useAppDispatch, useAppSelector} from "../../store/hooks/redux";
import { useLogoutMutation } from "../../services/ReduxService";
import {changeStateCurrentUser} from "../../store/reducers/ActionCreators";
import CurrentUser from './CurrentUser/CurrentUser'
import style from './AppBar.module.scss'
import {NavLink} from "react-router-dom";

export default function MenuAppBar() {
    const dispatch = useAppDispatch();
    const [logout] = useLogoutMutation()

    const handleClick = async () => {
        dispatch(changeStateCurrentUser(false))
        await logout('')
    }

    return (
      <header className={style.header}>
          <nav className={style.nav}>
              <ul className={style['nav-list']}>
                  <li className={style['nav-item']}><NavLink className={style.link} to='/'>English Easy</NavLink></li>
                  <li className={style['nav-item']}><NavLink className={style.link} to='/'>Menu</NavLink></li>
                  <li className={style['nav-item']}><CurrentUser/></li>
              </ul>
          </nav>
          <button className={style['logout-btn']} type='button' onClick={handleClick}>Logout</button>
      </header>
    )
}
