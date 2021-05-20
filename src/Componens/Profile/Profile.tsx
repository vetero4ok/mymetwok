import React from 'react';
import classes from "./Profile.module.css";
import {MyPosts} from "./Posts/MyPosts/MyPosts";
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import { MyPostsDataType } from '../../Redux/State';



type propsProfileType = {
    myPostsData:Array<MyPostsDataType>
    addPostCallback: (postMessage: string) => void
    updateNewPostText:(newText: string) =>void
    newTextPost:string
}

export const Profile = (props: propsProfileType) => {
    return (
        <div className={classes.content}> Main content
            <ProfileInfo />
            <MyPosts myPostsData= {props.myPostsData}
                     newTextPost={props.newTextPost}
                     addPostCallback={props.addPostCallback}
                     updateNewPostText={props.updateNewPostText}
            />
        </div>

    );

}
