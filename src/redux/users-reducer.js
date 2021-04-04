const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'; 
const SET_TOTAL_USERS = 'SET_TOTAL_USERS';

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
    currentPage: 1
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
            return {...state, users: action.users }  
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
        default:
            return state;
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersAC = (totalUsers) => ({type: SET_TOTAL_USERS, totalUsers});


export default usersReducer;