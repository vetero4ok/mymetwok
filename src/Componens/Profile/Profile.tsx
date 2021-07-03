import React from 'react';
import s from './Profile.module.css';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './Posts/MyPosts/MyPostsContainer';
import { UserProfileType } from '../../Redux/profilePageReducer';


type ProfilePropsType = {
    profile: UserProfileType | null
}


export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.content}>
               {/*Main content*/}
            <ProfileInfo
                profile={props.profile}
            />
            <MyPostsContainer/>

        </div>

    );
}
