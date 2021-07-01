import {connect} from 'react-redux';
import {AppDispatch, AppStateType} from '../../Redux/Redux-Store';
import {
    followAC,
    setCurrantPageAC,
    setTotalUserCountAC,
    setUsersAC,
    unfollowAC,
    userType
} from '../../Redux/usersPageReducer';
import UsersOnClass from './UsersOnClass';


let mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUsersCount,
        currentPages: state.usersPage.currentPages,
    }
}
let mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: number) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users: Array<userType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrantPage: (currentPages: number) => {
            dispatch(setCurrantPageAC(currentPages))
        },
        setTotalUserCount: (totalUsersCount: number) => {
            dispatch(setTotalUserCountAC(totalUsersCount))
        }
    }

}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersOnClass)