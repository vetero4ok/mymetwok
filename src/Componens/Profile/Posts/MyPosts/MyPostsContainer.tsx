import {addPostCallbackAC} from '../../../../Redux/profilePageReducer';
import {MyPosts} from './MyPosts';
import {AppDispatch, AppStateType} from '../../../../Redux/Redux-Store';
import {connect} from 'react-redux';


let mapStateToProps = (state: AppStateType) => {
    return {
        myPostsData: state.profilePage.myPostsData,
    }
}

let mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        addPostCallback: (newPost: string) => {
            dispatch(addPostCallbackAC(newPost))
        }
    }

}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
