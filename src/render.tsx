import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import state, {addPost, RootStateType} from './Redux/State';

export let renderEntireTree = (state:RootStateType) => {

    ReactDOM.render(
        <React.StrictMode>
            <App

                addPost={addPost}
                state={state}

            />
        </React.StrictMode>,
        document.getElementById('root')
    );

}