import React from 'react';
import {Profile} from './Profile';
import {setUserProfile, UserProfileType} from '../../Redux/profilePageReducer';
import {AppStateType} from '../../Redux/Redux-Store';
import {connect} from 'react-redux';
import {RouteComponentProps} from 'react-router';
import {withRouter} from 'react-router-dom';
import {getProfiles} from '../Api/Api';

type PathParamType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamType> & {
    profile: UserProfileType | null
    setUserProfile: (data: UserProfileType) => void
    userId: number
}

class ProfileApiComponents extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        /** Перевірка якщо в аресній строці нема id(undefined | null) то id беремо з authReducer і добавляємо до
         * профайла в кінець адресної строки, а переводимо в строку тому, що значенння з PathParamType
         * завжди повертає строку*/
        if (!userId) {
            userId = this.props.userId.toString()
        }

        getProfiles(userId)
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
    profile: state.profilePage.profile,
    userId: state.auth.userId
})


let WithUrlDataContainerComponents = withRouter(ProfileApiComponents)


export const ProfileContainer = connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponents)