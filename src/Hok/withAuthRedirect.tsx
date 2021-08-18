import React, {ComponentType} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {AppStateType} from '../Redux/Redux-Store';

type MapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {
    const RedirectComponent = (props: MapStateToPropsType) => {
        let {isAuth, ...rest} = props
        if (!isAuth) return <Redirect to={'/login'}/>

        return <Component {...rest as T}/>
    }
    // let ConnectRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    // return ConnectRedirectComponent
    return connect(mapStateToProps)(RedirectComponent)
}