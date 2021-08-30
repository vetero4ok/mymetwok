import React from 'react';
import SuperButton from '../../Common/Button/SuperButton';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

const addMessageForm: React.FC<InjectedFormProps> = (props) => {
    return <>
        <form onSubmit={props.handleSubmit}>
            <Field type={'textarea'} placeholder={'Enter your message'} name={'updateNewMessageText'}
                   component={'input'}/>
            <SuperButton> send</SuperButton>
        </form>
    </>
}
export const AddMessageReduxForm = reduxForm({form: 'updateNewMessageText'})(addMessageForm)