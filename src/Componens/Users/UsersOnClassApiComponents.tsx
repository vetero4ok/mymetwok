import axios from 'axios';
import React from 'react'
import {userType} from '../../Redux/usersPageReducer';
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

class UsersOnClassApiComponents extends React.Component<PropsUsersType> {

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

export default UsersOnClassApiComponents