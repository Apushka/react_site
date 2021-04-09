import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from "./Header.module.css";
import userPhoto from '../../assets/images/nophoto.jpg';

const Header = (props) => {
    return (
        <header className={styles.header}>
            <img src="logo512.png" />

            <div className={styles.loginBlock} >
                {props.isAuth ? <span><img src={props.avatar ? props.avatar : userPhoto } />{props.login}</span> : <NavLink to={'/login'} >Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;