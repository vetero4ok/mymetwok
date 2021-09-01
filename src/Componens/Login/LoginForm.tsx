import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import React from 'react';
import {required} from '../../Utils/Validators/Validators';
import {InputComp} from '../Common/FormsControl/FormsControl';
import SuperButton from '../Common/Button/SuperButton';

export type FormDataType = {
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
export const ReduxLoginForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)