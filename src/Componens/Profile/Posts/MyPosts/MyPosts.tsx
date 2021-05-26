import React, {ChangeEvent} from 'react';
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


    let addPostCallback = () => {

        props.addPostCallback(props.newTextPost)

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
                    <textarea value={props.newTextPost} onChange={updateNewPostText}/>
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
