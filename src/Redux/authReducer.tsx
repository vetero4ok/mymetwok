let InitialState: InitAuthStateType = {
    /** заглушка надо придумать как загружать данные
     * userId: 17817, login: '',  email: '',*/
    userId: 2,
    login: '',
    email: '',
    isAuth: false,

}
export type InitAuthStateType = {
    userId: number
    login: string
    email: string
    isAuth: boolean
}

const SET_USER_DATA = 'SET_USER_DATA' as const


export type ActionTypeAuthReducer = SetUserAuthDataActionType

export const authUserReducer = (
    state = InitialState,
    action: ActionTypeAuthReducer
): InitAuthStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                userId: action.userId,
                email: action.email,
                login: action.login,
                isAuth: action.isAuth
            }
        default:
            return state
    }
}


export const setUserAuthData = (userId: number, email: string, login: string, isAuth: boolean ) => {
    return {
        type: SET_USER_DATA,
        userId,
        email,
        login,
        isAuth
    } as const
}

export type SetUserAuthDataActionType = ReturnType<typeof setUserAuthData>
