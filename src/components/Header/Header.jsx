import React from 'react';
import classes from "./Header.module.css";

// let test = `${classes}`;

const Header = () => {
    return (
        <header className={classes.header}>
            <img src="logo512.png" />
        </header>
    );
}

export default Header;