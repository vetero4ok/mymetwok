import {AppDispatch, AppThunk} from './Redux-Store';
import {authMeAPI} from '../Api/Api';
import {toggleIsFetching} from './usersPageReducer';
import {stopSubmit} from 'redux-form';

let InitialState: InitAuthStateType = {
    /** заглушка надо придумать как загружать данные
     * userId: 17817, login: '',  email: '',*/
    userId: null,
    login: '',
    email: '',
    isAuth: false,

}
export type InitAuthStateType = {
    userId: number | null
    login: string
    email: string
    isAuth: boolean
}

const SET_USER_DATA = 'SET_USER_DATA' as const


export type ActionTypeAuthReducer = SetUserAuthDataActionType

export const authUserReducer =
    (state = InitialState, action: ActionTypeAuthReducer): InitAuthStateType => {
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


export const setUserAuthDataSuccess = (userId: number | null, email: string, login: string, isAuth: boolean) => {
    return {
        type: SET_USER_DATA,
        userId,
        email,
        login,
        isAuth
    } as const
}

export type SetUserAuthDataActionType = ReturnType<typeof setUserAuthDataSuccess>

export const setUserAuthData = (): AppThunk => (dispatch) => {
    dispatch(toggleIsFetching(true));
    return authMeAPI.authMe().then(response => {
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data
            dispatch(setUserAuthDataSuccess(id, email, login, true));
            dispatch(toggleIsFetching(false));
        }
    })

}

export const loginTC = (email: string, password: string, rememberMe: boolean, captcha: boolean): AppThunk =>
    (dispatch: AppDispatch) => {
        authMeAPI.login(email, password, rememberMe, captcha)
            .then(res => {
                if (res.data.resultCode === 0) {
                    authMeAPI.authMe().then(res => {
                        if (res.data.resultCode === 0) {
                            let {id, email, login} = res.data.data
                            dispatch(setUserAuthDataSuccess(id, email, login, true));
                            dispatch(toggleIsFetching(false));
                        }
                    })
                    // dispatch(setUserAuthData())
                    /** немогу задиспатчить санку, странная ошибка*/
                } else {
                    let message = res.data.messages.length > 0 ? res.data.messages[0] : 'Some Error'
                    console.log(message)
                    dispatch(stopSubmit('login', {_error: message}))
                }
            })
    }
export const logoutTC = (): AppThunk =>
    (dispatch: AppDispatch) => {
        authMeAPI.logout()
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(setUserAuthDataSuccess(null, '', '', false));
                }
            })

    }