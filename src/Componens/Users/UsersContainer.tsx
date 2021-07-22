import {connect} from 'react-redux';
import {AppStateType} from '../../Redux/Redux-Store';
import {
    follow,
    getUsers,
    unfollow,
    UserType
} from '../../Redux/usersPageReducer';
import React from 'react';
import {Users} from './Users';
import {Preloader} from '../Common/Preloader/Preloader';


type PropsUsersType = {
    users: Array<UserType>
    pageSize: number
    totalUserCount: number
    currentPages: number
    isFetching: boolean
    followingInProcess: Array<number>
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    getUsers: (currentPages: number, pageSize: number) => void

}

class UsersApiComponents extends React.Component<PropsUsersType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPages, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
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
                    currentPages={this.props.currentPages}
                    followingInProcess={this.props.followingInProcess}

                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    onPageChanged={this.onPageChanged}

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
    getUsers,
})(UsersApiComponents)


