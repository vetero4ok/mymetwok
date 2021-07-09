import {v1} from 'uuid';

const InitialState: InitDialogPageStateType = {

    dialogsData: [
        {
            id: v1(),
            name: 'Igor',
            avatar: 'https://buddy.ghostpool.com/wp-content/uploads/avatars/4/d0344a04087644befce78124c6277bb1-bpthumb.jpg',
        },
        {
            id: v1(),
            name: 'Maryna',
            avatar: 'https://buddy.ghostpool.com/wp-content/uploads/avatars/2/d1b23ad972e736b7c0510b288875c3b6-bpthumb.jpg',
        },
        {
            id: v1(),
            name: 'Ragnar',
            avatar: 'https://buddy.ghostpool.com/wp-content/uploads/avatars/4/d0344a04087644befce78124c6277bb1-bpthumb.jpg',
        },
        {
            id: v1(),
            name: 'Ruslan',
            avatar: 'https://buddy.ghostpool.com/wp-content/uploads/group-avatars/34/1c7da6471476e42b543812f35ef23d2f-bpthumb.jpg',
        },
    ],
    newTextMassages: '',
    massagesData: [
        {id: v1(), massage: 'Hi!'},
        {id: v1(), massage: 'How are you?'},
        {id: v1(), massage: 'Hey!'},
        {id: v1(), massage: 'Hello my friends'},

    ]
}
export type DialogsDataType = {
    id: string
    name: string
    avatar: string
}
export type MassagesDataType = {
    id: string
    massage: string
}
export type InitDialogPageStateType = {
    newTextMassages: string
    dialogsData: Array<DialogsDataType>
    massagesData: Array<MassagesDataType>

}
export type ActionTypeDialogPageReducer = AddMessageCallbackActionType
    | UpdateNewMessageTextActionType


const ADD_MESSAGE_CALLBACK = 'ADD-MESSAGE-CALLBACK' as const
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT' as const
export const DialogPageReducer =
    (state = InitialState,
     action: ActionTypeDialogPageReducer): InitDialogPageStateType => {

        switch (action.type) {
            case ADD_MESSAGE_CALLBACK: {
                const newMessage: MassagesDataType = {
                    id: v1(),
                    massage: action.message,
                }
                return {
                    ...state,
                    newTextMassages: '',
                    massagesData: [...state.massagesData, newMessage]
                }
            }
            case UPDATE_NEW_MESSAGE_TEXT:
                return {
                    ...state,
                    newTextMassages: action.newMessage
                }
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
export type UpdateNewMessageTextActionType = ReturnType<typeof updateNewMessageTextAC>
export type AddMessageCallbackActionType = ReturnType<typeof addMessageCallbackAC>