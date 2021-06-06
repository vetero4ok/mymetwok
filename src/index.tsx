import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import App from './App';
import {store} from './Redux/State';


export const renderEntireTree = () => {

    ReactDOM.render(
        <React.StrictMode>
            <App
                state={store.getState()}
                addPostCallback={store.addPostCallback.bind(store)}
                updateNewPostText = {store.updateNewPostText.bind(store)}

            />
        </React.StrictMode>,
        document.getElementById('root')
    );

}


store.Subscribe(renderEntireTree);
renderEntireTree();





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
