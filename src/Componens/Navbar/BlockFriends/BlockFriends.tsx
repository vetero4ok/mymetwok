import React from 'react';
import s from './BlockFriends.module.css'
import {DialogsDataType} from '../../../Redux/DialogPageReducer';


type PropsFriendsType = {
    dialogsData:Array<DialogsDataType>
}

export const BlockFriends = (props: PropsFriendsType) => {
    const friend = props.dialogsData.map(f => {
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
