import React from 'react';
import s from './MyPosts.module.css';
import {Posts} from './Post/Posts';
import {MyPostsDataType} from '../../../../Redux/State';


type propsMyPostType = {
    myPostsData: Array<MyPostsDataType>
}


export const MyPosts = (props: propsMyPostType) => {

    const myPostsElements = props.myPostsData.map(p =>
        <Posts
            massage={p.massage}
            likesCounts={p.likesCounts}
        />)

    let newPostElementsRef = React.createRef<HTMLTextAreaElement>();
    let addPost = () => {
        let text = newPostElementsRef.current?.value
        alert(text)
    }

    return (

        <div className={s.posts}>
            <div>
                My posts
            </div>
            <div>
                <div>
                    <textarea ref={newPostElementsRef} />
                </div>
                <div>
                    <button onClick={addPost}>send</button>
                </div>
            </div>
            <div>
                {myPostsElements}
            </div>

        </div>
    );
}
