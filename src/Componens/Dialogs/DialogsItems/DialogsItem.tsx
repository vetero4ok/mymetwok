import React from 'react';
import s from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom';

type propsDialogType = {
    id: string,
    name: string,
}

export function Dialog(props: propsDialogType) {
    let path = '/dialog/' + props.id
    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
