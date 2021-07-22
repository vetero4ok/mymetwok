let InitialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPages: 1,
    isFetching: false,
    inProcess: false


}

export type PhotosType = {
    small: string
    large: string
}
// export type locationType = {
//     city: string
//     country: string
// }
export type UserType = {
    id: number
    photos: PhotosType
    followed: boolean
    name: string
    status: string
    // location: locationType
}
export type UsersStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPages: number
    isFetching: boolean
    inProcess: boolean

}

const FOLLOW = 'FOLLOW' as const
const UNFOLLOW = 'UNFOLLOW' as const
const SET_USERS = 'SET-USERS' as const
const SET_CURRENT_PAGE = 'SET-CURRENT_PAGE' as const
const TOTAL_USER_COUNT = 'TOTAL-USER-COUNT' as const
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING' as const
const TOGGLE_IN_PROCESS = 'TOGGLE-IN-PROCESS' as const

export type ActionTypeUserReducer = FollowACType
    | UnfollowACType
    | setUsersACType
    | setCurrantPageACType
    | setTotalUsersCountACType
    | ToggleIsFetchingACType
    | ToggleInProcessACType
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
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IN_PROCESS:
            return {
                ...state,
                inProcess: action.toggleInProcess
            }
        default:
            return state
    }
}

export const follow = (userID: number) => {
    return {
        type: FOLLOW,
        userID
    } as const
}
export const unfollow = (userID: number) => {
    return {
        type: UNFOLLOW,
        userID
    } as const

}
export const setUsers = (users: Array<UserType>) => {
    return {
        type: SET_USERS,
        users
    } as const
}
export const setCurrantPage = (currentPages: number) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPages
    } as const
}
export const setTotalUserCount = (totalUsersCount: number) => {
    return {
        type: TOTAL_USER_COUNT,
        totalUsersCount
    } as const
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    } as const
}
export const toggleInProcess = (toggleInProcess: boolean) => {
    return {
        type: TOGGLE_IN_PROCESS,
        toggleInProcess,
    } as const
}
export type FollowACType = ReturnType<typeof follow>
export type UnfollowACType = ReturnType<typeof unfollow>
export type setUsersACType = ReturnType<typeof setUsers>
export type setCurrantPageACType = ReturnType<typeof setCurrantPage>
export type setTotalUsersCountACType = ReturnType<typeof setTotalUserCount>
export type ToggleIsFetchingACType = ReturnType<typeof toggleIsFetching>
export type ToggleInProcessACType = ReturnType<typeof toggleInProcess>
