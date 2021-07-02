import { combineReducers, createStore} from 'redux';
import {profilePageReducer} from './profilePageReducer';
import {dialogPageReducer} from './dialogPageReducer';
import {sidebarReducer} from './sidebarReducer';
import { usersPageReducer } from './usersPageReducer';


let rootReducer =  combineReducers({
    profilePage:profilePageReducer,
    dialogPage:dialogPageReducer,
    sidebar:sidebarReducer,
    usersPage:usersPageReducer,
})

export let store =  createStore(rootReducer);

export type AppStateType = ReturnType<typeof rootReducer>
export type StoreType = typeof store
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>