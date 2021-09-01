import React from 'react';
import SuperButton from '../Common/Button/SuperButton';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {InputComp} from '../Common/FormsControl/FormsControl';
import {required} from '../../Utils/Validators/Validators';
import {connect} from 'react-redux';
import {AppStateType} from '../../Redux/Redux-Store';
import {loginTC} from '../../Redux/authReducer';
import {Redirect} from 'react-router-dom';

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}
export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return <>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type={'email'}
                       validate={[required]}
                       placeholder={'login'}
                       name={'email'}
                       component={InputComp}/>
            </div>
            <div>
                <Field type={'Password'}
                       validate={[required]}
                       placeholder={'password'}
                       name={'password'}
                       component={InputComp}/>
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={'input'}/> Remember me
            </div>
            <div>
                <SuperButton>
                    Submit
                </SuperButton>
            </div>
        </form>
    </>
}

const ReduxLoginForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

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