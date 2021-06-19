import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './MyPosts.module.css';
import {Posts} from './Post/Posts';
import {  MyPostsDataType, } from '../../../../Redux/Store';



type propsMyPostType = {
    myPostsData: Array<MyPostsDataType>
    newTextPost: string
    addPostCallback:(newPost:string) =>void
    updateNewPostText:(text:string) => void
}


export const MyPosts = (props: propsMyPostType) => {

    const myPostsElements = props.myPostsData.map(p =>
        <Posts
            key={p.id}
            massage={p.massage}
            likesCounts={p.likesCounts}
        />)

    /** addPostCallbackAC створення dispatch обєкту з параметром props.newTextPost */
    const addPostCallback = () => {
        let validatedValue = props.newTextPost.trim()
        if (validatedValue) {
            props.addPostCallback(validatedValue)
        }
        props.updateNewPostText('')

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
        props.updateNewPostText(e.currentTarget.value)
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
