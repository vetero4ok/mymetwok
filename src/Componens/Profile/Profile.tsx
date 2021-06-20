import React from 'react';
import s from './Profile.module.css';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './Posts/MyPosts/MyPostsContainer';





export const Profile = () => {
    return (
        <div className={s.content}> Main content
            <ProfileInfo/>
            <MyPostsContainer/>

        </div>

    );
}
