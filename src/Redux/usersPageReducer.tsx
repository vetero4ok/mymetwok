let InitialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 20,
    currentPages: 1,

}
export type photosType = {
    small: string
    large: string
}
// export type locationType = {
//     city: string
//     country: string
// }
export type userType = {
    id: number
    photos: photosType
    followed: boolean
    name: string
    status: string
    // location: locationType
}
export type UsersStateType = {
    users: Array<userType>
    pageSize: number
    totalUsersCount: number
    currentPages: number

}

const FOLLOW = 'FOLLOW' as const
const UNFOLLOW = 'UNFOLLOW' as const
const SET_USERS = 'SET-USERS' as const
const SET_CURRENT_PAGE = 'SET-CURRENT_PAGE' as const
const TOTAL_USER_COUNT = 'TOTAL-USER-COUNT' as const

export type ActionTypeUserReducer = FollowACType
    | UnfollowACType
    | setUsersACType
    | setCurrantPageACType
    | setTotalUsersCountACType
export const usersPageReducer = (state: UsersStateType = InitialState, action: ActionTypeUserReducer): UsersStateType => {
  // debugger
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
           // return {...state, users: [...state.users, ...action.users]}
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPages: action.currentPages}
        case TOTAL_USER_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        default:
            return state
    }
}

export const followAC = (userID: number) => {
    return {
        type: FOLLOW,
        userID
    } as const
}
export const unfollowAC = (userID: number) => {
    return {
        type: UNFOLLOW,
        userID
    } as const

}
export const setUsersAC = (users: Array<userType>) => {
    return {
        type: SET_USERS,
        users
    } as const
}
export const setCurrantPageAC = (currentPages: number) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPages
    } as const
}
export const setTotalUserCountAC = (totalUsersCount: number) => {
    return {
        type: TOTAL_USER_COUNT,
        totalUsersCount
    } as const
}
export type FollowACType = ReturnType<typeof followAC>
export type UnfollowACType = ReturnType<typeof unfollowAC>
export type setUsersACType = ReturnType<typeof setUsersAC>
export type setCurrantPageACType = ReturnType<typeof setCurrantPageAC>
export type setTotalUsersCountACType = ReturnType<typeof setTotalUserCountAC>
