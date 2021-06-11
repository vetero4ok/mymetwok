import React from 'react';
import { ActionType,  RootStateType} from '../../Redux/Store';
import {addMessageCallbackAC, updateNewMessageTextAC} from '../../Redux/dialogPageReducer';
import {Dialogs} from './Dialogs';


type propsDialogsContainerType = {
    state: RootStateType
    dispatch: (action: ActionType) => void

}

export function DialogsContainer(props: propsDialogsContainerType) {
    let dialogsData = props.state.dialogPage.dialogsData
    let newTextMassages = props.state.dialogPage.newTextMassages
    let massagesData = props.state.dialogPage.massagesData

    const addMessageCallback = (newText:string) => {
        props.dispatch(addMessageCallbackAC(newText))
    }
    const updateNewMessageText = (value: string) => {
        props.dispatch(updateNewMessageTextAC(value))
    }


    return (
        <Dialogs
            dialogsData={dialogsData}
            newTextMassages={newTextMassages}
            massagesData={massagesData}
            updateNewMessageText={updateNewMessageText}
            addMessageCallback={addMessageCallback}
        />
    )
}