import React from 'react';
import './App.css';
import {Header} from './Componens/Header/Header';
import {Navbar} from './Componens/Navbar/Navbar';
import {Profile} from './Componens/Profile/Profile';
import {Dialogs} from './Componens/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {News} from './Componens/News/News';
import {Music} from './Componens/Music/Music';
import {Settings} from './Componens/Settings/Settings';
import {Friends} from './Componens/Friends/Friends';
import {DialogsDataType, FriendType, MassagesDataType, MyPostsDataType} from './Redux/State';


type propsAppType = {
    dialogsData: Array<DialogsDataType>
    massagesData: Array<MassagesDataType>
    myPostsData: Array<MyPostsDataType>
    friendsData:Array<FriendType>

}

function App(props: propsAppType) {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar friendsData={props.friendsData}/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={() => <Dialogs dialogsData={props.dialogsData}
                                                                  massagesData={props.massagesData}/>}/>
                    <Route path="/profile" render={() => <Profile myPostsData={props.myPostsData}/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                    <Route path="/friends" render={() => <Friends  friendsData={props.friendsData} />}/>

                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
