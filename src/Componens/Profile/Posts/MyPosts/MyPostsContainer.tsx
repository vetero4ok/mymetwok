import React from 'react';
import {addPostCallbackAC, updateNewPostTextAC} from '../../../../Redux/profilePageReducer';
import {MyPosts} from './MyPosts';
import {StoreType} from '../../../../Redux/Redux-Store';


type propsMyPostContainerType = {
    store: StoreType
}

export function MyPostsContainer(props: propsMyPostContainerType){

                let state = props.store.getState()
                let myPostsData = state.profilePage.myPostsData
                let newTextPost = state.profilePage.newTextPost
                const addPostCallback = (newPost: string) => {
                    props.store.dispatch(addPostCallbackAC(newPost))
                }

                const updateNewPostText = (text: string) => {
                    props.store.dispatch(updateNewPostTextAC(text))
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
