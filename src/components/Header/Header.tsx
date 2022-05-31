import React from "react";
import { NavLink } from "react-router-dom";
import s from './Header.module.css';

const Header = () => {
    return (<section className={s.header}>
        <a className={s.logo} href="/">Learn English easy</a>
        <div className={s.user}>
            <NavLink to='login'>Login</NavLink>
            <NavLink to='register'>Register</NavLink>
        </div>
    </section>)
}

export default Header;