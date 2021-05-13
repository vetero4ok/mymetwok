import React from 'react';
import s from './Friends.module.css';


export const Friends = () => {
    return (
        <div className={s.mane} >
            <h1>Friends</h1>
            <div className={s.friends}>
                <img src="" alt="a"/>
                <div className={s.item_text}>name</div>
            </div>
        </div>

    );

}
