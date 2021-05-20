import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import  {addPostCallback, RootStateType, updateNewPostText} from './Redux/State';

export let renderEntireTree = (state:RootStateType) => {

    ReactDOM.render(
        <React.StrictMode>
            <App
                state={state}
                addPostCallback={addPostCallback}
                updateNewPostText = {updateNewPostText}

        />
        </React.StrictMode>,
        document.getElementById('root')
    );

}