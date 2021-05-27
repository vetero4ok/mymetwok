import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './MyPosts.module.css';
import {Posts} from './Post/Posts';
import {MyPostsDataType} from '../../../../Redux/State';


type propsMyPostType = {
    myPostsData: Array<MyPostsDataType>
    newTextPost: string
    addPostCallback: (postMessage: string) => void
    updateNewPostText: (newText: string) => void
}


export const MyPosts = (props: propsMyPostType) => {

    const myPostsElements = props.myPostsData.map(p =>
        <Posts
            massage={p.massage}
            likesCounts={p.likesCounts}
        />)


    const addPostCallback = () => {
        let validatedValue = props.newTextPost.trim()
        if(validatedValue){
            props.addPostCallback(validatedValue)
        }
        props.updateNewPostText('')

    }
    const onChangeKeyPress = (e:KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            addPostCallback()
        }
    }
    const updateNewPostText = (e : ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
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
