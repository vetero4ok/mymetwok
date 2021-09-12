import {AppStateType} from './Redux-Store';

export const getUsersSelector = (state: AppStateType) => {
    return state.usersPage.users
}
export const getUsersPageSelector = (state: AppStateType) => {
    return state.usersPage.pageSize
}
export const getTotalUserCountSelector = (state: AppStateType) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPagesSelector = (state: AppStateType) => {
    return state.usersPage.currentPages
}
export const getIsFetchingSelector = (state: AppStateType) => {
    return state.usersPage.isFetching
}
export const getFollowingInProcessSelector = (state: AppStateType) => {
    return state.usersPage.followingInProcess
}