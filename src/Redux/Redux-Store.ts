import { combineReducers, createStore} from 'redux';
import {profilePageReducer} from './profilePageReducer';
import {dialogPageReducer} from './dialogPageReducer';
import {sidebarReducer} from './sidebarReducer';
import { usersPageReducer } from './usersPageReducer';
import {authUserReducer} from './authReducer';


let rootReducer =  combineReducers({
    profilePage:profilePageReducer,
    dialogPage:dialogPageReducer,
    sidebar:sidebarReducer,
    usersPage:usersPageReducer,
    auth:authUserReducer,
})

export let store =  createStore(rootReducer);

export type AppStateType = ReturnType<typeof rootReducer>
export type StoreType = typeof store
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>