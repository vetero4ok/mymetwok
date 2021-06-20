import {addPostCallbackAC, updateNewPostTextAC} from '../../../../Redux/profilePageReducer';
import {MyPosts} from './MyPosts';
import {AppDispatch, AppStateType} from '../../../../Redux/Redux-Store';
import {connect} from 'react-redux';


    let mapStateToProps = (state: AppStateType) => {
        return {
            myPostsData: state.profilePage.myPostsData,
            newTextPost: state.profilePage.newTextPost
        }
    }

    let mapDispatchToProps = (dispatch: AppDispatch) => {
        return {
            updateNewPostText: (text: string) => {
                dispatch(updateNewPostTextAC(text))
            },
            addPostCallback: (newPost: string) => {
                dispatch(addPostCallbackAC(newPost))
            }
        }

    }
export  const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
