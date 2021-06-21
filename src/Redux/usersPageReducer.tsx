import {v1} from 'uuid';
import {ActionType} from './Store';

let InitialState = {
    users: [
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
            followed: true,
            fullName: 'Ivan',
            status: 'I am a very big boss',
            location: {city: 'Warsaw', country: 'Poland'}
        },

    ]
}
export type locationType = {
    city: string
    country: string
}
export type userType = {
    id: string
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: locationType
}
export type UsersStateType = {
    users: Array<userType>
}

const FOLLOW = 'FOLLOW' as const
const UNFOLLOW = 'UNFOLLOW' as const
const SET_USERS = 'SET-USERS' as const
export const usersPageReducer = (state: UsersStateType = InitialState, action: ActionType): UsersStateType => {
    console.log(action)
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        console.log(u)
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}

        default:
            return state
    }
}

export const followAC = (userID: string) => {
    return {
        type: 'FOLLOW',
        userID
    } as const
}
export const unfollowAC = (userID: string) => {
    return {
        type: 'UNFOLLOW',
        userID
    } as const

}
export const setUsersAC = (users: Array<userType>) => {
    return {
        type: 'SET-USERS',
        users
    } as const

}
export type FollowACType = ReturnType<typeof followAC>
export type UnfollowACType = ReturnType<typeof unfollowAC>
export type setUsersACType = ReturnType<typeof setUsersAC>