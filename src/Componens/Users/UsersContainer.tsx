import {connect, ConnectedProps} from 'react-redux';
import {AppStateType} from '../../Redux/Redux-Store';
import {
    follow,
    setCurrantPage,
    setTotalUserCount,
    setUsers,
    toggleIsFetching,
    unfollow,
} from '../../Redux/usersPageReducer';
import React from 'react';
import axios from 'axios';
import {Users} from './Users';
import {Preloader} from '../Common/Preloader/Preloader';


// type PropsUsersType = {
//     users: Array<userType>
//     pageSize: number
//     totalUserCount: number
//     currentPages: number
//     isFetching: boolean
//     follow: (userID: number) => void
//     unfollow: (userID: number) => void
//     setUsers: (users: Array<userType>) => void
//     setCurrantPage: (currentPages: number) => void
//     setTotalUserCount: (totalUsersCount: number) => void
//     toggleIsFetching: (isFetching: boolean) => void
// }

class UsersApiComponents extends React.Component<PropsFromRedux> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPages}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUserCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrantPage(pageNumber)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)

            })
    }

    render() {
        return (
            <>
                {this.props.isFetching
                    //   ? <img src={preloader} style={{width: '30px', height: '30px'}} alt={'loaders'}/>
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
        isFetching: state.usersPage.isFetching
    }
}
const connector = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrantPage,
    setTotalUserCount,
    toggleIsFetching
})
type PropsFromRedux = ConnectedProps<typeof connector>

export const UsersContainer = connector(UsersApiComponents)


