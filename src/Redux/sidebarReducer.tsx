import {v1} from 'uuid';
import {ActionType, SidebarType} from './Store';


let InitialState = {
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
}

export const sidebarReducer = (store:SidebarType = InitialState, action: ActionType):SidebarType => {
return store
}
