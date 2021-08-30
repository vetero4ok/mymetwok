import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import SuperButton from '../../../../Common/Button/SuperButton';


export const PostForm: React.FC<InjectedFormProps> = (props) => {
    return <>
        <form onSubmit={props.handleSubmit}>
            <Field name={'newTextPost'} component={'input'} type={'textarea'} placeholder={'Enter your text'}/>
            <SuperButton>send</SuperButton>
        </form>
    </>
}
export const AddPostReduxForm = reduxForm({form: 'AddPostReduxForm'})(PostForm)
