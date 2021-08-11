import React from 'react';

import {BlockFriends} from './BlockFriends';
import {connect} from 'react-redux';
import {AppStateType} from '../../../Redux/Redux-Store';
import {DialogsDataType} from '../../../Redux/dialogPageReducer';



type PropsFriendsType = {
    dialogsData:Array<DialogsDataType>
}

class BlockFriendsApiComponents extends React.Component<PropsFriendsType>{

    render() {
        return (
            <BlockFriends
                {...this.props}
            />
        );
    }
}
let mapStateToProps = (state:AppStateType)=> {
    return {
        dialogsData:state.dialogPage.dialogsData
    }
}
export const BlockFriendsComponents = connect(mapStateToProps,{})(BlockFriendsApiComponents)