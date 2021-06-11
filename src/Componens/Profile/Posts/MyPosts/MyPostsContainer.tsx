import React from 'react';
import {ActionType, RootStateType,} from '../../../../Redux/Store';
import {addPostCallbackAC, updateNewPostTextAC} from '../../../../Redux/profilePageReducer';
import {MyPosts} from './MyPosts';


type propsMyPostContainerType = {
    state: RootStateType
    dispatch: (action: ActionType) => void
}


export const MyPostsContainer = (props: propsMyPostContainerType) => {
    let myPostsData = props.state.profilePage.myPostsData
    let newTextPost = props.state.profilePage.newTextPost


    const addPostCallback = (newPost: string) => {
        props.dispatch(addPostCallbackAC(newPost))
    }

    const updateNewPostText = (text: string) => {
        props.dispatch(updateNewPostTextAC(text))
    }


    return (
        <MyPosts
            myPostsData={myPostsData}
            newTextPost={newTextPost}
            updateNewPostText={updateNewPostText}
            addPostCallback={addPostCallback}
        />
    );
}
