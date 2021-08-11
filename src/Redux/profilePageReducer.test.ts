import {v1} from 'uuid';
import {
    addPostCallbackAC,
    profilePageReducer,
    ProfileStateType,
    setUserProfile,
    updateNewPostTextAC,
    UserProfileType
} from './profilePageReducer';

let startState: ProfileStateType
//type StartStateType = typeof startState
beforeEach(() => {

    startState = {
        newTextPost: '',
        myPostsData: [
            {id: v1(), massage: 'Hi, how are you?', likesCounts: 12},
            {id: v1(), massage: 'It is my first post!', likesCounts: 15},
            {id: v1(), massage: 'hey!', likesCounts: 1},
        ],
        profile: null
    }
})

test('correct post should be added to up wall', () => {

    const state = profilePageReducer(startState, addPostCallbackAC('new post'))

    expect(state.myPostsData[0].massage).toBe('new post')
    expect(state.myPostsData[0].id).toBeDefined()
    expect(state.myPostsData.length).toBe(4)

})
test('input text to be update without local state (FLUX architecture)', () => {

    const state = profilePageReducer(startState, updateNewPostTextAC('new symbol'))

    expect(state.newTextPost).toBe('new symbol')
})

test('profile should be installed', () => {
    const user: UserProfileType = {
        userId: 1,
        lookingForAJob: true,
        lookingForAJobDescription: 'FrontEnd',
        fullName: 'Bob',
        contacts: {
            github: 'string',
            vk: 'string',
            facebook: 'string',
            instagram: 'string',
            twitter: 'string',
            website: 'string',
            youtube: 'string',
            mainLink: 'string',
        },
        photos: {
            small: 'string',
            large: 'string',
        }
    }
    const state = profilePageReducer(startState, setUserProfile(user))

    expect(state.profile).toEqual({
        userId: 1,
        lookingForAJob: true,
        lookingForAJobDescription: 'FrontEnd',
        fullName: 'Bob',
        contacts: {
            github: 'string',
            vk: 'string',
            facebook: 'string',
            instagram: 'string',
            twitter: 'string',
            website: 'string',
            youtube: 'string',
            mainLink: 'string',
        },
        photos: {
            small: 'string',
            large: 'string',
        }
    })
})