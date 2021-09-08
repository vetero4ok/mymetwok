import {applyMiddleware, combineReducers, createStore} from 'redux';
import {ActionTypeProfileReducer, profilePageReducer} from './profilePageReducer';
import {dialogPageReducer, DialogPageReducerActionType} from './dialogPageReducer';
import {sidebarReducer} from './sidebarReducer';
import {ActionTypeUserReducer, usersPageReducer} from './usersPageReducer';
import {ActionTypeAuthReducer, authUserReducer} from './authReducer';
import thunk, {ThunkAction} from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'
import {ActionTypeApp, appReducer} from './app-reducer';


let rootReducer = combineReducers({
    profilePage: profilePageReducer,
    dialogPage: dialogPageReducer,
    sidebar: sidebarReducer,
    usersPage: usersPageReducer,
    auth: authUserReducer,
    app: appReducer,
    form: formReducer,
})

export let store = createStore(rootReducer, applyMiddleware(thunk));

export type AppStateType = ReturnType<typeof rootReducer>
export type StoreType = typeof store
export type AppDispatch = typeof store.dispatch
export type AppThunkRootActionType = ActionTypeAuthReducer
    | DialogPageReducerActionType
    | ActionTypeProfileReducer
    | ActionTypeApp
    | ActionTypeUserReducer
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppThunkRootActionType>

//@ts-ignore
window.store = store;