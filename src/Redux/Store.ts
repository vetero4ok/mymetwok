import {v1} from 'uuid';
import {AddMessageCallbackActionType, dialogPageReducer, UpdateNewMessageTextActionType} from './dialogPageReducer';
import {AddPostCallbackActionType, profilePageReducer, UpdateNewPostTextActionType} from './profilePageReducer';


export type MyPostsDataType = {
    id: string
    massage: string
    likesCounts: number
}
export type ProfilePage = {
    newTextPost: string
    myPostsData: Array<MyPostsDataType>,
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
export type DialogPage = {
    newTextMassages: string
    dialogsData: Array<DialogsDataType>
    massagesData: Array<MassagesDataType>
}
export type FriendType = {
    id: string
    name: string
    avatar: string
}
export type SidebarType = {
    friendsData: Array<FriendType>,
}
export type RootStateType = {
    profilePage: ProfilePage,
    dialogPage: DialogPage,
    sidebar: SidebarType,

}
export type ActionType = AddPostCallbackActionType | UpdateNewPostTextActionType
    | AddMessageCallbackActionType | UpdateNewMessageTextActionType

 type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    subscribe: (observer: () => void) => void
    _callbackSubscriber: () => void
    dispatch: (action: ActionType) => void

}


 const store: StoreType = {
    _state: {
        profilePage: {
            newTextPost: '',
            myPostsData: [
                {id: v1(), massage: 'Hi, how are you?', likesCounts: 12},
                {id: v1(), massage: 'It is my first post!', likesCounts: 15},
                {id: v1(), massage: 'hey!', likesCounts: 1},
            ]

        },
        dialogPage: {

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
        },
        sidebar: {
            friendsData: [
                {
                    id: v1(),
                    avatar: 'https://buddy.ghostpool.com/wp-content/uploads/avatars/4/d0344a04087644befce78124c6277bb1-bpthumb.jpg',
                    name: 'Igor'
                },
                {
                    id: v1(),
                    avatar: 'https://buddy.ghostpool.com/wp-content/uploads/avatars/2/d1b23ad972e736b7c0510b288875c3b6-bpthumb.jpg',
                    name: 'Maryna'
                },
                {
                    id: v1(),
                    avatar: 'https://buddy.ghostpool.com/wp-content/uploads/avatars/4/d0344a04087644befce78124c6277bb1-bpthumb.jpg',
                    name: 'Ragnar'
                },
                {
                    id: v1(),
                    avatar: 'https://buddy.ghostpool.com/wp-content/uploads/group-avatars/34/1c7da6471476e42b543812f35ef23d2f-bpthumb.jpg',
                    name: 'Ruslan'
                },
            ]
        },
    },
    _callbackSubscriber() {
        console.log('State changed')

    },
    getState() {
        return this._state;
    },
    subscribe(observer) {  //оригінальна функція в редаксі пишеться з маленької букви
        this._callbackSubscriber = observer;
    },
    dispatch(action: ActionType) { // {type: 'ADD-POST-CALLBACK'}

        this._state.profilePage = profilePageReducer(this._state.profilePage,action)
        this._state.dialogPage = dialogPageReducer(this._state.dialogPage,action)
        this._callbackSubscriber();

    }
}











