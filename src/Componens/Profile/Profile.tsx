import React from 'react';
import classes from "./Profile.module.css";
import {MyPosts} from "./Posts/MyPosts/MyPosts";
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ActionType, MyPostsDataType} from '../../Redux/Store';



type propsProfileType = {
    myPostsData:Array<MyPostsDataType>
    dispatch: (action: ActionType) => void
    newTextPost:string
}

export const Profile = (props: propsProfileType) => {
    return (
        <div className={classes.content}> Main content
            <ProfileInfo />
            <MyPosts myPostsData= {props.myPostsData}
                     newTextPost={props.newTextPost}
                     dispatch={props.dispatch}

            />
        </div>

    );

}
