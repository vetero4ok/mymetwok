import {v1} from 'uuid';

export type MyPostsDataType = {
    id: string
    massage: string
    likesCounts: number
}
export type DialogsDataType = {
    id: string
    name: string
}

export type MassagesDataType = {
    id: string
    massage: string
}

type ProfilePage = {
    myPostsData: Array<MyPostsDataType>,
}
type DialogPage = {
    dialogsData: Array<DialogsDataType>,
    massagesData: Array<MassagesDataType>
}
type SidebarType = {}
type RootStateType = {
    profilePage: ProfilePage,
    dialogPage: DialogPage,
    sidebar: SidebarType,

}


let state: RootStateType = {
    profilePage: {
        myPostsData: [
            {id: v1(), massage: 'Hi, how are you?', likesCounts: 12},
            {id: v1(), massage: 'It is my first post!', likesCounts: 15},
            {id: v1(), massage: 'hey!', likesCounts: 1},
        ]

    },
    dialogPage: {
        dialogsData: [
            {id: v1(), name: 'Igor'},
            {id: v1(), name: 'Maryna'},
            {id: v1(), name: 'Ragnar'},
            {id: v1(), name: 'Ruslan'},
        ],
        massagesData: [
            {id: v1(), massage: 'Hi!'},
            {id: v1(), massage: 'How are you?'},
            {id: v1(), massage: 'Hey!'},
            {id: v1(), massage: 'Hello my friends'},

        ]
    },
    sidebar: {},
}
export default state