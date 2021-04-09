import React from 'react';
import { connect } from 'react-redux';
import { getUsersThunkCreator, unfollowSuccesThunkCreator, followSuccesThunkCreator } from '../../redux/users-reducer';
import Preloader from '../Preloader/Preloader';
import Users from './Users';


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }

    onPageChange = (pageNumber) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
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
                unfollow={this.props.unfollowSuccesThunkCreator}
                follow={this.props.followSuccesThunkCreator}
                isDisabled={this.props.isDisabled}
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
        isFetching: state.usersPage.isFetching,
        isDisabled: state.usersPage.isDisabled
    }
};

export default connect(mapStateToProps,
    {
        getUsersThunkCreator,
        unfollowSuccesThunkCreator,
        followSuccesThunkCreator
    })(UsersContainer);