import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {addMessageCallbackAC, updateNewMessageTextAC} from '../../Redux/dialogPageReducer';
import {AppStateType} from '../../Redux/Redux-Store';
import {withAuthRedirect} from '../../Hok/withAuthRedirect';


let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsData: state.dialogPage.dialogsData,
        newTextMassages: state.dialogPage.newTextMassages,
        massagesData: state.dialogPage.massagesData,
    }
}

export const DialogsContainer = withAuthRedirect(connect(mapStateToProps,{
    updateNewMessageTextAC,
    addMessageCallbackAC,
})(Dialogs))