import React from 'react';
import {Header} from './Header';
import {connect} from 'react-redux';
import {AppStateType} from '../../Redux/Redux-Store';
import {logoutTC, setUserAuthData} from '../../Redux/authReducer';
import {UserProfileType} from '../../Redux/profilePageReducer';


type PropsHeaderComponentType = {
    isAuth: boolean
    userId: number | null
    login: string
    email: string
    profile: UserProfileType | null
    setUserAuthData: () => void
    logoutTC: () => void
}

class HeaderApiContainer extends React.Component<PropsHeaderComponentType> {

    componentDidMount() {
        this.props.setUserAuthData()

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
    logoutTC

})(HeaderApiContainer)