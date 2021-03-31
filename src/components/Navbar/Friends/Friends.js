import React from 'react';
import styles from './../Friends/Friends.module.css'
import FriendItem from './FriendItem/FriendItem';

const Friends = (props) => {

    let friendsAll = props.friends.friends.map(f => <FriendItem name={f.name} link={f.link} id={f.id} />);

    return (
        <div className={styles.friends_container}>
            <h3 className={styles.friends_title}>Friends</h3>
            { friendsAll}
        </div>
    );
}

export default Friends;