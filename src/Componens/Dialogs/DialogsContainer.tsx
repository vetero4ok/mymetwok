import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {addMessageCallbackAC, DialogsDataType, MassagesDataType} from '../../Redux/dialogPageReducer';
import {AppDispatch, AppStateType} from '../../Redux/Redux-Store';
import {withAuthRedirect} from '../../Hok/withAuthRedirect';
import {compose} from 'redux';
import React from 'react';

type MapStatePropsType = {
    massagesData: Array<MassagesDataType>
    dialogsData: Array<DialogsDataType>
}
type MapDispatchPropsType = {
    addMessageCallback: (newText: string) => void
}
let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsData: state.dialogPage.dialogsData,
        massagesData: state.dialogPage.massagesData,
    }
}
let mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        addMessageCallback: (newPost: string) => {
            dispatch(addMessageCallbackAC(newPost))
        }
    }

}
export const DialogsContainer = compose<React.ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)
(Dialogs)
// export const DialogsContainer = compose<React.ComponentType>(
//     connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {
//         addMessageCallbackAC}),
//
//     withAuthRedirect
// )
// (Dialogs)
