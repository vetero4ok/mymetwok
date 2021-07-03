import React from 'react';
import s from './DialogsItem.module.css'
import { NavLink } from 'react-router-dom';

type propsDialogType = {
    id: string,
    name: string,
    avatar: string,
}

export function Dialog(props: propsDialogType) {
    let path = '/dialog/' + props.id
    return (
        <div className={s.dialog}>
            <img src={props.avatar} alt = {'avatar'}/>
            <NavLink to={path}><div className={s.name} >{props.name}</div></NavLink>
        </div>
    )
}
