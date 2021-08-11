import {
    followSuccess,
    setCurrantPage, setTotalUserCount,
    setUsers, toggleInProcess, toggleIsFetching,
    unfollowSuccess,
    usersPageReducer,
    UsersStateType,
    UserType
} from './usersPageReducer';

let startState: UsersStateType
let user: UserType
let user1: UserType


beforeEach(() => {
    startState = {
        users: [user, user1],
        pageSize: 5,
        totalUsersCount: 0,
        currentPages: 1,
        isFetching: false,
        followingInProcess: []
    }
    user = {
        id: 1,
        photos: {
            small: 'string',
            large: 'string',
        },
        followed: false,
        name: 'Ivan',
        status: 'string',
    }
    user1 = {
        id: 2,
        photos: {
            small: 'string',
            large: 'string',
        },
        followed: true,
        name: 'Igor',
        status: 'string',
    }
})
test('user should be set', () => {

    const users: Array<UserType> = [user, user]
    const state = usersPageReducer(startState, setUsers(users))
    expect(state.users).toEqual([user, user])
    expect(state.users.length).toBe(2)
    expect(state.users[0]).toBe(user)
})

test('correct follow to user', () => {

    const state = usersPageReducer(startState, followSuccess(1))
    expect(state.users[0].followed).toBeTruthy()
})
test('correct unfollow to user', () => {

    const state = usersPageReducer(startState, unfollowSuccess(2))
    expect(state.users[1].followed).toBeFalsy()
})
test('correct set currentPages', () => {

    const state = usersPageReducer(startState, setCurrantPage(5))
    expect(state.currentPages).toBe(5)
})

test('correct set total user count', () => {

    const state = usersPageReducer(startState, setTotalUserCount(12))
    expect(state.totalUsersCount).toBe(12)
})

test('correct changes toggle is fetching', () => {

    const state = usersPageReducer(startState, toggleIsFetching(true))
    expect(state.isFetching).toBeTruthy()
})
test('correct switch follow/unfollow to current user', () => {

    const state = usersPageReducer(startState,toggleInProcess(true,1))
    expect(state.followingInProcess).toEqual([1])
    expect(state.followingInProcess.length).toBe(1)

})