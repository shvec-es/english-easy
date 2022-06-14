import React from 'react';
import s from './Container.module.css';

type ContainerProps = {
    children: React.ReactNode;
}

const Container = ({children}: ContainerProps) => {
    return <div className={s.container}>{children}</div>
}

export default Container;