import React from 'react';
import s from './Dialogs.module.css'
import {Dialog} from './DialogsItems/DialogsItem';
import {Message} from './Message/Massage';
import {DialogsDataType, MassagesDataType} from '../../Redux/State';


type propsDialogsType = {
    massagesData: Array<MassagesDataType>
    dialogsData: Array<DialogsDataType>
    addPost: (postMessage: string) => void
}

export function Dialogs(props: propsDialogsType) {

    const dialogElements = props.dialogsData.map(d =>
        <Dialog
            id={d.id}
            name={d.name}
        />)
    const dialogMessage = props.massagesData.map(d =>
        <Message
            message={d.massage}
        />)

    let newMessageRef = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        debugger
        if(newMessageRef.current){ //выполнение проверки если есть сылка то ок. TS ругается
            props.addPost(newMessageRef.current.value)
        }
    }

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogElements}
            </div>

            <div className={s.messeges}>
                {dialogMessage}
            </div>
            <div>
                <textarea ref={newMessageRef}/>
                <button onClick={addPost}>send</button>
            </div>
        </div>
    )
}