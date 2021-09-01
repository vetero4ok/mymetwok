import React from 'react';
import s from './Dialogs.module.css'
import {Message} from './Message/Message';
import {DialogsDataType, MassagesDataType} from '../../Redux/dialogPageReducer';
import {Dialog} from './DialogsItems/DialogsItem';
import {AddMessageReduxForm, FormDataMessageType} from './Message/AddMessageForm';


type DialogsPropsType = {
    massagesData: Array<MassagesDataType>
    dialogsData: Array<DialogsDataType>
    addMessageCallback: (newText: string) => void
}
// export type DialogsFormValuePropsType = {
//     updateNewMessageText:string
// }
export function Dialogs(props: DialogsPropsType) {

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
            {/*<AlternativeMessage*/}
            {/*    message={d.massage}*/}
            {/*/>*/}
        </div>
    )
    /** Refactor Any*/

    const onSubmit = (formData: FormDataMessageType) => {
       let message = formData.updateNewMessageText.trim()
       props.addMessageCallback(message)
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
                <AddMessageReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}