import React from 'react';
import {connect} from 'react-redux';
import {AppStateType} from '../../Redux/Redux-Store';
import {loginTC} from '../../Redux/authReducer';
import {Redirect} from 'react-router-dom';
import {FormDataType, ReduxLoginForm} from './LoginForm';


type LoginPropsType = {
    isAuth:boolean
    loginTC: (email: string, password: string, rememberMe: boolean, captcha: boolean) => void
}
export const Login:React.FC<LoginPropsType> = (props) => {

    const onSubmit = (formData: FormDataType) => {
        props.loginTC(formData.email,formData.password,formData.rememberMe,true)
        console.log(formData)
    }
    if(props.isAuth){
        return <Redirect to = {'/profile'}/>
    }
    return <>
        <h2>Login</h2>
        <ReduxLoginForm onSubmit={onSubmit}/>
    </>
}
type MapStatePropsType = {
    isAuth:boolean
}
type MapDispatchPropsType = {
    loginTC: (email: string, password: string, rememberMe: boolean, captcha: boolean) => void
}
const MapStateToProps = (state:AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
    }
}
export const LoginByConnect = connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(MapStateToProps, {loginTC})(Login)

