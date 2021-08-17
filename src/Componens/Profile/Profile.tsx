import React from 'react';
import s from './Profile.module.css';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './Posts/MyPosts/MyPostsContainer';
import { UserProfileType } from '../../Redux/profilePageReducer';
import {Redirect} from 'react-router-dom';


type ProfilePropsType = {
    profile: UserProfileType | null
    isAuth:boolean
}


export const Profile = (props: ProfilePropsType) => {
    if (!props.isAuth) return <Redirect to={'/login'}/>
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
