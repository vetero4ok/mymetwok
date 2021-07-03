import React from 'react';
import {Profile} from './Profile';
import axios from 'axios';
import {setUserProfile, UserProfileType} from '../../Redux/profilePageReducer';
import {AppStateType} from '../../Redux/Redux-Store';
import {connect} from 'react-redux';
import {RouteComponentProps} from 'react-router';
import {withRouter} from 'react-router-dom';

type PathParamType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamType> & {
    profile: UserProfileType | null
    setUserProfile: (data: UserProfileType) => void
}

class ProfileApiComponents extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId )
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


let WithUrlDataContainerComponents = withRouter(ProfileApiComponents)


export const ProfileContainer = connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponents)