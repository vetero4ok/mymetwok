import {v1} from 'uuid';

let InitialState = {
    newTextPost: '',
    myPostsData: [
        {id: v1(), massage: 'Hi, how are you?', likesCounts: 12},
        {id: v1(), massage: 'It is my first post!', likesCounts: 15},
        {id: v1(), massage: 'hey!', likesCounts: 1},
    ],
    profile: null

}
export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type PhotosType = {
    small: string
    large: string
}
export type UserProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType

}
export type MyPostsDataType = {
    id: string
    massage: string
    likesCounts: number
}
export type ProfileStateType = {
    newTextPost: string
    myPostsData: Array<MyPostsDataType>
    profile: UserProfileType | null
}
type ActionTypeProfileReducer = AddPostCallbackActionType
    | UpdateNewPostTextActionType
    | setUserProfileActionType

const ADD_POST_CALLBACK = 'ADD-POST-CALLBACK' as const;
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT' as const;
const SET_USER_PROFILE = 'SET-USER-PROFILE' as const

export const profilePageReducer = (state: ProfileStateType = InitialState, action: ActionTypeProfileReducer): ProfileStateType => {

    switch (action.type) {
        case ADD_POST_CALLBACK: {
            const newPost: MyPostsDataType = {
                id: v1(),
                massage: action.postMessage,
                likesCounts: 0
            }
            return {
                ...state,
                myPostsData: [...state.myPostsData, newPost]
            }
        }
        case UPDATE_NEW_POST_TEXT:
            return {...state, newTextPost: action.newText}
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        default:
            return state
    }
}
export const addPostCallbackAC = (postMessage: string) => {
    return {
        type: ADD_POST_CALLBACK,
        postMessage: postMessage
    } as const
}
export const updateNewPostTextAC = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    } as const
}
export const setUserProfile = (profile: UserProfileType) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const
}
export type AddPostCallbackActionType = ReturnType<typeof addPostCallbackAC>
export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>
export type setUserProfileActionType = ReturnType<typeof setUserProfile>