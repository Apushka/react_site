import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../assets/images/images.jpeg';
import { NavLink } from 'react-router-dom';

let Users = (props) => {

    return (
        <div>
            {/* <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p ? styles.selectedPage : ""}
                    onClick={(e) => { props.onPageChange(p)}}>{p}</span>
                })}
            </div>         */}
            <div>
                <span className={styles.pagination}>
                    <span onClick={() => { props.pageDecrease(props.currentPage) }} className={`${styles.button} ${styles.buttonLess}`}></span>
                    {props.pagination(props.currentPage).map(ch => {
                        return <span className={props.currentPage === ch ? styles.selectedPage : ""}
                            onClick={(e) => { props.onPageChange(ch) }}>{ch}</span>
                    })
                    }
                    <span onClick={() => { props.pageIncrease(props.currentPage) }} className={`${styles.button} ${styles.buttonMore}`}></span>
                </span>
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img className={styles.usersPhoto} src={u.photos.small != null ? u.photos.small : userPhoto} />
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.isDisabled.some(id => id === u.id)} onClick={() => {
                                    props.unfollow(u.id);
                                }}>Unfollow</button>
                                : <button disabled={props.isDisabled.some(id => id === u.id)} onClick={() => {
                                    props.follow(u.id);
                                }} >Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
                </div>)
            }

        </div>
    )
}

export default Users;