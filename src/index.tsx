import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './Redux/State';


let dialogsData = state.dialogPage.dialogsData
let massagesData = state.dialogPage.massagesData
let myPostsData = state.profilePage.myPostsData
ReactDOM.render(
    <React.StrictMode>
        <App dialogsData={dialogsData}
             massagesData={massagesData}
             myPostsData={myPostsData}
        />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
