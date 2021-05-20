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
import {RootStateType} from './Redux/State';


type propsAppType = {

    state:RootStateType
    addPostCallback: (postMessage: string) => void
    updateNewPostText:(newText: string) =>void
}

function App(props: propsAppType) {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar friendsData={props.state.sidebar.friendsData}/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={() => <Dialogs dialogsData={props.state.dialogPage.dialogsData}
                                                                  massagesData={props.state.dialogPage.massagesData}


                    />}/>
                    <Route path="/profile" render={() => <Profile myPostsData={props.state.profilePage.myPostsData}
                                                                  newTextPost={props.state.profilePage.newTextPost}
                                                                  addPostCallback={props.addPostCallback}
                                                                  updateNewPostText = {props.updateNewPostText}
                    />}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                    <Route path="/friends" render={() => <Friends friendsData={props.state.sidebar.friendsData}/>}/>

                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
