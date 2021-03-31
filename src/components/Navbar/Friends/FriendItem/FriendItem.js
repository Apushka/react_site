import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './../Friends.module.css'

const FriendItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div>
            <NavLink to={path}><div className={styles.friend}><img src={props.link} alt="name1"></img>{props.name}</div></NavLink>
        </div>

    );
}

export default FriendItem;