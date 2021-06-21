import React from 'react'
import {userType} from '../../Redux/usersPageReducer';
import s from './Users.module.css'


type PropsUsersType = {
    users: Array<userType>
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: Array<userType>) => void
}

export const Users = (props: PropsUsersType) => {

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={s.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ?<button onClick={()=>props.follow(u.id)}>Unfollow</button>
                                :<button onClick={()=>props.unfollow(u.id)}>Follow</button>}

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>

                        </span>
                    </span>
                </div>)
            }

        </div>

    );
}