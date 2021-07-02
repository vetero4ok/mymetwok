import React from 'react';
import {Profile} from './Profile';
import axios from 'axios';
import {setUserProfile} from '../../Redux/profilePageReducer';
import {AppStateType} from '../../Redux/Redux-Store';
import {connect, ConnectedProps} from 'react-redux';

class ProfileContainer extends React.Component<PropsFromRedux> {
    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)

            })
    }

    render() {
        return (
            <>
                <Profile
                    {...this.props}
                    profile={this.props.profile}
                />
            </>
        );
    }
}

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile
})
const connector = connect(mapStateToProps, {setUserProfile})
type PropsFromRedux = ConnectedProps<typeof connector>
export default connector(ProfileContainer)