import * as axios from 'axios';
import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../assets/images/images.jpeg';

class Users extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => { this.props.setUsers(response.data.items) });
    }

    pagination = (currentPage) => {
        let chosenPages = [];
        for (let i = currentPage - 1; i < currentPage + 2; i++) {
            if (i > 0) {
                chosenPages.push(i);
            }
        }
        return chosenPages;
    }

    pageDecrease = (decrease) => {
        if (decrease > 1) {
            let pageDecrease = --decrease;
            this.onPageChange(pageDecrease);
        }
    }
    pageIncrease = (increase) => {
        if (increase<this.props.totalUsersCount/this.props.pageSize) {
        let pageIncrease = ++increase;
        this.onPageChange(pageIncrease);
        }
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div>
                {/* <div>
                {pages.map(p => {
                    return <span className={this.props.currentPage === p ? styles.selectedPage : ""}
                    onClick={(e) => { this.onPageChange(p)}}>{p}</span>
                })}
            </div>         */}
                <div>
                    <span className={styles.pagination}>
                        <span onClick={() => { this.pageDecrease(this.props.currentPage) }} className={`${styles.button} ${styles.buttonLess}`}></span>
                        {this.pagination(this.props.currentPage).map(ch => {
                            return <span className={this.props.currentPage === ch ? styles.selectedPage : ""}
                                onClick={(e) => { this.onPageChange(ch) }}>{ch}</span>
                        })
                        }
                        <span onClick={() => { this.pageIncrease(this.props.currentPage) }} className={`${styles.button} ${styles.buttonMore}`}></span>
                    </span>
                </div>
                {
                    this.props.users.map(u => <div key={u.id}>
                        <span>
                            <div>
                                <img className={styles.usersPhoto} src={u.photos.small != null ? u.photos.small : userPhoto} />
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
                                    : <button onClick={() => { this.props.follow(u.id) }} >Follow</button>}
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
}

export default Users;