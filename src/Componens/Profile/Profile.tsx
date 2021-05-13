import React from 'react';
import classes from "./Profile.module.css";
import {MyPosts} from "./Posts/MyPosts/MyPosts";
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import { MyPostsDataType } from '../../Redux/State';



type propsProfileType = {
    myPostsData:Array<MyPostsDataType>
}

export const Profile = (props: propsProfileType) => {
    return (
        <div className={classes.content}> Main content
            <ProfileInfo />
            <MyPosts myPostsData= {props.myPostsData}/>
        </div>

    );

}
