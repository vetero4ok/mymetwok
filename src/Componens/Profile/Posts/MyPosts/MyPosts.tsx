import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './MyPosts.module.css';
import {Posts} from './Post/Posts';
import {MyPostsDataType,} from '../../../../Redux/Store';
import SuperButton from '../../../Common/Button/SuperButton';
import SuperInputText from '../../../Common/SuperInput/SuperInputText';


type propsMyPostType = {
    myPostsData: Array<MyPostsDataType>
    newTextPost: string
    addPostCallback: (newPost: string) => void
    updateNewPostText: (text: string) => void
}


export const MyPosts = (props: propsMyPostType) => {

    const myPostsElements = props.myPostsData.map(p =>
        <Posts
            key={p.id}
            massage={p.massage}
            likesCounts={p.likesCounts}
        />)

    /** addPostCallbackAC створення dispatch обєкту з параметром props.newTextPost */
    const addPostCallback = () => {
        let validatedValue = props.newTextPost.trim()
        if (validatedValue) {
            props.addPostCallback(validatedValue)
        }
        props.updateNewPostText('')

    }
    const onChangeKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            addPostCallback()
        }
    }
    /** Плохой тон писать props.dispatch(updateNewPostTextAC(e.currentTarget.value)) =>
     *  либо через if(e.currentTarget) либо && */
    const updateNewPostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        e.currentTarget &&
        props.updateNewPostText(e.currentTarget.value)
    }


    return (

        <div className={s.posts}>
            <div>
                My posts
            </div>

            <div>
                {/*<SuperInputText*/}
                {/*    */}
                {/*/>*/}
                <textarea
                    value={props.newTextPost}
                    onChange={updateNewPostText}
                    onKeyPress={onChangeKeyPress}

                />
            </div>
            <div>
                <SuperButton onClick={addPostCallback}>send</SuperButton>
            </div>

            <div>
                {myPostsElements}
            </div>

        </div>
    );
}
