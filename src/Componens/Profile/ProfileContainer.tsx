import React from 'react';
import {Profile} from './Profile';
import {setProfilePage, UserProfileType} from '../../Redux/profilePageReducer';
import {AppStateType} from '../../Redux/Redux-Store';
import {connect} from 'react-redux';
import {RouteComponentProps} from 'react-router';
import {withRouter} from 'react-router-dom';


type PathParamType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamType> & {
    profile: UserProfileType | null
    setProfilePage: (userId: number) => void
    userId: number
    isAuth:boolean
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
                />
            </>
        );
    }
}

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    userId: state.auth.userId,
    isAuth: state.auth.isAuth,
})


let WithUrlDataContainerComponents = withRouter(ProfileApiComponents)


export const ProfileContainer = connect(mapStateToProps, {
     setProfilePage,
})(WithUrlDataContainerComponents)