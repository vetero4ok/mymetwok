import React from 'react';
import {Friends} from './Friends';
import {connect} from 'react-redux';
import {AppStateType} from '../../Redux/Redux-Store';
import {DialogsDataType} from '../../Redux/dialogPageReducer';


type PropsFriendsType = {
    dialogsData:Array<DialogsDataType>
}

class FriendsApiContainer extends React.Component<PropsFriendsType> {


    render() {
        return (
            <Friends
                {...this.props}
            />
        );
    }

}

let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsData: state.dialogPage.dialogsData
    }
}

export const FriendsContainer = connect(mapStateToProps, {})(FriendsApiContainer)