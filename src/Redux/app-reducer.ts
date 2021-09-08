import {AppThunk} from './Redux-Store';
import {setUserAuthData} from './authReducer';

let InitialState = {
    initializedApp: false
}
type InitialStateType = typeof InitialState

export const appReducer = (state = InitialState, action: ActionTypeApp): InitialStateType => {
    switch (action.type) {
        case 'APP/INITIALIZED-APP':
            return {...state, initializedApp: action.initializedApp}
        default:
            return state
    }
}
// AC
export const initializedAppAC = (initializedApp: boolean) => ({type: 'APP/INITIALIZED-APP', initializedApp} as const)

//TC
export const initializedAppTC = (): AppThunk => (dispatch) => {
    let promise = dispatch(setUserAuthData())
    /**В проміс all можемо вносити проміси і він зарезолвиться тільки тоді кали всі з
     *  масива вернуться в стані резолв  */
    Promise.all([promise])
        .then(() => {
            dispatch(initializedAppAC(true))
        })

}
type InitializedAppAT = ReturnType<typeof initializedAppAC>
export type ActionTypeApp = InitializedAppAT