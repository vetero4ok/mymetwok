import {addMessageCallbackAC, updateNewMessageTextAC} from '../../Redux/dialogPageReducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {AppDispatch, AppStateType} from '../../Redux/Redux-Store';


let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsData: state.dialogPage.dialogsData,
        newTextMassages: state.dialogPage.newTextMassages,
        massagesData: state.dialogPage.massagesData
    }
}
let mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        updateNewMessageText: (value: string) => {
            dispatch(updateNewMessageTextAC(value))
        },
        addMessageCallback: (newText: string) => {
            dispatch(addMessageCallbackAC(newText))
        }
    }
}


export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)