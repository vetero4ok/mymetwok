import {v1} from 'uuid';
import {ActionType, MyPostsDataType, ProfilePage} from './Store';

let InitialState = {
    newTextPost: '',
    myPostsData: [
        {id: v1(), massage: 'Hi, how are you?', likesCounts: 12},
        {id: v1(), massage: 'It is my first post!', likesCounts: 15},
        {id: v1(), massage: 'hey!', likesCounts: 1},
    ]
}

const ADD_POST_CALLBACK = 'ADD-POST-CALLBACK' as const;
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT' as const;
export const profilePageReducer = (state: ProfilePage = InitialState, action: ActionType):ProfilePage => {

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
            return {
                ...state,
                newTextPost: action.newText
            }
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
export type AddPostCallbackActionType = ReturnType<typeof addPostCallbackAC>
export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>