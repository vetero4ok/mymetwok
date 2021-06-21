import {ActionType} from './Store';
import {v1} from 'uuid';

let InitialState = {
    users: []
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
        switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
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