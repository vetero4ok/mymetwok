import React from 'react';
import {Header} from './Header';
import {connect} from 'react-redux';
import {AppStateType} from '../../Redux/Redux-Store';
import {setUserAuthData} from '../../Redux/authReducer';
import {toggleIsFetching} from '../../Redux/usersPageReducer';
import {setUserProfile, UserProfileType} from '../../Redux/profilePageReducer';
import {authMeAPI, profileAPI,} from '../../Api/Api';

type PropsHeaderComponentType = {
    isAuth: boolean
    userId: number
    login: string
    email: string
    setUserAuthData: (userId: number, email: string, login: string, isAuth: boolean) => void
    toggleIsFetching: (isFetching: boolean) => void
    setUserProfile: (data: UserProfileType) => void
    profile: UserProfileType | null
}

class HeaderApiContainer extends React.Component<PropsHeaderComponentType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        authMeAPI.authMe().then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                this.props.setUserAuthData(id, email, login, true)
                profileAPI.getProfiles(this.props.userId)
                    .then(response => {
                        this.props.setUserProfile(response.data)
                    })
                this.props.toggleIsFetching(false)
            }


        })
    }

    render() {
        return (
            <Header
                {...this.props}
            />
        );
    }
}

function mapStateToProps(state: AppStateType) {
    return {
        isAuth: state.auth.isAuth,
        userId: state.auth.userId,
        email: state.auth.email,
        login: state.auth.login,
        isFetching: state.usersPage.isFetching,
        profile: state.profilePage.profile,

    }
}

export const HeaderContainer = connect(mapStateToProps, {
    setUserAuthData,
    toggleIsFetching,
    setUserProfile,

})(HeaderApiContainer)