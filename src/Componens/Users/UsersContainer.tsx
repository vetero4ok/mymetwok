import {connect} from 'react-redux';
import {AppStateType} from '../../Redux/Redux-Store';
import {
    follow,
    setCurrantPage,
    setTotalUserCount,
    setUsers, toggleInProcess,
    toggleIsFetching,
    unfollow, UserType
} from '../../Redux/usersPageReducer';
import React from 'react';
import {Users} from './Users';
import {Preloader} from '../Common/Preloader/Preloader';
import {userAPI} from '../../Api/Api';


type PropsUsersType = {
    users: Array<UserType>
    pageSize: number
    totalUserCount: number
    currentPages: number
    isFetching: boolean
    followingInProcess:Array<number>
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrantPage: (currentPages: number) => void
    setTotalUserCount: (totalUsersCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleInProcess :(toggleInProcess: boolean,userID:number) => void
}

class UsersApiComponents extends React.Component<PropsUsersType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        userAPI.getUsers(this.props.currentPages, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUserCount(data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrantPage(pageNumber)
        this.props.toggleIsFetching(true)
        userAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)

            })
    }

    render() {
        return (
            <>
                {this.props.isFetching
                    ? <Preloader/>
                    : null}
                <Users
                    users={this.props.users}
                    pageSize={this.props.pageSize}
                    totalUserCount={this.props.totalUserCount}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    currentPages={this.props.currentPages}
                    onPageChanged={this.onPageChanged}
                    followingInProcess={this.props.followingInProcess}
                    toggleInProcess={this.props.toggleInProcess}



                />
            </>

        );
    }
}

let mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUsersCount,
        currentPages: state.usersPage.currentPages,
        isFetching: state.usersPage.isFetching,
        followingInProcess: state.usersPage.followingInProcess
    }
}


export const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrantPage,
    setTotalUserCount,
    toggleIsFetching,
    toggleInProcess,
})(UsersApiComponents)


