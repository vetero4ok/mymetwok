import {AppDispatch} from './Redux-Store';
import {authMeAPI, profileAPI} from '../Api/Api';
import {toggleIsFetching} from './usersPageReducer';
import {setUserProfile} from './profilePageReducer';

let InitialState: InitAuthStateType = {
    /** заглушка надо придумать как загружать данные
     * userId: 17817, login: '',  email: '',*/
    userId: 17817,
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

export const authUserReducer =
    (state = InitialState,action: ActionTypeAuthReducer): InitAuthStateType => {
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


export const setUserAuthDataSuccess = (userId: number, email: string, login: string, isAuth: boolean) => {
    return {
        type: SET_USER_DATA,
        userId,
        email,
        login,
        isAuth
    } as const
}

export type SetUserAuthDataActionType = ReturnType<typeof setUserAuthDataSuccess>

export const setUserAuthData = (userId:number) => {
    return (dispatch:AppDispatch)=>{
        dispatch(toggleIsFetching(true));
        authMeAPI.authMe().then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setUserAuthDataSuccess(id, email, login, true));
                profileAPI.getProfiles(userId)
                    .then(response => {
                        dispatch(setUserProfile(response.data));
                    })
               dispatch(toggleIsFetching(false));
            }
        })
    }
}