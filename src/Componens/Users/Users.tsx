import React, {MouseEvent} from 'react'
import s from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import {NavLink} from 'react-router-dom';
import {UserType} from '../../Redux/usersPageReducer';
import axios from 'axios';


type PropsUsersType = {
    users: Array<UserType>
    pageSize: number
    totalUserCount: number
    currentPages: number
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    onPageChanged: (pageNumber: number) => void


}
export const Users = (props: PropsUsersType) => {
    //let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
    /** Захардкоджено 20 сторінок попередньої загрузки з сервера */
    let pagesCount = 20;
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
                            key={index}
                            className={props.currentPages === p ? s.selectedPages : ''}
                            onClick={(e: MouseEvent<HTMLInputElement>) => {
                                props.onPageChanged(p)
                            }}
                        >{p}</span>

                    })}

            </div>

            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img alt="" src={u.photos.small !== null ? u.photos.small : userPhoto}
                                     className={s.userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                        {
                                            withCredentials: true,
                                            headers: {
                                                'API-KEY': 'd9412019-2aba-4ed8-8456-975719bde7ef'
                                            }
                                        })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unfollow(u.id)
                                            }
                                        })
                                }}>Unfollow</button>
                                    : <button onClick={() =>{
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                {}, {
                                        withCredentials: true,
                                            headers: {
                                                'API-KEY': 'd9412019-2aba-4ed8-8456-975719bde7ef'
                                            }
                                    })
                                    .then(response => {
                                    if (response.data.resultCode === 0) {
                                    props.follow(u.id)
                                }})
                                }}>Follow</button>}

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