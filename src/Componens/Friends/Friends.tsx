import React from 'react';
import s from './Friends.module.css';
import {FriendType} from '../../Redux/State';


type PropsFriendsType = {
    friendsData:Array<FriendType>
}

export const Friends = (props:PropsFriendsType) => {
    const friend = props.friendsData.map(f=>{
        return(
      //  <img sourse={f.avatar} alt="avatar"/>
        <div className={s.item_text}>{f.name}</div>
        )
    })



    return (
        <div className={s.mane} >
            <h1>Friends</h1>
            <div className={s.friends}>
                {friend}
            </div>
        </div>

    );

}
