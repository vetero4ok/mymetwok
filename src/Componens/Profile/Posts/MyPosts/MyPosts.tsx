import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './MyPosts.module.css';
import {Posts} from './Post/Posts';
import {ActionType, MyPostsDataType} from '../../../../Redux/State';


type propsMyPostType = {
    myPostsData: Array<MyPostsDataType>
    newTextPost: string
    dispatch: (action: ActionType) => void
}


export const MyPosts = (props: propsMyPostType) => {

    const myPostsElements = props.myPostsData.map(p =>
        <Posts
            massage={p.massage}
            likesCounts={p.likesCounts}
        />)


    const addPostCallback = () => {
        let validatedValue = props.newTextPost.trim()
        if (validatedValue) {
            props.dispatch({type: 'ADD-POST-CALLBACK', postMessage: validatedValue})
        }
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: ''})

    }
    const onChangeKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            addPostCallback()
        }
    }
    const updateNewPostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: e.currentTarget.value})
    }

    return (

        <div className={s.posts}>
            <div>
                My posts
            </div>
            <div>
                <div>
                    <textarea
                        value={props.newTextPost}
                        onChange={updateNewPostText}
                        onKeyPress={onChangeKeyPress}
                    />
                </div>
                <div>
                    <button onClick={addPostCallback}>send</button>
                </div>
            </div>
            <div>
                {myPostsElements}
            </div>

        </div>
    );
}
