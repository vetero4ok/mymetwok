import React from 'react';
import s from './Profile.module.css';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './Posts/MyPosts/MyPostsContainer';
import {UserProfileType} from '../../Redux/profilePageReducer';


type ProfilePropsType = {
    profile: UserProfileType | null
    profileStatus:string
    setStatusProfileTC:(title: string) => void

}


export const Profile = React.memo( (props: ProfilePropsType) => {
  //  console.log(111)
    return (
        <div className={s.content}>
               {/*Main content*/}
            <ProfileInfo
                profile={props.profile}
                profileStatus={props.profileStatus}
                setStatusProfileTC = {props.setStatusProfileTC}
            />
            <MyPostsContainer/>

        </div>

    );
})
