import React from 'react';
import {Profile} from './Profile';
import {getStatusProfileTC, setProfilePage, setStatusProfileTC, UserProfileType} from '../../Redux/profilePageReducer';
import {AppStateType} from '../../Redux/Redux-Store';
import {connect} from 'react-redux';
import {RouteComponentProps} from 'react-router';
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../Hok/withAuthRedirect';
import {compose} from 'redux';


type PathParamType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamType> & {
    profile: UserProfileType | null
    setProfilePage: (userId: number) => void
    getStatusProfileTC:(userId: number) => void
    setStatusProfileTC:(title: string) => void
    userId: number
    profileStatus:string
}

class ProfileApiComponents extends React.Component<PropsType> {
    componentDidMount() {
        //  debugger
        let userId = +this.props.match.params.userId;
        /** Перевірка якщо в аресній строці нема id( undefined | null) то id беремо з authReducer і добавляємо до
         * профайла в кінець адресної строки, а  в PathParamType  userId: string тому неявно переводимо строку в число*/
        if (!userId) {
            userId = this.props.userId
        }
        this.props.setProfilePage(userId)
        this.props.getStatusProfileTC(userId)


    }

    // componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
    //
    //     let userId = +this.props.match.params.userId;
    //     if (!userId) {
    //         userId = this.props.userId
    //     }
    //     this.props.setProfilePage(userId)
    // }

    render() {
        return (
            <>
                <Profile
                    {...this.props}
                    profile={this.props.profile}
                    profileStatus = {this.props.profileStatus}

                />
            </>
        );
    }
}

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    userId: state.auth.userId,
    profileStatus: state.profilePage.profileStatus,
})

export const ProfileContainer = compose<React.ComponentType>(
    connect(mapStateToProps,
        {setProfilePage, getStatusProfileTC, setStatusProfileTC}),
    withRouter,
    withAuthRedirect)
(ProfileApiComponents)
