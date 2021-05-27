import React from 'react';
import s from './Dialogs.module.css'
import {Dialog} from './DialogsItems/DialogsItem';
import {Message} from './Message/Message';
import {DialogsDataType, MassagesDataType} from '../../Redux/State';
import {AlternativeMessage} from './Message/AlternativeMessage';


type propsDialogsType = {
    massagesData: Array<MassagesDataType>
    dialogsData: Array<DialogsDataType>

}

export function Dialogs(props: propsDialogsType) {

    const dialogElements = props.dialogsData.map(d =>
        <div key={d.id}>
            <Dialog
                id={d.id}
                name={d.name}
                avatar={d.avatar}
            />
        </div>
    )
    const dialogMessage = props.massagesData.map(d =>
    <div key={d.id}>
        <Message
            message={d.massage}
        />
        <AlternativeMessage
            message={d.massage}
        />
    </div>
    )


    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogElements}
            </div>

            <div className={s.messeges}>
                {dialogMessage}
            </div>
            <div>
                <textarea/>
                <button>send</button>
            </div>
        </div>
    )
}