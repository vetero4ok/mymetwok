import React from 'react';
import {addMessageCallbackAC, updateNewMessageTextAC} from '../../Redux/dialogPageReducer';
import {Dialogs} from './Dialogs';
import StoreContext from '../../StoreContext';


type propsDialogsContainerType = {
    // state: RootStateType
    // dispatch: (action: ActionType) => void

}

export function DialogsContainer(props: propsDialogsContainerType) {
    return (
        <StoreContext.Consumer>{
            store => {
                let state = store.getState()
                let dialogsData = state.dialogPage.dialogsData
                let newTextMassages = state.dialogPage.newTextMassages
                let massagesData = state.dialogPage.massagesData

                const addMessageCallback = (newText: string) => {
                    store.dispatch(addMessageCallbackAC(newText))
                }
                const updateNewMessageText = (value: string) => {
                    store.dispatch(updateNewMessageTextAC(value))
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
        }
        </StoreContext.Consumer>
    );

}