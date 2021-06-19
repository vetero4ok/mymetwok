import React from 'react';
import s from './Profile.module.css';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './Posts/MyPosts/MyPostsContainer';
import StoreContext from '../../StoreContext';



type propsProfileType = {
    // state: RootStateType
    // dispatch: (action: ActionType) => void
}

export const Profile = (props: propsProfileType) => {
    return (
        <div className={s.content}> Main content
            <ProfileInfo/>

            <StoreContext.Consumer>
                {store =>
                    <MyPostsContainer
                        store={store}
                    />}
            </StoreContext.Consumer>


        </div>

    );
}
