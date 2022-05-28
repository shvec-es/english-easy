import React from "react";
import s from './Header.module.css';

const Header = () => {
    return (<section className={s.header}>
        <a className={s.logo} href="/">Learn English easy</a>
        <p className={s.user}>currentUser</p>
    </section>)
}

export default Header;