import React from 'react';
import s from './Dialogs.module.css'
import {Dialog} from './DialogsItems/DialogsItem';
import {Message} from './Message/Massage';
import {DialogsDataType, MassagesDataType} from '../../Redux/State';



type propsDialogsType = {
    massagesData:Array<MassagesDataType>
    dialogsData: Array<DialogsDataType>
}


export function Dialogs(props:propsDialogsType) {

    const dialogElements = props.dialogsData.map(d => <Dialog id={d.id} name={d.name}/>)
    const dialogMessage = props.massagesData.map(d => <Message message={d.massage}/>)
    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>

                {dialogElements}

            </div>

            <div className={s.messeges}>

                {dialogMessage}

            </div>
        </div>
    )
}