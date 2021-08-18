import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {addMessageCallbackAC, updateNewMessageTextAC} from '../../Redux/dialogPageReducer';
import {AppStateType} from '../../Redux/Redux-Store';
import {withAuthRedirect} from '../../Hok/withAuthRedirect';
import {compose} from 'redux';
import React from 'react';


let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsData: state.dialogPage.dialogsData,
        newTextMassages: state.dialogPage.newTextMassages,
        massagesData: state.dialogPage.massagesData,
    }
}
export const DialogsContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {
        updateNewMessageTextAC,
        addMessageCallbackAC,
    }),
    withAuthRedirect
)
(Dialogs)
