import React from 'react'
import {userType} from '../../Redux/usersPageReducer';
import s from './Users.module.css'
import {v1} from 'uuid';


type PropsUsersType = {
    users: Array<userType>
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: Array<userType>) => void
}

export const Users = (props: PropsUsersType) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: v1(),
                photoUrl: 'https://buddy.ghostpool.com/wp-content/uploads/group-avatars/34/1c7da6471476e42b543812f35ef23d2f-bpthumb.jpg',
                followed: false,
                fullName: 'Igor',
                status: 'I am a boss',
                location: {city: 'Vinnytsia', country: 'Ukraine'}
            },
            {
                id: v1(),
                photoUrl: 'https://buddy.ghostpool.com/wp-content/uploads/group-avatars/34/1c7da6471476e42b543812f35ef23d2f-bpthumb.jpg',
                followed: true,
                fullName: 'Dmitry',
                status: 'I am a big boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: v1(),
                photoUrl: 'https://buddy.ghostpool.com/wp-content/uploads/group-avatars/34/1c7da6471476e42b543812f35ef23d2f-bpthumb.jpg',
                followed: false,
                fullName: 'Ivan',
                status: 'I am a very big boss',
                location: {city: 'Warsaw', country: 'Poland'}
            },

        ])
    }
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
                                ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                                : <button onClick={() => props.follow(u.id)}>Follow</button>}

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