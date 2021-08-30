import React from 'react';
import s from './MyPosts.module.css';
import {Posts} from './Post/Posts';
import {MyPostsDataType,} from '../../../../Redux/Store';
import {AddPostReduxForm} from './PostForm/PostForm';


type MyPostPropsType = {
    myPostsData: Array<MyPostsDataType>
    addPostCallback: (newPost: string) => void
}


export const MyPosts = (props: MyPostPropsType) => {

    const myPostsElements = props.myPostsData.map(p =>
        <Posts
            key={p.id}
            massage={p.massage}
            likesCounts={p.likesCounts}
        />)
    // const onChangeKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    //     if (e.key === 'Enter') {
    //         // addPostCallback()
    //     }
    // }
    const onSubmit = (formData: any) => {
        props.addPostCallback(formData.newTextPost)
    }

    return (
        <div className={s.posts}>
            <div>
                <h3>My posts</h3>
            </div>
            <div>
                <AddPostReduxForm onSubmit={onSubmit}/>
            </div>
            <div>
                {myPostsElements}
            </div>
        </div>
    );
}
