import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './Dialogs.module.css'
import {Dialog} from './DialogsItems/DialogsItem';
import {Message} from './Message/Message';
import {DialogsDataType, MassagesDataType} from '../../Redux/Store';


type propsDialogsType = {
    newTextMassages: string
    massagesData: Array<MassagesDataType>
    dialogsData: Array<DialogsDataType>
    addMessageCallback: (newText: string) => void
    updateNewMessageText: (value: string) => void
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
            {/*<AlternativeMessage*/}
            {/*    message={d.massage}*/}
            {/*/>*/}
        </div>
    )
    const addMessageCallback = () => {
        let validatedValue = props.newTextMassages.trim()
        if (validatedValue) {
            props.addMessageCallback(validatedValue)
        }
        props.updateNewMessageText('')
    }
    const updateNewMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        e.currentTarget &&
        props.updateNewMessageText(e.currentTarget.value)
    }
    const onChangeKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            addMessageCallback()
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
                <textarea
                    value={props.newTextMassages}
                    placeholder="Enter your message"
                    onChange={updateNewMessageText}
                    onKeyPress={onChangeKeyPress}
                />

                <button onClick={addMessageCallback}>send</button>
            </div>
        </div>
    )
}