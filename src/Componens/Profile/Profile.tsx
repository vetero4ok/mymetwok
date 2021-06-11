import React from 'react';
import classes from './Profile.module.css';

import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ActionType, RootStateType} from '../../Redux/Store';
import {MyPostsContainer} from './Posts/MyPosts/MyPostsContainer';


type propsProfileType = {
    state: RootStateType
    dispatch: (action: ActionType) => void
}

export const Profile = (props: propsProfileType) => {
    return (
        <div className={classes.content}> Main content
            <ProfileInfo/>
            <MyPostsContainer
                state={props.state}
                dispatch={props.dispatch}

            />
        </div>

    );

}
