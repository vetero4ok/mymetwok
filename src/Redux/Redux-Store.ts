import { combineReducers, createStore} from 'redux';
import {profilePageReducer} from './profilePageReducer';
import {dialogPageReducer} from './dialogPageReducer';
import {sidebarReducer} from './sidebarReducer';


let Reducers =  combineReducers({
    profilePage:profilePageReducer,
    dialogPage:dialogPageReducer,
    sidebar:sidebarReducer,
})

export let store =  createStore(Reducers);
type RootReducerType = typeof Reducers
export type AppStateType = ReturnType<RootReducerType>
export type StoreType = typeof store
export type AppDispatch = typeof store.dispatch
//export type RootState = ReturnType<typeof store.getState>