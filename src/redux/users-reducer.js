import { usersAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS = 'SET_TOTAL_USERS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const BUTTON_DISABLED = 'BUTTON_DISABLED';

let initialState = {
    users: [
        // { id: 1, photoUrl: 'https://lh3.googleusercontent.com/proxy/Mj9ap8CcsfBR6V3h6tgw_7G_tvM_zsIrrPc0XzqnP0Ov1sxAWWUoFr9cI6ioKx4VUWhClXgd54x-b_E_5mcXHOqiZwysRELtV2qwf8G9RkiCuwjfqBgN3wG7kTPyxa9HmPEUEIHLIq-fKuTG', 
        //     followed: false, fullname: 'Dmitry', status: 'I am boss', location: { city: 'Minsk', country: 'Belarus' } },
        // { id: 2, photoUrl: 'https://static8.depositphotos.com/1207999/1027/i/950/depositphotos_10275222-stock-photo-office-avatar-man.jpg', 
        //     followed: true, fullname: 'Sasha', status: 'I am boss too', location: { city: 'Moscow', country: 'Russia' } },
        // { id: 3, photoUrl: 'https://likevideogid.ru/wp-content/uploads/2019/11/likee_avatarka13-2.jpg', 
        //     followed: false, fullname: 'Andrew', status: 'I am boss too', location: { city: 'Kiev', country: 'Ukraine' } }
    ],
    pageSize: 5,
    totalUsersCount: 19,
    currentPage: 1,
    isFetching: false,
    isDisabled: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case SET_USERS:
            return { ...state, users: action.users }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS:
            return {
                ...state,
                totalUsersCount: action.totalUsers
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case BUTTON_DISABLED:
            return {
                ...state,
                isDisabled: action.isDisabled
                    ? [...state.isDisabled, action.userId]
                    : state.isDisabled.filter(id => id != action.userId)
            }
        default:
            return state;
    }
}

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsers = (totalUsers) => ({ type: SET_TOTAL_USERS, totalUsers });
export const setIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const setButtonDisabled = (isDisabled, userId) => ({ type: BUTTON_DISABLED, isDisabled, userId });

export const getUsersThunkCreator = (currentPage = 2, pageSize) => {
    return (dispatch) => {
        dispatch(setIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setIsFetching(false));
            dispatch(setCurrentPage(currentPage));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsers(data.totalCount));
        });
    }
}

export const unfollowSuccesThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(setButtonDisabled(true, userId));
        usersAPI.unfollowUser(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollow(userId));
            }
            dispatch(setButtonDisabled(false, userId));
        });
    }
}

export const followSuccesThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(setButtonDisabled(true, userId));
        usersAPI.followUser(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(follow(userId));
            }
            dispatch(setButtonDisabled(false, userId));
        });
    }
}


export default usersReducer;