import React from 'react';
import s from './Friends.module.css';
import {DialogsDataType} from '../../Redux/DialogPageReducer';

type PropsFriendsType = {
    dialogsData:Array<DialogsDataType>
}

export const Friends = (props:PropsFriendsType) => {

    const friend = props.dialogsData.map(f=>{
        return(
        <div key={f.id}>
            <div>
            <img src={f.avatar} alt=''/>
            </div>
            <div className={s.item_text}>{f.name}</div>
        </div>

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
