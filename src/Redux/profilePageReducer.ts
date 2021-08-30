import {v1} from 'uuid';
import {AppDispatch} from './Redux-Store';
import {profileAPI} from '../Api/Api';

let InitialState = {
    myPostsData: [
        {id: v1(), massage: 'Hi, how are you?', likesCounts: 12},
        {id: v1(), massage: 'It is my first post!', likesCounts: 15},
        {id: v1(), massage: 'hey!', likesCounts: 1},
    ],
    profile: null,
    profileStatus: '',

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
    aboutMe: string | null
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
    myPostsData: Array<MyPostsDataType>
    profile: UserProfileType | null
    profileStatus: string
}
type ActionTypeProfileReducer =
    | AddPostCallbackActionType
    | SetUserProfileActionType
    | SetStatusProfileActionType

const ADD_POST_CALLBACK = 'ADD-POST-CALLBACK' as const;
const SET_USER_PROFILE = 'SET-USER-PROFILE' as const
const SET_STATUS_PROFILE = 'SET-STATUS-PROFILE' as const;
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
                myPostsData: [newPost, ...state.myPostsData]
            }
        }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS_PROFILE :
            return {...state, profileStatus: action.status}
        default:
            return state
    }
}
export const addPostCallbackAC = (postMessage: string) =>
    ({type: ADD_POST_CALLBACK, postMessage: postMessage} as const)


export const setUserProfile = (profile: UserProfileType) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const
}
export const setStatusProfile = (status: string) => {
    return {
        type: SET_STATUS_PROFILE,
        status
    } as const
}
export type AddPostCallbackActionType = ReturnType<typeof addPostCallbackAC>
export type SetUserProfileActionType = ReturnType<typeof setUserProfile>
export type SetStatusProfileActionType = ReturnType<typeof setStatusProfile>

export const setProfilePage = (userId: number) => {
    return (dispatch: AppDispatch) => {
        profileAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data));
        })
    }
}
export const getStatusProfileTC = (userId: number) => (dispatch: AppDispatch) => {
    profileAPI.getStatus(userId).then((res) =>
        dispatch(setStatusProfile(res.data)))
}
export const setStatusProfileTC = (title: string) => (dispatch: AppDispatch) => {
    profileAPI.changeStatus(title).then((res) => {
        if (res.data.resultCode === 0) {
            dispatch(setStatusProfile(title))
        } else console.log(res.data.messages)
    })
}