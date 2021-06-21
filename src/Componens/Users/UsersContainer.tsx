import React from 'react'
import {connect} from 'react-redux';
import {AppDispatch, AppStateType } from '../../Redux/Redux-Store';
import {Users} from './Users';
import {followAC, setUsersAC, userType} from '../../Redux/usersPageReducer';


let mapStateToProps = (state:AppStateType) => {
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch:AppDispatch) => {
    return {
        follow: (userID: string) => {
            dispatch(followAC(userID))
        },
        unfollow:(userID: string) => {
            dispatch(followAC(userID))
        },
        setUsers: (users: Array<userType>)=> {
            dispatch(setUsersAC(users))
        }
    }

}

export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)