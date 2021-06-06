import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './MyPosts.module.css';
import {Posts} from './Post/Posts';
import {ActionType, addPostCallbackAC, MyPostsDataType, updateNewPostTextAC} from '../../../../Redux/State';


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

    /** addPostCallbackAC створення dispatch обєкту з параметром props.newTextPost */
    const addPostCallback = () => {
        let validatedValue = props.newTextPost.trim()
        if (validatedValue) {
            props.dispatch(addPostCallbackAC(validatedValue))
        }
        props.dispatch(updateNewPostTextAC(''))

    }
    const onChangeKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            addPostCallback()
        }
    }
    /** Плохой тон писать props.dispatch(updateNewPostTextAC(e.currentTarget.value)) =>
     *  либо через if(e.currentTarget) либо && */
    const updateNewPostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        e.currentTarget &&
        props.dispatch(updateNewPostTextAC(e.currentTarget.value))
    }


    return (

        <div className={s.posts}>
            <div>
                My posts
            </div>

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

            <div>
                {myPostsElements}
            </div>

        </div>
    );
}
