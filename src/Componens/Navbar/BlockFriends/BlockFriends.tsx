import React from 'react';
import {FriendType} from '../../../Redux/State';
import s from './BlockFriends.module.css'


type PropsFriendsType = {
    friendsData: Array<FriendType>
}

export const BlockFriends = (props: PropsFriendsType) => {
    const friend = props.friendsData.map(f => {
        return (
            <div key={f.id} className={s.items} >
                <div>
                    <img src={f.avatar} alt=""/>
                </div>
                <div className={s.name}>{f.name}</div>
            </div>

        )
    })


    return (
        <div className={s.mane}>
            <h1>Friends</h1>
            <div className={s.flexContainer}>
                {friend}
            </div>
        </div>

    );

}