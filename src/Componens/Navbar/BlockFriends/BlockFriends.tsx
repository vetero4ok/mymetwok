import React from 'react';
import s from './BlockFriends.module.css'
import {StoreType} from '../../../Redux/Redux-Store';


type PropsFriendsType = {
   store: StoreType
}

export const BlockFriends = (props: PropsFriendsType) => {
    const friend = props.store.getState().sidebar.friendsData.map(f => {
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