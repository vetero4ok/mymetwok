import React from 'react';
import s from './MyPosts.module.css';
import {Posts} from './Post/Posts';
import {MyPostsDataType} from '../../../../Redux/State';



type propsMyPostType = {
    myPostsData: Array<MyPostsDataType>
}



export const MyPosts = (props:propsMyPostType) => {
    const myPostsElements = props.myPostsData.map(elem=><Posts massage={elem.massage} likesCounts={elem.likesCounts}/>)
    return (

        <div className={s.posts}>
            <div>
                My posts
            </div>

            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>send</button>
                </div>
            </div>

            {myPostsElements}

        </div>
    );
}
