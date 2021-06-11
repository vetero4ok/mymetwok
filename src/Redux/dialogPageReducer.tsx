import {ActionType, DialogPage, MassagesDataType} from './State';
import {v1} from 'uuid';
export type UpdateNewMessageTextActionType = ReturnType<typeof updateNewMessageTextAC>
export type AddMessageCallbackActionType = ReturnType<typeof addMessageCallbackAC>
const ADD_MESSAGE_CALLBACK='ADD-MESSAGE-CALLBACK'
const UPDATE_NEW_MESSAGE_TEXT='UPDATE-NEW-MESSAGE-TEXT'
export const dialogPageReducer = (state: DialogPage, action: ActionType) => {

    switch (action.type) {
        case ADD_MESSAGE_CALLBACK:
            const newMessage: MassagesDataType = {
                id: v1(),
                massage: action.message,
            }
            state.newTextMassages = ''
            state.massagesData.push(newMessage)
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newTextMassages = action.newMessage
            return state
        default:
            return state
    }

}
export const addMessageCallbackAC = (message: string) => {
    return {
        type: ADD_MESSAGE_CALLBACK,
        message: message
    } as const
}
export const updateNewMessageTextAC = (newMessage: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessage: newMessage
    } as const

}