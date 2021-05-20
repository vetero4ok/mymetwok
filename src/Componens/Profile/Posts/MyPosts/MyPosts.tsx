import React from 'react';
import s from './MyPosts.module.css';
import {Posts} from './Post/Posts';
import {MyPostsDataType} from '../../../../Redux/State';


type propsMyPostType = {
    myPostsData: Array<MyPostsDataType>
    addPost: (postMessage: string) => void
}


export const MyPosts = (props: propsMyPostType) => {

    const myPostsElements = props.myPostsData.map(p =>
        <Posts
            massage={p.massage}
            likesCounts={p.likesCounts}
        />)

    let newPostElementsRef = React.createRef<HTMLTextAreaElement>();
    let addPost = () => {

        if(newPostElementsRef.current){ //выполнение проверки если есть сылка то ок. TS ругается
            props.addPost(newPostElementsRef.current.value)
        }
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
