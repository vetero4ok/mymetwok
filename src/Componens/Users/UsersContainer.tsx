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

import React from 'react';
import axios from 'axios';
import {Users} from './Users';

type PropsUsersType = {
    users: Array<userType>
    pageSize: number
    totalUserCount: number
    currentPages: number
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<userType>) => void
    setCurrantPage: (currentPages: number) => void
    setTotalUserCount: (totalUsersCount: number) => void
}
class UsersApiComponents extends React.Component<PropsUsersType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPages}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUserCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrantPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <Users
                users={this.props.users}
                pageSize={this.props.pageSize}
                totalUserCount={this.props.totalUserCount}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                currentPages={this.props.currentPages}
                onPageChanged={this.onPageChanged}

            />
        );
    }
}

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

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersApiComponents)