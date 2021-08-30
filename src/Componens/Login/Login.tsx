import React from 'react';
import SuperButton from '../Common/Button/SuperButton';
import {reduxForm, Field, InjectedFormProps} from 'redux-form';

export const LoginForm: React.FC<InjectedFormProps> = (props) => {

    return <>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type={"email"} placeholder={'login'} name={'login'} component={'input'}/>
            </div>
            <div>
                <Field type={"Password"} placeholder={'password'} name={'password'} component={'input'}/>
            </div>
            <div>
                <Field type={"checkbox"} name={'rememberMe'} component={'input'}/> Remember me
            </div>
            <div>
                <SuperButton>
                    Submit
                </SuperButton>
            </div>
        </form>
    </>
}

const ReduxLoginForm = reduxForm({form: 'login'})(LoginForm)


type LoginPropsType = {}
export const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: any) => {
        console.log(formData)
    }
    return <>
        <h2>Login</h2>
        <ReduxLoginForm onSubmit={onSubmit}/>
    </>
}