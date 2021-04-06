import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { follow, setCurrentPage, setIsFetching, setTotalUsers, setUsers, unfollow } from '../../redux/users-reducer';
import Preloader from '../Preloader/Preloader';
import Users from './Users';


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsers(response.data.totalCount);
            });
    }

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setIsFetching(true);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFetching(false);
                this.props.setUsers(response.data.items)
            });
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
        if (increase < this.props.totalUsersCount / this.props.pageSize) {
            let pageIncrease = ++increase;
            this.onPageChange(pageIncrease);
        }
    }

    render() {
        return <>
            { this.props.isFetching ? <Preloader /> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                onPageChange={this.onPageChange}
                currentPage={this.props.currentPage}
                pageDecrease={this.pageDecrease}
                pagination={this.pagination}
                pageIncrease={this.pageIncrease}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
};

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPageAC(currentPage));
//         },
//         setTotalUsersCount: (totalUsersCount) => {
//             dispatch(setTotalUsersAC(totalUsersCount));
//         },
//         setIsFetching: (isFetching) => {
//             dispatch(setIsFetchingAC(isFetching));
//         }
//     }
// };

export default connect(mapStateToProps,
    {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalUsers,
        setIsFetching
    })(UsersContainer);