import axios from 'axios';
import React, {MouseEvent} from 'react'
import {userType} from '../../Redux/usersPageReducer';
import s from './Users.module.css'
import userPhoto from '../../assets/images/user.png'


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

class UsersOnClass extends React.Component<PropsUsersType> {

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
        let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize)
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return (
            <div>
                <div>
                    {
                        pages.map((p, index) => {
                            return <span
                                key = {index}
                                className={this.props.currentPages === p ? s.selectedPages : ''}
                                onClick={(e: MouseEvent<HTMLInputElement>) => {
                                    this.onPageChanged(p)
                                }}
                            >{p}</span>

                        })}

                </div>

                {
                    this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img alt="" src={u.photos.small !== null ? u.photos.small : userPhoto}
                                 className={s.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                                : <button onClick={() => this.props.follow(u.id)}>Follow</button>}

                        </div>
                    </span>
                        <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            {/*<div>{'u.location.country'}</div>*/}
                            {/*<div>{'u.location.city'}</div>*/}

                        </span>
                    </span>
                    </div>)
                }

            </div>

        );
    }
}

export default UsersOnClass