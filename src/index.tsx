import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state, { Subscribe } from './Redux/State';
import ReactDOM from 'react-dom';
import App from './App';
import  {addPostCallback,  updateNewPostText} from './Redux/State';

export let renderEntireTree = () => {

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

renderEntireTree();
Subscribe(renderEntireTree)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
