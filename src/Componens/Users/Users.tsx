import axios from 'axios';
import React from 'react'
import {userType} from '../../Redux/usersPageReducer';
import s from './Users.module.css'
import userPhoto from '../../assets/images/user.png'


type PropsUsersType = {
    users: Array<userType>
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<userType>) => void
}

export const Users = (props: PropsUsersType) => {

    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                props.setUsers(response.data.items)
            })
    }
    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img alt = '' src={u.photos.small !== null ? u.photos.small : userPhoto } className={s.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                                : <button onClick={() => props.follow(u.id)}>Follow</button>}

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