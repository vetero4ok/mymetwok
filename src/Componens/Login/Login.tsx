import React from 'react';
import SuperButton from '../Common/Button/SuperButton';
import {reduxForm, Field, InjectedFormProps} from 'redux-form';
import {InputComp} from '../Common/FormsControl/FormsControl';
import {required} from '../../Utils/Validators/Validators';

type FormDataType = {
    login:string
    password:string
    rememberMe:boolean
}
export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return <>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type={"email"}
                       validate={[required]}
                       placeholder={'login'}
                       name={'login'}
                       component={InputComp}/>
            </div>
            <div>
                <Field type={"Password"}
                       validate={[required]}
                       placeholder={'password'}
                       name={'password'}
                       component={InputComp}/>
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

const ReduxLoginForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)


export const Login = ( ) => {
    const onSubmit = (formData:FormDataType ) => {

        console.log(formData)
    }
    return <>
        <h2>Login</h2>
        <ReduxLoginForm onSubmit={onSubmit}/>
    </>
}