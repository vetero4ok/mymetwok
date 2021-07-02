import React from 'react';
import s from './ProfileInfo.module.css';
import {userProfileType} from '../../../Redux/profilePageReducer';
import {Preloader} from '../../Common/Preloader/Preloader';
type profileInfoPropsType = {
    profile: userProfileType | null
}

export const ProfileInfo = (props:profileInfoPropsType) => {
   if(!props.profile){
       return <Preloader/>
   }
    return (
        <div className={s.mydate}>
            <div>
                <img src={props.profile.photos.large} alt={'avatar'}/>
            </div>
            <div>Description{props.profile.fullName}</div>
        </div>

    );
}
