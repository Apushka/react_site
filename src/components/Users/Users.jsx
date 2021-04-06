import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../assets/images/images.jpeg';

let Users = (props) => {
    // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    // let pages = [];
    // for (let i = 1; i <= pagesCount; i++) {
    //     pages.push(i);
    // };

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
                            <img className={styles.usersPhoto} src={u.photos.small != null ? u.photos.small : userPhoto} />
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                                : <button onClick={() => { props.follow(u.id) }} >Follow</button>}
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