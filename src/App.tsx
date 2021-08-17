import React from 'react';
import './App.css';
import {Navbar} from './Componens/Navbar/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';
import {News} from './Componens/News/News';
import {Music} from './Componens/Music/Music';
import {Settings} from './Componens/Settings/Settings';
import {UsersContainer} from './Componens/Users/UsersContainer';
import {ProfileContainer} from './Componens/Profile/ProfileContainer';
import {HeaderContainer} from './Componens/Header/HeaderContainer';
import { DialogsContainer } from './Componens/Dialogs/DialogsContainer';
import {FriendsContainer} from './Componens/Friends/FriendsContainer';
import {Login} from './Componens/Login/Login';





function App() {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer />
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                    <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="/friends" render={() => <FriendsContainer/>}/>
                    <Route path="/login" render={() => <Login/>}/>


                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
